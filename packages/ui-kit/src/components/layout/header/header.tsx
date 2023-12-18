import { ComponentProps } from 'react'

import { Loader } from '../../loader'
import { clsx } from 'clsx'

import s from './header.module.scss'

export type HeaderProps = ComponentProps<'header'> & {
  isLoading?: boolean
}

export const Header = ({ className, isLoading, ...rest }: HeaderProps) => {
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
