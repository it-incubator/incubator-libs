import { MessageBubble } from '../../../../../src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: MessageBubble,
  tags: ['autodocs'],
  title: 'Components/Data Entry/Chat/Message Bubble',
} satisfies Meta<typeof MessageBubble>

export default meta
type Story = StoryObj<typeof meta>

export const OtherUserMassage: Story = {
  args: {
    isFirst: true,
    message: 'I’m down! Any ideas??',
    role: 'Ментор',
    time: '11:31 27.08.2023',
    username: 'Валера Сафронов',
  },
}

export const CurrentUserMassage: Story = {
  args: {
    isCurrentUser: true,
    message: 'I’m down! Any ideas??',
    time: '11:31 27.08.2023',
  },
}

export const Messages = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
      <MessageBubble
        isCurrentUser
        isFirst
        message={'Здравствуйте, мне нужна помощь'}
        time={'11:31 27.08.2023'}
      />
      <MessageBubble
        {...CurrentUserMassage.args}
        message={'Не могу оплатить курс, не проходит перевод'}
      />
      <MessageBubble
        {...OtherUserMassage.args}
        message={'Здравствуйте, сейчас будем разбираться'}
      />
      <MessageBubble
        message={'Если у тебя есть новые вопросы, задавай 🙂'}
        time={'11:31 27.08.2023'}
      />
      <MessageBubble
        message={
          'Длинное сообщение: ChatGPT, which stands for Chat Generative Pre-trained Transformer, is a large language model-based chatbot developed by OpenAI and launched on November 30, 2022, which enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language'
        }
        time={'11:33 27.08.2023'}
      />
    </div>
  )
}
