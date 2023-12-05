import { MyCustomLogger } from './logger'
import * as winston from 'winston'
import { Logger } from 'winston'
const { colorize, combine, errors, prettyPrint, timestamp } = winston.format

winston.addColors({
  debug: 'green',
  error: 'red',
  fatal: 'bold red',
  info: 'bold blue',
  trace: 'white',
  warn: 'italic yellow',
})
const customLevels = {
  levels: {
    debug: 4,
    error: 1,
    fatal: 0,
    info: 3,
    trace: 5,
    warn: 2,
  },
}

export class LoggerFactory {
  private static defaultTransport = new winston.transports.Console({
    format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      prettyPrint(),
      colorize({ all: true })
    ),
  })
  private static winstonLogger: Logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp({ format: new Date().toISOString() }),
      winston.format.json()
    ),
    level: 'trace',
    levels: customLevels.levels,
    transports: [this.defaultTransport],
  })

  static createLogger(context: string): MyCustomLogger {
    return new MyCustomLogger(LoggerFactory.winstonLogger, context)
  }

  static disableDefaultTransport() {
    LoggerFactory.winstonLogger.remove(this.defaultTransport)
  }

  static get logger() {
    return this.winstonLogger
  }
  static get transports() {
    return winston.transports
  }
}
