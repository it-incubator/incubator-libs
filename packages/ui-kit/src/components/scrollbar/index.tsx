import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import { clsx } from 'clsx'

import s from './scrollbar.module.scss'

export type ScrollbarProps = {
  children: ReactNode
  className?: string
  /** maxHeight viewport in pixels */
  maxHeight?: number | string
  /** maxWidth viewport in pixels */
  maxWidth?: number | string
  type?: ScrollArea.ScrollAreaProps['type']
} & ComponentPropsWithoutRef<'div'>

export const Scrollbar: FC<ScrollbarProps> = ({
  children,
  className,
  maxHeight = '100%',
  maxWidth = '100%',
  type = 'auto',
  ...rest
}) => {
  const classNames = {
    root: clsx(s.root, className),
    scrollbar: s.scrollbar,
    thumb: s.thumb,
    viewport: s.viewport,
  }

  const maxHeightConverted = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight
  const maxWidthConverted = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth

  const viewportStyles = { maxHeight: maxHeightConverted, maxWidth: maxWidthConverted }

  return (
    <ScrollArea.Root asChild={true} type={type}>
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
