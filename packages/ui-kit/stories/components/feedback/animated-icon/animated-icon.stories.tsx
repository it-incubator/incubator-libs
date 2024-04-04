import { AnimatedIcon, Edit, InfoOutline } from '../../../../src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AnimatedIcon,
  title: 'Components/Feedback/AnimatedIcon',
} satisfies Meta<typeof AnimatedIcon>

export default meta
type Story = StoryObj<typeof AnimatedIcon>

export const Default: Story = {
  args: {
    Icon: InfoOutline,
    enableAnimation: true,
  },
}

export const AnimationDisabled: Story = {
  args: {
    Icon: InfoOutline,
    enableAnimation: false,
  },
}

export const WithCustomSizeAndColor: Story = {
  args: {
    Icon: Edit,
    color: 'var(--color-danger-400)',
    enableAnimation: true,
    size: 25,
  },
}
