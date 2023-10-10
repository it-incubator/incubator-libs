import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import { Label } from '../label'
import { Typography } from '../typography'
import { clsx } from 'clsx'

import s from './textarea.module.scss'

export type TextareaProps = {
  errorMessage?: string
  label?: string
  onValueChange?: (text: string) => void
} & ComponentProps<'textarea'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const Textarea = /* @__PURE__ */ forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, errorMessage, label, onChange, onValueChange, ...rest }, ref) => {
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
