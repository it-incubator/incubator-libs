import { Skeleton } from '../../'
import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Skeleton,
  title: 'Components/Skeleton',
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    return (
      <VerticalContainer>
        <Skeleton {...args} height={24} />
        <Skeleton {...args} circle height={60} width={60} />
      </VerticalContainer>
    )
  },
}
