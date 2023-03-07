import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import s from './tag.module.scss'

export type TagProps = {
  label: string
  variant?: 'primary' | 'secondary'
} & ComponentProps<'div'>

export const Tag: FC<TagProps> = ({ label, variant = 'primary', className, ...rest }) => {
  const classNames = {
    tag: clsx(s.tag, className),
  }

  return (
    <div className={classNames.tag} {...rest}>
      {label}
    </div>
  )
}
