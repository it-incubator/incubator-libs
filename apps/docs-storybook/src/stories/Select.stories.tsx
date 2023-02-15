import React from 'react'

import { Select, SelectItem } from '@incubator/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Example/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => (
  <Select {...args}>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>

    <SelectItem value="apple1">Apple</SelectItem>
    <SelectItem value="banana1">Banana</SelectItem>
    <SelectItem value="blueberry1">Blueberry</SelectItem>
    <SelectItem value="grapes1">Grapes</SelectItem>
    <SelectItem value="pineapple1">Pineapple</SelectItem>
    <SelectItem value="apple2">Apple</SelectItem>
    <SelectItem value="banana2">Banana</SelectItem>
    <SelectItem value="blueberry2">Blueberry</SelectItem>
    <SelectItem value="grapes2">Grapes</SelectItem>
    <SelectItem value="pineapple2">Pineapple</SelectItem>
  </Select>
)

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'Все курсы',
}
