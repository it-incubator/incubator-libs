import {Get} from '@nestjs/common'
import {register} from 'prom-client'

export class MetricsController {
  @Get()
  async getMetrics() {
    return register.metrics();
  }
}
