import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

import s from './card.module.scss'

type CardTitleProps = {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * Default element: `h3`
   */
  asChild?: boolean
} & ComponentPropsWithoutRef<'h3'>

const CardTitle = forwardRef<ElementRef<'h3'>, CardTitleProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h3'

    return <Comp className={clsx(s.cardTitle, className)} ref={ref} {...props} />
  }
)

CardTitle.displayName = 'CardTitle'

export { CardTitle }
