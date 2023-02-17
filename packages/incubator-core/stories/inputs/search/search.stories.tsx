import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tabs } from '../../../src'

export default {
  title: 'Inputs/Search',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
}
