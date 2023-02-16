import * as React from 'react'
import { ComponentProps } from 'react'

import { clsx } from 'clsx'

import s from '../icon.module.scss'

export const Index = (props: ComponentProps<'svg'>) => {
  const className = clsx(s.fill, props.className)

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={14}
      fill="none"
      {...props}
    >
      <path fill="current" d="m12.527 0 1.474 1.473L1.474 14 .001 12.526z" />
      <path
        fill="current"
        d="m7 8.466 1.474-1.473 5.53 5.53-1.474 1.473L7 8.466ZM0 1.474 1.474 0l5.533 5.534-1.473 1.473L0 1.474Z"
      />
    </svg>
  )
}
