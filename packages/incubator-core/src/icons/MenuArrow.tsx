import * as React from 'react'
import { ComponentProps } from 'react'

import { clsx } from 'clsx'

import s from './Icons.module.scss'

export const MenuArrowIcons = (props: ComponentProps<'svg'>) => (
  <svg
    className={clsx(s.stroke)}
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={8}
    fill="none"
    {...props}
  >
    <path stroke="currentColor" strokeWidth={1.5} d="m1 1 5 5 5-5" />
  </svg>
)
