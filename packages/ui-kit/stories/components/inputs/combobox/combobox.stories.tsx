import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Combobox, Modal, Select } from '../../../../src'
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
  title: 'Components/Inputs/Combobox',
  component: Combobox,
} as Meta<typeof Combobox>

export const Simple = {
  render: args => {
    const [value, setValue] = useState(null)

    return (
      <VerticalContainer>
        <Combobox {...args} value={value} onChange={setValue} />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },

  args: {
    options,
    disabled: false,
  },
}

export const SimpleWithLabel = {
  ...Simple,
  args: {
    ...Simple.args,
    label: 'Some label',
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
        <Combobox {...Simple.args} value={value} onChange={setValue} />
      </Modal>
    </div>
  )
}
