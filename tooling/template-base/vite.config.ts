import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(async () => {
  const plugins = [react()];

  try {
    // Try to load vike dynamically
    const vikeModule = await import('vike/plugin');
    const vike = vikeModule.default || vikeModule;
    plugins.push(vike());
  } catch (error) {
    console.warn('Vike plugin could not be loaded, continuing without SSR:', error);
  }

  // Load MDX plugins
  const remarkFrontmatter = await import('remark-frontmatter');
  const remarkMdxFrontmatter = await import('remark-mdx-frontmatter');
  const mdx = await import('@mdx-js/rollup');
  const mdxOptions = {
    remarkPlugins: [remarkFrontmatter.default, remarkMdxFrontmatter.default],
    rehypePlugins: []
  };

  plugins.push(mdx.default(mdxOptions));

  return {
    plugins,
    build: {
      manifest: true // Generate manifest.json for deployment
    },
    optimizeDeps: {
      include: ['dayjs', 'universal-cookie']
    },
    envPrefix: 'HELIUM_PUBLIC_',
    ssr: {
      noExternal: ['@apollo/client', 'graphql', 'use-debounce']
    },
    resolve: {
      dedupe: ['@apollo/client'],
      alias: [
        {
          // In development, redirect external NavBar imports to local NavBar
          find: /^.*\/helium-apps\/.*\/NavBar$/,
          replacement: path.resolve(__dirname, './components/Navigation/NavBar')
        }
      ]
    }
  };
});
