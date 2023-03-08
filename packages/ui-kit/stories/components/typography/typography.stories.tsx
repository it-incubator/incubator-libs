import { Meta } from '@storybook/react'

import { Typography } from '../../../src'

export default {
  title: 'Components/Typography',
  component: Typography.Headline1,
} as Meta<typeof Typography.Headline1>

export const AllTypography = {
  render: () => (
    <>
      <Typography.Headline1>Headline 1</Typography.Headline1>
      <Typography.Headline2>Headline 2</Typography.Headline2>
      <Typography.Headline3>Headline 3</Typography.Headline3>
      <Typography.Subtitle1>Subtitle 1</Typography.Subtitle1>
      <Typography.Subtitle2>Subtitle 2</Typography.Subtitle2>
      <Typography.Body1>Body 1</Typography.Body1>
      <Typography.Body2>Body 2</Typography.Body2>
      <Typography.Overline>Overline</Typography.Overline>
      <Typography.Caption>Caption</Typography.Caption>
    </>
  ),
}

export const Headline1WidthSpanComponent = {
  render: () => <Typography.Headline1 component="span">Span tag</Typography.Headline1>,
}
