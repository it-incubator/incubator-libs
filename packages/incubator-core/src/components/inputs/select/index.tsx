import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as SelectRadixUI from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { ChevronDown } from '../../../assets/icons/chevron-down'

import s from './select.module.scss'

export type SelectProps = {
  /** Use SelectItem components as children.*/
  children: ReactNode
  /** The content that will be rendered inside the Select when no value or defaultValue is set.*/
  placeholder: string
  /** The controlled value of the select. Should be used in conjunction with onValueChange.*/
  value?: string
  /** The value of the select when initially rendered. Use when you do not need to control the state of the select.*/
  defaultValue?: string
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** The controlled open state of the select. Must be used in conjunction with onOpenChange */
  open?: boolean
  /** Event handler called when the open state of the select changes */
  variant?: 'primary' | 'secondary'

  error?: boolean

  errorMessage?: string

  disabled?: boolean
  /** When true, indicates that the user must select a value before the owning form can be submitted. */
  required?: boolean
  /** className for select trigger button */
  className?: string
  /** Event handler called when the open state of the select changes. */
  onOpenChange?: Function
  /** Event handler called when the value changes. */
  onValueChange?: Function
} & ComponentPropsWithoutRef<'button'>

// TODO: импортировать svg-icon

export const Select = ({
  variant = 'primary',
  children,
  placeholder,
  defaultValue,
  value,
  open,
  name,
  error,
  errorMessage,
  disabled,
  required,
  className,
  onOpenChange,
  onValueChange,
  ...rest
}: SelectProps) => {
  const openChangeHandler = () => {
    onOpenChange?.()
  }

  const valueChangeHandler = () => {
    onValueChange?.()
  }

  const secondaryClassName = variant === 'secondary' ? s.secondary : ''
  const errorClassName = error ? s.error : ''

  const triggerClassName = clsx(s.trigger, errorClassName, secondaryClassName, className)

  return (
    <SelectRadixUI.Root
      open={open}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      required={required}
      name={name}
      onOpenChange={openChangeHandler}
      onValueChange={valueChangeHandler}
    >
      <SelectRadixUI.Trigger className={triggerClassName} disabled={disabled} {...rest}>
        <SelectRadixUI.Value placeholder={placeholder} />
        <SelectRadixUI.Icon className={clsx(s.icon, secondaryClassName)}>
          <ChevronDown />
        </SelectRadixUI.Icon>
      </SelectRadixUI.Trigger>
      {error && <p className={s.errorLine}>{errorMessage}</p>}
      <SelectRadixUI.Portal>
        <SelectRadixUI.Content className={clsx(s.content, secondaryClassName)} position="popper">
          <ScrollArea.Root className={s.scrollRoot} type="auto">
            <SelectRadixUI.Viewport asChild>
              <ScrollArea.Viewport className={s.scrollViewport}>{children}</ScrollArea.Viewport>
            </SelectRadixUI.Viewport>
            <ScrollArea.Scrollbar className={s.scrollScrollbar} orientation="vertical">
              <ScrollArea.Thumb className={s.scrollThumb} />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </SelectRadixUI.Content>
      </SelectRadixUI.Portal>
    </SelectRadixUI.Root>
  )
}

export type SelectItemProps = {
  value: string
  children: ReactNode
} & ComponentPropsWithoutRef<'input'>

export const SelectItem: FC<SelectItemProps> = ({ value, children, className, ...rest }) => {
  return (
    <SelectRadixUI.Item value={value} className={clsx(s.item, className)} {...rest}>
      <SelectRadixUI.ItemText>{children}</SelectRadixUI.ItemText>
    </SelectRadixUI.Item>
  )
}
