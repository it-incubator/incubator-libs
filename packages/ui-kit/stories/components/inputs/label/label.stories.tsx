import { Meta } from '@storybook/react'

import { Label, TextField } from '../../../../src'

export default {
  title: 'Components/Inputs/Label',
  component: Label,
} as Meta<typeof Label>

export const DefaultWithoutChildren = {
  args: {
    label: 'Some label',
  },
}

export const DefaultWithTextField = {
  args: {
    label: 'Some label',
    children: <TextField />,
  },
}
