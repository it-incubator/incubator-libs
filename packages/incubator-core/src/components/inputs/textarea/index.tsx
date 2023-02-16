import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import * as Label from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './textarea.module.scss'

export type TextareaProps = {
  label?: string
  error?: boolean
  errorMessage?: string
  onValueChange?: (text: string) => void
} & ComponentProps<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, errorMessage = 'Error!', onChange, onValueChange, ...rest }, ref) => {
    function handleInputValueChanged(e: ChangeEvent<HTMLTextAreaElement>) {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    const classNames = {
      root: clsx(s.box, className),
      labelBox: s.labelBox,
      label: s.label,
      input: clsx(s.textarea, error && s.error),
      error: s.errorText,
    }

    return (
      <div className={classNames.root}>
        <Label.Root className={classNames.labelBox}>
          {label && <div className={classNames.label}>{label}</div>}
          <textarea
            className={classNames.input}
            onChange={handleInputValueChanged}
            ref={ref}
            {...rest}
          />
        </Label.Root>
        {error && <p className={classNames.error}>{errorMessage}</p>}
      </div>
    )
  }
)
