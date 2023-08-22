import { Dialog, DialogProps } from '../dialog'
import { Dropzone, DropzoneProps } from '../dropzone'
import { FileUploadPreview, FileUploadPreviewProps } from '../file-upload-preview'
import { LoadingOverlay } from '../loading-overlay'

import s from './file-uploader.module.scss'

export type FileUploaderProps = {
  onFileDelete: FileUploadPreviewProps['onFileDelete']
  uploadedFiles?: FileUploadPreviewProps['files']

  onDrop: DropzoneProps['onDrop']
  dragActiveInfo?: DropzoneProps['dragActiveInfo']
  dragNotActiveInfo?: DropzoneProps['dragNotActiveInfo']
  additionalInfo?: DropzoneProps['additionalInfo']

  onConfirmButtonClick: DialogProps['onConfirmButtonClick']
  confirmButtonText: DialogProps['confirmButtonText']
  modalTitle?: DialogProps['title']
  onClose: DialogProps['onClose']
  open: DialogProps['open']

  isUploading?: boolean
}

export const FileUploader = ({
  open,
  onClose,
  modalTitle = 'Загрузка файла',
  onDrop,
  onFileDelete,
  dragActiveInfo,
  dragNotActiveInfo,
  uploadedFiles,
  onConfirmButtonClick,
  confirmButtonText,
  isUploading,
}: FileUploaderProps) => {
  return (
    <>
      <Dialog
        open={open}
        title={modalTitle}
        onClose={onClose}
        confirmButtonText={confirmButtonText}
        onConfirmButtonClick={onConfirmButtonClick}
      >
        {isUploading && <LoadingOverlay />}
        <Dropzone
          onDrop={onDrop}
          dragActiveInfo={dragActiveInfo}
          dragNotActiveInfo={dragNotActiveInfo}
        />
        <div className={s.container}>
          <FileUploadPreview files={uploadedFiles} onFileDelete={onFileDelete} />
        </div>
      </Dialog>
    </>
  )
}
