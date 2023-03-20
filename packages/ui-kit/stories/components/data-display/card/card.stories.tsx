import { Meta } from '@storybook/react'

import { Card, Info as InfoIcon } from '../../../../src'

export default {
  title: 'Components/Data Display/Card',
  component: Card,
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
    title: 'Some title',
    iconComponent: <InfoIcon size={16} />,
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
    variant: 'info',
  },
}
