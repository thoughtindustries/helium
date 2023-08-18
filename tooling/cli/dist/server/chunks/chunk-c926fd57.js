import { C as CatalogProvider, b as CatalogResults } from './chunk-8fc8ac1e.js';
import { useMemo } from 'react';
import { a as jsxs, j as jsx } from './chunk-7df435e3.js';
import 'clsx';
import 'dayjs';
import { u as usePageContext } from './chunk-ab44b266.js';
const FeaturedContentComp = ({ ...restResultsProps }) => {
  const pageContext = usePageContext();
  const {
    urlParsed: { pathname, searchOriginal: searchString }
  } = pageContext;
  const config = useMemo(
    () => ({
      parsedUrl: {
        pathname,
        searchString
      }
    }),
    [pathname, searchString]
  );
  return /* @__PURE__ */ jsxs('section', {
    id: 'featuredcomp',
    className: 'bg-slate-50 py-24 px-12',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: '',
        children: [
          /* @__PURE__ */ jsx('h2', {
            className: 'text-4xl font-bold text-center',
            children: 'Featured Catalog'
          }),
          /* @__PURE__ */ jsx('h4', {
            className: 'text-slate-500 text-center text-xl font-light',
            children:
              'Our massive libary of resources engages and informs learners on everything from marking to finance and everything in between.'
          }),
          /* @__PURE__ */ jsx('div', {
            className: 'grid md:grid-cols-3 grid-cols-1 py-24 px-12 md:px-20 ',
            children: /* @__PURE__ */ jsx('div', {
              className: 'col-span-3',
              children: /* @__PURE__ */ jsx(CatalogProvider, {
                config,
                children: /* @__PURE__ */ jsx(CatalogResults, {
                  ...restResultsProps
                })
              })
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx('a', {
        href: '/catalog',
        children: /* @__PURE__ */ jsx('button', {
          className: 'flex my-10 bg-blue-900 text-white font-bold py-3 px-5 rounded mx-auto',
          children: 'View Full Catalog'
        })
      })
    ]
  });
};
export { FeaturedContentComp as F };
