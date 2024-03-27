import { StorageService } from './storage-sdk.service'
import { HttpModule, HttpModuleAsyncOptions } from '@nestjs/axios'
import { DynamicModule, Global, Module, Provider } from '@nestjs/common'
import { CreateAxiosDefaults } from 'axios'

export type StorageModuleOptions = {
  baseURL: string
  headers: {
    'service-token': string
  }
}

@Global()
@Module({})
export class StorageModule {
  static register(config: StorageModuleOptions & CreateAxiosDefaults): DynamicModule {
    const httpModuleOptions: StorageModuleOptions = {
      ...config,
      baseURL: config.baseURL,
      headers: config.headers,
    }

    return {
      exports: [StorageService],
      imports: [HttpModule.register(httpModuleOptions)],
      module: StorageModule,
      providers: [StorageService],
    }
  }

  static registerAsync(options: HttpModuleAsyncOptions): DynamicModule {
    return {
      exports: [StorageService],
      imports: [HttpModule.registerAsync(options)],
      module: StorageModule,
      providers: [StorageService, ...this.createAsyncProviders(options)],
    }
  }

  private static createAsyncOptionsProvider(options: HttpModuleAsyncOptions): Provider {
    if (options.useFactory) {
      return {
        inject: options.inject || [],
        provide: 'IT_INCUBATOR_STORAGE_MODULE_OPTIONS', // Это должно быть уникальным токеном
        useFactory: options.useFactory,
      }
    }

    // для useExisting или useClass
    return {
      provide: 'IT_INCUBATOR_STORAGE_MODULE_OPTIONS',
      useExisting: options.useExisting || options.useClass,
    }
  }
  private static createAsyncProviders(options: HttpModuleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)]
    }

    // Для useClass вы должны создать провайдера, который инстанциирует класс
    return [
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
      this.createAsyncOptionsProvider(options),
    ]
  }
}
