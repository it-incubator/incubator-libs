import { AppConfigService } from './config'
import { Inject, Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import * as client from 'prom-client'

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  private readonly httpRequestDurationMicroseconds: client.Histogram<string>

  constructor(@Inject(AppConfigService) private readonly configService: AppConfigService) {
    this.httpRequestDurationMicroseconds = new client.Histogram({
      buckets: [0.1, 0.5, 1, 2, 5, 10],
      help: 'Duration of HTTP requests in seconds',
      labelNames: ['method', 'route', 'status_code', 'app'],
      name: 'http_request_duration_seconds',
    })

    client.register.setDefaultLabels({
      app: this.configService.appName,
    })

    client.collectDefaultMetrics()
  }

  use(req: Request, res: Response, next: NextFunction) {
    const end = this.httpRequestDurationMicroseconds.startTimer()

    res.on('finish', () => {
      end({
        app: this.configService.appName,
        method: req.method,
        route: req.route ? req.route.path : req.path,
        status_code: res.statusCode,
      })
    })

    next()
  }
}
