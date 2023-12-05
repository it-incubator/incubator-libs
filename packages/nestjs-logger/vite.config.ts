import { resolve } from 'path'

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      // the proper extensions will be added
      fileName: 'index',
      formats: ['cjs'],
      name: '@it-incubator/nestjs-logger',
    },
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'cjs',
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
})
