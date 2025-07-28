import { AppConfigService } from './config'
import { Inject, Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import * as client from 'prom-client'

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  private readonly httpRequestDurationMicroseconds: client.Histogram<string>
  private readonly httpRequestCounter: client.Counter<string>

  constructor(@Inject(AppConfigService) private readonly configService: AppConfigService) {

    const register = new client.Registry()
    client.collectDefaultMetrics({
      register,
    })

    const httpRequestCounter = new client.Counter({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'route', 'status'], // Add labels for method, route, and status
    })


    register.registerMetric(httpRequestCounter)

    const httpRequestDurationMicroseconds = new client.Histogram({
      buckets: [0.1, 0.5, 1, 2, 5, 10],
      help: 'Duration of HTTP requests in seconds',
      labelNames: ['method', 'route', 'status_code', 'app'],
      name: 'http_request_duration_seconds',
    })

    const responseTimeHistogram = new client.Histogram({
      name: 'http_response_time_seconds',
      help: 'HTTP response time in seconds',
      labelNames: ['method', 'route', 'status'],
      buckets: [0.1, 0.5, 1, 2, 5], // Response time buckets
    })
    register.registerMetric(responseTimeHistogram)
    register.registerMetric(httpRequestDurationMicroseconds)

    register.setDefaultLabels({
      app: this.configService.appName,
    })
    this.httpRequestDurationMicroseconds = responseTimeHistogram
    this.httpRequestCounter = httpRequestCounter
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const end = this.httpRequestDurationMicroseconds.startTimer()
    res.on('finish', () => {
      const routePath = req.route ? req.route.path : req.path
      this.httpRequestCounter.inc({
        method: req.method,
        route: routePath,
        status: res.statusCode,
      })
      end({
        app: this.configService.appName,
        method: req.method,
        route: routePath,
        status_code: res.statusCode,
      })
    })
    next()
  }
}
