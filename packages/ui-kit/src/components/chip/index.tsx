import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import s from './chip.module.scss'

type ColorType = 'green' | 'blue' | 'brown'

export type ChipProps = {
  label: string
  color: ColorType
} & ComponentProps<'div'>

export const Chip: FC<ChipProps> = ({ label, color, ...rest }) => {
  const classNames = {
    box: clsx(s.box, s[color]),
  }

  return (
    <div className={classNames.box} {...rest}>
      {label}
    </div>
  )
}
