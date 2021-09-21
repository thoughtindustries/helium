import reactRefresh from '@vitejs/plugin-react-refresh';
import ssr from 'vite-plugin-ssr/plugin';
import mdx from 'vite-plugin-mdx';
import WindiCSS from 'vite-plugin-windicss';

const mdxOptions = {
  remarkPlugins: [],
  rehypePlugins: []
};

export default {
  plugins: [reactRefresh(), ssr(), mdx(mdxOptions), WindiCSS()],
  base: 'https://helium.rjschill.workers.dev/'
};
