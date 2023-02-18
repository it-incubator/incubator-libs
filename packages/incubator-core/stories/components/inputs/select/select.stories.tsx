import { useState } from 'react'

import { ComponentMeta } from '@storybook/react'

import { Select } from '../../../../src'

const options = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'blueberry',
    label: 'Blueberry',
  },
  {
    value: 'grapes',
    label: 'Grapes',
  },
  {
    value: 'pineapple',
    label: 'Pineapple',
  },
  {
    value: 'apple1',
    label: 'Apple',
  },
  {
    value: 'banana1',
    label: 'Banana',
  },
]

export default {
  title: 'Components/Inputs/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const SimpleTemplate = args => {
  const [value, setValue] = useState({ label: null, value: null })

  return <Select {...args} value={value} onChange={setValue} />
}
const MultipleTemplate = args => {
  const [value, setValue] = useState([])

  return <Select {...args} value={value} onChange={setValue} />
}

export const Simple = SimpleTemplate.bind({})
Simple.args = {
  placeholder: 'Все курсы',
  disabled: false,
  options,
}

export const Multiple = MultipleTemplate.bind({})
Multiple.args = {
  placeholder: 'Все курсы',
  disabled: false,
  multiple: true,
  options,
}

export const Error = SimpleTemplate.bind({})
Error.args = {
  placeholder: 'Все курсы',
  disabled: false,
  error: true,
  errorMessage: 'Ошибка',
  options,
}

export const Secondary = SimpleTemplate.bind({})
Secondary.args = {
  placeholder: 'Все курсы',
  disabled: false,
  variant: 'secondary',
  options,
}
