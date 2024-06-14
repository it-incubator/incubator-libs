import { Label, TextField } from '../..'
import { Meta } from '@storybook/react'

export default {
  component: Label,
  title: 'Components/Label',
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
