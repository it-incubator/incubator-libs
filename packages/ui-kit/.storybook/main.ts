import { dirname, join } from 'path'

const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx)',
    '../src/components/**/*.stories.@(ts|tsx)',
    '../src/components/**/*.mdx',
    '../src/assets/icons/stories/**/*.stories.@(ts|tsx)',
  ],
  core: {
    disableTelemetry: true,
  },
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  viteFinal: config => {
    config.build = config.build || {}
    config.build.sourcemap = false
    return config
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
