export type BodyType = {
    message: string,
    messengerUserId: number
    autoRemoveAfterSeconds: number,
    bodyType: MessageBodyTypes,
}
export enum MessageBodyTypes {
    PlainText = 0,
    MarkUp2 = 1,
    Html = 2
}
export interface IMessage {
    // text of message
    message: string;
    // recipient telegram id
    messengerUserId: number;
    // if we want add special keyboard
    // markup?: InlineKeyboardType | KeyboardType | null;
    // // if want specify processor that should be activated for this message
    // messageType?: MessageTypes | null;
    // // 0 - message will not be deleted
    autoRemoveAfterSeconds: number;
    // different supported by telegram type of markup (see telegram bot api doc
    bodyType: MessageBodyTypes;
}



export class Result<T = null> {
    constructor(
        public resultCode: ResultCode,
        public messages: string[],
        public errors: ErrorMessage[],
        public data?: T,
    ) {}
}
export enum ResultCode {
    Success = 0,
    Error = 1,
}
export class ErrorMessage {
    constructor(readonly message: string, readonly field: string | null = null) {}
}