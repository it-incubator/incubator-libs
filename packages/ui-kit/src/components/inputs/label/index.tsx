import { ComponentPropsWithoutRef, FC } from 'react'

import * as LabelRadixUI from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './label.module.scss'

export type LabelProps = {
  label?: string
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<LabelProps> = ({ label, children, className, ...rest }) => {
  const classNames = {
    label: clsx(s.label, className),
  }

  return (
    <LabelRadixUI.Root {...rest}>
      {label && <div className={classNames.label}>{label}</div>}
      {children}
    </LabelRadixUI.Root>
  )
}
