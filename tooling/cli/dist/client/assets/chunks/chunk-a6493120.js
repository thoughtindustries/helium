var Ke = Object.defineProperty;
var et = (t, e, r) =>
  e in t ? Ke(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r);
var te = (t, e, r) => (et(t, typeof e != 'symbol' ? e + '' : e, r), r);
import { u as tt, v as rt, D as st, L as pe, g as M, a as Z } from './chunk-8d1d4039.js';
import { b as nt, r as $, j as n, F as ie, a as I, c as me, R as xe } from './chunk-5011acf0.js';
import {
  b as Ce,
  D as it,
  g as at,
  B as ot,
  t as ye,
  s as ut,
  y as lt,
  r as ke,
  A as Pe,
  _ as ve,
  C as we
} from './chunk-d9a61b28.js';
import {
  m as Te,
  N as ce,
  a as Oe,
  d as ct,
  e as dt,
  f as ht,
  I as ft,
  R as pt,
  k as mt,
  j as gt,
  l as yt
} from './chunk-16adb97c.js';
var Ne = !1,
  vt = 'useSyncExternalStore',
  bt = nt[vt],
  $t =
    bt ||
    function (t, e, r) {
      var s = e();
      globalThis.__DEV__ !== !1 &&
        !Ne &&
        s !== e() &&
        ((Ne = !0), globalThis.__DEV__ !== !1 && Ce.error(56));
      var a = $.exports.useState({ inst: { value: s, getSnapshot: e } }),
        o = a[0].inst,
        i = a[1];
      return (
        it
          ? $.exports.useLayoutEffect(
              function () {
                Object.assign(o, { value: s, getSnapshot: e }), be(o) && i({ inst: o });
              },
              [t, s, e]
            )
          : Object.assign(o, { value: s, getSnapshot: e }),
        $.exports.useEffect(
          function () {
            return (
              be(o) && i({ inst: o }),
              t(function () {
                be(o) && i({ inst: o });
              })
            );
          },
          [t]
        ),
        s
      );
    };
function be(t) {
  var e = t.value,
    r = t.getSnapshot;
  try {
    return e !== r();
  } catch {
    return !0;
  }
}
var Ct = Object.prototype.hasOwnProperty;
function H(t, e) {
  return e === void 0 && (e = Object.create(null)), Dt(tt(e.client), t).useQuery(e);
}
function Dt(t, e) {
  var r = $.exports.useRef();
  (!r.current || t !== r.current.client || e !== r.current.query) &&
    (r.current = new St(t, e, r.current));
  var s = r.current;
  return (
    (s.forceUpdateState = $.exports.useReducer(function (a) {
      return a + 1;
    }, 0)[1]),
    s
  );
}
var St = (function () {
  function t(e, r, s) {
    var a = this;
    (this.client = e),
      (this.query = r),
      (this.forceUpdate = function () {
        return a.forceUpdateState();
      }),
      (this.ssrDisabledResult = Te({
        loading: !0,
        data: void 0,
        error: void 0,
        networkStatus: ce.loading
      })),
      (this.skipStandbyResult = Te({
        loading: !1,
        data: void 0,
        error: void 0,
        networkStatus: ce.ready
      })),
      (this.toQueryResultCache = new (at ? WeakMap : Map)()),
      rt(r, st.Query);
    var o = s && s.result,
      i = o && o.data;
    i && (this.previousData = i);
  }
  return (
    (t.prototype.forceUpdateState = function () {
      globalThis.__DEV__ !== !1 && Ce.warn(48);
    }),
    (t.prototype.executeQuery = function (e) {
      var r = this,
        s;
      e.query && Object.assign(this, { query: e.query }),
        (this.watchQueryOptions = this.createWatchQueryOptions((this.queryHookOptions = e)));
      var a = this.observable.reobserveAsConcast(this.getObsQueryOptions());
      return (
        (this.previousData =
          ((s = this.result) === null || s === void 0 ? void 0 : s.data) || this.previousData),
        (this.result = void 0),
        this.forceUpdate(),
        new Promise(function (o) {
          var i;
          a.subscribe({
            next: function (u) {
              i = u;
            },
            error: function () {
              o(r.toQueryResult(r.observable.getCurrentResult()));
            },
            complete: function () {
              o(r.toQueryResult(i));
            }
          });
        })
      );
    }),
    (t.prototype.useQuery = function (e) {
      var r = this;
      (this.renderPromises = $.exports.useContext(ot()).renderPromises), this.useOptions(e);
      var s = this.useObservableQuery(),
        a = $t(
          $.exports.useCallback(
            function (o) {
              if (r.renderPromises) return function () {};
              r.forceUpdate = o;
              var i = function () {
                  var d = r.result,
                    C = s.getCurrentResult();
                  (d &&
                    d.loading === C.loading &&
                    d.networkStatus === C.networkStatus &&
                    ye(d.data, C.data)) ||
                    r.setResult(C);
                },
                u = function (d) {
                  var C = s.last;
                  c.unsubscribe();
                  try {
                    s.resetLastResults(), (c = s.subscribe(i, u));
                  } finally {
                    s.last = C;
                  }
                  if (!Ct.call(d, 'graphQLErrors')) throw d;
                  var y = r.result;
                  (!y || (y && y.loading) || !ye(d, y.error)) &&
                    r.setResult({
                      data: y && y.data,
                      error: d,
                      loading: !1,
                      networkStatus: ce.error
                    });
                },
                c = s.subscribe(i, u);
              return function () {
                setTimeout(function () {
                  return c.unsubscribe();
                }),
                  (r.forceUpdate = function () {
                    return r.forceUpdateState();
                  });
              };
            },
            [s, this.renderPromises, this.client.disableNetworkFetches]
          ),
          function () {
            return r.getCurrentResult();
          },
          function () {
            return r.getCurrentResult();
          }
        );
      return this.unsafeHandlePartialRefetch(a), this.toQueryResult(a);
    }),
    (t.prototype.useOptions = function (e) {
      var r,
        s = this.createWatchQueryOptions((this.queryHookOptions = e)),
        a = this.watchQueryOptions;
      ye(s, a) ||
        ((this.watchQueryOptions = s),
        a &&
          this.observable &&
          (this.observable.reobserve(this.getObsQueryOptions()),
          (this.previousData =
            ((r = this.result) === null || r === void 0 ? void 0 : r.data) || this.previousData),
          (this.result = void 0))),
        (this.onCompleted = e.onCompleted || t.prototype.onCompleted),
        (this.onError = e.onError || t.prototype.onError),
        (this.renderPromises || this.client.disableNetworkFetches) &&
        this.queryHookOptions.ssr === !1 &&
        !this.queryHookOptions.skip
          ? (this.result = this.ssrDisabledResult)
          : this.queryHookOptions.skip || this.watchQueryOptions.fetchPolicy === 'standby'
          ? (this.result = this.skipStandbyResult)
          : (this.result === this.ssrDisabledResult || this.result === this.skipStandbyResult) &&
            (this.result = void 0);
    }),
    (t.prototype.getObsQueryOptions = function () {
      var e = [],
        r = this.client.defaultOptions.watchQuery;
      return (
        r && e.push(r),
        this.queryHookOptions.defaultOptions && e.push(this.queryHookOptions.defaultOptions),
        e.push(ut(this.observable && this.observable.options, this.watchQueryOptions)),
        e.reduce(lt)
      );
    }),
    (t.prototype.createWatchQueryOptions = function (e) {
      var r;
      e === void 0 && (e = {});
      var s = e.skip;
      e.ssr, e.onCompleted, e.onError, e.defaultOptions;
      var a = ke(e, ['skip', 'ssr', 'onCompleted', 'onError', 'defaultOptions']),
        o = Object.assign(a, { query: this.query });
      if (
        (this.renderPromises &&
          (o.fetchPolicy === 'network-only' || o.fetchPolicy === 'cache-and-network') &&
          (o.fetchPolicy = 'cache-first'),
        o.variables || (o.variables = {}),
        s)
      ) {
        var i = o.fetchPolicy,
          u = i === void 0 ? this.getDefaultFetchPolicy() : i,
          c = o.initialFetchPolicy,
          d = c === void 0 ? u : c;
        Object.assign(o, { initialFetchPolicy: d, fetchPolicy: 'standby' });
      } else
        o.fetchPolicy ||
          (o.fetchPolicy =
            ((r = this.observable) === null || r === void 0
              ? void 0
              : r.options.initialFetchPolicy) || this.getDefaultFetchPolicy());
      return o;
    }),
    (t.prototype.getDefaultFetchPolicy = function () {
      var e, r;
      return (
        ((e = this.queryHookOptions.defaultOptions) === null || e === void 0
          ? void 0
          : e.fetchPolicy) ||
        ((r = this.client.defaultOptions.watchQuery) === null || r === void 0
          ? void 0
          : r.fetchPolicy) ||
        'cache-first'
      );
    }),
    (t.prototype.onCompleted = function (e) {}),
    (t.prototype.onError = function (e) {}),
    (t.prototype.useObservableQuery = function () {
      var e = (this.observable =
        (this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions)) ||
        this.observable ||
        this.client.watchQuery(this.getObsQueryOptions()));
      this.obsQueryFields = $.exports.useMemo(
        function () {
          return {
            refetch: e.refetch.bind(e),
            reobserve: e.reobserve.bind(e),
            fetchMore: e.fetchMore.bind(e),
            updateQuery: e.updateQuery.bind(e),
            startPolling: e.startPolling.bind(e),
            stopPolling: e.stopPolling.bind(e),
            subscribeToMore: e.subscribeToMore.bind(e)
          };
        },
        [e]
      );
      var r = !(this.queryHookOptions.ssr === !1 || this.queryHookOptions.skip);
      return (
        this.renderPromises &&
          r &&
          (this.renderPromises.registerSSRObservable(e),
          e.getCurrentResult().loading && this.renderPromises.addObservableQueryPromise(e)),
        e
      );
    }),
    (t.prototype.setResult = function (e) {
      var r = this.result;
      r && r.data && (this.previousData = r.data),
        (this.result = e),
        this.forceUpdate(),
        this.handleErrorOrCompleted(e, r);
    }),
    (t.prototype.handleErrorOrCompleted = function (e, r) {
      var s = this;
      if (!e.loading) {
        var a = this.toApolloError(e);
        Promise.resolve()
          .then(function () {
            a
              ? s.onError(a)
              : e.data &&
                (r == null ? void 0 : r.networkStatus) !== e.networkStatus &&
                e.networkStatus === ce.ready &&
                s.onCompleted(e.data);
          })
          .catch(function (o) {
            globalThis.__DEV__ !== !1 && Ce.warn(o);
          });
      }
    }),
    (t.prototype.toApolloError = function (e) {
      return Oe(e.errors) ? new Pe({ graphQLErrors: e.errors }) : e.error;
    }),
    (t.prototype.getCurrentResult = function () {
      return (
        this.result ||
          this.handleErrorOrCompleted((this.result = this.observable.getCurrentResult())),
        this.result
      );
    }),
    (t.prototype.toQueryResult = function (e) {
      var r = this.toQueryResultCache.get(e);
      if (r) return r;
      var s = e.data;
      e.partial;
      var a = ke(e, ['data', 'partial']);
      return (
        this.toQueryResultCache.set(
          e,
          (r = ve(ve(ve({ data: s }, a), this.obsQueryFields), {
            client: this.client,
            observable: this.observable,
            variables: this.observable.variables,
            called: !this.queryHookOptions.skip,
            previousData: this.previousData
          }))
        ),
        !r.error && Oe(e.errors) && (r.error = new Pe({ graphQLErrors: e.errors })),
        r
      );
    }),
    (t.prototype.unsafeHandlePartialRefetch = function (e) {
      e.partial &&
        this.queryHookOptions.partialRefetch &&
        !e.loading &&
        (!e.data || Object.keys(e.data).length === 0) &&
        this.observable.options.fetchPolicy !== 'cache-only' &&
        (Object.assign(e, { loading: !0, networkStatus: ce.refetch }), this.observable.refetch());
    }),
    t
  );
})();
function xt() {
  if (console && console.warn) {
    for (var t, e = arguments.length, r = new Array(e), s = 0; s < e; s++) r[s] = arguments[s];
    typeof r[0] == 'string' && (r[0] = 'react-i18next:: '.concat(r[0])),
      (t = console).warn.apply(t, r);
  }
}
var Ee = {};
function De() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
  (typeof e[0] == 'string' && Ee[e[0]]) ||
    (typeof e[0] == 'string' && (Ee[e[0]] = new Date()), xt.apply(void 0, e));
}
function Ue(t, e, r) {
  t.loadNamespaces(e, function () {
    if (t.isInitialized) r();
    else {
      var s = function a() {
        setTimeout(function () {
          t.off('initialized', a);
        }, 0),
          r();
      };
      t.on('initialized', s);
    }
  });
}
function wt(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    s = e.languages[0],
    a = e.options ? e.options.fallbackLng : !1,
    o = e.languages[e.languages.length - 1];
  if (s.toLowerCase() === 'cimode') return !0;
  var i = function (c, d) {
    var C = e.services.backendConnector.state[''.concat(c, '|').concat(d)];
    return C === -1 || C === 2;
  };
  return r.bindI18n &&
    r.bindI18n.indexOf('languageChanging') > -1 &&
    e.services.backendConnector.backend &&
    e.isLanguageChangingTo &&
    !i(e.isLanguageChangingTo, t)
    ? !1
    : !!(
        e.hasResourceBundle(s, t) ||
        !e.services.backendConnector.backend ||
        (e.options.resources && !e.options.partialBundledLanguages) ||
        (i(s, t) && (!a || i(o, t)))
      );
}
function kt(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!e.languages || !e.languages.length)
    return De('i18n.languages were undefined or empty', e.languages), !0;
  var s = e.options.ignoreJSONStructure !== void 0;
  return s
    ? e.hasLoadedNamespace(t, {
        precheck: function (o, i) {
          if (
            r.bindI18n &&
            r.bindI18n.indexOf('languageChanging') > -1 &&
            o.services.backendConnector.backend &&
            o.isLanguageChangingTo &&
            !i(o.isLanguageChangingTo, t)
          )
            return !1;
        }
      })
    : wt(t, e, r);
}
function Pt(t, e) {
  var r = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator'];
  if (r != null) {
    var s,
      a,
      o,
      i,
      u = [],
      c = !0,
      d = !1;
    try {
      if (((o = (r = r.call(t)).next), e === 0)) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (s = o.call(r)).done) && (u.push(s.value), u.length !== e); c = !0);
    } catch (C) {
      (d = !0), (a = C);
    } finally {
      try {
        if (!c && r.return != null && ((i = r.return()), Object(i) !== i)) return;
      } finally {
        if (d) throw a;
      }
    }
    return u;
  }
}
function Tt(t, e) {
  return ct(t) || Pt(t, e) || dt(t, e) || ht();
}
function Le(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e &&
      (s = s.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, s);
  }
  return r;
}
function $e(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Le(Object(r), !0).forEach(function (s) {
          gt(t, s, r[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : Le(Object(r)).forEach(function (s) {
          Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(r, s));
        });
  }
  return t;
}
var Ot = function (e, r) {
  var s = $.exports.useRef();
  return (
    $.exports.useEffect(
      function () {
        s.current = r ? s.current : e;
      },
      [e, r]
    ),
    s.current
  );
};
function Nt(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = e.i18n,
    s = $.exports.useContext(ft) || {},
    a = s.i18n,
    o = s.defaultNS,
    i = r || a || yt();
  if ((i && !i.reportNamespaces && (i.reportNamespaces = new pt()), !i)) {
    De('You will need to pass in an i18next instance by using initReactI18next');
    var u = function (v) {
        return Array.isArray(v) ? v[v.length - 1] : v;
      },
      c = [u, {}, !1];
    return (c.t = u), (c.i18n = {}), (c.ready = !1), c;
  }
  i.options.react &&
    i.options.react.wait !== void 0 &&
    De(
      'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
    );
  var d = $e($e($e({}, mt()), i.options.react), e),
    C = d.useSuspense,
    y = d.keyPrefix,
    m = t || o || (i.options && i.options.defaultNS);
  (m = typeof m == 'string' ? [m] : m || ['translation']),
    i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(m);
  var D =
    (i.isInitialized || i.initializedStoreOnce) &&
    m.every(function (w) {
      return kt(w, i, d);
    });
  function x() {
    return i.getFixedT(null, d.nsMode === 'fallback' ? m : m[0], y);
  }
  var l = $.exports.useState(x),
    S = Tt(l, 2),
    U = S[0],
    N = S[1],
    k = m.join(),
    R = Ot(k),
    E = $.exports.useRef(!0);
  $.exports.useEffect(
    function () {
      var w = d.bindI18n,
        v = d.bindI18nStore;
      (E.current = !0),
        !D &&
          !C &&
          Ue(i, m, function () {
            E.current && N(x);
          }),
        D && R && R !== k && E.current && N(x);
      function b() {
        E.current && N(x);
      }
      return (
        w && i && i.on(w, b),
        v && i && i.store.on(v, b),
        function () {
          (E.current = !1),
            w &&
              i &&
              w.split(' ').forEach(function (Q) {
                return i.off(Q, b);
              }),
            v &&
              i &&
              v.split(' ').forEach(function (Q) {
                return i.store.off(Q, b);
              });
        }
      );
    },
    [i, k]
  );
  var A = $.exports.useRef(!0);
  $.exports.useEffect(
    function () {
      E.current && !A.current && N(x), (A.current = !1);
    },
    [i, y]
  );
  var F = [U, i, D];
  if (((F.t = U), (F.i18n = i), (F.ready = D), D || (!D && !C))) return F;
  throw new Promise(function (w) {
    Ue(i, m, function () {
      w();
    });
  });
}
const $s = () =>
    n(ie, {
      children: I('div', {
        className: 'pt-2 pb-6',
        children: [
          n('div', {
            className: 'flex justify-center',
            children: n('div', {
              className: 'flex m-5 mx-auto',
              children: n(pe, { size: 'small' })
            })
          }),
          I('div', {
            className: 'flex text-slate-500 space-x-6 justify-center font-semibold',
            children: [
              n('a', { href: '/', children: 'Home' }),
              n('a', { href: '/catalog', children: 'Catalog' }),
              n('a', { href: '#', children: 'Help' })
            ]
          }),
          n('hr', { className: 'my-5' }),
          n('div', {
            className: 'flex justify-center text-slate-500 font-normal',
            children: '\xA9 2022, Astro Theme Powered by Thought Industries'
          })
        ]
      })
    }),
  Fe = n('svg', {
    width: '22',
    height: '22',
    viewBox: '0 0 22 22',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: n('path', {
      d: 'M1 1L21 21M1 21L21 1L1 21Z',
      stroke: '#6B7280',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  }),
  he = t => {
    const e = we(),
      { currentUser: r } = e;
    let s;
    t.size === 'large'
      ? (s = s = 'h-13 w-13')
      : t.size === 'small'
      ? (s = s = 'h-9 w-9')
      : (s = 'h-11 w-11');
    let a;
    if (r != null && r.asset)
      a = n('img', { src: r == null ? void 0 : r.asset, className: `${s} rounded-full` });
    else
      try {
        if ((r == null ? void 0 : r.firstName) && (r == null ? void 0 : r.lastName)) {
          const o =
            (r == null ? void 0 : r.firstName.split('')[0]) +
            (r == null ? void 0 : r.lastName.split('')[0]);
          a = n('div', {
            className: `${s} bg-slate-50 rounded-full font-bold`,
            children: n('div', { className: 'p-2.5', children: o })
          });
        }
      } catch (o) {
        a = o;
      }
    return n(ie, { children: a });
  };
function Et() {
  const [t, e] = $.exports.useState(!1);
  return n('nav', {
    className: 'w-full bg-white shadow py-4',
    children: I('div', {
      className: 'justify-between px-4 md:items-center md:flex',
      children: [
        n('div', {
          children: I('div', {
            className: 'flex items-center justify-between md:block',
            children: [
              n('div', { className: '', children: n(pe, { size: '' }) }),
              n('div', {
                className: 'md:hidden',
                children: n('div', {
                  className:
                    'p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border',
                  onClick: () => e(!t),
                  children: t
                    ? n('button', {
                        id: 'icon',
                        type: 'submit',
                        className: 'block h-9 w-9 md:hidden',
                        onClick: () => e(!t),
                        children: n('div', { children: Fe })
                      })
                    : n('button', {
                        id: 'icon',
                        type: 'submit',
                        className: 'block md:hidden',
                        onClick: () => e(!t),
                        children: n(he, { size: '' })
                      })
                })
              })
            ]
          })
        }),
        n('div', {
          className: `flex my-auto space-x-6 mx-auto md:block ${t ? 'block' : 'hidden'}`,
          children: I('ul', {
            className:
              'items-center justify-between space-y-3 pt-4 md:space-y-0 md:flex md:space-x-6 w-full',
            children: [
              n('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5',
                children: n('a', { href: '/', children: 'Home' })
              }),
              n('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                children: n('a', { href: '/catalog', children: 'Catalog' })
              }),
              n('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                children: n('a', { href: '/support', children: 'Help' })
              }),
              n('hr', {}),
              I('div', {
                className: 'flex',
                children: [
                  n(he, { size: '' }),
                  n('div', {
                    className: 'mx-3 my-auto',
                    children: n('button', {
                      className: 'hover:text-blue-700',
                      children: n('a', {
                        href: 'learn/account?tab=dashboard.account_profile',
                        children: 'My Profile'
                      })
                    })
                  })
                ]
              }),
              n('hr', {}),
              n('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5',
                children: n('a', {
                  href: 'learn/account?tab=dashboard.account',
                  children: 'Account'
                })
              }),
              n('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                children: n('a', { href: 'learn/transcript', children: 'Transcript' })
              }),
              n('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                children: n('a', { href: '/support', children: 'Support' })
              }),
              n('hr', {}),
              n('a', {
                href: '/learn/sign_out',
                children: n('div', {
                  className: 'text-center pt-5 text-sm text-blue-900 hover:text-blue-700',
                  children: 'Sign out'
                })
              }),
              n('hr', {})
            ]
          })
        }),
        n('div', {
          className: 'hidden md:block',
          children: n('button', {
            className:
              'hidden my-auto items-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:block',
            children: 'Sign in'
          })
        })
      ]
    })
  });
}
const Ut = n('svg', {
    width: '14',
    height: '8',
    viewBox: '0 0 14 8',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: n('path', {
      d: 'M12.8333 1L6.99996 6.83333L1.16663 1',
      stroke: '#6B7280',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  }),
  Lt = n('svg', {
    width: '14',
    height: '8',
    viewBox: '0 0 14 8',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: n('path', {
      d: 'M1.16666 7L6.99999 1.16667L12.8333 7',
      stroke: '#6B7280',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  });
function At() {
  const [t, e] = $.exports.useState(!1);
  return n('nav', {
    className: 'w-full bg-white shadow py-4',
    children: I('div', {
      className: 'flex flex-row',
      children: [
        n('div', {
          className: 'basis-1/4',
          children: n('div', { className: 'pl-2', children: n(pe, { size: '' }) })
        }),
        n('div', {
          className: `flex basis-1/2 md:block ${t ? 'block' : 'hidden'}`,
          children: I('ul', {
            className: 'flex justify-center items-center md:flex',
            children: [
              n('li', {
                className:
                  'flex justify-start md:hover:bg-white hover:bg-slate-100 rounded py-1.5 pr-4',
                children: n('a', { href: '/dashboard', children: 'Dashboard' })
              }),
              n('li', {
                className:
                  'flex justify-center md:hover:bg-white hover:bg-slate-100 rounded py-2 px-4',
                children: n('a', { href: '/catalog', children: 'Catalog' })
              }),
              n('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded py-2 pl-4',
                children: n('a', { href: '/support', children: 'Help' })
              }),
              n('hr', {})
            ]
          })
        }),
        n('div', {
          className: 'flex basis-1/4 justify-end',
          children: n('div', {
            className: '',
            children: n('button', {
              id: 'icon',
              type: 'submit',
              className: '',
              onClick: () => e(!t),
              children: I('div', {
                className: 'flex items-center space-x-3 mr-3',
                children: [
                  n(he, { size: '' }),
                  t ? I('div', { children: [Lt, ' '] }) : n('div', { children: Ut })
                ]
              })
            })
          })
        }),
        n('div', {
          className: `${
            t ? 'block' : 'hidden'
          } z-10 absolute right-0 p-5 mt-16 w-96 rounded-md shadow-lg bg-white`,
          children: n('div', {
            className: '',
            children: I('ul', {
              className: 'space-y-2',
              children: [
                I('div', {
                  className: 'flex py-5',
                  children: [
                    n(he, { size: 'small' }),
                    n('div', {
                      className: 'mx-3 my-auto',
                      children: n('button', {
                        className: 'hover:text-blue-700',
                        children: n('a', {
                          href: '/learn/account?tab=dashboard.account_profile',
                          children: 'My Profile'
                        })
                      })
                    })
                  ]
                }),
                n('hr', {}),
                n('a', {
                  href: '/learn/account?tab=dashboard.account',
                  children: n('li', {
                    className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-4 pb-2',
                    children: 'My Account'
                  })
                }),
                n('a', {
                  href: 'learn/transcript',
                  children: n('li', {
                    className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                    children: 'Transcript'
                  })
                }),
                n('a', {
                  href: '/support',
                  children: n('li', {
                    className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-2 pb-4',
                    children: 'Support'
                  })
                }),
                n('hr', {}),
                n('a', {
                  href: '/learn/sign_out',
                  children: n('div', {
                    className: 'text-center pt-5 text-sm text-blue-900 hover:text-blue-700',
                    children: 'Sign out'
                  })
                })
              ]
            })
          })
        })
      ]
    })
  });
}
const Mt = n('svg', {
  width: '18',
  height: '14',
  viewBox: '0 0 18 14',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  children: n('path', {
    d: 'M1 13H17M1 1H17H1ZM1 7H17H1Z',
    stroke: '#6B7280',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })
});
function Ft() {
  const [t, e] = $.exports.useState(!1);
  return n('nav', {
    className: 'w-full bg-white shadow py-4',
    children: I('div', {
      className: 'flex flex-row',
      children: [
        n('div', {
          className: 'basis-1/4',
          children: n('div', { className: 'pl-2', children: n(pe, { size: '' }) })
        }),
        n('div', {
          className: `hidden my-auto md:block basis-1/2 ${t ? 'block' : 'hidden'}`,
          children: I('ul', {
            className: 'items-center justify-center space-y-3 pt-4 md:pt-0 md:space-y-0 md:flex',
            children: [
              n('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded py-1.5 pr-4',
                children: n('a', { href: '/', children: 'Home' })
              }),
              n('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded py-2 px-4',
                children: n('a', { href: '/catalog', children: 'Catalog' })
              }),
              n('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded py-2 pl-4',
                children: n('a', { href: '/support', children: 'Help' })
              }),
              n('hr', {})
            ]
          })
        }),
        n('div', { className: 'basis-1/2 md:hidden' }),
        I('div', {
          className: 'flex basis-1/4 justify-end pr-3',
          children: [
            n('button', {
              className:
                'hidden md:flex justify-center w-24 my-auto items-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
              children: n('div', { children: 'Sign in' })
            }),
            n('div', {
              className:
                'text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden flex items-center space-x-3',
              onClick: () => e(!t),
              children: n('button', {
                type: 'submit',
                className: '',
                onClick: () => e(!t),
                children: t ? n('div', { children: Fe }) : n('div', { children: Mt })
              })
            })
          ]
        }),
        n('div', {
          className: `${
            t ? 'block' : 'hidden'
          } z-10 absolute right-0 p-5 mt-16 w-96 rounded-md shadow-lg bg-white md:hidden`,
          children: n('div', {
            className: `flex my-auto space-x-6 mx-auto md:block ${t ? 'block' : 'hidden'}`,
            children: I('ul', {
              className:
                'items-center justify-between space-y-3 pt-4 md:pt-0 md:space-y-0 md:flex md:space-x-6 w-full',
              children: [
                n('li', {
                  className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5',
                  children: n('a', { href: '/', children: 'Home' })
                }),
                n('li', {
                  className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                  children: n('a', { href: '/catalog', children: 'Catalog' })
                }),
                n('li', {
                  className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                  children: n('a', { href: '/support', children: 'Help' })
                }),
                n('hr', {}),
                n('button', {
                  className:
                    'md:hidden my-auto items-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded',
                  children: 'Sign in'
                })
              ]
            })
          })
        })
      ]
    })
  });
}
const Cs = () => {
    const t = we(),
      { currentUser: e } = t;
    let r;
    return (
      e
        ? (r = I(ie, {
            children: [
              n('div', { className: 'block md:hidden', children: n(Et, {}) }),
              n('div', { className: 'hidden md:block', children: n(At, {}) })
            ]
          }))
        : (r = n(Ft, {})),
      r
    );
  },
  Rt = () =>
    I('div', {
      className: 'flex items-center justify-center space-x-10',
      children: [
        n('div', {
          className: 'animate-ping w-5 h-5 bg-gray-700 rounded-full',
          style: { animationDelay: '-0.32s' }
        }),
        n('div', {
          className: 'animate-ping w-5 h-5 bg-gray-700 rounded-full',
          style: { animationDelay: '-0.16s' }
        }),
        n('div', { className: 'animate-ping w-5 h-5 bg-gray-700 rounded-full' })
      ]
    });
Rt.displayName = 'LoadingDots';
const ge = M`
  fragment ContentFragment on Content {
    alternativePricingType
    asset
    altDescriptionBody
    alternativePricingRef
    alternativePricingType
    authors
    authorsAndInstructors
    availabilityStatus
    bulkPurchasingEnabled
    canAddToQueue
    contentTypeAssetAspectRatio
    contentTypeLabel
    courseEndDate
    courseGracePeriodEnded
    courseGroup
    coursePresold
    courseStartDate
    createdAt
    currentUserMayReschedule
    currentUserUnmetCoursePrerequisites
    currentUserUnmetLearningPathPrerequisites
    customFields
    description
    displayCourse
    displayCourseSlug
    displayDate
    embeddedEnabled
    enrollmentCount
    expiresAt
    kind
    hasChildren
    hideCourseDescription
    id
    isActive
    language
    location {
      id
      name
      room
      address1
      address2
      city
      state
      zipCode
      country
      timeZone
    }
    meetingStartDate
    metaDescription
    metaTitle
    priceInCents
    publishDate
    rating
    ribbon {
      color
      contrastColor
      darkerColor
      label
      slug
    }
    seatsLimit
    sessionTitle
    status
    sku
    slug
    source
    suggestedRetailPriceInCents
    timeZone
    title
    updatedAt
    waitlistCount
    waitlistingEnabled
    waitlistingTriggered
  }
`,
  _t = M`
  fragment LocationFragment on Location {
    id
    name
    room
    address1
    address2
    city
    state
    zipCode
    country
    timeZone
  }
`,
  qt = M`
  fragment CatalogMetaFragment on CatalogMeta {
    aggregations {
      key
      label
      buckets {
        query
        value
        label
        description
        count
      }
    }
    contentTypeFilterEnabled
    contentTypes
    displayAuthorsEnabled
    displayBundle {
      id
      name
      slug
      priceInCents
      annualPriceInCents
    }
    displayStartDateEnabled
    displayDescriptionOnCalendar
    displayTypeCalendarEnabled
    displayTypeGridEnabled
    displayTypeListEnabled
    hasMore
    isCurated
    queryCustomFields
    resultsDisplayType
    selectedSortColumn
    selectedSortDirection
    sortCourseStartDateEnabled
    sortCreatedAtEnabled
    sortPublishDateEnabled
    sortRelevanceEnabled
    sortTitleEnabled
    sortUpdatedAtEnabled
    tokenLabel
    total
  }
`,
  It = {},
  zt = M`
  query CatalogContent(
    $sortColumn: SortColumn
    $sortDirection: SortDirection
    $resultsDisplayType: ContentItemDisplayType
    $page: Int!
    $token: String
    $labels: [String!]
    $values: [String!]
    $contentTypes: [String!]
    $query: String
  ) {
    CatalogContent(
      sortColumn: $sortColumn
      sortDirection: $sortDirection
      resultsDisplayType: $resultsDisplayType
      page: $page
      token: $token
      labels: $labels
      values: $values
      contentTypes: $contentTypes
      query: $query
    ) {
      contentItems {
        ...ContentFragment
        location {
          ...LocationFragment
        }
      }
      meta {
        ...CatalogMetaFragment
      }
    }
  }
  ${ge}
  ${_t}
  ${qt}
`;
function Qt(t) {
  const e = { ...It, ...t };
  return H(zt, e);
}
M`
  query Catalog($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...ContentFragment
      }
    }
  }
  ${ge}
`;
M`
  query CourseGroupBySlug($slug: Slug!) {
    CourseGroupBySlug(slug: $slug) {
      asset
      description
      title
      rating
      ratingsCount
    }
  }
`;
M`
  query LearningPathBySlug($slug: Slug!) {
    LearningPathBySlug(slug: $slug) {
      name
      shortDescription
      asset
    }
  }
`;
const Yt = {},
  jt = M`
  query LanguagesQuery {
    Languages {
      id
      label
      code
      isCustom
      selectorLabel
    }
  }
`;
function Ds(t) {
  const e = { ...Yt, ...t };
  return H(jt, e);
}
M`
  query Contents($ids: [ID!]!) {
    QueryContents(ids: $ids) {
      ...ContentFragment
    }
  }
  ${ge}
`;
M`
  query RssItems($feedUrl: String!) {
    RssItems(feedUrl: $feedUrl) {
      title
      link
    }
  }
`;
M`
  query UserRecentContent($limit: Int) {
    UserRecentContent(limit: $limit) {
      ...ContentFragment
    }
  }
  ${ge}
`;
const Bt = {},
  Wt = M`
  query UserContentItems(
    $query: String
    $kind: [ContentKind!]
    $sortColumn: SortColumn
    $sortDirection: SortDirection
  ) {
    UserContentItems(
      query: $query
      kind: $kind
      sortColumn: $sortColumn
      sortDirection: $sortDirection
    ) {
      asset
      title
      sessionTitle
      kind
      id
      slug
      meetingStartDate
      contentTypeLabel
      availabilityStatus
      courseStartDate
      courseEndDate
      coursePresold
      description
      displayCourse
      displayCourseSlug
      displayDate
      courseGracePeriodEnded
      authors
      publishDate
      source
      expiresAt
      currentUserMayReschedule
      timeZone
      embeddedEnabled
      currentUserUnmetCoursePrerequisites
      currentUserUnmetLearningPathPrerequisites
      hasChildren
      hideCourseDescription
      isActive
      waitlistingEnabled
      waitlistingTriggered
    }
  }
`;
function Ss(t) {
  const e = { ...Bt, ...t };
  return H(Wt, e);
}
const Gt = {},
  Ht = M`
  query UserArchives {
    UserArchives {
      id
      user
      resource
      resourceType
      status
      archivedAt
      name
      reinstatable
      waitlistActive
    }
  }
`;
function xs(t) {
  const e = { ...Gt, ...t };
  return H(Ht, e);
}
const Vt = {},
  Jt = M`
  query UserWaitlist {
    UserWaitlist {
      id
      contentTypeLabel
      title
      kind
      slug
      displayCourse
      displayCourseSlug
    }
  }
`;
function ws(t) {
  const e = { ...Vt, ...t };
  return H(Jt, e);
}
const Zt = {},
  Xt = M`
  query UserBookmarks {
    UserBookmarks {
      id
      name
      defaultFolder
      bookmarkCount
    }
  }
`;
function ks(t) {
  const e = { ...Zt, ...t };
  return H(Xt, e);
}
const Kt = {},
  er = M`
  query UserCertificates($query: String, $includeExpiredCertificates: Boolean) {
    UserCertificates(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      id
      resourceId
      expirationDate
      isExpired
      externalResourceTitle
      url
      source
      contentItem {
        id
        asset
        courseEndDate
        courseStartDate
        coursePresold
        description
        kind
        slug
        availabilityStatus
        contentTypeLabel
        title
        timeZone
      }
    }
  }
`;
function Ps(t) {
  const e = { ...Kt, ...t };
  return H(er, e);
}
const tr = {},
  rr = M`
  query ContentGroups($query: String, $includeExpiredCertificates: Boolean) {
    UserContentGroups(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      kind
      count
    }
  }
`;
function Ts(t) {
  const e = { ...tr, ...t };
  return H(rr, e);
}
const sr = {},
  nr = M`
  query UserBookmarksByFolder($id: ID!) {
    UserBookmarksByFolder(id: $id) {
      id
      course {
        id
        title
        slug
        status
        courseGroup {
          id
          authors
          source
          asset
          kind
          contentType {
            label
          }
        }
      }
      topicId
      note
      createdAt
    }
  }
`;
function Os(t) {
  const e = { ...sr, ...t };
  return H(nr, e);
}
const ir = {},
  ar = M`
  query UserCourseCompletionProgress($id: ID!) {
    UserCourseCompletionProgress(id: $id) {
      type
      required
      completed
      percent
    }
  }
`;
function Ns(t) {
  const e = { ...ir, ...t };
  return H(ar, e);
}
M`
  query UserCourseProgress($id: ID!) {
    UserCourseProgress(id: $id) {
      totalViews
      totalTime
      percentComplete
    }
  }
`;
M`
  query UserCourseAwardCounts($courseId: ID!) {
    UserCourseAwardCounts(courseId: $courseId) {
      id
      label
      icon
      count
    }
  }
`;
M`
  query UserCourseCollaborations($courseId: ID!) {
    UserCourseCollaborations(courseId: $courseId)
  }
`;
const or = {},
  ur = M`
  query UserCertificateFields {
    UserCertificateFields {
      id
      type
      label
      awardTypeId
      awardType {
        id
        pluralLabel
      }
    }
  }
`;
function Es(t) {
  const e = { ...or, ...t };
  return H(ur, e);
}
var Re = (t => ((t.Membership = 'membership'), t))(Re || {}),
  ne = (t => ((t.Calendar = 'calendar'), (t.Grid = 'grid'), (t.List = 'list'), t))(ne || {}),
  _ = (t => (
    (t.Article = 'article'),
    (t.Bundle = 'bundle'),
    (t.Course = 'course'),
    (t.CourseGroup = 'courseGroup'),
    (t.DiscountGroup = 'discountGroup'),
    (t.InPersonEvent = 'inPersonEvent'),
    (t.InPersonEventCourse = 'inPersonEventCourse'),
    (t.LearningPath = 'learningPath'),
    (t.MicroCourse = 'microCourse'),
    (t.PickableGroup = 'pickableGroup'),
    (t.Product = 'product'),
    (t.Sellable = 'sellable'),
    (t.ShareableContentObject = 'shareableContentObject'),
    (t.Video = 'video'),
    (t.Webinar = 'webinar'),
    (t.WebinarCourse = 'webinarCourse'),
    (t.XApiObject = 'xApiObject'),
    t
  ))(_ || {}),
  W = (t => (
    (t.CourseStartDate = 'courseStartDate'),
    (t.CreatedAt = 'createdAt'),
    (t.DisplayDate = 'displayDate'),
    (t.Label = 'label'),
    (t.LastActiveAt = 'lastActiveAt'),
    (t.Name = 'name'),
    (t.ParentName = 'parentName'),
    (t.PublishDate = 'publishDate'),
    (t.Relevance = 'relevance'),
    (t.Title = 'title'),
    (t.UpdatedAt = 'updatedAt'),
    t
  ))(W || {}),
  re = (t => ((t.Asc = 'asc'), (t.Desc = 'desc'), t))(re || {});
M`
  mutation AddResourceToQueue($resourceType: ContentKind, $resourceId: ID!) {
    AddResourceToQueue(resourceType: $resourceType, resourceId: $resourceId)
  }
`;
M`
  mutation ArchiveUserCourse($id: ID!) {
    ArchiveUserCourse(id: $id)
  }
`;
M`
  mutation ArchiveUserLearningPath($id: ID!) {
    ArchiveUserLearningPath(id: $id)
  }
`;
const lr = {},
  cr = M`
  mutation ReinstateUserLearningPath($id: ID!) {
    ReinstateUserLearningPath(id: $id)
  }
`;
function Us(t) {
  const e = { ...lr, ...t };
  return Z(cr, e);
}
const dr = {},
  hr = M`
  mutation ReinstateUserCourse($id: ID!) {
    ReinstateUserCourse(id: $id)
  }
`;
function Ls(t) {
  const e = { ...dr, ...t };
  return Z(hr, e);
}
const fr = {},
  pr = M`
  mutation UnenrollFromWaitlist($id: ID!) {
    UnenrollFromWaitlist(id: $id)
  }
`;
function As(t) {
  const e = { ...fr, ...t };
  return Z(pr, e);
}
const mr = {},
  gr = M`
  mutation UpdateBookmarkFolder($id: ID!, $name: String!) {
    UpdateBookmarkFolder(id: $id, name: $name) {
      id
      name
    }
  }
`;
function Ms(t) {
  const e = { ...mr, ...t };
  return Z(gr, e);
}
const yr = {},
  vr = M`
  mutation DestroyBookmarkFolder($id: ID!) {
    DestroyBookmarkFolder(id: $id)
  }
`;
function Fs(t) {
  const e = { ...yr, ...t };
  return Z(vr, e);
}
const br = {},
  $r = M`
  mutation CreateCertificateFromUpload(
    $asset: URL!
    $certificateUploadFields: [CertificateUploadField!]
  ) {
    CreateCertificateFromUpload(asset: $asset, certificateUploadFields: $certificateUploadFields) {
      __typename
      id
      externalResourceTitle
    }
  }
`;
function Rs(t) {
  const e = { ...br, ...t };
  return Z($r, e);
}
const Cr = {},
  Dr = M`
  mutation UpdateBookmark($id: ID!, $note: String, $bookmarkFolder: ID!) {
    UpdateBookmark(id: $id, note: $note, bookmarkFolder: $bookmarkFolder) {
      id
    }
  }
`;
function _s(t) {
  const e = { ...Cr, ...t };
  return Z(Dr, e);
}
const Sr = {},
  xr = M`
  mutation DestroyBookmark($id: ID!) {
    DestroyBookmark(id: $id)
  }
`;
function qs(t) {
  const e = { ...Sr, ...t };
  return Z(xr, e);
}
var _e = { exports: {} };
(function (t, e) {
  (function (r, s) {
    t.exports = s();
  })(me, function () {
    var r = 1e3,
      s = 6e4,
      a = 36e5,
      o = 'millisecond',
      i = 'second',
      u = 'minute',
      c = 'hour',
      d = 'day',
      C = 'week',
      y = 'month',
      m = 'quarter',
      D = 'year',
      x = 'date',
      l = 'Invalid Date',
      S =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      U = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      N = {
        name: 'en',
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
        ordinal: function (P) {
          var f = ['th', 'st', 'nd', 'rd'],
            h = P % 100;
          return '[' + P + (f[(h - 20) % 10] || f[h] || f[0]) + ']';
        }
      },
      k = function (P, f, h) {
        var g = String(P);
        return !g || g.length >= f ? P : '' + Array(f + 1 - g.length).join(h) + P;
      },
      R = {
        s: k,
        z: function (P) {
          var f = -P.utcOffset(),
            h = Math.abs(f),
            g = Math.floor(h / 60),
            p = h % 60;
          return (f <= 0 ? '+' : '-') + k(g, 2, '0') + ':' + k(p, 2, '0');
        },
        m: function P(f, h) {
          if (f.date() < h.date()) return -P(h, f);
          var g = 12 * (h.year() - f.year()) + (h.month() - f.month()),
            p = f.clone().add(g, y),
            T = h - p < 0,
            O = f.clone().add(g + (T ? -1 : 1), y);
          return +(-(g + (h - p) / (T ? p - O : O - p)) || 0);
        },
        a: function (P) {
          return P < 0 ? Math.ceil(P) || 0 : Math.floor(P);
        },
        p: function (P) {
          return (
            { M: y, y: D, w: C, d, D: x, h: c, m: u, s: i, ms: o, Q: m }[P] ||
            String(P || '')
              .toLowerCase()
              .replace(/s$/, '')
          );
        },
        u: function (P) {
          return P === void 0;
        }
      },
      E = 'en',
      A = {};
    A[E] = N;
    var F = function (P) {
        return P instanceof Q;
      },
      w = function P(f, h, g) {
        var p;
        if (!f) return E;
        if (typeof f == 'string') {
          var T = f.toLowerCase();
          A[T] && (p = T), h && ((A[T] = h), (p = T));
          var O = f.split('-');
          if (!p && O.length > 1) return P(O[0]);
        } else {
          var q = f.name;
          (A[q] = f), (p = q);
        }
        return !g && p && (E = p), p || (!g && E);
      },
      v = function (P, f) {
        if (F(P)) return P.clone();
        var h = typeof f == 'object' ? f : {};
        return (h.date = P), (h.args = arguments), new Q(h);
      },
      b = R;
    (b.l = w),
      (b.i = F),
      (b.w = function (P, f) {
        return v(P, { locale: f.$L, utc: f.$u, x: f.$x, $offset: f.$offset });
      });
    var Q = (function () {
        function P(h) {
          (this.$L = w(h.locale, null, !0)), this.parse(h);
        }
        var f = P.prototype;
        return (
          (f.parse = function (h) {
            (this.$d = (function (g) {
              var p = g.date,
                T = g.utc;
              if (p === null) return new Date(NaN);
              if (b.u(p)) return new Date();
              if (p instanceof Date) return new Date(p);
              if (typeof p == 'string' && !/Z$/i.test(p)) {
                var O = p.match(S);
                if (O) {
                  var q = O[2] - 1 || 0,
                    z = (O[7] || '0').substring(0, 3);
                  return T
                    ? new Date(Date.UTC(O[1], q, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z))
                    : new Date(O[1], q, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, z);
                }
              }
              return new Date(p);
            })(h)),
              (this.$x = h.x || {}),
              this.init();
          }),
          (f.init = function () {
            var h = this.$d;
            (this.$y = h.getFullYear()),
              (this.$M = h.getMonth()),
              (this.$D = h.getDate()),
              (this.$W = h.getDay()),
              (this.$H = h.getHours()),
              (this.$m = h.getMinutes()),
              (this.$s = h.getSeconds()),
              (this.$ms = h.getMilliseconds());
          }),
          (f.$utils = function () {
            return b;
          }),
          (f.isValid = function () {
            return this.$d.toString() !== l;
          }),
          (f.isSame = function (h, g) {
            var p = v(h);
            return this.startOf(g) <= p && p <= this.endOf(g);
          }),
          (f.isAfter = function (h, g) {
            return v(h) < this.startOf(g);
          }),
          (f.isBefore = function (h, g) {
            return this.endOf(g) < v(h);
          }),
          (f.$g = function (h, g, p) {
            return b.u(h) ? this[g] : this.set(p, h);
          }),
          (f.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (f.valueOf = function () {
            return this.$d.getTime();
          }),
          (f.startOf = function (h, g) {
            var p = this,
              T = !!b.u(g) || g,
              O = b.p(h),
              q = function (K, B) {
                var J = b.w(p.$u ? Date.UTC(p.$y, B, K) : new Date(p.$y, B, K), p);
                return T ? J : J.endOf(d);
              },
              z = function (K, B) {
                return b.w(
                  p
                    .toDate()
                    [K].apply(p.toDate('s'), (T ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(B)),
                  p
                );
              },
              Y = this.$W,
              j = this.$M,
              G = this.$D,
              ee = 'set' + (this.$u ? 'UTC' : '');
            switch (O) {
              case D:
                return T ? q(1, 0) : q(31, 11);
              case y:
                return T ? q(1, j) : q(0, j + 1);
              case C:
                var X = this.$locale().weekStart || 0,
                  ue = (Y < X ? Y + 7 : Y) - X;
                return q(T ? G - ue : G + (6 - ue), j);
              case d:
              case x:
                return z(ee + 'Hours', 0);
              case c:
                return z(ee + 'Minutes', 1);
              case u:
                return z(ee + 'Seconds', 2);
              case i:
                return z(ee + 'Milliseconds', 3);
              default:
                return this.clone();
            }
          }),
          (f.endOf = function (h) {
            return this.startOf(h, !1);
          }),
          (f.$set = function (h, g) {
            var p,
              T = b.p(h),
              O = 'set' + (this.$u ? 'UTC' : ''),
              q = ((p = {}),
              (p[d] = O + 'Date'),
              (p[x] = O + 'Date'),
              (p[y] = O + 'Month'),
              (p[D] = O + 'FullYear'),
              (p[c] = O + 'Hours'),
              (p[u] = O + 'Minutes'),
              (p[i] = O + 'Seconds'),
              (p[o] = O + 'Milliseconds'),
              p)[T],
              z = T === d ? this.$D + (g - this.$W) : g;
            if (T === y || T === D) {
              var Y = this.clone().set(x, 1);
              Y.$d[q](z), Y.init(), (this.$d = Y.set(x, Math.min(this.$D, Y.daysInMonth())).$d);
            } else q && this.$d[q](z);
            return this.init(), this;
          }),
          (f.set = function (h, g) {
            return this.clone().$set(h, g);
          }),
          (f.get = function (h) {
            return this[b.p(h)]();
          }),
          (f.add = function (h, g) {
            var p,
              T = this;
            h = Number(h);
            var O = b.p(g),
              q = function (j) {
                var G = v(T);
                return b.w(G.date(G.date() + Math.round(j * h)), T);
              };
            if (O === y) return this.set(y, this.$M + h);
            if (O === D) return this.set(D, this.$y + h);
            if (O === d) return q(1);
            if (O === C) return q(7);
            var z = ((p = {}), (p[u] = s), (p[c] = a), (p[i] = r), p)[O] || 1,
              Y = this.$d.getTime() + h * z;
            return b.w(Y, this);
          }),
          (f.subtract = function (h, g) {
            return this.add(-1 * h, g);
          }),
          (f.format = function (h) {
            var g = this,
              p = this.$locale();
            if (!this.isValid()) return p.invalidDate || l;
            var T = h || 'YYYY-MM-DDTHH:mm:ssZ',
              O = b.z(this),
              q = this.$H,
              z = this.$m,
              Y = this.$M,
              j = p.weekdays,
              G = p.months,
              ee = p.meridiem,
              X = function (B, J, le, de) {
                return (B && (B[J] || B(g, T))) || le[J].slice(0, de);
              },
              ue = function (B) {
                return b.s(q % 12 || 12, B, '0');
              },
              K =
                ee ||
                function (B, J, le) {
                  var de = B < 12 ? 'AM' : 'PM';
                  return le ? de.toLowerCase() : de;
                };
            return T.replace(U, function (B, J) {
              return (
                J ||
                (function (le) {
                  switch (le) {
                    case 'YY':
                      return String(g.$y).slice(-2);
                    case 'YYYY':
                      return b.s(g.$y, 4, '0');
                    case 'M':
                      return Y + 1;
                    case 'MM':
                      return b.s(Y + 1, 2, '0');
                    case 'MMM':
                      return X(p.monthsShort, Y, G, 3);
                    case 'MMMM':
                      return X(G, Y);
                    case 'D':
                      return g.$D;
                    case 'DD':
                      return b.s(g.$D, 2, '0');
                    case 'd':
                      return String(g.$W);
                    case 'dd':
                      return X(p.weekdaysMin, g.$W, j, 2);
                    case 'ddd':
                      return X(p.weekdaysShort, g.$W, j, 3);
                    case 'dddd':
                      return j[g.$W];
                    case 'H':
                      return String(q);
                    case 'HH':
                      return b.s(q, 2, '0');
                    case 'h':
                      return ue(1);
                    case 'hh':
                      return ue(2);
                    case 'a':
                      return K(q, z, !0);
                    case 'A':
                      return K(q, z, !1);
                    case 'm':
                      return String(z);
                    case 'mm':
                      return b.s(z, 2, '0');
                    case 's':
                      return String(g.$s);
                    case 'ss':
                      return b.s(g.$s, 2, '0');
                    case 'SSS':
                      return b.s(g.$ms, 3, '0');
                    case 'Z':
                      return O;
                  }
                  return null;
                })(B) ||
                O.replace(':', '')
              );
            });
          }),
          (f.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (f.diff = function (h, g, p) {
            var T,
              O = this,
              q = b.p(g),
              z = v(h),
              Y = (z.utcOffset() - this.utcOffset()) * s,
              j = this - z,
              G = function () {
                return b.m(O, z);
              };
            switch (q) {
              case D:
                T = G() / 12;
                break;
              case y:
                T = G();
                break;
              case m:
                T = G() / 3;
                break;
              case C:
                T = (j - Y) / 6048e5;
                break;
              case d:
                T = (j - Y) / 864e5;
                break;
              case c:
                T = j / a;
                break;
              case u:
                T = j / s;
                break;
              case i:
                T = j / r;
                break;
              default:
                T = j;
            }
            return p ? T : b.a(T);
          }),
          (f.daysInMonth = function () {
            return this.endOf(y).$D;
          }),
          (f.$locale = function () {
            return A[this.$L];
          }),
          (f.locale = function (h, g) {
            if (!h) return this.$L;
            var p = this.clone(),
              T = w(h, g, !0);
            return T && (p.$L = T), p;
          }),
          (f.clone = function () {
            return b.w(this.$d, this);
          }),
          (f.toDate = function () {
            return new Date(this.valueOf());
          }),
          (f.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (f.toISOString = function () {
            return this.$d.toISOString();
          }),
          (f.toString = function () {
            return this.$d.toUTCString();
          }),
          P
        );
      })(),
      oe = Q.prototype;
    return (
      (v.prototype = oe),
      [
        ['$ms', o],
        ['$s', i],
        ['$m', u],
        ['$H', c],
        ['$W', d],
        ['$M', y],
        ['$y', D],
        ['$D', x]
      ].forEach(function (P) {
        oe[P[1]] = function (f) {
          return this.$g(f, P[0], P[1]);
        };
      }),
      (v.extend = function (P, f) {
        return P.$i || (P(f, Q, v), (P.$i = !0)), v;
      }),
      (v.locale = w),
      (v.isDayjs = F),
      (v.unix = function (P) {
        return v(1e3 * P);
      }),
      (v.en = A[E]),
      (v.Ls = A),
      (v.p = {}),
      v
    );
  });
})(_e);
const ae = _e.exports;
var qe = { exports: {} };
(function (t, e) {
  (function (r, s) {
    t.exports = s();
  })(me, function () {
    return function (r, s) {
      var a = s.prototype,
        o = a.format;
      a.format = function (i) {
        var u = this,
          c = this.$locale();
        if (!this.isValid()) return o.bind(this)(i);
        var d = this.$utils(),
          C = (i || 'YYYY-MM-DDTHH:mm:ssZ').replace(
            /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
            function (y) {
              switch (y) {
                case 'Q':
                  return Math.ceil((u.$M + 1) / 3);
                case 'Do':
                  return c.ordinal(u.$D);
                case 'gggg':
                  return u.weekYear();
                case 'GGGG':
                  return u.isoWeekYear();
                case 'wo':
                  return c.ordinal(u.week(), 'W');
                case 'w':
                case 'ww':
                  return d.s(u.week(), y === 'w' ? 1 : 2, '0');
                case 'W':
                case 'WW':
                  return d.s(u.isoWeek(), y === 'W' ? 1 : 2, '0');
                case 'k':
                case 'kk':
                  return d.s(String(u.$H === 0 ? 24 : u.$H), y === 'k' ? 1 : 2, '0');
                case 'X':
                  return Math.floor(u.$d.getTime() / 1e3);
                case 'x':
                  return u.$d.getTime();
                case 'z':
                  return '[' + u.offsetName() + ']';
                case 'zzz':
                  return '[' + u.offsetName('long') + ']';
                default:
                  return y;
              }
            }
          );
        return o.bind(this)(C);
      };
    };
  });
})(qe);
const wr = qe.exports;
var Ie = { exports: {} };
(function (t, e) {
  (function (r, s) {
    t.exports = s();
  })(me, function () {
    var r = 'minute',
      s = /[+-]\d\d(?::?\d\d)?/g,
      a = /([+-]|\d\d)/g;
    return function (o, i, u) {
      var c = i.prototype;
      (u.utc = function (l) {
        var S = { date: l, utc: !0, args: arguments };
        return new i(S);
      }),
        (c.utc = function (l) {
          var S = u(this.toDate(), { locale: this.$L, utc: !0 });
          return l ? S.add(this.utcOffset(), r) : S;
        }),
        (c.local = function () {
          return u(this.toDate(), { locale: this.$L, utc: !1 });
        });
      var d = c.parse;
      c.parse = function (l) {
        l.utc && (this.$u = !0),
          this.$utils().u(l.$offset) || (this.$offset = l.$offset),
          d.call(this, l);
      };
      var C = c.init;
      c.init = function () {
        if (this.$u) {
          var l = this.$d;
          (this.$y = l.getUTCFullYear()),
            (this.$M = l.getUTCMonth()),
            (this.$D = l.getUTCDate()),
            (this.$W = l.getUTCDay()),
            (this.$H = l.getUTCHours()),
            (this.$m = l.getUTCMinutes()),
            (this.$s = l.getUTCSeconds()),
            (this.$ms = l.getUTCMilliseconds());
        } else C.call(this);
      };
      var y = c.utcOffset;
      c.utcOffset = function (l, S) {
        var U = this.$utils().u;
        if (U(l)) return this.$u ? 0 : U(this.$offset) ? y.call(this) : this.$offset;
        if (
          typeof l == 'string' &&
          ((l = (function (E) {
            E === void 0 && (E = '');
            var A = E.match(s);
            if (!A) return null;
            var F = ('' + A[0]).match(a) || ['-', 0, 0],
              w = F[0],
              v = 60 * +F[1] + +F[2];
            return v === 0 ? 0 : w === '+' ? v : -v;
          })(l)),
          l === null)
        )
          return this;
        var N = Math.abs(l) <= 16 ? 60 * l : l,
          k = this;
        if (S) return (k.$offset = N), (k.$u = l === 0), k;
        if (l !== 0) {
          var R = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          ((k = this.local().add(N + R, r)).$offset = N), (k.$x.$localOffset = R);
        } else k = this.utc();
        return k;
      };
      var m = c.format;
      (c.format = function (l) {
        var S = l || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '');
        return m.call(this, S);
      }),
        (c.valueOf = function () {
          var l = this.$utils().u(this.$offset)
            ? 0
            : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * l;
        }),
        (c.isUTC = function () {
          return !!this.$u;
        }),
        (c.toISOString = function () {
          return this.toDate().toISOString();
        }),
        (c.toString = function () {
          return this.toDate().toUTCString();
        });
      var D = c.toDate;
      c.toDate = function (l) {
        return l === 's' && this.$offset
          ? u(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
          : D.call(this);
      };
      var x = c.diff;
      c.diff = function (l, S, U) {
        if (l && this.$u === l.$u) return x.call(this, l, S, U);
        var N = this.local(),
          k = u(l).local();
        return x.call(N, k, S, U);
      };
    };
  });
})(Ie);
const kr = Ie.exports;
var ze = { exports: {} };
(function (t, e) {
  (function (r, s) {
    t.exports = s();
  })(me, function () {
    var r = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
      s = {};
    return function (a, o, i) {
      var u,
        c = function (m, D, x) {
          x === void 0 && (x = {});
          var l = new Date(m),
            S = (function (U, N) {
              N === void 0 && (N = {});
              var k = N.timeZoneName || 'short',
                R = U + '|' + k,
                E = s[R];
              return (
                E ||
                  ((E = new Intl.DateTimeFormat('en-US', {
                    hour12: !1,
                    timeZone: U,
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    timeZoneName: k
                  })),
                  (s[R] = E)),
                E
              );
            })(D, x);
          return S.formatToParts(l);
        },
        d = function (m, D) {
          for (var x = c(m, D), l = [], S = 0; S < x.length; S += 1) {
            var U = x[S],
              N = U.type,
              k = U.value,
              R = r[N];
            R >= 0 && (l[R] = parseInt(k, 10));
          }
          var E = l[3],
            A = E === 24 ? 0 : E,
            F = l[0] + '-' + l[1] + '-' + l[2] + ' ' + A + ':' + l[4] + ':' + l[5] + ':000',
            w = +m;
          return (i.utc(F).valueOf() - (w -= w % 1e3)) / 6e4;
        },
        C = o.prototype;
      (C.tz = function (m, D) {
        m === void 0 && (m = u);
        var x = this.utcOffset(),
          l = this.toDate(),
          S = l.toLocaleString('en-US', { timeZone: m }),
          U = Math.round((l - new Date(S)) / 1e3 / 60),
          N = i(S)
            .$set('millisecond', this.$ms)
            .utcOffset(15 * -Math.round(l.getTimezoneOffset() / 15) - U, !0);
        if (D) {
          var k = N.utcOffset();
          N = N.add(x - k, 'minute');
        }
        return (N.$x.$timezone = m), N;
      }),
        (C.offsetName = function (m) {
          var D = this.$x.$timezone || i.tz.guess(),
            x = c(this.valueOf(), D, { timeZoneName: m }).find(function (l) {
              return l.type.toLowerCase() === 'timezonename';
            });
          return x && x.value;
        });
      var y = C.startOf;
      (C.startOf = function (m, D) {
        if (!this.$x || !this.$x.$timezone) return y.call(this, m, D);
        var x = i(this.format('YYYY-MM-DD HH:mm:ss:SSS'));
        return y.call(x, m, D).tz(this.$x.$timezone, !0);
      }),
        (i.tz = function (m, D, x) {
          var l = x && D,
            S = x || D || u,
            U = d(+i(), S);
          if (typeof m != 'string') return i(m).tz(S);
          var N = (function (A, F, w) {
              var v = A - 60 * F * 1e3,
                b = d(v, w);
              if (F === b) return [v, F];
              var Q = d((v -= 60 * (b - F) * 1e3), w);
              return b === Q ? [v, b] : [A - 60 * Math.min(b, Q) * 1e3, Math.max(b, Q)];
            })(i.utc(m, l).valueOf(), U, S),
            k = N[0],
            R = N[1],
            E = i(k).utcOffset(R);
          return (E.$x.$timezone = S), E;
        }),
        (i.tz.guess = function () {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }),
        (i.tz.setDefault = function (m) {
          u = m;
        });
    };
  });
})(ze);
const Pr = ze.exports,
  Tr = 'America/New_York';
ae.extend(wr);
ae.extend(kr);
ae.extend(Pr);
const V = (t, e, r) => {
  const s = e != null ? e : Tr;
  return ae(t).tz(s).format(r);
};
var se = (t => (
  (t.Completed = 'completed'),
  (t.Available = 'available'),
  (t.Started = 'started'),
  (t.NotStarted = 'not-started'),
  (t.NotCompleted = 'not-completed'),
  t
))(se || {});
const Or = [_.Webinar, _.WebinarCourse],
  Nr = [_.InPersonEvent, _.InPersonEventCourse];
function Er(t, e, r, s) {
  return t && (Nr.includes(t) || Or.includes(t))
    ? r
      ? ae(e).isSame(ae(r), 'day')
        ? `${V(e, s, 'ddd, MMM Do YYYY hh:mm a')} \u2013 ${V(r, s, 'hh:mm a z')}`
        : `${V(e, s, 'ddd, MMM Do YYYY hh:mm a')} \u2013 ${V(r, s, 'ddd, MMM Do YYYY hh:mm a z')}`
      : `${V(e, s, 'ddd, MMM Do YYYY hh:mm a z')}`
    : r
    ? `${V(e, s, 'MMM Do YYYY')} \u2013 ${V(r, s, 'MMM Do YYYY')}`
    : V(e, s, 'MMM Do YYYY');
}
const Ur = (t, e, r = void 0, s = {}) => {
    const a =
        (e.currentUserUnmetCoursePrerequisites || []).length > 0 ||
        (e.currentUserUnmetLearningPathPrerequisites || []).length > 0,
      o = !e.coursePresold && !e.courseGracePeriodEnded && !a,
      i = r != null ? r : e.timeZone,
      u = !!e.availabilityStatus,
      c = e.availabilityStatus === se.Completed,
      d = e.availabilityStatus === se.Available,
      C = e.availabilityStatus === se.Started,
      y = e.availabilityStatus === se.NotStarted,
      m = e.availabilityStatus === se.NotCompleted,
      D = e.kind === _.ShareableContentObject || e.kind === _.XApiObject,
      x = e.kind === _.Webinar || e.kind === _.WebinarCourse,
      l = e.kind === _.InPersonEvent || e.kind === _.InPersonEventCourse,
      S = e.kind === _.WebinarCourse || e.kind === _.InPersonEventCourse,
      U = {
        ...e,
        hasUnmetPrerequisites: a,
        isActive: o,
        timeZone: i,
        hasAvailability: u,
        isCompleted: c,
        isAvailable: d,
        isStarted: C,
        isNotStarted: y,
        isNotCompleted: m,
        kindIsScormOrXApi: D,
        locationIsOnline: x,
        locationIsInPerson: l,
        usesContentAccessText: S
      },
      N = Lr(t, U);
    let k = Ar(U);
    try {
      const A = JSON.parse(s);
      if (Object.keys(A).length && k.length > 1) {
        const F = `sessionFields=${encodeURIComponent(JSON.stringify(Object.entries(A)))}`;
        k = `${k}?${F}`;
      }
    } catch {}
    let { priceInCents: R, suggestedRetailPriceInCents: E } = e;
    if (e.alternativePricingType === Re.Membership) {
      const A = R;
      (R = E), (E = A);
    }
    return { ...U, callToAction: N, href: k, priceInCents: R, suggestedRetailPriceInCents: E };
  },
  Lr = (t, e) => {
    if (e.hasAvailability && !e.waitlistingTriggered) {
      if (e.coursePresold && e.courseStartDate) {
        const r = Er(e.kind, e.courseStartDate, e.courseEndDate, e.timeZone);
        return `${
          e.usesContentAccessText ? t.t('content-access') : `${e.contentTypeLabel} ${t.t('runs')}`
        } ${r}`;
      } else {
        if (e.courseGracePeriodEnded && e.courseEndDate)
          return `${t.t('course-ended')} ${V(e.courseEndDate, e.timeZone, 'MMM Do YYYY')}`;
        if (e.hasUnmetPrerequisites) return t.t('course.prerequisites');
        if (e.bulkPurchasingEnabled) return t.t('course-view-details');
        if (e.isCompleted)
          return e.kind === _.LearningPath
            ? t.t('learning-path.view')
            : t.t('view-course', { contentType: e.contentTypeLabel });
        if (e.isStarted)
          return e.kind === _.LearningPath ? t.t('learning-path.continue') : t.t('continue-course');
        if (e.isNotStarted)
          return e.kind === _.LearningPath
            ? t.t('learning-path.start')
            : t.t('start-course', { contentType: e.contentTypeLabel });
        if (e.isNotCompleted) return t.t('not-completed-course');
      }
      return t.t('course-view-details');
    } else if (e.waitlistingTriggered && e.waitlistingEnabled) return t.t('join-waitlist');
    return t.t('course-view-details');
  },
  Ar = t => {
    const e = t.kind,
      r = t.slug;
    return e === _.Product
      ? `/products/${r}`
      : e === _.Bundle
      ? `/bundles/${r}`
      : e === _.PickableGroup
      ? `/cart-collections/${r}`
      : e === _.DiscountGroup
      ? `/collections/${r}`
      : e === _.LearningPath && t.isActive
      ? t.hasAvailability && !t.bulkPurchasingEnabled
        ? `/learn/learning-path/${r}`
        : `/learning-paths/${r}`
      : t.isActive
      ? t.hasAvailability
        ? e === _.ShareableContentObject || e === _.XApiObject
          ? t.isAvailable
            ? `/courses/${r}`
            : '#'
          : (t.isCompleted || t.isStarted) && !t.bulkPurchasingEnabled
          ? e === _.Webinar
            ? `/learn/webinars/${t.displayCourse}/redirect`
            : e === _.Article
            ? `/learn/article/${t.displayCourseSlug}`
            : e === _.InPersonEvent
            ? `/learn/event/${t.displayCourseSlug}`
            : e === _.Video
            ? `/learn/video/${t.displayCourseSlug}`
            : `/learn/course/${t.displayCourseSlug}`
          : t.isNotStarted
          ? `/learn/enroll/${t.displayCourse}`
          : `/courses/${r}`
        : `/courses/${r}`
      : e === _.Webinar || e === _.InPersonEvent
      ? `/courses/${r}`
      : '#';
  },
  Se = t =>
    t.reduce((e, { label: r, value: s }) => (e.labels.push(r), e.values.push(s), e), {
      labels: [],
      values: []
    }),
  Qe = 1,
  Mr = 48,
  Ye = ':',
  Ae = {
    page: Qe,
    aggregationFilters: [],
    contentTypes: [],
    results: [],
    aggregations: [],
    hasMore: !1,
    isCurated: !1,
    enabledSorts: [],
    enabledDisplayTypes: [],
    resultContentTypes: [],
    contentTypeFilterEnabled: !1,
    displayStartDateEnabled: !1,
    displayAuthorsEnabled: !1,
    displayDescriptionOnCalendar: !1,
    isLoading: !1,
    pageSize: Mr
  },
  Fr = t => {
    const {
        page: e = Qe,
        token: r,
        sort: s,
        displayType: a,
        resultsDisplayType: o,
        aggregationFilters: i,
        searchTerm: u,
        contentTypes: c
      } = t,
      d = s == null ? void 0 : s.field,
      C = s == null ? void 0 : s.direction,
      y = a || o,
      m = Se(i);
    return {
      page: e,
      sortColumn: d,
      sortDirection: C,
      resultsDisplayType: y,
      token: r,
      contentTypes: c,
      query: u,
      labels: m.labels,
      values: m.values
    };
  },
  Rr = t => {
    if (!t) return;
    const e = t.split(Ye);
    if (!e.length) return;
    const r = e[0];
    if (!r) return;
    const s = e.length > 1 ? e[1] : void 0;
    return { field: r, direction: s };
  },
  _r = ({
    sortUpdatedAtEnabled: t,
    sortCreatedAtEnabled: e,
    sortTitleEnabled: r,
    sortPublishDateEnabled: s,
    sortCourseStartDateEnabled: a,
    sortRelevanceEnabled: o
  }) => {
    const i = [];
    return (
      t && i.push({ field: W.UpdatedAt, direction: re.Desc }),
      e && i.push({ field: W.CreatedAt, direction: re.Desc }),
      r && i.push({ field: W.Title, direction: re.Asc }),
      s && i.push({ field: W.PublishDate, direction: re.Desc }),
      a && i.push({ field: W.CourseStartDate, direction: re.Asc }),
      o && i.push({ field: W.Relevance }),
      i
    );
  },
  qr = ({
    displayTypeListEnabled: t,
    displayTypeGridEnabled: e,
    displayTypeCalendarEnabled: r
  }) => {
    const s = [];
    return t && s.push(ne.List), e && s.push(ne.Grid), r && s.push(ne.Calendar), s;
  },
  Ir = (t, e) => {
    if (e || !t) return { error: `An unexpected error occurred: ${e ? e.message : 'empty data'}` };
    const {
        meta: {
          displayBundle: r,
          tokenLabel: s,
          total: a,
          hasMore: o,
          isCurated: i,
          aggregations: u = [],
          contentTypes: c = [],
          resultsDisplayType: d,
          sortUpdatedAtEnabled: C,
          sortCreatedAtEnabled: y,
          sortTitleEnabled: m,
          sortPublishDateEnabled: D,
          sortCourseStartDateEnabled: x,
          sortRelevanceEnabled: l,
          displayTypeListEnabled: S,
          displayTypeGridEnabled: U,
          displayTypeCalendarEnabled: N,
          displayStartDateEnabled: k,
          displayAuthorsEnabled: R,
          displayDescriptionOnCalendar: E,
          contentTypeFilterEnabled: A,
          queryCustomFields: F
        },
        contentItems: w = []
      } = t.CatalogContent,
      v = _r({
        sortUpdatedAtEnabled: C,
        sortCreatedAtEnabled: y,
        sortTitleEnabled: m,
        sortPublishDateEnabled: D,
        sortCourseStartDateEnabled: x,
        sortRelevanceEnabled: l
      }),
      b = qr({
        displayTypeListEnabled: S,
        displayTypeGridEnabled: U,
        displayTypeCalendarEnabled: N
      });
    return {
      error: void 0,
      results: w,
      queryCustomFields: F,
      aggregations: u,
      total: a,
      hasMore: o,
      isCurated: i,
      tokenLabel: s,
      resultsDisplayType: d,
      enabledSorts: v,
      enabledDisplayTypes: b,
      resultContentTypes: c,
      displayStartDateEnabled: k,
      displayAuthorsEnabled: R,
      displayDescriptionOnCalendar: E,
      contentTypeFilterEnabled: A,
      displayBundle: r
    };
  },
  zr = t => !!t,
  Qr = t => {
    if (typeof t == 'string') return t;
    const { field: e, direction: r } = t;
    return [e, r].filter(zr).join(Ye);
  };
var L = (t => (
  (t.Token = 'token'),
  (t.SearchTerm = 'query'),
  (t.AggregationLabels = 'labels'),
  (t.AggregationValues = 'values'),
  (t.ContentTypes = 'content-types'),
  (t.DisplayType = 'display-type'),
  (t.Page = 'page'),
  (t.Sort = 'sort'),
  t
))(L || {});
const Yr = t => parseInt(t, 10),
  jr = t => {
    const e = t.get(L.Page);
    if (!e) return;
    const r = Yr(e);
    if (!(isNaN(r) || r < 1)) return r;
  },
  Br = t => {
    const e = t.get(L.AggregationLabels),
      r = t.get(L.AggregationValues);
    if (!(!e || !r))
      try {
        const s = JSON.parse(e),
          a = JSON.parse(r);
        return s.reduce((o, i, u) => (u in a && a[u] && o.push({ label: i, value: a[u] }), o), []);
      } catch {
        return;
      }
  },
  Wr = t => {
    const e = t.get(L.Token);
    if (!!e) return e;
  },
  Gr = t => {
    const e = t.get(L.SearchTerm);
    if (!!e) return e;
  },
  Hr = t => {
    const e = t.get(L.ContentTypes);
    if (!!e)
      try {
        return JSON.parse(e);
      } catch {
        return;
      }
  },
  Vr = t => {
    const e = t.get(L.DisplayType);
    if (!!e) return e;
  },
  Jr = t => {
    const e = t.get(L.Sort);
    if (!!e) return Rr(e);
  },
  Zr = t => {
    const e = {},
      r = jr(t);
    r && (e.page = r);
    const s = Br(t);
    s && (e.aggregationFilters = s);
    const a = Wr(t);
    a && (e.token = a);
    const o = Gr(t);
    o && (e.searchTerm = o);
    const i = Hr(t);
    i && (e.contentTypes = i);
    const u = Vr(t);
    u && (e.displayType = u);
    const c = Jr(t);
    return c && (e.sort = c), e;
  };
class Xr {
  constructor(e) {
    te(this, '_pathname');
    te(this, '_searchParams');
    te(this, '_parsedRequestParams');
    te(this, '_isCurated');
    te(this, '_selectedDisplayType');
    const { pathname: r, searchString: s } = e;
    (this._pathname = r),
      (this._searchParams = new URLSearchParams(s || void 0)),
      (this._parsedRequestParams = Zr(this._searchParams));
  }
  _composeURL(e) {
    return e ? `${this._pathname}?${e}` : this._pathname;
  }
  _resetOrDefaultClonedParams() {
    const e = new URLSearchParams(this._searchParams);
    return (
      this._isCurated &&
        (e.delete(L.AggregationLabels),
        e.delete(L.AggregationValues),
        e.delete(L.ContentTypes),
        e.delete(L.DisplayType),
        e.delete(L.Page),
        e.delete(L.SearchTerm),
        e.delete(L.Sort),
        e.delete(L.Token)),
      this._selectedDisplayType === ne.Calendar && e.delete(L.Page),
      e
    );
  }
  setIsCurated(e) {
    this._isCurated = e;
  }
  setSelectedDisplayType(e) {
    this._selectedDisplayType = e;
  }
  getParsedRequestParams() {
    return this._parsedRequestParams;
  }
  composeURLForAddAggregationFilter(e) {
    const { aggregationFilters: r = [] } = this._isCurated ? {} : this._parsedRequestParams,
      s = [...r];
    s.push(e);
    const a = Se(s),
      o = this._resetOrDefaultClonedParams();
    return (
      o.set(L.AggregationLabels, JSON.stringify(a.labels)),
      o.set(L.AggregationValues, JSON.stringify(a.values)),
      this._composeURL(o.toString())
    );
  }
  composeURLsForRemoveAggregationFilterBatch(e) {
    const { aggregationFilters: r = [] } = this._isCurated ? {} : this._parsedRequestParams,
      s = this._resetOrDefaultClonedParams();
    return e.map(a => {
      const { label: o, value: i } = a,
        u = new URLSearchParams(s),
        c = r.filter(({ label: d, value: C }) => d !== o && C !== i);
      if (c.length) {
        const d = Se(c);
        u.set(L.AggregationLabels, JSON.stringify(d.labels)),
          u.set(L.AggregationValues, JSON.stringify(d.values));
      } else u.delete(L.AggregationLabels), u.delete(L.AggregationValues);
      return u.delete(L.Page), { filter: a, url: this._composeURL(u.toString()) };
    });
  }
  composeURLForSetPage(e) {
    const r = this._resetOrDefaultClonedParams();
    return r.set(L.Page, e.toString()), this._composeURL(r.toString());
  }
  composeURLForRemoveToken() {
    const e = this._resetOrDefaultClonedParams();
    return e.delete(L.Token), e.delete(L.Page), this._composeURL(e.toString());
  }
  composeURLForAddContentType(e) {
    const { contentTypes: r = [] } = this._isCurated ? {} : this._parsedRequestParams,
      s = [...r];
    s.push(e);
    const a = this._resetOrDefaultClonedParams();
    return a.set(L.ContentTypes, JSON.stringify(s)), this._composeURL(a.toString());
  }
  composeURLForRemoveContentTypeBatch(e) {
    const { contentTypes: r = [] } = this._isCurated ? {} : this._parsedRequestParams,
      s = this._resetOrDefaultClonedParams();
    return e.map(a => {
      const o = new URLSearchParams(s),
        i = [...r].filter(u => u !== a);
      return (
        i.length ? o.set(L.ContentTypes, JSON.stringify(i)) : o.delete(L.ContentTypes),
        { contentType: a, url: this._composeURL(o.toString()) }
      );
    });
  }
  composeURLForSetSearchTermForm() {
    return this._composeURL('');
  }
  composeSearchTermFormHiddenFields() {
    const e = this._resetOrDefaultClonedParams();
    e.delete(L.Page), e.delete(L.SearchTerm);
    const r = [];
    for (const [s, a] of e.entries()) r.push({ name: s, value: a });
    return r;
  }
  composeURLForRemoveSearchTerm() {
    const e = this._resetOrDefaultClonedParams();
    return e.delete(L.SearchTerm), this._composeURL(e.toString());
  }
  composeURLForSetDisplayType(e) {
    const r = this._resetOrDefaultClonedParams();
    return (
      r.set(L.DisplayType, e.toString()),
      e === ne.Calendar && r.delete(L.ContentTypes),
      this._composeURL(r.toString())
    );
  }
  composeURLForSetSort(e) {
    const r = this._resetOrDefaultClonedParams();
    return r.set(L.Sort, Qr(e)), this._composeURL(r.toString());
  }
}
const je = $.exports.createContext(void 0),
  Is = ({ children: t, config: e }) => {
    const { parsedUrl: r } = e,
      [s] = $.exports.useState(new Xr(r)),
      [a, o] = $.exports.useState(void 0),
      i = s.getParsedRequestParams(),
      u = Fr({ ...Ae, ...i }),
      { data: c, error: d, loading: C } = Qt({ variables: { ...u } }),
      y = $.exports.useRef(!1);
    if (!y.current && !C) {
      const m = { ...Ae, ...i, ...Ir(c, d) };
      o(m),
        s.setIsCurated(m.isCurated),
        s.setSelectedDisplayType(m.displayType || m.resultsDisplayType),
        (y.current = !0);
    }
    return a ? n(je.Provider, { value: { urlManager: s, params: a }, children: t }) : null;
  };
function Kr(t, e) {
  const r = $.exports.useRef(e);
  $.exports.useEffect(() => {
    r.current = e;
  }, [e]),
    $.exports.useEffect(() => {
      const s = a => r.current.call(window, a);
      return (
        window.addEventListener(t, s),
        () => {
          window.removeEventListener(t, s);
        }
      );
    }, [t]);
}
const es = 500,
  ts = 0.25,
  rs = 'div',
  Be = $.exports.createContext(void 0);
function ss(t, e, r) {
  var s = this,
    a = $.exports.useRef(null),
    o = $.exports.useRef(0),
    i = $.exports.useRef(null),
    u = $.exports.useRef([]),
    c = $.exports.useRef(),
    d = $.exports.useRef(),
    C = $.exports.useRef(t),
    y = $.exports.useRef(!0);
  C.current = t;
  var m = !e && e !== 0 && typeof window < 'u';
  if (typeof t != 'function') throw new TypeError('Expected a function');
  (e = +e || 0), (r = r || {});
  var D = !!r.leading,
    x = 'trailing' in r ? !!r.trailing : !0,
    l = 'maxWait' in r,
    S = l ? Math.max(+r.maxWait || 0, e) : null;
  $.exports.useEffect(function () {
    return (
      (y.current = !0),
      function () {
        y.current = !1;
      }
    );
  }, []);
  var U = $.exports.useMemo(
    function () {
      var N = function (w) {
          var v = u.current,
            b = c.current;
          return (
            (u.current = c.current = null), (o.current = w), (d.current = C.current.apply(b, v))
          );
        },
        k = function (w, v) {
          m && cancelAnimationFrame(i.current),
            (i.current = m ? requestAnimationFrame(w) : setTimeout(w, v));
        },
        R = function (w) {
          if (!y.current) return !1;
          var v = w - a.current,
            b = w - o.current;
          return !a.current || v >= e || v < 0 || (l && b >= S);
        },
        E = function (w) {
          return (
            (i.current = null), x && u.current ? N(w) : ((u.current = c.current = null), d.current)
          );
        },
        A = function () {
          var w = Date.now();
          if (R(w)) return E(w);
          if (!!y.current) {
            var v = w - a.current,
              b = w - o.current,
              Q = e - v,
              oe = l ? Math.min(Q, S - b) : Q;
            k(A, oe);
          }
        },
        F = function () {
          for (var w = [], v = 0; v < arguments.length; v++) w[v] = arguments[v];
          var b = Date.now(),
            Q = R(b);
          if (((u.current = w), (c.current = s), (a.current = b), Q)) {
            if (!i.current && y.current)
              return (o.current = a.current), k(A, e), D ? N(a.current) : d.current;
            if (l) return k(A, e), N(a.current);
          }
          return i.current || k(A, e), d.current;
        };
      return (
        (F.cancel = function () {
          i.current && (m ? cancelAnimationFrame(i.current) : clearTimeout(i.current)),
            (o.current = 0),
            (u.current = a.current = c.current = i.current = null);
        }),
        (F.isPending = function () {
          return !!i.current;
        }),
        (F.flush = function () {
          return i.current ? E(Date.now()) : d.current;
        }),
        F
      );
    },
    [D, l, e, S, x, m]
  );
  return U;
}
const We = ({ children: t, timeout: e = es, animationSpeed: r = ts }) => {
  const [s, a] = $.exports.useState([]),
    [o, i] = $.exports.useState([]),
    [u, c] = $.exports.useState(!1),
    [d, C] = $.exports.useState(0),
    [y, m] = $.exports.useState(0),
    D = $.exports.useCallback(() => c(l => !l), []),
    x = ss(D, e);
  return (
    Kr('resize', x),
    $.exports.useEffect(() => {
      D();
    }, [d, D]),
    $.exports.useEffect(() => {
      if (d <= y) {
        let l = [];
        o.map(S => {
          const U = S.name,
            N = S.height,
            k = l.findIndex(R => R.name === U);
          k > -1 ? l[k].height < N && (l[k].height = N) : (l = [...l, { name: U, height: N }]);
        }),
          a(l),
          i([]),
          m(0);
      }
    }, [d, y, o]),
    n(Be.Provider, {
      value: {
        sizes: s,
        temporarySizes: o,
        update: u,
        animationSpeed: r,
        originalChildrenCount: d,
        childrenCount: y,
        setTemporarySizes: i,
        setOriginalChildrenCount: C,
        setChildrenCount: m
      },
      children: t
    })
  );
};
We.displayName = 'HeightEqualizer';
function ns() {
  const t = xe.useContext(Be);
  if (!t) throw new Error('Expected a Height Equalizer Context, but no context was found');
  return t;
}
const Ge = ({ children: t = '', name: e, as: r, className: s }) => {
  const {
      sizes: a,
      update: o,
      setTemporarySizes: i,
      setOriginalChildrenCount: u,
      setChildrenCount: c,
      animationSpeed: d
    } = ns(),
    [C, y] = $.exports.useState(),
    m = $.exports.useRef(null),
    D = $.exports.useCallback(() => {
      if (!m.current) return;
      const l = m.current.style.getPropertyValue('height');
      m.current.style.removeProperty('height');
      const S = m.current.offsetHeight;
      m.current.style.setProperty('height', l),
        i(U => [...U, { name: e, height: S }]),
        c(U => U + 1);
    }, [i, c, e]);
  $.exports.useEffect(
    () => (
      u(l => l + 1),
      () => {
        u(l => l - 1);
      }
    ),
    [u]
  ),
    $.exports.useEffect(() => {
      D();
    }, [o, D]),
    $.exports.useEffect(() => {
      const l = a.findIndex(S => S.name === e);
      a && a[l] && a[l].height && y(a[l].height);
    }, [a, e]);
  const x = { height: `${C}px`, transitionDuration: d === 0 ? '' : `${d}s` };
  return xe.createElement(r != null ? r : rs, { ref: m, className: s, style: x }, t);
};
Ge.displayName = 'HeightEqualizerElement';
function is() {
  const t = xe.useContext(je);
  if (!t) throw new Error('Expected a Catalog Context, but no Catalog Context was found');
  return t;
}
function He(t) {
  var e,
    r,
    s = '';
  if (typeof t == 'string' || typeof t == 'number') s += t;
  else if (typeof t == 'object')
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++) t[e] && (r = He(t[e])) && (s && (s += ' '), (s += r));
    else for (e in t) t[e] && (s && (s += ' '), (s += e));
  return s;
}
function fe() {
  for (var t, e, r = 0, s = ''; r < arguments.length; )
    (t = arguments[r++]) && (e = He(t)) && (s && (s += ' '), (s += e));
  return s;
}
W.UpdatedAt + '',
  W.CreatedAt + '',
  W.Title + '',
  W.PublishDate + '',
  W.CourseStartDate + '',
  W.Relevance + '';
const Ve = ({ children: t, onClick: e, item: r }) => {
  const { isActive: s, href: a } = r,
    o = !!s,
    i = $.exports.useCallback(
      c => {
        e && e(c, r);
      },
      [r, e]
    );
  return n('a', {
    ...{ href: a, onClick: i, className: `block text-gray-800 ${o ? '' : 'cursor-default'}` },
    children: t
  });
};
Ve.displayName = 'ItemLinkWrapper';
const Je = ({ ribbon: t, attached: e, attachedClassnames: r = '' }) => {
  const { contrastColor: s, color: a, darkerColor: o, label: i } = t,
    u = { color: s, backgroundColor: a },
    c = e ? fe('-right-2', r) : '-top-1',
    d = fe(
      'text-xs font-normal leading-none absolute right-0 uppercase max-w-1/2 overflow-ellipsis z-10 px-1.5 py-1 whitespace-no-wrap',
      c
    );
  return I('div', {
    className: d,
    style: u,
    children: [
      e &&
        n('div', {
          className:
            'absolute right-0 top-full block h-0 w-0 border-4 border-solid border-transparent',
          style: { borderTopColor: o, borderLeftColor: o }
        }),
      i
    ]
  });
};
Je.displayName = 'ItemRibbon';
const as = (t, e) => (t.length > e ? `${t.substring(0, e)}...` : t),
  os = 'en-US',
  us = 'USD',
  Ze = ({ asset: t }) => {
    const { appearance: e } = we(),
      r = t || (e == null ? void 0 : e.logoAsset);
    return n('img', {
      src: r,
      className: fe(t && 'w-full rounded-t-md', !t && 'p-10 w-full border rounded-t-md')
    });
  };
Ze.displayName = 'ItemAssetBlock';
const ls = ({ className: t, children: e, ...r }) =>
    n(Ge, { className: fe(t, 'overflow-hidden block transition-all'), ...r, children: e }),
  cs = ({ title: t }) => n('div', { className: 'font-semibold text-lg', children: t }),
  ds = ({ contentTypeLabel: t, courseStartDate: e }) =>
    n(ls, {
      name: 'source',
      className: 'text-sm text-gray-500',
      children: n('p', {
        children:
          e && n('span', { className: 'flex text-md text-gray-500 font-semibold', children: t })
      })
    }),
  hs = ({ isActive: t, callToAction: e }) =>
    t
      ? n('span', {
          className:
            'border-none text-blue-500 rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 float-right h-auto hover:text-accent',
          children: e
        })
      : n('span', { className: 'text-xs', children: e }),
  Me = ({ onClick: t, displayStartDateEnabled: e, item: r }) => {
    const {
      asset: s,
      title: a,
      description: o,
      isActive: i,
      ribbon: u,
      courseStartDate: c,
      contentTypeLabel: d,
      callToAction: C,
      timeZone: y
    } = r;
    return n('li', {
      children: n(ie, {
        children: n(Ve, {
          item: r,
          onClick: t,
          children: n('div', {
            className: 'grid grid-cols-1 relative',
            children: I('div', {
              className: 'bg-white rounded-md',
              children: [
                u && n(Je, { ribbon: u, attached: !0, attachedClassnames: '-top-1' }),
                n('div', { className: 'relative', children: n(Ze, { asset: s }) }),
                I('div', {
                  className: 'p-8 space-y-4',
                  children: [
                    a && n(cs, { title: a }),
                    n(ds, { contentTypeLabel: d, courseStartDate: c }),
                    n('div', { className: 'text-sm text-gray-500', children: o && as(o, 75) }),
                    n('hr', { className: 'my-2' }),
                    n('div', {
                      className: 'text-base leading-none py-2',
                      children: n(hs, { isActive: i, callToAction: C })
                    })
                  ]
                })
              ]
            })
          })
        })
      })
    });
  },
  Xe = ({ items: t, ...e }) => {
    let r;
    return (
      e.numberOfContentItems
        ? (r = t
            .slice(0, e.numberOfContentItems)
            .filter(({ isNotCompleted: s }) => !s)
            .map((s, a) => n(Me, { item: s, ...e }, `result-item-${a}`)))
        : (r = t
            .filter(({ isNotCompleted: s }) => !s)
            .map((s, a) => n(Me, { item: s, ...e }, `result-item-${a}`))),
      n(We, {
        children: n('ul', {
          className: 'grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          children: r
        })
      })
    );
  };
Xe.displayName = 'DisplayTypeResultsGrid';
const fs = ({
    hydratedResults: t,
    displayBundle: e,
    displayAuthorsEnabled: r,
    displayStartDateEnabled: s,
    onClick: a,
    onAddedToQueue: o,
    priceFormatFn: i,
    numberOfContentItems: u
  }) => {
    const d = {
      ...{ items: t, onAddedToQueue: o, priceFormatFn: i, numberOfContentItems: u },
      onClick: a,
      displayAuthorsEnabled: r,
      displayStartDateEnabled: s,
      displayBundle: e
    };
    return n(Xe, { ...d });
  },
  ps = ({
    companyHasSessionLevelCustomFieldsFeature: t,
    companyTimeZone: e,
    onClick: r,
    onAddedToQueue: s,
    priceFormat: a,
    companyDefaultLocale: o,
    currencyCode: i,
    numberOfContentItems: u
  }) => {
    const { params: c } = is(),
      {
        aggregations: d,
        aggregationFilters: C,
        displayType: y,
        resultsDisplayType: m,
        results: D,
        queryCustomFields: x,
        displayBundle: l,
        displayAuthorsEnabled: S,
        displayStartDateEnabled: U,
        displayDescriptionOnCalendar: N
      } = c,
      { i18n: k, t: R } = Nt();
    let E;
    if (C.length) {
      const { label: f, value: h } = C[0];
      d.forEach(({ label: g, buckets: p = [] }) => {
        g === f &&
          p.forEach(({ value: T, description: O }) => {
            T === h && (E = O);
          });
      });
    }
    const A = y || m,
      F = t ? x : {},
      w = D.map(f => Ur(k, f, e, F)),
      v = !!w.length;
    let b = a;
    if (!b) {
      const f = o != null ? o : os,
        h = i != null ? i : us,
        g = new Intl.NumberFormat(f, { style: 'currency', currency: h });
      b = p => g.format(p / 100);
    }
    const Q =
      !v &&
      n('div', {
        className: 'bg-gray-100 text-gray-700 p-4 mb-4 rounded',
        children: R('filter-no-courses')
      });
    return I(ie, {
      children: [
        !!E && I(ie, { children: [E, n('hr', {})] }),
        Q,
        v &&
          A &&
          n(fs, {
            numberOfContentItems: u,
            ...{
              hydratedResults: w,
              displayBundle: l,
              displayAuthorsEnabled: S,
              displayStartDateEnabled: U,
              displayDescriptionOnCalendar: N,
              companyTimeZone: e,
              onClick: r,
              onAddedToQueue: s,
              priceFormatFn: b
            },
            activeDisplayType: A
          })
      ]
    });
  };
ps.displayName = 'CatalogResults';
export {
  Is as C,
  Lt as D,
  $s as F,
  Rt as L,
  Cs as N,
  W as S,
  Ds as a,
  ps as b,
  fe as c,
  Nt as d,
  ws as e,
  As as f,
  Ls as g,
  Us as h,
  xs as i,
  V as j,
  ks as k,
  Ms as l,
  Fs as m,
  Os as n,
  _s as o,
  qs as p,
  Ut as q,
  Ns as r,
  Ss as s,
  Ur as t,
  is as u,
  Ps as v,
  Es as w,
  Rs as x,
  Ts as y,
  _ as z
};
