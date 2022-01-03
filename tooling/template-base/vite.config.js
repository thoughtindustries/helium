import reactRefresh from '@vitejs/plugin-react-refresh';
import ssr from 'vite-plugin-ssr/plugin';

/**
 * because of cjs/esm issues, mdx file generated via:
 * `npx esbuild @mdx-js/rollup --bundle --platform=node --outfile=vendor/mdx.js`
 */
import mdx from './vendor/mdx';

const mdxOptions = {
  remarkPlugins: [],
  rehypePlugins: []
};

export default {
  plugins: [reactRefresh(), ssr(), mdx(mdxOptions)]
};
