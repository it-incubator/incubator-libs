import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Label } from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown-menu.module.scss'

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label className={clsx('uik_typography-caption-bold', s.label, className)} ref={ref} {...props} />
))

DropdownMenuLabel.displayName = 'DropdownMenuLabel'

export { DropdownMenuLabel }
