import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import { clsx } from 'clsx'

import { Label } from '../label'
import { Typography } from '../typography'

import s from './textarea.module.scss'

export type TextareaProps = {
  label?: string
  error?: boolean
  errorMessage?: string
  onValueChange?: (text: string) => void
} & ComponentProps<'textarea'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const Textarea = /* @__PURE__ */ forwardRef<HTMLTextAreaElement, TextareaProps>(
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
        {error && <Typography.Error>{errorMessage}</Typography.Error>}
      </div>
    )
  }
)
