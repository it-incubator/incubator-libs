import type { Meta, StoryObj } from '@storybook/react'

import { Popover } from './'

const meta = {
  component: Popover,
  title: 'Components/Popover',
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
