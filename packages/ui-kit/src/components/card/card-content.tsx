import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

import s from './card.module.scss'

type CardContentProps = {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * Default element: `div`
   */
  asChild?: boolean
} & ComponentPropsWithoutRef<'div'>

const CardContent = forwardRef<ElementRef<'div'>, CardContentProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'

    return <Comp className={clsx(s.cardContent, className)} ref={ref} {...props} />
  }
)

CardContent.displayName = 'CardContent'

export { CardContent }
