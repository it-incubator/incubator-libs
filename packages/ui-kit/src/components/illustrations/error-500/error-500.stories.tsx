import { Error500 } from './'
import { Meta } from '@storybook/react'

export default {
  component: Error500,
  title: 'Components/Illustrations/Error 500',
} as Meta<typeof Error500>

export const Default = {
  render: args => <Error500 {...args} />,
}
