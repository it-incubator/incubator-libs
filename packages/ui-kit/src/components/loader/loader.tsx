'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './loader.module.scss'
export type LoaderProps = ComponentPropsWithoutRef<'progress'>

export const Loader = forwardRef<ElementRef<'progress'>, LoaderProps>(
  ({ className, ...restProps }, ref) => {
    return <progress className={clsx(s.root, className)} {...restProps} ref={ref} />
  }
)
