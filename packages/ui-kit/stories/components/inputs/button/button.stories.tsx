import { Button } from '../../../../src'
import { Meta } from '@storybook/react'

export default {
  argTypes: {
    onClick: { action: 'clicked' },
  },
  component: Button,
  title: 'Components/Data Entry/Button',
} as Meta<typeof Button>

export const Primary = {
  args: {
    children: 'Button',
    disabled: false,
    variant: 'primary',
  },
}
