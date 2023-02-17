import * as React from 'react'
import { ComponentProps } from 'react'

import { clsx } from 'clsx'

import s from '../icon.module.scss'

export const Delete = (props: ComponentProps<'svg'>) => {
  const className = clsx(s.fill, props.className)

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={19}
      fill="none"
      {...props}
    >
      <path
        fill="current"
        d="M1 16.952c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-12H1v12Zm2.46-7.12 1.41-1.41L7 10.542l2.12-2.12 1.41 1.41-2.12 2.12 2.12 2.12-1.41 1.41L7 13.362l-2.12 2.12-1.41-1.41 2.12-2.12-2.13-2.12Zm7.04-7.88-1-1h-5l-1 1H0v2h14v-2h-3.5Z"
      />
    </svg>
  )
}
