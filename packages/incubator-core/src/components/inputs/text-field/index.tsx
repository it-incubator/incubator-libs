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
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e.currentTarget.value)
    }

    return (
      <div className={clsx(s.box, className)}>
        <Label.Root>
          {label && <div className={s.label}>{label}</div>}
          <input
            className={clsx(s.input, { [s['input--error']]: error })}
            type="text"
            onChange={inputHandler}
            ref={ref}
            {...rest}
          />
        </Label.Root>
        {error && <p className={s.error}>{errorMessage}</p>}
      </div>
    )
  }
)
