import { useState } from 'react'

import { ComponentMeta } from '@storybook/react'

import { Modal, Select } from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'

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
  const [value, setValue] = useState(null)

  return (
    <VerticalContainer>
      <Select {...args} value={value} onChange={setValue} />
      <div>Selected value: {value}</div>
    </VerticalContainer>
  )
}
const MultipleTemplate = args => {
  const [values, setValues] = useState([])

  return (
    <VerticalContainer>
      <Select {...args} value={values} onChange={setValues} multiple />
      <div>Selected values: {values.join(', ')}</div>
    </VerticalContainer>
  )
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

export const onModal = () => {
  const [value, setValue] = useState(null)
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Open modal</button>
      <Modal open={open} onClose={handleClose} title={'Select'}>
        <Select
          placeholder="Все курсы"
          disabled={false}
          value={value}
          onChange={setValue}
          options={options}
        />
      </Modal>
    </div>
  )
}
