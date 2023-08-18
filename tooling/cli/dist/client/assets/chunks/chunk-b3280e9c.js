import { C as l, b as i } from './chunk-a6493120.js';
import { r as c, a as r, j as e } from './chunk-5011acf0.js';
import { C as d } from './chunk-d9a61b28.js';
const h = ({ ...s }) => {
  const n = d(),
    {
      urlParsed: { pathname: a, searchOriginal: t }
    } = n,
    o = c.exports.useMemo(() => ({ parsedUrl: { pathname: a, searchString: t } }), [a, t]);
  return r('section', {
    id: 'featuredcomp',
    className: 'bg-slate-50 py-24 px-12',
    children: [
      r('div', {
        className: '',
        children: [
          e('h2', { className: 'text-4xl font-bold text-center', children: 'Featured Catalog' }),
          e('h4', {
            className: 'text-slate-500 text-center text-xl font-light',
            children:
              'Our massive libary of resources engages and informs learners on everything from marking to finance and everything in between.'
          }),
          e('div', {
            className: 'grid md:grid-cols-3 grid-cols-1 py-24 px-12 md:px-20 ',
            children: e('div', {
              className: 'col-span-3',
              children: e(l, { config: o, children: e(i, { ...s }) })
            })
          })
        ]
      }),
      e('a', {
        href: '/catalog',
        children: e('button', {
          className: 'flex my-10 bg-blue-900 text-white font-bold py-3 px-5 rounded mx-auto',
          children: 'View Full Catalog'
        })
      })
    ]
  });
};
export { h as F };
