import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

import s from './card.module.scss'

type CardProps = {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * Default element: `div`
   */
  asChild?: boolean
  /**
   * The variant of the card.
   * CardHeader is not displayed for the `"info"` variant.
   */
  variant?: 'info' | 'primary'
} & ComponentPropsWithoutRef<'div'>

const Card = forwardRef<ElementRef<'div'>, CardProps>(
  ({ asChild = false, className, variant = 'primary', ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'

    return <Comp className={clsx(s.card, s[variant], className)} ref={ref} {...props} />
  }
)

Card.displayName = 'Card'

export { Card }
