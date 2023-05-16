import { ComponentProps, FC } from 'react'

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogClose,
  DialogTitle,
} from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { Close } from '../..'

import s from './modal.module.scss'

export type ModalSize = 'sm' | 'md' | 'lg'

export type ModalProps = {
  /** The controlled open state of the dialog */
  open: boolean
  onClose: () => void
  showCloseButton?: boolean
  title?: string
  /** 'sm' | 'md' | 'lg':
   * sm - 367px,
   * md - 532px,
   * lg - 764px.
   * For other values use className */
  size?: ModalSize
} & ComponentProps<'div'>

const dropIn = {
  hidden: {
    y: '-100vh',
    x: '-50%',
    opacity: 0,
  },
  visible: {
    y: '-50%',
    x: '-50%',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

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
    <Dialog open={open} onOpenChange={handleModalClosed}>
      <AnimatePresence>
        {open && (
          <DialogPortal forceMount>
            <DialogOverlay asChild>
              <motion.div
                className={classNames.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </DialogOverlay>
            <DialogContent className={classNames.content} asChild forceMount>
              <motion.div variants={dropIn} initial="hidden" animate="visible" exit="exit">
                <header className={classNames.header}>
                  <DialogTitle asChild>
                    <h2 className={classNames.title}>{title}</h2>
                  </DialogTitle>

                  {showCloseButton && (
                    <DialogClose className={classNames.closeButton}>
                      <Close />
                    </DialogClose>
                  )}
                </header>
                <div className={classNames.contentBox}>{children}</div>
              </motion.div>
            </DialogContent>
          </DialogPortal>
        )}
      </AnimatePresence>
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
