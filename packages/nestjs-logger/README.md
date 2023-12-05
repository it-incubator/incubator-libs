# @it-incubator/nestjs-logger

## Install

```
npm install @it-incubator/nestjs-logger

yarn add @it-incubator/nestjs-logger

pnpm i @it-incubator/nestjs-logger
```
## Usage


```javascript
import { MyCustomLogger } from '@it-incubator/nestjs-logger'
```

#### NestJS module create

Basic module config (default level log "**trace**"):

```typescript
import { Global, Module } from '@nestjs/common';
import { LoggerFactory, LoggerService } from '@it-incubator/nestjs-logger';

@Global()
@Module({
    providers: [
        LoggerService,
        {
            provide: 'LoggerFactory',
            useFactory: () => {
                const logger = LoggerFactory.logger;
                logger.level = process.env.LOGER_LEVEL || 'trace';
            },
        },
    ],
    exports: [LoggerService],
})
export class LoggingModule {}
```

Add new transport (default transport console)

```typescript
@Global()
@Module({
    providers: [
        LoggerService,
        {
            provide: 'LoggerFactory',
            useFactory: () => {
                const logger = LoggerFactory.logger;
                logger.level = process.env.LOGER_LEVEL || 'trace';
                const transports = LoggerFactory.transports;
                const newTransport = new transports.Http({
                    //configure options
                });
                logger.add(newTransport);
            },
        },
    ],
    exports: [LoggerService],
})
export class LoggingModule {}
```

Disable default transport

```typescript
@Global()
@Module({
    providers: [
        LoggerService,
        {
            provide: 'LoggerFactory',
            useFactory: () => {
                const logger = LoggerFactory.logger;
                logger.level = process.env.LOGER_LEVEL || 'trace'; 
                LoggerFactory.disableDefaultTransport();
            },
        },
    ],
    exports: [LoggerService],
})
export class LoggingModule {}
```

Use logger
```typescript
import { Injectable } from '@nestjs/common';
import { LoggerService, MyCustomLogger } from '@it-incubator/nestjs-logger';

@Injectable()
export class Service {
    private logger: MyCustomLogger;
    
    constructor( private loggerService: LoggerService ) {
        this.logger = this.loggerService.createLogger(Service.name);
    }
}
```
Use interceptor controller methods trace by logged input and output trace log every controller method
```typescript
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggerFactory, LoggingInterceptor } from '@it-incubator/nestjs-logger';

@Controller('')
@UseInterceptors( new LoggingInterceptor(LoggerFactory.createLogger(ReferalController.name)) )
export class ReferalController {
    constructor() {}
    
    @Get()
    someMethod() {
        //logic
    }
}


```
