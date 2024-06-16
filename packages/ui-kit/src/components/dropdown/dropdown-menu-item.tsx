import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Item } from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown-menu.module.scss'

const DropdownMenuItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(
  ({ className, ...props }, ref) => (
    <Item className={clsx(s.item, className)} ref={ref} {...props} />
  )
)

DropdownMenuItem.displayName = 'DropdownMenuItem'

export { DropdownMenuItem }
