import{a as $r,j as Ee}from"./jsx-runtime-670450c2.js";import{a as G,_ as we}from"./tslib.es6-33423134.js";import{a3 as Qt,a4 as _e,a5 as Ft,a6 as Rr,a7 as Sr,a8 as Lr,a9 as Mr,K as k,aa as he,ab as wr,Y as Pt,a as Y,ac as Qr,ad as Fr,c as Qe,ae as ye,e as Pr,j as le,l as Br,af as Re,C as zr,ag as Bt}from"./ApolloContext-2edf0031.js";import{r as z,a as qr}from"./index-f1f749bf.js";import{c as ve}from"./_commonjsHelpers-042e6b4d.js";function Wr(e){return typeof e=="object"&&e!==null}function jr(e,t){if(!Boolean(e))throw new Error(t??"Unexpected invariant triggered.")}const Yr=/\r\n|[\n\r]/g;function Ie(e,t){let r=0,s=1;for(const n of e.body.matchAll(Yr)){if(typeof n.index=="number"||jr(!1),n.index>=t)break;r=n.index+n[0].length,s+=1}return{line:s,column:t+1-r}}function Vr(e){return zt(e.source,Ie(e.source,e.start))}function zt(e,t){const r=e.locationOffset.column-1,s="".padStart(r)+e.body,n=t.line-1,o=e.locationOffset.line-1,i=t.line+o,d=t.line===1?r:0,u=t.column+d,h=`${e.name}:${i}:${u}
`,f=s.split(/\r\n|[\n\r]/g),_=f[n];if(_.length>120){const y=Math.floor(u/80),b=u%80,g=[];for(let c=0;c<_.length;c+=80)g.push(_.slice(c,c+80));return h+Fe([[`${i} |`,g[0]],...g.slice(1,y+1).map(c=>["|",c]),["|","^".padStart(b)],["|",g[y+1]]])}return h+Fe([[`${i-1} |`,f[n-1]],[`${i} |`,_],["|","^".padStart(u)],[`${i+1} |`,f[n+1]]])}function Fe(e){const t=e.filter(([s,n])=>n!==void 0),r=Math.max(...t.map(([s])=>s.length));return t.map(([s,n])=>s.padStart(r)+(n?" "+n:"")).join(`
`)}function Gr(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class Se extends Error{constructor(t,...r){var s,n,o;const{nodes:i,source:d,positions:u,path:h,originalError:f,extensions:_}=Gr(r);super(t),this.name="GraphQLError",this.path=h??void 0,this.originalError=f??void 0,this.nodes=Pe(Array.isArray(i)?i:i?[i]:void 0);const y=Pe((s=this.nodes)===null||s===void 0?void 0:s.map(g=>g.loc).filter(g=>g!=null));this.source=d??(y==null||(n=y[0])===null||n===void 0?void 0:n.source),this.positions=u??(y==null?void 0:y.map(g=>g.start)),this.locations=u&&d?u.map(g=>Ie(d,g)):y==null?void 0:y.map(g=>Ie(g.source,g.start));const b=Wr(f==null?void 0:f.extensions)?f==null?void 0:f.extensions:void 0;this.extensions=(o=_??b)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),f!=null&&f.stack?Object.defineProperty(this,"stack",{value:f.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Se):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(t+=`

`+Vr(r.loc));else if(this.source&&this.locations)for(const r of this.locations)t+=`

`+zt(this.source,r);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function Pe(e){return e===void 0||e.length===0?void 0:e}function F(e,t,r){return new Se(`Syntax Error: ${r}`,{source:e,positions:[t]})}var Ue;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Ue||(Ue={}));var a;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(a||(a={}));class Hr{constructor(t){const r=new Qt(a.SOF,0,0,0,0);this.source=t,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==a.EOF)do if(t.next)t=t.next;else{const r=Kr(this,t.end);t.next=r,r.prev=t,t=r}while(t.kind===a.COMMENT);return t}}function Jr(e){return e===a.BANG||e===a.DOLLAR||e===a.AMP||e===a.PAREN_L||e===a.PAREN_R||e===a.SPREAD||e===a.COLON||e===a.EQUALS||e===a.AT||e===a.BRACKET_L||e===a.BRACKET_R||e===a.BRACE_L||e===a.PIPE||e===a.BRACE_R}function oe(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Ce(e,t){return qt(e.charCodeAt(t))&&Wt(e.charCodeAt(t+1))}function qt(e){return e>=55296&&e<=56319}function Wt(e){return e>=56320&&e<=57343}function re(e,t){const r=e.source.body.codePointAt(t);if(r===void 0)return a.EOF;if(r>=32&&r<=126){const s=String.fromCodePoint(r);return s==='"'?`'"'`:`"${s}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function Q(e,t,r,s,n){const o=e.line,i=1+r-e.lineStart;return new Qt(t,r,s,o,i,n)}function Kr(e,t){const r=e.source.body,s=r.length;let n=t;for(;n<s;){const o=r.charCodeAt(n);switch(o){case 65279:case 9:case 32:case 44:++n;continue;case 10:++n,++e.line,e.lineStart=n;continue;case 13:r.charCodeAt(n+1)===10?n+=2:++n,++e.line,e.lineStart=n;continue;case 35:return Zr(e,n);case 33:return Q(e,a.BANG,n,n+1);case 36:return Q(e,a.DOLLAR,n,n+1);case 38:return Q(e,a.AMP,n,n+1);case 40:return Q(e,a.PAREN_L,n,n+1);case 41:return Q(e,a.PAREN_R,n,n+1);case 46:if(r.charCodeAt(n+1)===46&&r.charCodeAt(n+2)===46)return Q(e,a.SPREAD,n,n+3);break;case 58:return Q(e,a.COLON,n,n+1);case 61:return Q(e,a.EQUALS,n,n+1);case 64:return Q(e,a.AT,n,n+1);case 91:return Q(e,a.BRACKET_L,n,n+1);case 93:return Q(e,a.BRACKET_R,n,n+1);case 123:return Q(e,a.BRACE_L,n,n+1);case 124:return Q(e,a.PIPE,n,n+1);case 125:return Q(e,a.BRACE_R,n,n+1);case 34:return r.charCodeAt(n+1)===34&&r.charCodeAt(n+2)===34?sn(e,n):en(e,n)}if(_e(o)||o===45)return Xr(e,n,o);if(Ft(o))return on(e,n);throw F(e.source,n,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:oe(o)||Ce(r,n)?`Unexpected character: ${re(e,n)}.`:`Invalid character: ${re(e,n)}.`)}return Q(e,a.EOF,s,s)}function Zr(e,t){const r=e.source.body,s=r.length;let n=t+1;for(;n<s;){const o=r.charCodeAt(n);if(o===10||o===13)break;if(oe(o))++n;else if(Ce(r,n))n+=2;else break}return Q(e,a.COMMENT,t,n,r.slice(t+1,n))}function Xr(e,t,r){const s=e.source.body;let n=t,o=r,i=!1;if(o===45&&(o=s.charCodeAt(++n)),o===48){if(o=s.charCodeAt(++n),_e(o))throw F(e.source,n,`Invalid number, unexpected digit after 0: ${re(e,n)}.`)}else n=Ne(e,n,o),o=s.charCodeAt(n);if(o===46&&(i=!0,o=s.charCodeAt(++n),n=Ne(e,n,o),o=s.charCodeAt(n)),(o===69||o===101)&&(i=!0,o=s.charCodeAt(++n),(o===43||o===45)&&(o=s.charCodeAt(++n)),n=Ne(e,n,o),o=s.charCodeAt(n)),o===46||Ft(o))throw F(e.source,n,`Invalid number, expected digit but got: ${re(e,n)}.`);return Q(e,i?a.FLOAT:a.INT,t,n,s.slice(t,n))}function Ne(e,t,r){if(!_e(r))throw F(e.source,t,`Invalid number, expected digit but got: ${re(e,t)}.`);const s=e.source.body;let n=t+1;for(;_e(s.charCodeAt(n));)++n;return n}function en(e,t){const r=e.source.body,s=r.length;let n=t+1,o=n,i="";for(;n<s;){const d=r.charCodeAt(n);if(d===34)return i+=r.slice(o,n),Q(e,a.STRING,t,n+1,i);if(d===92){i+=r.slice(o,n);const u=r.charCodeAt(n+1)===117?r.charCodeAt(n+2)===123?tn(e,n):rn(e,n):nn(e,n);i+=u.value,n+=u.size,o=n;continue}if(d===10||d===13)break;if(oe(d))++n;else if(Ce(r,n))n+=2;else throw F(e.source,n,`Invalid character within String: ${re(e,n)}.`)}throw F(e.source,n,"Unterminated string.")}function tn(e,t){const r=e.source.body;let s=0,n=3;for(;n<12;){const o=r.charCodeAt(t+n++);if(o===125){if(n<5||!oe(s))break;return{value:String.fromCodePoint(s),size:n}}if(s=s<<4|ce(o),s<0)break}throw F(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+n)}".`)}function rn(e,t){const r=e.source.body,s=Be(r,t+2);if(oe(s))return{value:String.fromCodePoint(s),size:6};if(qt(s)&&r.charCodeAt(t+6)===92&&r.charCodeAt(t+7)===117){const n=Be(r,t+8);if(Wt(n))return{value:String.fromCodePoint(s,n),size:12}}throw F(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function Be(e,t){return ce(e.charCodeAt(t))<<12|ce(e.charCodeAt(t+1))<<8|ce(e.charCodeAt(t+2))<<4|ce(e.charCodeAt(t+3))}function ce(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function nn(e,t){const r=e.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw F(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function sn(e,t){const r=e.source.body,s=r.length;let n=e.lineStart,o=t+3,i=o,d="";const u=[];for(;o<s;){const h=r.charCodeAt(o);if(h===34&&r.charCodeAt(o+1)===34&&r.charCodeAt(o+2)===34){d+=r.slice(i,o),u.push(d);const f=Q(e,a.BLOCK_STRING,t,o+3,Rr(u).join(`
`));return e.line+=u.length-1,e.lineStart=n,f}if(h===92&&r.charCodeAt(o+1)===34&&r.charCodeAt(o+2)===34&&r.charCodeAt(o+3)===34){d+=r.slice(i,o),i=o+1,o+=4;continue}if(h===10||h===13){d+=r.slice(i,o),u.push(d),h===13&&r.charCodeAt(o+1)===10?o+=2:++o,d="",i=o,n=o;continue}if(oe(h))++o;else if(Ce(r,o))o+=2;else throw F(e.source,o,`Invalid character within String: ${re(e,o)}.`)}throw F(e.source,o,"Unterminated string.")}function on(e,t){const r=e.source.body,s=r.length;let n=t+1;for(;n<s;){const o=r.charCodeAt(n);if(Sr(o))++n;else break}return Q(e,a.NAME,t,n,r.slice(t,n))}function an(e,t){return new un(e,t).parseDocument()}class un{constructor(t,r={}){const s=Lr(t)?t:new Mr(t);this._lexer=new Hr(s),this._options=r,this._tokenCounter=0}parseName(){const t=this.expectToken(a.NAME);return this.node(t,{kind:k.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:k.DOCUMENT,definitions:this.many(a.SOF,this.parseDefinition,a.EOF)})}parseDefinition(){if(this.peek(a.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),r=t?this._lexer.lookahead():this._lexer.token;if(r.kind===a.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw F(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(a.BRACE_L))return this.node(t,{kind:k.OPERATION_DEFINITION,operation:he.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let s;return this.peek(a.NAME)&&(s=this.parseName()),this.node(t,{kind:k.OPERATION_DEFINITION,operation:r,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(a.NAME);switch(t.value){case"query":return he.QUERY;case"mutation":return he.MUTATION;case"subscription":return he.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(a.PAREN_L,this.parseVariableDefinition,a.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:k.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(a.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(a.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(a.DOLLAR),this.node(t,{kind:k.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:k.SELECTION_SET,selections:this.many(a.BRACE_L,this.parseSelection,a.BRACE_R)})}parseSelection(){return this.peek(a.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,r=this.parseName();let s,n;return this.expectOptionalToken(a.COLON)?(s=r,n=this.parseName()):n=r,this.node(t,{kind:k.FIELD,alias:s,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(a.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const r=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(a.PAREN_L,r,a.PAREN_R)}parseArgument(t=!1){const r=this._lexer.token,s=this.parseName();return this.expectToken(a.COLON),this.node(r,{kind:k.ARGUMENT,name:s,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(a.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(a.NAME)?this.node(t,{kind:k.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:k.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:k.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:k.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const r=this._lexer.token;switch(r.kind){case a.BRACKET_L:return this.parseList(t);case a.BRACE_L:return this.parseObject(t);case a.INT:return this.advanceLexer(),this.node(r,{kind:k.INT,value:r.value});case a.FLOAT:return this.advanceLexer(),this.node(r,{kind:k.FLOAT,value:r.value});case a.STRING:case a.BLOCK_STRING:return this.parseStringLiteral();case a.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:k.BOOLEAN,value:!0});case"false":return this.node(r,{kind:k.BOOLEAN,value:!1});case"null":return this.node(r,{kind:k.NULL});default:return this.node(r,{kind:k.ENUM,value:r.value})}case a.DOLLAR:if(t)if(this.expectToken(a.DOLLAR),this._lexer.token.kind===a.NAME){const s=this._lexer.token.value;throw F(this._lexer.source,r.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:k.STRING,value:t.value,block:t.kind===a.BLOCK_STRING})}parseList(t){const r=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:k.LIST,values:this.any(a.BRACKET_L,r,a.BRACKET_R)})}parseObject(t){const r=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:k.OBJECT,fields:this.any(a.BRACE_L,r,a.BRACE_R)})}parseObjectField(t){const r=this._lexer.token,s=this.parseName();return this.expectToken(a.COLON),this.node(r,{kind:k.OBJECT_FIELD,name:s,value:this.parseValueLiteral(t)})}parseDirectives(t){const r=[];for(;this.peek(a.AT);)r.push(this.parseDirective(t));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const r=this._lexer.token;return this.expectToken(a.AT),this.node(r,{kind:k.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let r;if(this.expectOptionalToken(a.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(a.BRACKET_R),r=this.node(t,{kind:k.LIST_TYPE,type:s})}else r=this.parseNamedType();return this.expectOptionalToken(a.BANG)?this.node(t,{kind:k.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:k.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(a.STRING)||this.peek(a.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),n=this.many(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);return this.node(t,{kind:k.SCHEMA_DEFINITION,description:r,directives:s,operationTypes:n})}parseOperationTypeDefinition(){const t=this._lexer.token,r=this.parseOperationType();this.expectToken(a.COLON);const s=this.parseNamedType();return this.node(t,{kind:k.OPERATION_TYPE_DEFINITION,operation:r,type:s})}parseScalarTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),n=this.parseConstDirectives();return this.node(t,{kind:k.SCALAR_TYPE_DEFINITION,description:r,name:s,directives:n})}parseObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),n=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();return this.node(t,{kind:k.OBJECT_TYPE_DEFINITION,description:r,name:s,interfaces:n,directives:o,fields:i})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(a.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseFieldDefinition,a.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseName(),n=this.parseArgumentDefs();this.expectToken(a.COLON);const o=this.parseTypeReference(),i=this.parseConstDirectives();return this.node(t,{kind:k.FIELD_DEFINITION,description:r,name:s,arguments:n,type:o,directives:i})}parseArgumentDefs(){return this.optionalMany(a.PAREN_L,this.parseInputValueDef,a.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseName();this.expectToken(a.COLON);const n=this.parseTypeReference();let o;this.expectOptionalToken(a.EQUALS)&&(o=this.parseConstValueLiteral());const i=this.parseConstDirectives();return this.node(t,{kind:k.INPUT_VALUE_DEFINITION,description:r,name:s,type:n,defaultValue:o,directives:i})}parseInterfaceTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),n=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();return this.node(t,{kind:k.INTERFACE_TYPE_DEFINITION,description:r,name:s,interfaces:n,directives:o,fields:i})}parseUnionTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),n=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(t,{kind:k.UNION_TYPE_DEFINITION,description:r,name:s,directives:n,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(a.EQUALS)?this.delimitedMany(a.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),n=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(t,{kind:k.ENUM_TYPE_DEFINITION,description:r,name:s,directives:n,values:o})}parseEnumValuesDefinition(){return this.optionalMany(a.BRACE_L,this.parseEnumValueDefinition,a.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(t,{kind:k.ENUM_VALUE_DEFINITION,description:r,name:s,directives:n})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw F(this._lexer.source,this._lexer.token.start,`${fe(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),n=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(t,{kind:k.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:s,directives:n,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseInputValueDef,a.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===a.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),s=this.optionalMany(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);if(r.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:k.SCHEMA_EXTENSION,directives:r,operationTypes:s})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(t,{kind:k.SCALAR_TYPE_EXTENSION,name:r,directives:s})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),s=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(s.length===0&&n.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:k.OBJECT_TYPE_EXTENSION,name:r,interfaces:s,directives:n,fields:o})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),s=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(s.length===0&&n.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:k.INTERFACE_TYPE_EXTENSION,name:r,interfaces:s,directives:n,fields:o})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:k.UNION_TYPE_EXTENSION,name:r,directives:s,types:n})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:k.ENUM_TYPE_EXTENSION,name:r,directives:s,values:n})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:k.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:s,fields:n})}parseDirectiveDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(a.AT);const s=this.parseName(),n=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const i=this.parseDirectiveLocations();return this.node(t,{kind:k.DIRECTIVE_DEFINITION,description:r,name:s,arguments:n,repeatable:o,locations:i})}parseDirectiveLocations(){return this.delimitedMany(a.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(Ue,r.value))return r;throw this.unexpected(t)}node(t,r){return this._options.noLocation!==!0&&(r.loc=new wr(t,this._lexer.lastToken,this._lexer.source)),r}peek(t){return this._lexer.token.kind===t}expectToken(t){const r=this._lexer.token;if(r.kind===t)return this.advanceLexer(),r;throw F(this._lexer.source,r.start,`Expected ${jt(t)}, found ${fe(r)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const r=this._lexer.token;if(r.kind===a.NAME&&r.value===t)this.advanceLexer();else throw F(this._lexer.source,r.start,`Expected "${t}", found ${fe(r)}.`)}expectOptionalKeyword(t){const r=this._lexer.token;return r.kind===a.NAME&&r.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const r=t??this._lexer.token;return F(this._lexer.source,r.start,`Unexpected ${fe(r)}.`)}any(t,r,s){this.expectToken(t);const n=[];for(;!this.expectOptionalToken(s);)n.push(r.call(this));return n}optionalMany(t,r,s){if(this.expectOptionalToken(t)){const n=[];do n.push(r.call(this));while(!this.expectOptionalToken(s));return n}return[]}many(t,r,s){this.expectToken(t);const n=[];do n.push(r.call(this));while(!this.expectOptionalToken(s));return n}delimitedMany(t,r){this.expectOptionalToken(t);const s=[];do s.push(r.call(this));while(this.expectOptionalToken(t));return s}advanceLexer(){const{maxTokens:t}=this._options,r=this._lexer.advance();if(t!==void 0&&r.kind!==a.EOF&&(++this._tokenCounter,this._tokenCounter>t))throw F(this._lexer.source,r.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function fe(e){const t=e.value;return jt(e.kind)+(t!=null?` "${t}"`:"")}function jt(e){return Jr(e)?`"${e}"`:e}var me=new Map,Te=new Map,Yt=!0,ge=!1;function Vt(e){return e.replace(/[\s,]+/g," ").trim()}function cn(e){return Vt(e.source.body.substring(e.start,e.end))}function ln(e){var t=new Set,r=[];return e.definitions.forEach(function(s){if(s.kind==="FragmentDefinition"){var n=s.name.value,o=cn(s.loc),i=Te.get(n);i&&!i.has(o)?Yt&&console.warn("Warning: fragment with name "+n+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):i||Te.set(n,i=new Set),i.add(o),t.has(o)||(t.add(o),r.push(s))}else r.push(s)}),G(G({},e),{definitions:r})}function dn(e){var t=new Set(e.definitions);t.forEach(function(s){s.loc&&delete s.loc,Object.keys(s).forEach(function(n){var o=s[n];o&&typeof o=="object"&&t.add(o)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}function pn(e){var t=Vt(e);if(!me.has(t)){var r=an(e,{experimentalFragmentVariables:ge,allowLegacyFragmentVariables:ge});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");me.set(t,dn(ln(r)))}return me.get(t)}function D(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];typeof e=="string"&&(e=[e]);var s=e[0];return t.forEach(function(n,o){n&&n.kind==="Document"?s+=n.loc.source.body:s+=n,s+=e[o+1]}),pn(s)}function hn(){me.clear(),Te.clear()}function yn(){Yt=!1}function fn(){ge=!0}function mn(){ge=!1}var ue={gql:D,resetCaches:hn,disableFragmentWarnings:yn,enableExperimentalFragmentVariables:fn,disableExperimentalFragmentVariables:mn};(function(e){e.gql=ue.gql,e.resetCaches=ue.resetCaches,e.disableFragmentWarnings=ue.disableFragmentWarnings,e.enableExperimentalFragmentVariables=ue.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=ue.disableExperimentalFragmentVariables})(D||(D={}));D.default=D;function Le(e){var t=z.useContext(Pt()),r=e||t.client;return __DEV__?Y(!!r,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):Y(!!r,31),r}var ze=!1,_n="useSyncExternalStore",gn=qr[_n],vn=gn||function(e,t,r){var s=t();__DEV__&&!ze&&s!==t()&&(ze=!0,__DEV__&&Y.error("The result of getSnapshot should be cached to avoid an infinite loop"));var n=z.useState({inst:{value:s,getSnapshot:t}}),o=n[0].inst,i=n[1];return Qr?z.useLayoutEffect(function(){Object.assign(o,{value:s,getSnapshot:t}),De(o)&&i({inst:o})},[e,s,t]):Object.assign(o,{value:s,getSnapshot:t}),z.useEffect(function(){return De(o)&&i({inst:o}),e(function(){De(o)&&i({inst:o})})},[e]),s};function De(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch{return!0}}var J;(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(J||(J={}));var qe=new Map;function We(e){var t;switch(e){case J.Query:t="Query";break;case J.Mutation:t="Mutation";break;case J.Subscription:t="Subscription";break}return t}function Cn(e){var t=qe.get(e);if(t)return t;var r,s,n;__DEV__?Y(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):Y(!!e&&!!e.kind,32);for(var o=[],i=[],d=[],u=[],h=0,f=e.definitions;h<f.length;h++){var _=f[h];if(_.kind==="FragmentDefinition"){o.push(_);continue}if(_.kind==="OperationDefinition")switch(_.operation){case"query":i.push(_);break;case"mutation":d.push(_);break;case"subscription":u.push(_);break}}__DEV__?Y(!o.length||i.length||d.length||u.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):Y(!o.length||i.length||d.length||u.length,33),__DEV__?Y(i.length+d.length+u.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(i.length," queries, ").concat(u.length," ")+"subscriptions and ".concat(d.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):Y(i.length+d.length+u.length<=1,34),s=i.length?J.Query:J.Mutation,!i.length&&!d.length&&(s=J.Subscription);var y=i.length?i:d.length?d:u;__DEV__?Y(y.length===1,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(y.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):Y(y.length===1,35);var b=y[0];r=b.variableDefinitions||[],b.name&&b.name.kind==="Name"?n=b.name.value:n="data";var g={name:n,type:s,variables:r};return qe.set(e,g),g}function Gt(e,t){var r=Cn(e),s=We(t),n=We(r.type);__DEV__?Y(r.type===t,"Running a ".concat(s," requires a graphql ")+"".concat(s,", but a ").concat(n," was used instead.")):Y(r.type===t,36)}var kn=Object.prototype.hasOwnProperty;function P(e,t){return t===void 0&&(t=Object.create(null)),Ht(Le(t.client),e).useQuery(t)}function Ht(e,t){var r=z.useRef();(!r.current||e!==r.current.client||t!==r.current.query)&&(r.current=new bn(e,t,r.current));var s=r.current,n=z.useState(0);n[0];var o=n[1];return s.forceUpdate=function(){o(function(i){return i+1})},s}var bn=function(){function e(t,r,s){this.client=t,this.query=r,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(Fr?WeakSet:Set),this.ssrDisabledResult=Qe({loading:!0,data:void 0,error:void 0,networkStatus:ye.loading}),this.skipStandbyResult=Qe({loading:!1,data:void 0,error:void 0,networkStatus:ye.ready}),this.toQueryResultCache=new(Pr?WeakMap:Map),Gt(r,J.Query);var n=s&&s.result,o=n&&n.data;o&&(this.previousData=o)}return e.prototype.forceUpdate=function(){__DEV__&&Y.warn("Calling default no-op implementation of InternalState#forceUpdate")},e.prototype.asyncUpdate=function(){var t=this;return new Promise(function(r){t.asyncResolveFns.add(r),t.optionsToIgnoreOnce.add(t.watchQueryOptions),t.forceUpdate()})},e.prototype.useQuery=function(t){var r=this;this.renderPromises=z.useContext(Pt()).renderPromises,this.useOptions(t);var s=this.useObservableQuery(),n=vn(z.useCallback(function(){if(r.renderPromises)return function(){};var i=function(){var h=r.result,f=s.getCurrentResult();h&&h.loading===f.loading&&h.networkStatus===f.networkStatus&&le(h.data,f.data)||r.setResult(f)},d=function(h){var f=s.last;u.unsubscribe();try{s.resetLastResults(),u=s.subscribe(i,d)}finally{s.last=f}if(!kn.call(h,"graphQLErrors"))throw h;var _=r.result;(!_||_&&_.loading||!le(h,_.error))&&r.setResult({data:_&&_.data,error:h,loading:!1,networkStatus:ye.error})},u=s.subscribe(i,d);return function(){return u.unsubscribe()}},[s,this.renderPromises,this.client.disableNetworkFetches]),function(){return r.getCurrentResult()},function(){return r.getCurrentResult()});this.unsafeHandlePartialRefetch(n);var o=this.toQueryResult(n);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach(function(i){return i(o)}),this.asyncResolveFns.clear()),o},e.prototype.useOptions=function(t){var r,s=this.createWatchQueryOptions(this.queryHookOptions=t),n=this.watchQueryOptions;(this.optionsToIgnoreOnce.has(n)||!le(s,n))&&(this.watchQueryOptions=s,n&&this.observable&&(this.optionsToIgnoreOnce.delete(n),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=((r=this.result)===null||r===void 0?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&this.queryHookOptions.ssr===!1&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||this.watchQueryOptions.fetchPolicy==="standby"?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},e.prototype.getObsQueryOptions=function(){var t=[],r=this.client.defaultOptions.watchQuery;return r&&t.push(r),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push(Br(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(Re)},e.prototype.createWatchQueryOptions=function(t){var r;t===void 0&&(t={});var s=t.skip;t.ssr,t.onCompleted,t.onError,t.defaultOptions;var n=we(t,["skip","ssr","onCompleted","onError","defaultOptions"]),o=Object.assign(n,{query:this.query});if(this.renderPromises&&(o.fetchPolicy==="network-only"||o.fetchPolicy==="cache-and-network")&&(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),s){var i=o.fetchPolicy,d=i===void 0?this.getDefaultFetchPolicy():i,u=o.initialFetchPolicy,h=u===void 0?d:u;Object.assign(o,{initialFetchPolicy:h,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=((r=this.observable)===null||r===void 0?void 0:r.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},e.prototype.getDefaultFetchPolicy=function(){var t,r;return((t=this.queryHookOptions.defaultOptions)===null||t===void 0?void 0:t.fetchPolicy)||((r=this.client.defaultOptions.watchQuery)===null||r===void 0?void 0:r.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(t){},e.prototype.onError=function(t){},e.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=z.useMemo(function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},[t]);var r=!(this.queryHookOptions.ssr===!1||this.queryHookOptions.skip);return this.renderPromises&&r&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},e.prototype.setResult=function(t){var r=this.result;r&&r.data&&(this.previousData=r.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},e.prototype.handleErrorOrCompleted=function(t){var r=this;t.loading||Promise.resolve().then(function(){t.error?r.onError(t.error):t.data&&r.onCompleted(t.data)}).catch(function(s){__DEV__&&Y.warn(s)})},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(t){var r=this.toQueryResultCache.get(t);if(r)return r;var s=t.data;t.partial;var n=we(t,["data","partial"]);return this.toQueryResultCache.set(t,r=G(G(G({data:s},n),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!r.error&&zr(t.errors)&&(r.error=new Bt({graphQLErrors:t.errors})),r},e.prototype.unsafeHandlePartialRefetch=function(t){t.partial&&this.queryHookOptions.partialRefetch&&!t.loading&&(!t.data||Object.keys(t.data).length===0)&&this.observable.options.fetchPolicy!=="cache-only"&&(Object.assign(t,{loading:!0,networkStatus:ye.refetch}),this.observable.refetch())},e}(),En=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function B(e,t){var r=Ht(Le(t&&t.client),e),s=z.useRef(),n=s.current?Re(t,s.current):t,o=r.useQuery(G(G({},n),{skip:!s.current})),i=o.observable.options.initialFetchPolicy||r.getDefaultFetchPolicy(),d=Object.assign(o,{called:!!s.current}),u=z.useMemo(function(){for(var f={},_=function(c){var N=d[c];f[c]=function(){return s.current||(s.current=Object.create(null),r.forceUpdate()),N.apply(this,arguments)}},y=0,b=En;y<b.length;y++){var g=b[y];_(g)}return f},[]);Object.assign(d,u);var h=z.useCallback(function(f){s.current=f?G(G({},f),{fetchPolicy:f.fetchPolicy||i}):{fetchPolicy:i};var _=r.asyncUpdate().then(function(y){return Object.assign(y,u)});return _.catch(function(){}),_},[]);return[h,d]}function H(e,t){var r=Le(t==null?void 0:t.client);Gt(e,J.Mutation);var s=z.useState({called:!1,loading:!1,client:r}),n=s[0],o=s[1],i=z.useRef({result:n,mutationId:0,isMounted:!0,client:r,mutation:e,options:t});Object.assign(i.current,{client:r,options:t,mutation:e});var d=z.useCallback(function(h){h===void 0&&(h={});var f=i.current,_=f.client,y=f.options,b=f.mutation,g=G(G({},y),{mutation:b});!i.current.result.loading&&!g.ignoreResults&&i.current.isMounted&&o(i.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:_});var c=++i.current.mutationId,N=Re(g,h);return _.mutate(N).then(function(x){var T,A,M,$=x.data,S=x.errors,q=S&&S.length>0?new Bt({graphQLErrors:S}):void 0;if(c===i.current.mutationId&&!N.ignoreResults){var j={called:!0,loading:!1,data:$,error:q,client:_};i.current.isMounted&&!le(i.current.result,j)&&o(i.current.result=j)}return(A=(T=i.current.options)===null||T===void 0?void 0:T.onCompleted)===null||A===void 0||A.call(T,x.data,N),(M=h.onCompleted)===null||M===void 0||M.call(h,x.data,N),x}).catch(function(x){var T,A,M,$;if(c===i.current.mutationId&&i.current.isMounted){var S={loading:!1,error:x,data:void 0,called:!0,client:_};le(i.current.result,S)||o(i.current.result=S)}if(!((T=i.current.options)===null||T===void 0)&&T.onError||N.onError)return(M=(A=i.current.options)===null||A===void 0?void 0:A.onError)===null||M===void 0||M.call(A,x,N),($=h.onError)===null||$===void 0||$.call(h,x,N),{data:void 0,errors:x};throw x})},[]),u=z.useCallback(function(){i.current.isMounted&&o({called:!1,loading:!1,client:r})},[]);return z.useEffect(function(){return i.current.isMounted=!0,function(){i.current.isMounted=!1}},[]),[d,G({reset:u},n)]}const Nn=()=>$r("div",{className:"flex items-center justify-center space-x-10",children:[Ee("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full",style:{animationDelay:"-0.32s"}}),Ee("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full",style:{animationDelay:"-0.16s"}}),Ee("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full"})]});Nn.displayName="LoadingDots";var Dn=(e=>(e.Membership="membership",e))(Dn||{}),In=(e=>(e.Calendar="calendar",e.Grid="grid",e.List="list",e))(In||{}),de=(e=>(e.Article="article",e.Bundle="bundle",e.Course="course",e.CourseGroup="courseGroup",e.DiscountGroup="discountGroup",e.InPersonEvent="inPersonEvent",e.InPersonEventCourse="inPersonEventCourse",e.LearningPath="learningPath",e.MicroCourse="microCourse",e.PickableGroup="pickableGroup",e.Product="product",e.Sellable="sellable",e.ShareableContentObject="shareableContentObject",e.Video="video",e.Webinar="webinar",e.WebinarCourse="webinarCourse",e.XApiObject="xApiObject",e))(de||{}),Un=(e=>(e.CourseStartDate="courseStartDate",e.CreatedAt="createdAt",e.DisplayDate="displayDate",e.Label="label",e.LastActiveAt="lastActiveAt",e.Name="name",e.ParentName="parentName",e.PublishDate="publishDate",e.Relevance="relevance",e.Title="title",e.UpdatedAt="updatedAt",e))(Un||{}),Tn=(e=>(e.Asc="asc",e.Desc="desc",e))(Tn||{});const ke=D`
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
`,An=D`
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
`,xn=D`
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
`,Jt={},Kt=D`
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
  ${ke}
  ${An}
  ${xn}
`;function je(e){const t={...Jt,...e};return P(Kt,t)}function Ye(e){const t={...Jt,...e};return B(Kt,t)}try{je.displayName="useCatalogContentQuery",je.__docgenInfo={description:"__useCatalogContentQuery__\n\nTo run a query within a React component, call `useCatalogContentQuery` and pass it any options that fit your needs.\nWhen your component renders, `useCatalogContentQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useCatalogContentQuery",props:{}}}catch{}try{Ye.displayName="useCatalogContentLazyQuery",Ye.__docgenInfo={description:"",displayName:"useCatalogContentLazyQuery",props:{}}}catch{}const Zt={},Xt=D`
  query Catalog($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...ContentFragment
      }
    }
  }
  ${ke}
`;function Ve(e){const t={...Zt,...e};return P(Xt,t)}function Ge(e){const t={...Zt,...e};return B(Xt,t)}try{Ve.displayName="useCatalogQuery",Ve.__docgenInfo={description:"__useCatalogQuery__\n\nTo run a query within a React component, call `useCatalogQuery` and pass it any options that fit your needs.\nWhen your component renders, `useCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useCatalogQuery",props:{}}}catch{}try{Ge.displayName="useCatalogLazyQuery",Ge.__docgenInfo={description:"",displayName:"useCatalogLazyQuery",props:{}}}catch{}const er={},tr=D`
  query LanguagesQuery {
    Languages {
      id
      label
      code
      isCustom
      selectorLabel
    }
  }
`;function He(e){const t={...er,...e};return P(tr,t)}function Je(e){const t={...er,...e};return B(tr,t)}try{He.displayName="useLanguagesQueryQuery",He.__docgenInfo={description:"__useLanguagesQueryQuery__\n\nTo run a query within a React component, call `useLanguagesQueryQuery` and pass it any options that fit your needs.\nWhen your component renders, `useLanguagesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useLanguagesQueryQuery",props:{}}}catch{}try{Je.displayName="useLanguagesQueryLazyQuery",Je.__docgenInfo={description:"",displayName:"useLanguagesQueryLazyQuery",props:{}}}catch{}const rr={},nr=D`
  query Contents($ids: [ID!]!) {
    QueryContents(ids: $ids) {
      ...ContentFragment
    }
  }
  ${ke}
`;function Ke(e){const t={...rr,...e};return P(nr,t)}function Ze(e){const t={...rr,...e};return B(nr,t)}try{Ke.displayName="useContentsQuery",Ke.__docgenInfo={description:"__useContentsQuery__\n\nTo run a query within a React component, call `useContentsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useContentsQuery",props:{}}}catch{}try{Ze.displayName="useContentsLazyQuery",Ze.__docgenInfo={description:"",displayName:"useContentsLazyQuery",props:{}}}catch{}const sr={},or=D`
  query RssItems($feedUrl: String!) {
    RssItems(feedUrl: $feedUrl) {
      title
      link
    }
  }
`;function Xe(e){const t={...sr,...e};return P(or,t)}function et(e){const t={...sr,...e};return B(or,t)}try{Xe.displayName="useRssItemsQuery",Xe.__docgenInfo={description:"__useRssItemsQuery__\n\nTo run a query within a React component, call `useRssItemsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useRssItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useRssItemsQuery",props:{}}}catch{}try{et.displayName="useRssItemsLazyQuery",et.__docgenInfo={description:"",displayName:"useRssItemsLazyQuery",props:{}}}catch{}const ir={},ar=D`
  query UserRecentContent($limit: Int) {
    UserRecentContent(limit: $limit) {
      ...ContentFragment
    }
  }
  ${ke}
`;function tt(e){const t={...ir,...e};return P(ar,t)}function rt(e){const t={...ir,...e};return B(ar,t)}try{tt.displayName="useUserRecentContentQuery",tt.__docgenInfo={description:"__useUserRecentContentQuery__\n\nTo run a query within a React component, call `useUserRecentContentQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserRecentContentQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserRecentContentQuery",props:{}}}catch{}try{rt.displayName="useUserRecentContentLazyQuery",rt.__docgenInfo={description:"",displayName:"useUserRecentContentLazyQuery",props:{}}}catch{}const ur={},cr=D`
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
`;function nt(e){const t={...ur,...e};return P(cr,t)}function st(e){const t={...ur,...e};return B(cr,t)}try{nt.displayName="useUserContentItemsQuery",nt.__docgenInfo={description:"__useUserContentItemsQuery__\n\nTo run a query within a React component, call `useUserContentItemsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserContentItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserContentItemsQuery",props:{}}}catch{}try{st.displayName="useUserContentItemsLazyQuery",st.__docgenInfo={description:"",displayName:"useUserContentItemsLazyQuery",props:{}}}catch{}const lr={},dr=D`
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
`;function ot(e){const t={...lr,...e};return P(dr,t)}function it(e){const t={...lr,...e};return B(dr,t)}try{ot.displayName="useUserArchivesQuery",ot.__docgenInfo={description:"__useUserArchivesQuery__\n\nTo run a query within a React component, call `useUserArchivesQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserArchivesQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserArchivesQuery",props:{}}}catch{}try{it.displayName="useUserArchivesLazyQuery",it.__docgenInfo={description:"",displayName:"useUserArchivesLazyQuery",props:{}}}catch{}const pr={},hr=D`
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
`;function at(e){const t={...pr,...e};return P(hr,t)}function ut(e){const t={...pr,...e};return B(hr,t)}try{at.displayName="useUserWaitlistQuery",at.__docgenInfo={description:"__useUserWaitlistQuery__\n\nTo run a query within a React component, call `useUserWaitlistQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserWaitlistQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserWaitlistQuery",props:{}}}catch{}try{ut.displayName="useUserWaitlistLazyQuery",ut.__docgenInfo={description:"",displayName:"useUserWaitlistLazyQuery",props:{}}}catch{}const yr={},fr=D`
  query UserBookmarks {
    UserBookmarks {
      id
      name
      defaultFolder
      bookmarkCount
    }
  }
`;function ct(e){const t={...yr,...e};return P(fr,t)}function lt(e){const t={...yr,...e};return B(fr,t)}try{ct.displayName="useUserBookmarksQuery",ct.__docgenInfo={description:"__useUserBookmarksQuery__\n\nTo run a query within a React component, call `useUserBookmarksQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserBookmarksQuery",props:{}}}catch{}try{lt.displayName="useUserBookmarksLazyQuery",lt.__docgenInfo={description:"",displayName:"useUserBookmarksLazyQuery",props:{}}}catch{}const mr={},_r=D`
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
`;function dt(e){const t={...mr,...e};return P(_r,t)}function pt(e){const t={...mr,...e};return B(_r,t)}try{dt.displayName="useUserCertificatesQuery",dt.__docgenInfo={description:"__useUserCertificatesQuery__\n\nTo run a query within a React component, call `useUserCertificatesQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCertificatesQuery",props:{}}}catch{}try{pt.displayName="useUserCertificatesLazyQuery",pt.__docgenInfo={description:"",displayName:"useUserCertificatesLazyQuery",props:{}}}catch{}const gr={},vr=D`
  query ContentGroups($query: String, $includeExpiredCertificates: Boolean) {
    UserContentGroups(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      kind
      count
    }
  }
`;function ht(e){const t={...gr,...e};return P(vr,t)}function yt(e){const t={...gr,...e};return B(vr,t)}try{ht.displayName="useContentGroupsQuery",ht.__docgenInfo={description:"__useContentGroupsQuery__\n\nTo run a query within a React component, call `useContentGroupsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useContentGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useContentGroupsQuery",props:{}}}catch{}try{yt.displayName="useContentGroupsLazyQuery",yt.__docgenInfo={description:"",displayName:"useContentGroupsLazyQuery",props:{}}}catch{}const Cr={},kr=D`
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
`;function ft(e){const t={...Cr,...e};return P(kr,t)}function mt(e){const t={...Cr,...e};return B(kr,t)}try{ft.displayName="useUserBookmarksByFolderQuery",ft.__docgenInfo={description:"__useUserBookmarksByFolderQuery__\n\nTo run a query within a React component, call `useUserBookmarksByFolderQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserBookmarksByFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserBookmarksByFolderQuery",props:{}}}catch{}try{mt.displayName="useUserBookmarksByFolderLazyQuery",mt.__docgenInfo={description:"",displayName:"useUserBookmarksByFolderLazyQuery",props:{}}}catch{}const br={},Er=D`
  query UserCourseCompletionProgress($id: ID!) {
    UserCourseCompletionProgress(id: $id) {
      type
      required
      completed
      percent
    }
  }
`;function _t(e){const t={...br,...e};return P(Er,t)}function gt(e){const t={...br,...e};return B(Er,t)}try{_t.displayName="useUserCourseCompletionProgressQuery",_t.__docgenInfo={description:"__useUserCourseCompletionProgressQuery__\n\nTo run a query within a React component, call `useUserCourseCompletionProgressQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseCompletionProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseCompletionProgressQuery",props:{}}}catch{}try{gt.displayName="useUserCourseCompletionProgressLazyQuery",gt.__docgenInfo={description:"",displayName:"useUserCourseCompletionProgressLazyQuery",props:{}}}catch{}const Nr={},Dr=D`
  query UserCourseProgress($id: ID!) {
    UserCourseProgress(id: $id) {
      totalViews
      totalTime
      percentComplete
    }
  }
`;function vt(e){const t={...Nr,...e};return P(Dr,t)}function Ct(e){const t={...Nr,...e};return B(Dr,t)}try{vt.displayName="useUserCourseProgressQuery",vt.__docgenInfo={description:"__useUserCourseProgressQuery__\n\nTo run a query within a React component, call `useUserCourseProgressQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseProgressQuery",props:{}}}catch{}try{Ct.displayName="useUserCourseProgressLazyQuery",Ct.__docgenInfo={description:"",displayName:"useUserCourseProgressLazyQuery",props:{}}}catch{}const Ir={},Ur=D`
  query UserCourseAwardCounts($courseId: ID!) {
    UserCourseAwardCounts(courseId: $courseId) {
      id
      label
      icon
      count
    }
  }
`;function kt(e){const t={...Ir,...e};return P(Ur,t)}function bt(e){const t={...Ir,...e};return B(Ur,t)}try{kt.displayName="useUserCourseAwardCountsQuery",kt.__docgenInfo={description:"__useUserCourseAwardCountsQuery__\n\nTo run a query within a React component, call `useUserCourseAwardCountsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseAwardCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseAwardCountsQuery",props:{}}}catch{}try{bt.displayName="useUserCourseAwardCountsLazyQuery",bt.__docgenInfo={description:"",displayName:"useUserCourseAwardCountsLazyQuery",props:{}}}catch{}const Tr={},Ar=D`
  query UserCourseCollaborations($courseId: ID!) {
    UserCourseCollaborations(courseId: $courseId)
  }
`;function Et(e){const t={...Tr,...e};return P(Ar,t)}function Nt(e){const t={...Tr,...e};return B(Ar,t)}try{Et.displayName="useUserCourseCollaborationsQuery",Et.__docgenInfo={description:"__useUserCourseCollaborationsQuery__\n\nTo run a query within a React component, call `useUserCourseCollaborationsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseCollaborationsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseCollaborationsQuery",props:{}}}catch{}try{Nt.displayName="useUserCourseCollaborationsLazyQuery",Nt.__docgenInfo={description:"",displayName:"useUserCourseCollaborationsLazyQuery",props:{}}}catch{}const xr={},Or=D`
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
`;function Dt(e){const t={...xr,...e};return P(Or,t)}function It(e){const t={...xr,...e};return B(Or,t)}try{Dt.displayName="useUserCertificateFieldsQuery",Dt.__docgenInfo={description:"__useUserCertificateFieldsQuery__\n\nTo run a query within a React component, call `useUserCertificateFieldsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCertificateFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCertificateFieldsQuery",props:{}}}catch{}try{It.displayName="useUserCertificateFieldsLazyQuery",It.__docgenInfo={description:"",displayName:"useUserCertificateFieldsLazyQuery",props:{}}}catch{}const On={},$n=D`
  mutation AddResourceToQueue($resourceType: ContentKind, $resourceId: ID!) {
    AddResourceToQueue(resourceType: $resourceType, resourceId: $resourceId)
  }
`;function Ut(e){const t={...On,...e};return H($n,t)}try{Ut.displayName="useAddResourceToQueueMutation",Ut.__docgenInfo={description:`__useAddResourceToQueueMutation__

To run a mutation, you first call \`useAddResourceToQueueMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useAddResourceToQueueMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useAddResourceToQueueMutation",props:{}}}catch{}const Rn={},Sn=D`
  mutation ArchiveUserCourse($id: ID!) {
    ArchiveUserCourse(id: $id)
  }
`;function Tt(e){const t={...Rn,...e};return H(Sn,t)}try{Tt.displayName="useArchiveUserCourseMutation",Tt.__docgenInfo={description:`__useArchiveUserCourseMutation__

To run a mutation, you first call \`useArchiveUserCourseMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useArchiveUserCourseMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useArchiveUserCourseMutation",props:{}}}catch{}const Ln={},Mn=D`
  mutation ArchiveUserLearningPath($id: ID!) {
    ArchiveUserLearningPath(id: $id)
  }
`;function At(e){const t={...Ln,...e};return H(Mn,t)}try{At.displayName="useArchiveUserLearningPathMutation",At.__docgenInfo={description:`__useArchiveUserLearningPathMutation__

To run a mutation, you first call \`useArchiveUserLearningPathMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useArchiveUserLearningPathMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useArchiveUserLearningPathMutation",props:{}}}catch{}const wn={},Qn=D`
  mutation ReinstateUserLearningPath($id: ID!) {
    ReinstateUserLearningPath(id: $id)
  }
`;function xt(e){const t={...wn,...e};return H(Qn,t)}try{xt.displayName="useReinstateUserLearningPathMutation",xt.__docgenInfo={description:`__useReinstateUserLearningPathMutation__

To run a mutation, you first call \`useReinstateUserLearningPathMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useReinstateUserLearningPathMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useReinstateUserLearningPathMutation",props:{}}}catch{}const Fn={},Pn=D`
  mutation ReinstateUserCourse($id: ID!) {
    ReinstateUserCourse(id: $id)
  }
`;function Ot(e){const t={...Fn,...e};return H(Pn,t)}try{Ot.displayName="useReinstateUserCourseMutation",Ot.__docgenInfo={description:`__useReinstateUserCourseMutation__

To run a mutation, you first call \`useReinstateUserCourseMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useReinstateUserCourseMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useReinstateUserCourseMutation",props:{}}}catch{}const Bn={},zn=D`
  mutation UnenrollFromWaitlist($id: ID!) {
    UnenrollFromWaitlist(id: $id)
  }
`;function $t(e){const t={...Bn,...e};return H(zn,t)}try{$t.displayName="useUnenrollFromWaitlistMutation",$t.__docgenInfo={description:`__useUnenrollFromWaitlistMutation__

To run a mutation, you first call \`useUnenrollFromWaitlistMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUnenrollFromWaitlistMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUnenrollFromWaitlistMutation",props:{}}}catch{}const qn={},Wn=D`
  mutation UpdateBookmarkFolder($id: ID!, $name: String!) {
    UpdateBookmarkFolder(id: $id, name: $name) {
      id
      name
    }
  }
`;function Rt(e){const t={...qn,...e};return H(Wn,t)}try{Rt.displayName="useUpdateBookmarkFolderMutation",Rt.__docgenInfo={description:`__useUpdateBookmarkFolderMutation__

To run a mutation, you first call \`useUpdateBookmarkFolderMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUpdateBookmarkFolderMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUpdateBookmarkFolderMutation",props:{}}}catch{}const jn={},Yn=D`
  mutation DestroyBookmarkFolder($id: ID!) {
    DestroyBookmarkFolder(id: $id)
  }
`;function St(e){const t={...jn,...e};return H(Yn,t)}try{St.displayName="useDestroyBookmarkFolderMutation",St.__docgenInfo={description:`__useDestroyBookmarkFolderMutation__

To run a mutation, you first call \`useDestroyBookmarkFolderMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useDestroyBookmarkFolderMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useDestroyBookmarkFolderMutation",props:{}}}catch{}const Vn={},Gn=D`
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
`;function Lt(e){const t={...Vn,...e};return H(Gn,t)}try{Lt.displayName="useCreateCertificateFromUploadMutation",Lt.__docgenInfo={description:`__useCreateCertificateFromUploadMutation__

To run a mutation, you first call \`useCreateCertificateFromUploadMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useCreateCertificateFromUploadMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useCreateCertificateFromUploadMutation",props:{}}}catch{}const Hn={},Jn=D`
  mutation UpdateBookmark($id: ID!, $note: String, $bookmarkFolder: ID!) {
    UpdateBookmark(id: $id, note: $note, bookmarkFolder: $bookmarkFolder) {
      id
    }
  }
`;function Mt(e){const t={...Hn,...e};return H(Jn,t)}try{Mt.displayName="useUpdateBookmarkMutation",Mt.__docgenInfo={description:`__useUpdateBookmarkMutation__

To run a mutation, you first call \`useUpdateBookmarkMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUpdateBookmarkMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUpdateBookmarkMutation",props:{}}}catch{}const Kn={},Zn=D`
  mutation DestroyBookmark($id: ID!) {
    DestroyBookmark(id: $id)
  }
`;function wt(e){const t={...Kn,...e};return H(Zn,t)}try{wt.displayName="useDestroyBookmarkMutation",wt.__docgenInfo={description:`__useDestroyBookmarkMutation__

To run a mutation, you first call \`useDestroyBookmarkMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useDestroyBookmarkMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useDestroyBookmarkMutation",props:{}}}catch{}var Ae={},Xn={get exports(){return Ae},set exports(e){Ae=e}};(function(e,t){(function(r,s){e.exports=s()})(ve,function(){var r=1e3,s=6e4,n=36e5,o="millisecond",i="second",d="minute",u="hour",h="day",f="week",_="month",y="quarter",b="year",g="date",c="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},A=function(v,m,l){var C=String(v);return!C||C.length>=m?v:""+Array(m+1-C.length).join(l)+v},M={s:A,z:function(v){var m=-v.utcOffset(),l=Math.abs(m),C=Math.floor(l/60),p=l%60;return(m<=0?"+":"-")+A(C,2,"0")+":"+A(p,2,"0")},m:function v(m,l){if(m.date()<l.date())return-v(l,m);var C=12*(l.year()-m.year())+(l.month()-m.month()),p=m.clone().add(C,_),I=l-p<0,E=m.clone().add(C+(I?-1:1),_);return+(-(C+(l-p)/(I?p-E:E-p))||0)},a:function(v){return v<0?Math.ceil(v)||0:Math.floor(v)},p:function(v){return{M:_,y:b,w:f,d:h,D:g,h:u,m:d,s:i,ms:o,Q:y}[v]||String(v||"").toLowerCase().replace(/s$/,"")},u:function(v){return v===void 0}},$="en",S={};S[$]=T;var q=function(v){return v instanceof Z},j=function(v,m,l){var C;if(!v)return $;if(typeof v=="string")S[v]&&(C=v),m&&(S[v]=m,C=v);else{var p=v.name;S[p]=v,C=p}return!l&&C&&($=C),C||!l&&$},O=function(v,m){if(q(v))return v.clone();var l=typeof m=="object"?m:{};return l.date=v,l.args=arguments,new Z(l)},U=M;U.l=j,U.i=q,U.w=function(v,m){return O(v,{locale:m.$L,utc:m.$u,x:m.$x,$offset:m.$offset})};var Z=function(){function v(l){this.$L=j(l.locale,null,!0),this.parse(l)}var m=v.prototype;return m.parse=function(l){this.$d=function(C){var p=C.date,I=C.utc;if(p===null)return new Date(NaN);if(U.u(p))return new Date;if(p instanceof Date)return new Date(p);if(typeof p=="string"&&!/Z$/i.test(p)){var E=p.match(N);if(E){var R=E[2]-1||0,w=(E[7]||"0").substring(0,3);return I?new Date(Date.UTC(E[1],R,E[3]||1,E[4]||0,E[5]||0,E[6]||0,w)):new Date(E[1],R,E[3]||1,E[4]||0,E[5]||0,E[6]||0,w)}}return new Date(p)}(l),this.$x=l.x||{},this.init()},m.init=function(){var l=this.$d;this.$y=l.getFullYear(),this.$M=l.getMonth(),this.$D=l.getDate(),this.$W=l.getDay(),this.$H=l.getHours(),this.$m=l.getMinutes(),this.$s=l.getSeconds(),this.$ms=l.getMilliseconds()},m.$utils=function(){return U},m.isValid=function(){return this.$d.toString()!==c},m.isSame=function(l,C){var p=O(l);return this.startOf(C)<=p&&p<=this.endOf(C)},m.isAfter=function(l,C){return O(l)<this.startOf(C)},m.isBefore=function(l,C){return this.endOf(C)<O(l)},m.$g=function(l,C,p){return U.u(l)?this[C]:this.set(p,l)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(l,C){var p=this,I=!!U.u(C)||C,E=U.p(l),R=function(ne,V){var ee=U.w(p.$u?Date.UTC(p.$y,V,ne):new Date(p.$y,V,ne),p);return I?ee:ee.endOf(h)},w=function(ne,V){return U.w(p.toDate()[ne].apply(p.toDate("s"),(I?[0,0,0,0]:[23,59,59,999]).slice(V)),p)},L=this.$W,W=this.$M,X=this.$D,K="set"+(this.$u?"UTC":"");switch(E){case b:return I?R(1,0):R(31,11);case _:return I?R(1,W):R(0,W+1);case f:var ie=this.$locale().weekStart||0,ae=(L<ie?L+7:L)-ie;return R(I?X-ae:X+(6-ae),W);case h:case g:return w(K+"Hours",0);case u:return w(K+"Minutes",1);case d:return w(K+"Seconds",2);case i:return w(K+"Milliseconds",3);default:return this.clone()}},m.endOf=function(l){return this.startOf(l,!1)},m.$set=function(l,C){var p,I=U.p(l),E="set"+(this.$u?"UTC":""),R=(p={},p[h]=E+"Date",p[g]=E+"Date",p[_]=E+"Month",p[b]=E+"FullYear",p[u]=E+"Hours",p[d]=E+"Minutes",p[i]=E+"Seconds",p[o]=E+"Milliseconds",p)[I],w=I===h?this.$D+(C-this.$W):C;if(I===_||I===b){var L=this.clone().set(g,1);L.$d[R](w),L.init(),this.$d=L.set(g,Math.min(this.$D,L.daysInMonth())).$d}else R&&this.$d[R](w);return this.init(),this},m.set=function(l,C){return this.clone().$set(l,C)},m.get=function(l){return this[U.p(l)]()},m.add=function(l,C){var p,I=this;l=Number(l);var E=U.p(C),R=function(W){var X=O(I);return U.w(X.date(X.date()+Math.round(W*l)),I)};if(E===_)return this.set(_,this.$M+l);if(E===b)return this.set(b,this.$y+l);if(E===h)return R(1);if(E===f)return R(7);var w=(p={},p[d]=s,p[u]=n,p[i]=r,p)[E]||1,L=this.$d.getTime()+l*w;return U.w(L,this)},m.subtract=function(l,C){return this.add(-1*l,C)},m.format=function(l){var C=this,p=this.$locale();if(!this.isValid())return p.invalidDate||c;var I=l||"YYYY-MM-DDTHH:mm:ssZ",E=U.z(this),R=this.$H,w=this.$m,L=this.$M,W=p.weekdays,X=p.months,K=function(V,ee,be,pe){return V&&(V[ee]||V(C,I))||be[ee].substr(0,pe)},ie=function(V){return U.s(R%12||12,V,"0")},ae=p.meridiem||function(V,ee,be){var pe=V<12?"AM":"PM";return be?pe.toLowerCase():pe},ne={YY:String(this.$y).slice(-2),YYYY:this.$y,M:L+1,MM:U.s(L+1,2,"0"),MMM:K(p.monthsShort,L,X,3),MMMM:K(X,L),D:this.$D,DD:U.s(this.$D,2,"0"),d:String(this.$W),dd:K(p.weekdaysMin,this.$W,W,2),ddd:K(p.weekdaysShort,this.$W,W,3),dddd:W[this.$W],H:String(R),HH:U.s(R,2,"0"),h:ie(1),hh:ie(2),a:ae(R,w,!0),A:ae(R,w,!1),m:String(w),mm:U.s(w,2,"0"),s:String(this.$s),ss:U.s(this.$s,2,"0"),SSS:U.s(this.$ms,3,"0"),Z:E};return I.replace(x,function(V,ee){return ee||ne[V]||E.replace(":","")})},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(l,C,p){var I,E=U.p(C),R=O(l),w=(R.utcOffset()-this.utcOffset())*s,L=this-R,W=U.m(this,R);return W=(I={},I[b]=W/12,I[_]=W,I[y]=W/3,I[f]=(L-w)/6048e5,I[h]=(L-w)/864e5,I[u]=L/n,I[d]=L/s,I[i]=L/r,I)[E]||L,p?W:U.a(W)},m.daysInMonth=function(){return this.endOf(_).$D},m.$locale=function(){return S[this.$L]},m.locale=function(l,C){if(!l)return this.$L;var p=this.clone(),I=j(l,C,!0);return I&&(p.$L=I),p},m.clone=function(){return U.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),Me=Z.prototype;return O.prototype=Me,[["$ms",o],["$s",i],["$m",d],["$H",u],["$W",h],["$M",_],["$y",b],["$D",g]].forEach(function(v){Me[v[1]]=function(m){return this.$g(m,v[0],v[1])}}),O.extend=function(v,m){return v.$i||(v(m,Z,O),v.$i=!0),O},O.locale=j,O.isDayjs=q,O.unix=function(v){return O(1e3*v)},O.en=S[$],O.Ls=S,O.p={},O})})(Xn);const se=Ae;var xe={},es={get exports(){return xe},set exports(e){xe=e}};(function(e,t){(function(r,s){e.exports=s()})(ve,function(){return function(r,s,n){var o=s.prototype,i=o.format;n.en.ordinal=function(d){var u=["th","st","nd","rd"],h=d%100;return"["+d+(u[(h-20)%10]||u[h]||u[0])+"]"},o.format=function(d){var u=this,h=this.$locale();if(!this.isValid())return i.bind(this)(d);var f=this.$utils(),_=(d||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(y){switch(y){case"Q":return Math.ceil((u.$M+1)/3);case"Do":return h.ordinal(u.$D);case"gggg":return u.weekYear();case"GGGG":return u.isoWeekYear();case"wo":return h.ordinal(u.week(),"W");case"w":case"ww":return f.s(u.week(),y==="w"?1:2,"0");case"W":case"WW":return f.s(u.isoWeek(),y==="W"?1:2,"0");case"k":case"kk":return f.s(String(u.$H===0?24:u.$H),y==="k"?1:2,"0");case"X":return Math.floor(u.$d.getTime()/1e3);case"x":return u.$d.getTime();case"z":return"["+u.offsetName()+"]";case"zzz":return"["+u.offsetName("long")+"]";default:return y}});return i.bind(this)(_)}}})})(es);const ts=xe;var Oe={},rs={get exports(){return Oe},set exports(e){Oe=e}};(function(e,t){(function(r,s){e.exports=s()})(ve,function(){var r="minute",s=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(o,i,d){var u=i.prototype;d.utc=function(c){var N={date:c,utc:!0,args:arguments};return new i(N)},u.utc=function(c){var N=d(this.toDate(),{locale:this.$L,utc:!0});return c?N.add(this.utcOffset(),r):N},u.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var h=u.parse;u.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),h.call(this,c)};var f=u.init;u.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else f.call(this)};var _=u.utcOffset;u.utcOffset=function(c,N){var x=this.$utils().u;if(x(c))return this.$u?0:x(this.$offset)?_.call(this):this.$offset;if(typeof c=="string"&&(c=function($){$===void 0&&($="");var S=$.match(s);if(!S)return null;var q=(""+S[0]).match(n)||["-",0,0],j=q[0],O=60*+q[1]+ +q[2];return O===0?0:j==="+"?O:-O}(c),c===null))return this;var T=Math.abs(c)<=16?60*c:c,A=this;if(N)return A.$offset=T,A.$u=c===0,A;if(c!==0){var M=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(A=this.local().add(T+M,r)).$offset=T,A.$x.$localOffset=M}else A=this.utc();return A};var y=u.format;u.format=function(c){var N=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,N)},u.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||new Date().getTimezoneOffset());return this.$d.valueOf()-6e4*c},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var b=u.toDate;u.toDate=function(c){return c==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():b.call(this)};var g=u.diff;u.diff=function(c,N,x){if(c&&this.$u===c.$u)return g.call(this,c,N,x);var T=this.local(),A=d(c).local();return g.call(T,A,N,x)}}})})(rs);const ns=Oe;var $e={},ss={get exports(){return $e},set exports(e){$e=e}};(function(e,t){(function(r,s){e.exports=s()})(ve,function(){var r={year:0,month:1,day:2,hour:3,minute:4,second:5},s={};return function(n,o,i){var d,u=function(y,b,g){g===void 0&&(g={});var c=new Date(y),N=function(x,T){T===void 0&&(T={});var A=T.timeZoneName||"short",M=x+"|"+A,$=s[M];return $||($=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:x,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:A}),s[M]=$),$}(b,g);return N.formatToParts(c)},h=function(y,b){for(var g=u(y,b),c=[],N=0;N<g.length;N+=1){var x=g[N],T=x.type,A=x.value,M=r[T];M>=0&&(c[M]=parseInt(A,10))}var $=c[3],S=$===24?0:$,q=c[0]+"-"+c[1]+"-"+c[2]+" "+S+":"+c[4]+":"+c[5]+":000",j=+y;return(i.utc(q).valueOf()-(j-=j%1e3))/6e4},f=o.prototype;f.tz=function(y,b){y===void 0&&(y=d);var g=this.utcOffset(),c=this.toDate(),N=c.toLocaleString("en-US",{timeZone:y}),x=Math.round((c-new Date(N))/1e3/60),T=i(N).$set("millisecond",this.$ms).utcOffset(15*-Math.round(c.getTimezoneOffset()/15)-x,!0);if(b){var A=T.utcOffset();T=T.add(g-A,"minute")}return T.$x.$timezone=y,T},f.offsetName=function(y){var b=this.$x.$timezone||i.tz.guess(),g=u(this.valueOf(),b,{timeZoneName:y}).find(function(c){return c.type.toLowerCase()==="timezonename"});return g&&g.value};var _=f.startOf;f.startOf=function(y,b){if(!this.$x||!this.$x.$timezone)return _.call(this,y,b);var g=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return _.call(g,y,b).tz(this.$x.$timezone,!0)},i.tz=function(y,b,g){var c=g&&b,N=g||b||d,x=h(+i(),N);if(typeof y!="string")return i(y).tz(N);var T=function(S,q,j){var O=S-60*q*1e3,U=h(O,j);if(q===U)return[O,q];var Z=h(O-=60*(U-q)*1e3,j);return U===Z?[O,U]:[S-60*Math.min(U,Z)*1e3,Math.max(U,Z)]}(i.utc(y,c).valueOf(),x,N),A=T[0],M=T[1],$=i(A).utcOffset(M);return $.$x.$timezone=N,$},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(y){d=y}}})})(ss);const os=$e,is="America/New_York";se.extend(ts);se.extend(ns);se.extend(os);const te=(e,t,r)=>{const s=t??is;return se(e).tz(s).format(r)},as=[de.Webinar,de.WebinarCourse],us=[de.InPersonEvent,de.InPersonEventCourse];function ys(e,t,r,s){return e&&(us.includes(e)||as.includes(e))?r?se(t).isSame(se(r),"day")?`${te(t,s,"ddd, MMM Do YYYY hh:mm a")} – ${te(r,s,"hh:mm a z")}`:`${te(t,s,"ddd, MMM Do YYYY hh:mm a")} – ${te(r,s,"ddd, MMM Do YYYY hh:mm a z")}`:`${te(t,s,"ddd, MMM Do YYYY hh:mm a z")}`:r?`${te(t,s,"MMM Do YYYY")} – ${te(r,s,"MMM Do YYYY")}`:te(t,s,"MMM Do YYYY")}export{$n as A,In as C,Se as G,Nn as L,or as R,Un as S,ar as U,B as a,Tn as b,je as c,He as d,se as e,te as f,D as g,de as h,Kt as i,tr as j,Ut as k,Dn as l,ys as m,Xe as n,Xt as o,nr as p,Ve as q,Ke as r,tt as s,H as t,P as u};
//# sourceMappingURL=course-run-78bbd7bb.js.map
