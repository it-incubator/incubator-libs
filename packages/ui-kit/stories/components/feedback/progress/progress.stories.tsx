import { Meta } from '@storybook/react'

import { Progress } from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'

export default {
  title: 'Components/Feedback/Progress',
  component: Progress,
} as Meta<typeof Progress>

export const Default = {
  render: args => (
    <VerticalContainer>
      <Progress {...args} />
    </VerticalContainer>
  ),
  args: {
    value: 195,
    width: '300px',
    max: 3286,
  },
}
