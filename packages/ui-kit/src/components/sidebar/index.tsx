import { ComponentProps, FC, ReactNode } from 'react'

import { KeyboardArrowRight, Scrollbar } from '../../'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { clsx } from 'clsx'

import s from './sidebar.module.scss'

type PropsType = {
  children: ReactNode
  onOpenChange: (open: boolean) => void
  open: boolean
  showScrollbarOn?: ScrollArea.ScrollAreaProps['type']
} & ComponentProps<'div'>

export const Sidebar: FC<PropsType> = ({
  children,
  onOpenChange,
  open,
  showScrollbarOn = 'hover',
  ...rest
}) => {
  const classNames = {
    box: clsx(s.box, open && s.open),
    button: clsx(s.button),
    content: clsx(s.content, open && s.open),
    contentBox: s.contentBox,
    icon: clsx(s.icon, open && s.open),
    scrollbar: s.scrollbar,
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
