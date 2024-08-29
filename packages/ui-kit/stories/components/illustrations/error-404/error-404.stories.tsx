import { Meta } from '@storybook/react'

import { Error404 } from '../../../../src'

export default {
  title: 'Components/Illustrations/Error 404',
  component: Error404,
} as Meta<typeof Error404>

export const Default = {
  render: args => <Error404 {...args} />,
}
