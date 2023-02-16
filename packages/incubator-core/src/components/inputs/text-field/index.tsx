import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

export type TextFieldProps = {
  label?: string
  error?: boolean
  errorMessage?: string
  onChange?: (text: string) => void
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, className, errorMessage = 'Error!', onChange, ...rest }, ref) => {
    function handleInputChanged(e: ChangeEvent<HTMLInputElement>) {
      onChange && onChange(e.currentTarget.value)
    }

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
          <input
            className={classNames.input}
            type="text"
            onChange={handleInputChanged}
            ref={ref}
            {...rest}
          />
        </Label.Root>
        {error && <p className={classNames.error}>{errorMessage}</p>}
      </div>
    )
  }
)
