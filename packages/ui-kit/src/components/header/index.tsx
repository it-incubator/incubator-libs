import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import { Loader } from '../loader'

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
