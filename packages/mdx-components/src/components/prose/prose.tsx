import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './prose.module.scss'
export type ProseProps<T extends ElementType = 'article'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Prose = <T extends ElementType = 'article'>(
  props: ProseProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ProseProps<T>>
) => {
  const { as: Component = 'article', className, ...rest } = props

  const classNames = clsx('mdx-prose', s.prose, className)

  return <Component className={classNames} {...rest} />
}
