import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as SelectRadixUI from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { ChevronDown } from '../../../assets/icons/chevron-down'

import s from './select.module.scss'

export type SelectProps = {
  /** Use SelectItem components as children.*/
  children: ReactNode
  /** applied to the trigger */
  className?: string
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** Event handler called when the open state of the select changes */
  onOpenChange?: (open: boolean) => void
  /** Event handler called when the value changes. */
  onValueChange?: (value: string) => void
  /** The controlled open state of the select. Must be used in conjunction with onOpenChange */
  open?: boolean
  placeholder: string
  required?: boolean
  /** The controlled value of the select. Should be used in conjunction with onValueChange.*/
  value?: string
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Select: FC<SelectProps> = ({
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
}) => {
  function handleOpenChanged(open: boolean) {
    onOpenChange?.(open)
  }

  function handleValueChanged(value: string) {
    onValueChange?.(value)
  }

  const isSecondary = variant === 'secondary'

  const classNames = {
    trigger: clsx(s.trigger, error && s.error, isSecondary && s.secondary, className),
    icon: clsx(s.icon, isSecondary && s.secondary),
    content: clsx(s.content, isSecondary && s.secondary),
    error: s.errorLine,
    scrollRoot: s.scrollRoot,
    scrollViewport: s.scrollViewport,
    scrollbar: s.scrollbar,
    scrollThumb: s.scrollThumb,
  }

  return (
    <SelectRadixUI.Root
      open={open}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      required={required}
      name={name}
      onOpenChange={handleOpenChanged}
      onValueChange={handleValueChanged}
    >
      <SelectRadixUI.Trigger className={classNames.trigger} disabled={disabled} {...rest}>
        <SelectRadixUI.Value placeholder={placeholder} />
        <SelectRadixUI.Icon className={classNames.icon}>
          <ChevronDown />
        </SelectRadixUI.Icon>
      </SelectRadixUI.Trigger>

      {error && <p className={classNames.error}>{errorMessage}</p>}

      <SelectRadixUI.Portal>
        <SelectRadixUI.Content className={classNames.content} position="popper">
          <ScrollArea.Root className={classNames.scrollRoot} type="auto">
            <SelectRadixUI.Viewport asChild>
              <ScrollArea.Viewport className={classNames.scrollViewport}>
                {children}
              </ScrollArea.Viewport>
            </SelectRadixUI.Viewport>
            <ScrollArea.Scrollbar className={classNames.scrollbar} orientation="vertical">
              <ScrollArea.Thumb className={classNames.scrollThumb} />
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
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <SelectRadixUI.Item value={value} className={classNames.item} {...rest}>
      <SelectRadixUI.ItemText>{children}</SelectRadixUI.ItemText>
    </SelectRadixUI.Item>
  )
}
