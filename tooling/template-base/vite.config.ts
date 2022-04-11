import { tiConfig } from '@thoughtindustries/helium-server';
// @ts-ignore: There is no declarations file for this package
import mdx from './vendor/mdx';

const mdxOptions = {
  remarkPlugins: [],
  rehypePlugins: []
};

tiConfig.plugins.push(mdx(mdxOptions));

export default tiConfig;
