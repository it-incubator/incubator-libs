import { Meta } from '@storybook/react'

import { Dropdown, ToolbarItemWithIcon, DeleteForever, Edit } from '../../../../src'
import { useDarkMode } from '../../../../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'Components/Disclosure/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>

export const Dark = {
  render: args => {
    useDarkMode()

    return <Dropdown {...args} />
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
    return <Dropdown {...args} />
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

export const WithDisabledItem = {
  render: args => {
    return <Dropdown {...args} />
  },

  args: {
    children: (
      <>
        <ToolbarItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
        <ToolbarItemWithIcon
          icon={<DeleteForever />}
          text="Удалить"
          onSelect={() => {}}
          disabled={true}
        />
      </>
    ),
  },
}
