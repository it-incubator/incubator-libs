import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './tag.module.scss'

export type TagProps = {
  label: ReactNode
  variant?: 'primary' | 'secondary'
} & ComponentProps<'div'>

export const Tag: FC<TagProps> = ({ className, label, onClick, variant = 'primary', ...rest }) => {
  const classNames = {
    tag: clsx(s.tag, className, onClick && s.clickable, variant === 'secondary' && s.secondary),
  }

  return (
    <div className={classNames.tag} onClick={onClick} tabIndex={onClick && 0} {...rest}>
      {label}
    </div>
  )
}
