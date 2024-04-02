import { ComponentPropsWithoutRef } from 'react'

import { InfoOutline } from '../../assets/icons'
import { AnimatedIcon } from '../animated-icon'

export type AnimatedInfoIconProps = { enableAnimation: boolean } & ComponentPropsWithoutRef<
  typeof InfoOutline
>
export const AnimatedInfoIcon = ({ enableAnimation, ...iconProps }: AnimatedInfoIconProps) => {
  return <AnimatedIcon Icon={InfoOutline} enableAnimation={enableAnimation} {...iconProps} />
}
