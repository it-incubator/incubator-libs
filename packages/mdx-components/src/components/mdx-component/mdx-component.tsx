'use client'
import { ComponentPropsWithoutRef, ReactElement } from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import { MDXContentProps } from 'mdx-bundler/dist/client'

import { Callout, Card, Cards, FileTree, Steps, Tabs } from '..'
import { Checkbox } from '../checkbox'
import { Code } from '../code'
import { Pre } from '../pre'
import { Scrollbar } from '../scrollbar'

const mdxComponents = {
  Callout,
  Card,
  Cards,
  FileTree,
  Steps,
  Tabs,
}

export type MdxComponentProps = {
  code: string
  components?: MDXContentProps['components']
  onImageClick?: (src: string) => void
}
export const MdxComponent = ({ code, components, onImageClick }: MdxComponentProps) => {
  const Component = getMDXComponent(code, { components: mdxComponents })

  return (
    <Component
      components={{
        code: Code,
        img: props => (
          <img
            {...props}
            onClick={() => onImageClick?.(props.src || '')}
            style={{ cursor: onImageClick ? 'pointer' : 'default' }}
          />
        ),
        input: Input,
        pre: Pre,
        table: Table,
        ...components,
      }}
    />
  )
}
function Input(props: ComponentPropsWithoutRef<'input'>): ReactElement {
  if (props.type === 'checkbox') {
    return <Checkbox {...props} />
  }

  return <input {...props} />
}

function Table(props: ComponentPropsWithoutRef<'table'>) {
  return (
    <Scrollbar type={'hover'}>
      <table {...props} />
    </Scrollbar>
  )
}
