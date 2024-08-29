import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Rating } from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'
import { ValuePreview } from '../../../../storybook-utils/components/previews/value-preview'

const meta = {
  title: 'Components/Feedback/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<number>(args.value)

    console.log(value)

    return (
      <VerticalContainer>
        <Rating {...args} value={value} onChange={setValue} />
        <ValuePreview>{value}</ValuePreview>
      </VerticalContainer>
    )
  },
}

export const Readonly: Story = {
  args: {
    value: 3,
    readonly: true,
  },
}

export const Fractioned: Story = {
  render: args => {
    const [value, setValue] = useState<number>(args.value)

    console.log(value)

    return (
      <VerticalContainer>
        <Rating {...args} value={value} onChange={setValue} />
        <ValuePreview>{value}</ValuePreview>
      </VerticalContainer>
    )
  },
  args: {
    fractions: 100,
  },
}
export const FractionedReadonly: Story = {
  args: {
    fractions: 100,
    value: 3.56,
    readonly: true,
  },
}
