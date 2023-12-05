import { Logger } from 'winston'

type LogType = 'debug' | 'error' | 'fatal' | 'info' | 'trace' | 'warn'

export class MetaLoggerType {
  /**  any object details for logs. **/
  fields?: any
  /**  function name. **/
  handler?: string
  /**  rest api method. **/
  method?: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'
  /**  RestApi endpoint url. **/
  path?: string
  /**  uuid operation. **/
  requestId?: string
  /**  https status code or custom status code type number. **/
  statusCode?: number
  /**  operation type example: RestAPI request, RabbitMQ, Database. **/
  type?: 'DATABASE' | 'RABBIT_MQ' | 'REST_API'
}

export class BaseMetaType extends MetaLoggerType {
  /**  time for create logs. **/
  '@timestamp'?: string
  /**  context name example: ControllerName, ServiceName, RepositoryName **/
  context?: string
}

export class MyCustomLogger {
  constructor(
    public logger: Logger,
    private context: string
  ) {}

  private getMethod(type: LogType) {
    const methods = {
      debug: this.logger.debug,
      error: this.logger.error,
      info: this.logger.info,
      warn: this.logger.warn,
    }

    const method = methods[type]

    if (method) {
      return method
    } else {
      return methods['info']
    }
  }

  private logging(type: LogType, msg: string, meta: BaseMetaType) {
    const method = this.getMethod(type)

    meta.context = this.context
    meta['@timestamp'] = new Date().toISOString()
    switch (type) {
      case 'fatal':
      case 'trace': {
        return this.logger.log(type, msg, meta)
      }
      default: {
        return method(msg, meta)
      }
    }
  }

  debug(msg: string, meta: MetaLoggerType) {
    this.logging('debug', msg, meta)
  }

  error(msg: string, meta: MetaLoggerType) {
    this.logging('error', msg, meta)
  }

  fatal(msg: string, meta: MetaLoggerType) {
    this.logging('fatal', msg, meta)
  }

  info(msg: string, meta: MetaLoggerType) {
    this.logging('info', msg, meta)
  }

  public setContext(context: string) {
    this.context = context
  }

  trace(msg: string, meta: MetaLoggerType) {
    this.logging('trace', msg, meta)
  }

  warn(msg: string, meta: MetaLoggerType) {
    this.logging('warn', msg, meta)
  }
}
