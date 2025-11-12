'use client'
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
  additionalInfo?: ReactNode
  dragActiveInfo?: ReactNode
  dragNotActiveInfo?: ReactNode
  onDrop: (files: Array<File | FileWithPreview>, fileRejections: FileRejection[]) => void
} & Omit<ReactDropzoneProps, 'onDrop'>

export const Dropzone = ({
  additionalInfo,
  dragActiveInfo,
  dragNotActiveInfo,
  onDrop,
  ...rest
}: DropzoneProps) => {
  const handleDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    onDrop(
      acceptedFiles.map(file => {
        if (!file.type.startsWith('image/')) {
          return file
        }

        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      }),
      fileRejections
    )
  }

  return (
    <ReactDropzone onDrop={handleDrop} {...rest}>
      {({ getInputProps, getRootProps, isDragActive }) => (
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
                    <Typography.Caption className={s.caption} mt={'2px'}>
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
