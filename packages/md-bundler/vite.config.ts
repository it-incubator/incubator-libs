import { resolve } from 'path'

import { defineConfig } from 'vite'

import { dependencies } from './package.json'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@it-incubator/md-bundler',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(dependencies)],
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].js',
      },
    },
    target: 'esnext',
    sourcemap: true,
  },
})
