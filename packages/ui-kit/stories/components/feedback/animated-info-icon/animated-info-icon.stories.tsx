import { AnimatedInfoIcon } from '../../../../src'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  component: AnimatedInfoIcon,
  title: 'Components/Feedback/AnimatedInfoIcon',
} satisfies Meta<typeof AnimatedInfoIcon>

export default meta
type Story = StoryObj<typeof AnimatedInfoIcon>

export const Default: Story = {
  args: {
    enableAnimation: true,
  },
}
