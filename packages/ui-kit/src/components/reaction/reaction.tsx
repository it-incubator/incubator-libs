'use client'
import { ReactNode } from 'react'

import { Tag, TagProps } from '../tag'
import { clsx } from 'clsx'

import s from './reaction.module.scss'

export type ReactionProps = Omit<TagProps, 'children'> & {
  count?: number
  icon?: ReactNode
  text?: string
}

export const Reaction = ({ className, count, icon, text, ...rest }: ReactionProps) => {
  const classNames = {
    reaction: clsx(s.reaction, className),
  }
  const hasCount = count !== undefined

  return (
    <Tag className={classNames.reaction} {...rest}>
      {text}
      {icon}
      {hasCount && <span className={s.count}>{`(${count})`}</span>}
    </Tag>
  )
}
