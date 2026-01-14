import * as fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { bundleMdx } from '../dist/index.js'

process.env.NODE_ENV = 'production'

const source = ``

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const mdxFilePath = path.resolve(__dirname, 'test.mdx')
const outputFilePath = path.resolve(__dirname, '../../mdx-components/stories/rendering/prose/code.ts')

const result = await bundleMdx(source, mdxFilePath)

fs.writeFileSync(outputFilePath, `export const testCode = ${JSON.stringify(result)}`, 'utf-8')
