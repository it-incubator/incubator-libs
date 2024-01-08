import * as fs from 'fs'

import { bundleMdx } from '../dist/index.js'

process.env.NODE_ENV = 'production'

const source = ``


const result = await bundleMdx(source, '/Users/andres/dev/work/incubator/incubator-libs/packages/md-bundler/test/test.mdx')

fs.writeFileSync('../mdx-components/stories/rendering/prose/code.ts', `export const testCode = ${JSON.stringify(result)}`, 'utf-8')