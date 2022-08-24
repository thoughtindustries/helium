import { tiConfig } from '@thoughtindustries/helium-server';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const remarkFrontmatter = await import('remark-frontmatter');
  const remarkMdxFrontmatter = await import('remark-mdx-frontmatter');
  const mdx = await import('@mdx-js/rollup');
  const mdxOptions = {
    remarkPlugins: [remarkFrontmatter.default, remarkMdxFrontmatter.default],
    rehypePlugins: []
  };

  tiConfig.plugins.push(mdx.default(mdxOptions));

  return tiConfig;
});
