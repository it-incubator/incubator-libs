import { StorageService } from './storage-sdk.service'
import { HttpModule, HttpModuleOptions } from '@nestjs/axios'
import { DynamicModule, Global, Module } from '@nestjs/common'

export type StorageModuleOptions = {
  baseURL: string
  headers: {
    token: string
  }
} & HttpModuleOptions

@Global()
@Module({})
export class StorageModule {
  static register(config: StorageModuleOptions): DynamicModule {
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
