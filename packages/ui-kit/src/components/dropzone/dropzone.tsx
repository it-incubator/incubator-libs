import { ReactNode } from 'react'

import ReactDropzone, {
  FileRejection,
  type DropzoneProps as ReactDropzoneProps,
} from 'react-dropzone'

import { CloudUpload } from '../../assets/icons'
import { Typography } from '../typography'

import s from './dropzone.module.scss'

export interface FileWithPreview extends File {
  preview: string
}

export type DropzoneProps = {
  onDrop: (files: Array<FileWithPreview | File>, fileRejections: FileRejection[]) => void
  dragActiveInfo?: ReactNode
  dragNotActiveInfo?: ReactNode
  additionalInfo?: ReactNode
} & Omit<ReactDropzoneProps, 'onDrop'>

export const Dropzone = ({
  onDrop,
  dragActiveInfo,
  dragNotActiveInfo,
  additionalInfo,
  ...rest
}: DropzoneProps) => {
  const handleDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    onDrop(
      acceptedFiles.map(file => {
        if (!file.type.startsWith('image/')) return file

        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      }),
      fileRejections
    )
  }

  return (
    <ReactDropzone onDrop={handleDrop} {...rest}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className={s.root}>
          <input {...getInputProps()} />
          <CloudUpload size={72} />
          {isDragActive
            ? dragActiveInfo ?? <p>Перетащите файлы сюда...</p>
            : dragNotActiveInfo ?? (
                <>
                  <Typography.Body2 mt={'3px'}>
                    Перетащите файлы или{' '}
                    <Typography.Link component={'span'}>выберите</Typography.Link> на компьютере.
                  </Typography.Body2>
                  {additionalInfo ?? (
                    <Typography.Caption mt={'2px'} className={s.caption}>
                      Максимальный размер файла 3 MB
                    </Typography.Caption>
                  )}
                </>
              )}
        </div>
      )}
    </ReactDropzone>
  )
}
