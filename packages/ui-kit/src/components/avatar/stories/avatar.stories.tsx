import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage } from '../'
// @ts-expect-error
import DocumentationTemplate from './avatar.mdx'

const meta = {
  component: Avatar,
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  subcomponents: { AvatarFallback, AvatarImage },
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    return (
      <Avatar {...args}>
        <AvatarImage src={'https://github.com/shadcn.png'} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  },
}

export const CustomSize: Story = {
  args: {
    size: '48px',
  },
  render: args => {
    return (
      <Avatar {...args}>
        <AvatarImage src={'https://github.com/shadcn.png'} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  },
}

export const Fallback: Story = {
  render: args => {
    return (
      <Avatar {...args}>
        <AvatarImage src={'https://gihub.com/scn.png'} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  },
}
