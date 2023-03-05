import { Meta } from '@storybook/react'

import { Button } from '../../../../src'

export default {
  title: 'Components/Inputs/Button',
  component: Button,
} as Meta<typeof Button>

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button',
    disabled: false,
  },
}
