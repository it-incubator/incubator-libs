import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ReadMore } from '../../../../src'

export default {
  title: 'Components/Disclosure/ReadMore',
  component: ReadMore,
} as ComponentMeta<typeof ReadMore>

const Template: ComponentStory<typeof ReadMore> = args => <ReadMore {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut sed eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed do.',
  maxCharacters: 100,
}
