import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type TypographyProps = {
  children: ReactNode
  component?: keyof HTMLElementTagNameMap
  className?: string
}

const createTypographyComponent = (basicClassName: string): FC<TypographyProps> => {
  return ({ children, component, className, ...rest }) => {
    const Component = component || 'span'

    const classNames = clsx(s[basicClassName], className)

    return (
      <Component className={classNames} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  Headline1: createTypographyComponent('headline1'),
  Headline2: createTypographyComponent('headline2'),
  Headline3: createTypographyComponent('headline3'),
  Subtitle1: createTypographyComponent('subtitle1'),
  Subtitle2: createTypographyComponent('subtitle2'),
  Body1: createTypographyComponent('body1'),
  Body2: createTypographyComponent('body1'),
  Overline: createTypographyComponent('overline'),
  Caption: createTypographyComponent('caption'),
}
