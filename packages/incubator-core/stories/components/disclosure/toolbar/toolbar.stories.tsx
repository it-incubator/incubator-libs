import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Toolbar, ToolbarItemWithIcon } from '../../../../src'
import { Delete } from '../../../../src/assets/icons/delete'
import { Edit } from '../../../../src/assets/icons/edit'
import { useDarkMode } from '../../../../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'Components/Disclosure/Toolbar',
  component: Toolbar,
} as ComponentMeta<typeof Toolbar>

const TemplateDark: ComponentStory<typeof Toolbar> = args => {
  useDarkMode()

  return <Toolbar {...args} />
}
const TemplateLight: ComponentStory<typeof Toolbar> = args => {
  return <Toolbar {...args} />
}

export const Dark = TemplateDark.bind({})
Dark.args = {
  children: (
    <>
      <ToolbarItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
      <ToolbarItemWithIcon icon={<Delete />} text="Удалить" onSelect={() => {}} />
    </>
  ),
}

export const Light = TemplateLight.bind({})
Light.args = {
  children: (
    <>
      <ToolbarItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
      <ToolbarItemWithIcon icon={<Delete />} text="Удалить" onSelect={() => {}} />
    </>
  ),
}
