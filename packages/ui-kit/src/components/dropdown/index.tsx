'use client'
import { CSSProperties, ComponentPropsWithoutRef, FC, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { AnimatePresence, MotionProps, Variants, motion } from 'framer-motion'

import s from './toolbar.module.scss'

import { MenuDots, Typography } from '../../'

export type ToolbarProps = {
  /** The preferred content alignment against the trigger. */
  align?: 'center' | 'end' | 'start'
  /** Use TooltipItem components as children.*/
  children: ReactNode
  className?: string
  style?: CSSProperties
  trigger?: ReactNode
}
const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      delayChildren: 0.2,
      duration: 0.4,
      staggerChildren: 0.05,
      type: 'spring',
    },
  },
} satisfies Variants
const item = {
  transition: { opacity: { duration: 0.2 } },
  variants: {
    closed: { opacity: 0, x: -16 },
    open: { opacity: 1, x: 0 },
  },
} satisfies MotionProps

export const Dropdown = ({ align = 'end', children, className, style, trigger }: ToolbarProps) => {
  const [open, setOpen] = useState(false)

  const classNames = {
    arrow: s.arrow,
    arrowBox: s.arrowBox,
    button: s.button,
    content: clsx(s.content, className),
    itemsBox: s.itemsBox,
  }

  return (
    <DropdownMenuRadix.Root onOpenChange={setOpen} open={open}>
      <DropdownMenuRadix.Trigger asChild>
        {trigger ?? (
          <button className={classNames.button} type={'button'}>
            <MenuDots />
          </button>
        )}
      </DropdownMenuRadix.Trigger>
      <AnimatePresence>
        {open && (
          <DropdownMenuRadix.Portal forceMount>
            <DropdownMenuRadix.Content
              align={align}
              asChild
              className={classNames.content}
              forceMount
              onClick={event => event.stopPropagation()}
              sideOffset={8}
              style={style}
            >
              <motion.div
                animate={open ? 'open' : 'closed'}
                exit={'closed'}
                initial={'closed'}
                variants={menu}
              >
                <DropdownMenuRadix.Arrow asChild className={classNames.arrowBox}>
                  <div className={classNames.arrow} />
                </DropdownMenuRadix.Arrow>
                <div className={classNames.itemsBox}>{children}</div>
              </motion.div>
            </DropdownMenuRadix.Content>
          </DropdownMenuRadix.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuRadix.Root>
  )
}

export type ToolbarItemProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  /** Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item. */
  onSelect: (event: Event) => void
  style?: CSSProperties
}

export const ToolbarItem: FC<ToolbarItemProps> = ({
  children,
  className,
  disabled,
  onSelect,
  style,
}) => {
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
    >
      <motion.div {...item}>{children}</motion.div>
    </DropdownMenuRadix.Item>
  )
}

export type ToolbarItemWithIconProps = Omit<ToolbarItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const ToolbarItemWithIcon: FC<ToolbarItemWithIconProps> = ({
  className,
  disabled,
  icon,
  onSelect,
  style,
  text,
  ...rest
}) => {
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onClick={event => event.stopPropagation()}
      onSelect={onSelect}
      style={style}
      {...rest}
    >
      <motion.div {...item}>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography.Caption>{text}</Typography.Caption>
      </motion.div>
    </DropdownMenuRadix.Item>
  )
}
