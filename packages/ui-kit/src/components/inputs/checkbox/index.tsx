import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import { Check } from '../../../assets/_icons/check'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  id: string
  label?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled,
  required,
  id,
  label,
}) => {
  const classNames = {
    container: s.container,
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    root: s.root,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root className={classNames.label} htmlFor={id}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            className={classNames.root}
            checked={checked}
            onCheckedChange={onChange}
            disabled={disabled}
            required={required}
            id={id}
          >
            <CheckboxRadix.Indicator className={classNames.indicator}>
              <Check />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {label}
      </LabelRadix.Root>
    </div>
  )
}
