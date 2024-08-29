import { Meta } from '@storybook/react'

import { InDevelopment } from '../../../../src'

export default {
  title: 'Components/Illustrations/In Development',
  component: InDevelopment,
} as Meta<typeof InDevelopment>

export const Default = {
  render: args => <InDevelopment {...args} />,
}
