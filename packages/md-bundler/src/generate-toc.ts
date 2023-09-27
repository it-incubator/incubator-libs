import { fromHtml } from 'hast-util-from-html'
import { toMdast } from 'hast-util-to-mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { mdxFromMarkdown } from 'mdast-util-mdx'
import { toc as getToc } from 'mdast-util-toc'
import { Options } from 'mdast-util-toc/lib'
import { mdxjs } from 'micromark-extension-mdxjs'

export const generateToc = async (mdxSource: string, options: Options) => {
  const tree = fromMarkdown(mdxSource, {
    extensions: [mdxjs()],
    mdastExtensions: [mdxFromMarkdown()],
  })

  return getToc(tree, { maxDepth: 3, tight: true, ...options })
}

export const generateTocFromHtml = async (html: string, options: Options) => {
  const tree = fromHtml(html, { fragment: true })
  const mdastTree = toMdast(tree)

  return getToc(mdastTree, { maxDepth: 3, tight: true, ...options })
}
