import { ComponentPropsWithoutRef, FC, ReactNode, useEffect, useState } from 'react'

import * as CollapsibleRadix from '@radix-ui/react-collapsible'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import useMeasure from 'react-use-measure'

import { KeyboardArrowDown, Typography } from '../../'

import s from './collapsible.module.scss'

export type CollapsibleProps = {
  title: string
  children: ReactNode
  iconComponent?: ReactNode
  description?: string
  disabled?: boolean
  collapsible?: boolean
  /** The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.*/
  defaultOpen?: boolean
  /** The controlled open state of the collapsible. Must be used in conjunction with onOpenChange.*/
  open?: boolean
  /** Event handler called when the open state of the collapsible changes.*/
  onOpenChange?: (open: boolean) => void
  contentClassName?: string
} & ComponentPropsWithoutRef<'div'>

export const Collapsible: FC<CollapsibleProps> = ({
  children,
  collapsible,
  title,
  className,
  iconComponent,
  description,
  contentClassName,
  defaultOpen,
  open,
  onOpenChange,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [measureRef, { height }] = useMeasure()

  useEffect(() => {
    if (open !== undefined && open !== isOpen) {
      setIsOpen(open)
    }
  }, [open])
  const handleOpenChanged = (open: boolean) => {
    setIsOpen(open)
    if (onOpenChange) {
      onOpenChange(open)
    }
  }

  const classNames = {
    root: clsx(s.root, className),
    trigger: s.trigger,
    triggerRow: s.triggerRow,
    titleBox: s.titleBox,
    titleIcons: s.titleIcon,
    description: s.description,
    content: clsx(s.content, contentClassName),
    arrowIcon: s.arrowIcon,
  }

  return (
    <CollapsibleRadix.Root
      className={classNames.root}
      open={isOpen}
      onOpenChange={handleOpenChanged}
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
      <CollapsibleRadix.Content forceMount asChild>
        <motion.div
          className={classNames.content}
          initial={{
            height: isOpen ? height : 0,
          }}
          animate={{
            height: isOpen ? height : 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className={s.text} ref={measureRef}>
            {children}
          </div>
        </motion.div>
      </CollapsibleRadix.Content>
    </CollapsibleRadix.Root>
  )
}
