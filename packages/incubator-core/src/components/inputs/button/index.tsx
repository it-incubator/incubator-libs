import { ButtonHTMLAttributes, FC } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonVariant = 'primary' | 'secondary' | 'outlined'

export interface ButtonProps extends DefaultButtonProps {
  /** "primary" | "secondary" | "outlined"; */
  variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', className, ...rest }) => {
  const classNames = {
    root: clsx(
      variant === 'primary' && s.primary,
      variant === 'secondary' && s.secondary,
      variant === 'outlined' && s.outlined,
      className
    ),
  }

  return <button className={classNames.root} {...rest} />
}
