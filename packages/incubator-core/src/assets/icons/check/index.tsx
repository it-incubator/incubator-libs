import { SVGProps } from 'react'

import s from './check.module.scss'
export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={11} height={9} fill="none" {...props}>
    <path d="m1 4 3.44 3.6 5.7-6.6" className={s.path} />
  </svg>
)
