import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CommonProps = {
  children: ReactNode
  contentClassName?: string
} & ComponentProps<'div'>

type ConditionalProps =
  | {
      iconComponent?: ReactNode
      title?: string
      variant?: 'primary'
    }
  | {
      iconComponent?: never
      title?: never
      variant?: 'info'
    }

export type CardProps = CommonProps & ConditionalProps

export const Card: FC<CardProps> = ({
  children,
  className,
  contentClassName,
  iconComponent,
  title,
  variant = 'primary',
  ...rest
}) => {
  const isInfo = variant === 'info'

  const classNames = {
    box: clsx(s.box, isInfo && s.info, className),
    content: clsx(s.content, contentClassName),
    icon: s.icon,
    title: s.title,
  }

  return (
    <div className={classNames.box} {...rest}>
      {title && (
        <h3 className={classNames.title}>
          {iconComponent}
          {title}
        </h3>
      )}
      <div className={classNames.content}>{children}</div>
    </div>
  )
}
