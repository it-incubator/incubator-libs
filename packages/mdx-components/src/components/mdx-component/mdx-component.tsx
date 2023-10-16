import { Callout, Cards, FileTree, Steps, Tabs } from '..'
import { Code } from '../code'
import { Pre } from '../pre'
import { getMDXComponent } from 'mdx-bundler/client'

const components = {
  Callout,
  Cards,
  FileTree,
  Steps,
  Tabs,
}

export type MdxComponentProps = {
  code: string
  onImageClick?: (src: string) => void
}
export const MdxComponent = ({ code, onImageClick }: MdxComponentProps) => {
  const Component = getMDXComponent(code, { components })

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
        pre: Pre,
      }}
    />
  )
}
