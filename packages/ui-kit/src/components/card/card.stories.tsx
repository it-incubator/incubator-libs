import { Meta, StoryObj } from '@storybook/react'

import { InfoFill as InfoIcon } from '../../'
import { Card } from './'

const meta = {
  component: Card,
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    title: 'Some title',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    iconComponent: (
      <InfoIcon
        backgroundColor={'var(--color-neutral-light-50)'}
        color={'var(--color-danger-400)'}
        size={16}
      />
    ),
    title: 'Some title',
  },
}

export const PrimaryWithoutTitle: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  },
}

export const Info: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    variant: 'info',
  },
}
