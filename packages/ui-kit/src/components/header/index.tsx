import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import s from './header.module.scss'

export type HeaderProps = ComponentProps<'header'>

export const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  const classNames = {
    header: clsx(s.header, className),
  }

  return <header className={classNames.header} {...rest} />
}
