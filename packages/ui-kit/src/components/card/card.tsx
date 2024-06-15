import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactElement,
  ReactNode,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type InferType<T> = T extends ElementType<infer U> ? U : never

type CommonProps<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  contentClassName?: string
} & ComponentPropsWithoutRef<T>

type ConditionalProps =
  | {
      iconComponent?: ReactNode
      title?: string
      variant?: 'primary'
    }
  | {
      iconComponent?: never
      title?: never
      variant?: 'info'
    }

export type CardProps<T extends ElementType = 'div'> = CommonProps<T> & ConditionalProps

const Card = forwardRef(
  <T extends ElementType = 'div'>(props: CardProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const {
      as: Component = 'div',
      children,
      className,
      contentClassName,
      iconComponent,
      title,
      variant,
      ...rest
    } = props

    const isInfo = variant === 'info'

    const classNames = {
      box: clsx(s.box, isInfo && s.info, className),
      content: clsx(s.content, contentClassName),
      icon: s.icon,
      title: s.title,
    }

    return (
      <Component className={classNames.box} ref={ref} {...rest}>
        {title && (
          <h3 className={classNames.title}>
            {iconComponent}
            {title}
          </h3>
        )}
        <div className={classNames.content}>{children}</div>
      </Component>
    )
  }
)

export default Card as <T extends ElementType = 'div'>(
  props: { ref?: ForwardedRef<ElementRef<T>> } & CardProps<T>
) => ReactElement
