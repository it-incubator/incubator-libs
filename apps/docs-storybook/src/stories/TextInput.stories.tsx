import React from 'react'

import { TextInput } from '@incubator/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Example/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Some label',
  placeholder: 'Placeholder text',
}

export const Invalid = Template.bind({})
Invalid.args = {
  label: 'Some label',
  value: 'Some value',
  error: true,
  errorMessage: 'Текст ошибки / подсказка',
}
