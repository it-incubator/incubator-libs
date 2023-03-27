import { ComponentProps, forwardRef, ReactNode, KeyboardEvent } from 'react'

import { clsx } from 'clsx'

import { Search as SearchIcon, Typography } from '../../'
import { Label } from '../label'

import s from './text-field.module.scss'

export type TextFieldProps = {
  label?: string
  error?: boolean
  errorMessage?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  search?: boolean
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
} & ComponentProps<'input'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      error,
      onEnter,
      onKeyDown,
      className,
      errorMessage = 'Error!',
      iconEnd,
      iconStart,
      search,
      ...rest
    },
    ref
  ) => {
    if (search) {
      iconStart = <SearchIcon size={20} color={'var(--color-text-secondary)'} />
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e)
      }
      onKeyDown?.(e)
    }
    const classNames = {
      root: clsx(s.box, className),
      label: s.label,
      input: clsx(s.input, error && s.error),
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
              onKeyDown={handleKeyDown}
              {...rest}
            />
            {!!iconEnd && <span className={classNames.iconEnd}>{iconEnd}</span>}
          </div>
        </Label>

        {error && <Typography.Error>{errorMessage}</Typography.Error>}
      </div>
    )
  }
)
