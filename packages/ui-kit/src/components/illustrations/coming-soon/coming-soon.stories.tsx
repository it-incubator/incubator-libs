import { ComingSoon } from './'
import { Meta } from '@storybook/react'

export default {
  component: ComingSoon,
  title: 'Components/Illustrations/Coming Soon',
} as Meta<typeof ComingSoon>

export const Default = {
  render: args => <ComingSoon {...args} />,
}
