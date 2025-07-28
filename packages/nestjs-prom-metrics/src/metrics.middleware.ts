import { AppConfigService } from './config'
import { Inject, Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import * as client from 'prom-client'

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  private readonly httpRequestDurationMicroseconds: client.Histogram<string>
  private readonly httpRequestCounter: client.Counter<string>
  private readonly responseTimeHistogram: client.Histogram<string>

  constructor(@Inject(AppConfigService) private readonly configService: AppConfigService) {

    const httpRequestCounter = new client.Counter({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'route', 'status_code', 'app'], // Add labels for method, route, and status
    })

    const httpRequestDurationMicroseconds = new client.Histogram({
      buckets: [0.1, 0.5, 1, 2, 5, 10],
      help: 'Duration of HTTP requests in seconds',
      labelNames: ['method', 'route', 'status_code', 'app'],
      name: 'http_request_duration_seconds',
    })

    const responseTimeHistogram = new client.Histogram({
      name: 'http_response_time_seconds',
      help: 'HTTP response time in seconds',
      labelNames: ['method', 'route', 'status_code', 'app'],
      buckets: [0.1, 0.5, 1, 2, 5], // Response time buckets
    })
    client.register.registerMetric(responseTimeHistogram)
    client.register.registerMetric(httpRequestDurationMicroseconds)
    client.register.registerMetric(httpRequestCounter)

    client.register.setDefaultLabels({
      app: this.configService.appName,
    })
    client.collectDefaultMetrics()
    this.httpRequestDurationMicroseconds = httpRequestDurationMicroseconds
    this.httpRequestCounter = httpRequestCounter
    this.responseTimeHistogram = responseTimeHistogram
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const endRequestDuration = this.httpRequestDurationMicroseconds.startTimer()
    const endResponseTimer = this.responseTimeHistogram.startTimer()
    const status = String(res.statusCode)
    res.on('finish', () => {
      const routePath = req.route ? req.route.path : req.path
      this.httpRequestCounter.inc({
        method: req.method,
        route: routePath,
        status_code: status,
      })
      endRequestDuration({
        app: this.configService.appName,
        method: req.method,
        route: routePath,
        status_code: status,
      })
      endResponseTimer({
        app: this.configService.appName,
        method: req.method,
        route: routePath,
        status_code: status,
      })
    })
    next()
  }
}
