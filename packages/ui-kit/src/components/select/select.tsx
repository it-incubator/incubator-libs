import * as React from 'react'
import { useId } from 'react'

import { KeyboardArrowDown } from '../../assets/icons'
import { Scrollbar } from '../scrollbar'
import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

type Variant = 'primary' | 'secondary'

const Select = SelectPrimitive.Root

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    placeholder?: string
    variant?: Variant
  }
>(({ children, className, id, placeholder, variant = 'primary', ...props }, ref) => {
  const generatedId = useId()
  const selectId = id || generatedId

  return (
    <SelectPrimitive.Trigger
      className={clsx(s.trigger, s.value, s[variant], className)}
      id={selectId}
      ref={ref}
      {...props}
    >
      <SelectValue placeholder={placeholder} />

      <SelectPrimitive.Icon asChild className={s.icon}>
        <KeyboardArrowDown />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> &
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Portal> & {
      variant?: Variant
    }
>(({ children, className, container, position = 'popper', variant = 'primary', ...props }, ref) => (
  <SelectPrimitive.Portal container={container}>
    <SelectPrimitive.Content
      className={clsx(s.content, s[variant], className)}
      position={position}
      ref={ref}
      {...props}
    >
      <SelectPrimitive.Viewport className={s.viewport}>
        <Scrollbar maxHeight={158}>{children}</Scrollbar>
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))

SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    className={clsx('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    ref={ref}
    {...props}
  />
))

SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Item className={clsx(s.item, className)} ref={ref} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

SelectItem.displayName = SelectPrimitive.Item.displayName

export { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue }
