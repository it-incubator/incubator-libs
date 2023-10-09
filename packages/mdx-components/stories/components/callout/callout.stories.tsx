import { Meta, StoryObj } from '@storybook/react'

import { Callout } from '../../../src'

const meta = {
  title: 'Components/Callout',
  component: Callout,
} satisfies Meta<typeof Callout>

type Story = StoryObj<typeof meta>

export default meta

export const AllVariantsWithDefaultEmojis = {
  render: () => {
    return (
      <>
        <Callout variant="default">default</Callout>
        <Callout variant="info">info</Callout>
        <Callout variant="error">error</Callout>
        <Callout variant="warning">warning</Callout>
      </>
    )
  },
}

export const Primary: Story = {
  args: {
    children:
      "When you're working in a React app, declaring a type for your React props is likely going to be your most common TypeScript activity.",
    variant: 'default',
  },
}

export const WithCustomEmoji: Story = {
  args: {
    children:
      "When you're working in a React app, declaring a type for your React props is likely going to be your most common TypeScript activity.",
    variant: 'default',
    emoji: '🍁',
  },
}
