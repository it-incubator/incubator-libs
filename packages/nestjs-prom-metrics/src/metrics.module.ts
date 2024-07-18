import { AppConfigService } from './config'
import { MetricsMiddleware } from './metrics.middleware'
import { DynamicModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common'

@Module({})
export class MetricsModule implements NestModule {
  constructor(private readonly metricsMiddleware: MetricsMiddleware) {}

  static register(appName: string): DynamicModule {
    return {
      exports: [AppConfigService],
      module: MetricsModule,
      providers: [
        {
          provide: AppConfigService,
          useValue: new AppConfigService(appName),
        },
        MetricsMiddleware,
      ],
    }
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(this.metricsMiddleware.use.bind(this.metricsMiddleware)).forRoutes('*')
  }
}
