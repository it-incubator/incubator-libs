import { useState } from 'react'

import { Meta } from '@storybook/react-vite'

import { Button, FileUploader, FileWithPreview } from '../../../../src'
import { useDarkMode } from '../../../../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'Components/Data Entry/File Uploader',
  component: FileUploader,
} as Meta<typeof FileUploader>

export const Default = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState<Array<FileWithPreview | File>>([])
    const [isUploading, setIsUploading] = useState(false)
    const handleFilesUpload = (files: Array<FileWithPreview | File>) => {
      setUploadedFiles([...uploadedFiles, ...files])
    }

    const handleFileDelete = (file: FileWithPreview | File) => {
      setUploadedFiles(uploadedFiles.filter(f => f.name !== file.name))
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open uploader</Button>
        <FileUploader
          open={open}
          onClose={() => setOpen(false)}
          onDrop={handleFilesUpload}
          onFileDelete={handleFileDelete}
          uploadedFiles={uploadedFiles}
          onConfirmButtonClick={() => {
            console.log(uploadedFiles)
            setIsUploading(true)
            setTimeout(() => {
              setIsUploading(false)
            }, 3000)
          }}
          confirmButtonText="Загрузить файлы"
          isUploading={isUploading}
        />
      </>
    )
  },
  args: {},
}

export const DarkTheme = {
  args: {},
  render: () => {
    useDarkMode()
    const [open, setOpen] = useState(false)
    const [uploadedFiles, setUploadedFiles] = useState<Array<FileWithPreview | File>>([])

    const handleFilesUpload = (files: Array<FileWithPreview | File>) => {
      setUploadedFiles([...uploadedFiles, ...files])
    }

    const handleFileDelete = (file: FileWithPreview | File) => {
      setUploadedFiles(uploadedFiles.filter(f => f.name !== file.name))
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open uploader</Button>
        <FileUploader
          open={open}
          onClose={() => setOpen(false)}
          onDrop={handleFilesUpload}
          onFileDelete={handleFileDelete}
          uploadedFiles={uploadedFiles}
          onConfirmButtonClick={() => {
            console.log(uploadedFiles)
          }}
          confirmButtonText="Загрузить файлы"
        />
      </>
    )
  },
}
