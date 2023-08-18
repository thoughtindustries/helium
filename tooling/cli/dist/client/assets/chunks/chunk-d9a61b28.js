import { R as H, j as $, r as m, b as q } from './chunk-5011acf0.js';
const k = H.createContext(void 0);
function de({ pageContext: e, children: t }) {
  return $(k.Provider, { value: e, children: t });
}
function Ne() {
  const e = m.exports.useContext(k);
  if (!e) throw new Error('Expected a Page Context, but no Page Context was found');
  return e;
}
var I = function (e, t) {
  return (
    (I =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
      }),
    I(e, t)
  );
};
function R(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
  I(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var T = function () {
  return (
    (T =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    T.apply(this, arguments)
  );
};
function be(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Se(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function c(l) {
      try {
        a(r.next(l));
      } catch (p) {
        s(p);
      }
    }
    function u(l) {
      try {
        a(r.throw(l));
      } catch (p) {
        s(p);
      }
    }
    function a(l) {
      l.done ? i(l.value) : o(l.value).then(c, u);
    }
    a((r = r.apply(e, t || [])).next());
  });
}
function _e(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: []
    },
    r,
    o,
    i,
    s;
  return (
    (s = { next: c(0), throw: c(1), return: c(2) }),
    typeof Symbol == 'function' &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function c(a) {
    return function (l) {
      return u([a, l]);
    };
  }
  function u(a) {
    if (r) throw new TypeError('Generator is already executing.');
    for (; s && ((s = 0), a[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          o &&
            (i =
              a[0] & 2 ? o.return : a[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) &&
            !(i = i.call(o, a[1])).done)
        )
          return i;
        switch (((o = 0), i && (a = [a[0] & 2, i.value]), a[0])) {
          case 0:
          case 1:
            i = a;
            break;
          case 4:
            return n.label++, { value: a[1], done: !1 };
          case 5:
            n.label++, (o = a[1]), (a = [0]);
            continue;
          case 7:
            (a = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((i = n.trys), !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
              n.label = a[1];
              break;
            }
            if (a[0] === 6 && n.label < i[1]) {
              (n.label = i[1]), (i = a);
              break;
            }
            if (i && n.label < i[2]) {
              (n.label = i[2]), n.ops.push(a);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        a = t.call(e, n);
      } catch (l) {
        (a = [6, l]), (o = 0);
      } finally {
        r = i = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
function h(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var O = 'Invariant Violation',
  A = Object.setPrototypeOf,
  z =
    A === void 0
      ? function (e, t) {
          return (e.__proto__ = t), e;
        }
      : A,
  B = (function (e) {
    R(t, e);
    function t(n) {
      n === void 0 && (n = O);
      var r =
        e.call(
          this,
          typeof n == 'number'
            ? O + ': ' + n + ' (see https://github.com/apollographql/invariant-packages)'
            : n
        ) || this;
      return (r.framesToPop = 1), (r.name = O), z(r, t.prototype), r;
    }
    return t;
  })(Error);
function y(e, t) {
  if (!e) throw new B(t);
}
var Y = ['debug', 'log', 'warn', 'error', 'silent'],
  Z = Y.indexOf('log');
function E(e) {
  return function () {
    if (Y.indexOf(e) >= Z) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function (e) {
  (e.debug = E('debug')), (e.log = E('log')), (e.warn = E('warn')), (e.error = E('error'));
})(y || (y = {}));
var J = '3.8.1';
function f(e) {
  try {
    return e();
  } catch {}
}
const D =
  f(function () {
    return globalThis;
  }) ||
  f(function () {
    return window;
  }) ||
  f(function () {
    return self;
  }) ||
  f(function () {
    return global;
  }) ||
  f(function () {
    return f.constructor('return this')();
  });
var x = new Map();
function K(e) {
  var t = x.get(e) || 1;
  return (
    x.set(e, t + 1), ''.concat(e, ':').concat(t, ':').concat(Math.random().toString(36).slice(2))
  );
}
function ee(e, t) {
  t === void 0 && (t = 0);
  var n = K('stringifyForDisplay');
  return JSON.stringify(
    e,
    function (r, o) {
      return o === void 0 ? n : o;
    },
    t
  )
    .split(JSON.stringify(n))
    .join('<undefined>');
}
function g(e) {
  return function (t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    e.apply(void 0, h([typeof t == 'number' ? S(t) : t], n, !1));
  };
}
var te = Object.assign(
  function (t, n) {
    for (var r = [], o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
    t || y(t, S(n, r));
  },
  { debug: g(y.debug), log: g(y.log), warn: g(y.warn), error: g(y.error) }
);
function Ae(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new B(S(e, t));
}
var j = Symbol.for('ApolloErrorMessageHandler_' + J);
function S(e, t) {
  if ((t === void 0 && (t = []), !!e)) {
    var n = t.map(function (r) {
      return typeof r == 'string' ? r : ee(r, 2).slice(0, 1e3);
    });
    return (
      (D[j] && D[j](e, n)) ||
      'An error occured! For more details, see the full error text at https://go.apollo.dev/c/err#'.concat(
        encodeURIComponent(JSON.stringify({ version: J, message: e, args: n }))
      )
    );
  }
}
function De(e, t) {
  if (!Boolean(e)) throw new Error(t);
}
class xe {
  constructor(t, n, r) {
    (this.start = t.start),
      (this.end = n.end),
      (this.startToken = t),
      (this.endToken = n),
      (this.source = r);
  }
  get [Symbol.toStringTag]() {
    return 'Location';
  }
  toJSON() {
    return { start: this.start, end: this.end };
  }
}
class je {
  constructor(t, n, r, o, i, s) {
    (this.kind = t),
      (this.start = n),
      (this.end = r),
      (this.line = o),
      (this.column = i),
      (this.value = s),
      (this.prev = null),
      (this.next = null);
  }
  get [Symbol.toStringTag]() {
    return 'Token';
  }
  toJSON() {
    return { kind: this.kind, value: this.value, line: this.line, column: this.column };
  }
}
const ne = {
    Name: [],
    Document: ['definitions'],
    OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
    VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
    Variable: ['name'],
    SelectionSet: ['selections'],
    Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
    Argument: ['name', 'value'],
    FragmentSpread: ['name', 'directives'],
    InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
    FragmentDefinition: [
      'name',
      'variableDefinitions',
      'typeCondition',
      'directives',
      'selectionSet'
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ['values'],
    ObjectValue: ['fields'],
    ObjectField: ['name', 'value'],
    Directive: ['name', 'arguments'],
    NamedType: ['name'],
    ListType: ['type'],
    NonNullType: ['type'],
    SchemaDefinition: ['description', 'directives', 'operationTypes'],
    OperationTypeDefinition: ['type'],
    ScalarTypeDefinition: ['description', 'name', 'directives'],
    ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
    FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
    InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
    InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
    UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
    EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
    EnumValueDefinition: ['description', 'name', 'directives'],
    InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
    DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
    SchemaExtension: ['directives', 'operationTypes'],
    ScalarTypeExtension: ['name', 'directives'],
    ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    UnionTypeExtension: ['name', 'directives', 'types'],
    EnumTypeExtension: ['name', 'directives', 'values'],
    InputObjectTypeExtension: ['name', 'directives', 'fields']
  },
  re = new Set(Object.keys(ne));
function we(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == 'string' && re.has(t);
}
var w;
(function (e) {
  (e.QUERY = 'query'), (e.MUTATION = 'mutation'), (e.SUBSCRIPTION = 'subscription');
})(w || (w = {}));
var C;
(function (e) {
  (e.NAME = 'Name'),
    (e.DOCUMENT = 'Document'),
    (e.OPERATION_DEFINITION = 'OperationDefinition'),
    (e.VARIABLE_DEFINITION = 'VariableDefinition'),
    (e.SELECTION_SET = 'SelectionSet'),
    (e.FIELD = 'Field'),
    (e.ARGUMENT = 'Argument'),
    (e.FRAGMENT_SPREAD = 'FragmentSpread'),
    (e.INLINE_FRAGMENT = 'InlineFragment'),
    (e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
    (e.VARIABLE = 'Variable'),
    (e.INT = 'IntValue'),
    (e.FLOAT = 'FloatValue'),
    (e.STRING = 'StringValue'),
    (e.BOOLEAN = 'BooleanValue'),
    (e.NULL = 'NullValue'),
    (e.ENUM = 'EnumValue'),
    (e.LIST = 'ListValue'),
    (e.OBJECT = 'ObjectValue'),
    (e.OBJECT_FIELD = 'ObjectField'),
    (e.DIRECTIVE = 'Directive'),
    (e.NAMED_TYPE = 'NamedType'),
    (e.LIST_TYPE = 'ListType'),
    (e.NON_NULL_TYPE = 'NonNullType'),
    (e.SCHEMA_DEFINITION = 'SchemaDefinition'),
    (e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
    (e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
    (e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
    (e.FIELD_DEFINITION = 'FieldDefinition'),
    (e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
    (e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
    (e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
    (e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
    (e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
    (e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
    (e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
    (e.SCHEMA_EXTENSION = 'SchemaExtension'),
    (e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
    (e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
    (e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
    (e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
    (e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
    (e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension');
})(C || (C = {}));
function d(e) {
  return e === 9 || e === 32;
}
function oe(e) {
  return e >= 48 && e <= 57;
}
function X(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function Ce(e) {
  return X(e) || e === 95;
}
function Le(e) {
  return X(e) || oe(e) || e === 95;
}
function Fe(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER,
    r = null,
    o = -1;
  for (let s = 0; s < e.length; ++s) {
    var i;
    const c = e[s],
      u = ie(c);
    u !== c.length &&
      ((r = (i = r) !== null && i !== void 0 ? i : s), (o = s), s !== 0 && u < n && (n = u));
  }
  return e
    .map((s, c) => (c === 0 ? s : s.slice(n)))
    .slice((t = r) !== null && t !== void 0 ? t : 0, o + 1);
}
function ie(e) {
  let t = 0;
  for (; t < e.length && d(e.charCodeAt(t)); ) ++t;
  return t;
}
function Pe(e, t) {
  const n = e.replace(/"""/g, '\\"""'),
    r = n.split(/\r\n|[\n\r]/g),
    o = r.length === 1,
    i = r.length > 1 && r.slice(1).every(_ => _.length === 0 || d(_.charCodeAt(0))),
    s = n.endsWith('\\"""'),
    c = e.endsWith('"') && !s,
    u = e.endsWith('\\'),
    a = c || u,
    l = !(t != null && t.minimize) && (!o || e.length > 70 || a || i || s);
  let p = '';
  const W = o && d(e.charCodeAt(0));
  return (
    ((l && !W) || i) &&
      (p += `
`),
    (p += n),
    (l || a) &&
      (p += `
`),
    '"""' + p + '"""'
  );
}
const ae = 10,
  G = 2;
function Ve(e) {
  return v(e, []);
}
function v(e, t) {
  switch (typeof e) {
    case 'string':
      return JSON.stringify(e);
    case 'function':
      return e.name ? `[function ${e.name}]` : '[function]';
    case 'object':
      return se(e, t);
    default:
      return String(e);
  }
}
function se(e, t) {
  if (e === null) return 'null';
  if (t.includes(e)) return '[Circular]';
  const n = [...t, e];
  if (ce(e)) {
    const r = e.toJSON();
    if (r !== e) return typeof r == 'string' ? r : v(r, n);
  } else if (Array.isArray(e)) return le(e, n);
  return ue(e, n);
}
function ce(e) {
  return typeof e.toJSON == 'function';
}
function ue(e, t) {
  const n = Object.entries(e);
  return n.length === 0
    ? '{}'
    : t.length > G
    ? '[' + fe(e) + ']'
    : '{ ' + n.map(([o, i]) => o + ': ' + v(i, t)).join(', ') + ' }';
}
function le(e, t) {
  if (e.length === 0) return '[]';
  if (t.length > G) return '[Array]';
  const n = Math.min(ae, e.length),
    r = e.length - n,
    o = [];
  for (let i = 0; i < n; ++i) o.push(v(e[i], t));
  return (
    r === 1 ? o.push('... 1 more item') : r > 1 && o.push(`... ${r} more items`),
    '[' + o.join(', ') + ']'
  );
}
function fe(e) {
  const t = Object.prototype.toString
    .call(e)
    .replace(/^\[object /, '')
    .replace(/]$/, '');
  if (t === 'Object' && typeof e.constructor == 'function') {
    const n = e.constructor.name;
    if (typeof n == 'string' && n !== '') return n;
  }
  return t;
}
var Me =
    typeof WeakMap == 'function' &&
    f(function () {
      return navigator.product;
    }) !== 'ReactNative',
  Ue = typeof WeakSet == 'function',
  Q = typeof Symbol == 'function' && typeof Symbol.for == 'function',
  ke = Q && Symbol.asyncIterator,
  pe =
    typeof f(function () {
      return window.document.createElement;
    }) == 'function',
  ye =
    f(function () {
      return navigator.userAgent.indexOf('jsdom') >= 0;
    }) || !1,
  Re = pe && !ye;
function Ee(e) {
  return e !== null && typeof e == 'object';
}
function L() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = Object.create(null);
  return (
    e.forEach(function (r) {
      !r ||
        Object.keys(r).forEach(function (o) {
          var i = r[o];
          i !== void 0 && (n[o] = i);
        });
    }),
    n
  );
}
function Be(e, t) {
  return L(e, t, t.variables && { variables: L(T(T({}, e && e.variables), t.variables)) });
}
var ge = Symbol();
function Ye(e) {
  return e.extensions ? Array.isArray(e.extensions[ge]) : !1;
}
function Je(e) {
  return e.hasOwnProperty('graphQLErrors');
}
var me = function (e) {
    var t = h(h(h([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
    return (
      e.networkError && t.push(e.networkError),
      t.map(function (n) {
        return (Ee(n) && n.message) || 'Error message not found.';
      }).join(`
`)
    );
  },
  Xe = (function (e) {
    R(t, e);
    function t(n) {
      var r = n.graphQLErrors,
        o = n.protocolErrors,
        i = n.clientErrors,
        s = n.networkError,
        c = n.errorMessage,
        u = n.extraInfo,
        a = e.call(this, c) || this;
      return (
        (a.name = 'ApolloError'),
        (a.graphQLErrors = r || []),
        (a.protocolErrors = o || []),
        (a.clientErrors = i || []),
        (a.networkError = s || null),
        (a.message = c || me(a)),
        (a.extraInfo = u),
        (a.__proto__ = t.prototype),
        a
      );
    }
    return t;
  })(Error);
const { toString: F, hasOwnProperty: he } = Object.prototype,
  P = Function.prototype.toString,
  N = new Map();
function Ge(e, t) {
  try {
    return b(e, t);
  } finally {
    N.clear();
  }
}
function b(e, t) {
  if (e === t) return !0;
  const n = F.call(e),
    r = F.call(t);
  if (n !== r) return !1;
  switch (n) {
    case '[object Array]':
      if (e.length !== t.length) return !1;
    case '[object Object]': {
      if (M(e, t)) return !0;
      const o = V(e),
        i = V(t),
        s = o.length;
      if (s !== i.length) return !1;
      for (let c = 0; c < s; ++c) if (!he.call(t, o[c])) return !1;
      for (let c = 0; c < s; ++c) {
        const u = o[c];
        if (!b(e[u], t[u])) return !1;
      }
      return !0;
    }
    case '[object Error]':
      return e.name === t.name && e.message === t.message;
    case '[object Number]':
      if (e !== e) return t !== t;
    case '[object Boolean]':
    case '[object Date]':
      return +e == +t;
    case '[object RegExp]':
    case '[object String]':
      return e == `${t}`;
    case '[object Map]':
    case '[object Set]': {
      if (e.size !== t.size) return !1;
      if (M(e, t)) return !0;
      const o = e.entries(),
        i = n === '[object Map]';
      for (;;) {
        const s = o.next();
        if (s.done) break;
        const [c, u] = s.value;
        if (!t.has(c) || (i && !b(u, t.get(c)))) return !1;
      }
      return !0;
    }
    case '[object Uint16Array]':
    case '[object Uint8Array]':
    case '[object Uint32Array]':
    case '[object Int32Array]':
    case '[object Int8Array]':
    case '[object Int16Array]':
    case '[object ArrayBuffer]':
      (e = new Uint8Array(e)), (t = new Uint8Array(t));
    case '[object DataView]': {
      let o = e.byteLength;
      if (o === t.byteLength) for (; o-- && e[o] === t[o]; );
      return o === -1;
    }
    case '[object AsyncFunction]':
    case '[object GeneratorFunction]':
    case '[object AsyncGeneratorFunction]':
    case '[object Function]': {
      const o = P.call(e);
      return o !== P.call(t) ? !1 : !Oe(o, ve);
    }
  }
  return !1;
}
function V(e) {
  return Object.keys(e).filter(Te, e);
}
function Te(e) {
  return this[e] !== void 0;
}
const ve = '{ [native code] }';
function Oe(e, t) {
  const n = e.length - t.length;
  return n >= 0 && e.indexOf(t, n) === n;
}
function M(e, t) {
  let n = N.get(e);
  if (n) {
    if (n.has(t)) return !0;
  } else N.set(e, (n = new Set()));
  return n.add(t), !1;
}
var U = Q ? Symbol.for('__APOLLO_CONTEXT__') : '__APOLLO_CONTEXT__';
function Qe() {
  te('createContext' in q, 43);
  var e = m.exports.createContext[U];
  return (
    e ||
      (Object.defineProperty(m.exports.createContext, U, {
        value: (e = m.exports.createContext({})),
        enumerable: !1,
        writable: !1,
        configurable: !0
      }),
      (e.displayName = 'ApolloContext')),
    e
  );
}
export {
  Xe as A,
  Qe as B,
  Ne as C,
  Re as D,
  oe as E,
  Ce as F,
  Fe as G,
  Le as H,
  C as K,
  xe as L,
  w as O,
  de as P,
  ne as Q,
  je as T,
  T as _,
  Ve as a,
  te as b,
  h as c,
  De as d,
  Ee as e,
  Ue as f,
  Me as g,
  Q as h,
  we as i,
  R as j,
  ke as k,
  Se as l,
  _e as m,
  Ae as n,
  ge as o,
  Pe as p,
  f as q,
  be as r,
  L as s,
  Ge as t,
  ee as u,
  K as v,
  Ye as w,
  Je as x,
  Be as y,
  J as z
};
