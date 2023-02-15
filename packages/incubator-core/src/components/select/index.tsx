import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as SelectRadixUI from '@radix-ui/react-select'
import { clsx } from 'clsx'

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
  /** className for select trigger button */
  className?: string
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
  name,
  disabled,
  required,
  className,
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
      name={name}
      onOpenChange={openChangeHandler}
      onValueChange={valueChangeHandler}
    >
      <SelectRadixUI.Trigger className={clsx(s['select-trigger'], className)} aria-label="Food">
        <SelectRadixUI.Value placeholder={placeholder} />
        <SelectRadixUI.Icon className={s['select-icon']}></SelectRadixUI.Icon>
      </SelectRadixUI.Trigger>
      <SelectRadixUI.Portal>
        <SelectRadixUI.Content className={s['select-content']} position="popper">
          <ScrollArea.Root className={s['scroll-root']} type="auto">
            <SelectRadixUI.Viewport asChild>
              <ScrollArea.Viewport className={s['scroll-viewport']}>{children}</ScrollArea.Viewport>
            </SelectRadixUI.Viewport>
            <ScrollArea.Scrollbar className={s['scroll-scrollbar']} orientation="vertical">
              <ScrollArea.Thumb className={s['scroll-thumb']} />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </SelectRadixUI.Content>
      </SelectRadixUI.Portal>
    </SelectRadixUI.Root>
  )
}

export type SelectItemProps = {
  value: any
  children: ReactNode
} & Omit<DefaultInputPropsType, 'ref'>

type DefaultInputPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const SelectItem: FC<SelectItemProps> = ({ value, children, className, ...rest }) => {
  return (
    <SelectRadixUI.Item value={value} className={clsx(s['select-item'], className)} {...rest}>
      <SelectRadixUI.ItemText>{children}</SelectRadixUI.ItemText>
    </SelectRadixUI.Item>
  )
}
