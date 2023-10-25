import { ComponentPropsWithoutRef, FC, ReactNode, useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

import { KeyboardArrowDown, Typography } from '../../'
import * as CollapsibleRadix from '@radix-ui/react-collapsible'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

import s from './collapsible.module.scss'

export type CollapsibleProps = {
  children: ReactNode
  collapsible?: boolean
  contentClassName?: string
  /** The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.*/
  defaultOpen?: boolean
  description?: string
  disabled?: boolean
  iconComponent?: ReactNode
  noPadding?: boolean
  /** Event handler called when the open state of the collapsible changes.*/
  onOpenChange?: (open: boolean) => void
  /** The controlled open state of the collapsible. Must be used in conjunction with onOpenChange.*/
  open?: boolean
  title: string
} & ComponentPropsWithoutRef<'div'>

export const Collapsible: FC<CollapsibleProps> = ({
  children,
  className,
  collapsible,
  contentClassName,
  defaultOpen,
  description,
  iconComponent,
  noPadding,
  onOpenChange,
  open,
  title,
  ...rest
}) => {
  const styles = {
    padding: noPadding ? '0' : '6px 24px',
  }

  const [isOpen, setIsOpen] = useState(open ?? false)
  const [disableAnimation, setDisableAnimation] = useState(open === true)
  const [measureRef, { height }] = useMeasure()

  useEffect(() => {
    if (open !== undefined && open !== isOpen) {
      setIsOpen(open)
      setDisableAnimation(false)
    }
  }, [open, isOpen])

  const handleOpenChanged = (open: boolean) => {
    setIsOpen(open)
    setDisableAnimation(false) // Enable animation on user interaction
    if (onOpenChange) {
      onOpenChange(open)
    }
  }

  const classNames = {
    arrowIcon: s.arrowIcon,
    content: clsx(s.content, contentClassName),
    description: s.description,
    root: clsx(s.root, className),
    titleBox: s.titleBox,
    titleIcons: s.titleIcon,
    trigger: s.trigger,
    triggerRow: s.triggerRow,
  }

  return (
    <CollapsibleRadix.Root
      className={classNames.root}
      onOpenChange={handleOpenChanged}
      open={isOpen}
      {...rest}
    >
      <CollapsibleRadix.Trigger className={classNames.trigger}>
        <div className={classNames.triggerRow}>
          <div className={classNames.titleBox}>
            {iconComponent}
            <Typography.Subtitle1 className={s.title}>{title}</Typography.Subtitle1>
          </div>
          <KeyboardArrowDown className={classNames.arrowIcon} />
        </div>
        {description && <p className={classNames.description}>{description}</p>}
      </CollapsibleRadix.Trigger>
      <CollapsibleRadix.Content asChild forceMount>
        <motion.div
          animate={{ height: isOpen ? height : 0 }}
          className={classNames.content}
          initial={disableAnimation ? false : { height: isOpen ? height : 0 }}
          transition={{ duration: disableAnimation ? 0 : 0.2 }}
        >
          <div className={s.text} ref={measureRef} style={styles}>
            {children}
          </div>
        </motion.div>
      </CollapsibleRadix.Content>
    </CollapsibleRadix.Root>
  )
}
