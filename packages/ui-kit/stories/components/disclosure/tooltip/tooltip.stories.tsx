import { ThumbUp, Tooltip } from '../../../../src'
import { useDarkMode } from '../../../../storybook-utils/hooks/use-dark-mode'
import { Meta } from '@storybook/react'

export default {
  component: Tooltip,
  title: 'Components/Disclosure/Tooltip',
} as Meta<typeof Tooltip>

export const Light = {
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

export const Dark = {
  ...Light,
  render: args => {
    useDarkMode()

    return <Tooltip {...args} />
  },
}

export const DefaultWithCustomIcon = {
  args: {
    ...Light.args,
    icon: <ThumbUp size={16} />,
  },
}

export const DefaultWithComponent = {
  args: {
    ...Light.args,
    component: <span>text</span>,
  },
}
