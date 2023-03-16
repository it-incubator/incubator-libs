import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import { clsx } from 'clsx'

import s from './scrollbar.module.scss'

export type ScrollbarType = 'auto' | 'always' | 'scroll' | 'hover'

export type ScrollbarProps = {
  children: ReactNode
  type?: ScrollbarType
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Scrollbar: FC<ScrollbarProps> = ({ children, className, type, ...rest }) => {
  const classNames = {
    root: clsx(s.root, className),
    viewport: s.viewport,
    scrollbar: s.scrollbar,
    thumb: s.thumb,
  }

  return (
    <ScrollArea.Root type={type} asChild={true}>
      <div className={classNames.root} {...rest}>
        <ScrollArea.Viewport className={classNames.viewport}>{children}</ScrollArea.Viewport>
        <ScrollArea.Scrollbar className={classNames.scrollbar} orientation="vertical">
          <ScrollArea.Thumb className={classNames.thumb} />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className={classNames.scrollbar} orientation="horizontal">
          <ScrollArea.Thumb className={classNames.thumb} />
        </ScrollArea.Scrollbar>
      </div>
    </ScrollArea.Root>
  )
}
