import { ComponentProps, ElementType, FC, JSXElementConstructor, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'
export type PropsOf<TTag extends ReactTag> = TTag extends ElementType
  ? Omit<ComponentProps<TTag>, 'ref'>
  : never
export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>

export type TypographyProps<Ttag extends ReactTag> = {
  children: ReactNode
  component?: Ttag
  className?: string
} & PropsOf<Ttag>

const createTypographyComponent = <T extends ReactTag>(
  basicClassName: Component
): FC<TypographyProps<T>> => {
  return ({ children, component, className, ...rest }) => {
    const Component = component || COMPONENTS[basicClassName] || 'span'

    const classNames = clsx(s[basicClassName], className)

    return (
      <Component className={classNames} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  H1: createTypographyComponent('h1'),
  H2: createTypographyComponent('h2'),
  H3: createTypographyComponent('h3'),
  Subtitle1: createTypographyComponent('subtitle1'),
  Subtitle2: createTypographyComponent('subtitle2'),
  Body1: createTypographyComponent('body1'),
  Body2: createTypographyComponent('body1'),
  Overline: createTypographyComponent('overline'),
  Caption: createTypographyComponent('caption'),
}

const COMPONENTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  overline: 'p',
  caption: 'caption',
} as const

type Component = keyof typeof COMPONENTS
