import { ComponentProps, FC, ReactNode } from 'react'

import * as TooltipRadix from '@radix-ui/react-tooltip'

import { InfoOutline } from '../../'

import s from './tooltip.module.scss'

type CommonProps = {
  children: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
} & ComponentProps<'div'>

type ConditionalProps =
  | {
      icon?: ReactNode
      component?: never
    }
  | {
      icon?: never
      component?: ReactNode
    }

export type TooltipProps = CommonProps & ConditionalProps

export const Tooltip: FC<TooltipProps> = ({ children, icon, side = 'top', component, ...rest }) => {
  const classNames = {
    content: s.content,
    iconButton: s.iconButton,
    arrowBox: s.arrowBox,
    arrow: s.arrow,
    infoIcon: s.infoIcon,
  }

  let tooltipTrigger: ReactNode

  if (component) {
    tooltipTrigger = <span>{component}</span>
  } else {
    tooltipTrigger = (
      <button className={classNames.iconButton}>
        {icon ? (
          icon
        ) : (
          <span className={s.infoIcon}>
            <InfoOutline size={16} />
          </span>
        )}
      </button>
    )
  }

  const DELAY_DURATION = 200

  return (
    <TooltipRadix.Provider delayDuration={DELAY_DURATION} {...rest}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{tooltipTrigger}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content className={classNames.content} sideOffset={4} side={side}>
            {children}
            <TooltipRadix.Arrow className={classNames.arrowBox} asChild>
              <div className={classNames.arrow} />
            </TooltipRadix.Arrow>
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
