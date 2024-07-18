# @it-incubator/nestjs-logger

## Install

```
npm install @it-incubator/nestjs-prom-metrics

yarn add @it-incubator/nestjs-prom-metrics

pnpm add @it-incubator/nestjs-prom-metrics
```
## Usage


```javascript
import { MetricsModule } from '@it-incubator/nestjs-prom-metrics';
```

#### NestJS module create

```typescript
import { Module } from '@nestjs/common';
import { MetricsModule } from '@it-incubator/nestjs-prom-metrics';

@Module({
    imports: [
        MetricsModule.register('you_app_name'),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
```

