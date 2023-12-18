import { ComponentProps, FC } from 'react'

import { Loader } from '../../loader'
import { clsx } from 'clsx'

import s from './header.module.scss'

export type HeaderProps = ComponentProps<'header'> & {
  isLoading?: boolean
}

export const Header: FC<HeaderProps> = ({ className, isLoading, ...rest }) => {
  const classNames = {
    header: clsx(s.header, className),
  }

  return (
    <>
      {isLoading && <Loader />}
      <header className={classNames.header} {...rest} />
    </>
  )
}
