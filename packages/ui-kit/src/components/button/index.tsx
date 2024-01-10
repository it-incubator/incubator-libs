import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

type DefaultButtonProps = ComponentPropsWithoutRef<'button'>

export type ButtonVariant = 'outlined' | 'primary' | 'secondary'

export interface ButtonProps extends DefaultButtonProps {
  fullWidth?: boolean
  /** "primary" | "secondary" | "outlined"; */
  variant?: ButtonVariant
}

/** Accepts all props of the native button element. */
export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  ({ className, fullWidth, variant = 'primary', ...rest }, ref) => {
    const classNames = {
      root: clsx(s[variant], fullWidth && s.fullWidth, className),
    }

    return <button className={classNames.root} {...rest} ref={ref} />
  }
)
