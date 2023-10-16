import { useState } from 'react'

import { MessageInput } from '../../../../../src'
import { Meta } from '@storybook/react'

const meta = {
  argTypes: {
    onButtonClick: { action: 'clicked' },
  },
  component: MessageInput,
  tags: ['autodocs'],
  title: 'Components/Data Entry/Chat/Message Input',
} satisfies Meta<typeof MessageInput>

export default meta

export const Primary = {
  args: {},
  render: args => {
    // eslint-disable-next-line
    const [value, setValue] = useState('')

    return <MessageInput {...args} onChange={e => setValue(e.currentTarget.value)} value={value} />
  },
}
