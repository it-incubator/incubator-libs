import { ComponentProps, FC, ReactNode } from 'react'

import { Scrollbar } from '../../../'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { clsx } from 'clsx'

import s from './sidebar.module.scss'

type PropsType = {
  children: ReactNode
  isOpen: boolean
  showScrollbarOn?: ScrollArea.ScrollAreaProps['type']
} & ComponentProps<'div'>

export const Sidebar: FC<PropsType> = ({
  children,
  isOpen,
  showScrollbarOn = 'hover',
  ...rest
}) => {
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
