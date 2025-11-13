import { useState } from 'react'

import { TextField } from '../../../../src'
import { Meta } from '@storybook/react-vite'

export default {
  component: TextField,
  title: 'Components/Data Entry/Text Field',
} as Meta<typeof TextField>

export const Primary = {
  args: {
    disabled: false,
    error: false,
    label: 'Some label',
    placeholder: 'Placeholder text',
  },
}

export const Invalid = {
  render: args => {
    return (
      <TextField
        errorMessage={'Текст ошибки / подсказка'}
        label={'some label'}
        value={'some value'}
      />
    )
  },
}

export const Search = {
  args: {
    label: 'Some label',
    placeholder: 'Search...',
    search: true,
  },
  render: args => {
    const [text, setText] = useState('')

    return (
      <>
        <TextField
          onChange={e => setText(e.currentTarget.value)}
          onClearClick={() => setText('')}
          search
          value={text}
        />
      </>
    )
  },
}

export const RequiredWithLabel = {
  args: {
    label: 'Name',
    required: true,
  },
}
