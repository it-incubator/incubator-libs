import { ComponentProps, FC } from 'react'

import { Dialog } from '@headlessui/react'
import { clsx } from 'clsx'

import { Cross } from '../../../assets/icons/cross'

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

export const Modal: FC<ModalProps> = ({
  open = false,
  size = 'md',
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
    content: getContentClassName(size, className),
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
                <Cross />
              </button>
            )}
          </header>

          <div className={classNames.contentBox}>{children}</div>
        </div>
      </Dialog.Panel>
    </Dialog>
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
