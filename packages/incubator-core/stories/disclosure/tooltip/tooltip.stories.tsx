import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tooltip, TooltipItem } from '../../../src'
import { Delete } from '../../../src/assets/icons/delete'
import { Edit } from '../../../src/assets/icons/edit'
import { useDarkMode } from '../../../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'disclosure/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <>
        <TooltipItem icon={<Edit />} text="Изменить" onSelect={() => {}} />
        <TooltipItem icon={<Delete />} text="Удалить" onSelect={() => {}} />
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

export const Light = TemplateLight.bind({})
