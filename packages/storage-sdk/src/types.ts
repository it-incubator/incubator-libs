export enum ResultCode {
  Error = 1,
  Success = 0,
}

export class Result<T> {
  constructor(
    private resultCode: ResultCode,
    private messages: string[],
    private data?: T
  ) {}
}

export abstract class BaseOperationApiResponse<T = null> {
  public messages: string[]
  public resultCode: ResultCode
  abstract get data(): T
}
