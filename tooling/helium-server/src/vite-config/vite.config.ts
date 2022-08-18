import reactRefresh from '@vitejs/plugin-react-refresh';
import ssr from 'vite-plugin-ssr/plugin';

const tiConfig = async (): Promise<Record<any, any>> => {
  const remarkFrontmatter = await import('remark-frontmatter');
  const remarkMdxFrontmatter = await import('remark-mdx-frontmatter');
  const mdx = await import('@mdx-js/rollup');

  const mdxOptions = {
    remarkPlugins: [remarkFrontmatter.default, remarkMdxFrontmatter.default],
    rehypePlugins: []
  };

  return {
    plugins: [reactRefresh(), ssr(), mdx.default(mdxOptions)],
    optimizeDeps: {
      include: ['dayjs', 'universal-cookie']
    }
  };
};

export default tiConfig;
