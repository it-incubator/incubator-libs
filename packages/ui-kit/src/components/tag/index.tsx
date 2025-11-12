'use client'
import { ComponentProps } from 'react'

import * as Toggle from '@radix-ui/react-toggle'
import { clsx } from 'clsx'

import s from './tag.module.scss'

export type TagProps = {
  readonly?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentProps<typeof Toggle.Root>

export const Tag = ({ className, readonly = false, variant = 'primary', ...rest }: TagProps) => {
  const classNames = {
    tag: clsx(s.tag, className, !readonly && s.clickable, s[variant]),
  }

  return <Toggle.Root className={classNames.tag} {...rest} />
}
