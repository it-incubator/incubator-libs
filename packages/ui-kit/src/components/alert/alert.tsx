import { ComponentProps, FC, ReactNode } from 'react'

import { Cancel, InfoFill } from '../..'
import { Card } from '../card'
import { clsx } from 'clsx'

import s from './alert.module.scss'

export type AlertProps = {
  children: ReactNode
  icon?: ReactNode
  variant?: 'error' | 'warning'
} & ComponentProps<'div'>

export const Alert: FC<AlertProps> = ({ children, icon, variant = 'warning', ...rest }) => {
  const classNames = {
    box: s.box,
    content: s.content,
    icon: clsx(s.icon),
  }
  const isError = variant === 'error'
  const iconComponent =
    icon ||
    (isError ? (
      <Cancel className={s.defaultIcon} color={'var(--color-accent-500)'} />
    ) : (
      <InfoFill className={s.defaultIcon} color={'var(--color-danger-500)'} />
    ))

  return (
    <Card className={classNames.box} {...rest}>
      <div className={classNames.content}>
        <span className={classNames.icon}>{iconComponent}</span>
        {children}
      </div>
    </Card>
  )
}
