import { LoggerFactory } from './logger.factory'
import { Injectable } from '@nestjs/common'

@Injectable()
export class LoggerService {
  createLogger(context: string) {
    return LoggerFactory.createLogger(context)
  }
}
