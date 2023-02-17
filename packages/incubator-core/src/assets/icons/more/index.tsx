import * as React from 'react'
import { ComponentProps } from 'react'

import s from '../icon.module.scss'

export const More = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      className={s.stroke}
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...props}
    >
      <circle cx={9} cy={9} r={8.5} stroke="currentColor" />
      <circle className={s.fill} cx={9} cy={5.5} r={0.875} fill="current" />
      <circle className={s.fill} cx={9} cy={9} r={0.875} fill="current" />
      <circle className={s.fill} cx={9} cy={12.5} r={0.875} fill="current" />
    </svg>
  )
}
