import { useState } from 'react'

import { Button, ImagePreview } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ImagePreview,
  title: 'Components/Image Preview',
} satisfies Meta<typeof ImagePreview>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
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
