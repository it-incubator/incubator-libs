'use client'
import { ChangeEvent, ComponentProps, ReactNode, forwardRef } from 'react'

import { Label } from '../label'
import { useGetId } from '../text-field/useGetId'
import { Typography } from '../typography'
import { clsx } from 'clsx'

import s from './textarea.module.scss'

export type TextareaProps = {
  errorMessage?: string
  label?: ReactNode
  onValueChange?: (text: string) => void
} & ComponentProps<'textarea'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const Textarea = /* @__PURE__ */ forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, errorMessage, id, label, onChange, onValueChange, required, ...rest }, ref) => {
    const textareaId = useGetId(id)
    const showError = !!errorMessage && errorMessage.length > 0

    function handleInputValueChanged(e: ChangeEvent<HTMLTextAreaElement>) {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    const classNames = {
      input: clsx(s.textarea, showError && s.error),
      label: s.label,
      labelBox: s.labelBox,
      root: clsx(s.box, className),
    }

    return (
      <div className={classNames.root}>
        {label && <Label htmlFor={textareaId} label={label} required={required} />}
        <textarea
          className={classNames.input}
          id={textareaId}
          onChange={handleInputValueChanged}
          ref={ref}
          required={required}
          {...rest}
        />
        {showError && <Typography.Error>{errorMessage}</Typography.Error>}
      </div>
    )
  }
)
