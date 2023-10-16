import { useState } from 'react'

import { MessageInput } from '../../../../../src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: MessageInput,
  tags: ['autodocs'],
  title: 'Components/Data Entry/Chat/Message Input',
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
