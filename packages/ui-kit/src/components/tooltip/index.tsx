import { ComponentProps, FC, ReactNode, useState } from 'react'

import * as TooltipRadix from '@radix-ui/react-tooltip'
import { AnimatePresence, motion } from 'framer-motion'

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
const variants = {
  active: {
    opacity: 1,
    y: 'var(--radix-tooltip-content-transform-origin)',
    transition: { duration: 0.2 },
  },
  inactive: { opacity: 0, y: -40, transition: { duration: 0.2 } },
}

export const motionProps = { variants, initial: 'inactive', animate: 'active', exit: 'inactive' }
export const Tooltip: FC<TooltipProps> = ({ children, icon, side = 'top', component, ...rest }) => {
  const [open, setOpen] = useState(false)

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
        {icon ?? (
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
      <TooltipRadix.Root open={open} onOpenChange={setOpen}>
        <TooltipRadix.Trigger asChild>{tooltipTrigger}</TooltipRadix.Trigger>
        <AnimatePresence>
          {open && (
            <TooltipRadix.Portal forceMount>
              <TooltipRadix.Content
                className={classNames.content}
                sideOffset={4}
                side={side}
                asChild
              >
                <motion.div {...motionProps}>
                  {children}
                  <TooltipRadix.Arrow className={classNames.arrowBox} asChild>
                    <div className={classNames.arrow} />
                  </TooltipRadix.Arrow>
                </motion.div>
              </TooltipRadix.Content>
            </TooltipRadix.Portal>
          )}
        </AnimatePresence>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
