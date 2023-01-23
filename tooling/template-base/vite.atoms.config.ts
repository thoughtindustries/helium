import { defineConfig } from 'vite';
import { resolve } from 'path';
import externalGlobals from 'rollup-plugin-external-globals';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    externalGlobals({
      react: 'React'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'atoms/index.ts'),
      name: 'TiAtoms',
      formats: ['es'],
      fileName: 'ti-atoms.[hash]'
    },
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
});
