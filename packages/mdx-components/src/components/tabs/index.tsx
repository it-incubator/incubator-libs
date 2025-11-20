'use client'
import { Children, FC, Fragment, ReactElement, ReactNode } from 'react'

import * as TabsRadixUI from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

export type TabsProps = {
  /** Use Tab (or Tabs.Tab) components as children. */
  children: TabsChildren
  defaultTab?: string
  tabs: string[]
}

type TabsChildren = ReactElement | ReactElement[]

/**
 * `Tabs` component
 *
 * @example
 * ```mdx
 * <Tabs items={['pnpm', 'npm', 'yarn']}>
 *    <Tabs.Tab>**pnpm**: Fast, disk space efficient package manager.</Tabs.Tab>
 *    <Tabs.Tab>**npm** is a package manager for the JavaScript programming language.</Tabs.Tab>
 *    <Tabs.Tab>**Yarn** is a software packaging system.</Tabs.Tab>
 * </Tabs>
 * ```
 */
export const Tabs = ({ children, defaultTab, tabs }: TabsProps) => {
  const classNames = {
    list: clsx(s.list),
    root: s.root,
    trigger: clsx(s.trigger),
  }

  /**
   * `resolvedChildren` contains the actual children to be mapped for rendering.
   * It accounts for both arrays of children and Fragment wrappers.
   */
  let resolvedChildren: TabsChildren

  if (Array.isArray(children)) {
    resolvedChildren = children
  } else {
    resolvedChildren = children.type === Fragment ? children.props.children : children
  }

  /**
   * Wraps each child with a Radix UI Tab Content component and associates it
   * with the corresponding tab value from the `tabs` array.
   */
  const content = Children.map(
    resolvedChildren,
    (child: ReactElement<{ children: ReactNode }>, index) => {
      return (
        <TabsRadixUI.Content className={s.content} key={index} value={tabs[index]}>
          {child?.props?.children}
        </TabsRadixUI.Content>
      )
    }
  )

  const defaultValue = defaultTab || tabs[0]

  return (
    <TabsRadixUI.Root className={classNames.root} defaultValue={defaultValue}>
      <TabsRadixUI.List className={classNames.list}>
        {tabs.map((tab, index) => (
          <TabsRadixUI.Trigger className={classNames.trigger} key={index} value={tab}>
            {tab}
          </TabsRadixUI.Trigger>
        ))}
      </TabsRadixUI.List>
      {content}
    </TabsRadixUI.Root>
  )
}

export type TabProps = {
  children: ReactNode
}

export const Tab: FC<TabProps> = ({ children }) => {
  return <>{children}</>
}

Tabs.Tab = Tab
