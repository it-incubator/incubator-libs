import { useDarkMode } from '../../../storybook-utils/hooks/use-dark-mode'
import { ThumbUp, Tooltip } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Tooltip,
  title: 'Components/Tooltip',
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    children: (
      <p>
        Вставь сюда полную ссылку на свой LinkedIn аккаунт по примеру:
        https://www.linkedin.com/in/example/
      </p>
    ),
  },
  render: args => {
    return (
      <div style={{ margin: '200px 200px' }}>
        <Tooltip {...args} />
      </div>
    )
  },
}

export const Dark: Story = {
  ...Light,
  render: args => {
    useDarkMode()

    return <Tooltip {...args} />
  },
}

export const DefaultWithCustomIcon: Story = {
  ...Light,
  args: {
    children: (
      <p>
        Вставь сюда полную ссылку на свой LinkedIn аккаунт по примеру:
        https://www.linkedin.com/in/example/
      </p>
    ),
    icon: <ThumbUp size={16} />,
  },
}

export const DefaultWithComponent: Story = {
  ...Light,
  args: {
    children: (
      <p>
        Вставь сюда полную ссылку на свой LinkedIn аккаунт по примеру:
        https://www.linkedin.com/in/example/
      </p>
    ),
    component: <span>text</span>,
  },
}

export const WithDisableHoverableContent: Story = {
  ...DefaultWithComponent,
  args: {
    ...DefaultWithComponent.args,
    disableHoverableContent: true,
  },
}
