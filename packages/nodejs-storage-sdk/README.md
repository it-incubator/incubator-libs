# @it-incubator/nodejs-storage-sdk

## Install

```
npm install @it-incubator/nodejs-storage-sdk

yarn add @it-incubator/nodejs-storage-sdk

pnpm i @it-incubator/nodejs-storage-sdk
```
## Usage

#### NodeJS service create 

Basic service config NodeJS:

```typescript
import { StorageService } from '@it-incubator/nodejs-storage-sdk';

const storageService = NodejsStorageService.register({
    baseURL: 'https://storage-service-url',
    headers: {
        'service-token': 'your-token'
    }
})

```
```typescript
import { StorageService, CreateFileDto, File } from '@it-incubator/nodejs-storage-sdk';

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
