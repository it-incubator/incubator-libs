import { StorageService } from './storage-sdk.service'
import { HttpModule } from '@nestjs/axios'
import { DynamicModule, Global, Module } from '@nestjs/common'
import { CreateAxiosDefaults } from 'axios/index'

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
}
