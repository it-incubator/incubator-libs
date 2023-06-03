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
  mb?: number | string
  mt?: number | string
  mr?: number | string
  ml?: number | string
  mx?: number | string
  my?: number | string
} & PropsOf<Ttag>

const createTypographyComponent = <T extends ReactTag>(
  basicClassName: Component
): FC<TypographyProps<T>> => {
  return ({ children, component, className, style, mr, ml, mt, mb, mx, my, ...rest }) => {
    const Component = component || COMPONENTS[basicClassName] || 'span'

    const classNames = clsx(s[basicClassName], className)

    const styles = {
      ...(mr && { marginRight: mr }),
      ...(ml && { marginLeft: ml }),
      ...(mt && { marginTop: mt }),
      ...(mb && { marginBottom: mb }),
      ...(mx && { marginRight: mx, marginLeft: mx }),
      ...(my && { marginTop: my, marginBottom: my }),
      ...style,
    }

    return (
      <Component className={classNames} style={styles} {...rest}>
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
  SubtitleLink: createTypographyComponent('subtitleLink'),
  Body1: createTypographyComponent('body1'),
  Body2: createTypographyComponent('body2'),
  Overline: createTypographyComponent('overline'),
  Caption: createTypographyComponent('caption'),
  CaptionBold: createTypographyComponent('captionBold'),
  CaptionLink: createTypographyComponent('captionLink'),
  Link: createTypographyComponent('link'),
  Error: createTypographyComponent('error'),
}

const COMPONENTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle1: 'p',
  subtitle2: 'p',
  subtitleLink: 'span',
  body1: 'p',
  body2: 'p',
  overline: 'p',
  caption: 'caption',
  captionBold: 'caption',
  captionLink: 'a',
  error: 'span',
  link: 'a',
} as const

type Component = keyof typeof COMPONENTS
