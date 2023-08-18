function ve() {
  return !(
    typeof process > 'u' ||
    !process.cwd ||
    !process.versions ||
    typeof process.versions.node > 'u' ||
    !process.release ||
    process.release.name !== 'node'
  );
}
function V(e, t) {
  let n;
  {
    var r = Error.stackTraceLimit;
    (Error.stackTraceLimit = 1 / 0), (n = new Error(e)), (Error.stackTraceLimit = r);
  }
  return ve() && (n.stack = ye(n.stack, t)), n;
}
function ye(e, t) {
  if (!e) return e;
  const n = we(e);
  let r = 0;
  return n.filter(o =>
    o.includes(' (internal/') || o.includes(' (node:internal')
      ? !1
      : r < t && Ee(o)
      ? (r++, !1)
      : !0
  ).join(`
`);
}
function Ee(e) {
  return e.startsWith('    at ');
}
function we(e) {
  return e.split(/\r?\n/);
}
function T(e, t) {
  const n = (globalThis.__vite_plugin_ssr = globalThis.__vite_plugin_ssr || {});
  return (n[e] = n[e] || t);
}
function b(e) {
  return typeof e == 'object' && e !== null;
}
function B(e) {
  return Array.from(new Set(e));
}
const w = T('assertPackageInstances.ts', { instances: [], alreadyLogged: new Set() }),
  ie =
    "The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vite-plugin-ssr.com/client-runtimes-conflict",
  U =
    "Two vite-plugin-ssr client runtime instances are being loaded. Make sure your client-side bundles don't include vite-plugin-ssr twice. (In order to reduce the size of your client-side JavaScript bundles.)";
function H() {
  {
    const e = B(w.instances);
    if (e.length > 1) {
      const t = `Both vite-plugin-ssr@${e[0]} and vite-plugin-ssr@${e[1]} loaded. Only one version should be loaded.`;
      _e(!1, t);
    }
  }
  w.checkSingleInstance && w.instances.length > 1 && L(!1, U, { onlyOnce: !0, showStackTrace: !0 });
}
function Ct(e) {
  L(w.isClientRouting !== !0, ie, { onlyOnce: !0, showStackTrace: !0 }),
    L(w.isClientRouting === void 0, U, { onlyOnce: !0, showStackTrace: !0 }),
    (w.isClientRouting = !1),
    e && (w.checkSingleInstance = !0),
    H();
}
function At(e) {
  L(w.isClientRouting !== !1, ie, { onlyOnce: !0, showStackTrace: !0 }),
    L(w.isClientRouting === void 0, U, { onlyOnce: !0, showStackTrace: !0 }),
    (w.isClientRouting = !0),
    e && (w.checkSingleInstance = !0),
    H();
}
function be(e) {
  w.instances.push(e), H();
}
function _e(e, t) {
  if (e) return;
  const n = `[vite-plugin-ssr][Wrong Usage] ${t}`;
  throw new Error(n);
}
function L(e, t, { onlyOnce: n, showStackTrace: r }) {
  if (e) return;
  const i = `[vite-plugin-ssr][Warning] ${t}`;
  if (n) {
    const { alreadyLogged: o } = w,
      a = n === !0 ? i : n;
    if (o.has(a)) return;
    o.add(a);
  }
  console.warn(r ? new Error(i) : i);
}
const Re = '0.4.136',
  S = {
    projectName: 'vite-plugin-ssr',
    projectVersion: Re,
    npmPackageName: 'vite-plugin-ssr',
    githubRepository: 'https://github.com/brillout/vite-plugin-ssr'
  };
be(S.projectVersion);
const se = new Proxy(e => e, { get: () => se }),
  K = se,
  E = T('utils/assert.ts', {
    alreadyLogged: new Set(),
    logger(e, t) {
      t === 'info' ? console.log(e) : console.warn(e);
    },
    showStackTraceList: new WeakSet()
  }),
  Se = `[${S.npmPackageName}]`,
  Pe = `[${S.npmPackageName}@${S.projectVersion}]`,
  G = 2;
function s(e, t) {
  var n;
  if (e) return;
  const r = (() => {
    if (!t) return null;
    const a = typeof t == 'string' ? t : '`' + JSON.stringify(t) + '`';
    return `Debug info (this is for the ${S.projectName} maintainers; you can ignore this): ${a}`;
  })();
  let i = [
    `You stumbled upon a bug in ${S.projectName}'s source code.`,
    `Go to ${S.githubRepository}/issues/new and copy-paste this error; a maintainer will fix the bug (usually under 24 hours).`,
    r
  ]
    .filter(Boolean)
    .join(' ');
  (i = O(i)), (i = W(i, 'Bug')), (i = F(i, !0));
  const o = V(i, G);
  throw ((n = E.onBeforeLog) === null || n === void 0 || n.call(E), o);
}
function v(e, t, { showStackTrace: n } = {}) {
  var r;
  if (e) return;
  (t = O(t)), (t = W(t, 'Wrong Usage')), (t = F(t));
  const i = V(t, G);
  throw (
    (n && E.showStackTraceList.add(i), (r = E.onBeforeLog) === null || r === void 0 || r.call(E), i)
  );
}
function $e(e) {
  return (e = O(e)), (e = W(e, 'Error')), (e = F(e)), V(e, G);
}
function P(e, t, { onlyOnce: n, showStackTrace: r }) {
  var i;
  if (!e) {
    if (((t = O(t)), (t = W(t, 'Warning')), (t = F(t)), n)) {
      const { alreadyLogged: o } = E,
        a = n === !0 ? t : n;
      if (o.has(a)) return;
      o.add(a);
    }
    if (((i = E.onBeforeLog) === null || i === void 0 || i.call(E), r)) {
      const o = new Error(t);
      E.showStackTraceList.add(o), E.logger(o, 'warn');
    } else E.logger(t, 'warn');
  }
}
function Dt(e, t, { onlyOnce: n }) {
  var r;
  if (!e) {
    if (((t = O(t)), (t = F(t)), n)) {
      const { alreadyLogged: i } = E,
        o = t;
      if (i.has(o)) return;
      i.add(o);
    }
    (r = E.onBeforeLog) === null || r === void 0 || r.call(E), E.logger(t, 'info');
  }
}
function W(e, t) {
  let n = `[${t}]`;
  const r = t === 'Warning' ? 'yellow' : 'red';
  return (n = K.bold(K[r](n))), `${n}${e}`;
}
function O(e) {
  return e.startsWith('[') ? e : ` ${e}`;
}
function F(e, t = !1) {
  return `${t ? Pe : Se}${e}`;
}
function M() {
  return typeof window < 'u' && typeof window.scrollY == 'number';
}
const I = T('utils/assertRouterType.ts', {});
function Nt() {
  oe(Te()), (I.isClientRouting = !0);
}
function Te() {
  return I.isClientRouting !== !1;
}
function zt() {
  oe(I.isClientRouting !== !0), (I.isClientRouting = !1);
}
function oe(e) {
  v(
    M(),
    "`import { something } from 'vite-plugin-ssr/client/router'` is forbidden on the server-side",
    { showStackTrace: !0 }
  ),
    P(
      e,
      "You shouldn't `import { something } from 'vite-plugin-ssr/client/router'` when using Server Routing. The 'vite-plugin-ssr/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle.",
      { showStackTrace: !0, onlyOnce: !0 }
    );
}
const Le = ['js', 'ts', 'cjs', 'cts', 'mjs', 'mts', 'jsx', 'tsx', 'cjsx', 'ctsx', 'mjsx', 'mtsx'],
  ae = ['vue', 'svelte', 'marko', 'md', 'mdx'],
  Oe = [...Le, ...ae];
function le(e) {
  const t = Oe.some(n => e.endsWith('.' + n));
  return s(!Fe(e) || t), t;
}
function Fe(e) {
  return /\.(c|m)?(j|t)sx?$/.test(e);
}
function je(e) {
  return ae.some(t => e.endsWith('.' + t));
}
function x(e, t, n) {
  return typeof e == 'string' ? X(e.split(''), t, n).join('') : X(e, t, n);
}
function X(e, t, n) {
  const r = [];
  let i = t >= 0 ? t : e.length + t;
  s(i >= 0 && i <= e.length);
  let o = n >= 0 ? n : e.length + n;
  for (s(o >= 0 && o <= e.length); !(i === o || (i === e.length && (i = 0), i === o)); ) {
    const a = e[i];
    s(a !== void 0), r.push(a), i++;
  }
  return r;
}
function ce(e) {
  return (
    e.startsWith('/') ||
    e.startsWith('http') ||
    e.startsWith('tauri://') ||
    e.startsWith('.') ||
    e.startsWith('?') ||
    e.startsWith('#') ||
    e === ''
  );
}
function Vt(e, t) {
  s(t.includes(' but ')),
    v(typeof e == 'string', `${t} should be a string`),
    !ce(e) &&
      (!e.startsWith('/') && !e.includes(':')
        ? v(
            !1,
            `${t} is '${e}' and it should be '/${e}' instead (URL pathnames should start with a leading slash)`
          )
        : v(!1, `${t} isn't a valid URL`));
}
function Ie(e, t) {
  s(ce(e), { url: e }), s(t.startsWith('/'), { url: e, baseServer: t });
  const [n, ...r] = e.split('#');
  s(n !== void 0);
  const i = ['', ...r].join('#') || null;
  s(i === null || i.startsWith('#'));
  const o = i === null ? '' : D(i.slice(1)),
    [a, ...l] = n.split('?');
  s(a !== void 0);
  const c = ['', ...l].join('?') || null;
  s(c === null || c.startsWith('?'), { url: e, searchOriginal: c });
  const u = {},
    g = {};
  Array.from(new URLSearchParams(c || '')).forEach(([y, q]) => {
    (u[y] = q), (g[y] = [...(g[y] || []), q]);
  });
  const { origin: d, pathnameResolved: p } = ke(a, t);
  s(d === null || d === D(d), { origin: d }),
    s(p.startsWith('/'), { url: e, pathnameResolved: p }),
    s(d === null || e.startsWith(d), { url: e, origin: d });
  const h = a.slice((d || '').length);
  {
    const y = `${d || ''}${h}${c || ''}${i || ''}`;
    s(e === y, { url: e, urlRecreated: y });
  }
  let { pathname: m, hasBaseServer: _ } = Ce(p, t);
  return (
    (m = xe(m)),
    s(m.startsWith('/')),
    {
      origin: d,
      pathname: m,
      pathnameOriginal: h,
      hasBaseServer: _,
      search: u,
      searchAll: g,
      searchOriginal: c,
      hash: o,
      hashOriginal: i
    }
  );
}
function D(e) {
  try {
    return decodeURIComponent(e);
  } catch {}
  try {
    return decodeURI(e);
  } catch {}
  return e;
}
function xe(e) {
  return e
    .split('/')
    .map(t => D(t).split('/').join('%2F'))
    .join('/');
}
function ke(e, t) {
  var n;
  if (e.startsWith('//')) return { origin: null, pathnameResolved: e };
  let r = !1;
  const i = 'tauri://',
    o = 'http://';
  e.startsWith(i) && ((r = !0), (e = o + e.slice(i.length)));
  let a, l;
  try {
    const c = new URL(e);
    (a = c.origin), (l = c.pathname);
  } catch {
    a = null;
    let u =
      typeof window < 'u' &&
      ((n = window == null ? void 0 : window.document) === null || n === void 0
        ? void 0
        : n.baseURI);
    (u = u || 'http://fake.example.org' + t), (l = new URL(e, u).pathname);
  }
  return (
    l || (l = '/'),
    r && (s(a), s(a.startsWith(o)), (a = i + a.slice(o.length))),
    s(l.startsWith('/'), { urlWithoutSearch: e, pathnameResolved: l }),
    s(l === l.split('?')[0].split('#')[0]),
    { origin: a, pathnameResolved: l }
  );
}
function We(e) {
  s(e.startsWith('/')), s(!e.includes('?')), s(!e.includes('#'));
}
function Ce(e, t) {
  We(e), s(Ae(t));
  let n = e;
  if ((s(n.startsWith('/')), s(t.startsWith('/')), t === '/'))
    return { pathname: e, hasBaseServer: !0 };
  let r = t;
  return (
    t.endsWith('/') && n === x(t, 0, -1) && ((r = x(t, 0, -1)), s(n === r)),
    n.startsWith(r)
      ? (s(n.startsWith('/') || n.startsWith('http')),
        s(n.startsWith(r)),
        (n = n.slice(r.length)),
        n.startsWith('/') || (n = '/' + n),
        s(n.startsWith('/')),
        { pathname: n, hasBaseServer: !0 })
      : { pathname: e, hasBaseServer: !1 }
  );
}
function Ae(e) {
  return e.startsWith('/');
}
function J(e, t) {
  Object.defineProperties(e, Object.getOwnPropertyDescriptors(t));
}
function C(e) {
  return e instanceof Function || typeof e == 'function';
}
function Bt(e) {
  return (t, n) => {
    const r = e(t),
      i = e(n);
    return r === i ? 0 : r > i ? -1 : 1;
  };
}
function De(e) {
  return (t, n) => {
    const r = e(t),
      i = e(n);
    if ((s([!0, !1, null].includes(r)), s([!0, !1, null].includes(i)), r === i)) return 0;
    if (r === !0 || i === !1) return -1;
    if (i === !0 || r === !1) return 1;
    s(!1);
  };
}
function Ne(e) {
  return De(t => {
    const n = e(t);
    return n === null ? null : !n;
  });
}
function f(e, t, n = 'unknown') {
  if (!b(e)) return !1;
  if (!(t in e)) return n === 'undefined';
  if (n === 'unknown') return !0;
  const r = e[t];
  return n === 'array'
    ? Array.isArray(r)
    : n === 'object'
    ? b(r)
    : n === 'string[]'
    ? Array.isArray(r) && r.every(i => typeof i == 'string')
    : n === 'function'
    ? C(r)
    : Array.isArray(n)
    ? typeof r == 'string' && n.includes(r)
    : n === 'null'
    ? r === null
    : n === 'undefined'
    ? r === void 0
    : n === 'true'
    ? r === !0
    : n === 'false'
    ? r === !1
    : typeof r === n;
}
function ze(e, t) {
  return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0;
}
const Ve = e => e != null;
function ue(e) {
  const t = n => `Not a posix path: ${n}`;
  s(e !== null, t('null')),
    s(typeof e == 'string', t(`typeof path === '${typeof e}'`)),
    s(e !== '', t('(empty string)')),
    s(e),
    s(!e.includes('\\'), t(e));
}
const Be = ['$$registrations', '_rerender_only'],
  Ue = ['.md', '.mdx'];
function He(e, t) {
  Ge(e, t, !0);
}
function Ge(e, t, n) {
  const i = Object.keys(e).filter(l => !Be.includes(l)),
    o = i.filter(l => l !== 'default'),
    a = i.includes('default');
  if (o.length === 0) {
    if (a) return;
    s(i.length === 0),
      v(!1, `${t} doesn't export any value, but it should have a \`export default\` instead`);
  } else if (!Ue.some(l => t.endsWith(l))) {
    const l = o.join(', ');
    n
      ? P(o.length === 0, `${t} should only have a default export: remove \`export { ${l} }\``, {
          onlyOnce: !0
        })
      : P(o.length === 0, `${t} replace \`export { ${l} }\` with \`export default { ${l} }\``, {
          onlyOnce: !0
        });
  }
}
function Me(e) {
  return Object.entries(e);
}
const Je = ['clientRouting'];
function Ye(e) {
  Je.forEach(t => {
    if ((s(e.fileExports), !(t in e.fileExports))) return;
    const n = `The value of \`${t}\` is only allowed to be \`true\`.`;
    v(
      e.fileExports[t] !== !1,
      `${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`
    ),
      v(
        e.fileExports[t] === !0,
        `${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`
      );
  });
}
const fe = ['render', 'clientRouting', 'prerender', 'doNotPrerender'];
function qe(e, t) {
  v(
    !fe.includes(e),
    `${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`
  );
}
function Ke(e, t) {
  const n = {},
    r = {},
    i = {};
  if (
    (e.forEach(l => {
      Xe(l).forEach(({ exportName: u, exportValue: g, isFromDefaultExport: d }) => {
        var p;
        s(u !== 'default'),
          (i[u] = (p = i[u]) !== null && p !== void 0 ? p : []),
          i[u].push({
            exportValue: g,
            exportSource: `${l.filePath} > ${
              d ? `\`export default { ${u} }\`` : `\`export { ${u} }\``
            }`,
            filePath: l.filePath,
            _filePath: l.filePath,
            _fileType: l.fileType,
            _isFromDefaultExport: d
          });
      });
    }),
    t)
  ) {
    const { configValues: l } = t;
    Me(l).forEach(([c, u]) => {
      var g, d, p;
      const h = t.configElements[c];
      s(h);
      const { configDefinedByFile: m, configDefinedAt: _ } = h;
      s(m),
        (r[c] = (g = r[c]) !== null && g !== void 0 ? g : u),
        (n[c] = (d = n[c]) !== null && d !== void 0 ? d : []),
        s(n[c].length === 0),
        n[c].push({ configValue: u, configDefinedAt: _, configDefinedByFile: m });
      const y = c;
      (i[y] = (p = i[y]) !== null && p !== void 0 ? p : []),
        i[y].push({
          exportValue: u,
          exportSource: _,
          filePath: m,
          _filePath: m,
          _fileType: null,
          _isFromDefaultExport: null
        });
    });
  }
  const o = Qe(),
    a = {};
  return (
    Object.entries(i).forEach(([l, c]) => {
      c.forEach(({ exportValue: u, _fileType: g, _isFromDefaultExport: d }) => {
        var p;
        (a[l] = (p = a[l]) !== null && p !== void 0 ? p : u),
          g === '.page' && !d && (l in o || (o[l] = u));
      });
    }),
    s(!('default' in a)),
    s(!('default' in i)),
    { config: r, configEntries: n, exports: a, exportsAll: i, pageExports: o }
  );
}
function Xe(e) {
  const { filePath: t, fileExports: n } = e;
  s(n), s(le(t));
  const r = [];
  return (
    Object.entries(n)
      .sort(Ne(([i]) => i === 'default'))
      .forEach(([i, o]) => {
        let a = i === 'default';
        if (a)
          if (je(t)) i = 'Page';
          else {
            v(b(o), `The \`export default\` of ${t} should be an object.`),
              Object.entries(o).forEach(([l, c]) => {
                qe(l, t), r.push({ exportName: l, exportValue: c, isFromDefaultExport: a });
              });
            return;
          }
        r.push({ exportName: i, exportValue: o, isFromDefaultExport: a });
      }),
    r.forEach(({ exportName: i, isFromDefaultExport: o }) => {
      s(!(o && fe.includes(i)));
    }),
    r
  );
}
function Qe() {
  return new Proxy(
    {},
    {
      get(...e) {
        return (
          M() ||
            P(
              !1,
              '`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports',
              { onlyOnce: !0, showStackTrace: !0 }
            ),
          Reflect.get(...e)
        );
      }
    }
  );
}
function Ze(e) {
  const t = '.page.',
    n = x(e.split(t), 0, -1).join(t);
  return s(!n.includes('\\')), n;
}
function $(e) {
  ue(e);
}
function Ut(e, t) {
  if (t.length > 0) {
    const r = t.filter(i => i.isErrorPage);
    return r.length === 0
      ? null
      : (v(r.length === 1, 'Only one error page can be defined'), r[0].pageId);
  }
  const n = B(e.map(({ pageId: r }) => r).filter(r => A(r)));
  if (
    (v(n.length <= 1, `Only one _error.page.js is allowed, but found several: ${n.join(' ')}`),
    n.length > 0)
  ) {
    const r = n[0];
    return s(r), r;
  }
  return null;
}
function A(e, t) {
  return s(!e.includes('\\')), e.includes('/_error');
}
function et(e, t) {
  if (t.length > 0) {
    const n = t.find(r => r.pageId === e);
    return s(n), n.isErrorPage;
  } else return A(e);
}
const tt = ['.page', '.page.server', '.page.route', '.page.client', '.css'];
function nt(e) {
  if ((ue(e), e.endsWith('.css'))) return '.css';
  s(le(e), e);
  const n = e.split('/').slice(-1)[0].split('.'),
    r = n.slice(-3)[0],
    i = n.slice(-2)[0];
  if (i === 'page') return '.page';
  if ((s(r === 'page', e), i === 'server')) return '.page.server';
  if (i === 'client') return '.page.client';
  if (i === 'route') return '.page.route';
  s(!1, e);
}
function de(e) {
  const t = o => i.pageId === o || (i.isDefaultPageFile && (Q(i.filePath) || rt(o, i.filePath))),
    n = nt(e),
    i = {
      filePath: e,
      fileType: n,
      isEnv: o => {
        if ((s(n !== '.page.route'), o === 'CLIENT_ONLY'))
          return n === '.page.client' || n === '.css';
        if (o === 'SERVER_ONLY') return n === '.page.server';
        if (o === 'CLIENT_AND_SERVER') return n === '.page';
        s(!1);
      },
      isRelevant: t,
      isDefaultPageFile: N(e),
      isRendererPageFile: n !== '.css' && N(e) && Q(e),
      isErrorPageFile: A(e),
      pageId: Ze(e)
    };
  return i;
}
function N(e) {
  return $(e), A(e) ? !1 : e.includes('/_default');
}
function Q(e) {
  return $(e), e.includes('/renderer/');
}
function rt(e, t) {
  $(e), $(t), s(!e.endsWith('/')), s(!t.endsWith('/')), s(N(t));
  const n = x(t.split('/'), 0, -1)
    .filter(r => r !== '_default')
    .join('/');
  return e.startsWith(n);
}
function it(e) {
  s(Array.isArray(e) || e === null),
    s(e !== null),
    e.forEach(t => {
      s(b(t)),
        s(f(t, 'pageId', 'string')),
        s(f(t, 'routeFilesystem', 'string') || f(t, 'routeFilesystem', 'null')),
        s(f(t, 'routeFilesystemDefinedBy', 'string') || f(t, 'routeFilesystemDefinedBy', 'null')),
        s(f(t, 'loadCodeFiles', 'function')),
        s(f(t, 'isErrorPage', 'boolean')),
        s(f(t, 'configElements', 'object')),
        ge(t.configElements, !1);
    });
}
function st(e) {
  ge(e, !0);
}
function ge(e, t) {
  s(b(e)),
    Object.entries(e).forEach(([n, r]) => {
      if ((s(b(r) || r === null), r === null)) {
        s(t);
        return;
      }
      s(f(r, 'configDefinedAt', 'string')),
        s(f(r, 'plusConfigFilePath', 'string') || f(r, 'plusConfigFilePath', 'null')),
        s(f(r, 'configEnv', 'string')),
        s(f(r, 'codeFilePath', 'string') || f(r, 'codeFilePath', 'null')),
        s(f(r, 'codeFileExport', 'string') || f(r, 'codeFileExport', 'null')),
        s(f(r, 'configValueSerialized', 'string') || f(r, 'configValueSerialized', 'undefined')),
        (t || n === 'route') && s(f(r, 'configValue') || f(r, 'configValueSerialized'));
    });
}
const ot = [
  {
    is: e => e === void 0,
    match: e => e === '!undefined',
    serialize: () => '!undefined',
    deserialize: () => {}
  },
  {
    is: e => e === 1 / 0,
    match: e => e === '!Infinity',
    serialize: () => '!Infinity',
    deserialize: () => 1 / 0
  },
  {
    is: e => e === -1 / 0,
    match: e => e === '!-Infinity',
    serialize: () => '!-Infinity',
    deserialize: () => -1 / 0
  },
  {
    is: e => typeof e == 'number' && isNaN(e),
    match: e => e === '!NaN',
    serialize: () => '!NaN',
    deserialize: () => NaN
  },
  {
    is: e => e instanceof Date,
    match: e => e.startsWith('!Date:'),
    serialize: e => '!Date:' + e.toISOString(),
    deserialize: e => new Date(e.slice(6))
  },
  {
    is: e => typeof e == 'bigint',
    match: e => e.startsWith('!BigInt:'),
    serialize: e => '!BigInt:' + e.toString(),
    deserialize: e => {
      if (typeof BigInt > 'u')
        throw new Error(
          'Your JavaScript environement does not support BigInt. Consider adding a polyfill.'
        );
      return BigInt(e.slice(8));
    }
  },
  {
    is: e => e instanceof RegExp,
    match: e => e.startsWith('!RegExp:'),
    serialize: e => '!RegExp:' + e.toString(),
    deserialize: e => {
      e = e.slice(8);
      const t = e.match(/\/(.*)\/(.*)?/),
        n = t[1],
        r = t[2];
      return new RegExp(n, r);
    }
  },
  {
    is: e => e instanceof Map,
    match: e => e.startsWith('!Map:'),
    serialize: (e, t) => '!Map:' + t(Array.from(e.entries())),
    deserialize: (e, t) => new Map(t(e.slice(5)))
  },
  {
    is: e => e instanceof Set,
    match: e => e.startsWith('!Set:'),
    serialize: (e, t) => '!Set:' + t(Array.from(e.values())),
    deserialize: (e, t) => new Set(t(e.slice(5)))
  },
  {
    is: e => typeof e == 'string' && e.startsWith('!'),
    match: e => e.startsWith('!'),
    serialize: e => '!' + e,
    deserialize: e => e.slice(1)
  }
];
function Y(e) {
  const t = JSON.parse(e);
  return he(t);
}
function he(e) {
  return typeof e == 'string'
    ? at(e)
    : (typeof e == 'object' &&
        e !== null &&
        Object.entries(e).forEach(([t, n]) => {
          e[t] = he(n);
        }),
      e);
}
function at(e) {
  for (const { match: t, deserialize: n } of ot) if (t(e)) return n(e, Y);
  return e;
}
function lt(e) {
  e.forEach(t => {
    Object.entries(t.configElements).forEach(([n, r]) => {
      ct(r), n === 'route' && ut(r);
    });
  });
}
function ct(e) {
  const { configValueSerialized: t } = e;
  t !== void 0 && (e.configValue = Y(t));
}
function ut(e) {
  s(f(e, 'configValue'));
  const { configValue: t } = e,
    n = typeof t;
  v(
    n === 'string' || C(t),
    `${e.configDefinedAt} has an invalid type '${n}': it should be a string or a function instead, see https://vite-plugin-ssr.com/route`
  );
}
function ft(e) {
  s(f(e, 'isGeneratedFile')),
    s(e.isGeneratedFile !== !1, 'vite-plugin-ssr was re-installed(/re-built). Restart your app.'),
    s(e.isGeneratedFile === !0, `\`isGeneratedFile === ${e.isGeneratedFile}\``),
    s(f(e, 'pageFilesLazy', 'object')),
    s(f(e, 'pageFilesEager', 'object')),
    s(f(e, 'pageFilesExportNamesLazy', 'object')),
    s(f(e, 'pageFilesExportNamesEager', 'object')),
    s(f(e.pageFilesLazy, '.page')),
    s(f(e.pageFilesLazy, '.page.client') || f(e.pageFilesLazy, '.page.server')),
    s(f(e, 'pageFilesList', 'string[]')),
    s(f(e, 'pageConfigs')),
    s(f(e, 'pageConfigGlobal'));
  const { pageConfigs: t, pageConfigGlobal: n } = e;
  it(t), lt(t), st(n);
  const r = {};
  j(e.pageFilesLazy).forEach(({ filePath: o, pageFile: a, globValue: l }) => {
    var c;
    a = r[o] = (c = r[o]) !== null && c !== void 0 ? c : a;
    const u = l;
    Z(u),
      (a.loadFile = async () => {
        'fileExports' in a || ((a.fileExports = await u()), Ye(a));
      });
  }),
    j(e.pageFilesExportNamesLazy).forEach(({ filePath: o, pageFile: a, globValue: l }) => {
      var c;
      a = r[o] = (c = r[o]) !== null && c !== void 0 ? c : a;
      const u = l;
      Z(u),
        (a.loadExportNames = async () => {
          if (!('exportNames' in a)) {
            const g = await u();
            v(
              'exportNames' in g,
              'You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3'
            ),
              s(f(g, 'exportNames', 'string[]'), a.filePath),
              (a.exportNames = g.exportNames);
          }
        });
    }),
    j(e.pageFilesEager).forEach(({ filePath: o, pageFile: a, globValue: l }) => {
      var c;
      a = r[o] = (c = r[o]) !== null && c !== void 0 ? c : a;
      const u = l;
      s(b(u)), (a.fileExports = u);
    }),
    j(e.pageFilesExportNamesEager).forEach(({ filePath: o, pageFile: a, globValue: l }) => {
      var c;
      a = r[o] = (c = r[o]) !== null && c !== void 0 ? c : a;
      const u = l;
      s(b(u)), s(f(u, 'exportNames', 'string[]'), a.filePath), (a.exportNames = u.exportNames);
    }),
    e.pageFilesList.forEach(o => {
      var a;
      r[o] = (a = r[o]) !== null && a !== void 0 ? a : de(o);
    });
  const i = Object.values(r);
  return (
    i.forEach(({ filePath: o }) => {
      s(!o.includes('\\'));
    }),
    { pageFiles: i, pageConfigs: t, pageConfigGlobal: n }
  );
}
function j(e) {
  const t = [];
  return (
    Object.entries(e).forEach(([n, r]) => {
      s(tt.includes(n)),
        s(b(r)),
        Object.entries(r).forEach(([i, o]) => {
          const a = de(i);
          s(a.fileType === n), t.push({ filePath: i, pageFile: a, globValue: o });
        });
    }),
    t
  );
}
function Z(e) {
  s(C(e));
}
const R = T('setPageFiles.ts', {});
function Ht(e) {
  const { pageFiles: t, pageConfigs: n, pageConfigGlobal: r } = ft(e);
  (R.pageFilesAll = t), (R.pageConfigs = n), (R.pageConfigGlobal = r);
}
async function Gt(e, t) {
  e
    ? (s(!R.pageFilesGetter), s(t === void 0))
    : (s(R.pageFilesGetter),
      s(typeof t == 'boolean'),
      (!R.pageFilesAll || !t) && (await R.pageFilesGetter()));
  const { pageFilesAll: n, pageConfigs: r, pageConfigGlobal: i } = R;
  s(n && r && i);
  const o = dt(n, r);
  return { pageFilesAll: n, allPageIds: o, pageConfigs: r, pageConfigGlobal: i };
}
function dt(e, t) {
  const n = e.filter(({ isDefaultPageFile: o }) => !o).map(({ pageId: o }) => o),
    r = B(n),
    i = t.map(o => o.pageId);
  return [...r, ...i];
}
function gt(e, t) {
  return pe(e, t, !0);
}
function Mt(e, t) {
  return pe(e, t, !1);
}
function pe(e, t, n) {
  const r = n ? 'CLIENT_ONLY' : 'SERVER_ONLY',
    i = e.filter(h => h.isRelevant(t) && h.fileType !== '.page.route').sort(ht(n, t)),
    o = h => {
      const m = i.filter(y => y.pageId === t && y.isEnv(h ? 'CLIENT_AND_SERVER' : r));
      v(
        m.length <= 1,
        `Merge the following files into a single file: ${m.map(y => y.filePath).join(' ')}`
      );
      const _ = m[0];
      return s(_ === void 0 || !_.isDefaultPageFile), _;
    },
    a = o(!1),
    l = o(!0),
    c = h => i.filter(m => m.isRendererPageFile && m.isEnv(h ? 'CLIENT_AND_SERVER' : r))[0],
    u = c(!1),
    g = c(!0),
    d = i.filter(
      h =>
        h.isDefaultPageFile && !h.isRendererPageFile && (h.isEnv(r) || h.isEnv('CLIENT_AND_SERVER'))
    );
  return [a, l, ...d, u, g].filter(Ve);
}
function ht(e, t) {
  const n = e ? 'CLIENT_ONLY' : 'SERVER_ONLY',
    r = -1,
    i = 1,
    o = 0;
  return (a, l) => {
    if (!a.isDefaultPageFile && l.isDefaultPageFile) return r;
    if (!l.isDefaultPageFile && a.isDefaultPageFile) return i;
    {
      const c = a.isRendererPageFile,
        u = l.isRendererPageFile;
      if (!c && u) return r;
      if (!u && c) return i;
      s(c === u);
    }
    {
      const c = ee(t, a.filePath),
        u = ee(t, l.filePath);
      if (c < u) return r;
      if (u < c) return i;
      s(c === u);
    }
    {
      if (a.isEnv(n) && l.isEnv('CLIENT_AND_SERVER')) return r;
      if (l.isEnv(n) && a.isEnv('CLIENT_AND_SERVER')) return i;
    }
    return o;
  };
}
function ee(e, t) {
  $(e), $(t);
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; n++);
  const r = e.slice(n),
    i = t.slice(n),
    o = r.split('/').length,
    a = i.split('/').length;
  return o + a;
}
function pt() {
  s(M());
}
function mt() {
  pt();
}
function te(e) {
  const t = e / 1e3;
  if (t < 120) {
    const n = ne(t);
    return `${n} second${re(n)}`;
  }
  {
    const n = t / 60,
      r = ne(n);
    return `${r} minute${re(r)}`;
  }
}
function ne(e) {
  let t = e.toFixed(1);
  return t.endsWith('.0') && (t = t.slice(0, -2)), t;
}
function re(e) {
  return e === '1' ? '' : 's';
}
const vt = T('utils/executeHook.ts', { userHookErrors: new Map() });
function yt(e, t, n) {
  const { timeoutErr: r, timeoutWarn: i } = Et(t);
  let o, a;
  const l = new Promise((d, p) => {
      (o = h => {
        c(), d(h);
      }),
        (a = h => {
          c(), p(h);
        });
    }),
    c = () => {
      clearTimeout(u), clearTimeout(g);
    },
    u = setTimeout(() => {
      P(!1, `The ${t}() hook defined by ${n} is taking more than ${te(i)}`, { onlyOnce: !1 });
    }, i),
    g = setTimeout(() => {
      const d = $e(`Hook timeout: the ${t}() hook defined by ${n} didn't finish after ${te(r)}`);
      a(d);
    }, r);
  return (
    (async () => {
      try {
        const d = await e();
        o(d);
      } catch (d) {
        b(d) && vt.userHookErrors.set(d, { hookName: t, hookFilePath: n }), a(d);
      }
    })(),
    l
  );
}
function Et(e) {
  return e === 'onBeforeRoute'
    ? { timeoutErr: 5 * 1e3, timeoutWarn: 1 * 1e3 }
    : e === 'onBeforePrerender'
    ? { timeoutErr: 10 * 60 * 1e3, timeoutWarn: 30 * 1e3 }
    : { timeoutErr: 40 * 1e3, timeoutWarn: 4 * 1e3 };
}
function Jt(e) {
  const t = window.location.href,
    { searchOriginal: n, hashOriginal: r, pathname: i } = Ie(t, '/');
  let o;
  return (
    e != null && e.withoutHash ? (o = `${i}${n || ''}`) : (o = `${i}${n || ''}${r || ''}`),
    s(o.startsWith('/')),
    o
  );
}
mt();
function Yt() {
  const e = 'vite-plugin-ssr_pageContext',
    t = document.getElementById(e);
  v(
    t,
    `The element #${e} (which vite-plugin-ssr automatically injects into the HTML) is missing from the DOM. This may happen if your HTML is malformed. Make sure your HTML isn't malformed, and make sure you don't remove #${e} from the HTML nor from the DOM.`
  );
  const n = t.textContent;
  s(n);
  const r = Y(n);
  return s(f(r, '_pageId', 'string')), J(r, { _hasPageContextFromServer: !0 }), r;
}
function z(e, t) {
  if (!(t in e.exports)) return null;
  const n = e.exports[t],
    r = e.exportsAll[t][0];
  s(r.exportValue === n);
  const i = r.exportSource;
  return (
    s(i),
    s(!t.endsWith(')')),
    v(C(n), `hook ${t}() defined by ${i} should be a function`),
    { hookFn: n, hookName: t, hookFilePath: i }
  );
}
function qt(e, t) {
  z(e, t);
}
function wt(e) {
  const t = Object.entries(e);
  for (const n in e) delete e[n];
  t.sort(([n], [r]) => ze(n, r)).forEach(([n, r]) => {
    e[n] = r;
  });
}
function bt(e) {
  _t(e), Rt(e);
}
function _t(e) {
  et(e._pageId, e._pageConfigs) && s(f(e, 'is404', 'boolean'));
}
function Rt(e) {
  if (e.is404 === void 0 || e.is404 === null) return;
  const t = e.pageProps || {};
  if (!b(t)) {
    P(!1, 'pageContext.pageProps should be an object', { showStackTrace: !0, onlyOnce: !0 });
    return;
  }
  (t.is404 = t.is404 || e.is404), (e.pageProps = t);
}
const St = 'not-serializable',
  k = T('getPageContextProxyForUser.ts', {});
function Pt(e) {
  return (
    s([!0, !1].includes(e._hasPageContextFromServer)),
    s([!0, !1].includes(e._hasPageContextFromClient)),
    new Proxy(e, {
      get(t, n) {
        const r = e[n],
          i = JSON.stringify(n);
        return (
          v(
            r !== St,
            `pageContext[${i}] couldn't be serialized and, therefore, is missing on the client-side. Check the server logs for more information.`
          ),
          $t(
            e,
            n,
            `pageContext[${i}] isn't available on the client-side because ${i} is missing in passToClient, see https://vite-plugin-ssr.com/passToClient`
          ),
          r
        );
      }
    })
  );
}
function $t(e, t, n) {
  k.prev === t ||
    k.prev === '__v_raw' ||
    (Ot(t),
    !(t in e) &&
      (Lt(t) || (e._hasPageContextFromServer && !e._hasPageContextFromClient && v(!1, n))));
}
const Tt = ['then', 'toJSON'];
function Lt(e) {
  return !!(Tt.includes(e) || typeof e == 'symbol' || typeof e != 'string' || e.startsWith('__v_'));
}
function Ot(e) {
  (k.prev = e),
    window.setTimeout(() => {
      k.prev = void 0;
    }, 0);
}
function Ft(e, t) {
  if (t) {
    const i = e;
    s([!0, !1].includes(i.isHydration)), s([!0, !1, null].includes(i.isBackwardNavigation));
  } else {
    const i = e;
    s(i.isHydration === !0), s(i.isBackwardNavigation === null);
  }
  s('config' in e),
    s('configEntries' in e),
    s('exports' in e),
    s('exportsAll' in e),
    s('pageExports' in e),
    s(b(e.pageExports));
  const n = e.exports.Page;
  J(e, { Page: n }), jt(e), wt(e);
  const r = Pt(e);
  return bt(e), r;
}
function jt(e) {
  Object.entries(e).forEach(([t, n]) => {
    delete e[t], (e[t] = n);
  });
}
function It(e, t) {
  var n;
  const r = e.filter(o => o.pageId === t);
  return s(r.length <= 1), (n = r[0]) !== null && n !== void 0 ? n : null;
}
async function xt(e, t) {
  const n = {};
  return (
    (!t && 'configValues' in e) ||
      ((await e.loadCodeFiles()).forEach(i => {
        const { configName: o, codeFilePath: a } = i;
        let l;
        if (i.isPlusFile) {
          const { codeFileExports: c } = i;
          o !== 'client' && He(c, a),
            Object.entries(c).forEach(([u, g]) => {
              const d = u !== 'default',
                p = d ? u : i.configName,
                h = g;
              if (((n[p] = h), d)) {
                const m = e.configElements[i.configName];
                s(m),
                  (e.configElements[p] = {
                    configValue: h,
                    codeFileExport: u,
                    codeFilePath: a,
                    configDefinedByFile: a,
                    configDefinedAt: `${a} > export { ${u} }`,
                    configEnv: m.configEnv,
                    plusConfigFilePath: null
                  });
              }
            });
        } else (l = i.codeFileExportValue), (n[o] = l);
      }),
      Object.entries(e.configElements).map(([i, o]) => {
        o.codeFilePath || (n[i] = o.configValue);
      }),
      J(e, { configValues: n })),
    e
  );
}
const me = '__whileFetchingAssets';
async function Kt(e, t, n) {
  const r = gt(e, n),
    i = It(t, n);
  let o;
  try {
    o = (
      await Promise.all([
        i && xt(i, !1),
        ...r.map(h => {
          var m;
          return (m = h.loadFile) === null || m === void 0 ? void 0 : m.call(h);
        })
      ])
    )[0];
  } catch (p) {
    throw (kt(p) && Object.assign(p, { [me]: !0 }), p);
  }
  const { config: a, configEntries: l, exports: c, exportsAll: u, pageExports: g } = Ke(r, o);
  return {
    config: a,
    configEntries: l,
    exports: c,
    exportsAll: u,
    pageExports: g,
    _pageFilesLoaded: r
  };
}
function Xt(e) {
  return e ? e[me] === !0 : !1;
}
function kt(e) {
  return e instanceof Error
    ? [
        'Failed to fetch dynamically imported module',
        'error loading dynamically imported module',
        'Importing a module script failed',
        'error resolving module specifier',
        'failed to resolve module'
      ].some(n => e.message.toLowerCase().includes(n.toLowerCase()))
    : !1;
}
async function Qt(e, t) {
  const n = Ft(e, t);
  let r = null,
    i;
  (r = z(e, 'render')), (i = 'render');
  {
    const l = z(e, 'onRenderClient');
    l && ((r = l), (i = 'onRenderClient'));
  }
  if (!r) {
    const l = Wt(e);
    if (e._pageConfigs.length > 0)
      v(
        !1,
        `No onRenderClient() hook defined for URL '${l}', but it's needed, see https://vite-plugin-ssr.com/onRenderClient`
      );
    else {
      const c = e._pageFilesLoaded.filter(g => g.fileType === '.page.client');
      let u;
      c.length === 0
        ? (u = 'No file `*.page.client.*` found for URL ' + l)
        : (u =
            'One of the following files should export a `render()` hook: ' +
            c.map(g => g.filePath).join(' ')),
        v(!1, u);
    }
  }
  s(r);
  const o = r.hookFn;
  s(i);
  const a = await yt(() => o(n), i, r.hookFilePath);
  v(a === void 0, `The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`);
}
function Wt(e) {
  var t;
  let n;
  try {
    n = (t = e.urlPathname) !== null && t !== void 0 ? t : e.urlOriginal;
  } catch {}
  return (n = n != null ? n : window.location.href), n;
}
export {
  Ut as A,
  Ft as B,
  Y as C,
  $e as D,
  Gt as E,
  Ae as F,
  gt as G,
  It as H,
  ce as I,
  Te as J,
  Xt as K,
  qt as L,
  Qt as M,
  At as N,
  zt as O,
  Ct as P,
  pt as a,
  Nt as b,
  b as c,
  Jt as d,
  Mt as e,
  s as f,
  T as g,
  M as h,
  C as i,
  P as j,
  v as k,
  K as l,
  De as m,
  Bt as n,
  f as o,
  Ie as p,
  Vt as q,
  J as r,
  Ht as s,
  x as t,
  A as u,
  z as v,
  yt as w,
  Dt as x,
  Yt as y,
  Kt as z
};
