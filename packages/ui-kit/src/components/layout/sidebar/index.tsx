import { ReactNode } from 'react'

import { clsx } from 'clsx'

import { KeyboardArrowLeft } from '../../../assets/icons'

import s from './sidebar.module.scss'

type PropsType = {
  open: boolean
  children: ReactNode
  onOpenChange: (open: boolean) => void
}

export const Sidebar = ({ open, children, onOpenChange }: PropsType) => {
  const classNames = {
    box: s.box,
    content: clsx(s.content, !open && s.closed),
    button: clsx(s.button, !open && s.closed),
    icon: clsx(s.icon, !open && s.closed),
  }

  const buttonClickHandler = () => {
    onOpenChange(!open)
  }

  return (
    <div className={classNames.box}>
      <div className={classNames.content}>{children}</div>
      <button className={classNames.button} onClick={buttonClickHandler}>
        <KeyboardArrowLeft className={classNames.icon} />
      </button>
    </div>
  )
}
