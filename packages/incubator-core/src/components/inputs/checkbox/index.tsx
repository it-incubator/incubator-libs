import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import { Check } from '../../../assets/icons/check'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  id: string
  label?: string
}

const classNames = {
  container: s.container,
  root: s.root,
  indicator: s.indicator,
  label: s.label,
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled,
  required,
  id,
  label,
}) => {
  return (
    <div className={classNames.container}>
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
      <LabelRadix.Root className={classNames.label} htmlFor={id}>
        {label}
      </LabelRadix.Root>
    </div>
  )
}
