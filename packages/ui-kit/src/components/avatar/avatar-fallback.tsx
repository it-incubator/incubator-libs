import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Fallback } from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

const AvatarFallback = forwardRef<
  ElementRef<typeof Fallback>,
  ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => (
  <Fallback className={clsx(s.avatarFallback, className)} ref={ref} {...props} />
))

AvatarFallback.displayName = 'AvatarFallback'

export { AvatarFallback }
