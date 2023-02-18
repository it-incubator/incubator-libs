import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { More } from '../../../assets/icons/more'

import s from './toolbar.module.scss'

type TooltipProps = {
  /** Use TooltipItem components as children.*/
  children: ReactNode
}

export const Tooltip = ({ children }: TooltipProps) => {
  const classNames = {
    button: s.button,
    content: s.content,
    arrowBox: s.arrowBox,
    arrow: s.arrow,
    itemsBox: s.itemsBox,
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={classNames.button}>
          <More />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={classNames.content} align="end" sideOffset={8}>
          <DropdownMenu.Arrow className={classNames.arrowBox} asChild>
            <div className={classNames.arrow} />
          </DropdownMenu.Arrow>
          <div className={classNames.itemsBox}>{children}</div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export type TooltipItemProps = {
  icon: ReactNode
  text: string
  disabled?: boolean
  /** Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item. */
  onSelect: (event: Event) => void
}

export const TooltipItemWithIcon: FC<TooltipItemProps> = ({ icon, text, disabled, onSelect }) => {
  const classNames = {
    item: s.item,
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownMenu.Item className={classNames.item} disabled={disabled} onSelect={onSelect}>
      <div className={classNames.itemIcon}>{icon}</div>
      {text}
    </DropdownMenu.Item>
  )
}

export type TooltipItemWithIconProps = {
  children: ReactNode
  disabled?: boolean
  /** Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item. */
  onSelect: (event: Event) => void
}
export const TooltipItem: FC<TooltipItemWithIconProps> = ({ children, disabled, onSelect }) => {
  const classNames = {
    item: s.item,
  }

  return (
    <DropdownMenu.Item className={classNames.item} disabled={disabled} onSelect={onSelect}>
      {children}
    </DropdownMenu.Item>
  )
}
