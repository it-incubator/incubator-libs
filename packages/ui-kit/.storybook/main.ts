// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module'
import { dirname, join } from 'path'
import remarkGfm from 'remark-gfm'

const require = createRequire(import.meta.url)

const config = {
  stories: [
    // MDX files excluded from build due to Storybook 10 issue with mdx-react-shim
    // Uncomment when Storybook fixes the issue
    // '../stories/**/*.mdx',
    '../stories/**/*.stories.@(ts|tsx)',
    '../src/assets/icons/stories/**/*.stories.@(ts|tsx)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  features: {
    storyStoreV7: true,
  },

  async viteFinal(cfg, { configType }) {
    const mode = configType === 'DEVELOPMENT' ? 'development' : 'production'

    cfg.define = {
      ...(cfg.define ?? {}),
      __DEV__: mode === 'development' ? 'true' : 'false',
      'process.env.NODE_ENV': JSON.stringify(mode),
    }

    cfg.build = cfg.build ?? {}
    cfg.build.sourcemap = false

    return cfg
  },
}
export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
