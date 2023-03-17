import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import { KeyboardArrowRight } from '../../../assets/icons'

import s from './sidebar.module.scss'

type PropsType = {
  open: boolean
  children: ReactNode
  onOpenChange: (open: boolean) => void
} & ComponentProps<'div'>

export const Sidebar: FC<PropsType> = ({ open, children, onOpenChange, ...rest }) => {
  const classNames = {
    box: s.box,
    contentBox: s.content,
    content: clsx(s.contentBox, open && s.open),
    button: clsx(s.button),
    icon: clsx(s.icon, open && s.open),
  }

  const buttonClickHandler = () => {
    onOpenChange(!open)
  }

  return (
    <div className={classNames.box} {...rest}>
      <div className={classNames.contentBox}>
        <div className={classNames.content}>{children}</div>
      </div>
      <button className={classNames.button} onClick={buttonClickHandler}>
        <KeyboardArrowRight className={classNames.icon} />
      </button>
    </div>
  )
}
