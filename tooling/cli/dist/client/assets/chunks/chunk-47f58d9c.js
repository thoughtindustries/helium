import { _ as $, d as Be, e as He, f as Me, g as j, h as N, j as D } from './chunk-16adb97c.js';
function F(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function le(s, a) {
  return (
    (le = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    le(s, a)
  );
}
function ne(s, a) {
  if (typeof a != 'function' && a !== null)
    throw new TypeError('Super expression must either be null or a function');
  (s.prototype = Object.create(a && a.prototype, {
    constructor: { value: s, writable: !0, configurable: !0 }
  })),
    Object.defineProperty(s, 'prototype', { writable: !1 }),
    a && le(s, a);
}
function G(s, a) {
  if (a && ($(a) === 'object' || typeof a == 'function')) return a;
  if (a !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return F(s);
}
function k(s) {
  return (
    (k = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    k(s)
  );
}
function Je(s) {
  if ((typeof Symbol < 'u' && s[Symbol.iterator] != null) || s['@@iterator'] != null)
    return Array.from(s);
}
function ze(s) {
  return Be(s) || Je(s) || He(s) || Me();
}
function be(s, a) {
  var n = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(s);
    a &&
      (t = t.filter(function (e) {
        return Object.getOwnPropertyDescriptor(s, e).enumerable;
      })),
      n.push.apply(n, t);
  }
  return n;
}
function Oe(s) {
  for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? be(Object(n), !0).forEach(function (t) {
          D(s, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n))
      : be(Object(n)).forEach(function (t) {
          Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return s;
}
var We = {
    type: 'logger',
    log: function (a) {
      this.output('log', a);
    },
    warn: function (a) {
      this.output('warn', a);
    },
    error: function (a) {
      this.output('error', a);
    },
    output: function (a, n) {
      console && console[a] && console[a].apply(console, n);
    }
  },
  Ye = (function () {
    function s(a) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      N(this, s), this.init(a, n);
    }
    return (
      j(s, [
        {
          key: 'init',
          value: function (n) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            (this.prefix = t.prefix || 'i18next:'),
              (this.logger = n || We),
              (this.options = t),
              (this.debug = t.debug);
          }
        },
        {
          key: 'setDebug',
          value: function (n) {
            this.debug = n;
          }
        },
        {
          key: 'log',
          value: function () {
            for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
            return this.forward(t, 'log', '', !0);
          }
        },
        {
          key: 'warn',
          value: function () {
            for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
            return this.forward(t, 'warn', '', !0);
          }
        },
        {
          key: 'error',
          value: function () {
            for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
            return this.forward(t, 'error', '');
          }
        },
        {
          key: 'deprecate',
          value: function () {
            for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
            return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
          }
        },
        {
          key: 'forward',
          value: function (n, t, e, r) {
            return r && !this.debug
              ? null
              : (typeof n[0] == 'string' &&
                  (n[0] = ''.concat(e).concat(this.prefix, ' ').concat(n[0])),
                this.logger[t](n));
          }
        },
        {
          key: 'create',
          value: function (n) {
            return new s(
              this.logger,
              Oe(Oe({}, { prefix: ''.concat(this.prefix, ':').concat(n, ':') }), this.options)
            );
          }
        },
        {
          key: 'clone',
          value: function (n) {
            return (
              (n = n || this.options), (n.prefix = n.prefix || this.prefix), new s(this.logger, n)
            );
          }
        }
      ]),
      s
    );
  })(),
  R = new Ye(),
  _ = (function () {
    function s() {
      N(this, s), (this.observers = {});
    }
    return (
      j(s, [
        {
          key: 'on',
          value: function (n, t) {
            var e = this;
            return (
              n.split(' ').forEach(function (r) {
                (e.observers[r] = e.observers[r] || []), e.observers[r].push(t);
              }),
              this
            );
          }
        },
        {
          key: 'off',
          value: function (n, t) {
            if (!!this.observers[n]) {
              if (!t) {
                delete this.observers[n];
                return;
              }
              this.observers[n] = this.observers[n].filter(function (e) {
                return e !== t;
              });
            }
          }
        },
        {
          key: 'emit',
          value: function (n) {
            for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
              e[r - 1] = arguments[r];
            if (this.observers[n]) {
              var i = [].concat(this.observers[n]);
              i.forEach(function (u) {
                u.apply(void 0, e);
              });
            }
            if (this.observers['*']) {
              var o = [].concat(this.observers['*']);
              o.forEach(function (u) {
                u.apply(u, [n].concat(e));
              });
            }
          }
        }
      ]),
      s
    );
  })();
function Y() {
  var s,
    a,
    n = new Promise(function (t, e) {
      (s = t), (a = e);
    });
  return (n.resolve = s), (n.reject = a), n;
}
function Se(s) {
  return s == null ? '' : '' + s;
}
function Ge(s, a, n) {
  s.forEach(function (t) {
    a[t] && (n[t] = a[t]);
  });
}
function ce(s, a, n) {
  function t(o) {
    return o && o.indexOf('###') > -1 ? o.replace(/###/g, '.') : o;
  }
  function e() {
    return !s || typeof s == 'string';
  }
  for (var r = typeof a != 'string' ? [].concat(a) : a.split('.'); r.length > 1; ) {
    if (e()) return {};
    var i = t(r.shift());
    !s[i] && n && (s[i] = new n()),
      Object.prototype.hasOwnProperty.call(s, i) ? (s = s[i]) : (s = {});
  }
  return e() ? {} : { obj: s, k: t(r.shift()) };
}
function xe(s, a, n) {
  var t = ce(s, a, Object),
    e = t.obj,
    r = t.k;
  e[r] = n;
}
function Qe(s, a, n, t) {
  var e = ce(s, a, Object),
    r = e.obj,
    i = e.k;
  (r[i] = r[i] || []), t && (r[i] = r[i].concat(n)), t || r[i].push(n);
}
function te(s, a) {
  var n = ce(s, a),
    t = n.obj,
    e = n.k;
  if (!!t) return t[e];
}
function we(s, a, n) {
  var t = te(s, n);
  return t !== void 0 ? t : te(a, n);
}
function Ie(s, a, n) {
  for (var t in a)
    t !== '__proto__' &&
      t !== 'constructor' &&
      (t in s
        ? typeof s[t] == 'string' ||
          s[t] instanceof String ||
          typeof a[t] == 'string' ||
          a[t] instanceof String
          ? n && (s[t] = a[t])
          : Ie(s[t], a[t], n)
        : (s[t] = a[t]));
  return s;
}
function U(s) {
  return s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var Ze = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
function qe(s) {
  return typeof s == 'string'
    ? s.replace(/[&<>"'\/]/g, function (a) {
        return Ze[a];
      })
    : s;
}
var ae =
    typeof window < 'u' &&
    window.navigator &&
    typeof window.navigator.userAgentData > 'u' &&
    window.navigator.userAgent &&
    window.navigator.userAgent.indexOf('MSIE') > -1,
  Xe = [' ', ',', '?', '!', ';'];
function et(s, a, n) {
  (a = a || ''), (n = n || '');
  var t = Xe.filter(function (o) {
    return a.indexOf(o) < 0 && n.indexOf(o) < 0;
  });
  if (t.length === 0) return !0;
  var e = new RegExp(
      '('.concat(
        t
          .map(function (o) {
            return o === '?' ? '\\?' : o;
          })
          .join('|'),
        ')'
      )
    ),
    r = !e.test(s);
  if (!r) {
    var i = s.indexOf(n);
    i > 0 && !e.test(s.substring(0, i)) && (r = !0);
  }
  return r;
}
function Pe(s, a) {
  var n = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(s);
    a &&
      (t = t.filter(function (e) {
        return Object.getOwnPropertyDescriptor(s, e).enumerable;
      })),
      n.push.apply(n, t);
  }
  return n;
}
function X(s) {
  for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Pe(Object(n), !0).forEach(function (t) {
          D(s, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n))
      : Pe(Object(n)).forEach(function (t) {
          Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return s;
}
function tt(s) {
  var a = rt();
  return function () {
    var t = k(s),
      e;
    if (a) {
      var r = k(this).constructor;
      e = Reflect.construct(t, arguments, r);
    } else e = t.apply(this, arguments);
    return G(this, e);
  };
}
function rt() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function Te(s, a) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
  if (!!s) {
    if (s[a]) return s[a];
    for (var t = a.split(n), e = s, r = 0; r < t.length; ++r) {
      if (!e || (typeof e[t[r]] == 'string' && r + 1 < t.length)) return;
      if (e[t[r]] === void 0) {
        for (var i = 2, o = t.slice(r, r + i).join(n), u = e[o]; u === void 0 && t.length > r + i; )
          i++, (o = t.slice(r, r + i).join(n)), (u = e[o]);
        if (u === void 0) return;
        if (u === null) return null;
        if (a.endsWith(o)) {
          if (typeof u == 'string') return u;
          if (o && typeof u[o] == 'string') return u[o];
        }
        var l = t.slice(r + i).join(n);
        return l ? Te(u, l, n) : void 0;
      }
      e = e[t[r]];
    }
    return e;
  }
}
var nt = (function (s) {
    ne(n, s);
    var a = tt(n);
    function n(t) {
      var e,
        r =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { ns: ['translation'], defaultNS: 'translation' };
      return (
        N(this, n),
        (e = a.call(this)),
        ae && _.call(F(e)),
        (e.data = t || {}),
        (e.options = r),
        e.options.keySeparator === void 0 && (e.options.keySeparator = '.'),
        e.options.ignoreJSONStructure === void 0 && (e.options.ignoreJSONStructure = !0),
        e
      );
    }
    return (
      j(n, [
        {
          key: 'addNamespaces',
          value: function (e) {
            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
          }
        },
        {
          key: 'removeNamespaces',
          value: function (e) {
            var r = this.options.ns.indexOf(e);
            r > -1 && this.options.ns.splice(r, 1);
          }
        },
        {
          key: 'getResource',
          value: function (e, r, i) {
            var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
              u = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
              l =
                o.ignoreJSONStructure !== void 0
                  ? o.ignoreJSONStructure
                  : this.options.ignoreJSONStructure,
              c = [e, r];
            i && typeof i != 'string' && (c = c.concat(i)),
              i && typeof i == 'string' && (c = c.concat(u ? i.split(u) : i)),
              e.indexOf('.') > -1 && (c = e.split('.'));
            var f = te(this.data, c);
            return f || !l || typeof i != 'string'
              ? f
              : Te(this.data && this.data[e] && this.data[e][r], i, u);
          }
        },
        {
          key: 'addResource',
          value: function (e, r, i, o) {
            var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 },
              l = this.options.keySeparator;
            l === void 0 && (l = '.');
            var c = [e, r];
            i && (c = c.concat(l ? i.split(l) : i)),
              e.indexOf('.') > -1 && ((c = e.split('.')), (o = r), (r = c[1])),
              this.addNamespaces(r),
              xe(this.data, c, o),
              u.silent || this.emit('added', e, r, i, o);
          }
        },
        {
          key: 'addResources',
          value: function (e, r, i) {
            var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
            for (var u in i)
              (typeof i[u] == 'string' ||
                Object.prototype.toString.apply(i[u]) === '[object Array]') &&
                this.addResource(e, r, u, i[u], { silent: !0 });
            o.silent || this.emit('added', e, r, i);
          }
        },
        {
          key: 'addResourceBundle',
          value: function (e, r, i, o, u) {
            var l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1 },
              c = [e, r];
            e.indexOf('.') > -1 && ((c = e.split('.')), (o = i), (i = r), (r = c[1])),
              this.addNamespaces(r);
            var f = te(this.data, c) || {};
            o ? Ie(f, i, u) : (f = X(X({}, f), i)),
              xe(this.data, c, f),
              l.silent || this.emit('added', e, r, i);
          }
        },
        {
          key: 'removeResourceBundle',
          value: function (e, r) {
            this.hasResourceBundle(e, r) && delete this.data[e][r],
              this.removeNamespaces(r),
              this.emit('removed', e, r);
          }
        },
        {
          key: 'hasResourceBundle',
          value: function (e, r) {
            return this.getResource(e, r) !== void 0;
          }
        },
        {
          key: 'getResourceBundle',
          value: function (e, r) {
            return (
              r || (r = this.options.defaultNS),
              this.options.compatibilityAPI === 'v1'
                ? X(X({}, {}), this.getResource(e, r))
                : this.getResource(e, r)
            );
          }
        },
        {
          key: 'getDataByLanguage',
          value: function (e) {
            return this.data[e];
          }
        },
        {
          key: 'hasLanguageSomeTranslations',
          value: function (e) {
            var r = this.getDataByLanguage(e),
              i = (r && Object.keys(r)) || [];
            return !!i.find(function (o) {
              return r[o] && Object.keys(r[o]).length > 0;
            });
          }
        },
        {
          key: 'toJSON',
          value: function () {
            return this.data;
          }
        }
      ]),
      n
    );
  })(_),
  Ae = {
    processors: {},
    addPostProcessor: function (a) {
      this.processors[a.name] = a;
    },
    handle: function (a, n, t, e, r) {
      var i = this;
      return (
        a.forEach(function (o) {
          i.processors[o] && (n = i.processors[o].process(n, t, e, r));
        }),
        n
      );
    }
  };
function Le(s, a) {
  var n = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(s);
    a &&
      (t = t.filter(function (e) {
        return Object.getOwnPropertyDescriptor(s, e).enumerable;
      })),
      n.push.apply(n, t);
  }
  return n;
}
function S(s) {
  for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Le(Object(n), !0).forEach(function (t) {
          D(s, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n))
      : Le(Object(n)).forEach(function (t) {
          Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return s;
}
function at(s) {
  var a = it();
  return function () {
    var t = k(s),
      e;
    if (a) {
      var r = k(this).constructor;
      e = Reflect.construct(t, arguments, r);
    } else e = t.apply(this, arguments);
    return G(this, e);
  };
}
function it() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
var Re = {},
  ke = (function (s) {
    ne(n, s);
    var a = at(n);
    function n(t) {
      var e,
        r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return (
        N(this, n),
        (e = a.call(this)),
        ae && _.call(F(e)),
        Ge(
          [
            'resourceStore',
            'languageUtils',
            'pluralResolver',
            'interpolator',
            'backendConnector',
            'i18nFormat',
            'utils'
          ],
          t,
          F(e)
        ),
        (e.options = r),
        e.options.keySeparator === void 0 && (e.options.keySeparator = '.'),
        (e.logger = R.create('translator')),
        e
      );
    }
    return (
      j(
        n,
        [
          {
            key: 'changeLanguage',
            value: function (e) {
              e && (this.language = e);
            }
          },
          {
            key: 'exists',
            value: function (e) {
              var r =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : { interpolation: {} };
              if (e == null) return !1;
              var i = this.resolve(e, r);
              return i && i.res !== void 0;
            }
          },
          {
            key: 'extractFromKey',
            value: function (e, r) {
              var i = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
              i === void 0 && (i = ':');
              var o = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
                u = r.ns || this.options.defaultNS || [],
                l = i && e.indexOf(i) > -1,
                c =
                  !this.options.userDefinedKeySeparator &&
                  !r.keySeparator &&
                  !this.options.userDefinedNsSeparator &&
                  !r.nsSeparator &&
                  !et(e, i, o);
              if (l && !c) {
                var f = e.match(this.interpolator.nestingRegexp);
                if (f && f.length > 0) return { key: e, namespaces: u };
                var g = e.split(i);
                (i !== o || (i === o && this.options.ns.indexOf(g[0]) > -1)) && (u = g.shift()),
                  (e = g.join(o));
              }
              return typeof u == 'string' && (u = [u]), { key: e, namespaces: u };
            }
          },
          {
            key: 'translate',
            value: function (e, r, i) {
              var o = this;
              if (
                ($(r) !== 'object' &&
                  this.options.overloadTranslationOptionHandler &&
                  (r = this.options.overloadTranslationOptionHandler(arguments)),
                r || (r = {}),
                e == null)
              )
                return '';
              Array.isArray(e) || (e = [String(e)]);
              var u = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails,
                l = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
                c = this.extractFromKey(e[e.length - 1], r),
                f = c.key,
                g = c.namespaces,
                p = g[g.length - 1],
                m = r.lng || this.language,
                y = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
              if (m && m.toLowerCase() === 'cimode') {
                if (y) {
                  var v = r.nsSeparator || this.options.nsSeparator;
                  return u
                    ? ((d.res = ''.concat(p).concat(v).concat(f)), d)
                    : ''.concat(p).concat(v).concat(f);
                }
                return u ? ((d.res = f), d) : f;
              }
              var d = this.resolve(e, r),
                h = d && d.res,
                O = (d && d.usedKey) || f,
                b = (d && d.exactUsedKey) || f,
                x = Object.prototype.toString.apply(h),
                C = ['[object Number]', '[object Function]', '[object RegExp]'],
                I = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays,
                B = !this.i18nFormat || this.i18nFormat.handleAsObject,
                H = typeof h != 'string' && typeof h != 'boolean' && typeof h != 'number';
              if (
                B &&
                h &&
                H &&
                C.indexOf(x) < 0 &&
                !(typeof I == 'string' && x === '[object Array]')
              ) {
                if (!r.returnObjects && !this.options.returnObjects) {
                  this.options.returnedObjectHandler ||
                    this.logger.warn(
                      'accessing an object - but returnObjects options is not enabled!'
                    );
                  var T = this.options.returnedObjectHandler
                    ? this.options.returnedObjectHandler(O, h, S(S({}, r), {}, { ns: g }))
                    : "key '"
                        .concat(f, ' (')
                        .concat(this.language, ")' returned an object instead of string.");
                  return u ? ((d.res = T), d) : T;
                }
                if (l) {
                  var ge = x === '[object Array]',
                    Q = ge ? [] : {},
                    Ke = ge ? b : O;
                  for (var A in h)
                    if (Object.prototype.hasOwnProperty.call(h, A)) {
                      var pe = ''.concat(Ke).concat(l).concat(A);
                      (Q[A] = this.translate(pe, S(S({}, r), { joinArrays: !1, ns: g }))),
                        Q[A] === pe && (Q[A] = h[A]);
                    }
                  h = Q;
                }
              } else if (B && typeof I == 'string' && x === '[object Array]')
                (h = h.join(I)), h && (h = this.extendTranslation(h, e, r, i));
              else {
                var Z = !1,
                  M = !1,
                  de = r.count !== void 0 && typeof r.count != 'string',
                  ie = n.hasDefaultValue(r),
                  Ue = de ? this.pluralResolver.getSuffix(m, r.count, r) : '',
                  J = r['defaultValue'.concat(Ue)] || r.defaultValue;
                !this.isValidLookup(h) && ie && ((Z = !0), (h = J)),
                  this.isValidLookup(h) || ((M = !0), (h = f));
                var Ve =
                    r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                  $e = Ve && M ? void 0 : h,
                  z = ie && J !== h && this.options.updateMissing;
                if (M || Z || z) {
                  if ((this.logger.log(z ? 'updateKey' : 'missingKey', m, p, f, z ? J : h), l)) {
                    var he = this.resolve(f, S(S({}, r), {}, { keySeparator: !1 }));
                    he &&
                      he.res &&
                      this.logger.warn(
                        'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
                      );
                  }
                  var W = [],
                    q = this.languageUtils.getFallbackCodes(
                      this.options.fallbackLng,
                      r.lng || this.language
                    );
                  if (this.options.saveMissingTo === 'fallback' && q && q[0])
                    for (var se = 0; se < q.length; se++) W.push(q[se]);
                  else
                    this.options.saveMissingTo === 'all'
                      ? (W = this.languageUtils.toResolveHierarchy(r.lng || this.language))
                      : W.push(r.lng || this.language);
                  var ve = function (K, ue, me) {
                    var ye = ie && me !== h ? me : $e;
                    o.options.missingKeyHandler
                      ? o.options.missingKeyHandler(K, p, ue, ye, z, r)
                      : o.backendConnector &&
                        o.backendConnector.saveMissing &&
                        o.backendConnector.saveMissing(K, p, ue, ye, z, r),
                      o.emit('missingKey', K, p, ue, h);
                  };
                  this.options.saveMissing &&
                    (this.options.saveMissingPlurals && de
                      ? W.forEach(function (oe) {
                          o.pluralResolver.getSuffixes(oe, r).forEach(function (K) {
                            ve([oe], f + K, r['defaultValue'.concat(K)] || J);
                          });
                        })
                      : ve(W, f, J));
                }
                (h = this.extendTranslation(h, e, r, d, i)),
                  M &&
                    h === f &&
                    this.options.appendNamespaceToMissingKey &&
                    (h = ''.concat(p, ':').concat(f)),
                  (M || Z) &&
                    this.options.parseMissingKeyHandler &&
                    (this.options.compatibilityAPI !== 'v1'
                      ? (h = this.options.parseMissingKeyHandler(
                          this.options.appendNamespaceToMissingKey
                            ? ''.concat(p, ':').concat(f)
                            : f,
                          Z ? h : void 0
                        ))
                      : (h = this.options.parseMissingKeyHandler(h)));
              }
              return u ? ((d.res = h), d) : h;
            }
          },
          {
            key: 'extendTranslation',
            value: function (e, r, i, o, u) {
              var l = this;
              if (this.i18nFormat && this.i18nFormat.parse)
                e = this.i18nFormat.parse(
                  e,
                  S(S({}, this.options.interpolation.defaultVariables), i),
                  o.usedLng,
                  o.usedNS,
                  o.usedKey,
                  { resolved: o }
                );
              else if (!i.skipInterpolation) {
                i.interpolation &&
                  this.interpolator.init(
                    S(S({}, i), {
                      interpolation: S(S({}, this.options.interpolation), i.interpolation)
                    })
                  );
                var c =
                    typeof e == 'string' &&
                    (i && i.interpolation && i.interpolation.skipOnVariables !== void 0
                      ? i.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables),
                  f;
                if (c) {
                  var g = e.match(this.interpolator.nestingRegexp);
                  f = g && g.length;
                }
                var p = i.replace && typeof i.replace != 'string' ? i.replace : i;
                if (
                  (this.options.interpolation.defaultVariables &&
                    (p = S(S({}, this.options.interpolation.defaultVariables), p)),
                  (e = this.interpolator.interpolate(e, p, i.lng || this.language, i)),
                  c)
                ) {
                  var m = e.match(this.interpolator.nestingRegexp),
                    y = m && m.length;
                  f < y && (i.nest = !1);
                }
                i.nest !== !1 &&
                  (e = this.interpolator.nest(
                    e,
                    function () {
                      for (var h = arguments.length, O = new Array(h), b = 0; b < h; b++)
                        O[b] = arguments[b];
                      return u && u[0] === O[0] && !i.context
                        ? (l.logger.warn(
                            'It seems you are nesting recursively key: '
                              .concat(O[0], ' in key: ')
                              .concat(r[0])
                          ),
                          null)
                        : l.translate.apply(l, O.concat([r]));
                    },
                    i
                  )),
                  i.interpolation && this.interpolator.reset();
              }
              var v = i.postProcess || this.options.postProcess,
                d = typeof v == 'string' ? [v] : v;
              return (
                e != null &&
                  d &&
                  d.length &&
                  i.applyPostProcessor !== !1 &&
                  (e = Ae.handle(
                    d,
                    e,
                    r,
                    this.options && this.options.postProcessPassResolved
                      ? S({ i18nResolved: o }, i)
                      : i,
                    this
                  )),
                e
              );
            }
          },
          {
            key: 'resolve',
            value: function (e) {
              var r = this,
                i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                o,
                u,
                l,
                c,
                f;
              return (
                typeof e == 'string' && (e = [e]),
                e.forEach(function (g) {
                  if (!r.isValidLookup(o)) {
                    var p = r.extractFromKey(g, i),
                      m = p.key;
                    u = m;
                    var y = p.namespaces;
                    r.options.fallbackNS && (y = y.concat(r.options.fallbackNS));
                    var v = i.count !== void 0 && typeof i.count != 'string',
                      d = v && !i.ordinal && i.count === 0 && r.pluralResolver.shouldUseIntlApi(),
                      h =
                        i.context !== void 0 &&
                        (typeof i.context == 'string' || typeof i.context == 'number') &&
                        i.context !== '',
                      O = i.lngs
                        ? i.lngs
                        : r.languageUtils.toResolveHierarchy(i.lng || r.language, i.fallbackLng);
                    y.forEach(function (b) {
                      r.isValidLookup(o) ||
                        ((f = b),
                        !Re[''.concat(O[0], '-').concat(b)] &&
                          r.utils &&
                          r.utils.hasLoadedNamespace &&
                          !r.utils.hasLoadedNamespace(f) &&
                          ((Re[''.concat(O[0], '-').concat(b)] = !0),
                          r.logger.warn(
                            'key "'
                              .concat(u, '" for languages "')
                              .concat(O.join(', '), `" won't get resolved as namespace "`)
                              .concat(f, '" was not yet loaded'),
                            'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                          )),
                        O.forEach(function (x) {
                          if (!r.isValidLookup(o)) {
                            c = x;
                            var C = [m];
                            if (r.i18nFormat && r.i18nFormat.addLookupKeys)
                              r.i18nFormat.addLookupKeys(C, m, x, b, i);
                            else {
                              var I;
                              v && (I = r.pluralResolver.getSuffix(x, i.count, i));
                              var B = ''.concat(r.options.pluralSeparator, 'zero');
                              if ((v && (C.push(m + I), d && C.push(m + B)), h)) {
                                var H = ''
                                  .concat(m)
                                  .concat(r.options.contextSeparator)
                                  .concat(i.context);
                                C.push(H), v && (C.push(H + I), d && C.push(H + B));
                              }
                            }
                            for (var T; (T = C.pop()); )
                              r.isValidLookup(o) || ((l = T), (o = r.getResource(x, b, T, i)));
                          }
                        }));
                    });
                  }
                }),
                { res: o, usedKey: u, exactUsedKey: l, usedLng: c, usedNS: f }
              );
            }
          },
          {
            key: 'isValidLookup',
            value: function (e) {
              return (
                e !== void 0 &&
                !(!this.options.returnNull && e === null) &&
                !(!this.options.returnEmptyString && e === '')
              );
            }
          },
          {
            key: 'getResource',
            value: function (e, r, i) {
              var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
              return this.i18nFormat && this.i18nFormat.getResource
                ? this.i18nFormat.getResource(e, r, i, o)
                : this.resourceStore.getResource(e, r, i, o);
            }
          }
        ],
        [
          {
            key: 'hasDefaultValue',
            value: function (e) {
              var r = 'defaultValue';
              for (var i in e)
                if (
                  Object.prototype.hasOwnProperty.call(e, i) &&
                  r === i.substring(0, r.length) &&
                  e[i] !== void 0
                )
                  return !0;
              return !1;
            }
          }
        ]
      ),
      n
    );
  })(_);
function fe(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
var st = (function () {
    function s(a) {
      N(this, s),
        (this.options = a),
        (this.supportedLngs = this.options.supportedLngs || !1),
        (this.logger = R.create('languageUtils'));
    }
    return (
      j(s, [
        {
          key: 'getScriptPartFromCode',
          value: function (n) {
            if (!n || n.indexOf('-') < 0) return null;
            var t = n.split('-');
            return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === 'x')
              ? null
              : this.formatLanguageCode(t.join('-'));
          }
        },
        {
          key: 'getLanguagePartFromCode',
          value: function (n) {
            if (!n || n.indexOf('-') < 0) return n;
            var t = n.split('-');
            return this.formatLanguageCode(t[0]);
          }
        },
        {
          key: 'formatLanguageCode',
          value: function (n) {
            if (typeof n == 'string' && n.indexOf('-') > -1) {
              var t = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'],
                e = n.split('-');
              return (
                this.options.lowerCaseLng
                  ? (e = e.map(function (r) {
                      return r.toLowerCase();
                    }))
                  : e.length === 2
                  ? ((e[0] = e[0].toLowerCase()),
                    (e[1] = e[1].toUpperCase()),
                    t.indexOf(e[1].toLowerCase()) > -1 && (e[1] = fe(e[1].toLowerCase())))
                  : e.length === 3 &&
                    ((e[0] = e[0].toLowerCase()),
                    e[1].length === 2 && (e[1] = e[1].toUpperCase()),
                    e[0] !== 'sgn' && e[2].length === 2 && (e[2] = e[2].toUpperCase()),
                    t.indexOf(e[1].toLowerCase()) > -1 && (e[1] = fe(e[1].toLowerCase())),
                    t.indexOf(e[2].toLowerCase()) > -1 && (e[2] = fe(e[2].toLowerCase()))),
                e.join('-')
              );
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? n.toLowerCase() : n;
          }
        },
        {
          key: 'isSupportedCode',
          value: function (n) {
            return (
              (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
                (n = this.getLanguagePartFromCode(n)),
              !this.supportedLngs ||
                !this.supportedLngs.length ||
                this.supportedLngs.indexOf(n) > -1
            );
          }
        },
        {
          key: 'getBestMatchFromCodes',
          value: function (n) {
            var t = this;
            if (!n) return null;
            var e;
            return (
              n.forEach(function (r) {
                if (!e) {
                  var i = t.formatLanguageCode(r);
                  (!t.options.supportedLngs || t.isSupportedCode(i)) && (e = i);
                }
              }),
              !e &&
                this.options.supportedLngs &&
                n.forEach(function (r) {
                  if (!e) {
                    var i = t.getLanguagePartFromCode(r);
                    if (t.isSupportedCode(i)) return (e = i);
                    e = t.options.supportedLngs.find(function (o) {
                      if (o.indexOf(i) === 0) return o;
                    });
                  }
                }),
              e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]),
              e
            );
          }
        },
        {
          key: 'getFallbackCodes',
          value: function (n, t) {
            if (!n) return [];
            if (
              (typeof n == 'function' && (n = n(t)),
              typeof n == 'string' && (n = [n]),
              Object.prototype.toString.apply(n) === '[object Array]')
            )
              return n;
            if (!t) return n.default || [];
            var e = n[t];
            return (
              e || (e = n[this.getScriptPartFromCode(t)]),
              e || (e = n[this.formatLanguageCode(t)]),
              e || (e = n[this.getLanguagePartFromCode(t)]),
              e || (e = n.default),
              e || []
            );
          }
        },
        {
          key: 'toResolveHierarchy',
          value: function (n, t) {
            var e = this,
              r = this.getFallbackCodes(t || this.options.fallbackLng || [], n),
              i = [],
              o = function (l) {
                !l ||
                  (e.isSupportedCode(l)
                    ? i.push(l)
                    : e.logger.warn(
                        'rejecting language code not found in supportedLngs: '.concat(l)
                      ));
              };
            return (
              typeof n == 'string' && n.indexOf('-') > -1
                ? (this.options.load !== 'languageOnly' && o(this.formatLanguageCode(n)),
                  this.options.load !== 'languageOnly' &&
                    this.options.load !== 'currentOnly' &&
                    o(this.getScriptPartFromCode(n)),
                  this.options.load !== 'currentOnly' && o(this.getLanguagePartFromCode(n)))
                : typeof n == 'string' && o(this.formatLanguageCode(n)),
              r.forEach(function (u) {
                i.indexOf(u) < 0 && o(e.formatLanguageCode(u));
              }),
              i
            );
          }
        }
      ]),
      s
    );
  })(),
  ot = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa'
      ],
      nr: [1, 2],
      fc: 1
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo'
      ],
      nr: [1, 2],
      fc: 2
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh'
      ],
      nr: [1],
      fc: 3
    },
    { lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 }
  ],
  ut = {
    1: function (a) {
      return Number(a > 1);
    },
    2: function (a) {
      return Number(a != 1);
    },
    3: function (a) {
      return 0;
    },
    4: function (a) {
      return Number(
        a % 10 == 1 && a % 100 != 11
          ? 0
          : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
          ? 1
          : 2
      );
    },
    5: function (a) {
      return Number(
        a == 0
          ? 0
          : a == 1
          ? 1
          : a == 2
          ? 2
          : a % 100 >= 3 && a % 100 <= 10
          ? 3
          : a % 100 >= 11
          ? 4
          : 5
      );
    },
    6: function (a) {
      return Number(a == 1 ? 0 : a >= 2 && a <= 4 ? 1 : 2);
    },
    7: function (a) {
      return Number(
        a == 1 ? 0 : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? 1 : 2
      );
    },
    8: function (a) {
      return Number(a == 1 ? 0 : a == 2 ? 1 : a != 8 && a != 11 ? 2 : 3);
    },
    9: function (a) {
      return Number(a >= 2);
    },
    10: function (a) {
      return Number(a == 1 ? 0 : a == 2 ? 1 : a < 7 ? 2 : a < 11 ? 3 : 4);
    },
    11: function (a) {
      return Number(a == 1 || a == 11 ? 0 : a == 2 || a == 12 ? 1 : a > 2 && a < 20 ? 2 : 3);
    },
    12: function (a) {
      return Number(a % 10 != 1 || a % 100 == 11);
    },
    13: function (a) {
      return Number(a !== 0);
    },
    14: function (a) {
      return Number(a == 1 ? 0 : a == 2 ? 1 : a == 3 ? 2 : 3);
    },
    15: function (a) {
      return Number(
        a % 10 == 1 && a % 100 != 11 ? 0 : a % 10 >= 2 && (a % 100 < 10 || a % 100 >= 20) ? 1 : 2
      );
    },
    16: function (a) {
      return Number(a % 10 == 1 && a % 100 != 11 ? 0 : a !== 0 ? 1 : 2);
    },
    17: function (a) {
      return Number(a == 1 || (a % 10 == 1 && a % 100 != 11) ? 0 : 1);
    },
    18: function (a) {
      return Number(a == 0 ? 0 : a == 1 ? 1 : 2);
    },
    19: function (a) {
      return Number(
        a == 1
          ? 0
          : a == 0 || (a % 100 > 1 && a % 100 < 11)
          ? 1
          : a % 100 > 10 && a % 100 < 20
          ? 2
          : 3
      );
    },
    20: function (a) {
      return Number(a == 1 ? 0 : a == 0 || (a % 100 > 0 && a % 100 < 20) ? 1 : 2);
    },
    21: function (a) {
      return Number(a % 100 == 1 ? 1 : a % 100 == 2 ? 2 : a % 100 == 3 || a % 100 == 4 ? 3 : 0);
    },
    22: function (a) {
      return Number(a == 1 ? 0 : a == 2 ? 1 : (a < 0 || a > 10) && a % 10 == 0 ? 2 : 3);
    }
  },
  ft = ['v1', 'v2', 'v3'],
  je = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function lt() {
  var s = {};
  return (
    ot.forEach(function (a) {
      a.lngs.forEach(function (n) {
        s[n] = { numbers: a.nr, plurals: ut[a.fc] };
      });
    }),
    s
  );
}
var ct = (function () {
  function s(a) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    N(this, s),
      (this.languageUtils = a),
      (this.options = n),
      (this.logger = R.create('pluralResolver')),
      (!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = lt());
  }
  return (
    j(s, [
      {
        key: 'addRule',
        value: function (n, t) {
          this.rules[n] = t;
        }
      },
      {
        key: 'getRule',
        value: function (n) {
          var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(n, { type: t.ordinal ? 'ordinal' : 'cardinal' });
            } catch {
              return;
            }
          return this.rules[n] || this.rules[this.languageUtils.getLanguagePartFromCode(n)];
        }
      },
      {
        key: 'needsPlural',
        value: function (n) {
          var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            e = this.getRule(n, t);
          return this.shouldUseIntlApi()
            ? e && e.resolvedOptions().pluralCategories.length > 1
            : e && e.numbers.length > 1;
        }
      },
      {
        key: 'getPluralFormsOfKey',
        value: function (n, t) {
          var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.getSuffixes(n, e).map(function (r) {
            return ''.concat(t).concat(r);
          });
        }
      },
      {
        key: 'getSuffixes',
        value: function (n) {
          var t = this,
            e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = this.getRule(n, e);
          return r
            ? this.shouldUseIntlApi()
              ? r
                  .resolvedOptions()
                  .pluralCategories.sort(function (i, o) {
                    return je[i] - je[o];
                  })
                  .map(function (i) {
                    return ''.concat(t.options.prepend).concat(i);
                  })
              : r.numbers.map(function (i) {
                  return t.getSuffix(n, i, e);
                })
            : [];
        }
      },
      {
        key: 'getSuffix',
        value: function (n, t) {
          var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            r = this.getRule(n, e);
          return r
            ? this.shouldUseIntlApi()
              ? ''.concat(this.options.prepend).concat(r.select(t))
              : this.getSuffixRetroCompatible(r, t)
            : (this.logger.warn('no plural rule found for: '.concat(n)), '');
        }
      },
      {
        key: 'getSuffixRetroCompatible',
        value: function (n, t) {
          var e = this,
            r = n.noAbs ? n.plurals(t) : n.plurals(Math.abs(t)),
            i = n.numbers[r];
          this.options.simplifyPluralSuffix &&
            n.numbers.length === 2 &&
            n.numbers[0] === 1 &&
            (i === 2 ? (i = 'plural') : i === 1 && (i = ''));
          var o = function () {
            return e.options.prepend && i.toString()
              ? e.options.prepend + i.toString()
              : i.toString();
          };
          return this.options.compatibilityJSON === 'v1'
            ? i === 1
              ? ''
              : typeof i == 'number'
              ? '_plural_'.concat(i.toString())
              : o()
            : this.options.compatibilityJSON === 'v2' ||
              (this.options.simplifyPluralSuffix && n.numbers.length === 2 && n.numbers[0] === 1)
            ? o()
            : this.options.prepend && r.toString()
            ? this.options.prepend + r.toString()
            : r.toString();
        }
      },
      {
        key: 'shouldUseIntlApi',
        value: function () {
          return !ft.includes(this.options.compatibilityJSON);
        }
      }
    ]),
    s
  );
})();
function Ne(s, a) {
  var n = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(s);
    a &&
      (t = t.filter(function (e) {
        return Object.getOwnPropertyDescriptor(s, e).enumerable;
      })),
      n.push.apply(n, t);
  }
  return n;
}
function P(s) {
  for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Ne(Object(n), !0).forEach(function (t) {
          D(s, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n))
      : Ne(Object(n)).forEach(function (t) {
          Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return s;
}
var gt = (function () {
  function s() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    N(this, s),
      (this.logger = R.create('interpolator')),
      (this.options = a),
      (this.format =
        (a.interpolation && a.interpolation.format) ||
        function (n) {
          return n;
        }),
      this.init(a);
  }
  return (
    j(s, [
      {
        key: 'init',
        value: function () {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          n.interpolation || (n.interpolation = { escapeValue: !0 });
          var t = n.interpolation;
          (this.escape = t.escape !== void 0 ? t.escape : qe),
            (this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0),
            (this.useRawValueToEscape =
              t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1),
            (this.prefix = t.prefix ? U(t.prefix) : t.prefixEscaped || '{{'),
            (this.suffix = t.suffix ? U(t.suffix) : t.suffixEscaped || '}}'),
            (this.formatSeparator = t.formatSeparator
              ? t.formatSeparator
              : t.formatSeparator || ','),
            (this.unescapePrefix = t.unescapeSuffix ? '' : t.unescapePrefix || '-'),
            (this.unescapeSuffix = this.unescapePrefix ? '' : t.unescapeSuffix || ''),
            (this.nestingPrefix = t.nestingPrefix
              ? U(t.nestingPrefix)
              : t.nestingPrefixEscaped || U('$t(')),
            (this.nestingSuffix = t.nestingSuffix
              ? U(t.nestingSuffix)
              : t.nestingSuffixEscaped || U(')')),
            (this.nestingOptionsSeparator = t.nestingOptionsSeparator
              ? t.nestingOptionsSeparator
              : t.nestingOptionsSeparator || ','),
            (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
            (this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1),
            this.resetRegExp();
        }
      },
      {
        key: 'reset',
        value: function () {
          this.options && this.init(this.options);
        }
      },
      {
        key: 'resetRegExp',
        value: function () {
          var n = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
          this.regexp = new RegExp(n, 'g');
          var t = ''
            .concat(this.prefix)
            .concat(this.unescapePrefix, '(.+?)')
            .concat(this.unescapeSuffix)
            .concat(this.suffix);
          this.regexpUnescape = new RegExp(t, 'g');
          var e = ''.concat(this.nestingPrefix, '(.+?)').concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(e, 'g');
        }
      },
      {
        key: 'interpolate',
        value: function (n, t, e, r) {
          var i = this,
            o,
            u,
            l,
            c =
              (this.options &&
                this.options.interpolation &&
                this.options.interpolation.defaultVariables) ||
              {};
          function f(v) {
            return v.replace(/\$/g, '$$$$');
          }
          var g = function (d) {
            if (d.indexOf(i.formatSeparator) < 0) {
              var h = we(t, c, d);
              return i.alwaysFormat
                ? i.format(h, void 0, e, P(P(P({}, r), t), {}, { interpolationkey: d }))
                : h;
            }
            var O = d.split(i.formatSeparator),
              b = O.shift().trim(),
              x = O.join(i.formatSeparator).trim();
            return i.format(we(t, c, b), x, e, P(P(P({}, r), t), {}, { interpolationkey: b }));
          };
          this.resetRegExp();
          var p = (r && r.missingInterpolationHandler) || this.options.missingInterpolationHandler,
            m =
              r && r.interpolation && r.interpolation.skipOnVariables !== void 0
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables,
            y = [
              {
                regex: this.regexpUnescape,
                safeValue: function (d) {
                  return f(d);
                }
              },
              {
                regex: this.regexp,
                safeValue: function (d) {
                  return i.escapeValue ? f(i.escape(d)) : f(d);
                }
              }
            ];
          return (
            y.forEach(function (v) {
              for (l = 0; (o = v.regex.exec(n)); ) {
                var d = o[1].trim();
                if (((u = g(d)), u === void 0))
                  if (typeof p == 'function') {
                    var h = p(n, o, r);
                    u = typeof h == 'string' ? h : '';
                  } else if (r && r.hasOwnProperty(d)) u = '';
                  else if (m) {
                    u = o[0];
                    continue;
                  } else
                    i.logger.warn(
                      'missed to pass in variable '.concat(d, ' for interpolating ').concat(n)
                    ),
                      (u = '');
                else typeof u != 'string' && !i.useRawValueToEscape && (u = Se(u));
                var O = v.safeValue(u);
                if (
                  ((n = n.replace(o[0], O)),
                  m
                    ? ((v.regex.lastIndex += u.length), (v.regex.lastIndex -= o[0].length))
                    : (v.regex.lastIndex = 0),
                  l++,
                  l >= i.maxReplaces)
                )
                  break;
              }
            }),
            n
          );
        }
      },
      {
        key: 'nest',
        value: function (n, t) {
          var e = this,
            r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            i,
            o,
            u = P({}, r);
          (u.applyPostProcessor = !1), delete u.defaultValue;
          function l(p, m) {
            var y = this.nestingOptionsSeparator;
            if (p.indexOf(y) < 0) return p;
            var v = p.split(new RegExp(''.concat(y, '[ ]*{'))),
              d = '{'.concat(v[1]);
            (p = v[0]), (d = this.interpolate(d, u));
            var h = d.match(/'/g),
              O = d.match(/"/g);
            ((h && h.length % 2 === 0 && !O) || O.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
            try {
              (u = JSON.parse(d)), m && (u = P(P({}, m), u));
            } catch (b) {
              return (
                this.logger.warn('failed parsing options string in nesting for key '.concat(p), b),
                ''.concat(p).concat(y).concat(d)
              );
            }
            return delete u.defaultValue, p;
          }
          for (; (i = this.nestingRegexp.exec(n)); ) {
            var c = [],
              f = !1;
            if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
              var g = i[1].split(this.formatSeparator).map(function (p) {
                return p.trim();
              });
              (i[1] = g.shift()), (c = g), (f = !0);
            }
            if (((o = t(l.call(this, i[1].trim(), u), u)), o && i[0] === n && typeof o != 'string'))
              return o;
            typeof o != 'string' && (o = Se(o)),
              o ||
                (this.logger.warn('missed to resolve '.concat(i[1], ' for nesting ').concat(n)),
                (o = '')),
              f &&
                (o = c.reduce(function (p, m) {
                  return e.format(p, m, r.lng, P(P({}, r), {}, { interpolationkey: i[1].trim() }));
                }, o.trim())),
              (n = n.replace(i[0], o)),
              (this.regexp.lastIndex = 0);
          }
          return n;
        }
      }
    ]),
    s
  );
})();
function Ce(s, a) {
  var n = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(s);
    a &&
      (t = t.filter(function (e) {
        return Object.getOwnPropertyDescriptor(s, e).enumerable;
      })),
      n.push.apply(n, t);
  }
  return n;
}
function E(s) {
  for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Ce(Object(n), !0).forEach(function (t) {
          D(s, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n))
      : Ce(Object(n)).forEach(function (t) {
          Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return s;
}
function pt(s) {
  var a = s.toLowerCase().trim(),
    n = {};
  if (s.indexOf('(') > -1) {
    var t = s.split('(');
    a = t[0].toLowerCase().trim();
    var e = t[1].substring(0, t[1].length - 1);
    if (a === 'currency' && e.indexOf(':') < 0) n.currency || (n.currency = e.trim());
    else if (a === 'relativetime' && e.indexOf(':') < 0) n.range || (n.range = e.trim());
    else {
      var r = e.split(';');
      r.forEach(function (i) {
        if (!!i) {
          var o = i.split(':'),
            u = ze(o),
            l = u[0],
            c = u.slice(1),
            f = c
              .join(':')
              .trim()
              .replace(/^'+|'+$/g, '');
          n[l.trim()] || (n[l.trim()] = f),
            f === 'false' && (n[l.trim()] = !1),
            f === 'true' && (n[l.trim()] = !0),
            isNaN(f) || (n[l.trim()] = parseInt(f, 10));
        }
      });
    }
  }
  return { formatName: a, formatOptions: n };
}
function V(s) {
  var a = {};
  return function (t, e, r) {
    var i = e + JSON.stringify(r),
      o = a[i];
    return o || ((o = s(e, r)), (a[i] = o)), o(t);
  };
}
var dt = (function () {
  function s() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    N(this, s),
      (this.logger = R.create('formatter')),
      (this.options = a),
      (this.formats = {
        number: V(function (n, t) {
          var e = new Intl.NumberFormat(n, t);
          return function (r) {
            return e.format(r);
          };
        }),
        currency: V(function (n, t) {
          var e = new Intl.NumberFormat(n, E(E({}, t), {}, { style: 'currency' }));
          return function (r) {
            return e.format(r);
          };
        }),
        datetime: V(function (n, t) {
          var e = new Intl.DateTimeFormat(n, E({}, t));
          return function (r) {
            return e.format(r);
          };
        }),
        relativetime: V(function (n, t) {
          var e = new Intl.RelativeTimeFormat(n, E({}, t));
          return function (r) {
            return e.format(r, t.range || 'day');
          };
        }),
        list: V(function (n, t) {
          var e = new Intl.ListFormat(n, E({}, t));
          return function (r) {
            return e.format(r);
          };
        })
      }),
      this.init(a);
  }
  return (
    j(s, [
      {
        key: 'init',
        value: function (n) {
          var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { interpolation: {} },
            e = t.interpolation;
          this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ',';
        }
      },
      {
        key: 'add',
        value: function (n, t) {
          this.formats[n.toLowerCase().trim()] = t;
        }
      },
      {
        key: 'addCached',
        value: function (n, t) {
          this.formats[n.toLowerCase().trim()] = V(t);
        }
      },
      {
        key: 'format',
        value: function (n, t, e, r) {
          var i = this,
            o = t.split(this.formatSeparator),
            u = o.reduce(function (l, c) {
              var f = pt(c),
                g = f.formatName,
                p = f.formatOptions;
              if (i.formats[g]) {
                var m = l;
                try {
                  var y = (r && r.formatParams && r.formatParams[r.interpolationkey]) || {},
                    v = y.locale || y.lng || r.locale || r.lng || e;
                  m = i.formats[g](l, v, E(E(E({}, p), r), y));
                } catch (d) {
                  i.logger.warn(d);
                }
                return m;
              } else i.logger.warn('there was no format function for '.concat(g));
              return l;
            }, n);
          return u;
        }
      }
    ]),
    s
  );
})();
function Ee(s, a) {
  var n = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(s);
    a &&
      (t = t.filter(function (e) {
        return Object.getOwnPropertyDescriptor(s, e).enumerable;
      })),
      n.push.apply(n, t);
  }
  return n;
}
function Fe(s) {
  for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Ee(Object(n), !0).forEach(function (t) {
          D(s, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n))
      : Ee(Object(n)).forEach(function (t) {
          Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return s;
}
function ht(s) {
  var a = vt();
  return function () {
    var t = k(s),
      e;
    if (a) {
      var r = k(this).constructor;
      e = Reflect.construct(t, arguments, r);
    } else e = t.apply(this, arguments);
    return G(this, e);
  };
}
function vt() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function mt(s, a) {
  s.pending[a] !== void 0 && (delete s.pending[a], s.pendingCount--);
}
var yt = (function (s) {
  ne(n, s);
  var a = ht(n);
  function n(t, e, r) {
    var i,
      o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (
      N(this, n),
      (i = a.call(this)),
      ae && _.call(F(i)),
      (i.backend = t),
      (i.store = e),
      (i.services = r),
      (i.languageUtils = r.languageUtils),
      (i.options = o),
      (i.logger = R.create('backendConnector')),
      (i.waitingReads = []),
      (i.maxParallelReads = o.maxParallelReads || 10),
      (i.readingCalls = 0),
      (i.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (i.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (i.state = {}),
      (i.queue = []),
      i.backend && i.backend.init && i.backend.init(r, o.backend, o),
      i
    );
  }
  return (
    j(n, [
      {
        key: 'queueLoad',
        value: function (e, r, i, o) {
          var u = this,
            l = {},
            c = {},
            f = {},
            g = {};
          return (
            e.forEach(function (p) {
              var m = !0;
              r.forEach(function (y) {
                var v = ''.concat(p, '|').concat(y);
                !i.reload && u.store.hasResourceBundle(p, y)
                  ? (u.state[v] = 2)
                  : u.state[v] < 0 ||
                    (u.state[v] === 1
                      ? c[v] === void 0 && (c[v] = !0)
                      : ((u.state[v] = 1),
                        (m = !1),
                        c[v] === void 0 && (c[v] = !0),
                        l[v] === void 0 && (l[v] = !0),
                        g[y] === void 0 && (g[y] = !0)));
              }),
                m || (f[p] = !0);
            }),
            (Object.keys(l).length || Object.keys(c).length) &&
              this.queue.push({
                pending: c,
                pendingCount: Object.keys(c).length,
                loaded: {},
                errors: [],
                callback: o
              }),
            {
              toLoad: Object.keys(l),
              pending: Object.keys(c),
              toLoadLanguages: Object.keys(f),
              toLoadNamespaces: Object.keys(g)
            }
          );
        }
      },
      {
        key: 'loaded',
        value: function (e, r, i) {
          var o = e.split('|'),
            u = o[0],
            l = o[1];
          r && this.emit('failedLoading', u, l, r),
            i && this.store.addResourceBundle(u, l, i),
            (this.state[e] = r ? -1 : 2);
          var c = {};
          this.queue.forEach(function (f) {
            Qe(f.loaded, [u], l),
              mt(f, e),
              r && f.errors.push(r),
              f.pendingCount === 0 &&
                !f.done &&
                (Object.keys(f.loaded).forEach(function (g) {
                  c[g] || (c[g] = {});
                  var p = f.loaded[g];
                  p.length &&
                    p.forEach(function (m) {
                      c[g][m] === void 0 && (c[g][m] = !0);
                    });
                }),
                (f.done = !0),
                f.errors.length ? f.callback(f.errors) : f.callback());
          }),
            this.emit('loaded', c),
            (this.queue = this.queue.filter(function (f) {
              return !f.done;
            }));
        }
      },
      {
        key: 'read',
        value: function (e, r, i) {
          var o = this,
            u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
            l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
            c = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return c(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({ lng: e, ns: r, fcName: i, tried: u, wait: l, callback: c });
            return;
          }
          return (
            this.readingCalls++,
            this.backend[i](e, r, function (f, g) {
              if ((o.readingCalls--, o.waitingReads.length > 0)) {
                var p = o.waitingReads.shift();
                o.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
              }
              if (f && g && u < o.maxRetries) {
                setTimeout(function () {
                  o.read.call(o, e, r, i, u + 1, l * 2, c);
                }, l);
                return;
              }
              c(f, g);
            })
          );
        }
      },
      {
        key: 'prepareLoading',
        value: function (e, r) {
          var i = this,
            o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            u = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn('No backend was added via i18next.use. Will not load resources.'),
              u && u()
            );
          typeof e == 'string' && (e = this.languageUtils.toResolveHierarchy(e)),
            typeof r == 'string' && (r = [r]);
          var l = this.queueLoad(e, r, o, u);
          if (!l.toLoad.length) return l.pending.length || u(), null;
          l.toLoad.forEach(function (c) {
            i.loadOne(c);
          });
        }
      },
      {
        key: 'load',
        value: function (e, r, i) {
          this.prepareLoading(e, r, {}, i);
        }
      },
      {
        key: 'reload',
        value: function (e, r, i) {
          this.prepareLoading(e, r, { reload: !0 }, i);
        }
      },
      {
        key: 'loadOne',
        value: function (e) {
          var r = this,
            i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '',
            o = e.split('|'),
            u = o[0],
            l = o[1];
          this.read(u, l, 'read', void 0, void 0, function (c, f) {
            c &&
              r.logger.warn(
                ''.concat(i, 'loading namespace ').concat(l, ' for language ').concat(u, ' failed'),
                c
              ),
              !c &&
                f &&
                r.logger.log(
                  ''.concat(i, 'loaded namespace ').concat(l, ' for language ').concat(u),
                  f
                ),
              r.loaded(e, c, f);
          });
        }
      },
      {
        key: 'saveMissing',
        value: function (e, r, i, o, u) {
          var l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(r)
          ) {
            this.logger.warn(
              'did not save key "'
                .concat(i, '" as the namespace "')
                .concat(r, '" was not yet loaded'),
              'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
            );
            return;
          }
          i == null ||
            i === '' ||
            (this.backend &&
              this.backend.create &&
              this.backend.create(e, r, i, o, null, Fe(Fe({}, l), {}, { isUpdate: u })),
            !(!e || !e[0]) && this.store.addResource(e[0], r, i, o));
        }
      }
    ]),
    n
  );
})(_);
function bt() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !0,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (a) {
      var n = {};
      if (
        ($(a[1]) === 'object' && (n = a[1]),
        typeof a[1] == 'string' && (n.defaultValue = a[1]),
        typeof a[2] == 'string' && (n.tDescription = a[2]),
        $(a[2]) === 'object' || $(a[3]) === 'object')
      ) {
        var t = a[3] || a[2];
        Object.keys(t).forEach(function (e) {
          n[e] = t[e];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: function (a, n, t, e) {
        return a;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function _e(s) {
  return (
    typeof s.ns == 'string' && (s.ns = [s.ns]),
    typeof s.fallbackLng == 'string' && (s.fallbackLng = [s.fallbackLng]),
    typeof s.fallbackNS == 'string' && (s.fallbackNS = [s.fallbackNS]),
    s.supportedLngs &&
      s.supportedLngs.indexOf('cimode') < 0 &&
      (s.supportedLngs = s.supportedLngs.concat(['cimode'])),
    s
  );
}
function De(s, a) {
  var n = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(s);
    a &&
      (t = t.filter(function (e) {
        return Object.getOwnPropertyDescriptor(s, e).enumerable;
      })),
      n.push.apply(n, t);
  }
  return n;
}
function L(s) {
  for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? De(Object(n), !0).forEach(function (t) {
          D(s, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n))
      : De(Object(n)).forEach(function (t) {
          Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return s;
}
function Ot(s) {
  var a = St();
  return function () {
    var t = k(s),
      e;
    if (a) {
      var r = k(this).constructor;
      e = Reflect.construct(t, arguments, r);
    } else e = t.apply(this, arguments);
    return G(this, e);
  };
}
function St() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function ee() {}
function xt(s) {
  var a = Object.getOwnPropertyNames(Object.getPrototypeOf(s));
  a.forEach(function (n) {
    typeof s[n] == 'function' && (s[n] = s[n].bind(s));
  });
}
var re = (function (s) {
  ne(n, s);
  var a = Ot(n);
  function n() {
    var t,
      e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (N(this, n),
      (t = a.call(this)),
      ae && _.call(F(t)),
      (t.options = _e(e)),
      (t.services = {}),
      (t.logger = R),
      (t.modules = { external: [] }),
      xt(F(t)),
      r && !t.isInitialized && !e.isClone)
    ) {
      if (!t.options.initImmediate) return t.init(e, r), G(t, F(t));
      setTimeout(function () {
        t.init(e, r);
      }, 0);
    }
    return t;
  }
  return (
    j(n, [
      {
        key: 'init',
        value: function () {
          var e = this,
            r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            i = arguments.length > 1 ? arguments[1] : void 0;
          typeof r == 'function' && ((i = r), (r = {})),
            !r.defaultNS &&
              r.defaultNS !== !1 &&
              r.ns &&
              (typeof r.ns == 'string'
                ? (r.defaultNS = r.ns)
                : r.ns.indexOf('translation') < 0 && (r.defaultNS = r.ns[0]));
          var o = bt();
          (this.options = L(L(L({}, o), this.options), _e(r))),
            this.options.compatibilityAPI !== 'v1' &&
              (this.options.interpolation = L(L({}, o.interpolation), this.options.interpolation)),
            r.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = r.keySeparator),
            r.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = r.nsSeparator);
          function u(d) {
            return d ? (typeof d == 'function' ? new d() : d) : null;
          }
          if (!this.options.isClone) {
            this.modules.logger
              ? R.init(u(this.modules.logger), this.options)
              : R.init(null, this.options);
            var l;
            this.modules.formatter ? (l = this.modules.formatter) : typeof Intl < 'u' && (l = dt);
            var c = new st(this.options);
            this.store = new nt(this.options.resources, this.options);
            var f = this.services;
            (f.logger = R),
              (f.resourceStore = this.store),
              (f.languageUtils = c),
              (f.pluralResolver = new ct(c, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
              })),
              l &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format === o.interpolation.format) &&
                ((f.formatter = u(l)),
                f.formatter.init(f, this.options),
                (this.options.interpolation.format = f.formatter.format.bind(f.formatter))),
              (f.interpolator = new gt(this.options)),
              (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
              (f.backendConnector = new yt(
                u(this.modules.backend),
                f.resourceStore,
                f,
                this.options
              )),
              f.backendConnector.on('*', function (d) {
                for (var h = arguments.length, O = new Array(h > 1 ? h - 1 : 0), b = 1; b < h; b++)
                  O[b - 1] = arguments[b];
                e.emit.apply(e, [d].concat(O));
              }),
              this.modules.languageDetector &&
                ((f.languageDetector = u(this.modules.languageDetector)),
                f.languageDetector.init(f, this.options.detection, this.options)),
              this.modules.i18nFormat &&
                ((f.i18nFormat = u(this.modules.i18nFormat)),
                f.i18nFormat.init && f.i18nFormat.init(this)),
              (this.translator = new ke(this.services, this.options)),
              this.translator.on('*', function (d) {
                for (var h = arguments.length, O = new Array(h > 1 ? h - 1 : 0), b = 1; b < h; b++)
                  O[b - 1] = arguments[b];
                e.emit.apply(e, [d].concat(O));
              }),
              this.modules.external.forEach(function (d) {
                d.init && d.init(e);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            i || (i = ee),
            this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
          ) {
            var g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            g.length > 0 && g[0] !== 'dev' && (this.options.lng = g[0]);
          }
          !this.services.languageDetector &&
            !this.options.lng &&
            this.logger.warn('init: no languageDetector is used and no lng is defined');
          var p = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
          p.forEach(function (d) {
            e[d] = function () {
              var h;
              return (h = e.store)[d].apply(h, arguments);
            };
          });
          var m = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
          m.forEach(function (d) {
            e[d] = function () {
              var h;
              return (h = e.store)[d].apply(h, arguments), e;
            };
          });
          var y = Y(),
            v = function () {
              var h = function (b, x) {
                e.isInitialized &&
                  !e.initializedStoreOnce &&
                  e.logger.warn(
                    'init: i18next is already initialized. You should call init just once!'
                  ),
                  (e.isInitialized = !0),
                  e.options.isClone || e.logger.log('initialized', e.options),
                  e.emit('initialized', e.options),
                  y.resolve(x),
                  i(b, x);
              };
              if (e.languages && e.options.compatibilityAPI !== 'v1' && !e.isInitialized)
                return h(null, e.t.bind(e));
              e.changeLanguage(e.options.lng, h);
            };
          return this.options.resources || !this.options.initImmediate ? v() : setTimeout(v, 0), y;
        }
      },
      {
        key: 'loadResources',
        value: function (e) {
          var r = this,
            i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ee,
            o = i,
            u = typeof e == 'string' ? e : this.language;
          if (
            (typeof e == 'function' && (o = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (u && u.toLowerCase() === 'cimode') return o();
            var l = [],
              c = function (p) {
                if (!!p) {
                  var m = r.services.languageUtils.toResolveHierarchy(p);
                  m.forEach(function (y) {
                    l.indexOf(y) < 0 && l.push(y);
                  });
                }
              };
            if (u) c(u);
            else {
              var f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              f.forEach(function (g) {
                return c(g);
              });
            }
            this.options.preload &&
              this.options.preload.forEach(function (g) {
                return c(g);
              }),
              this.services.backendConnector.load(l, this.options.ns, function (g) {
                !g && !r.resolvedLanguage && r.language && r.setResolvedLanguage(r.language), o(g);
              });
          } else o(null);
        }
      },
      {
        key: 'reloadResources',
        value: function (e, r, i) {
          var o = Y();
          return (
            e || (e = this.languages),
            r || (r = this.options.ns),
            i || (i = ee),
            this.services.backendConnector.reload(e, r, function (u) {
              o.resolve(), i(u);
            }),
            o
          );
        }
      },
      {
        key: 'use',
        value: function (e) {
          if (!e)
            throw new Error(
              'You are passing an undefined module! Please check the object you are passing to i18next.use()'
            );
          if (!e.type)
            throw new Error(
              'You are passing a wrong module! Please check the object you are passing to i18next.use()'
            );
          return (
            e.type === 'backend' && (this.modules.backend = e),
            (e.type === 'logger' || (e.log && e.warn && e.error)) && (this.modules.logger = e),
            e.type === 'languageDetector' && (this.modules.languageDetector = e),
            e.type === 'i18nFormat' && (this.modules.i18nFormat = e),
            e.type === 'postProcessor' && Ae.addPostProcessor(e),
            e.type === 'formatter' && (this.modules.formatter = e),
            e.type === '3rdParty' && this.modules.external.push(e),
            this
          );
        }
      },
      {
        key: 'setResolvedLanguage',
        value: function (e) {
          if (!(!e || !this.languages) && !(['cimode', 'dev'].indexOf(e) > -1))
            for (var r = 0; r < this.languages.length; r++) {
              var i = this.languages[r];
              if (
                !(['cimode', 'dev'].indexOf(i) > -1) &&
                this.store.hasLanguageSomeTranslations(i)
              ) {
                this.resolvedLanguage = i;
                break;
              }
            }
        }
      },
      {
        key: 'changeLanguage',
        value: function (e, r) {
          var i = this;
          this.isLanguageChangingTo = e;
          var o = Y();
          this.emit('languageChanging', e);
          var u = function (g) {
              (i.language = g),
                (i.languages = i.services.languageUtils.toResolveHierarchy(g)),
                (i.resolvedLanguage = void 0),
                i.setResolvedLanguage(g);
            },
            l = function (g, p) {
              p
                ? (u(p),
                  i.translator.changeLanguage(p),
                  (i.isLanguageChangingTo = void 0),
                  i.emit('languageChanged', p),
                  i.logger.log('languageChanged', p))
                : (i.isLanguageChangingTo = void 0),
                o.resolve(function () {
                  return i.t.apply(i, arguments);
                }),
                r &&
                  r(g, function () {
                    return i.t.apply(i, arguments);
                  });
            },
            c = function (g) {
              !e && !g && i.services.languageDetector && (g = []);
              var p = typeof g == 'string' ? g : i.services.languageUtils.getBestMatchFromCodes(g);
              p &&
                (i.language || u(p),
                i.translator.language || i.translator.changeLanguage(p),
                i.services.languageDetector && i.services.languageDetector.cacheUserLanguage(p)),
                i.loadResources(p, function (m) {
                  l(m, p);
                });
            };
          return (
            !e && this.services.languageDetector && !this.services.languageDetector.async
              ? c(this.services.languageDetector.detect())
              : !e && this.services.languageDetector && this.services.languageDetector.async
              ? this.services.languageDetector.detect(c)
              : c(e),
            o
          );
        }
      },
      {
        key: 'getFixedT',
        value: function (e, r, i) {
          var o = this,
            u = function l(c, f) {
              var g;
              if ($(f) !== 'object') {
                for (var p = arguments.length, m = new Array(p > 2 ? p - 2 : 0), y = 2; y < p; y++)
                  m[y - 2] = arguments[y];
                g = o.options.overloadTranslationOptionHandler([c, f].concat(m));
              } else g = L({}, f);
              (g.lng = g.lng || l.lng),
                (g.lngs = g.lngs || l.lngs),
                (g.ns = g.ns || l.ns),
                (g.keyPrefix = g.keyPrefix || i || l.keyPrefix);
              var v = o.options.keySeparator || '.',
                d = g.keyPrefix ? ''.concat(g.keyPrefix).concat(v).concat(c) : c;
              return o.t(d, g);
            };
          return (
            typeof e == 'string' ? (u.lng = e) : (u.lngs = e), (u.ns = r), (u.keyPrefix = i), u
          );
        }
      },
      {
        key: 't',
        value: function () {
          var e;
          return this.translator && (e = this.translator).translate.apply(e, arguments);
        }
      },
      {
        key: 'exists',
        value: function () {
          var e;
          return this.translator && (e = this.translator).exists.apply(e, arguments);
        }
      },
      {
        key: 'setDefaultNamespace',
        value: function (e) {
          this.options.defaultNS = e;
        }
      },
      {
        key: 'hasLoadedNamespace',
        value: function (e) {
          var r = this,
            i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                'hasLoadedNamespace: i18n.languages were undefined or empty',
                this.languages
              ),
              !1
            );
          var o = this.resolvedLanguage || this.languages[0],
            u = this.options ? this.options.fallbackLng : !1,
            l = this.languages[this.languages.length - 1];
          if (o.toLowerCase() === 'cimode') return !0;
          var c = function (p, m) {
            var y = r.services.backendConnector.state[''.concat(p, '|').concat(m)];
            return y === -1 || y === 2;
          };
          if (i.precheck) {
            var f = i.precheck(this, c);
            if (f !== void 0) return f;
          }
          return !!(
            this.hasResourceBundle(o, e) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (c(o, e) && (!u || c(l, e)))
          );
        }
      },
      {
        key: 'loadNamespaces',
        value: function (e, r) {
          var i = this,
            o = Y();
          return this.options.ns
            ? (typeof e == 'string' && (e = [e]),
              e.forEach(function (u) {
                i.options.ns.indexOf(u) < 0 && i.options.ns.push(u);
              }),
              this.loadResources(function (u) {
                o.resolve(), r && r(u);
              }),
              o)
            : (r && r(), Promise.resolve());
        }
      },
      {
        key: 'loadLanguages',
        value: function (e, r) {
          var i = Y();
          typeof e == 'string' && (e = [e]);
          var o = this.options.preload || [],
            u = e.filter(function (l) {
              return o.indexOf(l) < 0;
            });
          return u.length
            ? ((this.options.preload = o.concat(u)),
              this.loadResources(function (l) {
                i.resolve(), r && r(l);
              }),
              i)
            : (r && r(), Promise.resolve());
        }
      },
      {
        key: 'dir',
        value: function (e) {
          if (
            (e ||
              (e =
                this.resolvedLanguage ||
                (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
            !e)
          )
            return 'rtl';
          var r = [
            'ar',
            'shu',
            'sqr',
            'ssh',
            'xaa',
            'yhd',
            'yud',
            'aao',
            'abh',
            'abv',
            'acm',
            'acq',
            'acw',
            'acx',
            'acy',
            'adf',
            'ads',
            'aeb',
            'aec',
            'afb',
            'ajp',
            'apc',
            'apd',
            'arb',
            'arq',
            'ars',
            'ary',
            'arz',
            'auz',
            'avl',
            'ayh',
            'ayl',
            'ayn',
            'ayp',
            'bbz',
            'pga',
            'he',
            'iw',
            'ps',
            'pbt',
            'pbu',
            'pst',
            'prp',
            'prd',
            'ug',
            'ur',
            'ydd',
            'yds',
            'yih',
            'ji',
            'yi',
            'hbo',
            'men',
            'xmn',
            'fa',
            'jpr',
            'peo',
            'pes',
            'prs',
            'dv',
            'sam',
            'ckb'
          ];
          return r.indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) > -1 ||
            e.toLowerCase().indexOf('-arab') > 1
            ? 'rtl'
            : 'ltr';
        }
      },
      {
        key: 'cloneInstance',
        value: function () {
          var e = this,
            r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ee,
            o = L(L(L({}, this.options), r), { isClone: !0 }),
            u = new n(o);
          (r.debug !== void 0 || r.prefix !== void 0) && (u.logger = u.logger.clone(r));
          var l = ['store', 'services', 'language'];
          return (
            l.forEach(function (c) {
              u[c] = e[c];
            }),
            (u.services = L({}, this.services)),
            (u.services.utils = { hasLoadedNamespace: u.hasLoadedNamespace.bind(u) }),
            (u.translator = new ke(u.services, u.options)),
            u.translator.on('*', function (c) {
              for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++)
                g[p - 1] = arguments[p];
              u.emit.apply(u, [c].concat(g));
            }),
            u.init(o, i),
            (u.translator.options = u.options),
            (u.translator.backendConnector.services.utils = {
              hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
            }),
            u
          );
        }
      },
      {
        key: 'toJSON',
        value: function () {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
          };
        }
      }
    ]),
    n
  );
})(_);
D(re, 'createInstance', function () {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    a = arguments.length > 1 ? arguments[1] : void 0;
  return new re(s, a);
});
var w = re.createInstance();
w.createInstance = re.createInstance;
w.createInstance;
w.init;
w.loadResources;
w.reloadResources;
w.use;
w.changeLanguage;
w.getFixedT;
var Pt = w.t;
w.exists;
w.setDefaultNamespace;
w.hasLoadedNamespace;
w.loadNamespaces;
w.loadLanguages;
export { w as i, Pt as t };
