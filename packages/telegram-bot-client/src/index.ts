import { BodyType } from './types'
import axios, { AxiosInstance } from 'axios'
export * from './types'

export interface IServiceConfig {
  baseUrl: string
  friendsToken: string
}

export class BotService {
  axiosInstance: AxiosInstance = axios
  constructor(private settings: IServiceConfig) {
    this.axiosInstance = axios.create({
      baseURL: this.settings.baseUrl,
      headers: {
        'friend-token': this.settings.friendsToken,
      },
    })
  }

  async sendMessage(body: Array<BodyType>): Promise<string> {
    return this.axiosInstance.post(`/users/sendMessage`, body).then(r => r.data)
  }
}
