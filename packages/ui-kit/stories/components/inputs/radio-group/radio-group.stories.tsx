import { useState } from 'react'

import { Meta } from '@storybook/react'

import { RadioGroup } from '../../../../src'

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
  title: 'Components/Inputs/RadioGroup',
  component: RadioGroup,
} as Meta<typeof RadioGroup>

export const Default = {
  render: args => {
    const [value, setValue] = useState(null)

    return (
      <>
        <RadioGroup {...args} value={value} onChange={setValue} />
        <div>Selected value: {value}</div>
      </>
    )
  },

  args: {
    options,
    disabled: false,
  },
}

export const DefaultDisabled = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}
