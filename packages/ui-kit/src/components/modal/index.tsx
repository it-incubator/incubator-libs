import { ComponentProps, FC } from 'react'

import { Dialog } from '@headlessui/react'
import { clsx } from 'clsx'

import { Close } from '../..'

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
  /** If true, the modal will be full screen on mobile */
  mobile?: boolean
} & ComponentProps<'div'>

export const Modal: FC<ModalProps> = ({
  open = false,
  size = 'md',
  mobile = false,
  title,
  className,
  onClose,
  children,
  showCloseButton = true,
}) => {
  function handleModalClosed() {
    onClose()
  }
  const classNames = {
    overlay: s.overlay,
    content: getContentClassName(size, className, mobile),
    header: s.header,
    title: s.title,
    closeButton: s.closeButton,
    contentBox: s.contentBox,
  }

  return (
    <Dialog open={open} onClose={handleModalClosed}>
      <div className={classNames.overlay} />
      <Dialog.Panel>
        <div className={classNames.content}>
          <header className={classNames.header}>
            <h2 className={classNames.title}>{title}</h2>

            {showCloseButton && (
              <button className={classNames.closeButton} onClick={handleModalClosed}>
                <Close />
              </button>
            )}
          </header>

          <div className={classNames.contentBox}>{children}</div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

function getContentClassName(size: ModalSize, className?: string, mobile?: boolean) {
  const sizeClassName = getSizeClassName(size, mobile)

  return clsx(className, s.content, sizeClassName)
}

function getSizeClassName(size: ModalSize, mobile?: boolean) {
  console.log('size', size)
  console.log('mobile', mobile)

  if (mobile) return s.mobile
  if (size === 'sm') return s.sm
  if (size === 'md') return s.md
  if (size === 'lg') return s.lg
}
