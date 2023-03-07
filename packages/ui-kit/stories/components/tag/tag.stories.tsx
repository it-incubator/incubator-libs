import { Meta } from '@storybook/react'

import { Tag } from '../../../src'

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta<typeof Tag>

export const Primary = {
  args: {
    label: 'Супер контент, спасибо 👍',
  },
}
