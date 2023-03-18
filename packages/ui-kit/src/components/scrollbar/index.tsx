import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import { clsx } from 'clsx'

import s from './scrollbar.module.scss'

export type ScrollbarProps = {
  children: ReactNode
  type?: ScrollArea.ScrollAreaProps['type']
  className?: string
  /** maxHeight viewport in pixels */
  maxHeight?: number
  /** maxWidth viewport in pixels */
  maxWidth?: number
} & ComponentPropsWithoutRef<'div'>

export const Scrollbar: FC<ScrollbarProps> = ({
  children,
  className,
  type = 'always',
  maxHeight,
  maxWidth,
  ...rest
}) => {
  const classNames = {
    root: clsx(s.root, className),
    viewport: s.viewport,
    scrollbar: s.scrollbar,
    thumb: s.thumb,
  }

  const viewportStyles = { maxHeight: `${maxHeight}px`, maxWidth: `${maxWidth}` }

  return (
    <ScrollArea.Root type={type} asChild={true}>
      <div className={classNames.root} {...rest}>
        <ScrollArea.Viewport className={classNames.viewport} style={viewportStyles}>
          {children}
        </ScrollArea.Viewport>
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
