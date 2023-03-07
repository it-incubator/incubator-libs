import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as CollapsibleRadix from '@radix-ui/react-collapsible'
import { clsx } from 'clsx'

import { KeyboardArrowDown } from '../../../assets/icons'

import s from './collapsible.module.scss'

export type CollapsibleProps = {
  title: string
  children: ReactNode
  iconComponent?: JSX.Element
  disabled?: boolean
  collapsible?: boolean
  /** The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.*/
  defaultOpen?: boolean
  /** The controlled open state of the collapsible. Must be used in conjunction with onOpenChange.*/
  open?: boolean
  /** Event handler called when the open state of the collapsible changes.*/
  onOpenChange?: (open: boolean) => void
} & ComponentPropsWithoutRef<'div'>

export const Collapsible: FC<CollapsibleProps> = ({
  children,
  collapsible,
  title,
  className,
  iconComponent,
  ...rest
}) => {
  const classNames = {
    root: clsx(s.root, className),
    trigger: s.trigger,
    titleBox: s.titleBox,
    titleIcons: s.titleIcon,
    content: s.content,
    arrowIcon: s.arrowIcon,
  }

  return (
    <CollapsibleRadix.Root className={classNames.root} {...rest}>
      <CollapsibleRadix.Trigger className={classNames.trigger}>
        <div className={classNames.titleBox}>
          {iconComponent}
          <span>{title}</span>
        </div>
        <KeyboardArrowDown className={classNames.arrowIcon} />
      </CollapsibleRadix.Trigger>

      <CollapsibleRadix.Content className={classNames.content}>{children}</CollapsibleRadix.Content>
    </CollapsibleRadix.Root>
  )
}
