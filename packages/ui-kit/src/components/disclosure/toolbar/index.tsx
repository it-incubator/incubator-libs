import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { More } from '../../../assets/_icons/more'

import s from './toolbar.module.scss'

export type ToolbarProps = {
  /** Use TooltipItem components as children.*/
  children: ReactNode
  /** The preferred content alignment against the trigger. */
  align?: 'start' | 'center' | 'end'
}
const classNames = {
  button: s.button,
  content: s.content,
  arrowBox: s.arrowBox,
  arrow: s.arrow,
  itemsBox: s.itemsBox,
  item: s.item,
  itemIcon: s.itemIcon,
}

export const Toolbar = ({ children, align = 'end' }: ToolbarProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={classNames.button}>
          <More />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={classNames.content} align={align} sideOffset={8}>
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
}

export const ToolbarItem: FC<ToolbarItemProps> = ({ children, disabled, onSelect }) => {
  return (
    <DropdownMenu.Item className={classNames.item} disabled={disabled} onSelect={onSelect}>
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
}) => {
  return (
    <DropdownMenu.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      onClick={event => event.stopPropagation()}
    >
      <div className={classNames.itemIcon}>{icon}</div>
      {text}
    </DropdownMenu.Item>
  )
}
