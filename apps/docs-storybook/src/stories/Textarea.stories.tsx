import React from 'react'

import { Textarea } from '@incubator/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Example/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = args => <Textarea {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Some label',
  placeholder: 'Placeholder text',
  error: false,
}

export const Invalid = Template.bind({})
Invalid.args = {
  label: 'Some label',
  value: 'Some value',
  error: true,
  errorMessage: 'Текст ошибки / подсказка',
}
