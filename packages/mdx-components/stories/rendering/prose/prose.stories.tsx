import React, { ReactElement, useEffect, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { MdxComponent, Prose } from '../../../src'
import { testCode } from './code'

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
export const Sprint6Block1Legacy: Story = {
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
      <Prose legacy>
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

export const MermaidWithModal: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mermaidModalOpen, setMermaidModalOpen] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mermaidRender, setMermaidRender] = useState<(() => ReactElement) | null>(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mermaidCode, setMermaidCode] = useState<string>('')

    const handleMermaidClick = (render: () => ReactElement, meta: { code: string }) => {
      setMermaidRender(() => render)
      setMermaidCode(meta.code)
      setMermaidModalOpen(true)
    }

    const handleCloseModal = () => {
      setMermaidModalOpen(false)
      setMermaidRender(null)
    }

    return (
      <>
        <Prose>
          <MdxComponent code={testCode.code} onMermaidClick={handleMermaidClick} />
        </Prose>

        {/* Простая модалка для Mermaid */}
        {mermaidModalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
            }}
            onClick={handleCloseModal}
          >
            <div
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                maxWidth: '90vw',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative',
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
                type={'button'}
                onClick={handleCloseModal}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: '0.25rem',
                  backgroundColor: '#f5f5f5',
                }}
              >
                {'✕'} Закрыть
              </button>
              <div style={{ marginTop: '2rem' }}>{mermaidRender && mermaidRender()}</div>
              {mermaidCode && (
                <details style={{ marginTop: '1rem' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.875rem' }}>
                    Показать исходный код
                  </summary>
                  <pre
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.5rem',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '0.25rem',
                      fontSize: '0.75rem',
                      overflow: 'auto',
                    }}
                  >
                    {mermaidCode}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )}
      </>
    )
  },
}
