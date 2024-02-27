# @it-incubator/nodejs-storage-sdk

## Install

```
npm install @it-incubator/storage-sdk

yarn add @it-incubator/storage-sdk

pnpm i @it-incubator/storage-sdk
```
## Usage

#### NodeJS service create 

Basic service config NodeJS:

```typescript
import { NodejsStorageService } from '@it-incubator/nodejs-storage-sdk';

const storageService = NodejsStorageService.register({
    baseURL: 'https://storage-service-url',
    headers: {
        'service-token': 'your-token'
    }
})

```
