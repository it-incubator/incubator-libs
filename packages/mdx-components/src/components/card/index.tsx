import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CommonProps = {
  contentClassName?: string
  children: ReactNode
} & ComponentProps<'div'>

type ConditionalProps =
  | {
      variant?: 'primary'
      title?: string
      iconComponent?: JSX.Element
    }
  | {
      variant?: 'info'
      title?: never
      iconComponent?: never
    }

export type CardProps = CommonProps & ConditionalProps

export const Card: FC<CardProps> = ({
  children,
  title,
  iconComponent,
  variant = 'primary',
  className,
  contentClassName,
  ...rest
}) => {
  const isInfo = variant === 'info'

  const classNames = {
    box: clsx(s.box, isInfo && s.info, className),
    title: s.title,
    content: clsx(s.content, contentClassName),
    icon: s.icon,
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
