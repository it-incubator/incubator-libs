import { useState } from 'react'

import { Rating } from '../../'
import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { ValuePreview } from '../../../storybook-utils/components/previews/value-preview'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<number>(args.value)

    console.log(value)

    return (
      <VerticalContainer>
        <Rating {...args} onChange={setValue} value={value} />
        <ValuePreview>{value}</ValuePreview>
      </VerticalContainer>
    )
  },
}

export const Readonly: Story = {
  args: {
    readonly: true,
    value: 3,
  },
}

export const Fractioned: Story = {
  args: {
    fractions: 100,
  },
  render: args => {
    const [value, setValue] = useState<number>(args.value)

    console.log(value)

    return (
      <VerticalContainer>
        <Rating {...args} onChange={setValue} value={value} />
        <ValuePreview>{value}</ValuePreview>
      </VerticalContainer>
    )
  },
}
export const FractionedReadonly: Story = {
  args: {
    fractions: 100,
    readonly: true,
    value: 3.56,
  },
}
