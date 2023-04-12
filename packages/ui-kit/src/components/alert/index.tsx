import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import { Cancel, Info } from '../..'
import { Card } from '../card'

import s from './alert.module.scss'

export type AlertProps = {
  children: ReactNode
  variant?: 'error' | 'warning'
  icon?: ReactNode
} & ComponentProps<'div'>

export const Alert: FC<AlertProps> = ({ children, variant = 'warning', icon, ...rest }) => {
  const classNames = {
    box: s.box,
    content: s.content,
    icon: clsx(s.icon),
  }
  const isError = variant === 'error'
  const iconComponent =
    icon ||
    (isError ? (
      <Cancel color={'var(--color-accent-500)'} className={s.defaultIcon} />
    ) : (
      <Info color={'var(--color-danger-500)'} className={s.defaultIcon} />
    ))

  console.log('iconComponent', iconComponent)

  return (
    <Card className={classNames.box} {...rest}>
      <div className={classNames.content}>
        <span className={classNames.icon}>{iconComponent}</span>
        {children}
      </div>
    </Card>
  )
}
