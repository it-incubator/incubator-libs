import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Search } from '../src'

export default {
  title: 'Example/Search',
  component: Search,
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = args => <Search {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
}
