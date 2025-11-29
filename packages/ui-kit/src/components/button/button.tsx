import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  ReactElement,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

import { ArrowBack } from '../../assets/icons'

export type ButtonVariant = 'back' | 'outlined' | 'primary' | 'secondary'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

/** Accepts all props of the native button element. */
function ButtonInner(
  props: ButtonProps<any> & { ref?: ForwardedRef<any> },
  ref: ForwardedRef<any>
) {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth = false,
    variant = 'primary',
    ...rest
  } = props
  const classNames = {
    root: clsx(s[variant], fullWidth && s.fullWidth, className),
  }

  return (
    <Component className={classNames.root} ref={ref} {...(rest as any)}>
      {variant === 'back' && <ArrowBack size={16} />}
      {children}
    </Component>
  )
}

const Button = forwardRef(ButtonInner)

/** Accepts all props of the native button element. */
export default Button as <T extends ElementType = 'button'>(
  props: ButtonProps<T> & {
    ref?: ForwardedRef<any>
  }
) => ReactElement | null
