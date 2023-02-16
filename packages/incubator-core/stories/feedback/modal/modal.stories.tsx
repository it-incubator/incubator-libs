import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Modal } from '../../../src'
import { useDarkMode } from '../../../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'Feedback/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const TemplateDark: ComponentStory<typeof Modal> = args => {
  useDarkMode()

  return <Modal {...args} />
}
const TemplateLight: ComponentStory<typeof Modal> = args => {
  return <Modal {...args} />
}

const commonArgs = {
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
      consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium
      modi molestias odio quas rem voluptatum. Dolores?
    </p>
  ),
  open: true,
  title: 'Добавление спринта',
}

export const Dark = TemplateDark.bind({})
Dark.args = {
  ...commonArgs,
}

export const Light = TemplateLight.bind({})
Light.args = {
  ...commonArgs,
}

export const WithoutCloseButton = TemplateLight.bind({})
WithoutCloseButton.args = {
  ...commonArgs,
  showCloseButton: false,
}
