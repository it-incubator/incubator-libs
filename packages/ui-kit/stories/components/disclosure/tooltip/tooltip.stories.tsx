import { Meta } from '@storybook/react'

import { Tooltip } from '../../../../src'
import { ThumbUp } from '../../../../src/assets/icons'
import { useDarkMode } from '../../../../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'Components/Disclosure/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>

export const Light = {
  render: args => {
    return <Tooltip {...args} />
  },

  args: {
    children: (
      <p>
        Вставь сюда полную ссылку на свой LinkedIn аккаунт по примеру:
        https://www.linkedin.com/in/example/
      </p>
    ),
  },
}

export const Dark = {
  render: args => {
    useDarkMode()

    return <Tooltip {...args} />
  },

  args: {
    children: (
      <p>
        Вставь сюда полную ссылку на свой LinkedIn аккаунт по примеру:
        https://www.linkedin.com/in/example/
      </p>
    ),
  },
}

export const DefaultWithCustomeIcon = {
  render: args => {
    return <Tooltip {...args} />
  },

  args: {
    icon: <ThumbUp size={16} />,
    children: (
      <p>
        Вставь сюда полную ссылку на свой LinkedIn аккаунт по примеру:
        https://www.linkedin.com/in/example/
      </p>
    ),
  },
}
