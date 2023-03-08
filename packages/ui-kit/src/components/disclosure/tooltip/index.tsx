import { FC, ReactNode } from 'react'

import * as TooltipRadix from '@radix-ui/react-tooltip'

import { InfoOutline } from '../../../assets/icons'

import s from './tooltip.module.scss'

export type TooltipProps = {
  children: ReactNode
  icon?: JSX.Element
}

export const Tooltip: FC<TooltipProps> = ({ children, icon }) => {
  const classNames = {
    content: s.content,
    iconButton: s.iconButton,
    arrowBox: s.arrowBox,
    arrow: s.arrow,
    infoIcon: s.infoIcon,
  }

  const tooltipIcon = icon ? (
    icon
  ) : (
    <span className={s.infoIcon}>
      <InfoOutline size={16} />
    </span>
  )

  return (
    <TooltipRadix.Provider delayDuration={200}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <button className={classNames.iconButton}>{tooltipIcon}</button>
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content className={classNames.content} sideOffset={4}>
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
