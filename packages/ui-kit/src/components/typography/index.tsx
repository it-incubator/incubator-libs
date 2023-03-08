import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type TypographyProps = {
  children: ReactNode
  variant?: keyof HTMLElementTagNameMap
  className?: string
}

const createTypographyComponent = (
  defaultComponent: keyof HTMLElementTagNameMap,
  basicClassName: string
): FC<TypographyProps> => {
  return ({ children, variant, className, ...rest }: TypographyProps) => {
    const Component = variant || defaultComponent

    const classNames = clsx(s[basicClassName], className)

    return (
      <Component className={classNames} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  Headline1: createTypographyComponent('h1', 'headline1'),
  Headline2: createTypographyComponent('h2', 'headline2'),
  Headline3: createTypographyComponent('h3', 'headline3'),
  Subtitle1: createTypographyComponent('p', 'subtitle1'),
  Subtitle2: createTypographyComponent('p', 'subtitle2'),
  Body1: createTypographyComponent('p', 'body1'),
  Body2: createTypographyComponent('p', 'body1'),
  Overline: createTypographyComponent('p', 'overline'),
  Caption: createTypographyComponent('p', 'caption'),
}
