import { Meta, StoryObj } from '@storybook/react'

import { Tab, Tabs } from '../../../src/components/tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>

type Story = StoryObj<typeof meta>

export default meta

export const Primary: Story = {
  args: {
    children: (
      <>
        <Tab>Content 1</Tab>
        <Tab>Content 2</Tab>
      </>
    ),
    tabs: ['pnpm', 'yarn'],
  },
}
