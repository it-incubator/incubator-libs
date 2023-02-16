import { ComponentProps } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import { Index } from '../../../assets/icons/cross'

import s from './modal.module.scss'

export type ModalSize = 'sm' | 'md' | 'lg'

export type ModalProps = {
  /** The controlled open state of the dialog */
  open: boolean
  onClose: () => void
  showCloseButton?: boolean
  title: string
  /** 'sm' | 'md' | 'lg':
   * sm - 367px,
   * md - 532px,
   * lg - 764px.
   * For other values use className */
  size?: ModalSize
} & ComponentProps<'div'>

export const Modal = ({
  open = false,
  size = 'md',
  title,
  className,
  onClose,
  children,
  showCloseButton = true,
}: ModalProps) => {
  const contentClassName = getContentClassName(size, className)
  const handleModalClosed = () => {
    onClose()
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleModalClosed}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />

        <Dialog.Content className={contentClassName}>
          <header className={s.header}>
            <h2 className={s.title}>{title}</h2>
            {showCloseButton && (
              <button className={s.closeButton} onClick={handleModalClosed}>
                <Index />
              </button>
            )}
          </header>

          <div className={s.contentBox}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function getContentClassName(size: ModalSize, className?: string) {
  const sizeClassName = getSizeClassName(size)

  return clsx(className, s.content, sizeClassName)
}

function getSizeClassName(size: ModalSize) {
  if (size === 'sm') return s.sm
  if (size === 'md') return s.md
  if (size === 'lg') return s.lg
}
