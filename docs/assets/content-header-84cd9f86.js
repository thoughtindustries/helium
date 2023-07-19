import{a as A,j as m,F as te}from"./jsx-runtime-b91f6123.js";import{a as k,_ as re}from"./tslib.es6-14bf6d9f.js";import{Y as Ye,Z as B,_ as Je,$ as Ht,a0 as Yt,a1 as Jt,a2 as Xt,K as c,a3 as R,a4 as Zt,N as Xe,h as E,a5 as er,k as ne,a6 as w,l as tr,n as z,c as rr,X as V,z as se,W as oe}from"./ApolloContext-43df6d1c.js";import{r as N,b as nr}from"./index-64f120e9.js";function sr(t){return typeof t=="object"&&t!==null}function or(t,e){if(!!!t)throw new Error(e??"Unexpected invariant triggered.")}const ir=/\r\n|[\n\r]/g;function W(t,e){let r=0,s=1;for(const n of t.body.matchAll(ir)){if(typeof n.index=="number"||or(!1),n.index>=e)break;r=n.index+n[0].length,s+=1}return{line:s,column:e+1-r}}function ar(t){return Ze(t.source,W(t.source,t.start))}function Ze(t,e){const r=t.locationOffset.column-1,s="".padStart(r)+t.body,n=e.line-1,o=t.locationOffset.line-1,a=e.line+o,l=e.line===1?r:0,u=e.column+l,d=`${t.name}:${a}:${u}
`,p=s.split(/\r\n|[\n\r]/g),y=p[n];if(y.length>120){const _=Math.floor(u/80),I=u%80,f=[];for(let x=0;x<y.length;x+=80)f.push(y.slice(x,x+80));return d+ie([[`${a} |`,f[0]],...f.slice(1,_+1).map(x=>["|",x]),["|","^".padStart(I)],["|",f[_+1]]])}return d+ie([[`${a-1} |`,p[n-1]],[`${a} |`,y],["|","^".padStart(u)],[`${a+1} |`,p[n+1]]])}function ie(t){const e=t.filter(([s,n])=>n!==void 0),r=Math.max(...e.map(([s])=>s.length));return e.map(([s,n])=>s.padStart(r)+(n?" "+n:"")).join(`
`)}function ur(t){const e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}class Z extends Error{constructor(e,...r){var s,n,o;const{nodes:a,source:l,positions:u,path:d,originalError:p,extensions:y}=ur(r);super(e),this.name="GraphQLError",this.path=d??void 0,this.originalError=p??void 0,this.nodes=ae(Array.isArray(a)?a:a?[a]:void 0);const _=ae((s=this.nodes)===null||s===void 0?void 0:s.map(f=>f.loc).filter(f=>f!=null));this.source=l??(_==null||(n=_[0])===null||n===void 0?void 0:n.source),this.positions=u??(_==null?void 0:_.map(f=>f.start)),this.locations=u&&l?u.map(f=>W(l,f)):_==null?void 0:_.map(f=>W(f.source,f.start));const I=sr(p==null?void 0:p.extensions)?p==null?void 0:p.extensions:void 0;this.extensions=(o=y??I)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),p!=null&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Z):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(e+=`

`+ar(r.loc));else if(this.source&&this.locations)for(const r of this.locations)e+=`

`+Ze(this.source,r);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function ae(t){return t===void 0||t.length===0?void 0:t}function b(t,e,r){return new Z(`Syntax Error: ${r}`,{source:t,positions:[e]})}var K;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(K||(K={}));var i;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(i||(i={}));class cr{constructor(e){const r=new Ye(i.SOF,0,0,0,0);this.source=e,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==i.EOF)do if(e.next)e=e.next;else{const r=pr(this,e.end);e.next=r,r.prev=e,e=r}while(e.kind===i.COMMENT);return e}}function lr(t){return t===i.BANG||t===i.DOLLAR||t===i.AMP||t===i.PAREN_L||t===i.PAREN_R||t===i.SPREAD||t===i.COLON||t===i.EQUALS||t===i.AT||t===i.BRACKET_L||t===i.BRACKET_R||t===i.BRACE_L||t===i.PIPE||t===i.BRACE_R}function Q(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function q(t,e){return et(t.charCodeAt(e))&&tt(t.charCodeAt(e+1))}function et(t){return t>=55296&&t<=56319}function tt(t){return t>=56320&&t<=57343}function L(t,e){const r=t.source.body.codePointAt(e);if(r===void 0)return i.EOF;if(r>=32&&r<=126){const s=String.fromCodePoint(r);return s==='"'?`'"'`:`"${s}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function g(t,e,r,s,n){const o=t.line,a=1+r-t.lineStart;return new Ye(e,r,s,o,a,n)}function pr(t,e){const r=t.source.body,s=r.length;let n=e;for(;n<s;){const o=r.charCodeAt(n);switch(o){case 65279:case 9:case 32:case 44:++n;continue;case 10:++n,++t.line,t.lineStart=n;continue;case 13:r.charCodeAt(n+1)===10?n+=2:++n,++t.line,t.lineStart=n;continue;case 35:return dr(t,n);case 33:return g(t,i.BANG,n,n+1);case 36:return g(t,i.DOLLAR,n,n+1);case 38:return g(t,i.AMP,n,n+1);case 40:return g(t,i.PAREN_L,n,n+1);case 41:return g(t,i.PAREN_R,n,n+1);case 46:if(r.charCodeAt(n+1)===46&&r.charCodeAt(n+2)===46)return g(t,i.SPREAD,n,n+3);break;case 58:return g(t,i.COLON,n,n+1);case 61:return g(t,i.EQUALS,n,n+1);case 64:return g(t,i.AT,n,n+1);case 91:return g(t,i.BRACKET_L,n,n+1);case 93:return g(t,i.BRACKET_R,n,n+1);case 123:return g(t,i.BRACE_L,n,n+1);case 124:return g(t,i.PIPE,n,n+1);case 125:return g(t,i.BRACE_R,n,n+1);case 34:return r.charCodeAt(n+1)===34&&r.charCodeAt(n+2)===34?gr(t,n):yr(t,n)}if(B(o)||o===45)return hr(t,n,o);if(Je(o))return Cr(t,n);throw b(t.source,n,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Q(o)||q(r,n)?`Unexpected character: ${L(t,n)}.`:`Invalid character: ${L(t,n)}.`)}return g(t,i.EOF,s,s)}function dr(t,e){const r=t.source.body,s=r.length;let n=e+1;for(;n<s;){const o=r.charCodeAt(n);if(o===10||o===13)break;if(Q(o))++n;else if(q(r,n))n+=2;else break}return g(t,i.COMMENT,e,n,r.slice(e+1,n))}function hr(t,e,r){const s=t.source.body;let n=e,o=r,a=!1;if(o===45&&(o=s.charCodeAt(++n)),o===48){if(o=s.charCodeAt(++n),B(o))throw b(t.source,n,`Invalid number, unexpected digit after 0: ${L(t,n)}.`)}else n=G(t,n,o),o=s.charCodeAt(n);if(o===46&&(a=!0,o=s.charCodeAt(++n),n=G(t,n,o),o=s.charCodeAt(n)),(o===69||o===101)&&(a=!0,o=s.charCodeAt(++n),(o===43||o===45)&&(o=s.charCodeAt(++n)),n=G(t,n,o),o=s.charCodeAt(n)),o===46||Je(o))throw b(t.source,n,`Invalid number, expected digit but got: ${L(t,n)}.`);return g(t,a?i.FLOAT:i.INT,e,n,s.slice(e,n))}function G(t,e,r){if(!B(r))throw b(t.source,e,`Invalid number, expected digit but got: ${L(t,e)}.`);const s=t.source.body;let n=e+1;for(;B(s.charCodeAt(n));)++n;return n}function yr(t,e){const r=t.source.body,s=r.length;let n=e+1,o=n,a="";for(;n<s;){const l=r.charCodeAt(n);if(l===34)return a+=r.slice(o,n),g(t,i.STRING,e,n+1,a);if(l===92){a+=r.slice(o,n);const u=r.charCodeAt(n+1)===117?r.charCodeAt(n+2)===123?fr(t,n):mr(t,n):_r(t,n);a+=u.value,n+=u.size,o=n;continue}if(l===10||l===13)break;if(Q(l))++n;else if(q(r,n))n+=2;else throw b(t.source,n,`Invalid character within String: ${L(t,n)}.`)}throw b(t.source,n,"Unterminated string.")}function fr(t,e){const r=t.source.body;let s=0,n=3;for(;n<12;){const o=r.charCodeAt(e+n++);if(o===125){if(n<5||!Q(s))break;return{value:String.fromCodePoint(s),size:n}}if(s=s<<4|U(o),s<0)break}throw b(t.source,e,`Invalid Unicode escape sequence: "${r.slice(e,e+n)}".`)}function mr(t,e){const r=t.source.body,s=ue(r,e+2);if(Q(s))return{value:String.fromCodePoint(s),size:6};if(et(s)&&r.charCodeAt(e+6)===92&&r.charCodeAt(e+7)===117){const n=ue(r,e+8);if(tt(n))return{value:String.fromCodePoint(s,n),size:12}}throw b(t.source,e,`Invalid Unicode escape sequence: "${r.slice(e,e+6)}".`)}function ue(t,e){return U(t.charCodeAt(e))<<12|U(t.charCodeAt(e+1))<<8|U(t.charCodeAt(e+2))<<4|U(t.charCodeAt(e+3))}function U(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function _r(t,e){const r=t.source.body;switch(r.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw b(t.source,e,`Invalid character escape sequence: "${r.slice(e,e+2)}".`)}function gr(t,e){const r=t.source.body,s=r.length;let n=t.lineStart,o=e+3,a=o,l="";const u=[];for(;o<s;){const d=r.charCodeAt(o);if(d===34&&r.charCodeAt(o+1)===34&&r.charCodeAt(o+2)===34){l+=r.slice(a,o),u.push(l);const p=g(t,i.BLOCK_STRING,e,o+3,Ht(u).join(`
`));return t.line+=u.length-1,t.lineStart=n,p}if(d===92&&r.charCodeAt(o+1)===34&&r.charCodeAt(o+2)===34&&r.charCodeAt(o+3)===34){l+=r.slice(a,o),a=o+1,o+=4;continue}if(d===10||d===13){l+=r.slice(a,o),u.push(l),d===13&&r.charCodeAt(o+1)===10?o+=2:++o,l="",a=o,n=o;continue}if(Q(d))++o;else if(q(r,o))o+=2;else throw b(t.source,o,`Invalid character within String: ${L(t,o)}.`)}throw b(t.source,o,"Unterminated string.")}function Cr(t,e){const r=t.source.body,s=r.length;let n=e+1;for(;n<s;){const o=r.charCodeAt(n);if(Yt(o))++n;else break}return g(t,i.NAME,e,n,r.slice(e,n))}function vr(t,e){return new br(t,e).parseDocument()}class br{constructor(e,r={}){const s=Jt(e)?e:new Xt(e);this._lexer=new cr(s),this._options=r,this._tokenCounter=0}parseName(){const e=this.expectToken(i.NAME);return this.node(e,{kind:c.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:c.DOCUMENT,definitions:this.many(i.SOF,this.parseDefinition,i.EOF)})}parseDefinition(){if(this.peek(i.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),r=e?this._lexer.lookahead():this._lexer.token;if(r.kind===i.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw b(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(i.BRACE_L))return this.node(e,{kind:c.OPERATION_DEFINITION,operation:R.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let s;return this.peek(i.NAME)&&(s=this.parseName()),this.node(e,{kind:c.OPERATION_DEFINITION,operation:r,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(i.NAME);switch(e.value){case"query":return R.QUERY;case"mutation":return R.MUTATION;case"subscription":return R.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(i.PAREN_L,this.parseVariableDefinition,i.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:c.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(i.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(i.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(i.DOLLAR),this.node(e,{kind:c.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:c.SELECTION_SET,selections:this.many(i.BRACE_L,this.parseSelection,i.BRACE_R)})}parseSelection(){return this.peek(i.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,r=this.parseName();let s,n;return this.expectOptionalToken(i.COLON)?(s=r,n=this.parseName()):n=r,this.node(e,{kind:c.FIELD,alias:s,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(i.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const r=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(i.PAREN_L,r,i.PAREN_R)}parseArgument(e=!1){const r=this._lexer.token,s=this.parseName();return this.expectToken(i.COLON),this.node(r,{kind:c.ARGUMENT,name:s,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(i.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(i.NAME)?this.node(e,{kind:c.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:c.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:c.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:c.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const r=this._lexer.token;switch(r.kind){case i.BRACKET_L:return this.parseList(e);case i.BRACE_L:return this.parseObject(e);case i.INT:return this.advanceLexer(),this.node(r,{kind:c.INT,value:r.value});case i.FLOAT:return this.advanceLexer(),this.node(r,{kind:c.FLOAT,value:r.value});case i.STRING:case i.BLOCK_STRING:return this.parseStringLiteral();case i.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:c.BOOLEAN,value:!0});case"false":return this.node(r,{kind:c.BOOLEAN,value:!1});case"null":return this.node(r,{kind:c.NULL});default:return this.node(r,{kind:c.ENUM,value:r.value})}case i.DOLLAR:if(e)if(this.expectToken(i.DOLLAR),this._lexer.token.kind===i.NAME){const s=this._lexer.token.value;throw b(this._lexer.source,r.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:c.STRING,value:e.value,block:e.kind===i.BLOCK_STRING})}parseList(e){const r=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:c.LIST,values:this.any(i.BRACKET_L,r,i.BRACKET_R)})}parseObject(e){const r=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:c.OBJECT,fields:this.any(i.BRACE_L,r,i.BRACE_R)})}parseObjectField(e){const r=this._lexer.token,s=this.parseName();return this.expectToken(i.COLON),this.node(r,{kind:c.OBJECT_FIELD,name:s,value:this.parseValueLiteral(e)})}parseDirectives(e){const r=[];for(;this.peek(i.AT);)r.push(this.parseDirective(e));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const r=this._lexer.token;return this.expectToken(i.AT),this.node(r,{kind:c.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let r;if(this.expectOptionalToken(i.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(i.BRACKET_R),r=this.node(e,{kind:c.LIST_TYPE,type:s})}else r=this.parseNamedType();return this.expectOptionalToken(i.BANG)?this.node(e,{kind:c.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:c.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(i.STRING)||this.peek(i.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),n=this.many(i.BRACE_L,this.parseOperationTypeDefinition,i.BRACE_R);return this.node(e,{kind:c.SCHEMA_DEFINITION,description:r,directives:s,operationTypes:n})}parseOperationTypeDefinition(){const e=this._lexer.token,r=this.parseOperationType();this.expectToken(i.COLON);const s=this.parseNamedType();return this.node(e,{kind:c.OPERATION_TYPE_DEFINITION,operation:r,type:s})}parseScalarTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),n=this.parseConstDirectives();return this.node(e,{kind:c.SCALAR_TYPE_DEFINITION,description:r,name:s,directives:n})}parseObjectTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),n=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(e,{kind:c.OBJECT_TYPE_DEFINITION,description:r,name:s,interfaces:n,directives:o,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(i.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(i.BRACE_L,this.parseFieldDefinition,i.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,r=this.parseDescription(),s=this.parseName(),n=this.parseArgumentDefs();this.expectToken(i.COLON);const o=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(e,{kind:c.FIELD_DEFINITION,description:r,name:s,arguments:n,type:o,directives:a})}parseArgumentDefs(){return this.optionalMany(i.PAREN_L,this.parseInputValueDef,i.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,r=this.parseDescription(),s=this.parseName();this.expectToken(i.COLON);const n=this.parseTypeReference();let o;this.expectOptionalToken(i.EQUALS)&&(o=this.parseConstValueLiteral());const a=this.parseConstDirectives();return this.node(e,{kind:c.INPUT_VALUE_DEFINITION,description:r,name:s,type:n,defaultValue:o,directives:a})}parseInterfaceTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),n=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(e,{kind:c.INTERFACE_TYPE_DEFINITION,description:r,name:s,interfaces:n,directives:o,fields:a})}parseUnionTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),n=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(e,{kind:c.UNION_TYPE_DEFINITION,description:r,name:s,directives:n,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(i.EQUALS)?this.delimitedMany(i.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),n=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(e,{kind:c.ENUM_TYPE_DEFINITION,description:r,name:s,directives:n,values:o})}parseEnumValuesDefinition(){return this.optionalMany(i.BRACE_L,this.parseEnumValueDefinition,i.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,r=this.parseDescription(),s=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(e,{kind:c.ENUM_VALUE_DEFINITION,description:r,name:s,directives:n})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw b(this._lexer.source,this._lexer.token.start,`${P(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),n=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(e,{kind:c.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:s,directives:n,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(i.BRACE_L,this.parseInputValueDef,i.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===i.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),s=this.optionalMany(i.BRACE_L,this.parseOperationTypeDefinition,i.BRACE_R);if(r.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:c.SCHEMA_EXTENSION,directives:r,operationTypes:s})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(e,{kind:c.SCALAR_TYPE_EXTENSION,name:r,directives:s})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),s=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(s.length===0&&n.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:c.OBJECT_TYPE_EXTENSION,name:r,interfaces:s,directives:n,fields:o})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),s=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(s.length===0&&n.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:c.INTERFACE_TYPE_EXTENSION,name:r,interfaces:s,directives:n,fields:o})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:c.UNION_TYPE_EXTENSION,name:r,directives:s,types:n})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:c.ENUM_TYPE_EXTENSION,name:r,directives:s,values:n})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(e,{kind:c.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:s,fields:n})}parseDirectiveDefinition(){const e=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(i.AT);const s=this.parseName(),n=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const a=this.parseDirectiveLocations();return this.node(e,{kind:c.DIRECTIVE_DEFINITION,description:r,name:s,arguments:n,repeatable:o,locations:a})}parseDirectiveLocations(){return this.delimitedMany(i.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(K,r.value))return r;throw this.unexpected(e)}node(e,r){return this._options.noLocation!==!0&&(r.loc=new Zt(e,this._lexer.lastToken,this._lexer.source)),r}peek(e){return this._lexer.token.kind===e}expectToken(e){const r=this._lexer.token;if(r.kind===e)return this.advanceLexer(),r;throw b(this._lexer.source,r.start,`Expected ${rt(e)}, found ${P(r)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const r=this._lexer.token;if(r.kind===i.NAME&&r.value===e)this.advanceLexer();else throw b(this._lexer.source,r.start,`Expected "${e}", found ${P(r)}.`)}expectOptionalKeyword(e){const r=this._lexer.token;return r.kind===i.NAME&&r.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const r=e??this._lexer.token;return b(this._lexer.source,r.start,`Unexpected ${P(r)}.`)}any(e,r,s){this.expectToken(e);const n=[];for(;!this.expectOptionalToken(s);)n.push(r.call(this));return n}optionalMany(e,r,s){if(this.expectOptionalToken(e)){const n=[];do n.push(r.call(this));while(!this.expectOptionalToken(s));return n}return[]}many(e,r,s){this.expectToken(e);const n=[];do n.push(r.call(this));while(!this.expectOptionalToken(s));return n}delimitedMany(e,r){this.expectOptionalToken(e);const s=[];do s.push(r.call(this));while(this.expectOptionalToken(e));return s}advanceLexer(){const{maxTokens:e}=this._options,r=this._lexer.advance();if(e!==void 0&&r.kind!==i.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw b(this._lexer.source,r.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function P(t){const e=t.value;return rt(t.kind)+(e!=null?` "${e}"`:"")}function rt(t){return lr(t)?`"${t}"`:t}var F=new Map,H=new Map,nt=!0,$=!1;function st(t){return t.replace(/[\s,]+/g," ").trim()}function Er(t){return st(t.source.body.substring(t.start,t.end))}function Nr(t){var e=new Set,r=[];return t.definitions.forEach(function(s){if(s.kind==="FragmentDefinition"){var n=s.name.value,o=Er(s.loc),a=H.get(n);a&&!a.has(o)?nt&&console.warn("Warning: fragment with name "+n+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):a||H.set(n,a=new Set),a.add(o),e.has(o)||(e.add(o),r.push(s))}else r.push(s)}),k(k({},t),{definitions:r})}function kr(t){var e=new Set(t.definitions);e.forEach(function(s){s.loc&&delete s.loc,Object.keys(s).forEach(function(n){var o=s[n];o&&typeof o=="object"&&e.add(o)})});var r=t.loc;return r&&(delete r.startToken,delete r.endToken),t}function Ir(t){var e=st(t);if(!F.has(e)){var r=vr(t,{experimentalFragmentVariables:$,allowLegacyFragmentVariables:$});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");F.set(e,kr(Nr(r)))}return F.get(e)}function h(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];typeof t=="string"&&(t=[t]);var s=t[0];return e.forEach(function(n,o){n&&n.kind==="Document"?s+=n.loc.source.body:s+=n,s+=t[o+1]}),Ir(s)}function xr(){F.clear(),H.clear()}function Tr(){nt=!1}function Ar(){$=!0}function Lr(){$=!1}var D={gql:h,resetCaches:xr,disableFragmentWarnings:Tr,enableExperimentalFragmentVariables:Ar,disableExperimentalFragmentVariables:Lr};(function(t){t.gql=D.gql,t.resetCaches=D.resetCaches,t.disableFragmentWarnings=D.disableFragmentWarnings,t.enableExperimentalFragmentVariables=D.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=D.disableExperimentalFragmentVariables})(h||(h={}));h.default=h;function ot(t){var e=N.useContext(Xe()),r=t||e.client;return __DEV__?E(!!r,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):E(!!r,32),r}var ce=!1,Or="useSyncExternalStore",Qr=nr[Or],Dr=Qr||function(t,e,r){var s=e();__DEV__&&!ce&&s!==e()&&(ce=!0,__DEV__&&E.error("The result of getSnapshot should be cached to avoid an infinite loop"));var n=N.useState({inst:{value:s,getSnapshot:e}}),o=n[0].inst,a=n[1];return er?N.useLayoutEffect(function(){Object.assign(o,{value:s,getSnapshot:e}),j(o)&&a({inst:o})},[t,s,e]):Object.assign(o,{value:s,getSnapshot:e}),N.useEffect(function(){return j(o)&&a({inst:o}),t(function(){j(o)&&a({inst:o})})},[t]),s};function j(t){var e=t.value,r=t.getSnapshot;try{return e!==r()}catch{return!0}}var T;(function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"})(T||(T={}));var le=new Map;function pe(t){var e;switch(t){case T.Query:e="Query";break;case T.Mutation:e="Mutation";break;case T.Subscription:e="Subscription";break}return e}function Ur(t){var e=le.get(t);if(e)return e;var r,s,n;__DEV__?E(!!t&&!!t.kind,"Argument of ".concat(t," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):E(!!t&&!!t.kind,33);for(var o=[],a=[],l=[],u=[],d=0,p=t.definitions;d<p.length;d++){var y=p[d];if(y.kind==="FragmentDefinition"){o.push(y);continue}if(y.kind==="OperationDefinition")switch(y.operation){case"query":a.push(y);break;case"mutation":l.push(y);break;case"subscription":u.push(y);break}}__DEV__?E(!o.length||a.length||l.length||u.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):E(!o.length||a.length||l.length||u.length,34),__DEV__?E(a.length+l.length+u.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(t," had ").concat(a.length," queries, ").concat(u.length," ")+"subscriptions and ".concat(l.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):E(a.length+l.length+u.length<=1,35),s=a.length?T.Query:T.Mutation,!a.length&&!l.length&&(s=T.Subscription);var _=a.length?a:l.length?l:u;__DEV__?E(_.length===1,"react-apollo only supports one definition per HOC. ".concat(t," had ")+"".concat(_.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):E(_.length===1,36);var I=_[0];r=I.variableDefinitions||[],I.name&&I.name.kind==="Name"?n=I.name.value:n="data";var f={name:n,type:s,variables:r};return le.set(t,f),f}function Sr(t,e){var r=Ur(t),s=pe(e),n=pe(r.type);__DEV__?E(r.type===e,"Running a ".concat(s," requires a graphql ")+"".concat(s,", but a ").concat(n," was used instead.")):E(r.type===e,37)}var Rr=Object.prototype.hasOwnProperty;function C(t,e){return e===void 0&&(e=Object.create(null)),it(ot(e.client),t).useQuery(e)}function it(t,e){var r=N.useRef();(!r.current||t!==r.current.client||e!==r.current.query)&&(r.current=new wr(t,e,r.current));var s=r.current,n=N.useState(0);n[0];var o=n[1];return s.forceUpdate=function(){o(function(a){return a+1})},s}var wr=function(){function t(e,r,s){this.client=e,this.query=r,this.ssrDisabledResult=ne({loading:!0,data:void 0,error:void 0,networkStatus:w.loading}),this.skipStandbyResult=ne({loading:!1,data:void 0,error:void 0,networkStatus:w.ready}),this.toQueryResultCache=new(tr?WeakMap:Map),Sr(r,T.Query);var n=s&&s.result,o=n&&n.data;o&&(this.previousData=o)}return t.prototype.forceUpdate=function(){__DEV__&&E.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.executeQuery=function(e){var r=this,s;e.query&&Object.assign(this,{query:e.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=e);var n=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=((s=this.result)===null||s===void 0?void 0:s.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(o){var a;n.subscribe({next:function(l){a=l},error:function(){o(r.toQueryResult(r.observable.getCurrentResult()))},complete:function(){o(r.toQueryResult(a))}})})},t.prototype.useQuery=function(e){var r=this;this.renderPromises=N.useContext(Xe()).renderPromises,this.useOptions(e);var s=this.useObservableQuery(),n=Dr(N.useCallback(function(){if(r.renderPromises)return function(){};var o=function(){var u=r.result,d=s.getCurrentResult();u&&u.loading===d.loading&&u.networkStatus===d.networkStatus&&z(u.data,d.data)||r.setResult(d)},a=function(u){var d=s.last;l.unsubscribe();try{s.resetLastResults(),l=s.subscribe(o,a)}finally{s.last=d}if(!Rr.call(u,"graphQLErrors"))throw u;var p=r.result;(!p||p&&p.loading||!z(u,p.error))&&r.setResult({data:p&&p.data,error:u,loading:!1,networkStatus:w.error})},l=s.subscribe(o,a);return function(){return setTimeout(function(){return l.unsubscribe()})}},[s,this.renderPromises,this.client.disableNetworkFetches]),function(){return r.getCurrentResult()},function(){return r.getCurrentResult()});return this.unsafeHandlePartialRefetch(n),this.toQueryResult(n)},t.prototype.useOptions=function(e){var r,s=this.createWatchQueryOptions(this.queryHookOptions=e),n=this.watchQueryOptions;z(s,n)||(this.watchQueryOptions=s,n&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=((r=this.result)===null||r===void 0?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&this.queryHookOptions.ssr===!1&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||this.watchQueryOptions.fetchPolicy==="standby"?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},t.prototype.getObsQueryOptions=function(){var e=[],r=this.client.defaultOptions.watchQuery;return r&&e.push(r),this.queryHookOptions.defaultOptions&&e.push(this.queryHookOptions.defaultOptions),e.push(rr(this.observable&&this.observable.options,this.watchQueryOptions)),e.reduce(V)},t.prototype.createWatchQueryOptions=function(e){var r;e===void 0&&(e={});var s=e.skip;e.ssr,e.onCompleted,e.onError,e.defaultOptions;var n=re(e,["skip","ssr","onCompleted","onError","defaultOptions"]),o=Object.assign(n,{query:this.query});if(this.renderPromises&&(o.fetchPolicy==="network-only"||o.fetchPolicy==="cache-and-network")&&(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),s){var a=o.fetchPolicy,l=a===void 0?this.getDefaultFetchPolicy():a,u=o.initialFetchPolicy,d=u===void 0?l:u;Object.assign(o,{initialFetchPolicy:d,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=((r=this.observable)===null||r===void 0?void 0:r.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},t.prototype.getDefaultFetchPolicy=function(){var e,r;return((e=this.queryHookOptions.defaultOptions)===null||e===void 0?void 0:e.fetchPolicy)||((r=this.client.defaultOptions.watchQuery)===null||r===void 0?void 0:r.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(e){},t.prototype.onError=function(e){},t.prototype.useObservableQuery=function(){var e=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=N.useMemo(function(){return{refetch:e.refetch.bind(e),reobserve:e.reobserve.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}},[e]);var r=!(this.queryHookOptions.ssr===!1||this.queryHookOptions.skip);return this.renderPromises&&r&&(this.renderPromises.registerSSRObservable(e),e.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(e)),e},t.prototype.setResult=function(e){var r=this.result;r&&r.data&&(this.previousData=r.data),this.result=e,this.forceUpdate(),this.handleErrorOrCompleted(e)},t.prototype.handleErrorOrCompleted=function(e){var r=this;if(!e.loading){var s=this.toApolloError(e);Promise.resolve().then(function(){s?r.onError(s):e.data&&r.onCompleted(e.data)}).catch(function(n){__DEV__&&E.warn(n)})}},t.prototype.toApolloError=function(e){return se(e.errors)?new oe({graphQLErrors:e.errors}):e.error},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(e){var r=this.toQueryResultCache.get(e);if(r)return r;var s=e.data;e.partial;var n=re(e,["data","partial"]);return this.toQueryResultCache.set(e,r=k(k(k({data:s},n),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!r.error&&se(e.errors)&&(r.error=new oe({graphQLErrors:e.errors})),r},t.prototype.unsafeHandlePartialRefetch=function(e){e.partial&&this.queryHookOptions.partialRefetch&&!e.loading&&(!e.data||Object.keys(e.data).length===0)&&this.observable.options.fetchPolicy!=="cache-only"&&(Object.assign(e,{loading:!0,networkStatus:w.refetch}),this.observable.refetch())},t}(),Pr=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function v(t,e){var r,s=N.useRef(),n=N.useRef(),o=N.useRef(),a=s.current?V(e,s.current):e,l=(r=a==null?void 0:a.query)!==null&&r!==void 0?r:t;n.current=a,o.current=l;var u=it(ot(e&&e.client),l),d=u.useQuery(k(k({},a),{skip:!s.current})),p=d.observable.options.initialFetchPolicy||u.getDefaultFetchPolicy(),y=Object.assign(d,{called:!!s.current}),_=N.useMemo(function(){for(var f={},x=function(ee){var Kt=y[ee];f[ee]=function(){return s.current||(s.current=Object.create(null),u.forceUpdate()),Kt.apply(this,arguments)}},O=0,S=Pr;O<S.length;O++){var Wt=S[O];x(Wt)}return f},[]);Object.assign(y,_);var I=N.useCallback(function(f){s.current=f?k(k({},f),{fetchPolicy:f.fetchPolicy||p}):{fetchPolicy:p};var x=V(n.current,k({query:o.current},s.current)),O=u.executeQuery(k(k({},x),{skip:!1})).then(function(S){return Object.assign(S,_)});return O.catch(function(){}),O},[]);return[I,y]}const M=h`
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
`,Fr=h`
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
`,Br=h`
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
`,at={},ut=h`
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
  ${M}
  ${Fr}
  ${Br}
`;function de(t){const e={...at,...t};return C(ut,e)}function he(t){const e={...at,...t};return v(ut,e)}try{de.displayName="useCatalogContentQuery",de.__docgenInfo={description:"__useCatalogContentQuery__\n\nTo run a query within a React component, call `useCatalogContentQuery` and pass it any options that fit your needs.\nWhen your component renders, `useCatalogContentQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useCatalogContentQuery",props:{}}}catch{}try{he.displayName="useCatalogContentLazyQuery",he.__docgenInfo={description:"",displayName:"useCatalogContentLazyQuery",props:{}}}catch{}const ct={},lt=h`
  query Catalog($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...ContentFragment
      }
    }
  }
  ${M}
`;function ye(t){const e={...ct,...t};return C(lt,e)}function fe(t){const e={...ct,...t};return v(lt,e)}try{ye.displayName="useCatalogQuery",ye.__docgenInfo={description:"__useCatalogQuery__\n\nTo run a query within a React component, call `useCatalogQuery` and pass it any options that fit your needs.\nWhen your component renders, `useCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useCatalogQuery",props:{}}}catch{}try{fe.displayName="useCatalogLazyQuery",fe.__docgenInfo={description:"",displayName:"useCatalogLazyQuery",props:{}}}catch{}const pt={},dt=h`
  query CourseGroupBySlug($slug: Slug!) {
    CourseGroupBySlug(slug: $slug) {
      asset
      description
      title
      rating
      ratingsCount
    }
  }
`;function Y(t){const e={...pt,...t};return C(dt,e)}function me(t){const e={...pt,...t};return v(dt,e)}try{Y.displayName="useCourseGroupBySlugQuery",Y.__docgenInfo={description:"__useCourseGroupBySlugQuery__\n\nTo run a query within a React component, call `useCourseGroupBySlugQuery` and pass it any options that fit your needs.\nWhen your component renders, `useCourseGroupBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useCourseGroupBySlugQuery",props:{}}}catch{}try{me.displayName="useCourseGroupBySlugLazyQuery",me.__docgenInfo={description:"",displayName:"useCourseGroupBySlugLazyQuery",props:{}}}catch{}const ht={},yt=h`
  query LearningPathBySlug($slug: Slug!) {
    LearningPathBySlug(slug: $slug) {
      name
      shortDescription
      asset
    }
  }
`;function J(t){const e={...ht,...t};return C(yt,e)}function _e(t){const e={...ht,...t};return v(yt,e)}try{J.displayName="useLearningPathBySlugQuery",J.__docgenInfo={description:"__useLearningPathBySlugQuery__\n\nTo run a query within a React component, call `useLearningPathBySlugQuery` and pass it any options that fit your needs.\nWhen your component renders, `useLearningPathBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useLearningPathBySlugQuery",props:{}}}catch{}try{_e.displayName="useLearningPathBySlugLazyQuery",_e.__docgenInfo={description:"",displayName:"useLearningPathBySlugLazyQuery",props:{}}}catch{}const ft={},mt=h`
  query LanguagesQuery {
    Languages {
      id
      label
      code
      isCustom
      selectorLabel
    }
  }
`;function ge(t){const e={...ft,...t};return C(mt,e)}function Ce(t){const e={...ft,...t};return v(mt,e)}try{ge.displayName="useLanguagesQueryQuery",ge.__docgenInfo={description:"__useLanguagesQueryQuery__\n\nTo run a query within a React component, call `useLanguagesQueryQuery` and pass it any options that fit your needs.\nWhen your component renders, `useLanguagesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useLanguagesQueryQuery",props:{}}}catch{}try{Ce.displayName="useLanguagesQueryLazyQuery",Ce.__docgenInfo={description:"",displayName:"useLanguagesQueryLazyQuery",props:{}}}catch{}const _t={},gt=h`
  query Contents($ids: [ID!]!) {
    QueryContents(ids: $ids) {
      ...ContentFragment
    }
  }
  ${M}
`;function ve(t){const e={..._t,...t};return C(gt,e)}function be(t){const e={..._t,...t};return v(gt,e)}try{ve.displayName="useContentsQuery",ve.__docgenInfo={description:"__useContentsQuery__\n\nTo run a query within a React component, call `useContentsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useContentsQuery",props:{}}}catch{}try{be.displayName="useContentsLazyQuery",be.__docgenInfo={description:"",displayName:"useContentsLazyQuery",props:{}}}catch{}const Ct={},vt=h`
  query RssItems($feedUrl: String!) {
    RssItems(feedUrl: $feedUrl) {
      title
      link
    }
  }
`;function Ee(t){const e={...Ct,...t};return C(vt,e)}function Ne(t){const e={...Ct,...t};return v(vt,e)}try{Ee.displayName="useRssItemsQuery",Ee.__docgenInfo={description:"__useRssItemsQuery__\n\nTo run a query within a React component, call `useRssItemsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useRssItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useRssItemsQuery",props:{}}}catch{}try{Ne.displayName="useRssItemsLazyQuery",Ne.__docgenInfo={description:"",displayName:"useRssItemsLazyQuery",props:{}}}catch{}const bt={},Et=h`
  query UserRecentContent($limit: Int) {
    UserRecentContent(limit: $limit) {
      ...ContentFragment
    }
  }
  ${M}
`;function ke(t){const e={...bt,...t};return C(Et,e)}function Ie(t){const e={...bt,...t};return v(Et,e)}try{ke.displayName="useUserRecentContentQuery",ke.__docgenInfo={description:"__useUserRecentContentQuery__\n\nTo run a query within a React component, call `useUserRecentContentQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserRecentContentQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserRecentContentQuery",props:{}}}catch{}try{Ie.displayName="useUserRecentContentLazyQuery",Ie.__docgenInfo={description:"",displayName:"useUserRecentContentLazyQuery",props:{}}}catch{}const Nt={},kt=h`
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
`;function xe(t){const e={...Nt,...t};return C(kt,e)}function Te(t){const e={...Nt,...t};return v(kt,e)}try{xe.displayName="useUserContentItemsQuery",xe.__docgenInfo={description:"__useUserContentItemsQuery__\n\nTo run a query within a React component, call `useUserContentItemsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserContentItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserContentItemsQuery",props:{}}}catch{}try{Te.displayName="useUserContentItemsLazyQuery",Te.__docgenInfo={description:"",displayName:"useUserContentItemsLazyQuery",props:{}}}catch{}const It={},xt=h`
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
`;function Ae(t){const e={...It,...t};return C(xt,e)}function Le(t){const e={...It,...t};return v(xt,e)}try{Ae.displayName="useUserArchivesQuery",Ae.__docgenInfo={description:"__useUserArchivesQuery__\n\nTo run a query within a React component, call `useUserArchivesQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserArchivesQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserArchivesQuery",props:{}}}catch{}try{Le.displayName="useUserArchivesLazyQuery",Le.__docgenInfo={description:"",displayName:"useUserArchivesLazyQuery",props:{}}}catch{}const Tt={},At=h`
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
`;function Oe(t){const e={...Tt,...t};return C(At,e)}function Qe(t){const e={...Tt,...t};return v(At,e)}try{Oe.displayName="useUserWaitlistQuery",Oe.__docgenInfo={description:"__useUserWaitlistQuery__\n\nTo run a query within a React component, call `useUserWaitlistQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserWaitlistQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserWaitlistQuery",props:{}}}catch{}try{Qe.displayName="useUserWaitlistLazyQuery",Qe.__docgenInfo={description:"",displayName:"useUserWaitlistLazyQuery",props:{}}}catch{}const Lt={},Ot=h`
  query UserBookmarks {
    UserBookmarks {
      id
      name
      defaultFolder
      bookmarkCount
    }
  }
`;function De(t){const e={...Lt,...t};return C(Ot,e)}function Ue(t){const e={...Lt,...t};return v(Ot,e)}try{De.displayName="useUserBookmarksQuery",De.__docgenInfo={description:"__useUserBookmarksQuery__\n\nTo run a query within a React component, call `useUserBookmarksQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserBookmarksQuery",props:{}}}catch{}try{Ue.displayName="useUserBookmarksLazyQuery",Ue.__docgenInfo={description:"",displayName:"useUserBookmarksLazyQuery",props:{}}}catch{}const Qt={},Dt=h`
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
`;function Se(t){const e={...Qt,...t};return C(Dt,e)}function Re(t){const e={...Qt,...t};return v(Dt,e)}try{Se.displayName="useUserCertificatesQuery",Se.__docgenInfo={description:"__useUserCertificatesQuery__\n\nTo run a query within a React component, call `useUserCertificatesQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCertificatesQuery",props:{}}}catch{}try{Re.displayName="useUserCertificatesLazyQuery",Re.__docgenInfo={description:"",displayName:"useUserCertificatesLazyQuery",props:{}}}catch{}const Ut={},St=h`
  query ContentGroups($query: String, $includeExpiredCertificates: Boolean) {
    UserContentGroups(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      kind
      count
    }
  }
`;function we(t){const e={...Ut,...t};return C(St,e)}function Pe(t){const e={...Ut,...t};return v(St,e)}try{we.displayName="useContentGroupsQuery",we.__docgenInfo={description:"__useContentGroupsQuery__\n\nTo run a query within a React component, call `useContentGroupsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useContentGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useContentGroupsQuery",props:{}}}catch{}try{Pe.displayName="useContentGroupsLazyQuery",Pe.__docgenInfo={description:"",displayName:"useContentGroupsLazyQuery",props:{}}}catch{}const Rt={},wt=h`
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
`;function Fe(t){const e={...Rt,...t};return C(wt,e)}function Be(t){const e={...Rt,...t};return v(wt,e)}try{Fe.displayName="useUserBookmarksByFolderQuery",Fe.__docgenInfo={description:"__useUserBookmarksByFolderQuery__\n\nTo run a query within a React component, call `useUserBookmarksByFolderQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserBookmarksByFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserBookmarksByFolderQuery",props:{}}}catch{}try{Be.displayName="useUserBookmarksByFolderLazyQuery",Be.__docgenInfo={description:"",displayName:"useUserBookmarksByFolderLazyQuery",props:{}}}catch{}const Pt={},Ft=h`
  query UserCourseCompletionProgress($id: ID!) {
    UserCourseCompletionProgress(id: $id) {
      type
      required
      completed
      percent
    }
  }
`;function $e(t){const e={...Pt,...t};return C(Ft,e)}function qe(t){const e={...Pt,...t};return v(Ft,e)}try{$e.displayName="useUserCourseCompletionProgressQuery",$e.__docgenInfo={description:"__useUserCourseCompletionProgressQuery__\n\nTo run a query within a React component, call `useUserCourseCompletionProgressQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseCompletionProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseCompletionProgressQuery",props:{}}}catch{}try{qe.displayName="useUserCourseCompletionProgressLazyQuery",qe.__docgenInfo={description:"",displayName:"useUserCourseCompletionProgressLazyQuery",props:{}}}catch{}const Bt={},$t=h`
  query UserCourseProgress($id: ID!) {
    UserCourseProgress(id: $id) {
      totalViews
      totalTime
      percentComplete
    }
  }
`;function Me(t){const e={...Bt,...t};return C($t,e)}function ze(t){const e={...Bt,...t};return v($t,e)}try{Me.displayName="useUserCourseProgressQuery",Me.__docgenInfo={description:"__useUserCourseProgressQuery__\n\nTo run a query within a React component, call `useUserCourseProgressQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseProgressQuery",props:{}}}catch{}try{ze.displayName="useUserCourseProgressLazyQuery",ze.__docgenInfo={description:"",displayName:"useUserCourseProgressLazyQuery",props:{}}}catch{}const qt={},Mt=h`
  query UserCourseAwardCounts($courseId: ID!) {
    UserCourseAwardCounts(courseId: $courseId) {
      id
      label
      icon
      count
    }
  }
`;function Ge(t){const e={...qt,...t};return C(Mt,e)}function je(t){const e={...qt,...t};return v(Mt,e)}try{Ge.displayName="useUserCourseAwardCountsQuery",Ge.__docgenInfo={description:"__useUserCourseAwardCountsQuery__\n\nTo run a query within a React component, call `useUserCourseAwardCountsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseAwardCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseAwardCountsQuery",props:{}}}catch{}try{je.displayName="useUserCourseAwardCountsLazyQuery",je.__docgenInfo={description:"",displayName:"useUserCourseAwardCountsLazyQuery",props:{}}}catch{}const zt={},Gt=h`
  query UserCourseCollaborations($courseId: ID!) {
    UserCourseCollaborations(courseId: $courseId)
  }
`;function Ve(t){const e={...zt,...t};return C(Gt,e)}function We(t){const e={...zt,...t};return v(Gt,e)}try{Ve.displayName="useUserCourseCollaborationsQuery",Ve.__docgenInfo={description:"__useUserCourseCollaborationsQuery__\n\nTo run a query within a React component, call `useUserCourseCollaborationsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseCollaborationsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseCollaborationsQuery",props:{}}}catch{}try{We.displayName="useUserCourseCollaborationsLazyQuery",We.__docgenInfo={description:"",displayName:"useUserCourseCollaborationsLazyQuery",props:{}}}catch{}const jt={},Vt=h`
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
`;function Ke(t){const e={...jt,...t};return C(Vt,e)}function He(t){const e={...jt,...t};return v(Vt,e)}try{Ke.displayName="useUserCertificateFieldsQuery",Ke.__docgenInfo={description:"__useUserCertificateFieldsQuery__\n\nTo run a query within a React component, call `useUserCertificateFieldsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCertificateFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCertificateFieldsQuery",props:{}}}catch{}try{He.displayName="useUserCertificateFieldsLazyQuery",He.__docgenInfo={description:"",displayName:"useUserCertificateFieldsLazyQuery",props:{}}}catch{}const $r=t=>{const e=`${t.score}%`;return A("svg",{width:"90",height:"18",viewBox:"0 0 90 18",children:[m("symbol",{id:"bg-star",children:m("path",{d:"M7.85879 1.51237C8.21879 0.407172 9.78239 0.407172 10.1412 1.51237L11.4252 5.46277C11.5036 5.70336 11.6561 5.91299 11.8609 6.0617C12.0656 6.21041 12.3121 6.29059 12.5652 6.29077H16.7196C17.8824 6.29077 18.3648 7.77877 17.4252 8.46277L14.0652 10.9036C13.86 11.0524 13.7073 11.2624 13.6288 11.5034C13.5503 11.7444 13.5502 12.0041 13.6284 12.2452L14.9124 16.1956C15.2724 17.3008 14.0064 18.2212 13.0644 17.5372L9.70439 15.0964C9.49944 14.9476 9.25266 14.8674 8.99939 14.8674C8.74612 14.8674 8.49935 14.9476 8.29439 15.0964L4.93439 17.5372C3.99359 18.2212 2.72879 17.3008 3.08759 16.1956L4.37159 12.2452C4.4498 12.0041 4.44966 11.7444 4.37119 11.5034C4.29272 11.2624 4.13996 11.0524 3.93479 10.9036L0.575993 8.46397C-0.363607 7.77997 0.119993 6.29197 1.28159 6.29197H5.43479C5.68805 6.29204 5.93484 6.21198 6.13982 6.06325C6.34481 5.91452 6.49748 5.70475 6.57599 5.46397L7.85999 1.51357L7.85879 1.51237Z",fill:"#D1D5DB"})}),m("symbol",{id:"star",children:m("path",{d:"M7.85879 1.51237C8.21879 0.407172 9.78239 0.407172 10.1412 1.51237L11.4252 5.46277C11.5036 5.70336 11.6561 5.91299 11.8609 6.0617C12.0656 6.21041 12.3121 6.29059 12.5652 6.29077H16.7196C17.8824 6.29077 18.3648 7.77877 17.4252 8.46277L14.0652 10.9036C13.86 11.0524 13.7073 11.2624 13.6288 11.5034C13.5503 11.7444 13.5502 12.0041 13.6284 12.2452L14.9124 16.1956C15.2724 17.3008 14.0064 18.2212 13.0644 17.5372L9.70439 15.0964C9.49944 14.9476 9.25266 14.8674 8.99939 14.8674C8.74612 14.8674 8.49935 14.9476 8.29439 15.0964L4.93439 17.5372C3.99359 18.2212 2.72879 17.3008 3.08759 16.1956L4.37159 12.2452C4.4498 12.0041 4.44966 11.7444 4.37119 11.5034C4.29272 11.2624 4.13996 11.0524 3.93479 10.9036L0.575993 8.46397C-0.363607 7.77997 0.119993 6.29197 1.28159 6.29197H5.43479C5.68805 6.29204 5.93484 6.21198 6.13982 6.06325C6.34481 5.91452 6.49748 5.70475 6.57599 5.46397L7.85999 1.51357L7.85879 1.51237Z",fill:"#FAAD4D"})}),A("mask",{id:"bg-stars",children:[m("use",{href:"#bg-star",transform:"translate(0 0)"}),m("use",{href:"#bg-star",transform:"translate(18 0)"}),m("use",{href:"#bg-star",transform:"translate(36 0)"}),m("use",{href:"#bg-star",transform:"translate(54 0)"}),m("use",{href:"#bg-star",transform:"translate(72 0)"})]}),A("mask",{id:"stars",children:[m("use",{href:"#star",transform:"translate(0 0)"}),m("use",{href:"#star",transform:"translate(18 0)"}),m("use",{href:"#star",transform:"translate(36 0)"}),m("use",{href:"#star",transform:"translate(54 0)"}),m("use",{href:"#star",transform:"translate(72 0)"})]}),m("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#D1D5DB",mask:"url(#bg-stars)"}),m("rect",{x:"0",y:"0",width:e,height:"100%",fill:"#FAAD4D",mask:"url(#stars)"})]})},X=t=>{let e,r,s,n,o,a,l;function u(){const{data:p,error:y}=J({variables:{slug:t.slug}});return y&&console.log(y),p&&p.LearningPathBySlug&&({name:a,shortDescription:l,asset:o}=p.LearningPathBySlug),{title:a,description:l,asset:o}}function d(){const{data:p,error:y}=Y({variables:{slug:t.slug}});return y&&console.log(y),p&&p.CourseGroupBySlug&&({title:e,description:r,rating:s,ratingsCount:n,asset:o}=p.CourseGroupBySlug),{title:e,description:r,rating:s,ratingsCount:n,asset:o}}return t.contentKind==="learningPath"?{title:e,description:r,asset:o}=u():{title:e,description:r,rating:s,ratingsCount:n,asset:o}=d(),A("div",{className:"py-24 px-20",children:[A("div",{className:"px-1",children:[m("div",{className:"text-5xl font-bold pb-2 font-primary",children:e}),m("div",{className:"text-lg text-slate-400 pb-2.5 font-primary",children:r}),t.showStars&&t.contentKind!=="learningPath"&&m("div",{className:"flex pb-8",children:A(te,{children:[s&&A(te,{children:[m($r,{score:s}),m("div",{className:"font-bold px-1",children:(s/20).toFixed(1)})]}),`(${n} Reviews)`]})})]}),t.showImage&&o&&m("img",{src:o,className:"w-[600px]"})]})};X.displayName="ContentHeader";try{X.displayName="ContentHeader",X.__docgenInfo={description:"",displayName:"ContentHeader",props:{contentKind:{defaultValue:null,description:"",name:"contentKind",required:!0,type:{name:"enum",value:[{value:'"article"'},{value:'"bundle"'},{value:'"course"'},{value:'"courseGroup"'},{value:'"discountGroup"'},{value:'"inPersonEvent"'},{value:'"inPersonEventCourse"'},{value:'"learningPath"'},{value:'"microCourse"'},{value:'"pickableGroup"'},{value:'"product"'},{value:'"sellable"'},{value:'"shareableContentObject"'},{value:'"video"'},{value:'"webinar"'},{value:'"webinarCourse"'},{value:'"xApiObject"'}]}},slug:{defaultValue:null,description:"",name:"slug",required:!0,type:{name:"string"}},showStars:{defaultValue:null,description:"",name:"showStars",required:!0,type:{name:"boolean"}},showImage:{defaultValue:null,description:"",name:"showImage",required:!0,type:{name:"boolean"}}}}}catch{}export{ut as C,T as D,Z as G,mt as L,vt as R,Et as U,v as a,de as b,ge as c,X as d,dt as e,yt as f,h as g,lt as h,gt as i,ye as j,ve as k,ke as l,Ee as m,ot as n,C as u,Sr as v};
//# sourceMappingURL=content-header-84cd9f86.js.map
