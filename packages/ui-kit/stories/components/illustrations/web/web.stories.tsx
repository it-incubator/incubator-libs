import { Meta } from '@storybook/react'

import { Web } from '../../../../src'

export default {
  title: 'Components/Illustrations/Web',
  component: Web,
} as Meta<typeof Web>

export const Default = {
  render: args => <Web {...args} />,
}
