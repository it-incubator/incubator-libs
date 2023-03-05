import { Meta } from '@storybook/react'

import { Toolbar, ToolbarItemWithIcon } from '../../../../src'
import { DeleteForever, Edit } from '../../../../src/assets/icons'
import { useDarkMode } from '../../../../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'Components/Disclosure/Toolbar',
  component: Toolbar,
} as Meta<typeof Toolbar>

export const Dark = {
  render: args => {
    useDarkMode()

    return <Toolbar {...args} />
  },

  args: {
    children: (
      <>
        <ToolbarItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
        <ToolbarItemWithIcon icon={<DeleteForever />} text="Удалить" onSelect={() => {}} />
      </>
    ),
  },
}

export const Light = {
  render: args => {
    return <Toolbar {...args} />
  },

  args: {
    children: (
      <>
        <ToolbarItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
        <ToolbarItemWithIcon icon={<DeleteForever />} text="Удалить" onSelect={() => {}} />
      </>
    ),
  },
}
