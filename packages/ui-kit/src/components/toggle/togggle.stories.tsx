import { Toggle } from './toggle'
import { Meta } from '@storybook/react'

export default {
  component: Toggle,
  title: 'Components/Toggle',
} as Meta<typeof Toggle>

export const Simple = {
  args: {},
}
export const Disabled = {
  args: {
    disabled: true,
  },
}
