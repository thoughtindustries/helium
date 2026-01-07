import{R as m}from"./index-GiUgBvb1.js";import{T as ce,i as q,a as ue,d as Oe,b as Le,f as le,g as j,K as l,O as $,L as we,_ as b,r as x,h as de,j as N,R as Re,k as Fe,l as pe,w as Pe,n as $e,o as Ue,p as Me,q as he,e as Y,s as fe,t as Be,m as qe,u as Ve,N as P,v as me,A as ge}from"./ApolloContext-C-0_jjk0.js";function Qe(e){return typeof e=="object"&&e!==null}function Ge(e,t){if(!!!e)throw new Error("Unexpected invariant triggered.")}const je=/\r\n|[\n\r]/g;function W(e,t){let n=0,s=1;for(const r of e.body.matchAll(je)){if(typeof r.index=="number"||Ge(!1),r.index>=t)break;n=r.index+r[0].length,s+=1}return{line:s,column:t+1-n}}function Ke(e){return ye(e.source,W(e.source,e.start))}function ye(e,t){const n=e.locationOffset.column-1,s="".padStart(n)+e.body,r=t.line-1,i=e.locationOffset.line-1,o=t.line+i,c=t.line===1?n:0,u=t.column+c,h=`${e.name}:${o}:${u}
`,d=s.split(/\r\n|[\n\r]/g),p=d[r];if(p.length>120){const f=Math.floor(u/80),C=u%80,g=[];for(let T=0;T<p.length;T+=80)g.push(p.slice(T,T+80));return h+ee([[`${o} |`,g[0]],...g.slice(1,f+1).map(T=>["|",T]),["|","^".padStart(C)],["|",g[f+1]]])}return h+ee([[`${o-1} |`,d[r-1]],[`${o} |`,p],["|","^".padStart(u)],[`${o+1} |`,d[r+1]]])}function ee(e){const t=e.filter(([s,r])=>r!==void 0),n=Math.max(...t.map(([s])=>s.length));return t.map(([s,r])=>s.padStart(n)+(r?" "+r:"")).join(`
`)}function ze(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class Z extends Error{constructor(t,...n){var s,r,i;const{nodes:o,source:c,positions:u,path:h,originalError:d,extensions:p}=ze(n);super(t),this.name="GraphQLError",this.path=h??void 0,this.originalError=d??void 0,this.nodes=te(Array.isArray(o)?o:o?[o]:void 0);const f=te((s=this.nodes)===null||s===void 0?void 0:s.map(g=>g.loc).filter(g=>g!=null));this.source=c??(f==null||(r=f[0])===null||r===void 0?void 0:r.source),this.positions=u??(f==null?void 0:f.map(g=>g.start)),this.locations=u&&c?u.map(g=>W(c,g)):f==null?void 0:f.map(g=>W(g.source,g.start));const C=Qe(d==null?void 0:d.extensions)?d==null?void 0:d.extensions:void 0;this.extensions=(i=p??C)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Z):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+Ke(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+ye(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function te(e){return e===void 0||e.length===0?void 0:e}function v(e,t,n){return new Z(`Syntax Error: ${n}`,{source:e,positions:[t]})}var H;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(H||(H={}));var a;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(a||(a={}));class Ye{constructor(t){const n=new ce(a.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==a.EOF)do if(t.next)t=t.next;else{const n=He(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===a.COMMENT);return t}}function We(e){return e===a.BANG||e===a.DOLLAR||e===a.AMP||e===a.PAREN_L||e===a.PAREN_R||e===a.SPREAD||e===a.COLON||e===a.EQUALS||e===a.AT||e===a.BRACKET_L||e===a.BRACKET_R||e===a.BRACE_L||e===a.PIPE||e===a.BRACE_R}function O(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Q(e,t){return Ee(e.charCodeAt(t))&&Ce(e.charCodeAt(t+1))}function Ee(e){return e>=55296&&e<=56319}function Ce(e){return e>=56320&&e<=57343}function _(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return a.EOF;if(n>=32&&n<=126){const s=String.fromCodePoint(n);return s==='"'?`'"'`:`"${s}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function E(e,t,n,s,r){const i=e.line,o=1+n-e.lineStart;return new ce(t,n,s,i,o,r)}function He(e,t){const n=e.source.body,s=n.length;let r=t;for(;r<s;){const i=n.charCodeAt(r);switch(i){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++e.line,e.lineStart=r;continue;case 13:n.charCodeAt(r+1)===10?r+=2:++r,++e.line,e.lineStart=r;continue;case 35:return Je(e,r);case 33:return E(e,a.BANG,r,r+1);case 36:return E(e,a.DOLLAR,r,r+1);case 38:return E(e,a.AMP,r,r+1);case 40:return E(e,a.PAREN_L,r,r+1);case 41:return E(e,a.PAREN_R,r,r+1);case 46:if(n.charCodeAt(r+1)===46&&n.charCodeAt(r+2)===46)return E(e,a.SPREAD,r,r+3);break;case 58:return E(e,a.COLON,r,r+1);case 61:return E(e,a.EQUALS,r,r+1);case 64:return E(e,a.AT,r,r+1);case 91:return E(e,a.BRACKET_L,r,r+1);case 93:return E(e,a.BRACKET_R,r,r+1);case 123:return E(e,a.BRACE_L,r,r+1);case 124:return E(e,a.PIPE,r,r+1);case 125:return E(e,a.BRACE_R,r,r+1);case 34:return n.charCodeAt(r+1)===34&&n.charCodeAt(r+2)===34?rt(e,r):Ze(e,r)}if(q(i)||i===45)return Xe(e,r,i);if(ue(i))return st(e,r);throw v(e.source,r,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:O(i)||Q(n,r)?`Unexpected character: ${_(e,r)}.`:`Invalid character: ${_(e,r)}.`)}return E(e,a.EOF,s,s)}function Je(e,t){const n=e.source.body,s=n.length;let r=t+1;for(;r<s;){const i=n.charCodeAt(r);if(i===10||i===13)break;if(O(i))++r;else if(Q(n,r))r+=2;else break}return E(e,a.COMMENT,t,r,n.slice(t+1,r))}function Xe(e,t,n){const s=e.source.body;let r=t,i=n,o=!1;if(i===45&&(i=s.charCodeAt(++r)),i===48){if(i=s.charCodeAt(++r),q(i))throw v(e.source,r,`Invalid number, unexpected digit after 0: ${_(e,r)}.`)}else r=K(e,r,i),i=s.charCodeAt(r);if(i===46&&(o=!0,i=s.charCodeAt(++r),r=K(e,r,i),i=s.charCodeAt(r)),(i===69||i===101)&&(o=!0,i=s.charCodeAt(++r),(i===43||i===45)&&(i=s.charCodeAt(++r)),r=K(e,r,i),i=s.charCodeAt(r)),i===46||ue(i))throw v(e.source,r,`Invalid number, expected digit but got: ${_(e,r)}.`);return E(e,o?a.FLOAT:a.INT,t,r,s.slice(t,r))}function K(e,t,n){if(!q(n))throw v(e.source,t,`Invalid number, expected digit but got: ${_(e,t)}.`);const s=e.source.body;let r=t+1;for(;q(s.charCodeAt(r));)++r;return r}function Ze(e,t){const n=e.source.body,s=n.length;let r=t+1,i=r,o="";for(;r<s;){const c=n.charCodeAt(r);if(c===34)return o+=n.slice(i,r),E(e,a.STRING,t,r+1,o);if(c===92){o+=n.slice(i,r);const u=n.charCodeAt(r+1)===117?n.charCodeAt(r+2)===123?et(e,r):tt(e,r):nt(e,r);o+=u.value,r+=u.size,i=r;continue}if(c===10||c===13)break;if(O(c))++r;else if(Q(n,r))r+=2;else throw v(e.source,r,`Invalid character within String: ${_(e,r)}.`)}throw v(e.source,r,"Unterminated string.")}function et(e,t){const n=e.source.body;let s=0,r=3;for(;r<12;){const i=n.charCodeAt(t+r++);if(i===125){if(r<5||!O(s))break;return{value:String.fromCodePoint(s),size:r}}if(s=s<<4|F(i),s<0)break}throw v(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)}function tt(e,t){const n=e.source.body,s=ne(n,t+2);if(O(s))return{value:String.fromCodePoint(s),size:6};if(Ee(s)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const r=ne(n,t+8);if(Ce(r))return{value:String.fromCodePoint(s,r),size:12}}throw v(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function ne(e,t){return F(e.charCodeAt(t))<<12|F(e.charCodeAt(t+1))<<8|F(e.charCodeAt(t+2))<<4|F(e.charCodeAt(t+3))}function F(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function nt(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw v(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function rt(e,t){const n=e.source.body,s=n.length;let r=e.lineStart,i=t+3,o=i,c="";const u=[];for(;i<s;){const h=n.charCodeAt(i);if(h===34&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34){c+=n.slice(o,i),u.push(c);const d=E(e,a.BLOCK_STRING,t,i+3,Oe(u).join(`
`));return e.line+=u.length-1,e.lineStart=r,d}if(h===92&&n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34&&n.charCodeAt(i+3)===34){c+=n.slice(o,i),o=i+1,i+=4;continue}if(h===10||h===13){c+=n.slice(o,i),u.push(c),h===13&&n.charCodeAt(i+1)===10?i+=2:++i,c="",o=i,r=i;continue}if(O(h))++i;else if(Q(n,i))i+=2;else throw v(e.source,i,`Invalid character within String: ${_(e,i)}.`)}throw v(e.source,i,"Unterminated string.")}function st(e,t){const n=e.source.body,s=n.length;let r=t+1;for(;r<s;){const i=n.charCodeAt(r);if(Le(i))++r;else break}return E(e,a.NAME,t,r,n.slice(t,r))}const it=globalThis.process&&!0,at=it?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var s;const r=n.prototype[Symbol.toStringTag],i=Symbol.toStringTag in t?t[Symbol.toStringTag]:(s=t.constructor)===null||s===void 0?void 0:s.name;if(r===i){const o=le(t);throw new Error(`Cannot use ${r} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class ve{constructor(t,n="GraphQL request",s={line:1,column:1}){typeof t=="string"||j(!1,`Body must be a string. Received: ${le(t)}.`),this.body=t,this.name=n,this.locationOffset=s,this.locationOffset.line>0||j(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||j(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function ot(e){return at(e,ve)}function ct(e,t){const n=new ut(e,t),s=n.parseDocument();return Object.defineProperty(s,"tokenCount",{enumerable:!1,value:n.tokenCount}),s}class ut{constructor(t,n={}){const s=ot(t)?t:new ve(t);this._lexer=new Ye(s),this._options=n,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const t=this.expectToken(a.NAME);return this.node(t,{kind:l.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:l.DOCUMENT,definitions:this.many(a.SOF,this.parseDefinition,a.EOF)})}parseDefinition(){if(this.peek(a.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===a.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw v(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(a.BRACE_L))return this.node(t,{kind:l.OPERATION_DEFINITION,operation:$.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let s;return this.peek(a.NAME)&&(s=this.parseName()),this.node(t,{kind:l.OPERATION_DEFINITION,operation:n,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(a.NAME);switch(t.value){case"query":return $.QUERY;case"mutation":return $.MUTATION;case"subscription":return $.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(a.PAREN_L,this.parseVariableDefinition,a.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:l.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(a.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(a.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(a.DOLLAR),this.node(t,{kind:l.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:l.SELECTION_SET,selections:this.many(a.BRACE_L,this.parseSelection,a.BRACE_R)})}parseSelection(){return this.peek(a.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let s,r;return this.expectOptionalToken(a.COLON)?(s=n,r=this.parseName()):r=n,this.node(t,{kind:l.FIELD,alias:s,name:r,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(a.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(a.PAREN_L,n,a.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,s=this.parseName();return this.expectToken(a.COLON),this.node(n,{kind:l.ARGUMENT,name:s,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(a.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(a.NAME)?this.node(t,{kind:l.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:l.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:l.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:l.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case a.BRACKET_L:return this.parseList(t);case a.BRACE_L:return this.parseObject(t);case a.INT:return this.advanceLexer(),this.node(n,{kind:l.INT,value:n.value});case a.FLOAT:return this.advanceLexer(),this.node(n,{kind:l.FLOAT,value:n.value});case a.STRING:case a.BLOCK_STRING:return this.parseStringLiteral();case a.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:l.BOOLEAN,value:!0});case"false":return this.node(n,{kind:l.BOOLEAN,value:!1});case"null":return this.node(n,{kind:l.NULL});default:return this.node(n,{kind:l.ENUM,value:n.value})}case a.DOLLAR:if(t)if(this.expectToken(a.DOLLAR),this._lexer.token.kind===a.NAME){const s=this._lexer.token.value;throw v(this._lexer.source,n.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:l.STRING,value:t.value,block:t.kind===a.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:l.LIST,values:this.any(a.BRACKET_L,n,a.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:l.OBJECT,fields:this.any(a.BRACE_L,n,a.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,s=this.parseName();return this.expectToken(a.COLON),this.node(n,{kind:l.OBJECT_FIELD,name:s,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(a.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(a.AT),this.node(n,{kind:l.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(a.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(a.BRACKET_R),n=this.node(t,{kind:l.LIST_TYPE,type:s})}else n=this.parseNamedType();return this.expectOptionalToken(a.BANG)?this.node(t,{kind:l.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:l.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(a.STRING)||this.peek(a.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),r=this.many(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);return this.node(t,{kind:l.SCHEMA_DEFINITION,description:n,directives:s,operationTypes:r})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(a.COLON);const s=this.parseNamedType();return this.node(t,{kind:l.OPERATION_TYPE_DEFINITION,operation:n,type:s})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),r=this.parseConstDirectives();return this.node(t,{kind:l.SCALAR_TYPE_DEFINITION,description:n,name:s,directives:r})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:l.OBJECT_TYPE_DEFINITION,description:n,name:s,interfaces:r,directives:i,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(a.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseFieldDefinition,a.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),s=this.parseName(),r=this.parseArgumentDefs();this.expectToken(a.COLON);const i=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(t,{kind:l.FIELD_DEFINITION,description:n,name:s,arguments:r,type:i,directives:o})}parseArgumentDefs(){return this.optionalMany(a.PAREN_L,this.parseInputValueDef,a.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),s=this.parseName();this.expectToken(a.COLON);const r=this.parseTypeReference();let i;this.expectOptionalToken(a.EQUALS)&&(i=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(t,{kind:l.INPUT_VALUE_DEFINITION,description:n,name:s,type:r,defaultValue:i,directives:o})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:l.INTERFACE_TYPE_DEFINITION,description:n,name:s,interfaces:r,directives:i,fields:o})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(t,{kind:l.UNION_TYPE_DEFINITION,description:n,name:s,directives:r,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(a.EQUALS)?this.delimitedMany(a.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(t,{kind:l.ENUM_TYPE_DEFINITION,description:n,name:s,directives:r,values:i})}parseEnumValuesDefinition(){return this.optionalMany(a.BRACE_L,this.parseEnumValueDefinition,a.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),s=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(t,{kind:l.ENUM_VALUE_DEFINITION,description:n,name:s,directives:r})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw v(this._lexer.source,this._lexer.token.start,`${U(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(t,{kind:l.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:s,directives:r,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseInputValueDef,a.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===a.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),s=this.optionalMany(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);if(n.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:l.SCHEMA_EXTENSION,directives:n,operationTypes:s})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(t,{kind:l.SCALAR_TYPE_EXTENSION,name:n,directives:s})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),s=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(s.length===0&&r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:l.OBJECT_TYPE_EXTENSION,name:n,interfaces:s,directives:r,fields:i})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),s=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(s.length===0&&r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:l.INTERFACE_TYPE_EXTENSION,name:n,interfaces:s,directives:r,fields:i})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),s=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(s.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:l.UNION_TYPE_EXTENSION,name:n,directives:s,types:r})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),s=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(s.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:l.ENUM_TYPE_EXTENSION,name:n,directives:s,values:r})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),s=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(s.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:l.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:s,fields:r})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(a.AT);const s=this.parseName(),r=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(t,{kind:l.DIRECTIVE_DEFINITION,description:n,name:s,arguments:r,repeatable:i,locations:o})}parseDirectiveLocations(){return this.delimitedMany(a.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(H,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new we(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw v(this._lexer.source,n.start,`Expected ${xe(t)}, found ${U(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===a.NAME&&n.value===t)this.advanceLexer();else throw v(this._lexer.source,n.start,`Expected "${t}", found ${U(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===a.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const n=t??this._lexer.token;return v(this._lexer.source,n.start,`Unexpected ${U(n)}.`)}any(t,n,s){this.expectToken(t);const r=[];for(;!this.expectOptionalToken(s);)r.push(n.call(this));return r}optionalMany(t,n,s){if(this.expectOptionalToken(t)){const r=[];do r.push(n.call(this));while(!this.expectOptionalToken(s));return r}return[]}many(t,n,s){this.expectToken(t);const r=[];do r.push(n.call(this));while(!this.expectOptionalToken(s));return r}delimitedMany(t,n){this.expectOptionalToken(t);const s=[];do s.push(n.call(this));while(this.expectOptionalToken(t));return s}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(n.kind!==a.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw v(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function U(e){const t=e.value;return xe(e.kind)+(t!=null?` "${t}"`:"")}function xe(e){return We(e)?`"${e}"`:e}var M=new Map,J=new Map,Te=!0,V=!1;function ke(e){return e.replace(/[\s,]+/g," ").trim()}function lt(e){return ke(e.source.body.substring(e.start,e.end))}function dt(e){var t=new Set,n=[];return e.definitions.forEach(function(s){if(s.kind==="FragmentDefinition"){var r=s.name.value,i=lt(s.loc),o=J.get(r);o&&!o.has(i)?Te&&console.warn("Warning: fragment with name "+r+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||J.set(r,o=new Set),o.add(i),t.has(i)||(t.add(i),n.push(s))}else n.push(s)}),b(b({},e),{definitions:n})}function pt(e){var t=new Set(e.definitions);t.forEach(function(s){s.loc&&delete s.loc,Object.keys(s).forEach(function(r){var i=s[r];i&&typeof i=="object"&&t.add(i)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function ht(e){var t=ke(e);if(!M.has(t)){var n=ct(e,{experimentalFragmentVariables:V,allowLegacyFragmentVariables:V});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");M.set(t,pt(dt(n)))}return M.get(t)}function y(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var s=e[0];return t.forEach(function(r,i){r&&r.kind==="Document"?s+=r.loc.source.body:s+=r,s+=e[i+1]}),ht(s)}function ft(){M.clear(),J.clear()}function mt(){Te=!1}function gt(){V=!0}function yt(){V=!1}var w={gql:y,resetCaches:ft,disableFragmentWarnings:mt,enableExperimentalFragmentVariables:gt,disableExperimentalFragmentVariables:yt};(function(e){e.gql=w.gql,e.resetCaches=w.resetCaches,e.disableFragmentWarnings=w.disableFragmentWarnings,e.enableExperimentalFragmentVariables=w.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=w.disableExperimentalFragmentVariables})(y||(y={}));y.default=y;function Ne(e){var t=x.useContext(de()),n=e||t.client;return N(!!n,79),n}var re=!1,Et="useSyncExternalStore",Ct=Re[Et],vt=Ct||function(e,t,n){var s=t();globalThis.__DEV__!==!1&&!re&&s!==t()&&(re=!0,globalThis.__DEV__!==!1&&N.error(92));var r=x.useState({inst:{value:s,getSnapshot:t}}),i=r[0].inst,o=r[1];return Fe?x.useLayoutEffect(function(){Object.assign(i,{value:s,getSnapshot:t}),z(i)&&o({inst:i})},[e,s,t]):Object.assign(i,{value:s,getSnapshot:t}),x.useEffect(function(){return z(i)&&o({inst:i}),e(function(){z(i)&&o({inst:i})})},[e]),s};function z(e){var t=e.value,n=e.getSnapshot;try{return t!==n()}catch{return!0}}var S;(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(S||(S={}));var D;function se(e){var t;switch(e){case S.Query:t="Query";break;case S.Mutation:t="Mutation";break;case S.Subscription:t="Subscription";break}return t}function be(e){Pe("parser",function(){globalThis.__DEV__!==!1&&N.warn(94)}),D||(D=new $e(Ue.parser||1e3));var t=D.get(e);if(t)return t;var n,s,r;N(!!e&&!!e.kind,95,e);for(var i=[],o=[],c=[],u=[],h=0,d=e.definitions;h<d.length;h++){var p=d[h];if(p.kind==="FragmentDefinition"){i.push(p);continue}if(p.kind==="OperationDefinition")switch(p.operation){case"query":o.push(p);break;case"mutation":c.push(p);break;case"subscription":u.push(p);break}}N(!i.length||o.length||c.length||u.length,96),N(o.length+c.length+u.length<=1,97,e,o.length,u.length,c.length),s=o.length?S.Query:S.Mutation,!o.length&&!c.length&&(s=S.Subscription);var f=o.length?o:c.length?c:u;N(f.length===1,98,e,f.length);var C=f[0];n=C.variableDefinitions||[],C.name&&C.name.kind==="Name"?r=C.name.value:r="data";var g={name:r,type:s,variables:n};return D.set(e,g),g}be.resetCache=function(){D=void 0};globalThis.__DEV__!==!1&&Me("parser",function(){return D?D.size:0});function xt(e,t){var n=pe("parser",be,[e]),s=se(t),r=se(n.type);N(n.type===t,99,s,s,r)}function R(e,t,n,s){"use no memo";s===void 0&&(s="Please remove this option.");var r=x.useRef(!1);t in e&&!r.current&&(globalThis.__DEV__!==!1&&N.warn(78,n,t,s),r.current=!0)}var Tt=Symbol.for("apollo.hook.wrappers");function kt(e,t,n){var s=n.queryManager,r=s&&s[Tt],i=r&&r[e];return i?i(t):t}var Nt=Object.prototype.hasOwnProperty;function ie(){}var B=Symbol();function A(e,t){return t===void 0&&(t=Object.create(null)),kt("useQuery",bt,Ne(t&&t.client))(e,t)}function bt(e,t){globalThis.__DEV__!==!1&&(R(t,"canonizeResults","useQuery"),R(t,"partialRefetch","useQuery"),R(t,"defaultOptions","useQuery","Pass the options directly to the hook instead."),R(t,"onCompleted","useQuery","If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."),R(t,"onError","useQuery","If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));var n=St(e,t),s=n.result,r=n.obsQueryFields;return x.useMemo(function(){return b(b({},s),r)},[s,r])}function It(e,t,n,s,r){function i(p){var f;xt(t,S.Query);var C={client:e,query:t,observable:s&&s.getSSRObservable(r())||Ve.inactiveOnCreation.withValue(!s,function(){return pe("canonizeResults",function(){return e.watchQuery(Ie(void 0,e,n,r()))})}),resultData:{previousData:(f=p==null?void 0:p.resultData.current)===null||f===void 0?void 0:f.data}};return C}var o=x.useState(i),c=o[0],u=o[1];function h(p){var f,C;Object.assign(c.observable,(f={},f[B]=p,f));var g=c.resultData;u(b(b({},c),{query:p.query,resultData:Object.assign(g,{previousData:((C=g.current)===null||C===void 0?void 0:C.data)||g.previousData,current:void 0})}))}if(e!==c.client||t!==c.query){var d=i(c);return u(d),[d,h]}return[c,h]}function St(e,t){var n=Ne(t.client),s=x.useContext(de()).renderPromises,r=!!s,i=n.disableNetworkFetches,o=t.ssr!==!1&&!t.skip,c=t.partialRefetch,u=Ot(n,e,t,r),h=It(n,e,t,s,u),d=h[0],p=d.observable,f=d.resultData,C=h[1],g=u(p);_t(f,p,n,t,g);var T=x.useMemo(function(){return Ft(p)},[p]);Dt(p,s,o);var L=At(f,p,n,t,g,i,c,r,{onCompleted:t.onCompleted||ie,onError:t.onError||ie});return{result:L,obsQueryFields:T,observable:p,resultData:f,client:n,onQueryExecuted:C}}function At(e,t,n,s,r,i,o,c,u){var h=x.useRef(u);x.useEffect(function(){h.current=u});var d=(c||i)&&s.ssr===!1&&!s.skip?Ae:s.skip||r.fetchPolicy==="standby"?De:void 0,p=e.previousData,f=x.useMemo(function(){return d&&Se(d,p,t,n)},[n,t,d,p]);return vt(x.useCallback(function(C){if(c)return function(){};var g=function(){var I=e.current,k=t.getCurrentResult();I&&I.loading===k.loading&&I.networkStatus===k.networkStatus&&Y(I.data,k.data)||X(k,e,t,n,o,C,h.current)},T=function(I){if(L.current.unsubscribe(),L.current=t.resubscribeAfterError(g,T),!Nt.call(I,"graphQLErrors"))throw I;var k=e.current;(!k||k&&k.loading||!Y(I,k.error))&&X({data:k&&k.data,error:I,loading:!1,networkStatus:P.error},e,t,n,o,C,h.current)},L={current:t.subscribe(g,T)};return function(){setTimeout(function(){return L.current.unsubscribe()})}},[i,c,t,e,o,n]),function(){return f||ae(e,t,h.current,o,n)},function(){return f||ae(e,t,h.current,o,n)})}function Dt(e,t,n){t&&n&&(t.registerSSRObservable(e),e.getCurrentResult().loading&&t.addObservableQueryPromise(e))}function _t(e,t,n,s,r){var i;t[B]&&!Y(t[B],r)&&(t.reobserve(Ie(t,n,s,r)),e.previousData=((i=e.current)===null||i===void 0?void 0:i.data)||e.previousData,e.current=void 0),t[B]=r}function Ot(e,t,n,s){n===void 0&&(n={});var r=n.skip;n.ssr,n.onCompleted,n.onError;var i=n.defaultOptions,o=he(n,["skip","ssr","onCompleted","onError","defaultOptions"]);return function(c){var u=Object.assign(o,{query:t});return s&&(u.fetchPolicy==="network-only"||u.fetchPolicy==="cache-and-network")&&(u.fetchPolicy="cache-first"),u.variables||(u.variables={}),r?(u.initialFetchPolicy=u.initialFetchPolicy||u.fetchPolicy||oe(i,e.defaultOptions),u.fetchPolicy="standby"):u.fetchPolicy||(u.fetchPolicy=(c==null?void 0:c.options.initialFetchPolicy)||oe(i,e.defaultOptions)),u}}function Ie(e,t,n,s){var r=[],i=t.defaultOptions.watchQuery;return i&&r.push(i),n.defaultOptions&&r.push(n.defaultOptions),r.push(Be(e&&e.options,s)),r.reduce(qe)}function X(e,t,n,s,r,i,o){var c=t.current;c&&c.data&&(t.previousData=c.data),!e.error&&me(e.errors)&&(e.error=new ge({graphQLErrors:e.errors})),t.current=Se(Rt(e,n,r),t.previousData,n,s),i(),Lt(e,c==null?void 0:c.networkStatus,o)}function Lt(e,t,n){if(!e.loading){var s=wt(e);Promise.resolve().then(function(){s?n.onError(s):e.data&&t!==e.networkStatus&&e.networkStatus===P.ready&&n.onCompleted(e.data)}).catch(function(r){globalThis.__DEV__!==!1&&N.warn(r)})}}function ae(e,t,n,s,r){return e.current||X(t.getCurrentResult(),e,t,r,s,function(){},n),e.current}function oe(e,t){var n;return(e==null?void 0:e.fetchPolicy)||((n=t==null?void 0:t.watchQuery)===null||n===void 0?void 0:n.fetchPolicy)||"cache-first"}function wt(e){return me(e.errors)?new ge({graphQLErrors:e.errors}):e.error}function Se(e,t,n,s){var r=e.data;e.partial;var i=he(e,["data","partial"]),o=b(b({data:r},i),{client:s,observable:n,variables:n.variables,called:e!==Ae&&e!==De,previousData:t});return o}function Rt(e,t,n){return e.partial&&n&&!e.loading&&(!e.data||Object.keys(e.data).length===0)&&t.options.fetchPolicy!=="cache-only"?(t.refetch(),b(b({},e),{loading:!0,networkStatus:P.refetch})):e}var Ae=fe({loading:!0,data:void 0,error:void 0,networkStatus:P.loading}),De=fe({loading:!1,data:void 0,error:void 0,networkStatus:P.ready});function Ft(e){return{refetch:e.refetch.bind(e),reobserve:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return globalThis.__DEV__!==!1&&globalThis.__DEV__!==!1&&N.warn(84),e.reobserve.apply(e,t)},fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}}const G=y`
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
`,Pt=y`
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
`,$t=y`
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
`,Ut={},Mt=y`
  query CatalogContent(
    $layoutId: ID
    $widgetId: ID
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
      layoutId: $layoutId
      widgetId: $widgetId
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
  ${G}
  ${Pt}
  ${$t}
`;function an(e){const t={...Ut,...e};return A(Mt,t)}const Bt={},qt=y`
  query Catalog($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...ContentFragment
      }
    }
  }
  ${G}
`;function on(e){const t={...Bt,...e};return A(qt,t)}const Vt={},Qt=y`
  query CourseGroupBySlug($slug: Slug!) {
    CourseGroupBySlug(slug: $slug) {
      asset
      description
      title
      rating
      ratingsCount
    }
  }
`;function Gt(e){const t={...Vt,...e};return A(Qt,t)}const jt={},Kt=y`
  query LearningPathBySlug($slug: Slug!) {
    LearningPathBySlug(slug: $slug) {
      name
      shortDescription
      asset
    }
  }
`;function zt(e){const t={...jt,...e};return A(Kt,t)}const Yt={},Wt=y`
  query LanguagesQuery {
    Languages {
      id
      label
      code
      isCustom
      selectorLabel
    }
  }
`;function cn(e){const t={...Yt,...e};return A(Wt,t)}const Ht={},Jt=y`
  query Contents($ids: [ID!]!) {
    QueryContents(ids: $ids) {
      ...ContentFragment
    }
  }
  ${G}
`;function un(e){const t={...Ht,...e};return A(Jt,t)}const Xt={},Zt=y`
  query RssItems($feedUrl: String!) {
    RssItems(feedUrl: $feedUrl) {
      title
      link
    }
  }
`;function ln(e){const t={...Xt,...e};return A(Zt,t)}const en={},tn=y`
  query UserRecentContent($limit: Int) {
    UserRecentContent(limit: $limit) {
      ...ContentFragment
    }
  }
  ${G}
`;function dn(e){const t={...en,...e};return A(tn,t)}y`
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
`;y`
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
`;y`
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
`;y`
  query UserBookmarks {
    UserBookmarks {
      id
      name
      defaultFolder
      bookmarkCount
    }
  }
`;y`
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
`;y`
  query ContentGroups($query: String, $includeExpiredCertificates: Boolean) {
    UserContentGroups(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      kind
      count
    }
  }
`;y`
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
`;y`
  query UserCourseCompletionProgress($id: ID!) {
    UserCourseCompletionProgress(id: $id) {
      type
      required
      completed
      percent
    }
  }
`;y`
  query UserCourseProgress($id: ID!) {
    UserCourseProgress(id: $id) {
      totalViews
      totalTime
      percentComplete
    }
  }
`;y`
  query UserCourseAwardCounts($courseId: ID!) {
    UserCourseAwardCounts(courseId: $courseId) {
      id
      label
      icon
      count
    }
  }
`;y`
  query UserCourseCollaborations($courseId: ID!) {
    UserCourseCollaborations(courseId: $courseId)
  }
`;y`
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
`;const nn=e=>{const t=`${e.score}%`;return m.createElement("svg",{width:"90",height:"18",viewBox:"0 0 90 18"},m.createElement("symbol",{id:"bg-star"},m.createElement("path",{d:"M7.85879 1.51237C8.21879 0.407172 9.78239 0.407172 10.1412 1.51237L11.4252 5.46277C11.5036 5.70336 11.6561 5.91299 11.8609 6.0617C12.0656 6.21041 12.3121 6.29059 12.5652 6.29077H16.7196C17.8824 6.29077 18.3648 7.77877 17.4252 8.46277L14.0652 10.9036C13.86 11.0524 13.7073 11.2624 13.6288 11.5034C13.5503 11.7444 13.5502 12.0041 13.6284 12.2452L14.9124 16.1956C15.2724 17.3008 14.0064 18.2212 13.0644 17.5372L9.70439 15.0964C9.49944 14.9476 9.25266 14.8674 8.99939 14.8674C8.74612 14.8674 8.49935 14.9476 8.29439 15.0964L4.93439 17.5372C3.99359 18.2212 2.72879 17.3008 3.08759 16.1956L4.37159 12.2452C4.4498 12.0041 4.44966 11.7444 4.37119 11.5034C4.29272 11.2624 4.13996 11.0524 3.93479 10.9036L0.575993 8.46397C-0.363607 7.77997 0.119993 6.29197 1.28159 6.29197H5.43479C5.68805 6.29204 5.93484 6.21198 6.13982 6.06325C6.34481 5.91452 6.49748 5.70475 6.57599 5.46397L7.85999 1.51357L7.85879 1.51237Z",fill:"#D1D5DB"})),m.createElement("symbol",{id:"star"},m.createElement("path",{d:"M7.85879 1.51237C8.21879 0.407172 9.78239 0.407172 10.1412 1.51237L11.4252 5.46277C11.5036 5.70336 11.6561 5.91299 11.8609 6.0617C12.0656 6.21041 12.3121 6.29059 12.5652 6.29077H16.7196C17.8824 6.29077 18.3648 7.77877 17.4252 8.46277L14.0652 10.9036C13.86 11.0524 13.7073 11.2624 13.6288 11.5034C13.5503 11.7444 13.5502 12.0041 13.6284 12.2452L14.9124 16.1956C15.2724 17.3008 14.0064 18.2212 13.0644 17.5372L9.70439 15.0964C9.49944 14.9476 9.25266 14.8674 8.99939 14.8674C8.74612 14.8674 8.49935 14.9476 8.29439 15.0964L4.93439 17.5372C3.99359 18.2212 2.72879 17.3008 3.08759 16.1956L4.37159 12.2452C4.4498 12.0041 4.44966 11.7444 4.37119 11.5034C4.29272 11.2624 4.13996 11.0524 3.93479 10.9036L0.575993 8.46397C-0.363607 7.77997 0.119993 6.29197 1.28159 6.29197H5.43479C5.68805 6.29204 5.93484 6.21198 6.13982 6.06325C6.34481 5.91452 6.49748 5.70475 6.57599 5.46397L7.85999 1.51357L7.85879 1.51237Z",fill:"#FAAD4D"})),m.createElement("mask",{id:"bg-stars"},m.createElement("use",{href:"#bg-star",transform:"translate(0 0)"}),m.createElement("use",{href:"#bg-star",transform:"translate(18 0)"}),m.createElement("use",{href:"#bg-star",transform:"translate(36 0)"}),m.createElement("use",{href:"#bg-star",transform:"translate(54 0)"}),m.createElement("use",{href:"#bg-star",transform:"translate(72 0)"})),m.createElement("mask",{id:"stars"},m.createElement("use",{href:"#star",transform:"translate(0 0)"}),m.createElement("use",{href:"#star",transform:"translate(18 0)"}),m.createElement("use",{href:"#star",transform:"translate(36 0)"}),m.createElement("use",{href:"#star",transform:"translate(54 0)"}),m.createElement("use",{href:"#star",transform:"translate(72 0)"})),m.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#D1D5DB",mask:"url(#bg-stars)"}),m.createElement("rect",{x:"0",y:"0",width:t,height:"100%",fill:"#FAAD4D",mask:"url(#stars)"}))},_e=e=>{let t,n,s,r,i,o,c;function u(){const{data:d,error:p}=zt({variables:{slug:e.slug}});return p&&console.log(p),d&&d.LearningPathBySlug&&({name:o,shortDescription:c,asset:i}=d.LearningPathBySlug),{title:o,description:c,asset:i}}function h(){const{data:d,error:p}=Gt({variables:{slug:e.slug}});return p&&console.log(p),d&&d.CourseGroupBySlug&&({title:t,description:n,rating:s,ratingsCount:r,asset:i}=d.CourseGroupBySlug),{title:t,description:n,rating:s,ratingsCount:r,asset:i}}return e.contentKind==="learningPath"?{title:t,description:n,asset:i}=u():{title:t,description:n,rating:s,ratingsCount:r,asset:i}=h(),m.createElement("div",{className:"py-24 px-20"},m.createElement("div",{className:"px-1"},m.createElement("div",{className:"text-5xl font-bold pb-2 font-primary"},t),m.createElement("div",{className:"text-lg text-slate-400 pb-2.5 font-primary"},n),e.showStars&&e.contentKind!=="learningPath"&&m.createElement("div",{className:"flex pb-8"},m.createElement(m.Fragment,null,s&&m.createElement(m.Fragment,null,m.createElement(nn,{score:s}),m.createElement("div",{className:"font-bold px-1"},(s/20).toFixed(1))),`(${r} Reviews)`))),e.showImage&&i&&m.createElement("img",{src:i,className:"w-[600px]"}))};_e.displayName="ContentHeader";_e.__docgenInfo={description:"",methods:[],displayName:"ContentHeader",props:{contentKind:{required:!0,tsType:{name:"ContentKind"},description:"Content Kind for content header"},slug:{required:!0,tsType:{name:"string"},description:"Content Slug"},showStars:{required:!1,tsType:{name:"boolean"},description:"Boolean to show stars and rating information"},showImage:{required:!1,tsType:{name:"boolean"},description:"Boolean to show content image"}}};export{_e as C,S as D,Z as G,Kt as L,Zt as R,tn as U,Qt as a,qt as b,Jt as c,un as d,dn as e,A as f,y as g,ln as h,R as i,Ne as j,St as k,oe as l,Ot as m,Ie as n,an as o,cn as p,Mt as q,Wt as r,Se as t,on as u,xt as v};
