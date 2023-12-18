import { ComponentProps, ReactNode } from 'react'

import { Scrollbar, ScrollbarProps } from '../../../'
import { clsx } from 'clsx'

import s from './sidebar.module.scss'

export type SidebarProps = {
  children: ReactNode
  isOpen: boolean
  showScrollbarOn?: ScrollbarProps['type']
} & ComponentProps<'div'>

export const Sidebar = ({ children, isOpen, showScrollbarOn = 'hover', ...rest }: SidebarProps) => {
  const classNames = {
    box: clsx(s.box, isOpen && s.open),
    content: clsx(s.content, isOpen && s.open),
    contentBox: s.contentBox,
    scrollbar: s.scrollbar,
  }

  return (
    <div className={classNames.box} {...rest}>
      <div className={classNames.contentBox}>
        <div className={classNames.content}>
          <Scrollbar className={classNames.scrollbar} type={showScrollbarOn}>
            {children}
          </Scrollbar>
        </div>
      </div>
    </div>
  )
}
