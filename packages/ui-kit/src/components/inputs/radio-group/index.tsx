import { ComponentProps, FC } from 'react'

import { RadioGroup as RadioGroupHeadless } from '@headlessui/react'
import { clsx } from 'clsx'

import s from './radioGroup.module.scss'

type Option = {
  label: string
  value: string | number
}

export type RadioGroupProps = {
  options: Option[]
  value: string | number
  onChange: () => void
  disabled?: boolean
  /**The name used when using this component inside a form*/
  name?: string
} & ComponentProps<'div'>

export const RadioGroup: FC<RadioGroupProps> = ({ options, disabled, ...rest }) => {
  const classNames = {
    option: clsx(s.option, disabled && s.disabled),
    icon: s.icon,
    label: s.label,
  }

  return (
    <RadioGroupHeadless disabled={disabled} {...rest}>
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
    </RadioGroupHeadless>
  )
}
