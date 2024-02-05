import { Card, InfoFill as InfoIcon } from '../../../../src'
import { Meta } from '@storybook/react'

export default {
  component: Card,
  title: 'Components/Data Display/Card',
} as Meta<typeof Card>

export const Primary = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    title: 'Some title',
  },
}

export const PrimaryWithIcon = {
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

export const PrimaryWithoutTitle = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  },
}

export const Info = {
  args: {
    children:
      'Lorem asdfipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    variant: 'info',
  },
}
