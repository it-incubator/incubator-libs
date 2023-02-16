import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ConfirmModal } from '../src'

export default {
  title: 'Example/Modals/ConfirmModal',
  component: ConfirmModal,
} as ComponentMeta<typeof ConfirmModal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConfirmModal> = args => <ConfirmModal {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
  confirmButtonText: 'Да',
  cancelButtonText: 'Нет',
}
