import { ComponentProps, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './chip.module.scss'

type ColorType = 'blue' | 'brown' | 'green'

export type ChipProps = {
  color: ColorType
  label: ReactNode
} & ComponentProps<'div'>

export const Chip: FC<ChipProps> = ({ color, label, ...rest }) => {
  const classNames = {
    box: clsx(s.box, s[color]),
  }

  return (
    <div className={classNames.box} {...rest}>
      {label}
    </div>
  )
}
