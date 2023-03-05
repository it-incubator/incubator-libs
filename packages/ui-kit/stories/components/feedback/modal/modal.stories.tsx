import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Button, Modal } from '../../../../src'
import { VerticalContainer } from '../../../../storybook-utils/components/containers/vertical'
import { useDarkMode } from '../../../../storybook-utils/hooks/use-dark-mode'

export default {
  title: 'Components/Feedback/Modal',
  component: Modal,
} as Meta<typeof Modal>

const commonArgs = {
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
      consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum laudantium
      modi molestias odio quas rem voluptatum. Dolores?
    </p>
  ),
  open: true,
  title: 'Добавление спринта',
}

export const Dark = {
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

        <Modal {...args} open={open} onClose={handleModalClosed} />
      </VerticalContainer>
    )
  },

  args: {
    ...commonArgs,
  },
}

export const Light = {
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

        <Modal {...args} open={open} onClose={handleModalClosed} />
      </VerticalContainer>
    )
  },

  args: {
    ...commonArgs,
  },
}

export const WithoutCloseButton = {
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

        <Modal {...args} open={open} onClose={handleModalClosed} />
      </VerticalContainer>
    )
  },

  args: {
    ...commonArgs,
    showCloseButton: false,
  },
}
