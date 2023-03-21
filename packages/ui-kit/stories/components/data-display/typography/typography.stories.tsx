import { Meta } from '@storybook/react'

import { Typography } from '../../../../src'

export default {
  title: 'Components/Data Display/Typography',
  component: Typography.H1,
} as Meta<typeof Typography.H1>

export const AllTypography = {
  render: () => (
    <>
      <Typography.H1>Heading 1</Typography.H1>
      <Typography.H2>Heading 2</Typography.H2>
      <Typography.H3>Heading 3</Typography.H3>
      <Typography.Subtitle1>Subtitle 1</Typography.Subtitle1>
      <Typography.Subtitle2>Subtitle 2</Typography.Subtitle2>
      <Typography.Body1>Body 1</Typography.Body1>
      <Typography.Body2>Body 2</Typography.Body2>
      <Typography.Overline>Overline</Typography.Overline>
      <Typography.Caption>Caption</Typography.Caption>
      <Typography.Error component="div">Error</Typography.Error>
    </>
  ),
}

export const H1WithSpanComponent = {
  render: () => <Typography.H1 component={'a'}>Span tag</Typography.H1>,
}
