'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography, TypographyProps } from '../typography'
import { RadioGroup as RadioGroupHeadless } from '@headlessui/react'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

type Option = {
  label: string
  value: number | string
}

export type RadioGroupProps = {
  disabled?: boolean
  errorMessage?: string
  errorMessageProps?: TypographyProps<'span'>
  /**The name used when using this component inside a form*/
  name?: string
  onChange: () => void
  options: Option[]
  value: number | string
} & ComponentPropsWithoutRef<'div'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const RadioGroup = /* @__PURE__ */ forwardRef<
  ElementRef<typeof RadioGroupHeadless>,
  RadioGroupProps
>(({ disabled, errorMessage, errorMessageProps, options, ...rest }, ref) => {
  const classNames = {
    error: clsx(s.error, errorMessageProps?.className),
    icon: s.icon,
    label: s.label,
    option: s.option,
  }

  return (
    <RadioGroupHeadless disabled={disabled} {...rest} ref={ref}>
      {options.map(option => (
        <RadioGroupHeadless.Option
          className={classNames.option}
          key={option.value}
          value={option.value}
        >
          <div className={classNames.icon} />
          <span className={classNames.label}>{option.label}</span>
        </RadioGroupHeadless.Option>
      ))}
      {errorMessage && (
        <Typography.Error {...errorMessageProps} className={classNames.error}>
          {errorMessage}
        </Typography.Error>
      )}
    </RadioGroupHeadless>
  )
})
