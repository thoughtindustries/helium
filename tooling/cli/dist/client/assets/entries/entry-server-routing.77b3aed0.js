import {
  s as u,
  d,
  y as _,
  r as s,
  k as c,
  E as f,
  z as v,
  j as E,
  O as x,
  P as y,
  M as m,
  L as h
} from '../chunks/chunk-fb1380c5.js';
import { _ as r } from '../chunks/chunk-f70ab90b.js';
const i = {},
  L = {},
  F = {},
  P = {},
  C = [],
  p = {},
  R = !0,
  b = [],
  O = { onBeforeRoute: null },
  w = Object.assign({
    '/pages/catalog/index.page.tsx': () =>
      r(
        () => import('./pages_catalog_index.page.515d3739.js'),
        [
          'assets/entries/pages_catalog_index.page.515d3739.js',
          'assets/chunks/chunk-a6493120.js',
          'assets/chunks/chunk-8d1d4039.js',
          'assets/chunks/chunk-d9a61b28.js',
          'assets/chunks/chunk-5011acf0.js',
          'assets/chunks/chunk-16adb97c.js',
          'assets/chunks/chunk-e21543bf.js'
        ]
      ),
    '/pages/dashboard/index.page.tsx': () =>
      r(
        () => import('./pages_dashboard_index.page.e1f513b0.js'),
        [
          'assets/entries/pages_dashboard_index.page.e1f513b0.js',
          'assets/chunks/chunk-a6493120.js',
          'assets/chunks/chunk-8d1d4039.js',
          'assets/chunks/chunk-d9a61b28.js',
          'assets/chunks/chunk-5011acf0.js',
          'assets/chunks/chunk-16adb97c.js',
          'assets/chunks/chunk-e21543bf.js',
          'assets/chunks/chunk-47f58d9c.js',
          'assets/chunks/chunk-b3280e9c.js'
        ]
      ),
    '/pages/index/index.page.tsx': () =>
      r(
        () => import('./pages_index_index.page.2b6f9056.js'),
        [
          'assets/entries/pages_index_index.page.2b6f9056.js',
          'assets/chunks/chunk-5011acf0.js',
          'assets/chunks/chunk-b3280e9c.js',
          'assets/chunks/chunk-a6493120.js',
          'assets/chunks/chunk-8d1d4039.js',
          'assets/chunks/chunk-d9a61b28.js',
          'assets/chunks/chunk-16adb97c.js'
        ]
      ),
    '/pages/signin/index.page.tsx': () =>
      r(
        () => import('./pages_signin_index.page.d63a9e66.js'),
        [
          'assets/entries/pages_signin_index.page.d63a9e66.js',
          'assets/chunks/chunk-5011acf0.js',
          'assets/chunks/chunk-8d1d4039.js',
          'assets/chunks/chunk-d9a61b28.js'
        ]
      ),
    '/renderer/_error.page.tsx': () =>
      r(
        () => import('./renderer_error.page.396325a7.js'),
        ['assets/entries/renderer_error.page.396325a7.js', 'assets/chunks/chunk-5011acf0.js']
      )
  }),
  A = { ...w };
i['.page'] = A;
const I = Object.assign({
    '/renderer/_default.page.client.tsx': () =>
      r(
        () => import('./renderer_default.page.client.a6121c70.js'),
        [
          'assets/entries/renderer_default.page.client.a6121c70.js',
          'assets/chunks/chunk-5011acf0.js',
          'assets/chunks/chunk-d9a61b28.js',
          'assets/chunks/chunk-47f58d9c.js',
          'assets/chunks/chunk-16adb97c.js',
          'assets/chunks/chunk-f70ab90b.js',
          'assets/static/PageWrapper.7fd3b967.css'
        ]
      )
  }),
  S = { ...I };
i['.page.client'] = S;
const z = Object.assign({
    '/renderer/_default.page.server.tsx': () =>
      r(
        () => import('./renderer_default.page.server.extractAssets.fe348f31.js'),
        [
          'assets/entries/renderer_default.page.server.extractAssets.fe348f31.js',
          'assets/static/PageWrapper.7fd3b967.css'
        ]
      )
  }),
  H = { ...z };
p['.page.server'] = H;
const T = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      pageFilesLazy: i,
      pageFilesEager: L,
      pageFilesExportNamesLazy: F,
      pageFilesExportNamesEager: P,
      pageFilesList: C,
      neverLoaded: p,
      isGeneratedFile: R,
      pageConfigs: b,
      pageConfigGlobal: O
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
u(T);
const l = d({ withoutHash: !0 });
async function j() {
  const e = _();
  return (
    s(e, { isHydration: !0, isBackwardNavigation: null, _hasPageContextFromClient: !1 }),
    s(e, await V(e._pageId)),
    D(),
    e
  );
}
function D() {
  const e = d({ withoutHash: !0 });
  c(
    l === e,
    `URL manipulated before hydration finished (\`${l}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`
  );
}
async function V(e) {
  const a = {},
    { pageFilesAll: t, pageConfigs: g } = await f(!0);
  return (
    s(a, { _pageFilesAll: t, _pageConfigs: g }),
    s(a, await v(t, g, e)),
    t
      .filter(o => o.fileType !== '.page.server')
      .forEach(o => {
        var n;
        E(
          !(!((n = o.fileExports) === null || n === void 0) && n.onBeforeRender),
          `\`export { onBeforeRender }\` of ${o.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,
          { onlyOnce: !0 }
        );
      }),
    a
  );
}
x();
y(!0);
B();
async function B() {
  var e, a;
  const t = await j();
  await m(t, !1),
    h(t, 'onHydrationEnd'),
    await ((a = (e = t.exports).onHydrationEnd) === null || a === void 0 ? void 0 : a.call(e, t));
}
