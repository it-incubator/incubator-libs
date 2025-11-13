import { useState } from 'react'

import { Modal, Select } from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'
import { Meta } from '@storybook/react-vite'

const options = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Стажировка для QA manual',
    value: 'qa-internship',
  },
  {
    disabled: true,
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
    label: 'Cherry',
    value: 'cherry',
  },
  {
    label: 'Grapefruit',
    value: 'grapefruit',
  },
  {
    label: 'Lemon',
    value: 'lemon',
  },
  {
    label: 'Mango',
    value: 'mango',
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
  component: Select,
  title: 'Components/Data Entry/Select',
} as Meta<typeof Select>

export const Simple = {
  args: {
    disabled: false,
    options,
    placeholder: 'Все курсы',
  },

  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },
}

export const SimpleWithLabel = {
  args: {
    disabled: false,
    label: 'Курс',
    options,
    placeholder: 'Все курсы',
  },

  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },
}
export const Required = {
  args: {
    disabled: false,
    label: 'Курс',
    options,
    placeholder: 'Все курсы',
    required: true,
  },

  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },
}

export const Multiple = {
  args: {
    disabled: false,
    multiple: true,
    options,
    placeholder: 'Все курсы',
  },

  render: args => {
    const [values, setValues] = useState([])

    return (
      <VerticalContainer>
        <Select {...args} multiple onChange={setValues} value={values} />
        <div>Selected values: {values.join(', ')}</div>
      </VerticalContainer>
    )
  },
}

export const Error = {
  args: {
    disabled: false,
    error: true,
    errorMessage: 'Ошибка',
    options,
    placeholder: 'Все курсы',
  },

  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },
}

export const Secondary = {
  args: {
    disabled: false,
    options,
    placeholder: 'Все курсы',
    variant: 'secondary',
  },

  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Select {...args} onChange={setValue} value={value} />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },
}

export const SmallWithLongItemNames = {
  args: {
    disabled: false,
    options,
    placeholder: 'Все курсы',
  },

  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <div style={{ width: 200 }}>
          <Select {...args} onChange={setValue} value={value} />
        </div>
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },
}

export const onModal = () => {
  const [value, setValue] = useState(null)
  const [value1, setValue1] = useState(null)
  const [value2, setValue2] = useState(null)
  const [value3, setValue3] = useState(null)
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Open modal</button>
      <Modal onClose={handleClose} open={open} title={'Select'}>
        <VerticalContainer>
          <Select
            disabled={false}
            onChange={setValue}
            options={options}
            placeholder={'Все курсы'}
            portal={false}
            value={value}
          />
          <Select
            disabled={false}
            onChange={setValue1}
            options={options}
            placeholder={'Все курсы'}
            portal={false}
            value={value1}
          />
          <Select
            disabled={false}
            onChange={setValue2}
            options={options}
            placeholder={'Все курсы'}
            portal={false}
            value={value2}
          />
          <Select
            disabled={false}
            onChange={setValue3}
            options={options}
            placeholder={'Все курсы'}
            portal={false}
            value={value3}
          />
        </VerticalContainer>
      </Modal>
    </div>
  )
}
