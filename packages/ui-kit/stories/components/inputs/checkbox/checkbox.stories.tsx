import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Checkbox } from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'
import { ValuePreview } from '../../../../storybook-utils/components/previews/value-preview'

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

export const Default = {
  render: args => {
    const [checked, setChecked] = useState(true)

    return (
      <VerticalContainer>
        <Checkbox {...args} checked={checked} onChange={setChecked} />
        <ValuePreview>checked: {String(checked)}</ValuePreview>
      </VerticalContainer>
    )
  },

  args: {
    label: 'Click here',
    disabled: false,
  },
}
