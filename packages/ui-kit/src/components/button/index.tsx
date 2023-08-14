import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

type DefaultButtonProps = ComponentPropsWithoutRef<'button'>

export type ButtonVariant = 'primary' | 'secondary' | 'outlined'

export interface ButtonProps extends DefaultButtonProps {
  /** "primary" | "secondary" | "outlined"; */
  variant?: ButtonVariant
  fullWidth?: boolean
}

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  ({ variant = 'primary', className, fullWidth, ...rest }, ref) => {
    const classNames = {
      root: clsx(s[variant], fullWidth && s.fullWidth, className),
    }

    return <button className={classNames.root} {...rest} ref={ref} />
  }
)
