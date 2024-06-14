import { AnimatedIcon, Edit, InfoOutline } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AnimatedIcon,
  title: 'Components/AnimatedIcon',
} satisfies Meta<typeof AnimatedIcon>

export default meta
type Story = StoryObj<typeof AnimatedIcon>

export const Default: Story = {
  args: {
    enableAnimation: true,
    renderIcon: props => <InfoOutline {...props} />,
  },
}

export const AnimationDisabled: Story = {
  args: {
    enableAnimation: false,
    renderIcon: props => <InfoOutline {...props} />,
  },
}

export const WithCustomSizeAndColor: Story = {
  args: {
    renderIcon: props => <Edit {...props} color={'var(--color-danger-400)'} size={25} />,
  },
}
