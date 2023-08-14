import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { RadioGroup as RadioGroupHeadless } from '@headlessui/react'
import { clsx } from 'clsx'

import { Typography, TypographyProps } from '../typography'

import s from './radio-group.module.scss'

type Option = {
  label: string
  value: string | number
}

export type RadioGroupProps = {
  options: Option[]
  value: string | number
  onChange: () => void
  disabled?: boolean
  errorMessage?: string
  errorMessageProps?: TypographyProps<'span'>
  /**The name used when using this component inside a form*/
  name?: string
} & ComponentPropsWithoutRef<'div'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const RadioGroup = /* @__PURE__ */ forwardRef<
  ElementRef<typeof RadioGroupHeadless>,
  RadioGroupProps
>(({ options, errorMessage, errorMessageProps, disabled, ...rest }, ref) => {
  const classNames = {
    option: s.option,
    icon: s.icon,
    label: s.label,
    error: clsx(s.error, errorMessageProps?.className),
  }

  return (
    <RadioGroupHeadless disabled={disabled} {...rest} ref={ref}>
      {options.map(option => (
        <RadioGroupHeadless.Option
          key={option.value}
          value={option.value}
          className={classNames.option}
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
