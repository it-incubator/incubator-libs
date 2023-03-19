import { Meta } from '@storybook/react'

import { Spinner } from '../../../../src'

export default {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>

export const Default = {
  args: {
    size: 48,
  },
}

export const Small = {
  args: {
    size: 24,
  },
}
