/*eslint-disable react-hooks/rules-of-hooks*/
import { useEffect, useState } from 'react'

import { Button, Combobox, Modal, Select } from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'
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
]

export default {
  component: Combobox,
  title: 'Components/Data Entry/Combobox',
} as Meta<typeof Combobox>

export const Simple = {
  args: {
    disabled: false,
    options,
  },

  render: args => {
    const [value, setValue] = useState(null)
    const [inputValue, setInputValue] = useState('')

    return (
      <VerticalContainer>
        <div style={{ width: 200 }}>
          <Combobox
            {...args}
            inputValue={inputValue}
            onChange={setValue}
            onInputChange={setInputValue}
            value={value}
          />
        </div>
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },
}

export const SimpleWithLabel = {
  ...Simple,
  args: {
    ...Simple.args,
    label: 'Some label',
  },
}

export const SimpleWithPlaceholder = {
  ...Simple,
  args: {
    ...Simple.args,
    placeholder: 'Не выбран',
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
      <Button onClick={() => setOpen(!open)}>Open modal</Button>
      <Modal onClose={handleClose} open={open} title={'Select'}>
        <Combobox
          {...Simple.args}
          inputValue={inputValue}
          onChange={setValue}
          onInputChange={setInputValue}
          value={value}
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
          setOptions(json.items.map(item => ({ label: item.name, value: item.id })))
        })
        .finally(() => {
          setIsLoading(false)
        })
    }, [inputValue])

    return (
      <VerticalContainer>
        <Combobox
          inputValue={inputValue}
          isAsync
          isLoading={isLoading}
          onChange={setValue}
          onInputChange={setInputValue}
          options={options}
          value={value}
        />
        <div>Selected value: {value}</div>
      </VerticalContainer>
    )
  },
}
