import { Meta } from '@storybook/react'

import { Textarea } from '../../../../src'

export default {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
} as Meta<typeof Textarea>

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
    disabled: false,
  },
}
