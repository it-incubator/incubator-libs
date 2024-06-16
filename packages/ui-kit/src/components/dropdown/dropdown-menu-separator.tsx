import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Separator } from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown-menu.module.scss'

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator className={clsx(s.separator, className)} ref={ref} {...props} />
))

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator'

export { DropdownMenuSeparator }
