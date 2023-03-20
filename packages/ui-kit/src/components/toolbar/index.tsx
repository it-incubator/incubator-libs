import { CSSProperties, FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import { More } from '../../'

import s from './toolbar.module.scss'

export type ToolbarProps = {
  /** Use TooltipItem components as children.*/
  children: ReactNode
  /** The preferred content alignment against the trigger. */
  align?: 'start' | 'center' | 'end'
  trigger?: ReactNode
  className?: string
  style?: CSSProperties
}

export const Toolbar = ({ children, trigger, align = 'end', className, style }: ToolbarProps) => {
  const classNames = {
    button: s.button,
    content: clsx(s.content, className),
    arrowBox: s.arrowBox,
    arrow: s.arrow,
    itemsBox: s.itemsBox,
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger ?? (
          <button className={classNames.button}>
            <More />
          </button>
        )}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={classNames.content}
          align={align}
          sideOffset={8}
          style={style}
        >
          <DropdownMenu.Arrow className={classNames.arrowBox} asChild>
            <div className={classNames.arrow} />
          </DropdownMenu.Arrow>
          <div className={classNames.itemsBox}>{children}</div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export type ToolbarItemProps = {
  children?: ReactNode
  disabled?: boolean
  /** Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item. */
  onSelect: (event: Event) => void
  className?: string
  style?: CSSProperties
}

export const ToolbarItem: FC<ToolbarItemProps> = ({
  children,
  disabled,
  onSelect,
  className,
  style,
}) => {
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <DropdownMenu.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
    >
      {children}
    </DropdownMenu.Item>
  )
}

export type ToolbarItemWithIconProps = Omit<ToolbarItemProps, 'children'> & {
  icon: ReactNode
  text: string
}
export const ToolbarItemWithIcon: FC<ToolbarItemWithIconProps> = ({
  icon,
  disabled,
  onSelect,
  text,
  className,
  style,
}) => {
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownMenu.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      onClick={event => event.stopPropagation()}
      style={style}
    >
      <div className={classNames.itemIcon}>{icon}</div>
      {text}
    </DropdownMenu.Item>
  )
}
