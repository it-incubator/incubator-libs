import { Meta } from '@storybook/react'

import { Collapsible } from '../../../../src'
import InfoIcon from '../../../../src/assets/icons/components/Info'

export default {
  title: 'Components/Disclosure/Collapsible',
  component: Collapsible,
} as Meta<typeof Collapsible>

export const DefaultUncontrolled = {
  args: {
    title: 'Accordion',
    children: 'some content',
    iconComponent: <InfoIcon size={16} />,
  },
}
