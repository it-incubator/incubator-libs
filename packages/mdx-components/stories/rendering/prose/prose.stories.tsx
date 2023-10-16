import { useEffect, useState } from 'react'

import { MdxComponent, Prose } from '../../../src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Prose,
  title: 'Rendering/Prose',
} satisfies Meta<typeof Prose>

type Story = StoryObj<typeof meta>

export default meta

export const Primary: Story = {
  args: {
    children:
      "When you're working in a React app, declaring a type for your React props is likely going to be your most common TypeScript activity.",
    variant: 'default',
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [res, setRes] = useState<any>('')

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch(
        'https://mdx-processor.staging.it-incubator.ru/api/v1/static/files/md-lesson-backend/lesson-1/block-1.json'
      )
        .then(response => response.json())
        .then(json => setRes(json))
    }, [])

    if (!res) {
      return null
    }

    return (
      <Prose>
        <MdxComponent code={res.code} />
      </Prose>
    )
  },
}
