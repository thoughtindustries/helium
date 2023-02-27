import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src/clients/graphiql'),
  base: '/graphiql',
  build: {
    outDir: resolve(__dirname, 'dist/graphiql'),
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/clients/graphiql/index.html')
      }
    }
  }
});
