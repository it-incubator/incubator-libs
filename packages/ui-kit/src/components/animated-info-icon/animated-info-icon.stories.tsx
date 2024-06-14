import { AnimatedInfoIcon } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AnimatedInfoIcon,
  title: 'Components/AnimatedInfoIcon',
} satisfies Meta<typeof AnimatedInfoIcon>

export default meta
type Story = StoryObj<typeof AnimatedInfoIcon>

export const Default: Story = {
  args: {
    enableAnimation: true,
  },
}
