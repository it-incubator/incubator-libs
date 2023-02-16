import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './textarea.module.scss'

export type TextareaProps = {
  label?: string
  error?: boolean
  errorMessage?: string
  onChange?: (text: string) => void
} & ComponentProps<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, errorMessage = 'Error!', onChange, ...rest }, ref) => {
    const inputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.currentTarget.value)
    }

    return (
      <div className={clsx(s.box, className)}>
        <Label.Root className={s['label-box']}>
          {label && <div className={s.label}>{label}</div>}
          <textarea
            className={clsx(s.textarea, { [s['textarea--error']]: error })}
            onChange={inputHandler}
            ref={ref}
            {...rest}
          ></textarea>
        </Label.Root>
        {error && <p className={s.error}>{errorMessage}</p>}
      </div>
    )
  }
)
