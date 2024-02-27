# @it-incubator/storage-sdk

## Install

```
npm install @it-incubator/storage-sdk

yarn add @it-incubator/storage-sdk

pnpm i @it-incubator/storage-sdk
```
## Usage


```javascript
import { StorageModule } from '@it-incubator/storage-sdk'
```

#### NestJS module create

Basic module config NestJS:

```typescript
import { Global, Module } from '@nestjs/common';
import { StorageModule } from '@it-incubator/storage-sdk';

@Global()
@Module({
  imports: [
      StorageModule.register({
          baseURL: 'https://storage-service-url',
          headers: {
              'service-token': 'your-token'
          }
      })
  ]
})
export class MyModule {}
```

StorageService use NestJS

```typescript
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { StorageService, CreateFileDto, File } from '@it-incubator/storage-sdk';

@Injectable()
export class MyService {
    constructor(private readonly storageService: StorageService) {}
    
    async create(dto: CreateFileDto) {
        this.storageService.create(dto)
    }

    async delete(id: string) {
        this.storageService.deleteById(id)
    }

    async update(id: string, dto: File) {
        this.storageService.updateById(id, dto)
    }

    async getFile(id: string) {
        this.storageService.getById(id)
    }
}

```
