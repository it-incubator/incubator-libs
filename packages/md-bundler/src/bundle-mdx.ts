import { CODE_BLOCK_FILENAME_REGEX } from './constants'
import grammar from './css.styled.json'
import { attachMeta, parseMeta } from './rehype'
import styledGrammar from './styled-components.json'
import theme from './theme.json'
import { BundledMdx } from './types'
import { bundleMDX } from 'mdx-bundler'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { BUNDLED_LANGUAGES, getHighlighter } from 'shiki'

export const bundleMdx = async (source: string, file?: string): Promise<BundledMdx> => {
  const styledComponentsLang = {
    aliases: ['CSS (Styled Components)'],
    configuration:
      'C:\\Users\\andre\\dev\\inc\\libs\\packages\\md-bundler\\src\\css.styled.configuration.json',
    grammar,
    id: 'source.css.styled',
    scopeName: 'source.css.styled',
  }

  return await bundleMDX({
    ...(file ? { file: file } : { source: source }),
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
            getHighlighter: (options: any) =>
              getHighlighter({
                ...options,
                langs: [
                  ...BUNDLED_LANGUAGES,
                  styledComponentsLang,
                  {
                    aliases: ['styled'],
                    grammar: styledGrammar,
                    id: 'styled',
                    scopeName: 'source.styled',
                  },
                ],
              }),
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
  })
}
