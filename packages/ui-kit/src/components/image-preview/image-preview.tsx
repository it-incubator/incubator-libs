import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@radix-ui/react-dialog'

import s from './image-preview.module.scss'

export type ImagePreviewProps = {
  open: boolean
  onClose?: () => void
  src: string
  alt?: string
}

export const ImagePreview = ({ open, onClose, src, alt }: ImagePreviewProps) => {
  function handleModalClosed() {
    onClose?.()
  }

  return (
    <Dialog open={open} onOpenChange={handleModalClosed}>
      <DialogPortal>
        <DialogOverlay className={s.overlay} />
        <DialogContent className={s.content}>
          <img src={src} alt={alt ?? 'preview'} onClick={handleModalClosed} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
