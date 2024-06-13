import { useEffect, useState } from 'react'

import { Cancel, UploadFile } from '../../assets/icons'
import { getFileSize } from '../../utils'
import { FileWithPreview } from '../dropzone'
import { ImagePreview } from '../image-preview'
import { Progress } from '../progress'
import { Typography } from '../typography'

import s from './file-upload-preview.module.scss'

export type FileUploadPreviewProps = {
  files: Array<File | FileWithPreview> | undefined
  onFileDelete: (file: File | FileWithPreview) => void
}
export const FileUploadPreview = ({ files, onFileDelete }: FileUploadPreviewProps) => {
  const [preview, setPreview] = useState<null | string>(null)

  const openPreview = (file: FileWithPreview) => () => {
    setPreview(file.preview)
  }

  const closePreview = () => {
    setPreview(null)
  }

  const handleFileDelete = (file: File | FileWithPreview) => {
    if ('preview' in file) {
      URL.revokeObjectURL(file.preview)
    }
    onFileDelete(file)
  }

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files?.forEach(file => {
        if (!('preview' in file)) {
          return
        }

        URL.revokeObjectURL(file.preview)
      })
  }, [])

  if (!files) {
    return null
  }

  return (
    <>
      <ImagePreview onClose={closePreview} open={!!preview} src={preview as string} />

      <div>
        {files.map(file => (
          <div className={s.filePreviewContainer} key={file.name}>
            {'preview' in file ? (
              <div className={s.thumb} onClick={openPreview(file)}>
                <div className={s.thumbInner}>
                  <img alt={file.name} className={s.img} src={file.preview} />
                </div>
              </div>
            ) : (
              <UploadFile size={48} />
            )}
            <div className={s.fileProgress}>
              <Typography.Subtitle2>{file.name}</Typography.Subtitle2>
              <Progress baseColor={'var(--color-upload-progress)'} height={'3px'} />
              <Typography.Body2 className={s.fileSize}>{getFileSize(file.size)}</Typography.Body2>
            </div>
            <button className={s.cancelButton} onClick={() => handleFileDelete(file)} type={'button'}>
              <Cancel />
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
