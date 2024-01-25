import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './prose.module.scss'
export type ProseProps<T extends ElementType = 'article'> = {
  as?: T
  legacy?: boolean
} & ComponentPropsWithoutRef<T>

export const Prose = <T extends ElementType = 'article'>(
  props: ProseProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ProseProps<T>>
) => {
  const { as: Component = 'article', className, legacy = false, ...rest } = props

  const classNames = clsx('mdx-prose', s.prose, legacy && s.legacy, className)

  return <Component className={classNames} {...rest} />
}
