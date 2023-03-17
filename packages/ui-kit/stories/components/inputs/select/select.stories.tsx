import { useState } from 'react'

import { Meta } from '@storybook/react'

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
    value: 'cherry',
    label: 'Cherry',
  },
  {
    value: 'grapefruit',
    label: 'Grapefruit',
  },
  {
    value: 'lemon',
    label: 'Lemon',
  },
  {
    value: 'mango',
    label: 'Mango',
  },
]

export default {
  title: 'Components/Inputs/Select',
  component: Select,
} as Meta<typeof Select>

export const Simple = {
  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Select {...args} value={value} onChange={setValue} />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },

  args: {
    placeholder: 'Все курсы',
    disabled: false,
    options,
  },
}

export const SimpleWithLabel = {
  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Select {...args} value={value} onChange={setValue} />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },

  args: {
    placeholder: 'Все курсы',
    disabled: false,
    options,
    label: 'Курс*',
  },
}

export const Multiple = {
  render: args => {
    const [values, setValues] = useState([])

    return (
      <VerticalContainer>
        <Select {...args} value={values} onChange={setValues} multiple />
        <div>Selected values: {values.join(', ')}</div>
      </VerticalContainer>
    )
  },

  args: {
    placeholder: 'Все курсы',
    disabled: false,
    multiple: true,
    options,
  },
}

export const Error = {
  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Select {...args} value={value} onChange={setValue} />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },

  args: {
    placeholder: 'Все курсы',
    disabled: false,
    error: true,
    errorMessage: 'Ошибка',
    options,
  },
}

export const Secondary = {
  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Select {...args} value={value} onChange={setValue} />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },

  args: {
    placeholder: 'Все курсы',
    disabled: false,
    variant: 'secondary',
    options,
  },
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
          portal={false}
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
