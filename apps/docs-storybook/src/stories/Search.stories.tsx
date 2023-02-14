import React from 'react'

import { Search } from '@incubator/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Example/Search',
  component: Search,
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = args => <Search {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
}
