import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps = {
  children: ReactNode
  title?: string
  iconComponent?: ReactNode
  variant?: 'primary' | 'info'
} & ComponentProps<'div'>

export const Card: FC<CardProps> = ({
  children,
  title,
  iconComponent,
  variant = 'primary',
  className,
  ...rest
}) => {
  const isInfo = variant === 'info'

  const classNames = {
    box: clsx(s.box, isInfo && s.info, className),
    title: s.title,
    content: s.content,
    icon: s.icon,
  }

  return (
    <div className={classNames.box} {...rest}>
      {title && (
        <h3 className={classNames.title}>
          {iconComponent && <div className={classNames.icon}>{iconComponent}</div>}
          {title}
        </h3>
      )}
      <div className={classNames.content}>{children}</div>
    </div>
  )
}
