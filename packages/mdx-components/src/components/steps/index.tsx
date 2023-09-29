import type { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import s from './steps.module.scss'

/**
 * `Steps` Component
 *
 * A container component for a list of steps.
 * Each individual step is expected to be represented by Heading level 3 (h3).
 *
 * @example
 * ```mdx
 * <Steps>
 * ### Step 1
 *
 * Contents for step 1.
 *
 * ### Step 2
 *
 * Contents for step 2.
 * </Steps>
 * ```
 */
export const Steps: FC<ComponentProps<'div'>> = ({ children, className, ...props }) => {
  const classNames = {
    box: s.box,
  }

  return (
    <div {...props} className={clsx(classNames.box, className)}>
      {children}
    </div>
  )
}
