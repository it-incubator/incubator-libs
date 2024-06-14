import { Progress } from '../../'
import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Progress,
  title: 'Components/Progress',
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    max: 3286,
    value: 195,
    width: '300px',
  },
  render: args => (
    <VerticalContainer>
      <Progress {...args} />
    </VerticalContainer>
  ),
}
