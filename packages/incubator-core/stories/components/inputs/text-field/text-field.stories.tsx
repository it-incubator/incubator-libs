import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextField } from '../../../../src'

export default {
  title: 'Components/Inputs/Text Field',
  component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Some label',
  placeholder: 'Placeholder text',
  error: false,
  disabled: false,
}

export const Invalid = Template.bind({})
Invalid.args = {
  label: 'Some label',
  value: 'Some value',
  error: true,
  errorMessage: 'Текст ошибки / подсказка',
}
