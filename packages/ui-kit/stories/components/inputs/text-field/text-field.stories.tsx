import { useState } from 'react'

import { Meta } from '@storybook/react'

import { TextField } from '../../../../src'

export default {
  title: 'Components/Data Entry/Text Field',
  component: TextField,
} as Meta<typeof TextField>

export const Primary = {
  args: {
    label: 'Some label',
    placeholder: 'Placeholder text',
    error: false,
    disabled: false,
  },
}

export const Invalid = {
  render: args => {
    return (
      <TextField
        value="some value"
        label="some label"
        error={true}
        errorMessage="Текст ошибки / подсказка"
      />
    )
  },
}

export const Search = {
  render: args => {
    const [text, setText] = useState('')

    return (
      <>
        <TextField
          search={true}
          value={text}
          onChange={e => setText(e.currentTarget.value)}
          onClearClick={() => setText('')}
        />
      </>
    )
  },
  args: {
    label: 'Some label',
    placeholder: 'Search...',
    search: true,
  },
}
