import { InDevelopment } from './'
import { Meta } from '@storybook/react'

export default {
  component: InDevelopment,
  title: 'Components/Illustrations/In Development',
} as Meta<typeof InDevelopment>

export const Default = {
  render: args => <InDevelopment {...args} />,
}
