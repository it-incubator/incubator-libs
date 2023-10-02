import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from '../../../src/components/tabs'

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
        <Tabs.Tab>
          <b>pnpm</b>: fast, disk space efficient package manager.
        </Tabs.Tab>
        <Tabs.Tab>
          <b>yarn</b>: is a software packaging system.
        </Tabs.Tab>
        <Tabs.Tab>
          <b>npm</b>: is a package manager for the JavaScript programming language.
        </Tabs.Tab>
      </>
    ),
    tabs: ['pnpm', 'yarn', 'npm'],
  },
}

export const WithDefaultValue: Story = {
  args: {
    ...Primary.args,
    defaultTab: 'yarn',
  },
}
