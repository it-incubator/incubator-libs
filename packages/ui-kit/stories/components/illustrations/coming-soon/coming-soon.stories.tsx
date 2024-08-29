import { Meta } from '@storybook/react'

import { ComingSoon } from '../../../../src'

export default {
  title: 'Components/Illustrations/Coming Soon',
  component: ComingSoon,
} as Meta<typeof ComingSoon>

export const Default = {
  render: args => <ComingSoon {...args} />,
}
