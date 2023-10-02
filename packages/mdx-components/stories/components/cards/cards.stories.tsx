import { Meta, StoryObj } from '@storybook/react'

import { Card, Cards, Edit } from '../../../src'

const meta = {
  title: 'Components/Cards',
  component: Cards,
} satisfies Meta<typeof Cards>

type Story = StoryObj<typeof meta>

export default meta

export const Primary: Story = {
  args: {
    children: (
      <>
        <Card title="Chapter 1" icon="🍕" href="https://it-incubator.io/" target="_blank" />
        <Card title="Chapter 2" icon="🥨" href="https://it-incubator.io/" target="_blank" />
        <Card title="Chapter 3" icon="☕" href="https://it-incubator.io/" target="_blank" />
        <Card title="Chapter 4" icon="🍄" href="https://it-incubator.io/" target="_blank" />
      </>
    ),
  },
}

export const WithOneColumn: Story = {
  args: {
    ...Primary.args,
    columns: 1,
  },
}

export const WithTwoColumns: Story = {
  args: {
    ...Primary.args,
    columns: 2,
  },
}

export const WithSvgIcon: Story = {
  args: {
    children: (
      <Card title="Chapter 1" icon={<Edit />} href="https://it-incubator.io/" target="_blank" />
    ),
  },
}
