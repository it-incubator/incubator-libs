import { useState } from 'react'

import { RadioGroup } from './'
import { Meta } from '@storybook/react'

const options = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Blueberry',
    value: 'blueberry',
  },
  {
    label: 'Grapes',
    value: 'grapes',
  },
  {
    label: 'Pineapple',
    value: 'pineapple',
  },
  {
    label: 'Apple',
    value: 'apple1',
  },
  {
    label: 'Banana',
    value: 'banana1',
  },
]

export default {
  component: RadioGroup,
  title: 'Components/RadioGroup',
} as Meta<typeof RadioGroup>

export const Default = {
  args: {
    disabled: false,
    options,
  },

  render: args => {
    const [value, setValue] = useState(null)

    console.log('value', value)

    return (
      <>
        <RadioGroup {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </>
    )
  },
}
export const WithError = {
  ...Default,
  args: {
    ...Default.args,
    errorMessage: 'This is an error message',
  },
}

export const DefaultDisabled = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}
