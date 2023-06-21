import{a as Rr,j as Ne}from"./jsx-runtime-b91f6123.js";import{a as Y,_ as Qe}from"./tslib.es6-14bf6d9f.js";import{X as Pt,Y as _e,Z as Bt,_ as Lr,$ as Mr,a0 as Sr,a1 as wr,K as g,a2 as he,a3 as Qr,N as qt,h as j,a4 as Fr,k as Fe,a5 as ye,l as Pr,n as le,c as Br,a6 as ge,z as Pe,W as Ue}from"./ApolloContext-92c8f557.js";import{r as Q,b as qr,c as Ce}from"./index-64f120e9.js";function zr(e){return typeof e=="object"&&e!==null}function Wr(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}const jr=/\r\n|[\n\r]/g;function Ae(e,t){let r=0,s=1;for(const n of e.body.matchAll(jr)){if(typeof n.index=="number"||Wr(!1),n.index>=t)break;r=n.index+n[0].length,s+=1}return{line:s,column:t+1-r}}function Yr(e){return zt(e.source,Ae(e.source,e.start))}function zt(e,t){const r=e.locationOffset.column-1,s="".padStart(r)+e.body,n=t.line-1,o=e.locationOffset.line-1,i=t.line+o,c=t.line===1?r:0,u=t.column+c,f=`${e.name}:${i}:${u}
`,m=s.split(/\r\n|[\n\r]/g),v=m[n];if(v.length>120){const _=Math.floor(u/80),D=u%80,y=[];for(let l=0;l<v.length;l+=80)y.push(v.slice(l,l+80));return f+Be([[`${i} |`,y[0]],...y.slice(1,_+1).map(l=>["|",l]),["|","^".padStart(D)],["|",y[_+1]]])}return f+Be([[`${i-1} |`,m[n-1]],[`${i} |`,v],["|","^".padStart(u)],[`${i+1} |`,m[n+1]]])}function Be(e){const t=e.filter(([s,n])=>n!==void 0),r=Math.max(...t.map(([s])=>s.length));return t.map(([s,n])=>s.padStart(r)+(n?" "+n:"")).join(`
`)}function Vr(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class Me extends Error{constructor(t,...r){var s,n,o;const{nodes:i,source:c,positions:u,path:f,originalError:m,extensions:v}=Vr(r);super(t),this.name="GraphQLError",this.path=f??void 0,this.originalError=m??void 0,this.nodes=qe(Array.isArray(i)?i:i?[i]:void 0);const _=qe((s=this.nodes)===null||s===void 0?void 0:s.map(y=>y.loc).filter(y=>y!=null));this.source=c??(_==null||(n=_[0])===null||n===void 0?void 0:n.source),this.positions=u??(_==null?void 0:_.map(y=>y.start)),this.locations=u&&c?u.map(y=>Ae(c,y)):_==null?void 0:_.map(y=>Ae(y.source,y.start));const D=zr(m==null?void 0:m.extensions)?m==null?void 0:m.extensions:void 0;this.extensions=(o=v??D)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),m!=null&&m.stack?Object.defineProperty(this,"stack",{value:m.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Me):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(t+=`

`+Yr(r.loc));else if(this.source&&this.locations)for(const r of this.locations)t+=`

`+zt(this.source,r);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function qe(e){return e===void 0||e.length===0?void 0:e}function B(e,t,r){return new Me(`Syntax Error: ${r}`,{source:e,positions:[t]})}var xe;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(xe||(xe={}));var a;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(a||(a={}));class Gr{constructor(t){const r=new Pt(a.SOF,0,0,0,0);this.source=t,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==a.EOF)do if(t.next)t=t.next;else{const r=Jr(this,t.end);t.next=r,r.prev=t,t=r}while(t.kind===a.COMMENT);return t}}function Hr(e){return e===a.BANG||e===a.DOLLAR||e===a.AMP||e===a.PAREN_L||e===a.PAREN_R||e===a.SPREAD||e===a.COLON||e===a.EQUALS||e===a.AT||e===a.BRACKET_L||e===a.BRACKET_R||e===a.BRACE_L||e===a.PIPE||e===a.BRACE_R}function oe(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function ke(e,t){return Wt(e.charCodeAt(t))&&jt(e.charCodeAt(t+1))}function Wt(e){return e>=55296&&e<=56319}function jt(e){return e>=56320&&e<=57343}function re(e,t){const r=e.source.body.codePointAt(t);if(r===void 0)return a.EOF;if(r>=32&&r<=126){const s=String.fromCodePoint(r);return s==='"'?`'"'`:`"${s}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function w(e,t,r,s,n){const o=e.line,i=1+r-e.lineStart;return new Pt(t,r,s,o,i,n)}function Jr(e,t){const r=e.source.body,s=r.length;let n=t;for(;n<s;){const o=r.charCodeAt(n);switch(o){case 65279:case 9:case 32:case 44:++n;continue;case 10:++n,++e.line,e.lineStart=n;continue;case 13:r.charCodeAt(n+1)===10?n+=2:++n,++e.line,e.lineStart=n;continue;case 35:return Kr(e,n);case 33:return w(e,a.BANG,n,n+1);case 36:return w(e,a.DOLLAR,n,n+1);case 38:return w(e,a.AMP,n,n+1);case 40:return w(e,a.PAREN_L,n,n+1);case 41:return w(e,a.PAREN_R,n,n+1);case 46:if(r.charCodeAt(n+1)===46&&r.charCodeAt(n+2)===46)return w(e,a.SPREAD,n,n+3);break;case 58:return w(e,a.COLON,n,n+1);case 61:return w(e,a.EQUALS,n,n+1);case 64:return w(e,a.AT,n,n+1);case 91:return w(e,a.BRACKET_L,n,n+1);case 93:return w(e,a.BRACKET_R,n,n+1);case 123:return w(e,a.BRACE_L,n,n+1);case 124:return w(e,a.PIPE,n,n+1);case 125:return w(e,a.BRACE_R,n,n+1);case 34:return r.charCodeAt(n+1)===34&&r.charCodeAt(n+2)===34?nn(e,n):Xr(e,n)}if(_e(o)||o===45)return Zr(e,n,o);if(Bt(o))return sn(e,n);throw B(e.source,n,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:oe(o)||ke(r,n)?`Unexpected character: ${re(e,n)}.`:`Invalid character: ${re(e,n)}.`)}return w(e,a.EOF,s,s)}function Kr(e,t){const r=e.source.body,s=r.length;let n=t+1;for(;n<s;){const o=r.charCodeAt(n);if(o===10||o===13)break;if(oe(o))++n;else if(ke(r,n))n+=2;else break}return w(e,a.COMMENT,t,n,r.slice(t+1,n))}function Zr(e,t,r){const s=e.source.body;let n=t,o=r,i=!1;if(o===45&&(o=s.charCodeAt(++n)),o===48){if(o=s.charCodeAt(++n),_e(o))throw B(e.source,n,`Invalid number, unexpected digit after 0: ${re(e,n)}.`)}else n=De(e,n,o),o=s.charCodeAt(n);if(o===46&&(i=!0,o=s.charCodeAt(++n),n=De(e,n,o),o=s.charCodeAt(n)),(o===69||o===101)&&(i=!0,o=s.charCodeAt(++n),(o===43||o===45)&&(o=s.charCodeAt(++n)),n=De(e,n,o),o=s.charCodeAt(n)),o===46||Bt(o))throw B(e.source,n,`Invalid number, expected digit but got: ${re(e,n)}.`);return w(e,i?a.FLOAT:a.INT,t,n,s.slice(t,n))}function De(e,t,r){if(!_e(r))throw B(e.source,t,`Invalid number, expected digit but got: ${re(e,t)}.`);const s=e.source.body;let n=t+1;for(;_e(s.charCodeAt(n));)++n;return n}function Xr(e,t){const r=e.source.body,s=r.length;let n=t+1,o=n,i="";for(;n<s;){const c=r.charCodeAt(n);if(c===34)return i+=r.slice(o,n),w(e,a.STRING,t,n+1,i);if(c===92){i+=r.slice(o,n);const u=r.charCodeAt(n+1)===117?r.charCodeAt(n+2)===123?en(e,n):tn(e,n):rn(e,n);i+=u.value,n+=u.size,o=n;continue}if(c===10||c===13)break;if(oe(c))++n;else if(ke(r,n))n+=2;else throw B(e.source,n,`Invalid character within String: ${re(e,n)}.`)}throw B(e.source,n,"Unterminated string.")}function en(e,t){const r=e.source.body;let s=0,n=3;for(;n<12;){const o=r.charCodeAt(t+n++);if(o===125){if(n<5||!oe(s))break;return{value:String.fromCodePoint(s),size:n}}if(s=s<<4|ce(o),s<0)break}throw B(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+n)}".`)}function tn(e,t){const r=e.source.body,s=ze(r,t+2);if(oe(s))return{value:String.fromCodePoint(s),size:6};if(Wt(s)&&r.charCodeAt(t+6)===92&&r.charCodeAt(t+7)===117){const n=ze(r,t+8);if(jt(n))return{value:String.fromCodePoint(s,n),size:12}}throw B(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function ze(e,t){return ce(e.charCodeAt(t))<<12|ce(e.charCodeAt(t+1))<<8|ce(e.charCodeAt(t+2))<<4|ce(e.charCodeAt(t+3))}function ce(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function rn(e,t){const r=e.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw B(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function nn(e,t){const r=e.source.body,s=r.length;let n=e.lineStart,o=t+3,i=o,c="";const u=[];for(;o<s;){const f=r.charCodeAt(o);if(f===34&&r.charCodeAt(o+1)===34&&r.charCodeAt(o+2)===34){c+=r.slice(i,o),u.push(c);const m=w(e,a.BLOCK_STRING,t,o+3,Lr(u).join(`
`));return e.line+=u.length-1,e.lineStart=n,m}if(f===92&&r.charCodeAt(o+1)===34&&r.charCodeAt(o+2)===34&&r.charCodeAt(o+3)===34){c+=r.slice(i,o),i=o+1,o+=4;continue}if(f===10||f===13){c+=r.slice(i,o),u.push(c),f===13&&r.charCodeAt(o+1)===10?o+=2:++o,c="",i=o,n=o;continue}if(oe(f))++o;else if(ke(r,o))o+=2;else throw B(e.source,o,`Invalid character within String: ${re(e,o)}.`)}throw B(e.source,o,"Unterminated string.")}function sn(e,t){const r=e.source.body,s=r.length;let n=t+1;for(;n<s;){const o=r.charCodeAt(n);if(Mr(o))++n;else break}return w(e,a.NAME,t,n,r.slice(t,n))}function on(e,t){return new an(e,t).parseDocument()}class an{constructor(t,r={}){const s=Sr(t)?t:new wr(t);this._lexer=new Gr(s),this._options=r,this._tokenCounter=0}parseName(){const t=this.expectToken(a.NAME);return this.node(t,{kind:g.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:g.DOCUMENT,definitions:this.many(a.SOF,this.parseDefinition,a.EOF)})}parseDefinition(){if(this.peek(a.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),r=t?this._lexer.lookahead():this._lexer.token;if(r.kind===a.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw B(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(a.BRACE_L))return this.node(t,{kind:g.OPERATION_DEFINITION,operation:he.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let s;return this.peek(a.NAME)&&(s=this.parseName()),this.node(t,{kind:g.OPERATION_DEFINITION,operation:r,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(a.NAME);switch(t.value){case"query":return he.QUERY;case"mutation":return he.MUTATION;case"subscription":return he.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(a.PAREN_L,this.parseVariableDefinition,a.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:g.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(a.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(a.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(a.DOLLAR),this.node(t,{kind:g.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:g.SELECTION_SET,selections:this.many(a.BRACE_L,this.parseSelection,a.BRACE_R)})}parseSelection(){return this.peek(a.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,r=this.parseName();let s,n;return this.expectOptionalToken(a.COLON)?(s=r,n=this.parseName()):n=r,this.node(t,{kind:g.FIELD,alias:s,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(a.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const r=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(a.PAREN_L,r,a.PAREN_R)}parseArgument(t=!1){const r=this._lexer.token,s=this.parseName();return this.expectToken(a.COLON),this.node(r,{kind:g.ARGUMENT,name:s,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(a.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(a.NAME)?this.node(t,{kind:g.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:g.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:g.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:g.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const r=this._lexer.token;switch(r.kind){case a.BRACKET_L:return this.parseList(t);case a.BRACE_L:return this.parseObject(t);case a.INT:return this.advanceLexer(),this.node(r,{kind:g.INT,value:r.value});case a.FLOAT:return this.advanceLexer(),this.node(r,{kind:g.FLOAT,value:r.value});case a.STRING:case a.BLOCK_STRING:return this.parseStringLiteral();case a.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:g.BOOLEAN,value:!0});case"false":return this.node(r,{kind:g.BOOLEAN,value:!1});case"null":return this.node(r,{kind:g.NULL});default:return this.node(r,{kind:g.ENUM,value:r.value})}case a.DOLLAR:if(t)if(this.expectToken(a.DOLLAR),this._lexer.token.kind===a.NAME){const s=this._lexer.token.value;throw B(this._lexer.source,r.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:g.STRING,value:t.value,block:t.kind===a.BLOCK_STRING})}parseList(t){const r=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:g.LIST,values:this.any(a.BRACKET_L,r,a.BRACKET_R)})}parseObject(t){const r=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:g.OBJECT,fields:this.any(a.BRACE_L,r,a.BRACE_R)})}parseObjectField(t){const r=this._lexer.token,s=this.parseName();return this.expectToken(a.COLON),this.node(r,{kind:g.OBJECT_FIELD,name:s,value:this.parseValueLiteral(t)})}parseDirectives(t){const r=[];for(;this.peek(a.AT);)r.push(this.parseDirective(t));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const r=this._lexer.token;return this.expectToken(a.AT),this.node(r,{kind:g.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let r;if(this.expectOptionalToken(a.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(a.BRACKET_R),r=this.node(t,{kind:g.LIST_TYPE,type:s})}else r=this.parseNamedType();return this.expectOptionalToken(a.BANG)?this.node(t,{kind:g.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:g.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(a.STRING)||this.peek(a.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),n=this.many(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);return this.node(t,{kind:g.SCHEMA_DEFINITION,description:r,directives:s,operationTypes:n})}parseOperationTypeDefinition(){const t=this._lexer.token,r=this.parseOperationType();this.expectToken(a.COLON);const s=this.parseNamedType();return this.node(t,{kind:g.OPERATION_TYPE_DEFINITION,operation:r,type:s})}parseScalarTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),n=this.parseConstDirectives();return this.node(t,{kind:g.SCALAR_TYPE_DEFINITION,description:r,name:s,directives:n})}parseObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),n=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();return this.node(t,{kind:g.OBJECT_TYPE_DEFINITION,description:r,name:s,interfaces:n,directives:o,fields:i})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(a.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseFieldDefinition,a.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseName(),n=this.parseArgumentDefs();this.expectToken(a.COLON);const o=this.parseTypeReference(),i=this.parseConstDirectives();return this.node(t,{kind:g.FIELD_DEFINITION,description:r,name:s,arguments:n,type:o,directives:i})}parseArgumentDefs(){return this.optionalMany(a.PAREN_L,this.parseInputValueDef,a.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseName();this.expectToken(a.COLON);const n=this.parseTypeReference();let o;this.expectOptionalToken(a.EQUALS)&&(o=this.parseConstValueLiteral());const i=this.parseConstDirectives();return this.node(t,{kind:g.INPUT_VALUE_DEFINITION,description:r,name:s,type:n,defaultValue:o,directives:i})}parseInterfaceTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),n=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),i=this.parseFieldsDefinition();return this.node(t,{kind:g.INTERFACE_TYPE_DEFINITION,description:r,name:s,interfaces:n,directives:o,fields:i})}parseUnionTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),n=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(t,{kind:g.UNION_TYPE_DEFINITION,description:r,name:s,directives:n,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(a.EQUALS)?this.delimitedMany(a.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),n=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(t,{kind:g.ENUM_TYPE_DEFINITION,description:r,name:s,directives:n,values:o})}parseEnumValuesDefinition(){return this.optionalMany(a.BRACE_L,this.parseEnumValueDefinition,a.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(t,{kind:g.ENUM_VALUE_DEFINITION,description:r,name:s,directives:n})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw B(this._lexer.source,this._lexer.token.start,`${fe(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),n=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(t,{kind:g.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:s,directives:n,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseInputValueDef,a.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===a.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),s=this.optionalMany(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);if(r.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:g.SCHEMA_EXTENSION,directives:r,operationTypes:s})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(t,{kind:g.SCALAR_TYPE_EXTENSION,name:r,directives:s})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),s=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(s.length===0&&n.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:g.OBJECT_TYPE_EXTENSION,name:r,interfaces:s,directives:n,fields:o})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),s=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(s.length===0&&n.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:g.INTERFACE_TYPE_EXTENSION,name:r,interfaces:s,directives:n,fields:o})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:g.UNION_TYPE_EXTENSION,name:r,directives:s,types:n})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:g.ENUM_TYPE_EXTENSION,name:r,directives:s,values:n})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:g.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:s,fields:n})}parseDirectiveDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(a.AT);const s=this.parseName(),n=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const i=this.parseDirectiveLocations();return this.node(t,{kind:g.DIRECTIVE_DEFINITION,description:r,name:s,arguments:n,repeatable:o,locations:i})}parseDirectiveLocations(){return this.delimitedMany(a.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(xe,r.value))return r;throw this.unexpected(t)}node(t,r){return this._options.noLocation!==!0&&(r.loc=new Qr(t,this._lexer.lastToken,this._lexer.source)),r}peek(t){return this._lexer.token.kind===t}expectToken(t){const r=this._lexer.token;if(r.kind===t)return this.advanceLexer(),r;throw B(this._lexer.source,r.start,`Expected ${Yt(t)}, found ${fe(r)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const r=this._lexer.token;if(r.kind===a.NAME&&r.value===t)this.advanceLexer();else throw B(this._lexer.source,r.start,`Expected "${t}", found ${fe(r)}.`)}expectOptionalKeyword(t){const r=this._lexer.token;return r.kind===a.NAME&&r.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const r=t??this._lexer.token;return B(this._lexer.source,r.start,`Unexpected ${fe(r)}.`)}any(t,r,s){this.expectToken(t);const n=[];for(;!this.expectOptionalToken(s);)n.push(r.call(this));return n}optionalMany(t,r,s){if(this.expectOptionalToken(t)){const n=[];do n.push(r.call(this));while(!this.expectOptionalToken(s));return n}return[]}many(t,r,s){this.expectToken(t);const n=[];do n.push(r.call(this));while(!this.expectOptionalToken(s));return n}delimitedMany(t,r){this.expectOptionalToken(t);const s=[];do s.push(r.call(this));while(this.expectOptionalToken(t));return s}advanceLexer(){const{maxTokens:t}=this._options,r=this._lexer.advance();if(t!==void 0&&r.kind!==a.EOF&&(++this._tokenCounter,this._tokenCounter>t))throw B(this._lexer.source,r.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function fe(e){const t=e.value;return Yt(e.kind)+(t!=null?` "${t}"`:"")}function Yt(e){return Hr(e)?`"${e}"`:e}var me=new Map,Te=new Map,Vt=!0,ve=!1;function Gt(e){return e.replace(/[\s,]+/g," ").trim()}function un(e){return Gt(e.source.body.substring(e.start,e.end))}function cn(e){var t=new Set,r=[];return e.definitions.forEach(function(s){if(s.kind==="FragmentDefinition"){var n=s.name.value,o=un(s.loc),i=Te.get(n);i&&!i.has(o)?Vt&&console.warn("Warning: fragment with name "+n+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):i||Te.set(n,i=new Set),i.add(o),t.has(o)||(t.add(o),r.push(s))}else r.push(s)}),Y(Y({},e),{definitions:r})}function ln(e){var t=new Set(e.definitions);t.forEach(function(s){s.loc&&delete s.loc,Object.keys(s).forEach(function(n){var o=s[n];o&&typeof o=="object"&&t.add(o)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}function dn(e){var t=Gt(e);if(!me.has(t)){var r=on(e,{experimentalFragmentVariables:ve,allowLegacyFragmentVariables:ve});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");me.set(t,ln(cn(r)))}return me.get(t)}function I(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];typeof e=="string"&&(e=[e]);var s=e[0];return t.forEach(function(n,o){n&&n.kind==="Document"?s+=n.loc.source.body:s+=n,s+=e[o+1]}),dn(s)}function pn(){me.clear(),Te.clear()}function hn(){Vt=!1}function yn(){ve=!0}function fn(){ve=!1}var ue={gql:I,resetCaches:pn,disableFragmentWarnings:hn,enableExperimentalFragmentVariables:yn,disableExperimentalFragmentVariables:fn};(function(e){e.gql=ue.gql,e.resetCaches=ue.resetCaches,e.disableFragmentWarnings=ue.disableFragmentWarnings,e.enableExperimentalFragmentVariables=ue.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=ue.disableExperimentalFragmentVariables})(I||(I={}));I.default=I;function Se(e){var t=Q.useContext(qt()),r=e||t.client;return __DEV__?j(!!r,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):j(!!r,32),r}var We=!1,mn="useSyncExternalStore",_n=qr[mn],gn=_n||function(e,t,r){var s=t();__DEV__&&!We&&s!==t()&&(We=!0,__DEV__&&j.error("The result of getSnapshot should be cached to avoid an infinite loop"));var n=Q.useState({inst:{value:s,getSnapshot:t}}),o=n[0].inst,i=n[1];return Fr?Q.useLayoutEffect(function(){Object.assign(o,{value:s,getSnapshot:t}),Ie(o)&&i({inst:o})},[e,s,t]):Object.assign(o,{value:s,getSnapshot:t}),Q.useEffect(function(){return Ie(o)&&i({inst:o}),e(function(){Ie(o)&&i({inst:o})})},[e]),s};function Ie(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch{return!0}}var J;(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(J||(J={}));var je=new Map;function Ye(e){var t;switch(e){case J.Query:t="Query";break;case J.Mutation:t="Mutation";break;case J.Subscription:t="Subscription";break}return t}function vn(e){var t=je.get(e);if(t)return t;var r,s,n;__DEV__?j(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):j(!!e&&!!e.kind,33);for(var o=[],i=[],c=[],u=[],f=0,m=e.definitions;f<m.length;f++){var v=m[f];if(v.kind==="FragmentDefinition"){o.push(v);continue}if(v.kind==="OperationDefinition")switch(v.operation){case"query":i.push(v);break;case"mutation":c.push(v);break;case"subscription":u.push(v);break}}__DEV__?j(!o.length||i.length||c.length||u.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):j(!o.length||i.length||c.length||u.length,34),__DEV__?j(i.length+c.length+u.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(i.length," queries, ").concat(u.length," ")+"subscriptions and ".concat(c.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):j(i.length+c.length+u.length<=1,35),s=i.length?J.Query:J.Mutation,!i.length&&!c.length&&(s=J.Subscription);var _=i.length?i:c.length?c:u;__DEV__?j(_.length===1,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(_.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):j(_.length===1,36);var D=_[0];r=D.variableDefinitions||[],D.name&&D.name.kind==="Name"?n=D.name.value:n="data";var y={name:n,type:s,variables:r};return je.set(e,y),y}function Ht(e,t){var r=vn(e),s=Ye(t),n=Ye(r.type);__DEV__?j(r.type===t,"Running a ".concat(s," requires a graphql ")+"".concat(s,", but a ").concat(n," was used instead.")):j(r.type===t,37)}var Cn=Object.prototype.hasOwnProperty;function q(e,t){return t===void 0&&(t=Object.create(null)),Jt(Se(t.client),e).useQuery(t)}function Jt(e,t){var r=Q.useRef();(!r.current||e!==r.current.client||t!==r.current.query)&&(r.current=new kn(e,t,r.current));var s=r.current,n=Q.useState(0);n[0];var o=n[1];return s.forceUpdate=function(){o(function(i){return i+1})},s}var kn=function(){function e(t,r,s){this.client=t,this.query=r,this.ssrDisabledResult=Fe({loading:!0,data:void 0,error:void 0,networkStatus:ye.loading}),this.skipStandbyResult=Fe({loading:!1,data:void 0,error:void 0,networkStatus:ye.ready}),this.toQueryResultCache=new(Pr?WeakMap:Map),Ht(r,J.Query);var n=s&&s.result,o=n&&n.data;o&&(this.previousData=o)}return e.prototype.forceUpdate=function(){__DEV__&&j.warn("Calling default no-op implementation of InternalState#forceUpdate")},e.prototype.executeQuery=function(t){var r=this,s;t.query&&Object.assign(this,{query:t.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=t);var n=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=((s=this.result)===null||s===void 0?void 0:s.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(o){var i;n.subscribe({next:function(c){i=c},error:function(){o(r.toQueryResult(r.observable.getCurrentResult()))},complete:function(){o(r.toQueryResult(i))}})})},e.prototype.useQuery=function(t){var r=this;this.renderPromises=Q.useContext(qt()).renderPromises,this.useOptions(t);var s=this.useObservableQuery(),n=gn(Q.useCallback(function(){if(r.renderPromises)return function(){};var o=function(){var u=r.result,f=s.getCurrentResult();u&&u.loading===f.loading&&u.networkStatus===f.networkStatus&&le(u.data,f.data)||r.setResult(f)},i=function(u){var f=s.last;c.unsubscribe();try{s.resetLastResults(),c=s.subscribe(o,i)}finally{s.last=f}if(!Cn.call(u,"graphQLErrors"))throw u;var m=r.result;(!m||m&&m.loading||!le(u,m.error))&&r.setResult({data:m&&m.data,error:u,loading:!1,networkStatus:ye.error})},c=s.subscribe(o,i);return function(){return setTimeout(function(){return c.unsubscribe()})}},[s,this.renderPromises,this.client.disableNetworkFetches]),function(){return r.getCurrentResult()},function(){return r.getCurrentResult()});return this.unsafeHandlePartialRefetch(n),this.toQueryResult(n)},e.prototype.useOptions=function(t){var r,s=this.createWatchQueryOptions(this.queryHookOptions=t),n=this.watchQueryOptions;le(s,n)||(this.watchQueryOptions=s,n&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=((r=this.result)===null||r===void 0?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&this.queryHookOptions.ssr===!1&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||this.watchQueryOptions.fetchPolicy==="standby"?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},e.prototype.getObsQueryOptions=function(){var t=[],r=this.client.defaultOptions.watchQuery;return r&&t.push(r),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push(Br(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(ge)},e.prototype.createWatchQueryOptions=function(t){var r;t===void 0&&(t={});var s=t.skip;t.ssr,t.onCompleted,t.onError,t.defaultOptions;var n=Qe(t,["skip","ssr","onCompleted","onError","defaultOptions"]),o=Object.assign(n,{query:this.query});if(this.renderPromises&&(o.fetchPolicy==="network-only"||o.fetchPolicy==="cache-and-network")&&(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),s){var i=o.fetchPolicy,c=i===void 0?this.getDefaultFetchPolicy():i,u=o.initialFetchPolicy,f=u===void 0?c:u;Object.assign(o,{initialFetchPolicy:f,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=((r=this.observable)===null||r===void 0?void 0:r.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},e.prototype.getDefaultFetchPolicy=function(){var t,r;return((t=this.queryHookOptions.defaultOptions)===null||t===void 0?void 0:t.fetchPolicy)||((r=this.client.defaultOptions.watchQuery)===null||r===void 0?void 0:r.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(t){},e.prototype.onError=function(t){},e.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=Q.useMemo(function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},[t]);var r=!(this.queryHookOptions.ssr===!1||this.queryHookOptions.skip);return this.renderPromises&&r&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},e.prototype.setResult=function(t){var r=this.result;r&&r.data&&(this.previousData=r.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},e.prototype.handleErrorOrCompleted=function(t){var r=this;if(!t.loading){var s=this.toApolloError(t);Promise.resolve().then(function(){s?r.onError(s):t.data&&r.onCompleted(t.data)}).catch(function(n){__DEV__&&j.warn(n)})}},e.prototype.toApolloError=function(t){return Pe(t.errors)?new Ue({graphQLErrors:t.errors}):t.error},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(t){var r=this.toQueryResultCache.get(t);if(r)return r;var s=t.data;t.partial;var n=Qe(t,["data","partial"]);return this.toQueryResultCache.set(t,r=Y(Y(Y({data:s},n),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!r.error&&Pe(t.errors)&&(r.error=new Ue({graphQLErrors:t.errors})),r},e.prototype.unsafeHandlePartialRefetch=function(t){t.partial&&this.queryHookOptions.partialRefetch&&!t.loading&&(!t.data||Object.keys(t.data).length===0)&&this.observable.options.fetchPolicy!=="cache-only"&&(Object.assign(t,{loading:!0,networkStatus:ye.refetch}),this.observable.refetch())},e}(),bn=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function z(e,t){var r,s=Q.useRef(),n=Q.useRef(),o=Q.useRef(),i=s.current?ge(t,s.current):t,c=(r=i==null?void 0:i.query)!==null&&r!==void 0?r:e;n.current=i,o.current=c;var u=Jt(Se(t&&t.client),c),f=u.useQuery(Y(Y({},i),{skip:!s.current})),m=f.observable.options.initialFetchPolicy||u.getDefaultFetchPolicy(),v=Object.assign(f,{called:!!s.current}),_=Q.useMemo(function(){for(var y={},l=function(T){var M=v[T];y[T]=function(){return s.current||(s.current=Object.create(null),u.forceUpdate()),M.apply(this,arguments)}},N=0,A=bn;N<A.length;N++){var x=A[N];l(x)}return y},[]);Object.assign(v,_);var D=Q.useCallback(function(y){s.current=y?Y(Y({},y),{fetchPolicy:y.fetchPolicy||m}):{fetchPolicy:m};var l=ge(n.current,Y({query:o.current},s.current)),N=u.executeQuery(Y(Y({},l),{skip:!1})).then(function(A){return Object.assign(A,_)});return N.catch(function(){}),N},[]);return[D,v]}function H(e,t){var r=Se(t==null?void 0:t.client);Ht(e,J.Mutation);var s=Q.useState({called:!1,loading:!1,client:r}),n=s[0],o=s[1],i=Q.useRef({result:n,mutationId:0,isMounted:!0,client:r,mutation:e,options:t});Object.assign(i.current,{client:r,options:t,mutation:e});var c=Q.useCallback(function(f){f===void 0&&(f={});var m=i.current,v=m.options,_=m.mutation,D=Y(Y({},v),{mutation:_}),y=f.client||i.current.client;!i.current.result.loading&&!D.ignoreResults&&i.current.isMounted&&o(i.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:y});var l=++i.current.mutationId,N=ge(D,f);return y.mutate(N).then(function(A){var x,T=A.data,M=A.errors,R=M&&M.length>0?new Ue({graphQLErrors:M}):void 0;if(l===i.current.mutationId&&!N.ignoreResults){var F={called:!0,loading:!1,data:T,error:R,client:y};i.current.isMounted&&!le(i.current.result,F)&&o(i.current.result=F)}var P=f.onCompleted||((x=i.current.options)===null||x===void 0?void 0:x.onCompleted);return P==null||P(A.data,N),A}).catch(function(A){var x;if(l===i.current.mutationId&&i.current.isMounted){var T={loading:!1,error:A,data:void 0,called:!0,client:y};le(i.current.result,T)||o(i.current.result=T)}var M=f.onError||((x=i.current.options)===null||x===void 0?void 0:x.onError);if(M)return M(A,N),{data:void 0,errors:A};throw A})},[]),u=Q.useCallback(function(){i.current.isMounted&&o({called:!1,loading:!1,client:r})},[]);return Q.useEffect(function(){return i.current.isMounted=!0,function(){i.current.isMounted=!1}},[]),[c,Y({reset:u},n)]}const En=()=>Rr("div",{className:"flex items-center justify-center space-x-10",children:[Ne("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full",style:{animationDelay:"-0.32s"}}),Ne("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full",style:{animationDelay:"-0.16s"}}),Ne("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full"})]});En.displayName="LoadingDots";var Nn=(e=>(e.Membership="membership",e))(Nn||{}),Dn=(e=>(e.Calendar="calendar",e.Grid="grid",e.List="list",e))(Dn||{}),de=(e=>(e.Article="article",e.Bundle="bundle",e.Course="course",e.CourseGroup="courseGroup",e.DiscountGroup="discountGroup",e.InPersonEvent="inPersonEvent",e.InPersonEventCourse="inPersonEventCourse",e.LearningPath="learningPath",e.MicroCourse="microCourse",e.PickableGroup="pickableGroup",e.Product="product",e.Sellable="sellable",e.ShareableContentObject="shareableContentObject",e.Video="video",e.Webinar="webinar",e.WebinarCourse="webinarCourse",e.XApiObject="xApiObject",e))(de||{}),In=(e=>(e.CourseStartDate="courseStartDate",e.CreatedAt="createdAt",e.DisplayDate="displayDate",e.Label="label",e.LastActiveAt="lastActiveAt",e.Name="name",e.ParentName="parentName",e.PublishDate="publishDate",e.Relevance="relevance",e.Title="title",e.UpdatedAt="updatedAt",e))(In||{}),Un=(e=>(e.Asc="asc",e.Desc="desc",e))(Un||{});const be=I`
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
`,An=I`
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
`,xn=I`
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
`,Kt={},Zt=I`
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
  ${be}
  ${An}
  ${xn}
`;function Ve(e){const t={...Kt,...e};return q(Zt,t)}function Ge(e){const t={...Kt,...e};return z(Zt,t)}try{Ve.displayName="useCatalogContentQuery",Ve.__docgenInfo={description:"__useCatalogContentQuery__\n\nTo run a query within a React component, call `useCatalogContentQuery` and pass it any options that fit your needs.\nWhen your component renders, `useCatalogContentQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useCatalogContentQuery",props:{}}}catch{}try{Ge.displayName="useCatalogContentLazyQuery",Ge.__docgenInfo={description:"",displayName:"useCatalogContentLazyQuery",props:{}}}catch{}const Xt={},er=I`
  query Catalog($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...ContentFragment
      }
    }
  }
  ${be}
`;function He(e){const t={...Xt,...e};return q(er,t)}function Je(e){const t={...Xt,...e};return z(er,t)}try{He.displayName="useCatalogQuery",He.__docgenInfo={description:"__useCatalogQuery__\n\nTo run a query within a React component, call `useCatalogQuery` and pass it any options that fit your needs.\nWhen your component renders, `useCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useCatalogQuery",props:{}}}catch{}try{Je.displayName="useCatalogLazyQuery",Je.__docgenInfo={description:"",displayName:"useCatalogLazyQuery",props:{}}}catch{}const tr={},rr=I`
  query LanguagesQuery {
    Languages {
      id
      label
      code
      isCustom
      selectorLabel
    }
  }
`;function Ke(e){const t={...tr,...e};return q(rr,t)}function Ze(e){const t={...tr,...e};return z(rr,t)}try{Ke.displayName="useLanguagesQueryQuery",Ke.__docgenInfo={description:"__useLanguagesQueryQuery__\n\nTo run a query within a React component, call `useLanguagesQueryQuery` and pass it any options that fit your needs.\nWhen your component renders, `useLanguagesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useLanguagesQueryQuery",props:{}}}catch{}try{Ze.displayName="useLanguagesQueryLazyQuery",Ze.__docgenInfo={description:"",displayName:"useLanguagesQueryLazyQuery",props:{}}}catch{}const nr={},sr=I`
  query Contents($ids: [ID!]!) {
    QueryContents(ids: $ids) {
      ...ContentFragment
    }
  }
  ${be}
`;function Xe(e){const t={...nr,...e};return q(sr,t)}function et(e){const t={...nr,...e};return z(sr,t)}try{Xe.displayName="useContentsQuery",Xe.__docgenInfo={description:"__useContentsQuery__\n\nTo run a query within a React component, call `useContentsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useContentsQuery",props:{}}}catch{}try{et.displayName="useContentsLazyQuery",et.__docgenInfo={description:"",displayName:"useContentsLazyQuery",props:{}}}catch{}const or={},ir=I`
  query RssItems($feedUrl: String!) {
    RssItems(feedUrl: $feedUrl) {
      title
      link
    }
  }
`;function tt(e){const t={...or,...e};return q(ir,t)}function rt(e){const t={...or,...e};return z(ir,t)}try{tt.displayName="useRssItemsQuery",tt.__docgenInfo={description:"__useRssItemsQuery__\n\nTo run a query within a React component, call `useRssItemsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useRssItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useRssItemsQuery",props:{}}}catch{}try{rt.displayName="useRssItemsLazyQuery",rt.__docgenInfo={description:"",displayName:"useRssItemsLazyQuery",props:{}}}catch{}const ar={},ur=I`
  query UserRecentContent($limit: Int) {
    UserRecentContent(limit: $limit) {
      ...ContentFragment
    }
  }
  ${be}
`;function nt(e){const t={...ar,...e};return q(ur,t)}function st(e){const t={...ar,...e};return z(ur,t)}try{nt.displayName="useUserRecentContentQuery",nt.__docgenInfo={description:"__useUserRecentContentQuery__\n\nTo run a query within a React component, call `useUserRecentContentQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserRecentContentQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserRecentContentQuery",props:{}}}catch{}try{st.displayName="useUserRecentContentLazyQuery",st.__docgenInfo={description:"",displayName:"useUserRecentContentLazyQuery",props:{}}}catch{}const cr={},lr=I`
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
`;function ot(e){const t={...cr,...e};return q(lr,t)}function it(e){const t={...cr,...e};return z(lr,t)}try{ot.displayName="useUserContentItemsQuery",ot.__docgenInfo={description:"__useUserContentItemsQuery__\n\nTo run a query within a React component, call `useUserContentItemsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserContentItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserContentItemsQuery",props:{}}}catch{}try{it.displayName="useUserContentItemsLazyQuery",it.__docgenInfo={description:"",displayName:"useUserContentItemsLazyQuery",props:{}}}catch{}const dr={},pr=I`
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
`;function at(e){const t={...dr,...e};return q(pr,t)}function ut(e){const t={...dr,...e};return z(pr,t)}try{at.displayName="useUserArchivesQuery",at.__docgenInfo={description:"__useUserArchivesQuery__\n\nTo run a query within a React component, call `useUserArchivesQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserArchivesQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserArchivesQuery",props:{}}}catch{}try{ut.displayName="useUserArchivesLazyQuery",ut.__docgenInfo={description:"",displayName:"useUserArchivesLazyQuery",props:{}}}catch{}const hr={},yr=I`
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
`;function ct(e){const t={...hr,...e};return q(yr,t)}function lt(e){const t={...hr,...e};return z(yr,t)}try{ct.displayName="useUserWaitlistQuery",ct.__docgenInfo={description:"__useUserWaitlistQuery__\n\nTo run a query within a React component, call `useUserWaitlistQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserWaitlistQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserWaitlistQuery",props:{}}}catch{}try{lt.displayName="useUserWaitlistLazyQuery",lt.__docgenInfo={description:"",displayName:"useUserWaitlistLazyQuery",props:{}}}catch{}const fr={},mr=I`
  query UserBookmarks {
    UserBookmarks {
      id
      name
      defaultFolder
      bookmarkCount
    }
  }
`;function dt(e){const t={...fr,...e};return q(mr,t)}function pt(e){const t={...fr,...e};return z(mr,t)}try{dt.displayName="useUserBookmarksQuery",dt.__docgenInfo={description:"__useUserBookmarksQuery__\n\nTo run a query within a React component, call `useUserBookmarksQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserBookmarksQuery",props:{}}}catch{}try{pt.displayName="useUserBookmarksLazyQuery",pt.__docgenInfo={description:"",displayName:"useUserBookmarksLazyQuery",props:{}}}catch{}const _r={},gr=I`
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
`;function ht(e){const t={..._r,...e};return q(gr,t)}function yt(e){const t={..._r,...e};return z(gr,t)}try{ht.displayName="useUserCertificatesQuery",ht.__docgenInfo={description:"__useUserCertificatesQuery__\n\nTo run a query within a React component, call `useUserCertificatesQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCertificatesQuery",props:{}}}catch{}try{yt.displayName="useUserCertificatesLazyQuery",yt.__docgenInfo={description:"",displayName:"useUserCertificatesLazyQuery",props:{}}}catch{}const vr={},Cr=I`
  query ContentGroups($query: String, $includeExpiredCertificates: Boolean) {
    UserContentGroups(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      kind
      count
    }
  }
`;function ft(e){const t={...vr,...e};return q(Cr,t)}function mt(e){const t={...vr,...e};return z(Cr,t)}try{ft.displayName="useContentGroupsQuery",ft.__docgenInfo={description:"__useContentGroupsQuery__\n\nTo run a query within a React component, call `useContentGroupsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useContentGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useContentGroupsQuery",props:{}}}catch{}try{mt.displayName="useContentGroupsLazyQuery",mt.__docgenInfo={description:"",displayName:"useContentGroupsLazyQuery",props:{}}}catch{}const kr={},br=I`
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
`;function _t(e){const t={...kr,...e};return q(br,t)}function gt(e){const t={...kr,...e};return z(br,t)}try{_t.displayName="useUserBookmarksByFolderQuery",_t.__docgenInfo={description:"__useUserBookmarksByFolderQuery__\n\nTo run a query within a React component, call `useUserBookmarksByFolderQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserBookmarksByFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserBookmarksByFolderQuery",props:{}}}catch{}try{gt.displayName="useUserBookmarksByFolderLazyQuery",gt.__docgenInfo={description:"",displayName:"useUserBookmarksByFolderLazyQuery",props:{}}}catch{}const Er={},Nr=I`
  query UserCourseCompletionProgress($id: ID!) {
    UserCourseCompletionProgress(id: $id) {
      type
      required
      completed
      percent
    }
  }
`;function vt(e){const t={...Er,...e};return q(Nr,t)}function Ct(e){const t={...Er,...e};return z(Nr,t)}try{vt.displayName="useUserCourseCompletionProgressQuery",vt.__docgenInfo={description:"__useUserCourseCompletionProgressQuery__\n\nTo run a query within a React component, call `useUserCourseCompletionProgressQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseCompletionProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseCompletionProgressQuery",props:{}}}catch{}try{Ct.displayName="useUserCourseCompletionProgressLazyQuery",Ct.__docgenInfo={description:"",displayName:"useUserCourseCompletionProgressLazyQuery",props:{}}}catch{}const Dr={},Ir=I`
  query UserCourseProgress($id: ID!) {
    UserCourseProgress(id: $id) {
      totalViews
      totalTime
      percentComplete
    }
  }
`;function kt(e){const t={...Dr,...e};return q(Ir,t)}function bt(e){const t={...Dr,...e};return z(Ir,t)}try{kt.displayName="useUserCourseProgressQuery",kt.__docgenInfo={description:"__useUserCourseProgressQuery__\n\nTo run a query within a React component, call `useUserCourseProgressQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseProgressQuery",props:{}}}catch{}try{bt.displayName="useUserCourseProgressLazyQuery",bt.__docgenInfo={description:"",displayName:"useUserCourseProgressLazyQuery",props:{}}}catch{}const Ur={},Ar=I`
  query UserCourseAwardCounts($courseId: ID!) {
    UserCourseAwardCounts(courseId: $courseId) {
      id
      label
      icon
      count
    }
  }
`;function Et(e){const t={...Ur,...e};return q(Ar,t)}function Nt(e){const t={...Ur,...e};return z(Ar,t)}try{Et.displayName="useUserCourseAwardCountsQuery",Et.__docgenInfo={description:"__useUserCourseAwardCountsQuery__\n\nTo run a query within a React component, call `useUserCourseAwardCountsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseAwardCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseAwardCountsQuery",props:{}}}catch{}try{Nt.displayName="useUserCourseAwardCountsLazyQuery",Nt.__docgenInfo={description:"",displayName:"useUserCourseAwardCountsLazyQuery",props:{}}}catch{}const xr={},Tr=I`
  query UserCourseCollaborations($courseId: ID!) {
    UserCourseCollaborations(courseId: $courseId)
  }
`;function Dt(e){const t={...xr,...e};return q(Tr,t)}function It(e){const t={...xr,...e};return z(Tr,t)}try{Dt.displayName="useUserCourseCollaborationsQuery",Dt.__docgenInfo={description:"__useUserCourseCollaborationsQuery__\n\nTo run a query within a React component, call `useUserCourseCollaborationsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseCollaborationsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseCollaborationsQuery",props:{}}}catch{}try{It.displayName="useUserCourseCollaborationsLazyQuery",It.__docgenInfo={description:"",displayName:"useUserCourseCollaborationsLazyQuery",props:{}}}catch{}const Or={},$r=I`
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
`;function Ut(e){const t={...Or,...e};return q($r,t)}function At(e){const t={...Or,...e};return z($r,t)}try{Ut.displayName="useUserCertificateFieldsQuery",Ut.__docgenInfo={description:"__useUserCertificateFieldsQuery__\n\nTo run a query within a React component, call `useUserCertificateFieldsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCertificateFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCertificateFieldsQuery",props:{}}}catch{}try{At.displayName="useUserCertificateFieldsLazyQuery",At.__docgenInfo={description:"",displayName:"useUserCertificateFieldsLazyQuery",props:{}}}catch{}const Tn={},On=I`
  mutation AddResourceToQueue($resourceType: ContentKind, $resourceId: ID!) {
    AddResourceToQueue(resourceType: $resourceType, resourceId: $resourceId)
  }
`;function xt(e){const t={...Tn,...e};return H(On,t)}try{xt.displayName="useAddResourceToQueueMutation",xt.__docgenInfo={description:`__useAddResourceToQueueMutation__

To run a mutation, you first call \`useAddResourceToQueueMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useAddResourceToQueueMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useAddResourceToQueueMutation",props:{}}}catch{}const $n={},Rn=I`
  mutation ArchiveUserCourse($id: ID!) {
    ArchiveUserCourse(id: $id)
  }
`;function Tt(e){const t={...$n,...e};return H(Rn,t)}try{Tt.displayName="useArchiveUserCourseMutation",Tt.__docgenInfo={description:`__useArchiveUserCourseMutation__

To run a mutation, you first call \`useArchiveUserCourseMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useArchiveUserCourseMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useArchiveUserCourseMutation",props:{}}}catch{}const Ln={},Mn=I`
  mutation ArchiveUserLearningPath($id: ID!) {
    ArchiveUserLearningPath(id: $id)
  }
`;function Ot(e){const t={...Ln,...e};return H(Mn,t)}try{Ot.displayName="useArchiveUserLearningPathMutation",Ot.__docgenInfo={description:`__useArchiveUserLearningPathMutation__

To run a mutation, you first call \`useArchiveUserLearningPathMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useArchiveUserLearningPathMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useArchiveUserLearningPathMutation",props:{}}}catch{}const Sn={},wn=I`
  mutation ReinstateUserLearningPath($id: ID!) {
    ReinstateUserLearningPath(id: $id)
  }
`;function $t(e){const t={...Sn,...e};return H(wn,t)}try{$t.displayName="useReinstateUserLearningPathMutation",$t.__docgenInfo={description:`__useReinstateUserLearningPathMutation__

To run a mutation, you first call \`useReinstateUserLearningPathMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useReinstateUserLearningPathMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useReinstateUserLearningPathMutation",props:{}}}catch{}const Qn={},Fn=I`
  mutation ReinstateUserCourse($id: ID!) {
    ReinstateUserCourse(id: $id)
  }
`;function Rt(e){const t={...Qn,...e};return H(Fn,t)}try{Rt.displayName="useReinstateUserCourseMutation",Rt.__docgenInfo={description:`__useReinstateUserCourseMutation__

To run a mutation, you first call \`useReinstateUserCourseMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useReinstateUserCourseMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useReinstateUserCourseMutation",props:{}}}catch{}const Pn={},Bn=I`
  mutation UnenrollFromWaitlist($id: ID!) {
    UnenrollFromWaitlist(id: $id)
  }
`;function Lt(e){const t={...Pn,...e};return H(Bn,t)}try{Lt.displayName="useUnenrollFromWaitlistMutation",Lt.__docgenInfo={description:`__useUnenrollFromWaitlistMutation__

To run a mutation, you first call \`useUnenrollFromWaitlistMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUnenrollFromWaitlistMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUnenrollFromWaitlistMutation",props:{}}}catch{}const qn={},zn=I`
  mutation UpdateBookmarkFolder($id: ID!, $name: String!) {
    UpdateBookmarkFolder(id: $id, name: $name) {
      id
      name
    }
  }
`;function Mt(e){const t={...qn,...e};return H(zn,t)}try{Mt.displayName="useUpdateBookmarkFolderMutation",Mt.__docgenInfo={description:`__useUpdateBookmarkFolderMutation__

To run a mutation, you first call \`useUpdateBookmarkFolderMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUpdateBookmarkFolderMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUpdateBookmarkFolderMutation",props:{}}}catch{}const Wn={},jn=I`
  mutation DestroyBookmarkFolder($id: ID!) {
    DestroyBookmarkFolder(id: $id)
  }
`;function St(e){const t={...Wn,...e};return H(jn,t)}try{St.displayName="useDestroyBookmarkFolderMutation",St.__docgenInfo={description:`__useDestroyBookmarkFolderMutation__

To run a mutation, you first call \`useDestroyBookmarkFolderMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useDestroyBookmarkFolderMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useDestroyBookmarkFolderMutation",props:{}}}catch{}const Yn={},Vn=I`
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
`;function wt(e){const t={...Yn,...e};return H(Vn,t)}try{wt.displayName="useCreateCertificateFromUploadMutation",wt.__docgenInfo={description:`__useCreateCertificateFromUploadMutation__

To run a mutation, you first call \`useCreateCertificateFromUploadMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useCreateCertificateFromUploadMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useCreateCertificateFromUploadMutation",props:{}}}catch{}const Gn={},Hn=I`
  mutation UpdateBookmark($id: ID!, $note: String, $bookmarkFolder: ID!) {
    UpdateBookmark(id: $id, note: $note, bookmarkFolder: $bookmarkFolder) {
      id
    }
  }
`;function Qt(e){const t={...Gn,...e};return H(Hn,t)}try{Qt.displayName="useUpdateBookmarkMutation",Qt.__docgenInfo={description:`__useUpdateBookmarkMutation__

To run a mutation, you first call \`useUpdateBookmarkMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUpdateBookmarkMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUpdateBookmarkMutation",props:{}}}catch{}const Jn={},Kn=I`
  mutation DestroyBookmark($id: ID!) {
    DestroyBookmark(id: $id)
  }
`;function Ft(e){const t={...Jn,...e};return H(Kn,t)}try{Ft.displayName="useDestroyBookmarkMutation",Ft.__docgenInfo={description:`__useDestroyBookmarkMutation__

To run a mutation, you first call \`useDestroyBookmarkMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useDestroyBookmarkMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useDestroyBookmarkMutation",props:{}}}catch{}var Oe={},Zn={get exports(){return Oe},set exports(e){Oe=e}};(function(e,t){(function(r,s){e.exports=s()})(Ce,function(){var r=1e3,s=6e4,n=36e5,o="millisecond",i="second",c="minute",u="hour",f="day",m="week",v="month",_="quarter",D="year",y="date",l="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,A=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,x={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(C){var h=["th","st","nd","rd"],d=C%100;return"["+C+(h[(d-20)%10]||h[d]||h[0])+"]"}},T=function(C,h,d){var k=String(C);return!k||k.length>=h?C:""+Array(h+1-k.length).join(d)+C},M={s:T,z:function(C){var h=-C.utcOffset(),d=Math.abs(h),k=Math.floor(d/60),p=d%60;return(h<=0?"+":"-")+T(k,2,"0")+":"+T(p,2,"0")},m:function C(h,d){if(h.date()<d.date())return-C(d,h);var k=12*(d.year()-h.year())+(d.month()-h.month()),p=h.clone().add(k,v),E=d-p<0,b=h.clone().add(k+(E?-1:1),v);return+(-(k+(d-p)/(E?p-b:b-p))||0)},a:function(C){return C<0?Math.ceil(C)||0:Math.floor(C)},p:function(C){return{M:v,y:D,w:m,d:f,D:y,h:u,m:c,s:i,ms:o,Q:_}[C]||String(C||"").toLowerCase().replace(/s$/,"")},u:function(C){return C===void 0}},R="en",F={};F[R]=x;var P=function(C){return C instanceof Z},G=function C(h,d,k){var p;if(!h)return R;if(typeof h=="string"){var E=h.toLowerCase();F[E]&&(p=E),d&&(F[E]=d,p=E);var b=h.split("-");if(!p&&b.length>1)return C(b[0])}else{var O=h.name;F[O]=h,p=O}return!k&&p&&(R=p),p||!k&&R},$=function(C,h){if(P(C))return C.clone();var d=typeof h=="object"?h:{};return d.date=C,d.args=arguments,new Z(d)},U=M;U.l=G,U.i=P,U.w=function(C,h){return $(C,{locale:h.$L,utc:h.$u,x:h.$x,$offset:h.$offset})};var Z=function(){function C(d){this.$L=G(d.locale,null,!0),this.parse(d)}var h=C.prototype;return h.parse=function(d){this.$d=function(k){var p=k.date,E=k.utc;if(p===null)return new Date(NaN);if(U.u(p))return new Date;if(p instanceof Date)return new Date(p);if(typeof p=="string"&&!/Z$/i.test(p)){var b=p.match(N);if(b){var O=b[2]-1||0,S=(b[7]||"0").substring(0,3);return E?new Date(Date.UTC(b[1],O,b[3]||1,b[4]||0,b[5]||0,b[6]||0,S)):new Date(b[1],O,b[3]||1,b[4]||0,b[5]||0,b[6]||0,S)}}return new Date(p)}(d),this.$x=d.x||{},this.init()},h.init=function(){var d=this.$d;this.$y=d.getFullYear(),this.$M=d.getMonth(),this.$D=d.getDate(),this.$W=d.getDay(),this.$H=d.getHours(),this.$m=d.getMinutes(),this.$s=d.getSeconds(),this.$ms=d.getMilliseconds()},h.$utils=function(){return U},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(d,k){var p=$(d);return this.startOf(k)<=p&&p<=this.endOf(k)},h.isAfter=function(d,k){return $(d)<this.startOf(k)},h.isBefore=function(d,k){return this.endOf(k)<$(d)},h.$g=function(d,k,p){return U.u(d)?this[k]:this.set(p,d)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(d,k){var p=this,E=!!U.u(k)||k,b=U.p(d),O=function(ne,V){var ee=U.w(p.$u?Date.UTC(p.$y,V,ne):new Date(p.$y,V,ne),p);return E?ee:ee.endOf(f)},S=function(ne,V){return U.w(p.toDate()[ne].apply(p.toDate("s"),(E?[0,0,0,0]:[23,59,59,999]).slice(V)),p)},L=this.$W,W=this.$M,X=this.$D,K="set"+(this.$u?"UTC":"");switch(b){case D:return E?O(1,0):O(31,11);case v:return E?O(1,W):O(0,W+1);case m:var ie=this.$locale().weekStart||0,ae=(L<ie?L+7:L)-ie;return O(E?X-ae:X+(6-ae),W);case f:case y:return S(K+"Hours",0);case u:return S(K+"Minutes",1);case c:return S(K+"Seconds",2);case i:return S(K+"Milliseconds",3);default:return this.clone()}},h.endOf=function(d){return this.startOf(d,!1)},h.$set=function(d,k){var p,E=U.p(d),b="set"+(this.$u?"UTC":""),O=(p={},p[f]=b+"Date",p[y]=b+"Date",p[v]=b+"Month",p[D]=b+"FullYear",p[u]=b+"Hours",p[c]=b+"Minutes",p[i]=b+"Seconds",p[o]=b+"Milliseconds",p)[E],S=E===f?this.$D+(k-this.$W):k;if(E===v||E===D){var L=this.clone().set(y,1);L.$d[O](S),L.init(),this.$d=L.set(y,Math.min(this.$D,L.daysInMonth())).$d}else O&&this.$d[O](S);return this.init(),this},h.set=function(d,k){return this.clone().$set(d,k)},h.get=function(d){return this[U.p(d)]()},h.add=function(d,k){var p,E=this;d=Number(d);var b=U.p(k),O=function(W){var X=$(E);return U.w(X.date(X.date()+Math.round(W*d)),E)};if(b===v)return this.set(v,this.$M+d);if(b===D)return this.set(D,this.$y+d);if(b===f)return O(1);if(b===m)return O(7);var S=(p={},p[c]=s,p[u]=n,p[i]=r,p)[b]||1,L=this.$d.getTime()+d*S;return U.w(L,this)},h.subtract=function(d,k){return this.add(-1*d,k)},h.format=function(d){var k=this,p=this.$locale();if(!this.isValid())return p.invalidDate||l;var E=d||"YYYY-MM-DDTHH:mm:ssZ",b=U.z(this),O=this.$H,S=this.$m,L=this.$M,W=p.weekdays,X=p.months,K=function(V,ee,Ee,pe){return V&&(V[ee]||V(k,E))||Ee[ee].slice(0,pe)},ie=function(V){return U.s(O%12||12,V,"0")},ae=p.meridiem||function(V,ee,Ee){var pe=V<12?"AM":"PM";return Ee?pe.toLowerCase():pe},ne={YY:String(this.$y).slice(-2),YYYY:this.$y,M:L+1,MM:U.s(L+1,2,"0"),MMM:K(p.monthsShort,L,X,3),MMMM:K(X,L),D:this.$D,DD:U.s(this.$D,2,"0"),d:String(this.$W),dd:K(p.weekdaysMin,this.$W,W,2),ddd:K(p.weekdaysShort,this.$W,W,3),dddd:W[this.$W],H:String(O),HH:U.s(O,2,"0"),h:ie(1),hh:ie(2),a:ae(O,S,!0),A:ae(O,S,!1),m:String(S),mm:U.s(S,2,"0"),s:String(this.$s),ss:U.s(this.$s,2,"0"),SSS:U.s(this.$ms,3,"0"),Z:b};return E.replace(A,function(V,ee){return ee||ne[V]||b.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(d,k,p){var E,b=U.p(k),O=$(d),S=(O.utcOffset()-this.utcOffset())*s,L=this-O,W=U.m(this,O);return W=(E={},E[D]=W/12,E[v]=W,E[_]=W/3,E[m]=(L-S)/6048e5,E[f]=(L-S)/864e5,E[u]=L/n,E[c]=L/s,E[i]=L/r,E)[b]||L,p?W:U.a(W)},h.daysInMonth=function(){return this.endOf(v).$D},h.$locale=function(){return F[this.$L]},h.locale=function(d,k){if(!d)return this.$L;var p=this.clone(),E=G(d,k,!0);return E&&(p.$L=E),p},h.clone=function(){return U.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},C}(),we=Z.prototype;return $.prototype=we,[["$ms",o],["$s",i],["$m",c],["$H",u],["$W",f],["$M",v],["$y",D],["$D",y]].forEach(function(C){we[C[1]]=function(h){return this.$g(h,C[0],C[1])}}),$.extend=function(C,h){return C.$i||(C(h,Z,$),C.$i=!0),$},$.locale=G,$.isDayjs=P,$.unix=function(C){return $(1e3*C)},$.en=F[R],$.Ls=F,$.p={},$})})(Zn);const se=Oe;var $e={},Xn={get exports(){return $e},set exports(e){$e=e}};(function(e,t){(function(r,s){e.exports=s()})(Ce,function(){return function(r,s){var n=s.prototype,o=n.format;n.format=function(i){var c=this,u=this.$locale();if(!this.isValid())return o.bind(this)(i);var f=this.$utils(),m=(i||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(v){switch(v){case"Q":return Math.ceil((c.$M+1)/3);case"Do":return u.ordinal(c.$D);case"gggg":return c.weekYear();case"GGGG":return c.isoWeekYear();case"wo":return u.ordinal(c.week(),"W");case"w":case"ww":return f.s(c.week(),v==="w"?1:2,"0");case"W":case"WW":return f.s(c.isoWeek(),v==="W"?1:2,"0");case"k":case"kk":return f.s(String(c.$H===0?24:c.$H),v==="k"?1:2,"0");case"X":return Math.floor(c.$d.getTime()/1e3);case"x":return c.$d.getTime();case"z":return"["+c.offsetName()+"]";case"zzz":return"["+c.offsetName("long")+"]";default:return v}});return o.bind(this)(m)}}})})(Xn);const es=$e;var Re={},ts={get exports(){return Re},set exports(e){Re=e}};(function(e,t){(function(r,s){e.exports=s()})(Ce,function(){var r="minute",s=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(o,i,c){var u=i.prototype;c.utc=function(l){var N={date:l,utc:!0,args:arguments};return new i(N)},u.utc=function(l){var N=c(this.toDate(),{locale:this.$L,utc:!0});return l?N.add(this.utcOffset(),r):N},u.local=function(){return c(this.toDate(),{locale:this.$L,utc:!1})};var f=u.parse;u.parse=function(l){l.utc&&(this.$u=!0),this.$utils().u(l.$offset)||(this.$offset=l.$offset),f.call(this,l)};var m=u.init;u.init=function(){if(this.$u){var l=this.$d;this.$y=l.getUTCFullYear(),this.$M=l.getUTCMonth(),this.$D=l.getUTCDate(),this.$W=l.getUTCDay(),this.$H=l.getUTCHours(),this.$m=l.getUTCMinutes(),this.$s=l.getUTCSeconds(),this.$ms=l.getUTCMilliseconds()}else m.call(this)};var v=u.utcOffset;u.utcOffset=function(l,N){var A=this.$utils().u;if(A(l))return this.$u?0:A(this.$offset)?v.call(this):this.$offset;if(typeof l=="string"&&(l=function(R){R===void 0&&(R="");var F=R.match(s);if(!F)return null;var P=(""+F[0]).match(n)||["-",0,0],G=P[0],$=60*+P[1]+ +P[2];return $===0?0:G==="+"?$:-$}(l),l===null))return this;var x=Math.abs(l)<=16?60*l:l,T=this;if(N)return T.$offset=x,T.$u=l===0,T;if(l!==0){var M=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(T=this.local().add(x+M,r)).$offset=x,T.$x.$localOffset=M}else T=this.utc();return T};var _=u.format;u.format=function(l){var N=l||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return _.call(this,N)},u.valueOf=function(){var l=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*l},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var D=u.toDate;u.toDate=function(l){return l==="s"&&this.$offset?c(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():D.call(this)};var y=u.diff;u.diff=function(l,N,A){if(l&&this.$u===l.$u)return y.call(this,l,N,A);var x=this.local(),T=c(l).local();return y.call(x,T,N,A)}}})})(ts);const rs=Re;var Le={},ns={get exports(){return Le},set exports(e){Le=e}};(function(e,t){(function(r,s){e.exports=s()})(Ce,function(){var r={year:0,month:1,day:2,hour:3,minute:4,second:5},s={};return function(n,o,i){var c,u=function(_,D,y){y===void 0&&(y={});var l=new Date(_),N=function(A,x){x===void 0&&(x={});var T=x.timeZoneName||"short",M=A+"|"+T,R=s[M];return R||(R=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:A,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:T}),s[M]=R),R}(D,y);return N.formatToParts(l)},f=function(_,D){for(var y=u(_,D),l=[],N=0;N<y.length;N+=1){var A=y[N],x=A.type,T=A.value,M=r[x];M>=0&&(l[M]=parseInt(T,10))}var R=l[3],F=R===24?0:R,P=l[0]+"-"+l[1]+"-"+l[2]+" "+F+":"+l[4]+":"+l[5]+":000",G=+_;return(i.utc(P).valueOf()-(G-=G%1e3))/6e4},m=o.prototype;m.tz=function(_,D){_===void 0&&(_=c);var y=this.utcOffset(),l=this.toDate(),N=l.toLocaleString("en-US",{timeZone:_}),A=Math.round((l-new Date(N))/1e3/60),x=i(N).$set("millisecond",this.$ms).utcOffset(15*-Math.round(l.getTimezoneOffset()/15)-A,!0);if(D){var T=x.utcOffset();x=x.add(y-T,"minute")}return x.$x.$timezone=_,x},m.offsetName=function(_){var D=this.$x.$timezone||i.tz.guess(),y=u(this.valueOf(),D,{timeZoneName:_}).find(function(l){return l.type.toLowerCase()==="timezonename"});return y&&y.value};var v=m.startOf;m.startOf=function(_,D){if(!this.$x||!this.$x.$timezone)return v.call(this,_,D);var y=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return v.call(y,_,D).tz(this.$x.$timezone,!0)},i.tz=function(_,D,y){var l=y&&D,N=y||D||c,A=f(+i(),N);if(typeof _!="string")return i(_).tz(N);var x=function(F,P,G){var $=F-60*P*1e3,U=f($,G);if(P===U)return[$,P];var Z=f($-=60*(U-P)*1e3,G);return U===Z?[$,U]:[F-60*Math.min(U,Z)*1e3,Math.max(U,Z)]}(i.utc(_,l).valueOf(),A,N),T=x[0],M=x[1],R=i(T).utcOffset(M);return R.$x.$timezone=N,R},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(_){c=_}}})})(ns);const ss=Le,os="America/New_York";se.extend(es);se.extend(rs);se.extend(ss);const te=(e,t,r)=>{const s=t??os;return se(e).tz(s).format(r)},is=[de.Webinar,de.WebinarCourse],as=[de.InPersonEvent,de.InPersonEventCourse];function ps(e,t,r,s){return e&&(as.includes(e)||is.includes(e))?r?se(t).isSame(se(r),"day")?`${te(t,s,"ddd, MMM Do YYYY hh:mm a")} – ${te(r,s,"hh:mm a z")}`:`${te(t,s,"ddd, MMM Do YYYY hh:mm a")} – ${te(r,s,"ddd, MMM Do YYYY hh:mm a z")}`:`${te(t,s,"ddd, MMM Do YYYY hh:mm a z")}`:r?`${te(t,s,"MMM Do YYYY")} – ${te(r,s,"MMM Do YYYY")}`:te(t,s,"MMM Do YYYY")}export{On as A,Dn as C,Me as G,En as L,ir as R,In as S,ur as U,z as a,Un as b,Ve as c,Ke as d,se as e,te as f,I as g,de as h,xt as i,Zt as j,rr as k,er as l,sr as m,He as n,Xe as o,nt as p,Nn as q,ps as r,tt as s,H as t,q as u};
//# sourceMappingURL=course-run-b6de0228.js.map
