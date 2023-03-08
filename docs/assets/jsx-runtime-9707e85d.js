import{r as a}from"./index-e0ddb630.js";var o={},i={get exports(){return o},set exports(t){o=t}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=a,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,j=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,p){var r,n={},_=null,f=null;p!==void 0&&(_=""+p),e.key!==void 0&&(_=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)c.call(e,r)&&!y.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:m,type:t,key:_,ref:f,props:n,_owner:j.current}}s.Fragment=x;s.jsx=u;s.jsxs=u;(function(t){t.exports=s})(i);const d=o.Fragment,v=o.jsx,O=o.jsxs,b=Object.freeze(Object.defineProperty({__proto__:null,Fragment:d,jsx:v,jsxs:O},Symbol.toStringTag,{value:"Module"}));export{d as F,v as a,O as b,b as j};
//# sourceMappingURL=jsx-runtime-9707e85d.js.map
