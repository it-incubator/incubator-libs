import * as React from 'react'
import { ComponentProps } from 'react'

import { clsx } from 'clsx'

import s from '../icon.module.scss'

export const ChevronLeft = ({ className, ...props }: ComponentProps<'svg'>) => {
  return (
    <svg
      className={clsx(s.stroke, className)}
      xmlns="http://www.w3.org/2000/svg"
      width={6}
      height={9}
      fill="none"
      {...props}
    >
      <path stroke="currentColor" d="M5 1 1 4.432l4 3.501" />
    </svg>
  )
}
