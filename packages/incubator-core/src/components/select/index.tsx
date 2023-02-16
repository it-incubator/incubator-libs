import React, {
  ComponentProps,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactNode,
  useId,
} from 'react'

import { Label } from '@radix-ui/react-label'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as SelectRadixUI from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { MenuArrowIcons } from '../../icons/MenuArrow'

import s from './styles.module.scss'

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
} & Omit<ComponentProps<'button'>, 'ref'>

// TODO: импортировать svg-icon

export const Select = ({
  children,
  placeholder,
  defaultValue,
  value,
  open,
  name,
  variant = 'primary',
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
    onOpenChange && onOpenChange()
  }

  const valueChangeHandler = () => {
    onValueChange && onValueChange()
  }

  const id = useId()

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
      <SelectRadixUI.Trigger
        className={clsx(s['select-trigger'], className, {
          [s['select-trigger--error']]: error,
          [s['select-trigger--secondary']]: variant === 'secondary',
        })}
        disabled={disabled}
        {...rest}
      >
        <SelectRadixUI.Value placeholder={placeholder} />
        <SelectRadixUI.Icon className={s['select-icon']}>
          <MenuArrowIcons
            className={clsx({ [s['select-icon--secondary']]: variant === 'secondary' })}
          />
        </SelectRadixUI.Icon>
      </SelectRadixUI.Trigger>
      {error && <p className={s.error}>{errorMessage}</p>}
      <SelectRadixUI.Portal>
        <SelectRadixUI.Content
          className={clsx(s['select-content'], {
            [s['select-content--secondary']]: variant === 'secondary',
          })}
          position="popper"
        >
          <ScrollArea.Root className={clsx(s['scroll-root'])} type="auto">
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
  value: string
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
