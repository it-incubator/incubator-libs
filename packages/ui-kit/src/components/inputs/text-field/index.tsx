import { ComponentProps, forwardRef } from 'react'

import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

export type TextFieldProps = {
  label?: string
  error?: boolean
  errorMessage?: string
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, className, errorMessage = 'Error!', onChange, ...rest }, ref) => {
    const classNames = {
      root: clsx(s.box, className),
      label: s.label,
      input: clsx(s.input, error && s.error),
      error: s.errorText,
    }

    return (
      <div className={classNames.root}>
        <Label.Root>
          {label && <div className={classNames.label}>{label}</div>}
          <input className={classNames.input} type="text" ref={ref} {...rest} />
        </Label.Root>
        {error && <p className={classNames.error}>{errorMessage}</p>}
      </div>
    )
  }
)
