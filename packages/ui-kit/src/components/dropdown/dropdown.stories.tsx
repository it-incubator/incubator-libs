import { useDarkMode } from '../../../storybook-utils/hooks/use-dark-mode'
import { DeleteForever, Dropdown, Edit, ToolbarItemWithIcon, Tooltip } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Dropdown,
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    children: (
      <>
        <ToolbarItemWithIcon icon={<Edit />} onSelect={() => {}} text={'Изменить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
      </>
    ),
  },

  render: args => {
    useDarkMode()

    return <Dropdown {...args} />
  },
}

export const Light: Story = {
  args: {
    children: (
      <>
        <ToolbarItemWithIcon icon={<Edit />} onSelect={() => {}} text={'Изменить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
        <ToolbarItemWithIcon icon={<DeleteForever />} onSelect={() => {}} text={'Удалить'} />
      </>
    ),
  },

  render: args => {
    return <Dropdown {...args} />
  },
}

export const WithDisabledItem: Story = {
  args: {
    children: (
      <>
        <ToolbarItemWithIcon icon={<Edit />} onSelect={() => {}} text={'Изменить'} />
        <Tooltip
          component={
            <ToolbarItemWithIcon
              disabled
              icon={<DeleteForever />}
              onSelect={() => {}}
              text={'Удалить'}
            />
          }
          side={'bottom'}
        >
          Для удаления необходимо удалить все дочерние узлы
        </Tooltip>
      </>
    ),
  },

  render: args => {
    return <Dropdown {...args} />
  },
}
