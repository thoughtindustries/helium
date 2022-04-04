// import { tiConfig } from '@thoughtindustries/helium-server';
// import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
// @ts-ignore: There is no declarations file for this package
// import mdx from './vendor/mdx';
// import mdx from 'vite-plugin-mdx';

// const mdxOptions = {
//   remarkPlugins: [],
//   rehypePlugins: []
// };

// tiConfig.plugins.push(viteCommonjs())
// tiConfig.plugins.push(mdx(mdxOptions));
// tiConfig.optimizeDeps = {...tiConfig.optimizeDeps, esbuildOptions: { plugins: [esbuildCommonjs(['@thoughtindustries/helium-server', '@apollo/client'])]}}

// export default tiConfig;

import reactRefresh from '@vitejs/plugin-react-refresh';
import ssr from 'vite-plugin-ssr/plugin';

const tiConfig = {
  plugins: [reactRefresh(), ssr()],
  optimizeDeps: {
    include: ['dayjs']
  }
};

export default tiConfig;
