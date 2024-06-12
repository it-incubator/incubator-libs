import { Textarea } from '../../../../src'
import { Meta } from '@storybook/react'

export default {
  component: Textarea,
  title: 'Components/Data Entry/Textarea',
} as Meta<typeof Textarea>

export const Primary = {
  args: {
    disabled: false,
    error: false,
    label: 'Some label',
    placeholder: 'Placeholder text',
  },
}
export const Required = {
  args: {
    ...Primary.args,
    required: true,
  },
}

export const Invalid = {
  args: {
    disabled: false,
    errorMessage: 'Текст ошибки / подсказка',
    label: 'Some label',
    value: 'Some value',
  },
}
