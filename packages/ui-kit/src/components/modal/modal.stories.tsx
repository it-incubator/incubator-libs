import { useState } from 'react'

import { VerticalContainer } from '../../../storybook-utils/components/containers/vertical'
import { useDarkMode } from '../../../storybook-utils/hooks/use-dark-mode'
import { Button, Modal, Scrollbar, Tooltip } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Modal,
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

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

        <Modal {...args} onClose={handleModalClosed} open={open} />
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

        <Modal {...args} onClose={handleModalClosed} open={open} />
      </VerticalContainer>
    )
  },
}

export const WithoutCloseButton: Story = {
  args: {
    ...commonArgs,
    showCloseButton: false,
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

        <Modal {...args} onClose={handleModalClosed} open={open} />
      </VerticalContainer>
    )
  },
}

export const WithTooltip: Story = {
  ...Light,
  args: {
    ...Light.args,
    children: <Tooltip>Проверка работы z-index</Tooltip>,
  },
}

export const WithContentOverflow: Story = {
  ...Light,
  args: {
    ...Light.args,
    children: (
      <Scrollbar maxHeight={'40vh'}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis corporis
            dolore ducimus, eveniet exercitationem facere impedit magnam, praesentium, quae quo sit.
            Alias dolores porro quibusdam, sapiente veritatis voluptatibus. Aliquid.
          </p>
        </div>
      </Scrollbar>
    ),
  },
}
