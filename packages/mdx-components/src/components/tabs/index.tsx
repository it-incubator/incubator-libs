import {
  Children,
  FC,
  Fragment,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useState,
} from 'react'

import * as TabsRadixUI from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

type TabsProps = {
  tabs: string[]
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[]
  defaultValue?: string
}

export const Tabs: FC<TabsProps> = ({ children, tabs, defaultValue }) => {
  const [value, setValue] = useState<string>()

  if (!children) {
    return null
  }
  // @ts-expect-error, todo: fix typings
  const resolvedChildren = children.type === Fragment ? children.props.children : children

  const content = Children.map(
    resolvedChildren,
    (child: ReactElement<{ children: ReactNode }>, index) => {
      return (
        <TabsRadixUI.Content className={s.content} value={tabs[index]}>
          {child?.props?.children}
        </TabsRadixUI.Content>
      )
    }
  )

  const classNames = {
    root: s.root,
    list: clsx(s.list),
    trigger: clsx(s.trigger),
  }

  return (
    <TabsRadixUI.Root
      className={classNames.root}
      value={value}
      defaultValue={defaultValue}
      onValueChange={setValue}
    >
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
  /** A unique value that associates the trigger with a content. */
  children: ReactNode
}

export const Tab: FC<TabProps> = ({ children }) => {
  return <>{children}</>
}
