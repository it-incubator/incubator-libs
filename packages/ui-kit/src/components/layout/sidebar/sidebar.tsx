'use client'
import { ComponentProps, ReactNode } from 'react'

import { Scrollbar, ScrollbarProps } from '../../../'
import { clsx } from 'clsx'

import s from './sidebar.module.scss'

export type SidebarProps = {
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
  showScrollbarOn?: ScrollbarProps['type']
} & ComponentProps<'div'>

export const Sidebar = ({
  children,
  isOpen,
  onClose,
  showScrollbarOn = 'hover',
  ...rest
}: SidebarProps) => {
  const classNames = {
    box: clsx(s.box, isOpen && s.open),
    content: clsx(s.content, isOpen && s.open),
    contentBox: s.contentBox,
    overlay: clsx(s.overlay, isOpen && s.open),
    scrollbar: s.scrollbar,
  }

  return (
    <>
      <div aria-hidden={'true'} className={classNames.overlay} onClick={onClose}></div>
      <div className={classNames.box} {...rest}>
        <div className={classNames.contentBox}>
          <div className={classNames.content}>
            <Scrollbar className={classNames.scrollbar} type={showScrollbarOn}>
              {children}
            </Scrollbar>
          </div>
        </div>
      </div>
    </>
  )
}
