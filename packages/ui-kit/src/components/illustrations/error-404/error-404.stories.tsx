import { Error404 } from './'
import { Meta } from '@storybook/react'

export default {
  component: Error404,
  title: 'Components/Illustrations/Error 404',
} as Meta<typeof Error404>

export const Default = {
  render: args => <Error404 {...args} />,
}
