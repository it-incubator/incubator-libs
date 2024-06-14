import { Tag } from './tag'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Tag,
  title: 'Components/Tag',
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryClickable: Story = {
  args: {
    children: 'Супер контент, спасибо 👍',
    onClick: () => {},
  },
}
export const PrimaryClickablePressed: Story = {
  args: {
    children: 'Супер контент, спасибо 👍',
    defaultPressed: true,
    onClick: () => {},
  },
}

export const PrimaryUnclickable: Story = {
  args: {
    children: 'Супер контент, спасибо 👍',
  },
}
export const PrimaryUnclickablePressed: Story = {
  args: {
    children: 'Супер контент, спасибо 👍',
    defaultPressed: true,
  },
}

export const SecondaryClickable: Story = {
  args: {
    children: 'Супер контент, спасибо 👍',
    onClick: () => {},
    variant: 'secondary',
  },
}
export const SecondaryClickablePressed: Story = {
  args: {
    children: 'Супер контент, спасибо 👍',
    defaultPressed: true,
    onClick: () => {},
    variant: 'secondary',
  },
}

export const SecondaryUnclickable: Story = {
  args: {
    children: 'Супер контент, спасибо 👍',
    variant: 'secondary',
  },
}
