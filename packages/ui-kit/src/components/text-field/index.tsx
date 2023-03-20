import { ComponentProps, forwardRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import { Search as SearchIcon } from '../../'
import { Label } from '../label'

import s from './text-field.module.scss'

export type TextFieldProps = {
  label?: string
  error?: boolean
  errorMessage?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  search?: boolean
} & ComponentProps<'input'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, error, className, errorMessage = 'Error!', iconEnd, iconStart, search, ...rest },
    ref
  ) => {
    if (search) {
      iconStart = <SearchIcon size={20} color={'var(--color-text-secondary)'} />
    }

    const classNames = {
      root: clsx(s.box, className),
      label: s.label,
      input: clsx(s.input, error && s.error),
      error: s.errorText,
      iconStart: s.iconStart,
      iconEnd: s.iconEnd,
      inputContainer: s.inputContainer,
    }

    const dataIconStart = iconStart ? 'start' : ''
    const dataIconEnd = iconEnd ? 'end' : ''
    const dataIcon = dataIconStart + dataIconEnd

    return (
      <div className={classNames.root}>
        <Label label={label}>
          <div className={classNames.inputContainer}>
            {!!iconStart && <span className={classNames.iconStart}>{iconStart}</span>}
            <input
              className={classNames.input}
              type="text"
              ref={ref}
              data-icon={dataIcon}
              {...rest}
            />
            {!!iconEnd && <span className={classNames.iconEnd}>{iconEnd}</span>}
          </div>
        </Label>

        {error && <p className={classNames.error}>{errorMessage}</p>}
      </div>
    )
  }
)
