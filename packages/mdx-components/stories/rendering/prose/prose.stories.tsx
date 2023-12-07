import { useEffect, useState } from 'react'

import { MdxComponent, Prose } from '../../../src'
import { testCode } from './code'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
  },
  component: Prose,
  title: 'Rendering/Prose',
} satisfies Meta<typeof Prose & { content?: string }>

type Story = StoryObj<typeof meta>

export default meta

export const Sprint6Block1: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [res, setRes] = useState<any>('')

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch(
        'https://mdx-processor.staging.it-incubator.ru/api/v1/static/files/md-lesson-frontend/sprint-6/lesson-1/block-1.json'
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

export const Sprint6Block2: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [res, setRes] = useState<any>('')

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch(
        'https://mdx-processor.staging.it-incubator.ru/api/v1/static/files/md-lesson-frontend/sprint-6/lesson-1/block-2.json'
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

export const Sprint6Block3: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [res, setRes] = useState<any>('')

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch(
        'https://mdx-processor.staging.it-incubator.ru/api/v1/static/files/md-lesson-frontend/sprint-6/lesson-1/block-3.json'
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

export const Sprint6Block4: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [res, setRes] = useState<any>('')

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch(
        'https://mdx-processor.staging.it-incubator.ru/api/v1/static/files/md-lesson-frontend/sprint-6/lesson-1/block-4.json'
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

export const LocalTest: Story = {
  render: () => {
    return (
      <Prose>
        <MdxComponent code={testCode.code} />
      </Prose>
    )
  },
}

export const MdContent: Story = {
  render: ({ content }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [res, setRes] = useState<any>({})

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetch('https://mdx-processor.staging.it-incubator.ru/api/v1/mdx/bundle', {
        body: JSON.stringify({
          source: content,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
        .then(response => response.json())
        .then(json => setRes(json))
    }, [content])

    return <Prose>{res?.code && <MdxComponent code={res?.code ?? ''} />}</Prose>
  },
}
