import { Meta } from '@storybook/react'

import { Typography } from '../../../src'

export default {
  title: 'Components/Typography',
  component: Typography.Headline1,
} as Meta<typeof Typography.Headline1>

export const Headline1 = {
  render: () => <Typography.Headline1 variant="h1">Some text</Typography.Headline1>,
}

export const Headline2 = {
  render: () => <Typography.Headline2 variant="h2">Some text</Typography.Headline2>,
}
