import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { peerDependencies, dependencies } from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@it-incubator/ui-kit',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
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
