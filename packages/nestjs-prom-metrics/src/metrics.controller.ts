import { Get, Res } from '@nestjs/common'
import {register} from 'prom-client'
import { Response } from 'express'

export class MetricsController {
  @Get()
  async getMetrics(@Res() res: Response) {
    res.setHeader('Content-Type', register.contentType)
    res.send(await register.metrics())
  }
}
