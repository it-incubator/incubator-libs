export enum FileType {
  Archive = 'Archive',
  Doc = 'Doc',
  Image = 'Image',
  Pdf = 'Pdf',
  Video = 'Video',
}
export class File {
  base64?: string
  buffer?: string
  originalname: string
  size: number
}

export class CreateFileDto {
  downloadable?: boolean
  file: File
  fileType: FileType
}
