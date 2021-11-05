import reactRefresh from '@vitejs/plugin-react-refresh';
import ssr from 'vite-plugin-ssr/plugin';
import mdx from './vendor/mdx';
import WindiCSS from 'vite-plugin-windicss';

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
