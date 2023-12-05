import { MyCustomLogger } from './logger'
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: MyCustomLogger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now()
    const handlerName = context.getHandler().name

    this.logger.trace(`Entering ${handlerName}`, {
      handler: handlerName,
    })

    return next.handle().pipe(
      tap(() =>
        this.logger.trace(`Exiting ${handlerName} after ${Date.now() - now}ms`, {
          handler: handlerName,
        })
      )
    )
  }
}
