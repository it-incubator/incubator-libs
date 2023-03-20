import { ComponentProps, FC, ReactNode } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import { clsx } from 'clsx'

import { KeyboardArrowRight, Scrollbar } from '../../'

import s from './sidebar.module.scss'

type PropsType = {
  open: boolean
  children: ReactNode
  onOpenChange: (open: boolean) => void
  showScrollbarOn?: ScrollArea.ScrollAreaProps['type']
} & ComponentProps<'div'>

export const Sidebar: FC<PropsType> = ({
  open,
  children,
  onOpenChange,
  showScrollbarOn = 'hover',
  ...rest
}) => {
  const classNames = {
    box: clsx(s.box, open && s.open),
    contentBox: s.contentBox,
    content: clsx(s.content, open && s.open),
    scrollbar: s.scrollbar,
    button: clsx(s.button),
    icon: clsx(s.icon, open && s.open),
  }

  const buttonClickHandler = () => {
    onOpenChange(!open)
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
      <button className={classNames.button} onClick={buttonClickHandler}>
        <KeyboardArrowRight className={classNames.icon} />
      </button>
    </div>
  )
}
