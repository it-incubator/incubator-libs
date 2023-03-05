import * as React from 'react'
import { ComponentProps } from 'react'

const More = (props: ComponentProps<'svg'>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" {...props}>
      <circle cx={9} cy={9} r={8.5} stroke="currentColor" />
      <circle cx={9} cy={5.5} r={0.875} fill="currentColor" />
      <circle cx={9} cy={9} r={0.875} fill="currentColor" />
      <circle cx={9} cy={12.5} r={0.875} fill="currentColor" />
    </svg>
  )
}

export default More
