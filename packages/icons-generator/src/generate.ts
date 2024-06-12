import { exec } from 'node:child_process'
import path from 'path'

import svgrConfig from '../svgr.config'
import { createIndex, toPascalCase } from './utils'
import chalk from 'chalk'
import fs from 'fs-extra'
import { v1 } from 'uuid'

const svgr = require('@svgr/core').default

const UI_KIT_ICONS_DIRECTORY_PATH = path.resolve(__dirname, '../../ui-kit/src/assets/icons/')

const ICONS_DIRECTORY_PATH = path.resolve(UI_KIT_ICONS_DIRECTORY_PATH, 'components')
const SVG_DIRECTORY_PATH = path.resolve(__dirname, './icons')
const INDEX_DIRECTORY_PATH = UI_KIT_ICONS_DIRECTORY_PATH
const STORYBOOK_DIRECTORY_PATH = path.resolve(UI_KIT_ICONS_DIRECTORY_PATH, 'stories')

// 4. Read manually added SVGs data
console.log(chalk.blueBright('-> Reading manually added SVGs'))
const manuallyAddedSvgs: { data: string; name: string }[] = []
const svgFiles = fs
  .readdirSync(SVG_DIRECTORY_PATH)
  // Filter out hidden files (e.g. .DS_STORE)
  .filter(item => {
    const isValid = !/(^|\/)\.[^/.]/g.test(item)

    return isValid
  })

svgFiles.forEach(fileName => {
  const svgData = fs.readFileSync(path.resolve(SVG_DIRECTORY_PATH, fileName), 'utf-8')

  manuallyAddedSvgs.push({
    data: svgData,
    name: toPascalCase(fileName.replace(/svg/i, '')),
  })
})

// remove all files from the directory
console.log(chalk.cyanBright('-> Removing all files from the directory'))

fs.emptyDirSync(ICONS_DIRECTORY_PATH)
fs.emptyDirSync(STORYBOOK_DIRECTORY_PATH)

// 5. Convert SVG to React Components
console.log(chalk.cyanBright('-> Converting to React components'))
manuallyAddedSvgs.forEach(svg => {
  const svgCode = replacePatternWithUniqueID(svg.data)
  const componentName = toPascalCase(svg.name)
  const componentFileName = `${componentName}.tsx`

  // Converts SVG code into React code using SVGR library
  const componentCode = svgr.sync(svgCode, svgrConfig, { componentName })

  // 6. Write generated component to file system
  fs.ensureDirSync(ICONS_DIRECTORY_PATH)
  fs.outputFileSync(path.resolve(ICONS_DIRECTORY_PATH, componentFileName), componentCode)
  // 7. Generate storybook story for each icon
  console.log(chalk.magentaBright(`-> Generating story file for ${componentName}`))
  const storyCode = `import { ${componentName} } from '../';

export default {
title: 'Components/Icons/${componentName}',
component: ${componentName},
};

export const Default = {}`

  fs.ensureDirSync(STORYBOOK_DIRECTORY_PATH)
  fs.outputFileSync(
    path.resolve(STORYBOOK_DIRECTORY_PATH, `${componentName}.stories.tsx`),
    storyCode
  )
})

// 8. Generate index.ts
console.log(chalk.yellowBright('-> Generating index file'))
createIndex({
  componentsDirectoryPath: ICONS_DIRECTORY_PATH,
  indexDirectoryPath: INDEX_DIRECTORY_PATH,
  indexFileName: 'index.tsx',
})
exec('cd ../ui-kit && pnpm run lint:fix')
console.log(chalk.greenBright('-> All done! Make sure to wait for eslint to finish running ✅'))

function replacePatternWithUniqueID(fileContent: string) {
  const pattern = 'pattern0'
  const uniqueID = v1()

  return fileContent.replaceAll(pattern, uniqueID)
}
