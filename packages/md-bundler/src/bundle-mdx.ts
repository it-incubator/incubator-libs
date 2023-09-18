import { bundleMDX } from 'mdx-bundler'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

import { CODE_BLOCK_FILENAME_REGEX } from './constants'
import { attachMeta, parseMeta } from './rehype'
import theme from './theme.json'
import { BundledMdx } from './types'

export const bundleMdx = async (source: string): Promise<BundledMdx> => {
  return await bundleMDX({
    source,
    globals: {},
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [parseMeta, { defaultShowCopyCode: true }],
        [
          rehypePrettyCode,
          {
            theme,
            onVisitLine(node: any) {
              // Prevent lines from collapsing in `display: grid` mode, and
              // allow empty lines to be copy/pasted
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }]
              }
            },
            onVisitHighlightedLine(node: any) {
              node.properties.className.push('highlighted')
            },
            onVisitHighlightedChars(node: any) {
              node.properties.className = ['highlighted']
            },
            filterMetaString: (meta: string) => meta.replace(CODE_BLOCK_FILENAME_REGEX, ''),
          },
        ],
        attachMeta,
      ]

      return options
    },
  })
}
