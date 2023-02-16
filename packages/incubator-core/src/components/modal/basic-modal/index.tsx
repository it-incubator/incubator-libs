import { ComponentProps, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import { CrossIcon } from '../../../icons/CrossIcon/CrossIcon'

import s from './styles.module.scss'

export type BasicModalProps = {
  /** The controlled open state of the dialog */
  open: boolean
  onClose: () => void
  title: string
  /** className for content. Can be used for width adjustment with module.css */
  className?: string
  /** standard width: s - 367px, m - 532px, l - 764px. Fot other width use className and adjust width with module.css */
  size?: 's' | 'm' | 'l'
  children: ReactNode
} & ComponentProps<'div'>

export const BasicModal = ({
  open,
  title,
  className,
  size,
  onClose,
  children,
}: BasicModalProps) => {
  const getContentClassName = () => {
    let sizeModificator = ''

    switch (size) {
      case 's':
        sizeModificator = s['content--s-width']
        break
      case 'm':
        sizeModificator = s['content--m-width']
        break
      case 'l':
        sizeModificator = s['content--l-width']
        break
    }

    return clsx(className, s.content, sizeModificator)
  }

  return (
    <Dialog.Root open={open} onOpenChange={open => onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={getContentClassName()}>
          <header className={s.header}>
            <h2 className={s.title}>{title}</h2>
            <button className={s['close-button']} onClick={onClose}>
              <CrossIcon />
            </button>
          </header>
          <div className={s['content-box']}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
