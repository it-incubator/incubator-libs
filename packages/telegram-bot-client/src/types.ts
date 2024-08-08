export type BodyType = {
  autoRemoveAfterSeconds: number
  bodyType: MessageBodyTypes
  message: string
  messengerUserId: number
}
export enum MessageBodyTypes {
  Html = 2,
  MarkUp2 = 1,
  PlainText = 0,
}
export interface IMessage {
  // // 0 - message will not be deleted
  autoRemoveAfterSeconds: number
  // different supported by telegram type of markup (see telegram bot api doc
  bodyType: MessageBodyTypes
  // if we want add special keyboard
  // markup?: InlineKeyboardType | KeyboardType | null;
  // // if want specify processor that should be activated for this message
  // messageType?: MessageTypes | null;
  // text of message
  message: string
  // recipient telegram id
  messengerUserId: number
}

export class Result<T = null> {
  constructor(
    public resultCode: ResultCode,
    public messages: string[],
    public errors: ErrorMessage[],
    public data?: T
  ) {}
}
export enum ResultCode {
  Error = 1,
  Success = 0,
}
export class ErrorMessage {
  constructor(readonly message: string, readonly field: null | string = null) {}
}
