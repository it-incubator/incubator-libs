import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import { clsx } from 'clsx'

import { Label } from '../label'

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
        <Label label={label}>
          <textarea
            className={classNames.input}
            onChange={handleInputValueChanged}
            ref={ref}
            {...rest}
          />
        </Label>
        {error && <p className={classNames.error}>{errorMessage}</p>}
      </div>
    )
  }
)
