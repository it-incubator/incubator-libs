import { Meta } from '@storybook/react'

import { Card } from '../../../../src/components/card/index'

export default {
  title: 'Components/Data Display/Card',
  component: Card,
} as Meta<typeof Card>

export const Primary = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    title: 'Some title',
  },
}
