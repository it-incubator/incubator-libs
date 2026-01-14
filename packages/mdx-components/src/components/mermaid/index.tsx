'use client'
import { ReactElement, ReactNode, useEffect, useRef, useState } from 'react'

import mermaid from 'mermaid'

type MermaidProps = {
  children?: string | ReactNode
  code?: string
  interactive?: boolean
  onDiagramClick?: (render: () => ReactElement, meta: { code: string }) => void
}

let mermaidInitialized = false

export const Mermaid = ({
  children,
  code,
  interactive = true,
  onDiagramClick,
}: MermaidProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null)
  const tempContainerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [mermaidCode, setMermaidCode] = useState<string>('')

  useEffect(() => {
    // Сначала пытаемся использовать переданный code
    if (code && code.trim()) {
      setMermaidCode(code.trim())

      return
    }

    // Если code не передан, но есть children как строка
    if (typeof children === 'string' && children.trim()) {
      setMermaidCode(children.trim())

      return
    }

    // Если children - это React элементы, пытаемся извлечь текст из DOM
    if (tempContainerRef.current && children) {
      const text = extractTextFromNode(tempContainerRef.current)

      if (text.trim()) {
        setMermaidCode(text.trim())
      }
    }
  }, [code, children])

  useEffect(() => {
    if (!mermaidCode || !containerRef.current) {
      return
    }

    const initializeMermaid = async () => {
      try {
        const isDarkMode = document.body.classList.contains('dark-mode')

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: isDarkMode ? 'dark' : 'neutral',
            securityLevel: 'loose',
          })
          mermaidInitialized = true
        }

        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`
        const element = containerRef.current

        if (!element) {
          return
        }

        element.innerHTML = ''

        const { svg } = await mermaid.render(id, mermaidCode)

        element.innerHTML = svg
        setError(null)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error'

        setError(errorMessage)
        console.error('Mermaid rendering error:', err)
      }
    }

    initializeMermaid()
  }, [mermaidCode])

  const handleClick = () => {
    if (!interactive || !onDiagramClick || !mermaidCode) {
      return
    }

    onDiagramClick(() => <Mermaid code={mermaidCode} interactive={false} />, { code: mermaidCode })
  }

  if (error) {
    return (
      <div
        style={{
          padding: '1rem',
          backgroundColor: 'hsl(var(--primary-hue) 100% 39% / 5%)',
          borderRadius: '0.5rem',
          border: '1px solid hsl(var(--primary-hue) 100% 39% / 20%)',
        }}
      >
        <div style={{ color: 'red', marginBottom: '0.5rem' }}>Mermaid Error:</div>
        <pre style={{ margin: 0, fontSize: '0.875rem' }}>{error}</pre>
        <details style={{ marginTop: '0.5rem' }}>
          <summary style={{ cursor: 'pointer', fontSize: '0.875rem' }}>Show code</summary>
          <pre
            style={{
              marginTop: '0.5rem',
              padding: '0.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              borderRadius: '0.25rem',
              fontSize: '0.75rem',
              overflow: 'auto',
            }}
          >
            {mermaidCode}
          </pre>
        </details>
      </div>
    )
  }

  return (
    <>
      {/* Скрытый контейнер для извлечения текста из React элементов */}
      {typeof children !== 'string' && children && (
        <div ref={tempContainerRef} style={{ display: 'none' }}>
          {children}
        </div>
      )}
      <div
        ref={containerRef}
        onClick={handleClick}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          margin: '1.5rem 0',
          cursor: interactive && onDiagramClick ? 'pointer' : 'default',
        }}
      />
    </>
  )
}

const extractTextFromNode = (node: Node): string => {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent || ''
  }

  if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node as Element
    let text = ''

    // Если это span с data-line, добавляем перенос строки перед ним (кроме первого)
    if (element.tagName === 'SPAN' && element.hasAttribute('data-line')) {
      text += '\n'
    }

    for (const child of Array.from(node.childNodes)) {
      text += extractTextFromNode(child)
    }

    return text
  }

  return ''
}
