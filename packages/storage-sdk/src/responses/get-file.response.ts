import { FileType } from '../dtos'

export class GetFileResponse {
  readonly createdAt: Date
  readonly id: string
  readonly name: string
  readonly path: string
  readonly serviceName: string
  readonly size: number
  readonly type: FileType
  readonly updatedAt: Date
  readonly url: string
}
