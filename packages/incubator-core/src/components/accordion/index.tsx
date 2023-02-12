import { FC, ReactNode } from 'react'

import * as AccordionRadix from '@radix-ui/react-accordion'

export type AccordionProps = {
  children: ReactNode
  collapsible?: boolean
  title: string
  value?: string
  onValueChange?: (value: string) => void
}

export const Accordion: FC<AccordionProps> = ({
  children,
  value,
  onValueChange,
  collapsible,
  title,
}) => {
  return (
    <AccordionRadix.Root
      {...{
        type: 'single',
        value,
        onValueChange,
        collapsible,
      }}
    >
      <AccordionRadix.Item value="item-1">
        <AccordionRadix.Trigger>{title}</AccordionRadix.Trigger>
        <AccordionRadix.Content>{children}</AccordionRadix.Content>
      </AccordionRadix.Item>
    </AccordionRadix.Root>
  )
}
