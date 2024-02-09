import { CreateFileDto, File } from './dtos'
import { CreateFileOperationResponse, GetFileResponse } from './responses'
import { BaseOperationApiResponse } from './types'
import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class StorageService {
  constructor(private readonly httpService: HttpService) {}

  async create(dto: CreateFileDto): Promise<CreateFileOperationResponse> {
    if (dto.file.base64) {
      const { data } = await lastValueFrom(this.httpService.post('/files/base64', dto))

      return data
    }
    if (dto.file.buffer) {
      const { data } = await lastValueFrom(this.httpService.post('/files', dto))

      return data
    }
  }

  async deleteById(id: string): Promise<BaseOperationApiResponse> {
    const { data } = await lastValueFrom(this.httpService.delete(`/files/${id}`))

    return data
  }

  async getById(id: string): Promise<GetFileResponse> {
    const { data } = await lastValueFrom(this.httpService.get(`/files/${id}`))

    return data
  }

  async updateById(id: string, dto: File): Promise<GetFileResponse> {
    const { data } = await lastValueFrom(this.httpService.put(`/files/${id}`, dto))

    return data
  }
}
