'use client'
import { ComponentProps, isValidElement, ReactElement, ReactNode, useRef } from 'react'

import { clsx } from 'clsx'

import styles from './pre.module.scss'

import { Mermaid } from '../mermaid'
import { Scrollbar } from '../scrollbar'
import { CopyToClipboard } from './copy-to-clipboard'

export const Pre = ({
  children,
  className,
  filename,
  onMermaidClick,
  ...props
}: ComponentProps<'pre'> & {
  'data-language'?: string
  filename?: string
  hasCopyCode?: boolean
  onMermaidClick?: (render: () => ReactElement, meta: { code: string }) => void
}): ReactElement => {
  if (!filename) {
    filename = props['data-language']
  }
  const preRef = useRef<HTMLPreElement | null>(null)

  const language = extractLanguage(children, props['data-language'], filename)

  if (language === 'mermaid') {
    const mermaidCode = extractCodeText(children)

    // Передаем также children для fallback извлечения из DOM
    return (
      <Mermaid code={mermaidCode} onDiagramClick={onMermaidClick}>
        {children}
      </Mermaid>
    )
  }

  return (
    <Scrollbar className={styles.codeBlock} type={'hover'}>
      {filename && (
        <div className={styles.filename}>
          {filename}
          <CopyToClipboard
            getValue={() => preRef.current?.querySelector('code')?.textContent || ''}
          />
        </div>
      )}
      <pre
        className={clsx(
          styles.preCommon,
          filename ? styles.preWithFilename : styles.preWithoutFilename,
          className
        )}
        ref={preRef}
        {...props}
      >
        {children}
      </pre>
    </Scrollbar>
  )
}

const extractCodeText = (children: ReactNode): string => {
  if (typeof children === 'string') {
    return children
  }

  if (typeof children === 'number') {
    return String(children)
  }

  if (isValidElement(children)) {
    // Если это code элемент, извлекаем текст из его children
    if (children.type === 'code') {
      if (typeof children.props.children === 'string') {
        return children.props.children
      }

      // Рекурсивно извлекаем весь текст из children
      return extractCodeText(children.props.children)
    }

    // Если это span с data-line, это новая строка кода - добавляем перенос строки перед текстом
    if (children.type === 'span' && children.props['data-line'] !== undefined) {
      const lineText = extractCodeText(children.props.children)

      return lineText
    }

    // Если это span или другой элемент с текстом, извлекаем из children
    if (children.props.children) {
      return extractCodeText(children.props.children)
    }
  }

  if (Array.isArray(children)) {
    // Обрабатываем массив, добавляя переносы строк между span с data-line
    const parts: string[] = []

    for (let i = 0; i < children.length; i++) {
      const child = children[i]

      // Если это span с data-line и не первый элемент, добавляем перенос строки
      if (
        i > 0 &&
        isValidElement(child) &&
        child.type === 'span' &&
        'data-line' in (child.props as Record<string, unknown>) &&
        (child.props as Record<string, unknown>)['data-line'] !== undefined
      ) {
        parts.push('\n')
      }

      const text = extractCodeText(child)

      // Если предыдущий элемент был span с data-line и текущий текст не начинается с переноса строки
      if (i > 0) {
        const prevChild = children[i - 1]

        if (
          isValidElement(prevChild) &&
          prevChild.type === 'span' &&
          'data-line' in (prevChild.props as Record<string, unknown>) &&
          (prevChild.props as Record<string, unknown>)['data-line'] !== undefined &&
          !text.startsWith('\n') &&
          parts[parts.length - 1] !== '\n'
        ) {
          parts.push('\n')
        }
      }

      parts.push(text)
    }

    return parts.join('')
  }

  return ''
}

const extractLanguage = (
  children: ReactNode,
  dataLanguage?: string,
  filename?: string
): string | undefined => {
  if (dataLanguage) {
    return dataLanguage
  }

  if (filename) {
    return filename
  }

  if (isValidElement(children) && children.type === 'code') {
    const className = children.props.className

    if (typeof className === 'string') {
      const match = className.match(/language-(\w+)/)

      if (match) {
        return match[1]
      }
    }
    if (Array.isArray(className)) {
      const langClass = className.find((cls: string) => cls.startsWith('language-'))

      if (langClass) {
        const match = langClass.match(/language-(\w+)/)

        if (match) {
          return match[1]
        }
      }
    }
  }

  if (Array.isArray(children)) {
    for (const child of children) {
      const lang = extractLanguage(child, dataLanguage, filename)

      if (lang) {
        return lang
      }
    }
  }

  return undefined
}
