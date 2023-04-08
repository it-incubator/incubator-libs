import { Meta } from '@storybook/react'

import { Error500 } from '../../../../src/components/illustrations'

export default {
  title: 'Components/Illustrations/Error 500',
  component: Error500,
} as Meta<typeof Error500>

export const Default = {
  render: args => <Error500 {...args} />,
}
