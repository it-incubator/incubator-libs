import { Spinner } from './spinner'
import { Meta } from '@storybook/react'

export default {
  component: Spinner,
  title: 'Components/Spinner',
} as Meta<typeof Spinner>

export const Default = {
  args: {
    size: 48,
  },
}

export const Small = {
  args: {
    size: 24,
  },
}

export const FullScreen = {
  args: {
    fullScreen: true,
  },
}
