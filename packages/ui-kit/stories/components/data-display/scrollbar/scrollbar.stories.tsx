import { Meta } from '@storybook/react-vite'

import { Scrollbar } from '../../../../src'

export default {
  title: 'Components/Data Display/Scrollbar',
  component: Scrollbar,
  argTypes: {
    type: {
      options: ['auto', 'always', 'scroll', 'hover'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Scrollbar>

export const VerticalScrollbar = {
  args: {
    style: {
      height: '200px',
      width: 'fit-content',
      paddingRight: '8px',
      color: 'var(--color-text-primary)',
    },
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
  },
}

export const HorizontalScrollbar = {
  args: {
    style: { width: '100px', color: 'var(--color-text-primary)' },
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
  },
}
