import { Web } from './'
import { Meta } from '@storybook/react'

export default {
  component: Web,
  title: 'Components/Illustrations/Web',
} as Meta<typeof Web>

export const Default = {
  render: args => <Web {...args} />,
}
