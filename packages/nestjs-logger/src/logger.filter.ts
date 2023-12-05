import { MyCustomLogger } from './logger'
import { LoggerService } from './logger.service'
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'

@Catch(HttpException)
export class HttpErrorLoggerFilter implements ExceptionFilter {
  private logger: MyCustomLogger

  constructor(private loggerService: LoggerService) {
    this.logger = this.loggerService.createLogger(HttpErrorLoggerFilter.name)
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()
    const status = exception.getStatus()

    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(`Internal Server Error`, {
        fields: {
          message: exception.getResponse(),
        },
        method: request.method,
        path: request.url,
        statusCode: status,
      })
    }

    response.status(status).json({
      method: request.method,
      path: request.url,
      statusCode: status,
      timestamp: new Date().toISOString(),
    })
  }
}
