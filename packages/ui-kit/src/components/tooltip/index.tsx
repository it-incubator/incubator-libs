import { ComponentProps, FC, ReactNode, useState } from 'react'

import { InfoOutline } from '../../'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { AnimatePresence, motion } from 'framer-motion'

import s from './tooltip.module.scss'

type CommonProps = {
  children: ReactNode
  side?: 'bottom' | 'left' | 'right' | 'top'
} & ComponentProps<'div'>

type ConditionalProps =
  | {
      component?: ReactNode
      icon?: never
    }
  | {
      component?: never
      icon?: ReactNode
    }

export type TooltipProps = CommonProps & ConditionalProps
const variants = {
  active: {
    opacity: 1,
    transition: { duration: 0.2 },
    y: 'var(--radix-tooltip-content-transform-origin)',
  },
  inactive: { opacity: 0, transition: { duration: 0.2 }, y: -40 },
}

const DELAY_DURATION = 200

export const motionProps = { animate: 'active', exit: 'inactive', initial: 'inactive', variants }
export const Tooltip: FC<TooltipProps> = ({ children, component, icon, side = 'top', ...rest }) => {
  const [open, setOpen] = useState(false)

  const classNames = {
    arrow: s.arrow,
    arrowBox: s.arrowBox,
    content: s.content,
    iconButton: s.iconButton,
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

  return (
    <TooltipRadix.Provider delayDuration={DELAY_DURATION} {...rest}>
      <TooltipRadix.Root onOpenChange={setOpen} open={open}>
        <TooltipRadix.Trigger asChild>{tooltipTrigger}</TooltipRadix.Trigger>
        <AnimatePresence>
          {open && (
            <TooltipRadix.Portal forceMount>
              <TooltipRadix.Content
                asChild
                className={classNames.content}
                side={side}
                sideOffset={4}
              >
                <motion.div {...motionProps}>
                  {children}
                  <TooltipRadix.Arrow asChild className={classNames.arrowBox}>
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
