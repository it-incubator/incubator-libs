import { Scrollbar } from '../../index'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['auto', 'always', 'scroll', 'hover'],
    },
  },
  component: Scrollbar,
  title: 'Components/Scrollbar',
} satisfies Meta<typeof Scrollbar>

export default meta

type Story = StoryObj<typeof meta>

export const VerticalScrollbar: Story = {
  args: {
    children: (
      <p style={{ width: '100px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem, beatae debitis,
        earum maiores nam omnis perspiciatis quas quasi ratione tenetur voluptas voluptatem!
        Blanditiis ducimus, excepturi iste iure quos veritatis. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci, autem, beatae debitis, earum maiores nam omnis
        perspiciatis quas quasi ratione tenetur voluptas voluptatem! Blanditiis ducimus, excepturi
        iste iure quos veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci, autem, beatae debitis, earum maiores nam omnis perspiciatis quas quasi ratione
        tenetur voluptas voluptatem! Blanditiis ducimus, excepturi iste iure quos veritatis.
      </p>
    ),
    style: {
      color: 'var(--color-text-primary)',
      height: '200px',
      paddingRight: '8px',
      width: 'fit-content',
    },
  },
}

export const HorizontalScrollbar: Story = {
  args: {
    children: (
      <p style={{ width: '400px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem, beatae debitis,
        earum maiores nam omnis perspiciatis quas quasi ratione tenetur voluptas voluptatem!
        Blanditiis ducimus, excepturi iste iure quos veritatis. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci, autem, beatae debitis, earum maiores nam omnis
        perspiciatis quas quasi ratione tenetur voluptas voluptatem! Blanditiis ducimus, excepturi
        iste iure quos veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci, autem, beatae debitis, earum maiores nam omnis perspiciatis quas quasi ratione
        tenetur voluptas voluptatem! Blanditiis ducimus, excepturi iste iure quos veritatis.
      </p>
    ),
    style: { color: 'var(--color-text-primary)', width: '100px' },
  },
}
