import { MyCustomLogger } from './logger'
import { LoggerService } from './logger.service'
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class LoggerInterceptor<T> implements NestInterceptor<T, T> {
  private logger: MyCustomLogger

  constructor(private loggerService: LoggerService) {
    this.logger = this.loggerService.createLogger(LoggerInterceptor.name)
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
    const httpContext = context.switchToHttp()
    const request = httpContext.getRequest()
    const response = httpContext.getResponse()
    const controllerName = context.getClass().name
    const handlerName = context.getHandler().name

    this.logger.setContext(controllerName)
    this.logger.trace(`Handling`, {
      handler: handlerName,
      method: request.method,
      path: request.path,
      statusCode: response.statusCode,
    })

    return next.handle()
  }
}
