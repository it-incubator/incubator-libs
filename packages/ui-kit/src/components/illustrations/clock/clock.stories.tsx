import { Clock } from './'
import { Meta } from '@storybook/react'

export default {
  component: Clock,
  title: 'Components/Illustrations/Clock',
} as Meta<typeof Clock>

export const Default = {
  render: args => <Clock {...args} />,
}
