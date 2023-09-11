import { useEffect, useState } from 'react'

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
  title: 'Components/Data Entry/Combobox',
  component: Combobox,
} as Meta<typeof Combobox>

export const Simple = {
  render: args => {
    const [value, setValue] = useState(null)
    const [inputValue, setInputValue] = useState('')

    return (
      <VerticalContainer>
        <Combobox
          {...args}
          value={value}
          onChange={setValue}
          inputValue={inputValue}
          onInputChange={setInputValue}
        />
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

export const WithError = {
  ...SimpleWithLabel,
  args: {
    ...SimpleWithLabel.args,
    error: true,
    errorMessage: 'Сообщение об ошибке',
  },
}

export const SimpleDisabled = {
  ...SimpleWithLabel,
  args: {
    ...SimpleWithLabel.args,
    disabled: true,
  },
}

export const onModal = () => {
  const [value, setValue] = useState(null)
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Open modal</button>
      <Modal open={open} onClose={handleClose} title={'Select'}>
        <Combobox
          {...Simple.args}
          value={value}
          onChange={setValue}
          inputValue={inputValue}
          onInputChange={setInputValue}
        />
      </Modal>
    </div>
  )
}

export const Async = {
  render: args => {
    const [value, setValue] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [options, setOptions] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)
      fetch(`https://api.flashcards.andrii.es/v1/decks?name=${inputValue}`, {
        headers: {
          'x-auth-skip': 'true',
        },
      })
        .then(res => {
          return res.json()
        })
        .then(json => {
          setOptions(json.items.map(item => ({ value: item.id, label: item.name })))
        })
        .finally(() => {
          setIsLoading(false)
        })
    }, [inputValue])

    return (
      <VerticalContainer>
        <Combobox
          value={value}
          onChange={setValue}
          inputValue={inputValue}
          onInputChange={setInputValue}
          options={options}
          isAsync={true}
          isLoading={isLoading}
        />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },
}
