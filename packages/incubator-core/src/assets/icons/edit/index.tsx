import * as React from 'react'
import { ComponentProps } from 'react'

import { clsx } from 'clsx'

import s from '../icon.module.scss'

export const Edit = (props: ComponentProps<'svg'>) => {
  const className = clsx(s.fill, props.className)

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={21}
      fill="none"
      {...props}
    >
      <path
        fill="current"
        d="m12 .952 3 3-2.287 2.288-3-3L12 .952ZM0 12.94v3h3l8.299-8.287-3-3L0 12.94Zm0 6h16v2H0v-2Z"
      />
    </svg>
  )
}
