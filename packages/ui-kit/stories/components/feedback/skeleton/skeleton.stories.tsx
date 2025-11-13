import { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    return (
      <VerticalContainer>
        <Skeleton {...args} height={24} />
        <Skeleton {...args} circle width={60} height={60} />
      </VerticalContainer>
    )
  },
}
