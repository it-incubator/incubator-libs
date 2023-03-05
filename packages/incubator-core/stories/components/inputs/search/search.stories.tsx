import { Meta } from '@storybook/react'

import { Search } from '../../../../src'

export default {
  title: 'Components/Inputs/Search',
  component: Search,
} as Meta<typeof Search>

export const Default = {
  args: {
    error: false,
  },
}
