import { ComponentPropsWithoutRef, FC } from 'react'

import * as LabelRadixUI from '@radix-ui/react-label'

import s from './label.module.scss'

export type LabelProps = {
  label?: string
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<LabelProps> = ({ label, children, ...rest }) => {
  const classNames = {
    label: s.label,
  }

  return (
    <LabelRadixUI.Root {...rest}>
      {label && <div className={classNames.label}>{label}</div>}
      {children}
    </LabelRadixUI.Root>
  )
}
