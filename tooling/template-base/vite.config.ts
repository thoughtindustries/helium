import { createVikeConfig } from '@thoughtindustries/helium-server';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(async () => {
  // Get base config with vike plugin (uses dynamic import to avoid ESM/CJS issues)
  const config = await createVikeConfig();

  // Load MDX plugins
  const remarkFrontmatter = await import('remark-frontmatter');
  const remarkMdxFrontmatter = await import('remark-mdx-frontmatter');
  const mdx = await import('@mdx-js/rollup');
  const mdxOptions = {
    remarkPlugins: [remarkFrontmatter.default, remarkMdxFrontmatter.default],
    rehypePlugins: []
  };

  // Add MDX plugin
  config.plugins.push(mdx.default(mdxOptions));

  // Add template-specific alias
  config.resolve = config.resolve || {};
  config.resolve.alias = config.resolve.alias || [];
  config.resolve.alias.push({
    // In development, redirect external NavBar imports to local NavBar
    find: /^.*\/helium-apps\/.*\/NavBar$/,
    replacement: path.resolve(__dirname, './components/Navigation/NavBar')
  });

  return config;
});
