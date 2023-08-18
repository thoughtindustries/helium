function X(i, S) {
  for (var v = 0; v < S.length; v++) {
    const _ = S[v];
    if (typeof _ != 'string' && !Array.isArray(_)) {
      for (const m in _)
        if (m !== 'default' && !(m in i)) {
          const h = Object.getOwnPropertyDescriptor(_, m);
          h && Object.defineProperty(i, m, h.get ? h : { enumerable: !0, get: () => _[m] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }));
}
var ne =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function Z(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i;
}
var P = { exports: {} },
  r = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H;
function ee() {
  if (H) return r;
  H = 1;
  var i = Symbol.for('react.element'),
    S = Symbol.for('react.portal'),
    v = Symbol.for('react.fragment'),
    _ = Symbol.for('react.strict_mode'),
    m = Symbol.for('react.profiler'),
    h = Symbol.for('react.provider'),
    x = Symbol.for('react.context'),
    b = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    y = Symbol.for('react.lazy'),
    R = Symbol.iterator;
  function j(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (R && e[R]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    L = Object.assign,
    N = {};
  function w(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = N), (this.updater = n || E);
  }
  (w.prototype.isReactComponent = {}),
    (w.prototype.setState = function (e, t) {
      if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (w.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    });
  function U() {}
  U.prototype = w.prototype;
  function T(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = N), (this.updater = n || E);
  }
  var F = (T.prototype = new U());
  (F.constructor = T), L(F, w.prototype), (F.isPureReactComponent = !0);
  var V = Array.isArray,
    M = Object.prototype.hasOwnProperty,
    q = { current: null },
    z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(e, t, n) {
    var u,
      o = {},
      c = null,
      l = null;
    if (t != null)
      for (u in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (c = '' + t.key), t))
        M.call(t, u) && !z.hasOwnProperty(u) && (o[u] = t[u]);
    var f = arguments.length - 2;
    if (f === 1) o.children = n;
    else if (1 < f) {
      for (var s = Array(f), d = 0; d < f; d++) s[d] = arguments[d + 2];
      o.children = s;
    }
    if (e && e.defaultProps) for (u in ((f = e.defaultProps), f)) o[u] === void 0 && (o[u] = f[u]);
    return { $$typeof: i, type: e, key: c, ref: l, props: o, _owner: q.current };
  }
  function G(e, t) {
    return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function D(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === i;
  }
  function Y(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
      '$' +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var J = /\/+/g;
  function A(e, t) {
    return typeof e == 'object' && e !== null && e.key != null ? Y('' + e.key) : t.toString(36);
  }
  function O(e, t, n, u, o) {
    var c = typeof e;
    (c === 'undefined' || c === 'boolean') && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else
      switch (c) {
        case 'string':
        case 'number':
          l = !0;
          break;
        case 'object':
          switch (e.$$typeof) {
            case i:
            case S:
              l = !0;
          }
      }
    if (l)
      return (
        (l = e),
        (o = o(l)),
        (e = u === '' ? '.' + A(l, 0) : u),
        V(o)
          ? ((n = ''),
            e != null && (n = e.replace(J, '$&/') + '/'),
            O(o, t, n, '', function (d) {
              return d;
            }))
          : o != null &&
            (D(o) &&
              (o = G(
                o,
                n +
                  (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(J, '$&/') + '/') +
                  e
              )),
            t.push(o)),
        1
      );
    if (((l = 0), (u = u === '' ? '.' : u + ':'), V(e)))
      for (var f = 0; f < e.length; f++) {
        c = e[f];
        var s = u + A(c, f);
        l += O(c, t, n, s, o);
      }
    else if (((s = j(e)), typeof s == 'function'))
      for (e = s.call(e), f = 0; !(c = e.next()).done; )
        (c = c.value), (s = u + A(c, f++)), (l += O(c, t, n, s, o));
    else if (c === 'object')
      throw (
        ((t = String(e)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return l;
  }
  function $(e, t, n) {
    if (e == null) return e;
    var u = [],
      o = 0;
    return (
      O(e, u, '', '', function (c) {
        return t.call(n, c, o++);
      }),
      u
    );
  }
  function K(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var a = { current: null },
    C = { transition: null },
    Q = { ReactCurrentDispatcher: a, ReactCurrentBatchConfig: C, ReactCurrentOwner: q };
  return (
    (r.Children = {
      map: $,
      forEach: function (e, t, n) {
        $(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          $(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          $(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!D(e))
          throw Error('React.Children.only expected to receive a single React element child.');
        return e;
      }
    }),
    (r.Component = w),
    (r.Fragment = v),
    (r.Profiler = m),
    (r.PureComponent = T),
    (r.StrictMode = _),
    (r.Suspense = p),
    (r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q),
    (r.cloneElement = function (e, t, n) {
      if (e == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
        );
      var u = L({}, e.props),
        o = e.key,
        c = e.ref,
        l = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((c = t.ref), (l = q.current)),
          t.key !== void 0 && (o = '' + t.key),
          e.type && e.type.defaultProps)
        )
          var f = e.type.defaultProps;
        for (s in t)
          M.call(t, s) &&
            !z.hasOwnProperty(s) &&
            (u[s] = t[s] === void 0 && f !== void 0 ? f[s] : t[s]);
      }
      var s = arguments.length - 2;
      if (s === 1) u.children = n;
      else if (1 < s) {
        f = Array(s);
        for (var d = 0; d < s; d++) f[d] = arguments[d + 2];
        u.children = f;
      }
      return { $$typeof: i, type: e.type, key: o, ref: c, props: u, _owner: l };
    }),
    (r.createContext = function (e) {
      return (
        (e = {
          $$typeof: x,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }),
        (e.Provider = { $$typeof: h, _context: e }),
        (e.Consumer = e)
      );
    }),
    (r.createElement = B),
    (r.createFactory = function (e) {
      var t = B.bind(null, e);
      return (t.type = e), t;
    }),
    (r.createRef = function () {
      return { current: null };
    }),
    (r.forwardRef = function (e) {
      return { $$typeof: b, render: e };
    }),
    (r.isValidElement = D),
    (r.lazy = function (e) {
      return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: K };
    }),
    (r.memo = function (e, t) {
      return { $$typeof: g, type: e, compare: t === void 0 ? null : t };
    }),
    (r.startTransition = function (e) {
      var t = C.transition;
      C.transition = {};
      try {
        e();
      } finally {
        C.transition = t;
      }
    }),
    (r.unstable_act = function () {
      throw Error('act(...) is not supported in production builds of React.');
    }),
    (r.useCallback = function (e, t) {
      return a.current.useCallback(e, t);
    }),
    (r.useContext = function (e) {
      return a.current.useContext(e);
    }),
    (r.useDebugValue = function () {}),
    (r.useDeferredValue = function (e) {
      return a.current.useDeferredValue(e);
    }),
    (r.useEffect = function (e, t) {
      return a.current.useEffect(e, t);
    }),
    (r.useId = function () {
      return a.current.useId();
    }),
    (r.useImperativeHandle = function (e, t, n) {
      return a.current.useImperativeHandle(e, t, n);
    }),
    (r.useInsertionEffect = function (e, t) {
      return a.current.useInsertionEffect(e, t);
    }),
    (r.useLayoutEffect = function (e, t) {
      return a.current.useLayoutEffect(e, t);
    }),
    (r.useMemo = function (e, t) {
      return a.current.useMemo(e, t);
    }),
    (r.useReducer = function (e, t, n) {
      return a.current.useReducer(e, t, n);
    }),
    (r.useRef = function (e) {
      return a.current.useRef(e);
    }),
    (r.useState = function (e) {
      return a.current.useState(e);
    }),
    (r.useSyncExternalStore = function (e, t, n) {
      return a.current.useSyncExternalStore(e, t, n);
    }),
    (r.useTransition = function () {
      return a.current.useTransition();
    }),
    (r.version = '18.2.0'),
    r
  );
}
(function (i) {
  i.exports = ee();
})(P);
const te = Z(P.exports),
  oe = X({ __proto__: null, default: te }, [P.exports]);
var I = { exports: {} },
  k = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var W;
function re() {
  if (W) return k;
  W = 1;
  var i = P.exports,
    S = Symbol.for('react.element'),
    v = Symbol.for('react.fragment'),
    _ = Object.prototype.hasOwnProperty,
    m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(b, p, g) {
    var y,
      R = {},
      j = null,
      E = null;
    g !== void 0 && (j = '' + g),
      p.key !== void 0 && (j = '' + p.key),
      p.ref !== void 0 && (E = p.ref);
    for (y in p) _.call(p, y) && !h.hasOwnProperty(y) && (R[y] = p[y]);
    if (b && b.defaultProps) for (y in ((p = b.defaultProps), p)) R[y] === void 0 && (R[y] = p[y]);
    return { $$typeof: S, type: b, key: j, ref: E, props: R, _owner: m.current };
  }
  return (k.Fragment = v), (k.jsx = x), (k.jsxs = x), k;
}
(function (i) {
  i.exports = re();
})(I);
const ue = I.exports.Fragment,
  ie = I.exports.jsx,
  se = I.exports.jsxs;
export { ue as F, te as R, se as a, oe as b, ne as c, ie as j, P as r };
