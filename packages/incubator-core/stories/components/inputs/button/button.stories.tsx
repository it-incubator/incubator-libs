import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../../../../src'

export default {
  title: 'Components/Inputs/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Button',
  disabled: false,
}
