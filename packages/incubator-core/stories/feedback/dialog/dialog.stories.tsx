import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Dialog } from '../../../src'
import { useDarkMode } from '../../../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'Feedback/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

const TemplateLight: ComponentStory<typeof Dialog> = args => <Dialog {...args} />
const TemplateDark: ComponentStory<typeof Dialog> = args => {
  useDarkMode()

  return <Dialog {...args} />
}

const commonArgs = {
  variant: 'primary',
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
      consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium
      modi molestias odio quas rem voluptatum. Dolores?
    </p>
  ),
  open: true,
  title: 'Добавление спринта',
  confirmButtonText: 'Да',
  cancelButtonText: 'Нет',
}

export const Dark = TemplateDark.bind({})
Dark.args = {
  ...commonArgs,
}

export const Light = TemplateLight.bind({})

Light.args = {
  ...commonArgs,
}
