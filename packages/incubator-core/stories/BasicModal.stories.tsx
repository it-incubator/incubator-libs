import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BasicModal } from '../src'
import { useDarkMode } from '../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'Example/Modals/BasicModal',
  component: BasicModal,
} as ComponentMeta<typeof BasicModal>

const Template: ComponentStory<typeof BasicModal> = args => {
  useDarkMode()

  return <BasicModal {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
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
}
