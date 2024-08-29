import { Label, TextField } from '../../../../src'
import { Meta } from '@storybook/react'

export default {
  component: Label,
  title: 'Components/Data Entry/Label',
} as Meta<typeof Label>

export const DefaultWithoutChildren = {
  args: {
    label: 'Some label',
  },
}

export const DefaultWithTextField = {
  args: {
    children: <TextField />,
    label: 'Some label',
  },
}

export const RequiredWithTextField = {
  args: {
    children: <TextField />,
    label: 'Name',
    required: true,
  },
}
