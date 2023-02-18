import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Tooltip, TooltipItemWithIcon } from '../../../../src'
import { Delete } from '../../../../src/assets/icons/delete'
import { Edit } from '../../../../src/assets/icons/edit'
import { useDarkMode } from '../../../../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'Components/Disclosure/Toolbar',
  component: Tooltip,
  args: {
    children: (
      <>
        <TooltipItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
        <TooltipItemWithIcon icon={<Delete />} text="Удалить" onSelect={() => {}} />
      </>
    ),
  },
} as ComponentMeta<typeof Tooltip>

const TemplateDark: ComponentStory<typeof Tooltip> = args => {
  useDarkMode()

  return <Tooltip {...args} />
}
const TemplateLight: ComponentStory<typeof Tooltip> = args => {
  return <Tooltip {...args} />
}

export const Dark = TemplateDark.bind({})
Dark.parameters = {
  // viewMode: 'Canvas',
}

export const Light = TemplateLight.bind({})
Light.parameters = {
  // viewMode: 'Canvas',
}
