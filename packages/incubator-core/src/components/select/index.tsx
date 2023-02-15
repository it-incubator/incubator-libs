import React, { ReactNode } from 'react'

import * as SelectRadixUI from '@radix-ui/react-select'

import s from './styles.module.scss'

export type SelectProps = {
  /** Use SelectItem components as children.*/
  children: ReactNode
  placeholder: string
  value?: string
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** The controlled open state of the select. Must be used in conjunction with onOpenChange */
  open?: boolean
  /** Event handler called when the open state of the select changes */
  disabled?: boolean
  required?: boolean
  /** The controlled value of the select. Should be used in conjunction with onValueChange.*/
  onOpenChange?: Function
  /** Event handler called when the value changes. */
  onValueChange?: Function
}

// TODO: импортировать svg-icon

export const Select = ({
  children,
  placeholder,
  value,
  open,
  disabled,
  required,
  onOpenChange,
  onValueChange,
}: SelectProps) => {
  const openChangeHandler = () => {
    onOpenChange && onOpenChange()
  }

  const valueChangeHandler = () => {
    onValueChange && onValueChange()
  }

  return (
    <SelectRadixUI.Root
      open={open}
      value={value}
      disabled={disabled}
      required={required}
      onOpenChange={openChangeHandler}
      onValueChange={valueChangeHandler}
    >
      <SelectRadixUI.Trigger className={s['select-trigger']} aria-label="Food">
        <SelectRadixUI.Value placeholder={placeholder} />
        <SelectRadixUI.Icon className={s['select-icon']}></SelectRadixUI.Icon>
      </SelectRadixUI.Trigger>
      <SelectRadixUI.Portal>
        <SelectRadixUI.Content className={s['select-content']} position="popper">
          <SelectRadixUI.Viewport className={s['select-viewport']}>
            {children}
          </SelectRadixUI.Viewport>
        </SelectRadixUI.Content>
      </SelectRadixUI.Portal>
    </SelectRadixUI.Root>
  )
}

export const SelectItem = ({
  value,
  children,
  ...props
}: {
  value: string
  children: ReactNode
}) => {
  return (
    <SelectRadixUI.Item value={value} className={s['select-item']}>
      <SelectRadixUI.ItemText>{children}</SelectRadixUI.ItemText>
    </SelectRadixUI.Item>
  )
}
