import { CODE_BLOCK_FILENAME_REGEX } from './constants'
import { attachMeta, parseMeta } from './rehype'
import theme from './theme.json'
import { BundledMdx } from './types'
import { bundleMDX } from 'mdx-bundler'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const bundleMdx = async (source: string): Promise<BundledMdx> => {
  return await bundleMDX({
    globals: {
      '@it-incubator/mdx-components': {
        defaultExport: false,
        namedExports: ['Callout', 'Cards', 'FileTree', 'Steps', 'Tabs'],
        varName: 'components',
      },
    },
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [parseMeta],
        [
          rehypePrettyCode,
          {
            filterMetaString: (meta: string) => meta.replace(CODE_BLOCK_FILENAME_REGEX, ''),
            onVisitLine(node: any) {
              // Prevent lines from collapsing in `display: grid` mode, and
              // allow empty lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }]
              }
            },
            theme,
          },
        ],
        attachMeta,
      ]
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]

      return options
    },
    source,
  })
}
