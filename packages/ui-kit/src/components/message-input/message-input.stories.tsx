import { useState } from 'react'

import { MessageInput } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: MessageInput,
  title: 'Components/Chat/Message Input',
} satisfies Meta<typeof MessageInput>

export default meta
type Story = StoryObj<typeof meta>

export const Uncontrolled: Story = {
  args: {
    placeholder: 'Type a message...',
  },
  render: args => {
    return <MessageInput {...args} />
  },
}

export const ControlledWithDisablingButton: Story = {
  args: {
    placeholder: 'Type a message...',
  },
  render: args => {
    const [value, setValue] = useState('')

    return (
      <MessageInput
        {...args}
        buttonProps={{
          disabled: !value,
        }}
        onChange={e => setValue(e.currentTarget.value)}
        value={value}
      />
    )
  },
}
