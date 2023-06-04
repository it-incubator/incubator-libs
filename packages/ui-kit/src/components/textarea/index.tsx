import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import { clsx } from 'clsx'

import { Label } from '../label'
import { Typography } from '../typography'

import s from './textarea.module.scss'

export type TextareaProps = {
  label?: string
  errorMessage?: string
  onValueChange?: (text: string) => void
} & ComponentProps<'textarea'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const Textarea = /* @__PURE__ */ forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className, errorMessage, onChange, onValueChange, ...rest }, ref) => {
    const showError = !!errorMessage && errorMessage.length > 0

    function handleInputValueChanged(e: ChangeEvent<HTMLTextAreaElement>) {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    const classNames = {
      root: clsx(s.box, className),
      labelBox: s.labelBox,
      label: s.label,
      input: clsx(s.textarea, showError && s.error),
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
        {showError && <Typography.Error>{errorMessage}</Typography.Error>}
      </div>
    )
  }
)
