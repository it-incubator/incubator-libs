import axios from 'axios'

class StorageService {
  constructor(baseURL: string, headers: ) {
    this.http = axios.create({
      baseURL,
      headers,
    })
  }

  async create(dto) {
    if (dto.file.base64) {
      const { data } = await this.http.post('/files/base64', dto)

      return data
    }
    if (dto.file.buffer) {
      const { data } = await this.http.post('/files', dto)

      return data
    }
  }

  async deleteById(id) {
    const { data } = await this.http.delete(`/files/${id}`)

    return data
  }

  async getById(id) {
    const { data } = await this.http.get(`/files/${id}`)

    return data
  }

  async updateById(id, dto) {
    const { data } = await this.http.put(`/files/${id}`, dto)

    return data
  }
}

module.exports = StorageService
