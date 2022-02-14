import reactRefresh from '@vitejs/plugin-react-refresh';
import ssr from 'vite-plugin-ssr/plugin';
import mdx from '@thoughtindustries/helium-server/mdx';

const mdxOptions = {
  remarkPlugins: [],
  rehypePlugins: []
};

export default {
  plugins: [reactRefresh(), ssr(), mdx(mdxOptions)]
};
