import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

type DefaultButtonProps = ComponentPropsWithoutRef<'button'>

export type ButtonVariant = 'primary' | 'secondary' | 'outlined'

export interface ButtonProps extends DefaultButtonProps {
  /** "primary" | "secondary" | "outlined"; */
  variant?: ButtonVariant
  fullWidth?: boolean
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', className, fullWidth, ...rest }) => {
  const classNames = {
    root: clsx(
      variant === 'primary' && s.primary,
      variant === 'secondary' && s.secondary,
      variant === 'outlined' && s.outlined,
      fullWidth && s.fullWidth,
      className
    ),
  }

  return <button className={classNames.root} {...rest} />
}
