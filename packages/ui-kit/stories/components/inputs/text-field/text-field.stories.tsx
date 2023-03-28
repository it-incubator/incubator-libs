import { Meta } from '@storybook/react'

import { TextField } from '../../../../src'

export default {
  title: 'Components/Data Entry/Text Field',
  component: TextField,
} as Meta<typeof TextField>

export const Primary = {
  args: {
    label: 'Some label',
    placeholder: 'Placeholder text',
    error: false,
    disabled: false,
  },
}

export const Invalid = {
  args: {
    label: 'Some label',
    value: 'Some value',
    error: true,
    errorMessage: 'Текст ошибки / подсказка',
  },
}

export const Search = {
  args: {
    label: 'Some label',
    placeholder: 'Search...',
    search: true,
  },
}
