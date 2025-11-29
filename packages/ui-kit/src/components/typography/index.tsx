import {
  CSSProperties,
  ComponentProps,
  ElementType,
  FC,
  JSXElementConstructor,
  ReactNode,
} from 'react'

import { clsx } from 'clsx'
import { JSX } from 'react/jsx-runtime'

import IntrinsicElements = JSX.IntrinsicElements

export type PropsOf<TTag extends ReactTag> = TTag extends ElementType
  ? Omit<ComponentProps<TTag>, 'ref'>
  : never
export type ReactTag = JSXElementConstructor<any> | keyof IntrinsicElements

export type TypographyProps<Ttag extends ReactTag> = {
  children: ReactNode
  className?: string
  color?: CSSProperties['color']
  component?: Ttag
  mb?: CSSProperties['marginBottom']
  ml?: CSSProperties['marginLeft']
  mr?: CSSProperties['marginRight']
  mt?: CSSProperties['marginTop']
  mx?: CSSProperties['marginRight']
  my?: CSSProperties['marginLeft']
} & PropsOf<Ttag>

const createTypographyComponent = <T extends ReactTag>(
  basicClassName: Component
): FC<TypographyProps<T>> => {
  return ({ children, className, color, component, mb, ml, mr, mt, mx, my, style, ...rest }) => {
    const Component = component || COMPONENTS[basicClassName] || 'span'

    const classNames = clsx(`uik_typography-${basicClassName}`, className)

    const styles = {
      ...(mx && { marginLeft: mx, marginRight: mx }),
      ...(my && { marginBottom: my, marginTop: my }),
      ...(mr && { marginRight: mr }),
      ...(ml && { marginLeft: ml }),
      ...(mt && { marginTop: mt }),
      ...(mb && { marginBottom: mb }),
      ...(color && { color }),
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
  Body1: createTypographyComponent('body1'),
  Body2: createTypographyComponent('body2'),
  Caption: createTypographyComponent('caption'),
  CaptionBold: createTypographyComponent('caption-bold'),
  CaptionLink: createTypographyComponent('caption-link'),
  Error: createTypographyComponent('error'),
  H1: createTypographyComponent('h1'),
  H2: createTypographyComponent('h2'),
  H3: createTypographyComponent('h3'),
  Link: createTypographyComponent('link'),
  Overline: createTypographyComponent('overline'),
  Subtitle1: createTypographyComponent('subtitle1'),
  Subtitle2: createTypographyComponent('subtitle2'),
  SubtitleLink: createTypographyComponent('subtitle-link'),
}

const COMPONENTS = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  'caption-bold': 'span',
  'caption-link': 'a',
  error: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  link: 'a',
  overline: 'p',
  'subtitle-link': 'span',
  subtitle1: 'p',
  subtitle2: 'p',
} as const

type Component = keyof typeof COMPONENTS
