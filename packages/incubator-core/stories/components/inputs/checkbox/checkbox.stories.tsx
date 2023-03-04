import { useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox } from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'
import { ValuePreview } from '../../../../storybook-utils/components/previews/value-preview'

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => {
  const [checked, setChecked] = useState(true)

  return (
    <VerticalContainer>
      <Checkbox {...args} checked={checked} onChange={setChecked} />
      <ValuePreview>checked: {String(checked)}</ValuePreview>
    </VerticalContainer>
  )
}

export const Default = Template.bind({})

Default.args = {
  label: 'Click here',
  id: '1',
  disabled: false,
}
