import { ChangeEvent, ComponentProps, FC, forwardRef } from 'react'

import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './styles.module.scss'

type TextInputProps = {
  id: string
  label: string
  error?: boolean
  errorMessage?: string
  onChange?: (text: string) => void
} & ComponentProps<'input'>

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ id, label, error, className, errorMessage = 'Error!', onChange, ...rest }, ref) => {
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e.currentTarget.value)
    }

    return (
      <div className={clsx(s.box, className)}>
        <Label.Root className={s.label} htmlFor={id}>
          {label}
        </Label.Root>
        <input
          className={clsx(s.input, { [s['input--error']]: error })}
          type="text"
          id={id}
          onChange={inputHandler}
          ref={ref}
          {...rest}
        />
        {error && <p className={s.error}>{errorMessage}</p>}
      </div>
    )
  }
)
