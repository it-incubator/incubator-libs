'use client'
import * as React from 'react'
import {
  ComponentPropsWithoutRef,
  ElementRef,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
} from 'react'

import { RadioGroup as RadioGroupHeadless, Radio } from '@headlessui/react'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

import { Typography, TypographyProps } from '../typography'

type Option = {
  label: string
  value: number | string
}

type RadioGroupRootProps = ComponentPropsWithoutRef<typeof RadioGroupHeadless>

export type RadioGroupProps = {
  disabled?: boolean
  errorMessage?: string
  errorMessageProps?: TypographyProps<'span'>
  /**The name used when using this component inside a form*/
  name?: string
  onChange: (value: Option['value']) => void
  options: Option[]
  value: number | string
} & Omit<RadioGroupRootProps, 'disabled' | 'value' | 'onChange' | 'defaultValue'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
function RadioGroupComponentInner(
  { disabled, errorMessage, errorMessageProps, onChange, options, value, ...rest }: RadioGroupProps,
  ref: React.ForwardedRef<ElementRef<typeof RadioGroupHeadless>>
): React.ReactElement {
  const classNames = {
    error: clsx(s.error, errorMessageProps?.className),
    icon: s.icon,
    label: s.label,
    option: s.option,
  }

  return (
    <RadioGroupHeadless {...rest} disabled={disabled} onChange={onChange} ref={ref} value={value}>
      {options.map(option => (
        <Radio className={classNames.option} key={option.value} value={option.value}>
          <div className={classNames.icon} />
          <span className={classNames.label}>{option.label}</span>
        </Radio>
      ))}
      {errorMessage && (
        <Typography.Error {...errorMessageProps} className={classNames.error}>
          {errorMessage}
        </Typography.Error>
      )}
    </RadioGroupHeadless>
  )
}

const RadioGroupComponent = /* @__PURE__ */ forwardRef(RadioGroupComponentInner)

export const RadioGroup: ForwardRefExoticComponent<
  RadioGroupProps & RefAttributes<ElementRef<typeof RadioGroupHeadless>>
> = RadioGroupComponent
