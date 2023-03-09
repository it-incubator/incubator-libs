import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Toggle } from '../../../src/components/toggle'

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as Meta<typeof Toggle>

export const Primary = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return <Toggle label="Toggle" checked={checked} onChange={setChecked} />
  },
}
