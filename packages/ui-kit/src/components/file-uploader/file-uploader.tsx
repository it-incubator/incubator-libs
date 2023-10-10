import { Dialog, DialogProps } from '../dialog'
import { Dropzone, DropzoneProps } from '../dropzone'
import { FileUploadPreview, FileUploadPreviewProps } from '../file-upload-preview'
import { LoadingOverlay } from '../loading-overlay'

import s from './file-uploader.module.scss'

export type FileUploaderProps = {
  additionalInfo?: DropzoneProps['additionalInfo']
  confirmButtonText: DialogProps['confirmButtonText']

  dragActiveInfo?: DropzoneProps['dragActiveInfo']
  dragNotActiveInfo?: DropzoneProps['dragNotActiveInfo']
  isUploading?: boolean
  modalTitle?: DialogProps['title']

  onClose: DialogProps['onClose']
  onConfirmButtonClick: DialogProps['onConfirmButtonClick']
  onDrop: DropzoneProps['onDrop']
  onFileDelete: FileUploadPreviewProps['onFileDelete']
  open: DialogProps['open']

  uploadedFiles?: FileUploadPreviewProps['files']
}

export const FileUploader = ({
  confirmButtonText,
  dragActiveInfo,
  dragNotActiveInfo,
  isUploading,
  modalTitle = 'Загрузка файла',
  onClose,
  onConfirmButtonClick,
  onDrop,
  onFileDelete,
  open,
  uploadedFiles,
}: FileUploaderProps) => {
  return (
    <>
      <Dialog
        confirmButtonText={confirmButtonText}
        onClose={onClose}
        onConfirmButtonClick={onConfirmButtonClick}
        open={open}
        title={modalTitle}
      >
        {isUploading && <LoadingOverlay />}
        <Dropzone
          dragActiveInfo={dragActiveInfo}
          dragNotActiveInfo={dragNotActiveInfo}
          onDrop={onDrop}
        />
        <div className={s.container}>
          <FileUploadPreview files={uploadedFiles} onFileDelete={onFileDelete} />
        </div>
      </Dialog>
    </>
  )
}
