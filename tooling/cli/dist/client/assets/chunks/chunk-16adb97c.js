import { e as s } from './chunk-d9a61b28.js';
import { r as b } from './chunk-5011acf0.js';
var T = Array.isArray;
function x(e) {
  return Array.isArray(e) && e.length > 0;
}
function g(e) {
  var r = new Set([e]);
  return (
    r.forEach(function (t) {
      s(t) &&
        d(t) === t &&
        Object.getOwnPropertyNames(t).forEach(function (n) {
          s(t[n]) && r.add(t[n]);
        });
    }),
    e
  );
}
function d(e) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (r) {
      if (r instanceof TypeError) return null;
      throw r;
    }
  return e;
}
function F(e) {
  return globalThis.__DEV__ !== !1 && g(e), e;
}
var f;
(function (e) {
  (e[(e.loading = 1)] = 'loading'),
    (e[(e.setVariables = 2)] = 'setVariables'),
    (e[(e.fetchMore = 3)] = 'fetchMore'),
    (e[(e.refetch = 4)] = 'refetch'),
    (e[(e.poll = 6)] = 'poll'),
    (e[(e.ready = 7)] = 'ready'),
    (e[(e.error = 8)] = 'error');
})(f || (f = {}));
function H(e) {
  return e ? e < 7 : !1;
}
function a(e) {
  return (
    (a =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    a(e)
  );
}
function h(e, r) {
  if (a(e) !== 'object' || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || 'default');
    if (a(n) !== 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(e);
}
function y(e) {
  var r = h(e, 'string');
  return a(r) === 'symbol' ? r : String(r);
}
function v(e, r, t) {
  return (
    (r = y(r)),
    r in e
      ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (e[r] = t),
    e
  );
}
function O(e, r) {
  if (!(e instanceof r)) throw new TypeError('Cannot call a class as a function');
}
function c(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, y(n.key), n);
  }
}
function _(e, r, t) {
  return (
    r && c(e.prototype, r), t && c(e, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e
  );
}
var E =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  P = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '\xA9',
    '&#169;': '\xA9',
    '&reg;': '\xAE',
    '&#174;': '\xAE',
    '&hellip;': '\u2026',
    '&#8230;': '\u2026',
    '&#x2F;': '/',
    '&#47;': '/'
  },
  A = function (r) {
    return P[r];
  },
  I = function (r) {
    return r.replace(E, A);
  };
function u(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function l(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? u(Object(t), !0).forEach(function (n) {
          v(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : u(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
var o = {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: '',
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
    useSuspense: !0,
    unescape: I
  },
  m,
  R = b.exports.createContext();
function j() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  o = l(l({}, o), e);
}
function S() {
  return o;
}
var z = (function () {
  function e() {
    O(this, e), (this.usedNamespaces = {});
  }
  return (
    _(e, [
      {
        key: 'addUsedNamespaces',
        value: function (t) {
          var n = this;
          t.forEach(function (i) {
            n.usedNamespaces[i] || (n.usedNamespaces[i] = !0);
          });
        }
      },
      {
        key: 'getUsedNamespaces',
        value: function () {
          return Object.keys(this.usedNamespaces);
        }
      }
    ]),
    e
  );
})();
function w(e) {
  m = e;
}
function C() {
  return m;
}
var U = {
  type: '3rdParty',
  init: function (r) {
    j(r.options.react), w(r);
  }
};
function V(e) {
  if (Array.isArray(e)) return e;
}
function p(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function q(e, r) {
  if (!!e) {
    if (typeof e == 'string') return p(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if ((t === 'Object' && e.constructor && (t = e.constructor.name), t === 'Map' || t === 'Set'))
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, r);
  }
}
function K() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
export {
  R as I,
  f as N,
  z as R,
  a as _,
  x as a,
  H as b,
  U as c,
  V as d,
  q as e,
  K as f,
  _ as g,
  O as h,
  T as i,
  v as j,
  S as k,
  C as l,
  F as m
};
