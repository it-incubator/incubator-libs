import { Meta } from '@storybook/react'

import { Toggle } from '../../../../src'

export default {
  title: 'Components/Data Entry/Toggle',
  component: Toggle,
} as Meta<typeof Toggle>

export const Simple = {
  args: {},
}
export const Disabled = {
  args: {
    disabled: true,
  },
}
