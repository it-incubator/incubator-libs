import React, { ReactElement, useEffect, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import s from './mermaid.module.scss'

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
  title: 'Rendering/Mermaid',
} satisfies Meta<typeof Prose & { content?: string }>

type Story = StoryObj<typeof meta>

export default meta

export const MermaidWithModal: Story = {
  render: () => {
    // const [mermaidModalOpen, setMermaidModalOpen] = useState(false)
    const [mermaidRender, setMermaidRender] = useState<(() => ReactElement) | null>(null)

    const handleMermaidClick = (render: () => ReactElement, meta: { code: string }) => {
      setMermaidRender(() => render)
      // setMermaidModalOpen(true)
    }

    const handleCloseModal = () => {
      // setMermaidModalOpen(false)
      setMermaidRender(null)
    }

    return (
      <>
        <Prose>
          <MdxComponent code={testCode.code} onMermaidClick={handleMermaidClick} />
        </Prose>

        {/* Простая модалка для Mermaid */}
        {mermaidRender && (
          <div className={s.overlay} onClick={handleCloseModal}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
              <button type={'button'} onClick={handleCloseModal}>
                {'✕'} Закрыть
              </button>
              <div style={{ marginTop: '2rem' }}>{mermaidRender && mermaidRender()}</div>
            </div>
          </div>
        )}
      </>
    )
  },
}
