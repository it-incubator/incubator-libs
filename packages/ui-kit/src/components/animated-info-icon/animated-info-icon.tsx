'use client'
import { ComponentPropsWithoutRef } from 'react'

import { InfoOutline } from '../../assets/icons'
import { AnimatedIcon } from '../animated-icon'

export type AnimatedInfoIconProps = { enableAnimation: boolean } & ComponentPropsWithoutRef<
  typeof InfoOutline
>
export const AnimatedInfoIcon = ({ enableAnimation, ...iconProps }: AnimatedInfoIconProps) => {
  return (
    <AnimatedIcon
      enableAnimation={enableAnimation}
      renderIcon={props => <InfoOutline {...props} />}
      {...iconProps}
    />
  )
}
