'use client'
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@radix-ui/react-dialog'

import s from './image-preview.module.scss'

export type ImagePreviewProps = {
  alt?: string
  onClose?: () => void
  open: boolean
  src: string
}

export const ImagePreview = ({ alt, onClose, open, src }: ImagePreviewProps) => {
  function handleModalClosed() {
    onClose?.()
  }

  return (
    <Dialog onOpenChange={handleModalClosed} open={open}>
      <DialogPortal>
        <DialogOverlay className={s.overlay} />
        <DialogContent className={s.content}>
          <img alt={alt ?? 'preview'} onClick={handleModalClosed} src={src} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
