import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import InfoIcon from '../../../assets/icons/components/Info'
import { Card } from '../../card'

import s from './alert.module.scss'

export type AlertProps = {
  children: ReactNode
  variant?: 'error' | 'warning'
  icon?: ReactNode
} & ComponentProps<'div'>

export const Alert: FC<AlertProps> = ({ children, variant, icon, ...rest }) => {
  const classNames = {
    box: s.box,
    content: s.content,
    icon: clsx(s.icon, variant === 'error' && s.error, variant === 'warning' && s.warning),
  }

  const iconComponent = icon ? icon : <InfoIcon size={24} className={classNames.icon} />

  return (
    <Card className={classNames.box} {...rest}>
      <div className={classNames.content}>
        <span className={classNames.icon}>{iconComponent}</span>
        {children}
      </div>
    </Card>
  )
}
