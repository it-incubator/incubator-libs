import { CreateFileDto, File } from './dtos'
import { CreateFileOperationResponse, GetFileResponse } from './responses'
import { BaseOperationApiResponse } from './types'
import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios'

export type StorageModuleOptions = {
  baseURL: string
  headers: {
    'service-token': string
  }
} & CreateAxiosDefaults
export class StorageService {
  constructor(private readonly httpService: AxiosInstance) {}

  static register(config: StorageModuleOptions): StorageService {
    const httpModuleOptions: StorageModuleOptions = {
      ...config,
      baseURL: config.baseURL,
      headers: config.headers,
    }

    return new StorageService(axios.create(httpModuleOptions))
  }
  async create(dto: CreateFileDto): Promise<CreateFileOperationResponse> {
    if (dto.file.base64) {
      const { data } = await this.httpService.post('/files/base64', dto)

      return data
    }
    if (dto.file.buffer) {
      const { data } = await this.httpService.post('/files', dto)

      return data
    }
  }

  async deleteById(id: string): Promise<BaseOperationApiResponse> {
    const { data } = await this.httpService.delete(`/files/${id}`)

    return data
  }

  async getById(id: string): Promise<GetFileResponse> {
    const { data } = await this.httpService.get(`/files/${id}`)

    return data
  }

  async updateById(id: string, dto: File): Promise<GetFileResponse> {
    const { data } = await this.httpService.put(`/files/${id}`, dto)

    return data
  }
}
