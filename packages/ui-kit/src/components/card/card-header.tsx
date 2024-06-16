import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

import s from './card.module.scss'

type CardHeaderProps = {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * Default element: `div`
   */
  asChild?: boolean
} & ComponentPropsWithoutRef<'div'>

const CardHeader = forwardRef<ElementRef<'div'>, CardHeaderProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'

    return <Comp className={clsx(s.cardHeader, className)} ref={ref} {...props} />
  }
)

CardHeader.displayName = 'CardHeader'

export { CardHeader }
