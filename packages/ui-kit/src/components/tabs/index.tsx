import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as TabsRadixUI from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

export type TabType = {
  disabled?: boolean
  title: string
  /** A unique value that associates the trigger with a content. */
  value: string
}

type CommonProps = {
  /** Use TabsContent components as children. */
  children?: ReactNode
  /** An array of objects with the value and title of the tab.
   *  {value: string, title: string}
   * */
  tabs: TabType[]
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<typeof TabsRadixUI.Root>

type ConditionalProps =
  | {
      fullWidth?: boolean
      variant?: 'primary'
    }
  | {
      fullWidth?: never
      variant?: 'secondary'
    }

export type TabsProps = CommonProps & ConditionalProps

export const Tabs: FC<TabsProps> = ({
  children,
  className,
  fullWidth,
  tabs,
  variant = 'primary',
  ...rest
}) => {
  const classNames = {
    list: clsx(s.list, s[variant]),
    root: clsx(s.root, className),
    trigger: clsx(s.trigger, fullWidth && s.fullWidth, s[variant]),
  }

  return (
    <TabsRadixUI.Root className={classNames.root} {...rest}>
      <TabsRadixUI.List className={classNames.list}>
        {tabs.map(tab => (
          <TabsRadixUI.Trigger
            className={classNames.trigger}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            {tab.title}
          </TabsRadixUI.Trigger>
        ))}
      </TabsRadixUI.List>
      {children}
    </TabsRadixUI.Root>
  )
}

export type TabContentProps = {
  children: ReactNode
  /** A unique value that associates the trigger with a content. */
  value: string
}

export const TabContent: FC<TabContentProps> = ({ children, value }) => {
  return (
    <TabsRadixUI.Content className={s.content} value={value}>
      {children}
    </TabsRadixUI.Content>
  )
}
