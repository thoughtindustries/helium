import {
  u as w,
  a as $,
  c as x,
  C as Q,
  b as R,
  N as S,
  F as U
} from '../chunks/chunk-a6493120.js';
import { B as W } from '../chunks/chunk-e21543bf.js';
import { j as e, F as f, a as r, r as N } from '../chunks/chunk-5011acf0.js';
import { C as D } from '../chunks/chunk-d9a61b28.js';
import '../chunks/chunk-8d1d4039.js';
import '../chunks/chunk-16adb97c.js';
const O = () =>
    e('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      className: 'w-full h-full',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M19 9l-7 7-7-7'
      })
    }),
  z = () =>
    e('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      className: 'w-full h-full',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      children: e('path', {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 2,
        d: 'M9 5l7 7-7 7'
      })
    }),
  G = ({ href: n, value: s, count: a }) =>
    e('li', {
      className: 'rounded-lg pt-2',
      children: r('a', {
        href: n,
        className: 'flex justify-between pt-2 pl-2 hover:bg-blue-500 hover:text-white rounded',
        children: [
          e('div', { className: 'text-sm font-semibold', children: s }),
          e('div', {
            className: 'mt-0',
            children:
              a &&
              e('button', {
                className: 'px-4 py-0.5 mb-2 mr-2 bg-gray-300 text-sm font-medium rounded-full',
                children: a
              })
          })
        ]
      })
    }),
  H = ({ index: n, label: s, defaultIsExpanded: a, aggregationBuckets: o }) => {
    const [t, p] = N.exports.useState(a),
      l = () => {
        p(u => !u);
      },
      i =
        'w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent flex items-center gap-4',
      c = `catalog-aggregation-dropdown-${n}`;
    return e('div', {
      className: 'bg-white p-6 rounded',
      children: r('div', {
        className: x('py-4 px-3 rounded', t && 'border-b mb-4 bg-gray-100'),
        children: [
          r('button', {
            className: `${i}`,
            onClick: l,
            'aria-expanded': t,
            'aria-labelledby': c,
            children: [
              r('span', {
                className: 'text-xl inline-block leading-4 text-center w-5 h-5',
                children: [t && e(O, {}), !t && e(z, {})]
              }),
              e('span', { className: 'font-semibold', children: s })
            ]
          }),
          e('ul', {
            'aria-hidden': !t,
            id: c,
            className: x('pl-6 text-sm', { hidden: !t }),
            children: o
          })
        ]
      })
    });
  },
  v = () => {
    const { params: n, urlManager: s } = w(),
      { aggregations: a, aggregationFilters: o, isCurated: t, token: p, tokenLabel: l } = n,
      { data: i } = $(),
      c = o.length ? o[0].label : void 0,
      u = i ? i.Languages : [],
      L = a.map(({ label: d = '', buckets: k = [] }, m) => {
        const A = d === c || (l && d === l) || (!t && !p && m === 0),
          F = k.map(({ value: g = '', count: y, query: h }, E) => {
            var b;
            const B = { label: d, value: g },
              j = h == null ? void 0 : h.includes('language'),
              P = ((b = u.find(({ code: M }) => M === g)) == null ? void 0 : b.label) || g,
              I = j ? P : g,
              T = { href: s.composeURLForAddAggregationFilter(B), value: I, count: y };
            return e(G, { ...T }, `catalog-aggregation-bucket-${E}`);
          });
        return e(
          H,
          { ...{ index: m, defaultIsExpanded: A, label: d, aggregationBuckets: F } },
          `catalog-aggregation-${m}`
        );
      });
    return e(f, { children: L });
  };
v.displayName = 'CatalogAggregations';
const C = ({ children: n }) => {
  const { params: s } = w(),
    { error: a } = s;
  return a ? e(f, { children: a }) : n;
};
C.displayName = 'CatalogError';
const J = ({ ...n }) => {
    const s = D(),
      {
        urlParsed: { pathname: a, searchOriginal: o }
      } = s,
      t = N.exports.useMemo(() => ({ parsedUrl: { pathname: a, searchString: o } }), [a, o]);
    return e('div', {
      className: 'grid md:grid-cols-3 grid-cols-1 py-24 px-12 md:px-20 bg-slate-100',
      children: e('div', {
        className: 'col-span-3',
        children: e(Q, {
          config: t,
          children: e('div', {
            className: 'w-full pt-6',
            children: e('div', {
              className: 'w-full',
              children: e(C, {
                children: r('div', {
                  className: 'grid grid-cols-3 gap-4 pt-11',
                  children: [
                    e('div', { className: 'col-span-full md:col-span-1', children: e(v, {}) }),
                    e('div', {
                      className: 'col-span-full md:col-span-2 ',
                      children: e(R, { ...n })
                    })
                  ]
                })
              })
            })
          })
        })
      })
    });
  },
  se = { title: 'Catalog Page', description: 'The catalog page' };
function oe() {
  return e(f, {
    children: r('div', {
      className: 'font-primary',
      children: [
        e(S, {}),
        e(W, {
          heading: 'Full Learning Catalog',
          subtext: 'Browse the full list of courses and learning paths.'
        }),
        e(J, {
          onAddedToQueue: function (n) {
            throw new Error('Function not implemented.');
          }
        }),
        e(U, {})
      ]
    })
  });
}
export { oe as Page, se as documentProps };
