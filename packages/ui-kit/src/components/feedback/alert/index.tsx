import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import { Info } from '../../../assets/icons'
import { Card } from '../../card'

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
  const iconColor = variant === 'error' ? 'var(--color-accent-500)' : 'var(--color-danger-500)'
  const iconComponent = icon ?? <Info color={iconColor} />

  return (
    <Card className={classNames.box} {...rest}>
      <div className={classNames.content}>
        <span className={classNames.icon}>{iconComponent}</span>
        {children}
      </div>
    </Card>
  )
}
