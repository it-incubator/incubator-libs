# @it-incubator/nestjs-logger

## Install

```
npm install @it-incubator/nestjs-prom-metrics

yarn add @it-incubator/nestjs-prom-metrics

pnpm i @it-incubator/nestjs-prom-metrics
```
## Usage


```javascript
import { MetricsModule } from '@it-incubator/nestjs-prom-metrics';
```

#### NestJS module create

Basic module config (default level log "**trace**"):

```typescript
import { Module } from '@nestjs/common';
import { MetricsModule } from '@it-incubator/nestjs-prom-metrics';

@Module({
    imports: [
        MetricsModule.register('sandbox-core-api'),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
```

