import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Button, ImagePreview } from '../../../../src'

export default {
  title: 'Components/Feedback/Image Preview',
  component: ImagePreview,
} as Meta<typeof ImagePreview>

export const Default = {
  args: {
    src: 'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/685715d3-b195-49d6-866a-70f2a2ed01eb_image_2023-08-20_17-36-29.png',
  },
  render: args => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

    return (
      <div>
        <ImagePreview {...args} onClose={handleClose} open={open} />
        <Button onClick={() => setOpen(true)}>Open</Button>
      </div>
    )
  },
}
