import { CODE_BLOCK_FILENAME_REGEX } from './constants'
import { attachMeta, parseMeta } from './rehype'
import theme from './theme.json'
import { BundledMdx } from './types'
import { bundleMDX } from 'mdx-bundler'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

export const bundleMdx = async (source: string): Promise<BundledMdx> => {
  return await bundleMDX({
    globals: { components: '@it-incubator/mdx-components' },
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [parseMeta, { defaultShowCopyCode: true }],
        [
          rehypePrettyCode,
          {
            filterMetaString: (meta: string) => meta.replace(CODE_BLOCK_FILENAME_REGEX, ''),
            onVisitHighlightedChars(node: any) {
              node.properties.className = ['highlighted']
            },
            onVisitHighlightedLine(node: any) {
              node.properties.className.push('highlighted')
            },
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

      return options
    },
    source,
  })
}
