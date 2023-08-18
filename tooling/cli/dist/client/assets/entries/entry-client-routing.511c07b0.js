import {
  i as M,
  s as pt,
  a as mt,
  b as A,
  c as F,
  g as $,
  d as N,
  e as xe,
  f as l,
  h as j,
  j as P,
  p as K,
  k as u,
  l as ie,
  m as E,
  n as W,
  o as h,
  q as _t,
  r as g,
  t as k,
  u as bt,
  v as Ee,
  w as se,
  x as ae,
  y as yt,
  z as U,
  A as Ae,
  B as Te,
  C as vt,
  D as Pt,
  E as St,
  F as ke,
  G as Ie,
  H as Rt,
  I as wt,
  J as Ot,
  K as le,
  L as J,
  M as Ct,
  N as Ft
} from '../chunks/chunk-fb1380c5.js';
import { _ as C } from '../chunks/chunk-f70ab90b.js';
function O(e) {
  return typeof e != 'object' || e === null
    ? !1
    : Object.getPrototypeOf(e) === null
    ? !0
    : e.constructor.name === 'Object';
}
function _e(e) {
  return '[' + e.map(t => "'" + t + "'").join(', ') + ']';
}
function X(e, t) {
  const n = Object.getOwnPropertyDescriptor(e, t);
  return !!n && !('value' in n) && !!n.get;
}
function xt(e) {
  return typeof e == 'object' && e !== null && 'then' in e && M(e.then);
}
const Et = ['Page', 'documentProps'],
  At = Object.freeze(
    Object.defineProperty({ __proto__: null, exportNames: Et }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  Tt = ['Page', 'documentProps'],
  kt = Object.freeze(
    Object.defineProperty({ __proto__: null, exportNames: Tt }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  It = ['Page', 'documentProps'],
  $t = Object.freeze(
    Object.defineProperty({ __proto__: null, exportNames: It }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  Nt = ['Page'],
  jt = Object.freeze(
    Object.defineProperty({ __proto__: null, exportNames: Nt }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  Ht = ['Page'],
  Lt = Object.freeze(
    Object.defineProperty({ __proto__: null, exportNames: Ht }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  Bt = ['passToClient', 'render'],
  Wt = Object.freeze(
    Object.defineProperty({ __proto__: null, exportNames: Bt }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  Dt = ['render'],
  Ut = Object.freeze(
    Object.defineProperty({ __proto__: null, exportNames: Dt }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  ue = {},
  $e = {},
  Vt = {},
  Y = {},
  zt = [],
  Ne = {},
  Gt = !0,
  Mt = [],
  Kt = { onBeforeRoute: null },
  Yt = Object.assign({
    '/pages/catalog/index.page.tsx': () =>
      C(
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
      C(
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
      C(
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
      C(
        () => import('./pages_signin_index.page.d63a9e66.js'),
        [
          'assets/entries/pages_signin_index.page.d63a9e66.js',
          'assets/chunks/chunk-5011acf0.js',
          'assets/chunks/chunk-8d1d4039.js',
          'assets/chunks/chunk-d9a61b28.js'
        ]
      ),
    '/renderer/_error.page.tsx': () =>
      C(
        () => import('./renderer_error.page.396325a7.js'),
        ['assets/entries/renderer_error.page.396325a7.js', 'assets/chunks/chunk-5011acf0.js']
      )
  }),
  qt = { ...Yt };
ue['.page'] = qt;
const Jt = Object.assign({
    '/pages/catalog/index.page.tsx': At,
    '/pages/dashboard/index.page.tsx': kt,
    '/pages/index/index.page.tsx': $t,
    '/pages/signin/index.page.tsx': jt,
    '/renderer/_error.page.tsx': Lt
  }),
  Xt = { ...Jt };
Y['.page'] = Xt;
const Qt = Object.assign({ '/renderer/_default.page.server.tsx': Wt }),
  Zt = { ...Qt };
Y['.page.server'] = Zt;
const en = Object.assign({}),
  tn = { ...en };
$e['.page.route'] = tn;
const nn = Object.assign({
    '/renderer/_default.page.client.tsx': () =>
      C(
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
  rn = { ...nn };
ue['.page.client'] = rn;
const on = Object.assign({ '/renderer/_default.page.client.tsx': Ut }),
  sn = { ...on };
Y['.page.client'] = sn;
const an = Object.assign({
    '/renderer/_default.page.server.tsx': () =>
      C(
        () => import('./renderer_default.page.server.extractAssets.fe348f31.js'),
        [
          'assets/entries/renderer_default.page.server.extractAssets.fe348f31.js',
          'assets/static/PageWrapper.7fd3b967.css'
        ]
      )
  }),
  ln = { ...an };
Ne['.page.server'] = ln;
const un = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      pageFilesLazy: ue,
      pageFilesEager: $e,
      pageFilesExportNamesLazy: Vt,
      pageFilesExportNamesEager: Y,
      pageFilesList: zt,
      neverLoaded: Ne,
      isGeneratedFile: Gt,
      pageConfigs: Mt,
      pageConfigGlobal: Kt
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
pt(un);
function cn() {
  mt(), A();
}
function fn() {
  var e, t, n, r;
  const o = !!(
      !(
        (t =
          (e = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || e === void 0
            ? void 0
            : e.renderers) === null || t === void 0
      ) && t.size
    ),
    i = !!(
      !(
        (r =
          (n = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || n === void 0
            ? void 0
            : n.rendererInterfaces) === null || r === void 0
      ) && r.size
    ),
    s = !!window.__vite_plugin_react_preamble_installed__;
  return o || i || s;
}
function je(e, t) {
  const n = Object.keys,
    r = typeof e;
  return e && t && r === 'object' && r === typeof t
    ? n(e).length === n(t).length && n(e).every(i => je(e[i], t[i]))
    : e === t;
}
function dn(e, t) {
  return (
    F(e) &&
    F(t) &&
    e.constructor === t.constructor &&
    je({ ...e, stack: null }, { ...t, stack: null }) &&
    t.message === t.message
  );
}
function V(e) {
  window.location.href = e;
}
function gn(e) {
  return new Promise(t => setTimeout(t, e));
}
function hn(e, t) {
  let n = !1;
  return () => {
    n ||
      ((n = !0),
      setTimeout(() => {
        (n = !1), e();
      }, t));
  };
}
cn();
const be = $('navigationState.ts', {}),
  pn = N(),
  He = {
    markNavigationChange() {
      be.navigationChanged = !0;
    },
    get noNavigationChangeYet() {
      return !be.navigationChanged && this.isFirstUrl(N());
    },
    isFirstUrl(e) {
      return e === pn;
    }
  };
async function mn(e, t) {
  const r = xe(e, t).filter(i => i.fileType === '.page.server');
  return (
    await Promise.all(
      r.map(async i => {
        i.exportNames || (l(i.loadExportNames, t), await i.loadExportNames());
      })
    ),
    {
      hasOnBeforeRenderServerSideOnlyHook: r.some(
        ({ exportNames: i }) => (l(i), i.includes('onBeforeRender'))
      )
    }
  );
}
function _n(e, t) {
  if (!O(e)) return !1;
  for (const n of Object.keys(e)) if (!t.includes(n)) return !1;
  return !0;
}
function bn(e) {
  return typeof e == 'object' && e !== null && Object.values(e).every(t => typeof t == 'string');
}
j() && A();
function Le(e, t = !0) {
  l(e.urlOriginal),
    'urlPathname' in e && l(X(e, 'urlPathname')),
    Object.defineProperty(e, 'urlPathname', { get: We, enumerable: t, configurable: !0 }),
    'url' in e && l(X(e, 'url')),
    Object.defineProperty(e, 'url', { get: yn, enumerable: !1, configurable: !0 }),
    'urlParsed' in e && l(X(e, 'urlParsed')),
    Object.defineProperty(e, 'urlParsed', { get: vn, enumerable: t, configurable: !0 });
}
function Be(e) {
  var t;
  let n = e._urlHandler;
  n || (n = s => s);
  const r = (t = e._urlRewrite) !== null && t !== void 0 ? t : e.urlOriginal;
  l(r && typeof r == 'string');
  const o = n(r),
    i = e._baseServer;
  return l(i.startsWith('/')), K(o, i);
}
function We() {
  const { pathname: e } = Be(this),
    t = e;
  return l(t.startsWith('/')), t;
}
function yn() {
  return (
    P(
      !1,
      '`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)',
      { onlyOnce: !0, showStackTrace: !0 }
    ),
    We.call(this)
  );
}
function vn() {
  const e = Be(this),
    {
      origin: t,
      pathname: n,
      pathnameOriginal: r,
      search: o,
      searchAll: i,
      searchOriginal: s,
      hash: a,
      hashOriginal: f
    } = e,
    c = p => {
      P(
        j(),
        `pageContext.urlParsed.${p} isn't available on the server-side (HTTP requests don't include the URL hash by design)`,
        { onlyOnce: !0, showStackTrace: !0 }
      );
    },
    d = {
      origin: t,
      pathname: n,
      pathnameOriginal: r,
      search: o,
      searchAll: i,
      searchOriginal: s,
      get hash() {
        return c('hash'), a;
      },
      get hashOriginal() {
        return c('hashOriginal'), f;
      },
      get hashString() {
        return (
          P(
            !1,
            'pageContext.urlParsed.hashString has been renamed to pageContext.urlParsed.hashOriginal',
            { onlyOnce: !0, showStackTrace: !0 }
          ),
          c('hashString'),
          f
        );
      },
      get searchString() {
        return (
          P(
            !1,
            'pageContext.urlParsed.searchString has been renamed to pageContext.urlParsed.searchOriginal',
            { onlyOnce: !0, showStackTrace: !0 }
          ),
          s
        );
      }
    };
  return ye(d, 'hashString'), ye(d, 'searchString'), d;
}
function ye(e, t) {
  const n = Object.getOwnPropertyDescriptor(e, t);
  Object.defineProperty(e, t, { ...n, enumerable: !1 });
}
function Pn(e) {
  l(typeof e.urlOriginal == 'string'),
    l(typeof e.urlPathname == 'string'),
    l(O(e.urlParsed)),
    l(e.urlPathname === e.urlParsed.pathname);
}
const De = '@',
  te = ':';
function Sn(e, t = 'Invalid') {
  l(t.endsWith('Invalid') || t.endsWith('invalid')),
    u(e !== '', `${t} Route String ${R(e)} (empty string): set it to ${R('/')} instead`),
    u(
      e.startsWith('/') || e === '*',
      `${t} Route String ${R(e)}: Route Strings should start with a leading slash ${R(
        '/'
      )} (or be ${R('*')})`
    );
}
function ne(e, t) {
  Sn(e), l(t.startsWith('/'));
  const n = e.split('/'),
    r = t.split('/'),
    o = {};
  Rn(e), e === '*' && (e = '/*');
  for (let i = 0; i < Math.max(n.length, r.length); i++) {
    const s = n[i],
      a = r[i];
    if (s === '*') return (o['*'] = r.slice(Math.max(1, i)).join('/')), { routeParams: o };
    if (s && D(s)) {
      if (
        (P(
          !s.startsWith(te),
          `Outdated Route String \`${e}\`, use \`${e.split(te).join(De)}\` instead.`,
          { onlyOnce: !0 }
        ),
        !a)
      )
        return null;
      o[s.slice(1)] = a;
    } else if ((s || '') !== (a || '')) return null;
  }
  return { routeParams: o };
}
function Rn(e) {
  const t = e.split('*').length - 1;
  u(
    t <= 1,
    `Invalid Route String ${R(e)}: Route Strings aren't allowed to contain more than one glob ${R(
      '*'
    )}`
  ),
    u(
      t === 0 || (t === 1 && e.endsWith('*')),
      `Invalid Route String ${R(e)}: make sure it ends with ${R('*')}`
    );
}
function T(e) {
  const t = e.split('/').filter(s => s !== '' && s !== '*');
  let n = 0;
  for (const s of t) {
    if (D(s)) break;
    n++;
  }
  const r = t.filter(s => !D(s)).length,
    o = t.filter(s => D(s)).length,
    i = e.endsWith('*');
  return {
    numberOfParameterSegments: o,
    numberOfStaticSegmentsBeginning: n,
    numberOfStaticSegements: r,
    isCatchAll: i
  };
}
function D(e) {
  return e.startsWith(De) || e.startsWith(te);
}
function ve(e) {
  const n = ne(e, e);
  return l(n), Object.keys(n.routeParams).length === 0;
}
function R(e) {
  return j() ? `'${e}'` : (e === '' && (e = "''"), ie.bold(e));
}
function wn(e) {
  e.sort(On)
    .sort(E(t => t.routeType === 'FUNCTION' && !!t.precedence && t.precedence < 0))
    .sort(E(t => t.routeType === 'STRING' && ve(t.routeString) === !1))
    .sort(E(t => t.routeType === 'FUNCTION' && !t.precedence))
    .sort(E(t => t.routeType === 'STRING' && ve(t.routeString) === !0))
    .sort(E(t => t.routeType === 'FILESYSTEM'))
    .sort(E(t => t.routeType === 'FUNCTION' && !!t.precedence && t.precedence > 0));
}
function On(e, t) {
  var n, r;
  {
    const o = (n = e.precedence) !== null && n !== void 0 ? n : 0,
      i = (r = t.precedence) !== null && r !== void 0 ? r : 0;
    if (o !== i) return o > i ? -1 : 1;
  }
  if (!t.routeString || !e.routeString) return 0;
  {
    const i = W(s => T(s).numberOfStaticSegmentsBeginning)(e.routeString, t.routeString);
    if (i !== 0) return i;
  }
  {
    const i = W(s => T(s).numberOfStaticSegements)(e.routeString, t.routeString);
    if (i !== 0) return i;
  }
  {
    const i = W(s => T(s).numberOfParameterSegments)(e.routeString, t.routeString);
    if (i !== 0) return i;
  }
  {
    if (T(t.routeString).isCatchAll) return -1;
    if (T(e.routeString).isCatchAll) return 1;
  }
  return 0;
}
async function Cn(e, t, n) {
  Pn(t);
  let r = e(t);
  if ((Ue(r, `The Route Function ${n}`), (r = await r), r === !1)) return null;
  if (
    (r === !0 && (r = {}),
    u(
      O(r),
      `The Route Function ${n} should return a boolean or a plain JavaScript object, instead it returns \`${
        h(r, 'constructor') ? r.constructor : r
      }\`.`
    ),
    'match' in r)
  ) {
    const { match: s } = r;
    if (
      (u(
        typeof s == 'boolean',
        `The \`match\` value returned by the Route Function ${n} should be a boolean.`
      ),
      !s)
    )
      return null;
  }
  let o = null;
  'precedence' in r &&
    ((o = r.precedence),
    u(
      typeof o == 'number',
      `The \`precedence\` value returned by the Route Function ${n} should be a number.`
    )),
    Ve(r, `The \`routeParams\` object returned by the Route Function ${n} should`);
  const i = r.routeParams || {};
  return (
    u(
      !('pageContext' in r),
      'Providing `pageContext` in Route Functions is prohibited, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext'
    ),
    l(O(i)),
    Object.keys(r).forEach(s => {
      u(
        s === 'match' || s === 'routeParams' || s === 'precedence',
        `The Route Function ${n} returned an object with an unknown key \`{ ${s} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`
      );
    }),
    { precedence: o, routeParams: i }
  );
}
function Ue(e, t) {
  P(
    !xt(e),
    `${t} returned a promise, but asynchronous routing is deprecated and will be removed in the next major release, see https://vite-plugin-ssr.com/route-function#async`,
    { onlyOnce: !0 }
  );
}
function Ve(e, t) {
  l(t.endsWith(' should')),
    h(e, 'routeParams') &&
      (l(t.endsWith(' should')),
      u(O(e.routeParams), `${t} be a plain JavaScript object.`),
      u(bn(e.routeParams), `${t} only hold string values.`));
}
function ze(e, { hookName: t, hookFilePath: n }) {
  if (e == null) return;
  l(!t.endsWith(')'));
  const r = `The \`pageContext\` object provided by the ${t}() hook defined by ${n}`;
  u(F(e), `${r} should be an object instead of \`${typeof e}\``),
    u(
      !('_objectCreatedByVitePluginSsr' in e),
      `${r} shouldn't be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`
    ),
    P(
      !('_pageId' in e),
      `${r} sets \`pageContext._pageId\` which means that vite-plugin-ssr's routing is overriden. This is an experimental feature: make sure to contact a vite-plugin-ssr maintainer before using this.`,
      { onlyOnce: !0 }
    ),
    u(
      !('is404' in e),
      `${r} sets \`pageContext.is404\` which is forbidden, use \`throw render()\` instead, see https://vite-plugin-ssr.com/render`
    );
}
async function Fn(e, t) {
  let n = e.onBeforeRoute(t);
  Ue(n, `The onBeforeRoute() hook ${e.hookFilePath}`), (n = await n);
  const r = `The onBeforeRoute() hook defined by ${e.hookFilePath}`;
  if (
    (u(
      n == null || (_n(n, ['pageContext']) && h(n, 'pageContext')),
      `${r} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`
    ),
    n == null)
  )
    return null;
  if (
    (u(
      h(n, 'pageContext', 'object'),
      `${r} returned \`{ pageContext }\` but pageContext should be a plain JavaScript object.`
    ),
    h(n.pageContext, '_pageId') && !h(n.pageContext, '_pageId', 'null'))
  ) {
    const i = `${r} returned \`{ pageContext: { _pageId } }\` but _pageId should be`;
    u(h(n.pageContext, '_pageId', 'string'), `${i} a string or null`),
      u(
        t._allPageIds.includes(n.pageContext._pageId),
        `${i} one of following values: \`[${t._allPageIds.map(s => `'${s}'`).join(', ')}]\`.`
      );
  }
  h(n.pageContext, 'routeParams') &&
    Ve(n.pageContext, `${r} returned \`{ pageContext: { routeParams } }\` but routeParams should`);
  const o = {};
  return (
    h(n.pageContext, 'url') &&
      (P(
        !1,
        `${r} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,
        { onlyOnce: !0 }
      ),
      (n.pageContext.urlOriginal = n.pageContext.url),
      delete n.pageContext.url),
    h(n.pageContext, 'urlOriginal') &&
      (_t(
        n.pageContext.urlOriginal,
        `${r} returned \`{ pageContext: { urlOriginal } }\` but urlOriginal`
      ),
      g(o, { _urlOriginalPristine: t.urlOriginal })),
    ze(n.pageContext, { hookFilePath: e.hookFilePath, hookName: 'onBeforeRoute' }),
    g(o, n.pageContext),
    o
  );
}
var B;
function Pe(...e) {
  var t, n;
  B ||
    (B =
      (n = (t = globalThis).__brillout_debug_createDebugger) === null || n === void 0
        ? void 0
        : n.call(t, 'vps:routing')),
    B && B(...e);
}
j() && A();
async function Ge(e) {
  Le(e), Pe('Pages routes:', e._pageRoutes);
  const t = {};
  if (e._onBeforeRouteHook) {
    const s = await Fn(e._onBeforeRouteHook, e);
    if (s) {
      if ((g(t, s), h(t, '_pageId', 'string') || h(t, '_pageId', 'null')))
        return (
          h(t, 'routeParams') ? l(h(t, 'routeParams', 'object')) : g(t, { routeParams: {} }),
          g(t, { _routingProvidedByOnBeforeRouteHook: !0, _routeMatches: 'CUSTOM_ROUTE' }),
          { pageContextAddendum: t }
        );
      g(e, t);
    }
  }
  g(t, { _routingProvidedByOnBeforeRouteHook: !1 });
  const n = e._allPageIds;
  l(n.length >= 0),
    u(
      e._pageFilesAll.length > 0 || e._pageConfigs.length > 0,
      'No *.page.js file found. You must create at least one *.page.js file.'
    ),
    u(n.length > 0, "You must create at least one *.page.js file that isn't _default.page.*");
  const { urlPathname: r } = e;
  l(r.startsWith('/'));
  const o = [];
  await Promise.all(
    e._pageRoutes.map(async s => {
      const { pageId: a, routeType: f } = s;
      if (s.routeType === 'FILESYSTEM') {
        const { routeString: c } = s,
          d = ne(c, r);
        if (d) {
          const { routeParams: p } = d;
          o.push({ pageId: a, routeParams: p, routeString: c, routeType: f });
        }
        return;
      }
      if (s.routeType === 'STRING') {
        const { routeString: c } = s,
          d = ne(c, r);
        if (d) {
          const { routeParams: p } = d;
          l(f === 'STRING'), o.push({ pageId: a, routeString: c, routeParams: p, routeType: f });
        }
        return;
      }
      if (s.routeType === 'FUNCTION') {
        const { routeFunction: c, routeDefinedAt: d } = s,
          p = await Cn(c, e, d);
        if (p) {
          const { routeParams: _, precedence: w } = p;
          o.push({ pageId: a, precedence: w, routeParams: _, routeType: f });
        }
        return;
      }
      l(!1);
    })
  ),
    wn(o);
  const i = o[0];
  if (
    (Pe(`Route matches for URL \`${r}\` (in precedence order):`, o), g(t, { _routeMatches: o }), !i)
  )
    return g(t, { _pageId: null, routeParams: {} }), { pageContextAddendum: t };
  {
    const { routeParams: s } = i;
    l(O(s)), g(t, { _pageId: i.pageId, routeParams: i.routeParams });
  }
  return { pageContextAddendum: t };
}
const Se = ['urlPathname', 'urlParsed'],
  xn = ['Page', 'pageExports', 'exports'];
function Me(e) {
  [...xn, ...Se].forEach(n => {
    n in e &&
      (Se.includes(n)
        ? (l(n.startsWith('url')),
          P(
            !1,
            `\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,
            { onlyOnce: !0 }
          ))
        : P(
            !1,
            `\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,
            { onlyOnce: !0 }
          ),
      delete e[n]);
  });
}
const En = '/';
function An(e, t, n) {
  const { pathnameOriginal: r, searchOriginal: o, hashOriginal: i } = K(e, En);
  e.startsWith('/') && l(e === `${r}${o || ''}${i || ''}`, { url: e });
  const s = r.endsWith('/');
  let a;
  return (
    n && r !== '/'
      ? (s ? (a = k(r, 0, -1)) : (a = r), l(!a.endsWith('/'), { url: e }), l(a !== ''))
      : (a = r + (s ? '' : '/') + 'index'),
    l(a),
    (a = a + t),
    `${a}${o || ''}${i || ''}`
  );
}
const Tn = '.pageContext.json',
  kn = !1;
function In(e) {
  return An(e, Tn, kn);
}
function z(e, t, n) {
  const r = e.configElements[t];
  if (!r || $n(e, t)) return null;
  const { configValue: o, configDefinedAt: i } = r;
  return (
    n && u(typeof o === n, `${i} has an invalid type \`${typeof o}\`: is should be a ${n} instead`),
    o
  );
}
function $n(e, t) {
  const n = e.configElements[t];
  if (!n) return !0;
  const { codeFilePath: r, configValue: o } = n;
  return r ? !1 : o == null;
}
function Ke(e, t) {
  const n = t.find(r => r.pageId === e);
  return l(t.length > 0), l(n), n;
}
function Nn(e, t, n) {
  l(!n.endsWith(' '));
  const r = [],
    o = Object.keys(e);
  for (const i of o) t.includes(i) || r.push(i);
  u(
    r.length === 0,
    [
      n,
      'returned an object with following unknown keys:',
      _e(r) + '.',
      'Only following keys are allowed:',
      _e(t) + '.'
    ].join(' ')
  );
}
function jn(e, t) {
  if (e == null) return;
  const n = `The onBeforeRender() hook defined by ${t}`;
  u(O(e), `${n} should return a plain JavaScript object or \`undefined\`/\`null\``),
    Nn(e, ['pageContext'], n),
    e.pageContext && ze(e.pageContext, { hookName: 'onBeforeRender', hookFilePath: t });
}
function Hn(e, t) {
  const r = t
    .filter(({ filesystemRoot: i }) => e.startsWith(i))
    .sort(W(({ filesystemRoot: i }) => i.length))[0];
  let o;
  if (r) {
    const { filesystemRoot: i, urlRoot: s } = r,
      a = { pageId: e, filesystemRoot: i, urlRoot: s };
    l(s.startsWith('/') && e.startsWith('/') && i.startsWith('/'), a),
      l(e.startsWith(i), a),
      i !== '/' ? (l(!i.endsWith('/'), a), (o = k(e, i.length, 0))) : (o = e),
      l(o.startsWith('/'), a),
      (o = s + (s.endsWith('/') ? '' : '/') + k(o, 1, 0));
  } else o = e;
  return (
    l(o.startsWith('/')),
    (o = o
      .split('/')
      .filter(i => i !== 'pages' && i !== 'src' && i !== 'index')
      .join('/')),
    l(!o.includes('.page.')),
    l(!o.endsWith('.')),
    o.endsWith('/index') && (o = k(o, 0, -6)),
    o === '' && (o = '/'),
    l(o.startsWith('/')),
    l(!o.endsWith('/') || o === '/'),
    o
  );
}
async function Ln(e, t, n, r) {
  await Promise.all(
    e
      .filter(a => a.fileType === '.page.route')
      .map(a => {
        var f;
        return (f = a.loadFile) === null || f === void 0 ? void 0 : f.call(a);
      })
  );
  const { onBeforeRouteHook: o, filesystemRoots: i } = Wn(e, t, n);
  return { pageRoutes: Bn(i, e, t, r), onBeforeRouteHook: o };
}
function Bn(e, t, n, r) {
  const o = [];
  let i = [...r];
  if (n.length > 0) {
    l(e === null);
    const s = !0;
    n.filter(a => !a.isErrorPage).forEach(a => {
      const f = a.pageId;
      i = Vn(i, f);
      let c = null;
      {
        const d = a.configElements.route;
        if (d) {
          l('configValue' in d);
          const p = d.configValue,
            _ = d.configDefinedAt;
          if ((l(_), typeof p == 'string'))
            c = {
              pageId: f,
              comesFromV1PageConfig: s,
              routeString: p,
              routeDefinedAt: _,
              routeType: 'STRING'
            };
          else {
            l(M(p));
            {
              const w = a.configElements.iKnowThePerformanceRisksOfAsyncRouteFunctions;
              if (w) {
                const H = w.configValue;
                l(typeof H == 'boolean', `${w.configDefinedAt} should be a boolean`);
              }
            }
            c = {
              pageId: f,
              comesFromV1PageConfig: s,
              routeFunction: p,
              routeDefinedAt: _,
              routeType: 'FUNCTION'
            };
          }
        }
      }
      if (!c) {
        const { routeFilesystem: d, routeFilesystemDefinedBy: p } = a;
        l(d),
          l(d.startsWith('/')),
          l(p),
          (c = {
            pageId: f,
            routeFilesystemDefinedBy: p,
            comesFromV1PageConfig: s,
            routeString: d,
            routeDefinedAt: null,
            routeType: 'FILESYSTEM'
          });
      }
      l(c), o.push(c);
    });
  }
  if (n.length === 0) {
    l(e);
    const s = !1;
    i.filter(a => !bt(a)).forEach(a => {
      const f = Ye(a, t);
      if (!f || !('default' in f.fileExports)) {
        const c = Hn(a, e);
        l(c.startsWith('/')),
          l(!c.endsWith('/') || c === '/'),
          o.push({
            pageId: a,
            comesFromV1PageConfig: s,
            routeString: c,
            routeDefinedAt: null,
            routeFilesystemDefinedBy: `${a}.page.*`,
            routeType: 'FILESYSTEM'
          });
      } else {
        const { filePath: c, fileExports: d } = f;
        if ((l(d.default), h(d, 'default', 'string'))) {
          const p = d.default;
          u(
            p.startsWith('/'),
            `A Route String should start with a leading slash '/' but ${c} has \`export default '${p}'\`. Make sure to \`export default '/${p}'\` instead.`
          ),
            o.push({
              pageId: a,
              comesFromV1PageConfig: s,
              routeString: p,
              routeDefinedAt: c,
              routeType: 'STRING'
            });
          return;
        }
        if (h(d, 'default', 'function')) {
          const p = d.default;
          {
            const _ = 'iKnowThePerformanceRisksOfAsyncRouteFunctions';
            _ in d && u(h(d, _, 'boolean'), `The export \`${_}\` of ${c} should be a boolean.`);
          }
          o.push({
            pageId: a,
            comesFromV1PageConfig: s,
            routeFunction: p,
            routeDefinedAt: c,
            routeType: 'FUNCTION'
          });
          return;
        }
        u(!1, `The default export of ${c} should be a string or a function.`);
      }
    });
  }
  return o;
}
function Wn(e, t, n) {
  if (t.length > 0) {
    if (n.onBeforeRoute) {
      const i = n.onBeforeRoute.configValue;
      if (i) {
        const s = n.onBeforeRoute.codeFilePath;
        return (
          l(s),
          u(M(i), `The hook onBeforeRoute() defined by ${s} should be a function.`),
          { onBeforeRouteHook: { hookFilePath: s, onBeforeRoute: i }, filesystemRoots: null }
        );
      }
    }
    return { onBeforeRouteHook: null, filesystemRoots: null };
  }
  let r = null;
  const o = [];
  return (
    e
      .filter(i => i.fileType === '.page.route' && i.isDefaultPageFile)
      .forEach(({ filePath: i, fileExports: s }) => {
        if ((l(s), 'onBeforeRoute' in s)) {
          u(
            h(s, 'onBeforeRoute', 'function'),
            `\`export { onBeforeRoute }\` of ${i} should be a function.`
          );
          const { onBeforeRoute: a } = s;
          r = { hookFilePath: `${i} > \`export { onBeforeRoute }\``, onBeforeRoute: a };
        }
        'filesystemRoutingRoot' in s &&
          (u(
            h(s, 'filesystemRoutingRoot', 'string'),
            `\`export { filesystemRoutingRoot }\` of ${i} should be a string.`
          ),
          u(
            h(s, 'filesystemRoutingRoot', 'string'),
            `\`export { filesystemRoutingRoot }\` of ${i} is \`'${s.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`
          ),
          o.push({ filesystemRoot: Un(i), urlRoot: s.filesystemRoutingRoot }));
      }),
    { onBeforeRouteHook: r, filesystemRoots: o }
  );
}
function Ye(e, t) {
  return t.find(n => n.pageId === e && n.fileType === '.page.route');
}
function Dn(e, t) {
  const n = Ye(e, t);
  if (!n) return null;
  const { filePath: r, fileExports: o } = n;
  l(o);
  const i = o.guard;
  if (!i) return null;
  const s = r;
  return (
    u(M(i), `guard() defined by ${s} should be a function`),
    { hookFn: i, hookName: 'guard', hookFilePath: s }
  );
}
function Un(e) {
  l(e.startsWith('/')), l(!e.endsWith('/'));
  const t = e.split('/'),
    n = k(t, 0, -1).join('/') || '/';
  return l(n.startsWith('/')), l(!n.endsWith('/') || n === '/'), n;
}
function Vn(e, t) {
  const { length: n } = e;
  return (e = e.filter(r => r !== t)), l(e.length === n - 1), e;
}
async function zn(e, t) {
  let n;
  if (
    (e._pageFilesAll.length > 0
      ? (l(e._pageConfigs.length === 0), (n = Dn(e._pageId, e._pageFilesAll)))
      : (n = Ee(e, 'guard')),
    !n)
  )
    return;
  const r = n.hookFn;
  let o = e;
  const i = t(e);
  i && (o = i);
  const s = await se(() => r(o), 'guard', n.hookFilePath);
  u(
    s === void 0,
    `The guard() hook of ${n.hookFilePath} returns a value, but guard() doesn't accept any return value`
  );
}
function Gn(e) {
  const t = new Error('AbortRender');
  return g(t, { _pageContextAbort: e, [qe]: !0 }), t;
}
const qe = '_isAbortError';
function Q(e) {
  return typeof e == 'object' && e !== null && qe in e;
}
function Mn(e) {
  return e._urlRewrite || e._urlRedirect || e._abortStatusCode
    ? (l(h(e, '_abortCall', 'string')), l(h(e, '_abortCaller', 'string')), !0)
    : !1;
}
function Kn(e, t, n) {
  var r;
  if (t) return;
  const o = (r = n._urlRewrite) !== null && r !== void 0 ? r : n.urlOriginal;
  l(o);
  const i = e._pageContextAbort._abortCall;
  ae(!1, `${re(i)} intercepted while rendering ${ie.bold(o)}`, { onlyOnce: !1 });
}
function Yn(e) {
  qn(e);
  const t = { _urlRewrite: null };
  return (
    e.forEach(n => {
      Object.assign(t, n);
    }),
    t
  );
}
function qn(e) {
  const t = [];
  e.forEach(n => {
    const r = n._urlRewrite;
    {
      const o = t.indexOf(r);
      if (o !== -1) {
        const i = [...t.slice(o), r].map(s => `render('${s}')`).join(' => ');
        u(!1, `Infinite loop of render() calls: ${i}`);
      }
    }
    t.push(r);
  });
}
function re(e) {
  return j() ? '`' + e + '`' : ie.cyan(e);
}
function Jn(e, t) {
  const n = [e > 0 && re("throw render('/some-url')"), t > 0 && re("throw redirect('/some-url')")]
    .filter(Boolean)
    .join(' and ');
  u(
    e + t <= 7,
    `Maximum chain length of 7 ${n} exceeded. Did you define an infinite loop of ${n}?`
  );
}
const Je = $('router/getPageContext.ts', {});
async function Xn(e) {
  if (e._isFirstRenderAttempt && He.isFirstUrl(e.urlOriginal)) {
    l(h(e, '_isFirstRenderAttempt', 'true'));
    const t = await Qn(e);
    return Re(t), t;
  } else {
    l(h(e, '_isFirstRenderAttempt', 'false'));
    const t = await er(e);
    return Re(t), t;
  }
}
async function Qn(e) {
  const t = yt();
  Me(t),
    g(t, { isHydration: !0, _hasPageContextFromClient: !1 }),
    g(t, await U(e._pageFilesAll, e._pageConfigs, t._pageId));
  {
    const n = { ...e, ...t };
    if (await rr(n)) {
      const r = await Qe(n);
      g(t, r);
    }
  }
  return t;
}
async function Zn(e) {
  const t = Ae(e._pageFilesAll, e._pageConfigs);
  if (!t) throw new Error('No error page defined.');
  const n = { isHydration: !1, _pageId: t };
  return g(n, await Xe({ ...e, ...n }, !0)), n;
}
async function er(e) {
  const t = { isHydration: !1 };
  return g(t, await or(e)), g(t, await Xe({ ...e, ...t }, !1)), t;
}
async function Xe(e, t) {
  let n = {};
  if (
    (g(n, await U(e._pageFilesAll, e._pageConfigs, e._pageId)), !t && (await tr({ ...e, ...n })))
  ) {
    const r = await ar(e);
    if (!r._isError) g(n, r);
    else {
      const o = Ae(e._pageFilesAll, e._pageConfigs);
      l(o),
        (n = {}),
        g(n, { isHydration: !1, _pageId: o }),
        g(n, await U(e._pageFilesAll, e._pageConfigs, n._pageId)),
        l(h(r, 'is404', 'boolean')),
        l(h(r, 'pageProps', 'object')),
        l(h(r.pageProps, 'is404', 'boolean')),
        l(!('serverSideError' in r)),
        g(n, r);
    }
  } else
    g(n, { _hasPageContextFromServer: !1 }),
      t || (await zn({ _hasPageContextFromClient: !1, ...e, ...n }, r => Te(r, !0)));
  {
    const r = await Qe({ ...e, ...n });
    g(n, r);
  }
  return n;
}
async function Qe(e) {
  const t = Ee(e, 'onBeforeRender');
  if (!t) return { _hasPageContextFromClient: !1 };
  const n = t.hookFn,
    r = { _hasPageContextFromClient: !0 },
    o = Te({ ...e, ...r }, !0),
    i = await se(() => n(o), 'onBeforeRender', t.hookFilePath);
  jn(i, t.hookFilePath);
  const s = i == null ? void 0 : i.pageContext;
  return g(r, s), r;
}
async function tr(e) {
  return !!Je.pageContextInitHasClientData || (await nr(e));
}
function Re(e) {
  e._pageContextInitHasClientData && (Je.pageContextInitHasClientData = !0);
}
async function nr(e) {
  if (e._pageConfigs.length > 0) {
    const t = Ke(e._pageId, e._pageConfigs);
    return z(t, 'onBeforeRenderEnv') === 'server-only';
  } else {
    const { hasOnBeforeRenderServerSideOnlyHook: t } = await mn(e._pageFilesAll, e._pageId);
    return t;
  }
}
async function rr(e) {
  if (e._pageConfigs.length > 0) {
    const t = Ke(e._pageId, e._pageConfigs);
    return z(t, 'onBeforeRenderEnv') === 'client-only';
  } else return !1;
}
async function or(e) {
  const n = (await Ge(e)).pageContextAddendum;
  if (!n._pageId) {
    const r = new Error('No routing match');
    throw (ir(r), r);
  }
  return l(h(n, '_pageId', 'string')), n;
}
function ir(e) {
  g(e, { _is404: !0 });
}
function sr(e) {
  return F(e) && e._is404 === !0;
}
async function ar(e) {
  var t, n;
  const r =
      (n = (t = e._urlRewrite) !== null && t !== void 0 ? t : e._urlOriginalPristine) !== null &&
      n !== void 0
        ? n
        : e.urlOriginal,
    o = In(r),
    i = await fetch(o);
  {
    const f = i.headers.get('content-type'),
      c = 'application/json',
      d = f && f.includes(c);
    if (!d && i.status === 404) throw (V(e.urlOriginal), ur());
    u(
      d,
      `Wrong Content-Type for ${o}: it should be ${c} but it's ${f} instead. Make sure to properly use pageContext.httpResponse.headers, see https://vite-plugin-ssr.com/renderPage`
    );
  }
  const s = await i.text(),
    a = vt(s);
  if ((l(F(a)), 'serverSideError' in a))
    throw Pt(
      '`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.'
    );
  if (Mn(a)) throw Gn(a);
  return l(h(a, '_pageId', 'string')), Me(a), g(a, { _hasPageContextFromServer: !0 }), a;
}
function lr(e) {
  return F(e) && !!e._alreadyServerSideRouted;
}
function ur() {
  const e = new Error("Page doesn't exist");
  return Object.assign(e, { _alreadyServerSideRouted: !0 }), e;
}
function Ze() {
  const e = '/';
  return l(cr(e)), e;
}
function cr(e) {
  return e.startsWith('/');
}
const Z = $('createPageContext.ts', {});
async function et(e) {
  Z.pageFilesData || (Z.pageFilesData = await St(!0));
  const { pageFilesAll: t, allPageIds: n, pageConfigs: r, pageConfigGlobal: o } = Z.pageFilesData,
    { pageRoutes: i, onBeforeRouteHook: s } = await Ln(t, r, o, n),
    a = Ze();
  l(ke(a));
  const f = {
    _objectCreatedByVitePluginSsr: !0,
    _urlHandler: null,
    _urlRewrite: null,
    _baseServer: a,
    _isProduction: !0,
    _pageFilesAll: t,
    _pageConfigs: r,
    _pageConfigGlobal: o,
    _allPageIds: n,
    _pageRoutes: i,
    _onBeforeRouteHook: s
  };
  return g(f, e), Le(f), f;
}
async function tt(e) {
  const t = await et({ urlOriginal: e }),
    n = await Ge(t),
    r = t._pageFilesAll,
    o = t._pageConfigs;
  if (!('pageContextAddendum' in n)) return { pageId: null, pageFilesAll: r, pageConfigs: o };
  const i = n.pageContextAddendum._pageId;
  return i
    ? { pageId: i, pageFilesAll: r, pageConfigs: o }
    : { pageId: null, pageFilesAll: r, pageConfigs: o };
}
function I(e) {
  return e.fileType === '.css'
    ? []
    : e.exportNames
    ? e.exportNames
    : (l(e.fileExports, e.filePath), Object.keys(e.fileExports));
}
function fr({ pageFilesClientSide: e, pageFilesServerSide: t, pageId: n }) {
  return { isHtmlOnly: r(), isClientRouting: i() };
  function r() {
    return t.some(a => a.pageId === n && a.fileType === '.page')
      ? (o(), !1)
      : !(
          !t.some(a => a.pageId === n && a.fileType === '.page.server') ||
          e.some(a => a.pageId === n && a.fileType === '.page.client' && I(a).includes('render'))
        );
  }
  function o() {
    const s = e.some(a => I(a).includes('render'));
    u(
      s,
      [
        'No client-side `render()` hook found.',
        'See https://vite-plugin-ssr.com/render-modes for more information.',
        [
          'Loaded client-side page files (none of them `export { render }`):',
          ...e.map((a, f) => ` (${f + 1}): ${a.filePath}`)
        ].join(`
`)
      ].join(' ')
    );
  }
  function i() {
    return e.some(a => I(a).includes('clientRouting'));
  }
}
function dr({ pageFilesClientSide: e, pageFilesServerSide: t, isHtmlOnly: n, isClientRouting: r }) {
  let o = [];
  const i = t.filter(a => !e.includes(a)),
    s = [];
  if (
    (s.push(...e.map(a => ({ id: a.filePath, onlyAssets: !1, eagerlyImported: !1 }))),
    s.push(...i.map(a => ({ id: a.filePath, onlyAssets: !0, eagerlyImported: !1 }))),
    n)
  )
    o = e.map(a => a.filePath);
  else {
    const a = gr(r);
    s.push({ id: a, onlyAssets: !1, eagerlyImported: !1 }), (o = [a]);
  }
  return { clientEntries: o, clientDependencies: s };
}
function gr(e) {
  return e
    ? '@@vite-plugin-ssr/dist/esm/client/client-routing-runtime/entry.js'
    : '@@vite-plugin-ssr/dist/esm/client/server-routing-runtime/entry.js';
}
function hr(e, t) {
  let n = Ie(e, t);
  const r = xe(e, t),
    { isHtmlOnly: o, isClientRouting: i } = fr({
      pageFilesClientSide: n,
      pageFilesServerSide: r,
      pageId: t
    });
  o && ((n = n.filter(f => f.isEnv('CLIENT_ONLY') && !I(f).includes('render'))), (n = mr(n)));
  const { clientEntries: s, clientDependencies: a } = dr({
    pageFilesClientSide: n,
    pageFilesServerSide: r,
    isHtmlOnly: o,
    isClientRouting: i
  });
  return {
    isHtmlOnly: o,
    isClientRouting: i,
    clientEntries: s,
    clientDependencies: a,
    pageFilesClientSide: n,
    pageFilesServerSide: r
  };
}
async function pr(e, t, { sharedPageFilesAlreadyLoaded: n }) {
  const r = Ie(e, t);
  await Promise.all(
    r.map(async o => {
      var i;
      l(o.isEnv('CLIENT_ONLY') || o.isEnv('CLIENT_AND_SERVER')),
        !(n && o.isEnv('CLIENT_AND_SERVER')) &&
          (await ((i = o.loadExportNames) === null || i === void 0 ? void 0 : i.call(o)));
    })
  );
}
function mr(e) {
  const t = [];
  for (const n of e) if ((t.push(n), I(n).includes('overrideDefaultPages'))) break;
  return t;
}
function _r(e, t, n) {
  var r, o;
  if (e) {
    const i = (r = z(e, 'clientRouting', 'boolean')) !== null && r !== void 0 ? r : !1;
    return {
      isClientSideRenderable:
        (o = z(e, 'isClientSideRenderable', 'boolean')) !== null && o !== void 0 ? o : !1,
      isClientRouting: i
    };
  } else {
    const { isHtmlOnly: i, isClientRouting: s } = hr(t, n);
    return { isClientSideRenderable: !i, isClientRouting: s };
  }
}
async function nt(e) {
  const { pageId: t, pageFilesAll: n, pageConfigs: r } = await tt(e);
  if (!t) return !1;
  await pr(n, t, { sharedPageFilesAlreadyLoaded: !1 });
  const o = Rt(r, t),
    { isClientSideRenderable: i, isClientRouting: s } = _r(o, n, t);
  return i && s;
}
function rt(e) {
  return !e.startsWith('/') && !e.startsWith('.') && !e.startsWith('?') && e !== '';
}
function ot(e) {
  const t = e.getAttribute('href');
  return !!(t === null || t === '' || rt(t) || yr(e) || vr(t) || !Pr(t) || !wt(t) || !br(e));
}
function br(e) {
  if (Wr()) {
    const n = e.getAttribute('data-vike-link');
    return n !== null && n !== 'false';
  } else return !0;
}
function yr(e) {
  const t = e.getAttribute('target'),
    n = e.getAttribute('rel');
  return t === '_blank' || t === '_external' || n === 'external' || e.hasAttribute('download');
}
function vr(e) {
  if (e.startsWith('#')) return !0;
  const t = n => n.split('#')[0];
  return !!(e.includes('#') && t(e) === t(window.location.href));
}
function Pr(e) {
  const t = Ze();
  l(ke(t));
  const { hasBaseServer: n } = K(e, t);
  return n;
}
function Sr(e, t) {
  let n = Rr(e, t);
  return (
    n === 'viewport' &&
      !e._isProduction &&
      (ae(!1, 'Viewport prefetching is disabled in development', { onlyOnce: !0 }), (n = 'hover')),
    { prefetchStaticAssets: n }
  );
}
function Rr(e, t) {
  {
    const n = wr(t);
    if (n !== null) return n;
  }
  if (
    ('prefetchLinks' in e.exports &&
      u(
        !1,
        '`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead.'
      ),
    'prefetchStaticAssets' in e.exports)
  ) {
    const { prefetchStaticAssets: n } = e.exports;
    if (n === !1) return !1;
    if (n === 'hover') return 'hover';
    if (n === 'viewport') return 'viewport';
    const r = "prefetchStaticAssets value should be false, 'hover', or 'viewport'";
    u(O(n), r);
    const o = Object.keys(n);
    u(o.length === 1 && o[0] === 'when', r);
    const { when: i } = n;
    if (i === 'HOVER' || i === 'VIEWPORT') {
      const s = i.toLowerCase();
      return (
        P(
          !1,
          `prefetchStaticAssets value \`{ when: '${i}' }\` is outdated: set prefetchStaticAssets to '${s}' instead`,
          { onlyOnce: !0 }
        ),
        s
      );
    }
    u(!1, r);
  }
  return 'hover';
}
function wr(e) {
  const t = e.getAttribute('data-prefetch-static-assets'),
    n = e.getAttribute('data-prefetch');
  if (t === null && n === null) return null;
  const r = 'The attribute data-prefetch is outdated, use data-prefetch-static-assets instead.';
  if (t) {
    if ((u(n === null, r), t === 'hover' || t === 'viewport')) return t;
    if (t === 'false') return !1;
    u(
      !1,
      `data-prefetch-static-assets has value "${t}" but it should instead be "false", "hover", or "viewport"`
    );
  }
  if (n) {
    if ((l(!t), P(!1, r, { onlyOnce: !0 }), n === 'true')) return 'viewport';
    if (n === 'false') return 'hover';
    u(!1, `data-prefetch has value "${n}" but it should instead be "true" or "false"`);
  }
  l(!1);
}
const it = new Map();
function st(e) {
  const t = lt(e);
  return it.has(t);
}
function at(e) {
  const t = lt(e);
  it.set(t, !0);
}
function lt(e) {
  return K(e, '/').pathname;
}
A();
const we = new Map();
async function ee(e) {
  if (
    (u(
      Ot(),
      'prefetch() only works with Client Routing, see https://vite-plugin-ssr.com/prefetch',
      { showStackTrace: !0 }
    ),
    u(
      !rt(e),
      `You are trying to prefetch the URL ${e} of another domain which cannot be prefetched`,
      { showStackTrace: !0 }
    ),
    st(e))
  )
    return;
  at(e);
  const { pageId: t, pageFilesAll: n, pageConfigs: r } = await tt(e);
  if (t)
    try {
      await U(n, r, t);
    } catch (o) {
      if (le(o)) oe(o, !0);
      else throw o;
    }
}
function Or(e) {
  at(e.urlPathname),
    [...document.getElementsByTagName('A')].forEach(async n => {
      if (we.has(n)) return;
      we.set(n, !0);
      const r = n.getAttribute('href');
      if (ot(n)) return;
      l(r);
      try {
        if (!(await nt(r))) return;
      } catch {
        return;
      }
      if (st(r)) return;
      const { prefetchStaticAssets: o } = Sr(e, n);
      if (o) {
        if (o === 'hover')
          n.addEventListener('mouseover', () => ee(r)),
            n.addEventListener('touchstart', () => ee(r), { passive: !0 });
        else if (o === 'viewport') {
          const i = new IntersectionObserver(s => {
            s.forEach(a => {
              a.isIntersecting && (ee(r), i.disconnect());
            });
          });
          i.observe(n);
        }
      } else return;
    });
}
function ut() {
  let e = window.history.state;
  e || (e = {});
  let t = !1;
  'timestamp' in e || ((t = !0), (e.timestamp = ft())),
    'scrollPosition' in e || ((t = !0), (e.scrollPosition = ct())),
    dt(e),
    t && fe(e);
}
function ce() {
  const e = window.history.state || {};
  return dt(e), e;
}
function ct() {
  return { x: window.scrollX, y: window.scrollY };
}
function ft() {
  return new Date().getTime();
}
function Oe() {
  const e = ct(),
    t = ce();
  fe({ ...t, scrollPosition: e });
}
function Cr(e, t) {
  if (t) fe(ce(), e);
  else {
    const n = ft();
    Fr({ timestamp: n, scrollPosition: null }, e);
  }
}
function dt(e) {
  if ((l(F(e)), 'timestamp' in e)) {
    const { timestamp: t } = e;
    l(typeof t == 'number');
  }
  if ('scrollPosition' in e) {
    const { scrollPosition: t } = e;
    t !== null && l(h(t, 'x', 'number') && h(t, 'y', 'number'));
  }
}
function fe(e, t) {
  window.history.replaceState(e, '', t != null ? t : null);
}
function Fr(e, t) {
  window.history.pushState(e, '', t);
}
A();
const xr = $('navigate.ts', {});
function Er(e) {
  xr.navigate = e;
}
const v = $('useClientRouter.ts', { previousState: G() });
Hr();
ut();
function oe(e, t) {
  l(le(e)),
    (v.clientRoutingIsDisabled = !0),
    t && console.log(e),
    ae(
      !1,
      [
        'Failed to fetch static asset.',
        'This usually happens when a new frontend is deployed.',
        'Falling back to Server Routing.',
        '(The next page navigation will use Server Routing instead of Client Routing.)'
      ]
        .filter(Boolean)
        .join(' '),
      { onlyOnce: !0 }
    );
}
function Ar() {
  Nr(),
    Tr((o, { keepScrollPosition: i }) => {
      r({
        scrollTarget: i ? 'preserve-scroll' : 'scroll-to-top-or-hash',
        urlOriginal: o,
        isBackwardNavigation: !1,
        checkClientSideRenderable: !0
      });
    }),
    kr((o, i) => {
      r({ scrollTarget: o, isBackwardNavigation: i });
    }),
    Er(async (o, { keepScrollPosition: i = !1, overwriteLastHistoryEntry: s = !1 } = {}) => {
      await r({
        scrollTarget: i ? 'preserve-scroll' : 'scroll-to-top-or-hash',
        urlOriginal: o,
        overwriteLastHistoryEntry: s,
        isBackwardNavigation: !1,
        checkClientSideRenderable: !0
      });
    });
  let e = 0,
    t,
    n = !1;
  r({ scrollTarget: 'preserve-scroll', isBackwardNavigation: null });
  return;
  async function r({
    scrollTarget: o,
    urlOriginal: i = N(),
    overwriteLastHistoryEntry: s = !1,
    isBackwardNavigation: a,
    checkClientSideRenderable: f,
    pageContextsFromRewrite: c = [],
    redirectCount: d = 0
  }) {
    var p, _;
    if ((Jn(c.length, d), v.clientRoutingIsDisabled)) {
      V(i);
      return;
    }
    const w = Yn(c);
    if (f) {
      const b = (p = w._urlRewrite) !== null && p !== void 0 ? p : i;
      let y;
      try {
        y = await nt(b);
      } catch (me) {
        if (Q(me)) y = !0;
        else throw me;
      }
      if (!y) {
        V(i);
        return;
      }
    }
    const H = { urlOriginal: i, isBackwardNavigation: a, ...w },
      x = ++e;
    l(x >= 1),
      x > 1 &&
        n === !1 &&
        ((_ = v.onPageTransitionStart) === null || _ === void 0 || _.call(v, H), (n = !0));
    let ge = !1;
    const q = () => (x === 1 && ge === !1 ? !1 : x !== e),
      m = await et(H);
    if (q()) return;
    const he = x === 1;
    g(m, { _isFirstRenderAttempt: he });
    let L,
      S,
      pe = !1;
    try {
      L = await Xn(m);
    } catch (b) {
      (pe = !0), (S = b);
    }
    if (pe) {
      if ((Q(S) || console.error(S), Fe(S, m))) return;
      if (Q(S)) {
        const b = S;
        Kn(S, m._isProduction, m);
        const y = b._pageContextAbort;
        if (y._urlRewrite) {
          await r({
            scrollTarget: o,
            urlOriginal: i,
            overwriteLastHistoryEntry: s,
            isBackwardNavigation: a,
            pageContextsFromRewrite: [...c, y],
            redirectCount: d
          });
          return;
        }
        if (y._urlRedirect) {
          await r({
            scrollTarget: 'scroll-to-top-or-hash',
            urlOriginal: y._urlRedirect.url,
            overwriteLastHistoryEntry: !1,
            isBackwardNavigation: !1,
            checkClientSideRenderable: !0,
            pageContextsFromRewrite: c,
            redirectCount: d++
          });
          return;
        }
        l(y._abortStatusCode), g(m, y);
      } else g(m, { is404: sr(S) });
      try {
        L = await Zn(m);
      } catch (b) {
        if (
          Fe(b, m) ||
          (he ||
            setTimeout(() => {
              window.location.pathname = i;
            }, 0),
          dn(S, b))
        )
          return;
        throw b;
      }
    }
    if (
      (l(L),
      g(m, L),
      J(m, 'onPageTransitionStart'),
      (v.onPageTransitionStart = m.exports.onPageTransitionStart),
      m.exports.hydrationCanBeAborted
        ? (ge = !0)
        : P(
            !fn(),
            'You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting',
            { onlyOnce: !0 }
          ),
      !q() && (t && (await t), !q()))
    ) {
      if (
        (Ir(i, s),
        He.markNavigationChange(),
        l(t === void 0),
        (t = (async () => {
          await Ct(m, !0), Or(m);
        })()),
        await t,
        (t = void 0),
        m._isFirstRenderAttempt)
      ) {
        J(m, 'onHydrationEnd');
        const { onHydrationEnd: b } = m.exports;
        if (b) {
          const y = m.exportsAll.onHydrationEnd[0].exportSource;
          l(y), await se(() => b(m), 'onHydrationEnd', y);
        }
      } else
        x === e &&
          (m.exports.onPageTransitionEnd &&
            (J(m, 'onPageTransitionEnd'), m.exports.onPageTransitionEnd(m)),
          (n = !1));
      gt(o), de(), (v.initialRenderIsDone = !0);
    }
  }
}
function Tr(e) {
  document.addEventListener('click', t);
  return;
  function t(o) {
    if (!n(o)) return;
    const i = r(o.target);
    if (!i) return;
    const s = i.getAttribute('href');
    if (ot(i)) return;
    l(s), o.preventDefault();
    const a = ![null, 'false'].includes(i.getAttribute('keep-scroll-position'));
    e(s, { keepScrollPosition: a });
  }
  function n(o) {
    return o.button === 0 && !o.ctrlKey && !o.shiftKey && !o.altKey && !o.metaKey;
  }
  function r(o) {
    for (; o.tagName !== 'A'; ) {
      const { parentNode: i } = o;
      if (!i) return null;
      o = i;
    }
    return o;
  }
}
function kr(e) {
  window.addEventListener('popstate', () => {
    const t = G(),
      n = t.historyState.scrollPosition || 'scroll-to-top-or-hash',
      r = t.urlWithoutHash === v.previousState.urlWithoutHash,
      o =
        !t.historyState.timestamp || !v.previousState.historyState.timestamp
          ? null
          : t.historyState.timestamp < v.previousState.historyState.timestamp;
    (v.previousState = t),
      r ? (window.history.state === null ? (ut(), (v.previousState = G())) : gt(n)) : e(n, o);
  });
}
function Ir(e, t) {
  N() !== e && (de(), Cr(e, t), (v.previousState = G()));
}
function G() {
  return { urlWithoutHash: N({ withoutHash: !0 }), historyState: ce() };
}
function gt(e) {
  if (e === 'preserve-scroll') return;
  let t;
  if (e === 'scroll-to-top-or-hash') {
    const n = jr();
    if (n && n !== 'top') {
      const r = document.getElementById(n) || document.getElementsByName(n)[0];
      if (r) {
        r.scrollIntoView();
        return;
      }
    }
    t = { x: 0, y: 0 };
  } else l('x' in e && 'y' in e), (t = e);
  $r(t);
}
function $r(e) {
  const t = () => window.scrollTo(e.x, e.y),
    n = () => window.scrollX === e.x && window.scrollY === e.y;
  n() ||
    (t(),
    !n() &&
      requestAnimationFrame(() => {
        t(),
          !n() &&
            setTimeout(async () => {
              if ((t(), n())) return;
              const r = new Date().getTime();
              for (;;) if ((await gn(10), t(), n() || new Date().getTime() - r > 100)) return;
            }, 0);
      }));
}
function Nr() {
  window.addEventListener('scroll', hn(Oe, Math.ceil(1e3 / 3)), { passive: !0 }), ht(Oe);
}
function jr() {
  let { hash: e } = window.location;
  return e === '' ? null : (l(e.startsWith('#')), (e = e.slice(1)), e);
}
function Hr() {
  Ce(), ht(Ce), Lr(() => v.initialRenderIsDone && de());
}
function de() {
  'scrollRestoration' in window.history && (window.history.scrollRestoration = 'manual');
}
function Ce() {
  'scrollRestoration' in window.history && (window.history.scrollRestoration = 'auto');
}
function ht(e) {
  window.addEventListener('visibilitychange', () => {
    document.visibilityState === 'hidden' && e();
  });
}
function Lr(e) {
  window.addEventListener('visibilitychange', () => {
    document.visibilityState === 'visible' && e();
  });
}
function Fe(e, t) {
  return !!(lr(e) || Br(e, t));
}
function Br(e, t) {
  if (!le(e)) return !1;
  if (t._isFirstRenderAttempt) throw (oe(e, !1), e);
  return oe(e, !0), V(t.urlOriginal), !0;
}
function Wr() {
  return !!window._disableAutomaticLinkInterception;
}
A();
Ft(!0);
Ar();
