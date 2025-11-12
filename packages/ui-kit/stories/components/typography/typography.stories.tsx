import { Meta } from '@storybook/react-vite'

import { TheGift, Typography } from '../../../src'

export default {
  title: 'Components/Typography',
  component: Typography.H1,
} as Meta<typeof Typography.H1>

export const AllTypography = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography.H1>Heading 1</Typography.H1>
      <Typography.H2>Heading 2</Typography.H2>
      <Typography.H3>Heading 3</Typography.H3>
      <Typography.Subtitle1>Subtitle 1</Typography.Subtitle1>
      <Typography.Subtitle2>Subtitle 2</Typography.Subtitle2>
      <Typography.Body1>Body 1</Typography.Body1>
      <Typography.Body2>Body 2</Typography.Body2>
      <Typography.Overline>Overline</Typography.Overline>
      <Typography.Caption>Caption</Typography.Caption>
      <Typography.CaptionLink>Caption Link</Typography.CaptionLink>
      <Typography.SubtitleLink>Subtitle Link</Typography.SubtitleLink>
      <Typography.Link>Link</Typography.Link>
      <Typography.Error component="div">Error</Typography.Error>
    </div>
  ),
}

export const H1WithSpanComponent = {
  render: () => <Typography.H1 component={'a'}>Span tag</Typography.H1>,
}

export const Icon = {
  render: () => <TheGift />,
}

export const H1WithMargin = {
  render: () => (
    <Typography.H1 ml={10} mt={20}>
      Heading 1
    </Typography.H1>
  ),
}
