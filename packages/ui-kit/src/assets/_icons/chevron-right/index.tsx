import * as React from 'react'
import { ComponentProps } from 'react'

import { clsx } from 'clsx'

import s from '../icon.module.scss'

export const ChevronRight = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      className={clsx(s.stroke)}
      xmlns="http://www.w3.org/2000/svg"
      width={6}
      height={9}
      fill="none"
      {...props}
    >
      <path stroke="currentColor" d="m1 8 4-3.432-4-3.501" />
    </svg>
  )
}
