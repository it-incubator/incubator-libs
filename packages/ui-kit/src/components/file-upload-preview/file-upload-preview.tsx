import { useEffect, useState } from 'react'

import { Cancel, UploadFile } from '../../assets/icons'
import { getFileSize } from '../../utils'
import { FileWithPreview } from '../dropzone'
import { ImagePreview } from '../image-preview'
import { Progress } from '../progress'
import { Typography } from '../typography'

import s from './file-upload-preview.module.scss'

export type FileUploadPreviewProps = {
  files: Array<FileWithPreview | File> | undefined
  onFileDelete: (file: FileWithPreview | File) => void
}
export const FileUploadPreview = ({ files, onFileDelete }: FileUploadPreviewProps) => {
  const [preview, setPreview] = useState<string | null>(null)

  const openPreview = (file: FileWithPreview) => () => {
    setPreview(file.preview)
  }

  const closePreview = () => {
    setPreview(null)
  }

  const handleFileDelete = (file: FileWithPreview | File) => {
    if ('preview' in file) {
      URL.revokeObjectURL(file.preview)
    }
    onFileDelete(file)
  }

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files?.forEach(file => {
        if (!('preview' in file)) return

        URL.revokeObjectURL(file.preview)
      })
  }, [])

  if (!files) return null

  return (
    <>
      <ImagePreview open={!!preview} src={preview as string} onClose={closePreview} />

      <div>
        {files.map(file => (
          <div className={s.filePreviewContainer} key={file.name}>
            {'preview' in file ? (
              <div className={s.thumb} onClick={openPreview(file)}>
                <div className={s.thumbInner}>
                  <img alt={file.name} src={file.preview} className={s.img} />
                </div>
              </div>
            ) : (
              <UploadFile size={48} />
            )}
            <div className={s.fileProgress}>
              <Typography.Subtitle2>{file.name}</Typography.Subtitle2>
              <Progress height={'3px'} baseColor={'var(--color-upload-progress)'} />
              <Typography.Body2 className={s.fileSize}>{getFileSize(file.size)}</Typography.Body2>
            </div>
            <button className={s.cancelButton} onClick={() => handleFileDelete(file)}>
              <Cancel />
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
