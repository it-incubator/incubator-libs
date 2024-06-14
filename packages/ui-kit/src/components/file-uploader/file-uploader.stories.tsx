import { useState } from 'react'

import { Button, FileUploader, FileWithPreview } from '../..'
import { useDarkMode } from '../../../storybook-utils/hooks/use-dark-mode'
import { Meta } from '@storybook/react'

export default {
  component: FileUploader,
  title: 'Components/File Uploader',
} as Meta<typeof FileUploader>

export const Default = {
  args: {},
  render: () => {
    const [open, setOpen] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState<Array<File | FileWithPreview>>([])
    const [isUploading, setIsUploading] = useState(false)
    const handleFilesUpload = (files: Array<File | FileWithPreview>) => {
      setUploadedFiles([...uploadedFiles, ...files])
    }

    const handleFileDelete = (file: File | FileWithPreview) => {
      setUploadedFiles(uploadedFiles.filter(f => f.name !== file.name))
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open uploader</Button>
        <FileUploader
          confirmButtonText={'Загрузить файлы'}
          isUploading={isUploading}
          onClose={() => setOpen(false)}
          onConfirmButtonClick={() => {
            console.log(uploadedFiles)
            setIsUploading(true)
            setTimeout(() => {
              setIsUploading(false)
            }, 3000)
          }}
          onDrop={handleFilesUpload}
          onFileDelete={handleFileDelete}
          open={open}
          uploadedFiles={uploadedFiles}
        />
      </>
    )
  },
}

export const DarkTheme = {
  args: {},
  render: () => {
    useDarkMode()
    const [open, setOpen] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState<Array<File | FileWithPreview>>([])

    const handleFilesUpload = (files: Array<File | FileWithPreview>) => {
      setUploadedFiles([...uploadedFiles, ...files])
    }

    const handleFileDelete = (file: File | FileWithPreview) => {
      setUploadedFiles(uploadedFiles.filter(f => f.name !== file.name))
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open uploader</Button>
        <FileUploader
          confirmButtonText={'Загрузить файлы'}
          onClose={() => setOpen(false)}
          onConfirmButtonClick={() => {
            console.log(uploadedFiles)
          }}
          onDrop={handleFilesUpload}
          onFileDelete={handleFileDelete}
          open={open}
          uploadedFiles={uploadedFiles}
        />
      </>
    )
  },
}
