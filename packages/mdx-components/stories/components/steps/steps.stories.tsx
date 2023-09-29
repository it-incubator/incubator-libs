import { Meta, StoryObj } from '@storybook/react'

import { Steps } from '../../../src'

const meta = {
  title: 'Components/Steps',
  component: Steps,
} satisfies Meta<typeof Steps>

type Story = StoryObj<typeof meta>

export default meta

export const Primary: Story = {
  args: {
    children: (
      <>
        <h3>Шаг 1: Познакомьтесь с Redux</h3>
        <p>
          Прежде чем окунуться в RTK Query, важно иметь базовое понимание самого Redux. Убедитесь,
          что вы знакомы с понятиями actions, reducer и store Redux.
        </p>
        <h3>Шаг 2: Установите зависимости</h3>
        <p>
          Для начала работы с RTK Query необходимо установить нужные пакеты. Обычно это
          @reduxjs/toolkit и react-redux.
        </p>
        <h3>Шаг 3: Настройте API-сервис</h3>
        <p>
          RTK Query использует сервисы для взаимодействия с API. Вам нужно будет настроить
          API-сервис с помощью `createApi` и определить конечные точки для операций, которые вы
          планируете выполнять.
        </p>
      </>
    ),
  },
}
