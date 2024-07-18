import { Injectable } from '@nestjs/common'

@Injectable()
export class AppConfigService {
  constructor(public readonly appName: string) {}
}
