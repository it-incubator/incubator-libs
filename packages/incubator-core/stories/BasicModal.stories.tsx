import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BasicModal } from '../src/components/modal/basic-modal'

export default {
  title: 'Example/Modals/BasicModal',
  component: BasicModal,
} as ComponentMeta<typeof BasicModal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicModal> = args => <BasicModal {...args} />

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
}
