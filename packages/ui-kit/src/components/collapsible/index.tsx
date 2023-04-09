import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as CollapsibleRadix from '@radix-ui/react-collapsible'
import { clsx } from 'clsx'

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
} & ComponentPropsWithoutRef<'div'>

export const Collapsible: FC<CollapsibleProps> = ({
  children,
  collapsible,
  title,
  className,
  iconComponent,
  description,
  ...rest
}) => {
  const classNames = {
    root: clsx(s.root, className),
    trigger: s.trigger,
    triggerRow: s.triggerRow,
    titleBox: s.titleBox,
    titleIcons: s.titleIcon,
    description: s.description,
    content: s.content,
    arrowIcon: s.arrowIcon,
  }

  return (
    <CollapsibleRadix.Root className={classNames.root} {...rest}>
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

      <CollapsibleRadix.Content className={classNames.content}>{children}</CollapsibleRadix.Content>
    </CollapsibleRadix.Root>
  )
}
