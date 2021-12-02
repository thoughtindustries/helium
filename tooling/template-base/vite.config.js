import reactRefresh from '@vitejs/plugin-react-refresh';
import ssr from 'vite-plugin-ssr/plugin';
import WindiCSS from 'vite-plugin-windicss';

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
  plugins: [
    reactRefresh(),
    ssr(),
    mdx(mdxOptions),
    WindiCSS({ scan: { dirs: ['pages'], fileExtensions: ['js', 'ts', 'jsx', 'tsx'] } })
  ]
};
