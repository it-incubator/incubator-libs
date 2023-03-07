import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import s from './tag.module.scss'

export type TagProps = {
  label: string
  variant?: 'primary' | 'secondary'
} & ComponentProps<'div'>

export const Tag: FC<TagProps> = ({ label, variant = 'primary', className, onClick, ...rest }) => {
  const classNames = {
    tag: clsx(s.tag, className, onClick && s.clickable, variant === 'secondary' && s.secondary),
  }

  return (
    <div className={classNames.tag} tabIndex={onClick && 0} onClick={onClick} {...rest}>
      {label}
    </div>
  )
}
