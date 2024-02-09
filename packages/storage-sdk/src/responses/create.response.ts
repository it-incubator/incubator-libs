import { BaseOperationApiResponse } from '../types'

export class FileApiEntity {
  readonly createdAt: Date
  readonly id: string
  readonly name: string
  readonly path: string
  readonly size: number
  readonly updatedAt: Date
  readonly url: string
}

export class CreateFileOperationResponse extends BaseOperationApiResponse<FileApiEntity> {
  data: FileApiEntity
}
