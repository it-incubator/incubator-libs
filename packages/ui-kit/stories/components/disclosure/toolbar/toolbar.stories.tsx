import { Meta } from '@storybook/react'

import { Toolbar, ToolbarItemWithIcon } from '../../../../src'
import { Delete } from '../../../../src/assets/icons/delete'
import { Edit } from '../../../../src/assets/icons/edit'
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
        <ToolbarItemWithIcon icon={<Delete />} text="Удалить" onSelect={() => {}} />
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
        <ToolbarItemWithIcon icon={<Delete />} text="Удалить" onSelect={() => {}} />
      </>
    ),
  },
}
