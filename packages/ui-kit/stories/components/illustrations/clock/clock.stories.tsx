import { Meta } from '@storybook/react-vite'

import { Clock } from '../../../../src'

export default {
  title: 'Components/Illustrations/Clock',
  component: Clock,
} as Meta<typeof Clock>

export const Default = {
  render: args => <Clock {...args} />,
}
