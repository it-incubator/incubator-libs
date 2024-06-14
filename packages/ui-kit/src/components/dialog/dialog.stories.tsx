import { useState } from 'react'

import { Button, Dialog, DialogProps, noop } from '../../'
import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { useDarkMode } from '../../../storybook-utils/hooks/use-dark-mode'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Dialog,
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

const commonArgs: DialogProps = {
  cancelButtonText: 'Нет',
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
      consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium
      modi molestias odio quas rem voluptatum. Dolores?
    </p>
  ),
  confirmButtonText: 'Да',
  onConfirmButtonClick: noop,
  open: true,
  title: 'Добавление спринта',
}

export const Dark: Story = {
  args: {
    ...commonArgs,
  },

  render: args => {
    const [open, setOpen] = useState(false)

    useDarkMode()
    function handleModalClosed() {
      setOpen(false)
    }
    function handleModalOpened() {
      setOpen(true)
    }

    return (
      <VerticalContainer>
        <span>
          <Button onClick={handleModalOpened}>Open dialog</Button>
        </span>

        <Dialog {...args} invertButtons={false} onClose={handleModalClosed} open={open} />
      </VerticalContainer>
    )
  },
}

export const Light: Story = {
  args: {
    ...commonArgs,
  },

  render: args => {
    const [open, setOpen] = useState(false)

    function handleModalClosed() {
      setOpen(false)
    }
    function handleModalOpened() {
      setOpen(true)
    }

    return (
      <VerticalContainer>
        <span>
          <Button onClick={handleModalOpened}>Open dialog</Button>
        </span>
        <Dialog {...args} onClose={handleModalClosed} open={open} />
      </VerticalContainer>
    )
  },
}
