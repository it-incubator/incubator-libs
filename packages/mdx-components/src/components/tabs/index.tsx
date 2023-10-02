import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from 'react'

import * as TabsRadixUI from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'

type TabsProps = {
  tabs: string[]
  children: ReactNode
  defaultValue?: string
}

export const Tabs: FC<TabsProps> = ({ children, tabs, defaultValue }) => {
  const [value, setValue] = useState<string>()
  const content = Children.map(children, (child, index) => {
    const element = cloneElement(child as ReactElement<{ value: string }>, {
      ...child?.props,
      value: tabs[index],
    })

    console.log(element)

    return element
  })

  console.log('here')
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
  return <TabsRadixUI.Content className={s.content}>{children}</TabsRadixUI.Content>
}
