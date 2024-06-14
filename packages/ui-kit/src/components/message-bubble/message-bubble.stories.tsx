import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { MessageBubble } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: MessageBubble,
  title: 'Components/Chat/Message Bubble',
} satisfies Meta<typeof MessageBubble>

export default meta
type Story = StoryObj<typeof meta>

export const OtherUserMessage: Story = {
  args: {
    isFirst: true,
    message: 'I’m down! Any ideas??',
    role: 'Ментор',
    time: '11:31 27.08.2023',
    username: 'Валера Сафронов',
  },
}

export const CurrentUserMessage: Story = {
  args: {
    isCurrentUser: true,
    isFirst: true,
    message: 'I’m down! Any ideas??',
    time: '11:31 27.08.2023',
  },
}

export const CurrentUserMessageWithUsername: Story = {
  args: {
    isCurrentUser: true,
    isFirst: true,
    message: 'I’m down! Any ideas??',
    time: '11:31 27.08.2023',
    username: 'Мария Жоголь',
  },
}

export const OtherUserLongMessage: Story = {
  args: {
    isFirst: true,
    message:
      'ВСЕ СЛОМАЛОСЬ ПОМОГИТЕ МНЕ АААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА',
    time: '11:31 27.08.2023',
    username: 'Студент Паникерович',
  },
}

export const Messages = () => {
  return (
    <VerticalContainer>
      <MessageBubble
        isCurrentUser
        isFirst
        message={'Здравствуйте, мне нужна помощь'}
        time={'11:31 27.08.2023'}
      />
      <MessageBubble isCurrentUser isFirst message={'Ничего'} time={'11:31 27.08.2023'} />
      <MessageBubble
        {...CurrentUserMessage.args}
        isFirst={false}
        message={'Не могу оплатить курс, не проходит перевод'}
      />
      <MessageBubble
        {...OtherUserMessage.args}
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
    </VerticalContainer>
  )
}

export const MessagesAdmin = () => {
  return (
    <VerticalContainer>
      <MessageBubble
        isFirst
        message={'Не могу оплатить курс, не проходит перевод'}
        showUsername={'always'}
        time={'11:33 27.08.2023'}
      />
      <MessageBubble
        isCurrentUser
        isFirst
        message={'Здравствуйте, сейчас будем разбираться'}
        role={'Ментор'}
        showUsername={'always'}
        time={'11:33 27.08.2023'}
        username={'Вильям Росс'}
      />
      <MessageBubble
        isCurrentUser
        message={'Попробуй то-то и то-то, а возможно еще это и вон то'}
        role={'Ментор'}
        showUsername={'always'}
        time={'11:33 27.08.2023'}
        username={'Екатерина Жоголь'}
      />
      <MessageBubble
        isFirst
        message={'Все заработало как надо, спасибо большое 🙂'}
        showUsername={'always'}
        time={'11:31 27.08.2023'}
      />
      <MessageBubble
        isCurrentUser
        isFirst
        message={
          'Длинное сообщение: ChatGPT, which stands for Chat Generative Pre-trained Transformer, is a large language model-based chatbot developed by OpenAI and launched on November 30, 2022, which enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language'
        }
        role={'Ментор'}
        showUsername={'always'}
        time={'11:33 27.08.2023'}
        username={'Мария Жоголь'}
      />
    </VerticalContainer>
  )
}
