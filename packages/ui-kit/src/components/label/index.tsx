import { ComponentPropsWithoutRef, FC, ReactNode, useMemo } from 'react'

import * as LabelRadixUI from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './label.module.scss'

export type LabelProps = {
  label?: ReactNode
  required?: boolean
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<LabelProps> = ({ children, className, label, required, ...rest }) => {
  const classNames = useMemo(
    () => ({
      label: clsx(s.label, className),
      required: s.required,
    }),
    [className]
  )

  return (
    <LabelRadixUI.Root {...rest}>
      {label && (
        <div className={classNames.label}>
          {label}
          {required && <span className={classNames.required}>*</span>}
        </div>
      )}
      {children}
    </LabelRadixUI.Root>
  )
}
