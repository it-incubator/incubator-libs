import { ComponentProps, ReactNode, useState } from 'react'

import { InfoOutline } from '../../'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './tooltip.module.scss'

type CommonProps = {
  children: ReactNode
  contentClassName?: string
  /** Prevents tooltip content from remaining open when hovering */
  disableHoverableContent?: boolean
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
export const Tooltip = ({
  children,
  component,
  contentClassName,
  disableHoverableContent,
  icon,
  side = 'top',
  ...props
}: TooltipProps) => {
  const [open, setOpen] = useState(false)

  const classNames = {
    arrow: s.arrow,
    arrowBox: s.arrowBox,
    content: clsx(s.content, contentClassName),
    iconButton: s.iconButton,
    infoIcon: s.infoIcon,
  }

  let tooltipTrigger: ReactNode

  if (component) {
    tooltipTrigger = <span>{component}</span>
  } else {
    tooltipTrigger = (
      <button className={classNames.iconButton} type={'button'}>
        {icon ?? (
          <span className={s.infoIcon}>
            <InfoOutline size={16} />
          </span>
        )}
      </button>
    )
  }

  return (
    <TooltipRadix.Provider delayDuration={DELAY_DURATION} {...props}>
      <TooltipRadix.Root
        disableHoverableContent={disableHoverableContent}
        onOpenChange={setOpen}
        open={open}
      >
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
