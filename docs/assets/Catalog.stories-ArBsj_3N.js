import{r as m,R as e}from"./index-GiUgBvb1.js";import{S as F,e as x,g as R,h as He,f as ae,L as wa,C as ra,A as ha,u as ge}from"./course-run-CxLdYtOz.js";import{o as na,p as Ca,q as Ma,r as Aa}from"./content-header-CR2oX5EZ.js";import{a as ta,u as Ta}from"./use-on-click-outside-DGwnJOHq.js";import{H as Da}from"./header--esLRM0g.js";import{t as I,P as Ea}from"./pagination-BuHQ5sVy.js";import{u as _}from"./useTranslation-GxpaL4ro.js";import{h as Ia}from"./hydrate-content-CJGXV85J.js";import"./ApolloContext-C-0_jjk0.js";import"./context-C7Y_GhY_.js";const ce=r=>r.reduce((a,{label:n,value:t})=>(a.labels.push(n),a.values.push(t),a),{labels:[],values:[]}),sa=1,Pa=48,la=":",ue={page:sa,aggregationFilters:[],contentTypes:[],results:[],aggregations:[],hasMore:!1,isCurated:!1,enabledSorts:[],enabledDisplayTypes:[],resultContentTypes:[],contentTypeFilterEnabled:!1,displayStartDateEnabled:!1,displayAuthorsEnabled:!1,displayDescriptionOnCalendar:!1,pageSize:Pa},ia=r=>{const{page:a=sa,token:n,sort:t,displayType:s,resultsDisplayType:l,aggregationFilters:i,searchTerm:o,contentTypes:c}=r,u=t==null?void 0:t.field,g=t==null?void 0:t.direction,d=s||l,y=ce(i);return{page:a,sortColumn:u,sortDirection:g,resultsDisplayType:d,token:n,contentTypes:c,query:o,labels:y.labels,values:y.values}},Na=r=>{if(!r)return;const a=r.split(la);if(!a.length)return;const n=a[0];if(!n)return;const t=a.length>1?a[1]:void 0;return{field:n,direction:t}},xa=({sortUpdatedAtEnabled:r,sortCreatedAtEnabled:a,sortTitleEnabled:n,sortPublishDateEnabled:t,sortCourseStartDateEnabled:s,sortRelevanceEnabled:l})=>{const i=[];return r&&i.push({field:x.UpdatedAt,direction:F.Desc}),a&&i.push({field:x.CreatedAt,direction:F.Desc}),n&&i.push({field:x.Title,direction:F.Asc}),t&&i.push({field:x.PublishDate,direction:F.Desc}),s&&i.push({field:x.CourseStartDate,direction:F.Asc}),l&&i.push({field:x.Relevance}),i},Ra=({displayTypeListEnabled:r,displayTypeGridEnabled:a,displayTypeCalendarEnabled:n})=>{const t=[];return r&&t.push(R.List),a&&t.push(R.Grid),n&&t.push(R.Calendar),t},de=(r,a)=>{if(a||!r)return{error:`An unexpected error occurred: ${a?a.message:"empty data"}`};const{meta:{displayBundle:n,tokenLabel:t,total:s,hasMore:l,isCurated:i,aggregations:o=[],contentTypes:c=[],resultsDisplayType:u,sortUpdatedAtEnabled:g,sortCreatedAtEnabled:d,sortTitleEnabled:y,sortPublishDateEnabled:p,sortCourseStartDateEnabled:f,sortRelevanceEnabled:S,displayTypeListEnabled:k,displayTypeGridEnabled:q,displayTypeCalendarEnabled:h,displayStartDateEnabled:w,displayAuthorsEnabled:b,displayDescriptionOnCalendar:M,contentTypeFilterEnabled:T,queryCustomFields:A},contentItems:C=[]}=r.CatalogContent,D=xa({sortUpdatedAtEnabled:g,sortCreatedAtEnabled:d,sortTitleEnabled:y,sortPublishDateEnabled:p,sortCourseStartDateEnabled:f,sortRelevanceEnabled:S}),E=Ra({displayTypeListEnabled:k,displayTypeGridEnabled:q,displayTypeCalendarEnabled:h});return{error:void 0,results:C,queryCustomFields:A,aggregations:o,total:s,hasMore:l,isCurated:i,tokenLabel:t,resultsDisplayType:u,enabledSorts:D,enabledDisplayTypes:E,resultContentTypes:c,displayStartDateEnabled:w,displayAuthorsEnabled:b,displayDescriptionOnCalendar:M,contentTypeFilterEnabled:T,displayBundle:n}},Ba=r=>!!r,Ua=r=>{if(typeof r=="string")return r;const{field:a,direction:n}=r;return[a,n].filter(Ba).join(la)};var v=(r=>(r.Token="token",r.SearchTerm="query",r.AggregationLabels="labels",r.AggregationValues="values",r.ContentTypes="content-types",r.DisplayType="display-type",r.Page="page",r.Sort="sort",r))(v||{});const La=r=>parseInt(r,10),_a=r=>{const a=r.get(v.Page);if(!a)return;const n=La(a);if(!(isNaN(n)||n<1))return n},Fa=r=>{const a=r.get(v.AggregationLabels),n=r.get(v.AggregationValues);if(!(!a||!n))try{const t=JSON.parse(a),s=JSON.parse(n);return t.reduce((l,i,o)=>(o in s&&s[o]&&l.push({label:i,value:s[o]}),l),[])}catch{return}},Oa=r=>{const a=r.get(v.Token);if(a)return a},Qa=r=>{const a=r.get(v.SearchTerm);if(a)return a},Ga=r=>{const a=r.get(v.ContentTypes);if(a)try{return JSON.parse(a)}catch{return}},Wa=r=>{const a=r.get(v.DisplayType);if(a)return a},Ha=r=>{const a=r.get(v.Sort);if(a)return Na(a)},ja=r=>{const a={},n=_a(r);n&&(a.page=n);const t=Fa(r);t&&(a.aggregationFilters=t);const s=Oa(r);s&&(a.token=s);const l=Qa(r);l&&(a.searchTerm=l);const i=Ga(r);i&&(a.contentTypes=i);const o=Wa(r);o&&(a.displayType=o);const c=Ha(r);return c&&(a.sort=c),a};class oa{constructor(a){this._pathname="",this._parsedRequestParams={},this._parseUrl(a)}updateUrl(a){const{pathname:n,search:t}=new URL(a,"http://dummy.com"),s={pathName:n,searchString:t};this._parseUrl(s)}_parseUrl(a){const{pathName:n,searchString:t}=a;this._pathname=n,this._searchParams=new URLSearchParams(t||void 0),this._parsedRequestParams=ja(this._searchParams)}_composeURL(a){return a?`${this._pathname}?${a}`:this._pathname}_resetOrDefaultClonedParams(){const a=new URLSearchParams(this._searchParams);return this._isCurated&&(a.delete(v.AggregationLabels),a.delete(v.AggregationValues),a.delete(v.ContentTypes),a.delete(v.DisplayType),a.delete(v.Page),a.delete(v.SearchTerm),a.delete(v.Sort),a.delete(v.Token)),this._selectedDisplayType===R.Calendar&&a.delete(v.Page),a}setIsCurated(a){this._isCurated=a}setSelectedDisplayType(a){this._selectedDisplayType=a}getParsedRequestParams(){return this._parsedRequestParams}composeURLForAddAggregationFilter(a){const{aggregationFilters:n=[]}=this._isCurated?{}:this._parsedRequestParams,t=[...n];t.push(a);const s=ce(t),l=this._resetOrDefaultClonedParams();return l.set(v.AggregationLabels,JSON.stringify(s.labels)),l.set(v.AggregationValues,JSON.stringify(s.values)),this._composeURL(l.toString())}composeURLsForRemoveAggregationFilterBatch(a){const{aggregationFilters:n=[]}=this._isCurated?{}:this._parsedRequestParams,t=this._resetOrDefaultClonedParams();return a.map(s=>{const{label:l,value:i}=s,o=new URLSearchParams(t),c=n.filter(({label:u,value:g})=>u!==l&&g!==i);if(c.length){const u=ce(c);o.set(v.AggregationLabels,JSON.stringify(u.labels)),o.set(v.AggregationValues,JSON.stringify(u.values))}else o.delete(v.AggregationLabels),o.delete(v.AggregationValues);return o.delete(v.Page),{filter:s,url:this._composeURL(o.toString())}})}composeURLForSetPage(a){const n=new URLSearchParams(this._searchParams);return n.set(v.Page,a.toString()),this._composeURL(n.toString())}composeURLForRemoveToken(){const a=this._resetOrDefaultClonedParams();return a.delete(v.Token),a.delete(v.Page),this._composeURL(a.toString())}composeURLForAddContentType(a){const{contentTypes:n=[]}=this._isCurated?{}:this._parsedRequestParams,t=[...n];t.push(a);const s=this._resetOrDefaultClonedParams();return s.set(v.ContentTypes,JSON.stringify(t)),this._composeURL(s.toString())}composeURLForRemoveContentTypeBatch(a){const{contentTypes:n=[]}=this._isCurated?{}:this._parsedRequestParams,t=this._resetOrDefaultClonedParams();return a.map(s=>{const l=new URLSearchParams(t),i=[...n].filter(o=>o!==s);return i.length?l.set(v.ContentTypes,JSON.stringify(i)):l.delete(v.ContentTypes),{contentType:s,url:this._composeURL(l.toString())}})}composeActionURLForSetSearchTermForm(){return this._composeURL("")}composeURLForSetSearchTermForm(a){const n=this._resetOrDefaultClonedParams();return n.set(v.SearchTerm,a),this._composeURL(n.toString())}composeSearchTermFormHiddenFields(){const a=this._resetOrDefaultClonedParams();a.delete(v.Page),a.delete(v.SearchTerm);const n=[];for(const[t,s]of a.entries())n.push({name:t,value:s});return n}composeURLForRemoveSearchTerm(){const a=this._resetOrDefaultClonedParams();return a.delete(v.SearchTerm),this._composeURL(a.toString())}composeURLForSetDisplayType(a){const n=this._resetOrDefaultClonedParams();return n.set(v.DisplayType,a.toString()),a===R.Calendar&&n.delete(v.ContentTypes),this._composeURL(n.toString())}composeURLForSetSort(a){const n=this._resetOrDefaultClonedParams();return n.set(v.Sort,Ua(a)),this._composeURL(n.toString())}}const ye=m.createContext(void 0),ca=({children:r,...a})=>{const{layoutId:n,widgetId:t,pathName:s,searchString:l,ssr:i}=a,o={pathName:s,searchString:l},[c]=m.useState(new oa(o)),[u,g]=m.useState(void 0),d=c.getParsedRequestParams(),y=ia({...ue,...d}),{data:p,error:f,loading:S}=na({variables:{...y,layoutId:n,widgetId:t}}),k=m.useRef(!1);if(!k.current&&!S){const q={...ue,...d,...de(p,f)};g(q),c.setIsCurated(q.isCurated),c.setSelectedDisplayType(q.displayType||q.resultsDisplayType),k.current=!0}return u?e.createElement(ye.Provider,{value:{isLoading:!1,urlManager:c,params:u,ssr:i}},r):null};ca.__docgenInfo={description:`Catalog server provider to provide access to catalog params and url manager, as
well as shared values with catalog client provider like: ssr and is loading state.
The provider will fetch data on server side. Data will be hydrated to the client side.
A single instance of the catalog url manager will be maintained by the
provider upon each server request.

User interface will allow user to do server side navigation.`,methods:[],displayName:"CatalogServerProvider",props:{pathName:{required:!0,tsType:{name:"string"},description:""},searchString:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},layoutId:{required:!1,tsType:{name:"string"},description:""},widgetId:{required:!1,tsType:{name:"string"},description:""},ssr:{required:!0,tsType:{name:"boolean"},description:""}}};const me=r=>{const a=r.getParsedRequestParams();return{...ue,...a}},je=r=>{const a=me(r);return ia({...a})},ua=({children:r,...a})=>{const{layoutId:n,widgetId:t,pathName:s,searchString:l,ssr:i}=a,o={pathName:s,searchString:l},[c]=m.useState(()=>new oa(o)),[u,g]=m.useState(()=>me(c)),[d,y]=m.useState(!0),p=m.useRef(null),f=m.useRef(null),S=m.useCallback((b,M)=>{const T=me(c),A=b||M?{...T,...de(b,M)}:{...T};g(A),c.setIsCurated(A.isCurated),c.setSelectedDisplayType(A.displayType||T.resultsDisplayType),y(!1)},[de,g,y,c]),k=m.useMemo(()=>je(c),[c]),{refetch:q}=na({variables:{...k,layoutId:n,widgetId:t},ssr:!1,notifyOnNetworkStatusChange:!0,onCompleted:b=>{S(b,void 0)},onError:b=>{S(void 0,b)}}),h=m.useCallback(async({url:b,pushToUrl:M=!0})=>{if(p.current&&p.current.scrollIntoView({behavior:"auto",block:"start"}),f.current){const A=f.current.clientHeight;f.current.style.setProperty("height",`${A}px`)}y(!0),c.updateUrl(b);const T=je(c);await q({...T,layoutId:n,widgetId:t}),M&&window.history.pushState(window.history.state,"",b),f.current&&f.current.style.setProperty("height","auto")},[y,q,c]),w=m.useCallback(b=>{const{pathname:M,search:T}=window.location,A=M+T;h({url:A,pushToUrl:!1})},[h]);return ta("popstate",w),e.createElement(ye.Provider,{value:{isLoading:d,urlManager:c,params:u,ssr:i,navigateClientSideAsync:h,scrollToRef:p,contentWrapperRef:f}},r)};ua.__docgenInfo={description:`Catalog client provider to provide access to catalog params, url manager and client navigation
function, as well as shared values with catalog server provider like: ssr and is loading state.
The provider will fetch data on client side. A single instance of the catalog url manager will
be persisted upon each client side navigation.

User interface will allow user to do client side navigation.`,methods:[],displayName:"CatalogClientProvider",props:{pathName:{required:!0,tsType:{name:"string"},description:""},searchString:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},layoutId:{required:!1,tsType:{name:"string"},description:""},widgetId:{required:!1,tsType:{name:"string"},description:""},ssr:{required:!0,tsType:{name:"boolean"},description:""}}};const re=({children:r,...a})=>{const{ssr:n}=a;return n?e.createElement(ca,{...a},r):e.createElement(ua,{...a},r)};re.__docgenInfo={description:"Catalog provider renders nested providers based on prop `ssr`. The nested providers\ndiffer in where the data-fetching takes place, either in server or client contexts.\nBoth nested providers are for internal use only.",methods:[],displayName:"CatalogProvider",props:{pathName:{required:!0,tsType:{name:"string"},description:""},searchString:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},layoutId:{required:!1,tsType:{name:"string"},description:""},widgetId:{required:!1,tsType:{name:"string"},description:""},ssr:{required:!0,tsType:{name:"boolean"},description:""}}};function L(){const r=e.useContext(ye);if(!r)throw new Error("Expected a Catalog Context, but no Catalog Context was found");return r}const Q=m.forwardRef(({children:r,href:a,...n},t)=>{const{ssr:s,navigateClientSideAsync:l}=L(),i=m.useCallback(c=>{c.preventDefault(),a&&l&&l({url:a})},[a]),o={...n,href:a,onClick:s?void 0:i};return e.createElement("a",{ref:t,...o},r)});Q.displayName="CatalogLinkButton";Q.__docgenInfo={description:"The `CatalogLinkButton` component renders a link button that conditionally\noverrides the link behavior and handles client side navigation.\nIt must be a descendent of a `CatalogProvider` component.",methods:[],displayName:"CatalogLinkButton"};const za=500,$a=.25,Za="div",da=m.createContext(void 0);function Xa(r,a,n){var t=this,s=m.useRef(null),l=m.useRef(0),i=m.useRef(null),o=m.useRef([]),c=m.useRef(),u=m.useRef(),g=m.useRef(r),d=m.useRef(!0);g.current=r;var y=!a&&a!==0&&typeof window<"u";if(typeof r!="function")throw new TypeError("Expected a function");a=+a||0,n=n||{};var p=!!n.leading,f="trailing"in n?!!n.trailing:!0,S="maxWait"in n,k=S?Math.max(+n.maxWait||0,a):null;m.useEffect(function(){return d.current=!0,function(){d.current=!1}},[]);var q=m.useMemo(function(){var h=function(C){var D=o.current,E=c.current;return o.current=c.current=null,l.current=C,u.current=g.current.apply(E,D)},w=function(C,D){y&&cancelAnimationFrame(i.current),i.current=y?requestAnimationFrame(C):setTimeout(C,D)},b=function(C){if(!d.current)return!1;var D=C-s.current,E=C-l.current;return!s.current||D>=a||D<0||S&&E>=k},M=function(C){return i.current=null,f&&o.current?h(C):(o.current=c.current=null,u.current)},T=function(){var C=Date.now();if(b(C))return M(C);if(d.current){var D=C-s.current,E=C-l.current,N=a-D,B=S?Math.min(N,k-E):N;w(T,B)}},A=function(){for(var C=[],D=0;D<arguments.length;D++)C[D]=arguments[D];var E=Date.now(),N=b(E);if(o.current=C,c.current=t,s.current=E,N){if(!i.current&&d.current)return l.current=s.current,w(T,a),p?h(s.current):u.current;if(S)return w(T,a),h(s.current)}return i.current||w(T,a),u.current};return A.cancel=function(){i.current&&(y?cancelAnimationFrame(i.current):clearTimeout(i.current)),l.current=0,o.current=s.current=c.current=i.current=null},A.isPending=function(){return!!i.current},A.flush=function(){return i.current?M(Date.now()):u.current},A},[p,S,a,k,f,y]);return q}const Se=({children:r,timeout:a=za,animationSpeed:n=$a})=>{const[t,s]=m.useState([]),[l,i]=m.useState([]),[o,c]=m.useState(!1),[u,g]=m.useState(0),[d,y]=m.useState(0),p=m.useCallback(()=>c(S=>!S),[]),f=Xa(p,a);return ta("resize",f),m.useEffect(()=>{p()},[u,p]),m.useEffect(()=>{if(u<=d){let S=[];l.map(k=>{const q=k.name,h=k.height,w=S.findIndex(b=>b.name===q);w>-1?S[w].height<h&&(S[w].height=h):S=[...S,{name:q,height:h}]}),s(S),i([]),y(0)}},[u,d,l]),e.createElement(da.Provider,{value:{sizes:t,temporarySizes:l,update:o,animationSpeed:n,originalChildrenCount:u,childrenCount:d,setTemporarySizes:i,setOriginalChildrenCount:g,setChildrenCount:y}},r)};Se.displayName="HeightEqualizer";Se.__docgenInfo={description:"",methods:[],displayName:"HeightEqualizer",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},timeout:{required:!1,tsType:{name:"number"},description:"Time to recalculate heights",defaultValue:{value:"500",computed:!1}},animationSpeed:{required:!1,tsType:{name:"number"},description:"Time of animation for height change (in milliseconds)",defaultValue:{value:"0.25",computed:!1}}}};function Va(){const r=e.useContext(da);if(!r)throw new Error("Expected a Height Equalizer Context, but no context was found");return r}const pe=({children:r="",name:a,as:n,className:t})=>{const{sizes:s,update:l,setTemporarySizes:i,setOriginalChildrenCount:o,setChildrenCount:c,animationSpeed:u}=Va(),[g,d]=m.useState(),y=m.useRef(null),p=m.useCallback(()=>{if(!y.current)return;const S=y.current.style.getPropertyValue("height");y.current.style.removeProperty("height");const k=y.current.offsetHeight;y.current.style.setProperty("height",S),i(q=>[...q,{name:a,height:k}]),c(q=>q+1)},[i,c,a]);m.useEffect(()=>(o(S=>S+1),()=>{o(S=>S-1)}),[o]),m.useEffect(()=>{p()},[l,p]),m.useEffect(()=>{const S=s.findIndex(k=>k.name===a);s&&s[S]&&s[S].height&&d(s[S].height)},[s,a]);const f={height:`${g}px`,transitionDuration:u===0?"":`${u}s`};return e.createElement(n??Za,{ref:y,className:t,style:f},r)};pe.displayName="HeightEqualizerElement";pe.__docgenInfo={description:"",methods:[],displayName:"HeightEqualizerElement",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"''",computed:!1}},name:{required:!0,tsType:{name:"string"},description:"all heights of elements with the same name are comparing"},as:{required:!1,tsType:{name:"string"},description:"An HTML tag to be rendered as the base element wrapper. The default is `div`."},className:{required:!1,tsType:{name:"string"},description:"A string of styling class names to apply to the underlying element."}}};const ne=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-full h-full",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})),te=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-full h-full",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})),be=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-full h-full",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"}));ne.__docgenInfo={description:"",methods:[],displayName:"ArrowDownIcon"};te.__docgenInfo={description:"",methods:[],displayName:"ArrowRightIcon"};be.__docgenInfo={description:"",methods:[],displayName:"CheckIcon"};const se=({id:r,label:a,options:n})=>{const[t,s]=m.useState(!1),l=m.createRef();Ta(l,()=>{t&&s(!t)});const i=()=>s(!t),o=!!n.length,c="relative w-full h-10 md:h-full px-2 md:px-0 text-sm border-solid border border-gray-400 bg-gray-100 md:border-none md:bg-transparent",u="flex w-full h-full justify-between items-center",g=o?"":"text-gray-400",d="absolute z-50 mt-px -left-0.5 md:-left-4",y=t?"visible":"invisible",p={minWidth:"160px"},f="p-px bg-white",S="transition-colors ease-in-out duration-200 text-accent hover:text-link-hover bg-gray-100 block text-sm px-4 py-1.5",q=e.createElement("i",{className:"absolute w-4 h-4 text-accent left-0"},e.createElement(be,null));return e.createElement("div",{className:c,ref:l},e.createElement("button",{className:I(u,g),onClick:i,disabled:!o},a,e.createElement("span",{className:"w-4 h-4"},t&&e.createElement(ne,null),!t&&e.createElement(te,null))),e.createElement("ul",{id:r,className:I(d,y),style:p},n.map(({isSelected:h,link:w,name:b},M)=>e.createElement("li",{key:`${r}-item-${M}`,className:f},e.createElement(Q,{href:w,className:S},h&&q,b)))))};se.displayName="DropdownMenu";se.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  isSelected?: boolean;
  link: string;
  name: string;
}`,signature:{properties:[{key:"isSelected",value:{name:"boolean",required:!1}},{key:"link",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:`{
  isSelected?: boolean;
  link: string;
  name: string;
}[]`},description:""}}};const ve=({contentTypes:r,resultContentTypes:a})=>{const{t:n}=_(),{urlManager:t}=L(),s=n("filter-by"),l=a.filter(i=>!r.includes(i)).map(i=>({name:i,link:t.composeURLForAddContentType(i)}));return e.createElement(se,{id:"content-type-options",label:s,options:l})};ve.displayName="ContentTypeSelector";ve.__docgenInfo={description:"",methods:[],displayName:"ContentTypeSelector"};const X=({isActive:r,link:a,children:n})=>{const t="bg-gray-100 hover:bg-white md:bg-transparent border border-solid border-gray-400 rounded-sm hover:border-gray-500 md:rounded-none font-normal font-secondary text-gray-800 text-sm text-center no-underline leading-none hover:text-gray-800 md:text-gray-400 cursor-pointer inline-block relative py-1 px-4 mb-4 transition-colors ease-in-out duration-200 md:h-12 md:w-12 md:mb-0 md:p-0 flex justify-center items-center",s=r?"cursor-default pointer-events-none bg-accent hover:bg-accent-hover border-accent hover:border-accent-hover text-accent-contrast hover:text-accent-contrast md:text-black md:hover:text-black md:hover:bg-transparent":"";return e.createElement(Q,{className:I(t,s),href:a},n)};X.displayName="DisplayTypeIconLink";X.__docgenInfo={description:"",methods:[],displayName:"DisplayTypeIconLink",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},link:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const fe=({isActive:r,link:a})=>e.createElement(X,{isActive:r,link:a},e.createElement("i",{"aria-label":"calendar view",className:"w-5 h-5"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",viewBox:"0 0 48 48",stroke:"currentColor",strokeWidth:3},e.createElement("circle",{cx:"24",cy:"24",r:"20",fill:"none"}),e.createElement("circle",{cx:"24",cy:"24",r:"2",fill:"currentColor"}),e.createElement("line",{x1:"20",y1:"2",x2:"28",y2:"2"}),e.createElement("line",{x1:"24",y1:"24",x2:"24",y2:"8"}))));fe.displayName="DisplayTypeIconCalendar";fe.__docgenInfo={description:"",methods:[],displayName:"DisplayTypeIconCalendar",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},link:{required:!0,tsType:{name:"string"},description:""}}};const ke=({isActive:r,link:a})=>e.createElement(X,{isActive:r,link:a},e.createElement("i",{"aria-label":"grid view",className:"w-5 h-5"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",viewBox:"0 0 32 32",stroke:"currentColor",strokeWidth:3},e.createElement("rect",{x:"4",y:"4",width:"24",height:"24",fill:"none"}),e.createElement("line",{x1:"16",y1:"28",x2:"16",y2:"4"}),e.createElement("line",{x1:"4",y1:"16",x2:"28",y2:"16"}))));ke.displayName="DisplayTypeIconGrid";ke.__docgenInfo={description:"",methods:[],displayName:"DisplayTypeIconGrid",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},link:{required:!0,tsType:{name:"string"},description:""}}};const qe=({isActive:r,link:a})=>e.createElement(X,{isActive:r,link:a},e.createElement("i",{"aria-label":"list view",className:"w-5 h-5"},e.createElement("svg",{className:"w-full h-full",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e.createElement("path",{d:"M44.88,13H15.13A2.07,2.07,0,0,1,13,11a2.07,2.07,0,0,1,2.13-2H44.88A2.07,2.07,0,0,1,47,11,2.07,2.07,0,0,1,44.88,13Z"}),e.createElement("path",{d:"M44.88,25H15.13a2,2,0,1,1,0-4H44.88A2,2,0,1,1,44.88,25Z"}),e.createElement("path",{d:"M44.88,37H15.13a2,2,0,1,1,0-4H44.88A2,2,0,1,1,44.88,37Z"}),e.createElement("circle",{cx:"6",cy:"11",r:"3"}),e.createElement("circle",{cx:"6",cy:"23",r:"3"}),e.createElement("circle",{cx:"6",cy:"35",r:"3"}))));qe.displayName="DisplayTypeIconList";qe.__docgenInfo={description:"",methods:[],displayName:"DisplayTypeIconList",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},link:{required:!0,tsType:{name:"string"},description:""}}};const Ja=r=>{switch(r){case R.List:return qe;case R.Grid:return ke;case R.Calendar:return fe;default:return r}},we=({activeDisplayType:r,enabledDisplayTypes:a})=>{const{urlManager:n}=L(),t=a.map(s=>{const i={isActive:s===r,link:n.composeURLForSetDisplayType(s)},o=Ja(s);return e.createElement(o,{key:s,...i})});return e.createElement("div",{className:"flex flex-wrap gap-x-1 justify-end"},t)};we.displayName="DisplayTypeSelector";we.__docgenInfo={description:"",methods:[],displayName:"DisplayTypeSelector",props:{activeDisplayType:{required:!0,tsType:{name:"union",raw:"CatalogParams['displayType'] | CatalogParams['resultsDisplayType']",elements:[{name:"intersection['displayType']",raw:"CatalogParams['displayType']"},{name:"intersection['resultsDisplayType']",raw:"CatalogParams['resultsDisplayType']"}]},description:""}}};const he=({formAction:r,hiddenFields:a})=>{const{ssr:n,navigateClientSideAsync:t,urlManager:s}=L(),[l,i]=m.useState(""),o=m.createRef(),{t:c}=_(),u=d=>{i(d.target.value)},g=async d=>{var y;if(d.preventDefault(),l){if(!n&&t){await t({url:s.composeURLForSetSearchTermForm(l)});return}(y=o.current)==null||y.submit()}};return e.createElement("div",{className:"md:h-full relative"},e.createElement("form",{method:"GET",action:r,onSubmit:g,ref:o,className:"md:h-full"},e.createElement("input",{className:"border border-solid border-gray-400 shadow md:h-full md:m-0 md:border-none md:shadow-none w-full focus:outline-none p-2 text-sm",placeholder:c("catalog-search-placeholder"),"aria-label":"Catalog Search",type:"text",value:l,onChange:u,name:v.SearchTerm}),a.map(({name:d,value:y},p)=>e.createElement("input",{key:`search-form-hidden-input-${p}`,type:"hidden",name:d,value:y})),e.createElement("span",{className:"mb-0 absolute h-full top-0 right-0 p-1 table",onClick:g},e.createElement("i",{className:"text-2xl cursor-pointer py-0 px-3 text-accent table-cell align-middle","aria-label":"search"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",fill:"currentColor"},e.createElement("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"}))))))};he.displayName="SearchInput";he.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{formAction:{required:!0,tsType:{name:"string"},description:""},hiddenFields:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  value: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"SearchTermFormHiddenField[]"},description:""}}};const Ya={[x.UpdatedAt]:"catalog.sort-updated",[x.CreatedAt]:"catalog.sort-created",[x.Title]:"catalog.sort-title",[x.PublishDate]:"catalog.sort-publish-date",[x.CourseStartDate]:"catalog.sort-course-start-date",[x.Relevance]:"catalog.sort-relevance"},Ce=({enabledSorts:r,sort:a})=>{const{t:n}=_(),{urlManager:t}=L(),{field:s,direction:l}=a||{},i=n("catalog.sort-by"),o=r.map(c=>({isSelected:s===c.field&&l===c.direction,name:n(Ya[c.field]),link:t.composeURLForSetSort(c)}));return e.createElement(se,{id:"sort-options",label:i,options:o})};Ce.displayName="SortSelector";Ce.__docgenInfo={description:"",methods:[],displayName:"SortSelector"};const Me=({children:r})=>e.createElement("span",{className:"py-3 ml-1 inline-block"},r);Me.displayName="FilterWrapper";Me.__docgenInfo={description:"",methods:[],displayName:"FilterWrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ma=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}));ma.__docgenInfo={description:"",methods:[],displayName:"RemoveIcon"};const G=({label:r,href:a})=>e.createElement(Me,null,e.createElement(Q,{href:a,className:"flex items-center gap-x-1 text-accent hover:text-link-hover"},e.createElement("i",{"aria-label":"remove",className:"w-3 h-3"},e.createElement(ma,null)),r));G.displayName="FilterLink";G.__docgenInfo={description:"",methods:[],displayName:"FilterLink",props:{label:{required:!0,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""}}};const Ae=({label:r,removeFilterHref:a})=>e.createElement(G,{label:r,href:a});Ae.displayName="FilterAggregation";Ae.__docgenInfo={description:"",methods:[],displayName:"FilterAggregation",props:{label:{required:!0,tsType:{name:"string"},description:""},removeFilterHref:{required:!0,tsType:{name:"string"},description:""}}};const Te=({contentType:r,removeFilterHref:a})=>e.createElement(G,{label:r,href:a});Te.displayName="FilterContentType";Te.__docgenInfo={description:"",methods:[],displayName:"FilterContentType",props:{contentType:{required:!0,tsType:{name:"intersection['contentTypes'][0]",raw:"CatalogParams['contentTypes'][0]"},description:""},removeFilterHref:{required:!0,tsType:{name:"string"},description:""}}};const De=({searchTerm:r,removeFilterHref:a})=>e.createElement(G,{label:r,href:a});De.displayName="FilterSearchTerm";De.__docgenInfo={description:"",methods:[],displayName:"FilterSearchTerm",props:{searchTerm:{required:!0,tsType:{name:"intersection['searchTerm']",raw:"CatalogParams['searchTerm']"},description:""},removeFilterHref:{required:!0,tsType:{name:"string"},description:""}}};const Ee=({tokenLabel:r,removeFilterHref:a})=>e.createElement(G,{label:r,href:a});Ee.displayName="FilterTokenLabel";Ee.__docgenInfo={description:"",methods:[],displayName:"FilterTokenLabel",props:{tokenLabel:{required:!0,tsType:{name:"intersection['tokenLabel']",raw:"CatalogParams['tokenLabel']"},description:""},removeFilterHref:{required:!0,tsType:{name:"string"},description:""}}};const Ie=()=>{const{params:r,urlManager:a}=L(),{searchTerm:n,aggregationFilters:t,token:s,tokenLabel:l,contentTypes:i,resultContentTypes:o,contentTypeFilterEnabled:c,enabledSorts:u,sort:g,displayType:d,enabledDisplayTypes:y,resultsDisplayType:p}=r,S=!!n||!!t.length||!!l||!!i.length,k=d||p,q=k===R.Calendar,h=c&&!q,w=!!u.length&&!q,b=S||h,M=!!y.length,A=b?"md:col-span-3":w?"md:col-span-10":"md:col-span-full",C=a.composeURLForRemoveContentTypeBatch(i).map(({contentType:B,url:P},U)=>e.createElement(Te,{key:`content-type-filter-${U}`,contentType:B,removeFilterHref:P})),D=n&&e.createElement(De,{searchTerm:n,removeFilterHref:a.composeURLForRemoveSearchTerm()}),E=a.composeURLsForRemoveAggregationFilterBatch(t).map(({filter:B,url:P},U)=>e.createElement(Ae,{key:`catalog-aggregation-filter-${U}`,label:B.value,removeFilterHref:P})),N=s&&l&&e.createElement(Ee,{tokenLabel:l,removeFilterHref:a.composeURLForRemoveToken()});return e.createElement("div",{className:"mb-6 w-full flex flex-col md:flex-row md:gap-x-1"},e.createElement("div",{className:"md:flex-1 md:border md:border-solid md:border-gray-400 md:bg-gray-100"},e.createElement("div",{className:"grid grid-cols-2 md:grid-cols-12 md:h-full"},e.createElement("div",{className:I(["px-4 mb-2 col-span-full md:bg-white md:mb-0",A])},e.createElement(he,{formAction:a.composeActionURLForSetSearchTermForm(),hiddenFields:a.composeSearchTermFormHiddenFields()})),b&&e.createElement("div",{className:"relative px-4 float-left mb-2 md:border-l md:border-l-solid md:border-l-gray-400 md:col-span-7 md:mb-0"},e.createElement("div",{className:"grid grid-cols-12 md:h-full"},h&&e.createElement("div",{className:"md:relative col-span-full md:col-span-2"},e.createElement(ve,{contentTypes:i,resultContentTypes:o})),S&&e.createElement("div",{className:"col-span-full md:col-span-10 mb-2 md:h-full md:mb-0 text-sm"},C,D,E,N))),w&&e.createElement("div",{className:"md:border-l md:border-l-solid md:border-l-gray-400 md:bg-white md:col-span-2 relative px-4 float-left mb-2 md:h-full md:mb-0 md:pr-0"},e.createElement(Ce,{enabledSorts:u,sort:g})))),M&&e.createElement("div",{className:"px-4 md:px-0 md:flex-none"},e.createElement(we,{activeDisplayType:k,enabledDisplayTypes:y})))};Ie.displayName="CatalogFilters";Ie.__docgenInfo={description:"",methods:[],displayName:"CatalogFilters"};const Ka=({href:r,value:a,count:n})=>e.createElement("li",null,e.createElement(Q,{href:r,className:"inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"},a,n&&e.createElement("span",{className:"text-xs text-gray-700 pl-1"},`(${n})`))),er=({index:r,label:a,defaultIsExpanded:n,aggregationBuckets:t})=>{const[s,l]=m.useState(n),i=()=>{l(d=>!d)},o=s?"border-b mb-4 bg-gray-100":"",c="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4",u=s?"":"hidden",g=`catalog-aggregation-dropdown-${r}`;return e.createElement("div",{className:I(["border-t border-solid border-gray-400 py-3 px-2"],o)},e.createElement("button",{className:c,onClick:i,"aria-expanded":s,"aria-labelledby":g},e.createElement("span",{className:"text-xl inline-block leading-4 text-center w-5 h-5"},s&&e.createElement(ne,null),!s&&e.createElement(te,null)),e.createElement("span",{className:"font-semibold"},a)),e.createElement("ul",{"aria-hidden":!s,id:g,className:I(["pl-6 text-sm"],u)},t))},Pe=()=>{const{params:r,urlManager:a}=L(),{aggregations:n,aggregationFilters:t,isCurated:s,token:l,tokenLabel:i}=r,{data:o}=Ca(),c=t.length?t[0].label:void 0,u=o?o.Languages:[],g=n.map(({label:d="",buckets:y=[]},p)=>{const h=d===c||i&&d===i||!s&&!l&&p===0,w=y.map(({value:M="",count:T,query:A},C)=>{var U;const D={label:d,value:M},E=A==null?void 0:A.includes("language"),N=((U=u.find(({code:O})=>O===M))==null?void 0:U.label)||M,B=E?N:M,P={href:a.composeURLForAddAggregationFilter(D),value:B,count:T};return e.createElement(Ka,{key:`catalog-aggregation-bucket-${C}`,...P})}),b={index:p,defaultIsExpanded:h,label:d,aggregationBuckets:w};return e.createElement(er,{key:`catalog-aggregation-${p}`,...b})});return e.createElement(e.Fragment,null,g)};Pe.displayName="CatalogAggregations";Pe.__docgenInfo={description:"",methods:[],displayName:"CatalogAggregations"};const Ne=({children:r})=>{const{params:a}=L(),{error:n}=a;return n?e.createElement(e.Fragment,null,n):r};Ne.displayName="CatalogError";Ne.__docgenInfo={description:"",methods:[],displayName:"CatalogError",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const V=({asset:r,classNames:a=""})=>e.createElement("img",{className:I(["max-w-full h-auto",a]),src:r||"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"});V.displayName="ItemAssetBlock";V.__docgenInfo={description:"",methods:[],displayName:"ItemAssetBlock",props:{asset:{required:!1,tsType:{name:"string"},description:""},classNames:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ga=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-full h-full",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})),ya=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",viewBox:"0 0 20 20",fill:"currentColor"},e.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})),Sa=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})),pa=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}));ga.__docgenInfo={description:"",methods:[],displayName:"PlusIcon"};ya.__docgenInfo={description:"",methods:[],displayName:"CheckCircleIcon"};Sa.__docgenInfo={description:"",methods:[],displayName:"DesktopComputerIcon"};pa.__docgenInfo={description:"",methods:[],displayName:"LocationMarkerIcon"};const J=({item:r,onAddedToQueue:a,classNames:n=""})=>{const[t,s]=m.useState(!1),[l,i]=m.useState(!1),{t:o}=_(),c=m.useCallback(async g=>{if(g.preventDefault(),g.stopPropagation(),!(l||t)){s(!0);try{await a(r),i(!0)}catch{}finally{s(!1)}}},[l,t,r,a]),u=I(["pl-0 mb-1 text-xs border-none rounded-sm cursor-pointer font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 hover:text-link-hover",l?"cursor-default":null,n]);return e.createElement("button",{onClick:c,className:u},l&&e.createElement("span",{className:"flex items-center gap-x-1"},e.createElement("i",{className:"inline-block w-3 h-3 text-green-600","aria-label":"check"},e.createElement(ya,null)),` ${o("course-added-to-queue")}`),!l&&e.createElement("span",{className:"flex items-center gap-x-1"},e.createElement("i",{className:"inline-block w-3 h-3","aria-label":"plus"},e.createElement(ga,null)),` ${o("course-add-to-queue")}`))};J.displayName="ItemQueueButton";J.__docgenInfo={description:"",methods:[],displayName:"ItemQueueButton",props:{item:{required:!0,tsType:{name:"intersection",raw:`ContentItem & {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Content';
  acceptBadgeUrl?: Maybe<Scalars['String']>;
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  badgeName?: Maybe<Scalars['String']>;
  badgeUrl?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeAssetAspectRatio?: Maybe<Scalars['String']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGracePeriodEnded: Scalars['Boolean'];
  courseGroup?: Maybe<Scalars['String']>;
  coursePresold: Scalars['Boolean'];
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  credlyBadgeExpiresAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
  currentUserMayReschedule: Scalars['Boolean'];
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['Slug']>;
  displayDate?: Maybe<Scalars['Date']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentCount?: Maybe<Scalars['Int']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  expiresAt?: Maybe<Scalars['Date']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['Date']>;
  kind?: Maybe<ContentKind>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  meetingStartDate?: Maybe<Scalars['Date']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  ribbon?: Maybe<Ribbon>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sessionTitle?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Content'",required:!1}},{key:"acceptBadgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"altDescriptionBody",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingRef",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingType",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"asset",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authorsAndInstructors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"availabilityStatus",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeName",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"bulkPurchasingEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"canAddToQueue",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeAssetAspectRatio",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeLabel",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseGracePeriodEnded",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseGroup",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"coursePresold",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"createdAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"credlyBadgeExpiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserDueDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserMayReschedule",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"currentUserUnmetCoursePrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserUnmetLearningPathPrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"customFields",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"description",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourse",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourseSlug",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"embeddedEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"expiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"freeWithRegistration",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"hasChildren",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"hideCourseDescription",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"id",value:{name:"string",raw:"Scalars['ID']",required:!0}},{key:"imageUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"isActive",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"issuedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"kind",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"language",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"location",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"meetingStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaDescription",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"priceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"publishDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"rating",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"ribbon",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"seatsLimit",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sessionTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sku",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"slug",value:{name:"string",raw:"Scalars['Slug']",required:!0}},{key:"source",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"state",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"status",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"tags",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"timeZone",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"title",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"updatedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"url",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistingEnabled",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"waitlistingTriggered",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,signature:{properties:[{key:"hasUnmetPrerequisites",value:{name:"boolean",required:!0}},{key:"isActive",value:{name:"boolean",required:!0}},{key:"hasAvailability",value:{name:"boolean",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}},{key:"isAvailable",value:{name:"boolean",required:!0}},{key:"isStarted",value:{name:"boolean",required:!0}},{key:"isNotStarted",value:{name:"boolean",required:!0}},{key:"isNotCompleted",value:{name:"boolean",required:!0}},{key:"kindIsScormOrXApi",value:{name:"boolean",required:!0}},{key:"locationIsOnline",value:{name:"boolean",required:!0}},{key:"locationIsInPerson",value:{name:"boolean",required:!0}},{key:"usesContentAccessText",value:{name:"boolean",required:!0}},{key:"callToAction",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"priceInCents",value:{name:"number",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"number",required:!1}},{key:"displayCourse",value:{name:"string",required:!1}}]}}]},description:""},classNames:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ar=({location:r,locationIsInPerson:a})=>{const{t:n}=_(),{address1:t,name:s,city:l,state:i,country:o}=r||{},c="flex items-center justify-end gap-x-1 md:justify-start",u="w-4 h-4";if(t){let g=l;return i&&(g+=`, ${i}`),o&&(g+=`, ${o}`),e.createElement(e.Fragment,null,s&&e.createElement("strong",null,s),e.createElement("br",null),g)}return a?e.createElement("span",{className:c},e.createElement("i",{className:u,"aria-label":"location"},e.createElement(pa,null)),n("catalog.location-in-person")):e.createElement("span",{className:c},e.createElement("i",{className:u,"aria-label":"online"},e.createElement(Sa,null)),n("catalog.location-online"))},rr=({companyTimeZone:r,displayDescriptionOnCalendar:a,item:n,hasPrices:t,expandedItemId:s,setExpandedItemId:l,onAddedToQueue:i,priceFormatFn:o})=>{const{meetingStartDate:c,courseStartDate:u,timeZone:g,locationIsOnline:d,locationIsInPerson:y,href:p,id:f,asset:S,description:k,contentTypeAssetAspectRatio:q,title:h,priceInCents:w,isActive:b,callToAction:M,location:T,canAddToQueue:A}=n,D=ae(c||u,d?r:g,"MMM Do YYYY hh:mm A z"),E=s===f,N=`catalog-calendar-description-${f}`,B=(S||k)&&a,P=p.includes("?")?`${p}&courseId=${f}`:`${p}?courseId=${f}`,U=!q||q==="16:9",O=t?5:4,H=U?"col-span-full md:col-span-4":"col-span-6 md:col-span-2",ie=U?"col-span-full md:col-span-8":"col-span-full md:col-span-9",j="border border-solid border-gray-400 rounded block p-3 md:border-none md:rounded-none md:table-row",ba=E?I(j,"border-b-0 rounded-bl-none rounded-br-none pb-0 mb-0"):I(j,"mb-3"),va=I(j,"mb-3 border-t-0 rounded-tl-none rounded-tr-none"),Ge="p-0 text-right block mb-1 md:py-4 md:px-5 md:text-left md:table-cell md:mb-0",We=I(Ge,"border-none md:border-b md:border-solid md:border-gray-400"),z=E?I(Ge,"pb-0 last:mb-0"):We,fa="w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4",ka="bg-accent hover:bg-accent-hover border border-solid border-accent hover:border-accent-hover rounded-sm font-normal font-secondary text-accent-contrast text-sm text-center no-underline leading-none cursor-pointer inline-block relative transition-colors ease-in-out duration-200 py-1 px-4 block w-full md:w-auto",qa=m.useCallback(()=>{l(E?void 0:f)},[E,f,l]);return e.createElement(e.Fragment,null,e.createElement("tr",{className:ba},e.createElement("td",{"data-label":"courseHeading",className:z},B&&e.createElement("div",{className:"grid grid-cols-12"},e.createElement("div",{className:"col-span-2"},e.createElement("button",{className:fa,onClick:qa,"aria-expanded":E,"aria-controls":N},e.createElement("span",{className:"text-xl inline-block leading-4 text-center w-5 h-5"},E&&e.createElement(ne,null),!E&&e.createElement(te,null)))),e.createElement("div",{className:"col-span-10"},h)),!B&&e.createElement(e.Fragment,null,h)),e.createElement("td",{"data-label":"locationHeading",className:z},e.createElement(ar,{location:T,locationIsInPerson:y})),e.createElement("td",{"data-label":"dateTimeHeading",className:z},D),t&&e.createElement("td",{"data-label":"priceHeading",className:z},!!w&&o(w)),e.createElement("td",{className:z},e.createElement("div",{className:"flex flex-col gap-3 justify-center items-center"},b&&e.createElement("a",{className:ka,href:P},M),!b&&M,A&&e.createElement(J,{item:n,onAddedToQueue:i})))),E&&e.createElement("tr",{id:N,className:va},e.createElement("td",{colSpan:O,className:We},e.createElement("div",{className:"grid grid-cols-12 gap-3.5"},S&&e.createElement("div",{className:H},e.createElement(V,{asset:S})),e.createElement("div",{className:ie},e.createElement("div",{className:"text-xs mt-2 leading-5 text-gray-700 pr-1"},k))))))},nr=({heading:r,items:a,...n})=>{const{t}=_(),s=a.some(({priceInCents:c})=>!!c),l={hasPrices:s,...n},i="py-4 px-5 border-b border-solid border-gray-400 text-left";return e.createElement("table",{className:"table-auto border-collapse border-none md:border md:border-solid md:border-gray-400 rounded mb-10 text-sm w-full"},e.createElement("caption",{className:"font-secondary text-xl leading-tight text-left mb-5"},r),e.createElement("thead",{className:"h-px -m-px overflow-hidden p-0 absolute w-px md:h-full md:w-full md:static"},e.createElement("tr",null,e.createElement("th",{className:I(i,"w-1/4")},t("course")),e.createElement("th",{className:I(i,"w-1/6")},t("catalog.location")),e.createElement("th",{className:I(i,"w-1/4")},t("catalog.date-time")),s&&e.createElement("th",{className:I(i,"w-1/12")},t("catalog.price")),e.createElement("th",{className:I(i,"w-1/4")}))),e.createElement("tbody",null,a.map((c,u)=>e.createElement(rr,{key:`result-item-${u}`,item:c,...l}))))},xe=({items:r,...a})=>{const[n,t]=m.useState(void 0),s=r.sort((l,i)=>{const o=l.meetingStartDate||l.courseStartDate,c=i.meetingStartDate||i.courseStartDate;return!o||!c||He(o).isBefore(He(c))?-1:1}).reduce((l,i)=>{const o=i.meetingStartDate||i.courseStartDate;if(!o)return l;const c=ae(o,i.timeZone,"MMM YYYY");return l[c]||(l[c]={heading:c,items:[]}),l[c].items.push(i),l},{});return e.createElement("div",null,Object.entries(s).map(([l,i],o)=>e.createElement(nr,{key:`result-month-${o}`,...i,...a,expandedItemId:n,setExpandedItemId:t})))};xe.displayName="DisplayTypeResultsCalendar";xe.__docgenInfo={description:"",methods:[],displayName:"DisplayTypeResultsCalendar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`ContentItem & {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Content';
  acceptBadgeUrl?: Maybe<Scalars['String']>;
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  badgeName?: Maybe<Scalars['String']>;
  badgeUrl?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeAssetAspectRatio?: Maybe<Scalars['String']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGracePeriodEnded: Scalars['Boolean'];
  courseGroup?: Maybe<Scalars['String']>;
  coursePresold: Scalars['Boolean'];
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  credlyBadgeExpiresAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
  currentUserMayReschedule: Scalars['Boolean'];
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['Slug']>;
  displayDate?: Maybe<Scalars['Date']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentCount?: Maybe<Scalars['Int']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  expiresAt?: Maybe<Scalars['Date']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['Date']>;
  kind?: Maybe<ContentKind>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  meetingStartDate?: Maybe<Scalars['Date']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  ribbon?: Maybe<Ribbon>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sessionTitle?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Content'",required:!1}},{key:"acceptBadgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"altDescriptionBody",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingRef",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingType",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"asset",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authorsAndInstructors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"availabilityStatus",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeName",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"bulkPurchasingEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"canAddToQueue",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeAssetAspectRatio",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeLabel",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseGracePeriodEnded",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseGroup",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"coursePresold",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"createdAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"credlyBadgeExpiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserDueDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserMayReschedule",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"currentUserUnmetCoursePrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserUnmetLearningPathPrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"customFields",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"description",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourse",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourseSlug",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"embeddedEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"expiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"freeWithRegistration",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"hasChildren",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"hideCourseDescription",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"id",value:{name:"string",raw:"Scalars['ID']",required:!0}},{key:"imageUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"isActive",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"issuedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"kind",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"language",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"location",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"meetingStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaDescription",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"priceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"publishDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"rating",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"ribbon",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"seatsLimit",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sessionTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sku",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"slug",value:{name:"string",raw:"Scalars['Slug']",required:!0}},{key:"source",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"state",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"status",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"tags",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"timeZone",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"title",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"updatedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"url",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistingEnabled",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"waitlistingTriggered",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,signature:{properties:[{key:"hasUnmetPrerequisites",value:{name:"boolean",required:!0}},{key:"isActive",value:{name:"boolean",required:!0}},{key:"hasAvailability",value:{name:"boolean",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}},{key:"isAvailable",value:{name:"boolean",required:!0}},{key:"isStarted",value:{name:"boolean",required:!0}},{key:"isNotStarted",value:{name:"boolean",required:!0}},{key:"isNotCompleted",value:{name:"boolean",required:!0}},{key:"kindIsScormOrXApi",value:{name:"boolean",required:!0}},{key:"locationIsOnline",value:{name:"boolean",required:!0}},{key:"locationIsInPerson",value:{name:"boolean",required:!0}},{key:"usesContentAccessText",value:{name:"boolean",required:!0}},{key:"callToAction",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"priceInCents",value:{name:"number",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"number",required:!1}},{key:"displayCourse",value:{name:"string",required:!1}}]}}]}],raw:"CatalogResultItem[]"},description:""},priceFormatFn:{required:!0,tsType:{name:"signature",type:"function",raw:"(priceInCents: number) => string",signature:{arguments:[{type:{name:"number"},name:"priceInCents"}],return:{name:"string"}}},description:""}}};const le=({children:r,onClick:a,item:n})=>{const{isActive:t,href:s}=n,l=!!t,i=m.useCallback(c=>{a&&a(c,n)},[n,a]),o={href:s,onClick:i,className:`block text-gray-800 ${l?"":"cursor-default"}`};return e.createElement("a",{...o},r)};le.displayName="ItemLinkWrapper";le.__docgenInfo={description:"",methods:[],displayName:"ItemLinkWrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},item:{required:!0,tsType:{name:"intersection",raw:`ContentItem & {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Content';
  acceptBadgeUrl?: Maybe<Scalars['String']>;
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  badgeName?: Maybe<Scalars['String']>;
  badgeUrl?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeAssetAspectRatio?: Maybe<Scalars['String']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGracePeriodEnded: Scalars['Boolean'];
  courseGroup?: Maybe<Scalars['String']>;
  coursePresold: Scalars['Boolean'];
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  credlyBadgeExpiresAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
  currentUserMayReschedule: Scalars['Boolean'];
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['Slug']>;
  displayDate?: Maybe<Scalars['Date']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentCount?: Maybe<Scalars['Int']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  expiresAt?: Maybe<Scalars['Date']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['Date']>;
  kind?: Maybe<ContentKind>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  meetingStartDate?: Maybe<Scalars['Date']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  ribbon?: Maybe<Ribbon>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sessionTitle?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Content'",required:!1}},{key:"acceptBadgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"altDescriptionBody",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingRef",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingType",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"asset",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authorsAndInstructors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"availabilityStatus",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeName",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"bulkPurchasingEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"canAddToQueue",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeAssetAspectRatio",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeLabel",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseGracePeriodEnded",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseGroup",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"coursePresold",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"createdAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"credlyBadgeExpiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserDueDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserMayReschedule",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"currentUserUnmetCoursePrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserUnmetLearningPathPrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"customFields",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"description",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourse",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourseSlug",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"embeddedEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"expiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"freeWithRegistration",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"hasChildren",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"hideCourseDescription",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"id",value:{name:"string",raw:"Scalars['ID']",required:!0}},{key:"imageUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"isActive",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"issuedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"kind",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"language",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"location",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"meetingStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaDescription",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"priceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"publishDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"rating",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"ribbon",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"seatsLimit",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sessionTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sku",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"slug",value:{name:"string",raw:"Scalars['Slug']",required:!0}},{key:"source",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"state",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"status",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"tags",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"timeZone",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"title",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"updatedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"url",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistingEnabled",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"waitlistingTriggered",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,signature:{properties:[{key:"hasUnmetPrerequisites",value:{name:"boolean",required:!0}},{key:"isActive",value:{name:"boolean",required:!0}},{key:"hasAvailability",value:{name:"boolean",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}},{key:"isAvailable",value:{name:"boolean",required:!0}},{key:"isStarted",value:{name:"boolean",required:!0}},{key:"isNotStarted",value:{name:"boolean",required:!0}},{key:"isNotCompleted",value:{name:"boolean",required:!0}},{key:"kindIsScormOrXApi",value:{name:"boolean",required:!0}},{key:"locationIsOnline",value:{name:"boolean",required:!0}},{key:"locationIsInPerson",value:{name:"boolean",required:!0}},{key:"usesContentAccessText",value:{name:"boolean",required:!0}},{key:"callToAction",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"priceInCents",value:{name:"number",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"number",required:!1}},{key:"displayCourse",value:{name:"string",required:!1}}]}}]},description:""}}};const $=({ribbon:r,attached:a,attachedClassnames:n=""})=>{const{contrastColor:t,color:s,darkerColor:l,label:i}=r,o={color:t,backgroundColor:s},c=a?I("-right-2",n):"-top-1",u=I("text-xs font-normal leading-none absolute right-0 uppercase max-w-1/2 overflow-ellipsis z-10 px-1.5 py-1 whitespace-no-wrap",c),g={borderTopColor:l,borderLeftColor:l};return e.createElement("div",{className:u,style:o},a&&e.createElement("div",{className:"absolute right-0 top-full block h-0 w-0 border-4 border-solid border-transparent",style:g}),i)};$.displayName="ItemRibbon";$.__docgenInfo={description:"",methods:[],displayName:"ItemRibbon",props:{ribbon:{required:!0,tsType:{name:"GlobalTypes.Ribbon"},description:""},attached:{required:!0,tsType:{name:"boolean"},description:""},attachedClassnames:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const tr=(r,a)=>r.length>a?`${r.substring(0,a)}...`:r,Z=({className:r,children:a,...n})=>e.createElement(pe,{className:I(r,"overflow-hidden block transition-all"),...n},a),sr=()=>{const{t:r}=_();return e.createElement("div",{className:"block absolute h-full left-0 top-0 w-full text-center bg-white bg-opacity-80 z-1"},e.createElement("div",{className:"absolute w-full top-1/2 transform -translate-y-1/2"},e.createElement("div",null,e.createElement("i",{className:"bg-white text-3xl inline-block p-4 rounded-full border-4 border-solid border-white border-opacity-50 my-0 mx-auto bg-clip-padding","aria-label":"Completed"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#5bb65c"},e.createElement("path",{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"})))),e.createElement("p",{className:"mt-1 text-base"},r("course-completed-decal"))))},lr=({title:r,courseStartDate:a,timeZone:n})=>e.createElement("div",{className:"mb-1"},e.createElement(Z,{name:"title",as:"h3",className:"leading-6"},r),e.createElement(Z,{name:"course-date",className:"leading-4"},a&&e.createElement("span",{className:"text-xs text-gray-700"},ae(a,n,"MM/DD/YYYY")))),ir=({contentTypeLabel:r,source:a})=>e.createElement(Z,{name:"source",className:"text-xs text-gray-700 leading-4"},r&&e.createElement("strong",null,r),r&&a&&e.createElement(e.Fragment,null,`|${a}`),!r&&a&&e.createElement("strong",null,a)),or=({marked:r})=>e.createElement("span",{className:"text-accent"},r?"★":"☆"),cr=({gradePercentage:r})=>{let a;a=r*.05;const n=a%.5;return n>0&&(a=a-n+.5),e.createElement("div",null,Array.from({length:5},(t,s)=>e.createElement(or,{key:`star-${s}`,marked:a>s})))},oe=({isActive:r,callToAction:a})=>r?e.createElement("span",{className:"border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent"},a):e.createElement("span",{className:"text-xs"},a),ur=({priceInCents:r,hasAvailability:a,suggestedRetailPriceInCents:n,priceFormatFn:t})=>a?null:e.createElement(e.Fragment,null,r&&e.createElement("span",null,t(r)),n&&e.createElement("span",{className:"line-through text-gray-700 text-xs"},t(n))),dr=({priceInCents:r,annualPriceInCents:a,slug:n,priceFormatFn:t})=>{const{t:s}=_(),l={className:"cursor-pointer relative font-normal font-secondary leading-none text-xs text-accent-contrast",href:`/bundle/${n}`},i="font-bold text-sm",o="text-xs";return e.createElement("div",{className:"pt-1 px-4 pb-2 leading-none bg-accent text-accent-contrast"},e.createElement("small",null,s("primary-bundle-intro")),e.createElement("div",{className:"flex justify-between items-end"},e.createElement("div",null,r&&e.createElement("div",null,e.createElement("span",{className:i},t(r)),e.createElement("span",{className:o},`/ ${s("course.per-month")}`)),a&&e.createElement("div",null,e.createElement("span",{className:i},t(a)),e.createElement("span",{className:o},`/ ${s("course.per-year")}`))),e.createElement("a",{...l},s("bundle.learn-button"))))},mr=({onClick:r,onAddedToQueue:a,displayAuthorsEnabled:n,displayStartDateEnabled:t,displayBundle:s,item:l,priceFormatFn:i})=>{const{asset:o,title:c,description:u,isActive:g,ribbon:d,isCompleted:y,courseStartDate:p,contentTypeLabel:f,source:S,authors:k,rating:q,canAddToQueue:h,callToAction:w,priceInCents:b,hasAvailability:M,suggestedRetailPriceInCents:T,availabilityStatus:A,timeZone:C}=l,D=n&&(k!=null&&k.length)?k.join(", "):null,E=t?p:void 0;return e.createElement("li",null,e.createElement(e.Fragment,null,e.createElement(le,{item:l,onClick:r},e.createElement("div",{className:"grid grid-cols-1 border border-solid border-gray-300 relative"},d&&e.createElement($,{ribbon:d,attached:!0,attachedClassnames:"-top-1"}),e.createElement("div",{className:"relative"},y&&e.createElement(sr,null),e.createElement(V,{asset:o})),e.createElement("div",{className:"p-2.5"},c&&e.createElement(lr,{title:c,courseStartDate:E,timeZone:C}),e.createElement(ir,{contentTypeLabel:f,source:S}),e.createElement(Z,{name:"authors",as:"p",className:"text-xs mb-1 text-gray-700 leading-4"},D),e.createElement(Z,{name:"description",as:"p",className:"text-xs text-gray-700 pt-1 mb-0 leading-4"},u&&tr(u,75)),e.createElement("div",{className:"h-6"},q&&e.createElement(cr,{gradePercentage:q})),e.createElement("hr",{className:"my-3"}),e.createElement("div",{className:"text-base leading-none"},h&&e.createElement("div",{className:"flex flex-wrap-reverse justify-between items-end"},e.createElement("span",null,e.createElement(J,{item:l,onAddedToQueue:a})),e.createElement("span",null,e.createElement(oe,{isActive:g,callToAction:w}))),!h&&b&&e.createElement(e.Fragment,null,e.createElement(ur,{priceInCents:b,hasAvailability:M,suggestedRetailPriceInCents:T,priceFormatFn:i}),e.createElement(oe,{isActive:!0,callToAction:w})),!h&&!b&&e.createElement(oe,{isActive:g,callToAction:w}))))),s&&!A&&e.createElement(dr,{...s,priceFormatFn:i})))},Re=({items:r,...a})=>{const n=r.filter(({isNotCompleted:t})=>!t).map((t,s)=>e.createElement(mr,{key:`result-item-${s}`,item:t,...a}));return e.createElement(Se,null,e.createElement("ul",{className:"grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},n))};Re.displayName="DisplayTypeResultsGrid";Re.__docgenInfo={description:"",methods:[],displayName:"DisplayTypeResultsGrid",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`ContentItem & {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Content';
  acceptBadgeUrl?: Maybe<Scalars['String']>;
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  badgeName?: Maybe<Scalars['String']>;
  badgeUrl?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeAssetAspectRatio?: Maybe<Scalars['String']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGracePeriodEnded: Scalars['Boolean'];
  courseGroup?: Maybe<Scalars['String']>;
  coursePresold: Scalars['Boolean'];
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  credlyBadgeExpiresAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
  currentUserMayReschedule: Scalars['Boolean'];
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['Slug']>;
  displayDate?: Maybe<Scalars['Date']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentCount?: Maybe<Scalars['Int']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  expiresAt?: Maybe<Scalars['Date']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['Date']>;
  kind?: Maybe<ContentKind>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  meetingStartDate?: Maybe<Scalars['Date']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  ribbon?: Maybe<Ribbon>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sessionTitle?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Content'",required:!1}},{key:"acceptBadgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"altDescriptionBody",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingRef",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingType",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"asset",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authorsAndInstructors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"availabilityStatus",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeName",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"bulkPurchasingEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"canAddToQueue",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeAssetAspectRatio",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeLabel",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseGracePeriodEnded",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseGroup",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"coursePresold",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"createdAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"credlyBadgeExpiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserDueDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserMayReschedule",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"currentUserUnmetCoursePrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserUnmetLearningPathPrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"customFields",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"description",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourse",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourseSlug",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"embeddedEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"expiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"freeWithRegistration",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"hasChildren",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"hideCourseDescription",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"id",value:{name:"string",raw:"Scalars['ID']",required:!0}},{key:"imageUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"isActive",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"issuedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"kind",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"language",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"location",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"meetingStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaDescription",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"priceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"publishDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"rating",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"ribbon",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"seatsLimit",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sessionTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sku",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"slug",value:{name:"string",raw:"Scalars['Slug']",required:!0}},{key:"source",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"state",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"status",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"tags",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"timeZone",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"title",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"updatedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"url",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistingEnabled",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"waitlistingTriggered",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,signature:{properties:[{key:"hasUnmetPrerequisites",value:{name:"boolean",required:!0}},{key:"isActive",value:{name:"boolean",required:!0}},{key:"hasAvailability",value:{name:"boolean",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}},{key:"isAvailable",value:{name:"boolean",required:!0}},{key:"isStarted",value:{name:"boolean",required:!0}},{key:"isNotStarted",value:{name:"boolean",required:!0}},{key:"isNotCompleted",value:{name:"boolean",required:!0}},{key:"kindIsScormOrXApi",value:{name:"boolean",required:!0}},{key:"locationIsOnline",value:{name:"boolean",required:!0}},{key:"locationIsInPerson",value:{name:"boolean",required:!0}},{key:"usesContentAccessText",value:{name:"boolean",required:!0}},{key:"callToAction",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"priceInCents",value:{name:"number",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"number",required:!1}},{key:"displayCourse",value:{name:"string",required:!1}}]}}]}],raw:"CatalogResultItem[]"},description:""},priceFormatFn:{required:!0,tsType:{name:"signature",type:"function",raw:"(priceInCents: number) => string",signature:{arguments:[{type:{name:"number"},name:"priceInCents"}],return:{name:"string"}}},description:""}}};const gr=({contentTypeLabel:r,authors:a,source:n})=>{const t=!!(a!=null&&a.length)&&e.createElement(e.Fragment,null,`| ${a.join(", ")}`,n&&e.createElement("p",{className:"mb-1 text-gray-700"},n)),s=!(a!=null&&a.length)&&n&&e.createElement(e.Fragment,null,`| ${n}`);return e.createElement("div",{className:"mt-3 text-xs"},e.createElement("strong",null,r),t,s)},yr=({showCallToAction:r,hasAsset:a,assetIsWide:n})=>r&&a?"col-span-full md:col-span-5":a?n?"col-span-full md:col-span-8":"col-span-full md:col-span-9":r?"col-span-full md:col-span-9":"col-span-full",Sr=({onClick:r,onAddedToQueue:a,displayStartDateEnabled:n,item:t,priceFormatFn:s})=>{const{t:l}=_(),{canAddToQueue:i,priceInCents:o,isActive:c,ribbon:u,isCompleted:g,title:d,courseStartDate:y,asset:p,contentTypeAssetAspectRatio:f,contentTypeLabel:S,authors:k,source:q,description:h,callToAction:w,suggestedRetailPriceInCents:b,timeZone:M}=t,T=!!o||!c||!!i,A=!f||f==="16:9",C=!!p,D=T||u?"col-span-full md:col-span-3":"col-span-full",E=A?"col-span-full md:col-span-4":"col-span-6 md:col-span-2",N=yr({showCallToAction:T,hasAsset:C,assetIsWide:A}),B="col-span-full md:col-span-3",P="bg-accent hover:bg-accent-hover border border-solid border-accent hover:border-accent-hover rounded-sm font-normal font-secondary text-accent-contrast text-sm text-center no-underline leading-none cursor-pointer inline-block relative transition-colors ease-in-out duration-200 py-1 px-3 table mx-auto";return e.createElement(le,{onClick:r,item:t},e.createElement("div",{className:"mb-5 border-b border-solid border-gray-300 mr-2 pb-5"},e.createElement("div",{className:"relative"},e.createElement("div",{className:"grid grid-cols-4"},e.createElement("div",{className:D},g&&e.createElement("div",{className:"pb-1 flex items-center gap-x-1"},e.createElement("i",{className:"inline-block w-4 h-4 text-green-500","aria-label":"Completed"},e.createElement(be,null)),l("course-completed-decal")),e.createElement("h3",{className:"pr-3 text-black"},d,n&&y&&e.createElement(e.Fragment,null,e.createElement("br",null),e.createElement("span",{className:"text-xs text-gray-700"},ae(y,M,"MM/DD/YYYY")))))),!T&&u&&e.createElement($,{ribbon:u,attached:!1})),e.createElement("div",{className:"relative"},T&&u&&e.createElement($,{ribbon:u,attached:!0,attachedClassnames:"-top-5"}),e.createElement("div",{className:"grid grid-cols-12 gap-4"},p&&e.createElement("div",{className:E},e.createElement(V,{asset:p})),e.createElement("div",{className:N},e.createElement(gr,{contentTypeLabel:S,authors:k,source:q}),e.createElement("div",{className:"text-xs mt-2 text-gray-700 pr-1 leading-6"},h)),T&&e.createElement("div",{className:B},e.createElement("div",{className:"border border-solid border-gray-300 p-4 mt-4 md:-mt-4 text-center"},i&&e.createElement("div",{className:"mt-4"},c&&e.createElement("span",{className:P},w),!c&&e.createElement("div",{className:"text-xs"},w),e.createElement(J,{item:t,onAddedToQueue:a,classNames:"mt-3 mx-auto block"})),!i&&o&&e.createElement(e.Fragment,null,e.createElement("div",{className:"text-lg font-bold text-center"},s(o)),b&&e.createElement("div",{className:"text-base pt-0 line-through text-center text-gray-400"},s(b)),e.createElement("div",{className:"mt-4"},e.createElement("button",{className:P},w))),!i&&!o&&e.createElement("div",{className:"text-xs"},w)))))))},Be=({items:r,...a})=>{const n=r.filter(({isNotCompleted:t})=>!t).map((t,s)=>e.createElement(Sr,{key:`result-item-${s}`,item:t,...a}));return e.createElement(e.Fragment,null,n)};Be.displayName="DisplayTypeResultsList";Be.__docgenInfo={description:"",methods:[],displayName:"DisplayTypeResultsList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`ContentItem & {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Content';
  acceptBadgeUrl?: Maybe<Scalars['String']>;
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  badgeName?: Maybe<Scalars['String']>;
  badgeUrl?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeAssetAspectRatio?: Maybe<Scalars['String']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGracePeriodEnded: Scalars['Boolean'];
  courseGroup?: Maybe<Scalars['String']>;
  coursePresold: Scalars['Boolean'];
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  credlyBadgeExpiresAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
  currentUserMayReschedule: Scalars['Boolean'];
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['Slug']>;
  displayDate?: Maybe<Scalars['Date']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentCount?: Maybe<Scalars['Int']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  expiresAt?: Maybe<Scalars['Date']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['Date']>;
  kind?: Maybe<ContentKind>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  meetingStartDate?: Maybe<Scalars['Date']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  ribbon?: Maybe<Ribbon>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sessionTitle?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Content'",required:!1}},{key:"acceptBadgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"altDescriptionBody",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingRef",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingType",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"asset",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authorsAndInstructors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"availabilityStatus",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeName",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"bulkPurchasingEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"canAddToQueue",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeAssetAspectRatio",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeLabel",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseGracePeriodEnded",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseGroup",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"coursePresold",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"createdAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"credlyBadgeExpiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserDueDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserMayReschedule",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"currentUserUnmetCoursePrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserUnmetLearningPathPrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"customFields",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"description",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourse",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourseSlug",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"embeddedEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"expiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"freeWithRegistration",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"hasChildren",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"hideCourseDescription",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"id",value:{name:"string",raw:"Scalars['ID']",required:!0}},{key:"imageUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"isActive",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"issuedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"kind",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"language",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"location",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"meetingStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaDescription",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"priceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"publishDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"rating",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"ribbon",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"seatsLimit",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sessionTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sku",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"slug",value:{name:"string",raw:"Scalars['Slug']",required:!0}},{key:"source",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"state",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"status",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"tags",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"timeZone",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"title",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"updatedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"url",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistingEnabled",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"waitlistingTriggered",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,signature:{properties:[{key:"hasUnmetPrerequisites",value:{name:"boolean",required:!0}},{key:"isActive",value:{name:"boolean",required:!0}},{key:"hasAvailability",value:{name:"boolean",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}},{key:"isAvailable",value:{name:"boolean",required:!0}},{key:"isStarted",value:{name:"boolean",required:!0}},{key:"isNotStarted",value:{name:"boolean",required:!0}},{key:"isNotCompleted",value:{name:"boolean",required:!0}},{key:"kindIsScormOrXApi",value:{name:"boolean",required:!0}},{key:"locationIsOnline",value:{name:"boolean",required:!0}},{key:"locationIsInPerson",value:{name:"boolean",required:!0}},{key:"usesContentAccessText",value:{name:"boolean",required:!0}},{key:"callToAction",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"priceInCents",value:{name:"number",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"number",required:!1}},{key:"displayCourse",value:{name:"string",required:!1}}]}}]}],raw:"CatalogResultItem[]"},description:""},priceFormatFn:{required:!0,tsType:{name:"signature",type:"function",raw:"(priceInCents: number) => string",signature:{arguments:[{type:{name:"number"},name:"priceInCents"}],return:{name:"string"}}},description:""}}};const pr="en-US",br="USD",vr=({activeDisplayType:r,hydratedResults:a,displayBundle:n,displayAuthorsEnabled:t,displayStartDateEnabled:s,displayDescriptionOnCalendar:l,companyTimeZone:i,onClick:o,onAddedToQueue:c,priceFormatFn:u})=>{const g={items:a,onAddedToQueue:c,priceFormatFn:u};let d;switch(r){case R.List:return d={...g,onClick:o,displayStartDateEnabled:s},e.createElement(Be,{...d});case R.Grid:return d={...g,onClick:o,displayAuthorsEnabled:t,displayStartDateEnabled:s,displayBundle:n},e.createElement(Re,{...d});case R.Calendar:return d={...g,displayDescriptionOnCalendar:l,companyTimeZone:i},e.createElement(xe,{...d});default:return r}},Ue=({companyHasSessionLevelCustomFieldsFeature:r,companyTimeZone:a,onClick:n,onAddedToQueue:t,priceFormat:s,companyDefaultLocale:l,currencyCode:i})=>{const{params:o}=L(),{aggregations:c,aggregationFilters:u,displayType:g,resultsDisplayType:d,results:y,queryCustomFields:p,displayBundle:f,displayAuthorsEnabled:S,displayStartDateEnabled:k,displayDescriptionOnCalendar:q}=o,{i18n:h,t:w}=_();let b;if(u.length){const{label:P,value:U}=u[0];c.forEach(({label:O,buckets:H=[]})=>{O===P&&H.forEach(({value:ie,description:j})=>{ie===U&&(b=j)})})}const M=g||d,T=r?p:{},A=y.map(P=>Ia(h,P,a,T)),C=!!A.length;let D=s;if(!D){const P=l??pr,U=i??br,O=new Intl.NumberFormat(P,{style:"currency",currency:U});D=H=>O.format(H/100)}const E=!C&&e.createElement("div",{className:"bg-gray-100 text-gray-700 p-4 mb-4 rounded"},w("filter-no-courses")),N=!!b&&e.createElement(e.Fragment,null,b,e.createElement("hr",null)),B={hydratedResults:A,displayBundle:f,displayAuthorsEnabled:S,displayStartDateEnabled:k,displayDescriptionOnCalendar:q,companyTimeZone:a,onClick:n,onAddedToQueue:t,priceFormatFn:D};return e.createElement(e.Fragment,null,N,E,C&&M&&e.createElement(vr,{...B,activeDisplayType:M}))};Ue.displayName="CatalogResults";Ue.__docgenInfo={description:"",methods:[],displayName:"CatalogResults",props:{companyHasSessionLevelCustomFieldsFeature:{required:!1,tsType:{name:"boolean"},description:"company feature flag for content hydration"},companyTimeZone:{required:!1,tsType:{name:"string"},description:"company property to override item's timezone"},onAddedToQueue:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: CatalogResultItem) => Promise<boolean | void>",signature:{arguments:[{type:{name:"intersection",raw:`ContentItem & {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Content';
  acceptBadgeUrl?: Maybe<Scalars['String']>;
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  badgeName?: Maybe<Scalars['String']>;
  badgeUrl?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeAssetAspectRatio?: Maybe<Scalars['String']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGracePeriodEnded: Scalars['Boolean'];
  courseGroup?: Maybe<Scalars['String']>;
  coursePresold: Scalars['Boolean'];
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  credlyBadgeExpiresAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
  currentUserMayReschedule: Scalars['Boolean'];
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['Slug']>;
  displayDate?: Maybe<Scalars['Date']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentCount?: Maybe<Scalars['Int']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  expiresAt?: Maybe<Scalars['Date']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['Date']>;
  kind?: Maybe<ContentKind>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  meetingStartDate?: Maybe<Scalars['Date']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  ribbon?: Maybe<Ribbon>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sessionTitle?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Content'",required:!1}},{key:"acceptBadgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"altDescriptionBody",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingRef",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingType",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"asset",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authorsAndInstructors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"availabilityStatus",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeName",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"bulkPurchasingEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"canAddToQueue",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeAssetAspectRatio",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeLabel",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseGracePeriodEnded",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseGroup",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"coursePresold",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"createdAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"credlyBadgeExpiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserDueDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserMayReschedule",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"currentUserUnmetCoursePrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserUnmetLearningPathPrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"customFields",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"description",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourse",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourseSlug",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"embeddedEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"expiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"freeWithRegistration",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"hasChildren",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"hideCourseDescription",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"id",value:{name:"string",raw:"Scalars['ID']",required:!0}},{key:"imageUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"isActive",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"issuedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"kind",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"language",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"location",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"meetingStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaDescription",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"priceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"publishDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"rating",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"ribbon",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"seatsLimit",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sessionTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sku",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"slug",value:{name:"string",raw:"Scalars['Slug']",required:!0}},{key:"source",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"state",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"status",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"tags",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"timeZone",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"title",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"updatedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"url",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistingEnabled",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"waitlistingTriggered",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,signature:{properties:[{key:"hasUnmetPrerequisites",value:{name:"boolean",required:!0}},{key:"isActive",value:{name:"boolean",required:!0}},{key:"hasAvailability",value:{name:"boolean",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}},{key:"isAvailable",value:{name:"boolean",required:!0}},{key:"isStarted",value:{name:"boolean",required:!0}},{key:"isNotStarted",value:{name:"boolean",required:!0}},{key:"isNotCompleted",value:{name:"boolean",required:!0}},{key:"kindIsScormOrXApi",value:{name:"boolean",required:!0}},{key:"locationIsOnline",value:{name:"boolean",required:!0}},{key:"locationIsInPerson",value:{name:"boolean",required:!0}},{key:"usesContentAccessText",value:{name:"boolean",required:!0}},{key:"callToAction",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"priceInCents",value:{name:"number",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"number",required:!1}},{key:"displayCourse",value:{name:"string",required:!1}}]}}]},name:"item"}],return:{name:"Promise",elements:[{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}],raw:"Promise<boolean | void>"}}},description:"event handler for add to queue button for each item"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: SyntheticEvent, item: CatalogResultItem) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"evt"},{type:{name:"intersection",raw:`ContentItem & {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Content';
  acceptBadgeUrl?: Maybe<Scalars['String']>;
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  badgeName?: Maybe<Scalars['String']>;
  badgeUrl?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeAssetAspectRatio?: Maybe<Scalars['String']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGracePeriodEnded: Scalars['Boolean'];
  courseGroup?: Maybe<Scalars['String']>;
  coursePresold: Scalars['Boolean'];
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  credlyBadgeExpiresAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
  currentUserMayReschedule: Scalars['Boolean'];
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['Slug']>;
  displayDate?: Maybe<Scalars['Date']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentCount?: Maybe<Scalars['Int']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  expiresAt?: Maybe<Scalars['Date']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['Date']>;
  kind?: Maybe<ContentKind>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  meetingStartDate?: Maybe<Scalars['Date']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  ribbon?: Maybe<Ribbon>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sessionTitle?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Content'",required:!1}},{key:"acceptBadgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"altDescriptionBody",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingRef",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingType",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"asset",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authorsAndInstructors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"availabilityStatus",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeName",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"bulkPurchasingEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"canAddToQueue",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeAssetAspectRatio",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeLabel",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseGracePeriodEnded",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseGroup",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"coursePresold",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"createdAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"credlyBadgeExpiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserDueDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserMayReschedule",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"currentUserUnmetCoursePrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserUnmetLearningPathPrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"customFields",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"description",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourse",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourseSlug",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"embeddedEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"expiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"freeWithRegistration",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"hasChildren",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"hideCourseDescription",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"id",value:{name:"string",raw:"Scalars['ID']",required:!0}},{key:"imageUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"isActive",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"issuedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"kind",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"language",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"location",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"meetingStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaDescription",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"priceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"publishDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"rating",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"ribbon",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"seatsLimit",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sessionTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sku",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"slug",value:{name:"string",raw:"Scalars['Slug']",required:!0}},{key:"source",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"state",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"status",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"tags",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"timeZone",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"title",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"updatedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"url",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistingEnabled",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"waitlistingTriggered",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,signature:{properties:[{key:"hasUnmetPrerequisites",value:{name:"boolean",required:!0}},{key:"isActive",value:{name:"boolean",required:!0}},{key:"hasAvailability",value:{name:"boolean",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}},{key:"isAvailable",value:{name:"boolean",required:!0}},{key:"isStarted",value:{name:"boolean",required:!0}},{key:"isNotStarted",value:{name:"boolean",required:!0}},{key:"isNotCompleted",value:{name:"boolean",required:!0}},{key:"kindIsScormOrXApi",value:{name:"boolean",required:!0}},{key:"locationIsOnline",value:{name:"boolean",required:!0}},{key:"locationIsInPerson",value:{name:"boolean",required:!0}},{key:"usesContentAccessText",value:{name:"boolean",required:!0}},{key:"callToAction",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"priceInCents",value:{name:"number",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"number",required:!1}},{key:"displayCourse",value:{name:"string",required:!1}}]}}]},name:"item"}],return:{name:"void"}}},description:"optional event handler for each item"},priceFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(priceInCents: number) => string",signature:{arguments:[{type:{name:"number"},name:"priceInCents"}],return:{name:"string"}}},description:"optional function for prioritized price formatting"},companyDefaultLocale:{required:!1,tsType:{name:"string"},description:"company property to format price"},currencyCode:{required:!1,tsType:{name:"string"},description:"currency code to format price"},numberOfContentItems:{required:!1,tsType:{name:"number"},description:"specify number of items to return from catalog"}}};const Le=({pagination:r})=>{const{params:a,urlManager:n}=L(),{page:t=1,pageSize:s,total:l}=a;if(!l)return null;const i=n.composeURLForSetPage.bind(n),o={page:t,pageSize:s,total:l,getPageLink:i,linkComponent:Q};return r?m.cloneElement(r({...o})):e.createElement(Ea,{...o})};Le.displayName="CatalogPagination";Le.__docgenInfo={description:"",methods:[],displayName:"CatalogPagination"};const _e=({children:r})=>{const{isLoading:a}=L();return a?e.createElement(wa,null):r};_e.displayName="CatalogLoader";_e.__docgenInfo={description:"",methods:[],displayName:"CatalogLoader",props:{children:{required:!0,tsType:{name:"ReactElement"},description:""}}};const W=({title:r,alternateTitleDisplay:a,pagination:n,...t})=>{const{t:s}=_(),{scrollToRef:l,contentWrapperRef:i}=L();return e.createElement("div",{className:"w-full"},e.createElement("div",{ref:l},r&&e.createElement(Da,{title:r,alternateTitleDisplay:a}),!r&&e.createElement("h3",null,s("catalog-search-header"))),e.createElement("div",{ref:i},e.createElement(_e,null,e.createElement(Ne,null,e.createElement(e.Fragment,null,e.createElement(Ie,null),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"grid grid-cols-4 gap-4"},e.createElement("div",{className:"col-span-full md:col-span-1"},e.createElement(Pe,null)),e.createElement("div",{className:"col-span-full md:col-span-3"},e.createElement(Ue,{...t}),e.createElement(Le,{pagination:n})))))))))};W.displayName="Catalog";W.__docgenInfo={description:"",methods:[],displayName:"Catalog",props:{companyHasSessionLevelCustomFieldsFeature:{required:!1,tsType:{name:"boolean"},description:"company feature flag for content hydration"},companyTimeZone:{required:!1,tsType:{name:"string"},description:"company property to override item's timezone"},onAddedToQueue:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: CatalogResultItem) => Promise<boolean | void>",signature:{arguments:[{type:{name:"intersection",raw:`ContentItem & {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Content';
  acceptBadgeUrl?: Maybe<Scalars['String']>;
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  badgeName?: Maybe<Scalars['String']>;
  badgeUrl?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeAssetAspectRatio?: Maybe<Scalars['String']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGracePeriodEnded: Scalars['Boolean'];
  courseGroup?: Maybe<Scalars['String']>;
  coursePresold: Scalars['Boolean'];
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  credlyBadgeExpiresAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
  currentUserMayReschedule: Scalars['Boolean'];
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['Slug']>;
  displayDate?: Maybe<Scalars['Date']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentCount?: Maybe<Scalars['Int']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  expiresAt?: Maybe<Scalars['Date']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['Date']>;
  kind?: Maybe<ContentKind>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  meetingStartDate?: Maybe<Scalars['Date']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  ribbon?: Maybe<Ribbon>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sessionTitle?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Content'",required:!1}},{key:"acceptBadgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"altDescriptionBody",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingRef",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingType",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"asset",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authorsAndInstructors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"availabilityStatus",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeName",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"bulkPurchasingEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"canAddToQueue",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeAssetAspectRatio",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeLabel",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseGracePeriodEnded",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseGroup",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"coursePresold",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"createdAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"credlyBadgeExpiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserDueDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserMayReschedule",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"currentUserUnmetCoursePrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserUnmetLearningPathPrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"customFields",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"description",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourse",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourseSlug",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"embeddedEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"expiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"freeWithRegistration",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"hasChildren",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"hideCourseDescription",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"id",value:{name:"string",raw:"Scalars['ID']",required:!0}},{key:"imageUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"isActive",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"issuedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"kind",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"language",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"location",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"meetingStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaDescription",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"priceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"publishDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"rating",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"ribbon",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"seatsLimit",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sessionTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sku",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"slug",value:{name:"string",raw:"Scalars['Slug']",required:!0}},{key:"source",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"state",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"status",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"tags",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"timeZone",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"title",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"updatedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"url",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistingEnabled",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"waitlistingTriggered",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,signature:{properties:[{key:"hasUnmetPrerequisites",value:{name:"boolean",required:!0}},{key:"isActive",value:{name:"boolean",required:!0}},{key:"hasAvailability",value:{name:"boolean",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}},{key:"isAvailable",value:{name:"boolean",required:!0}},{key:"isStarted",value:{name:"boolean",required:!0}},{key:"isNotStarted",value:{name:"boolean",required:!0}},{key:"isNotCompleted",value:{name:"boolean",required:!0}},{key:"kindIsScormOrXApi",value:{name:"boolean",required:!0}},{key:"locationIsOnline",value:{name:"boolean",required:!0}},{key:"locationIsInPerson",value:{name:"boolean",required:!0}},{key:"usesContentAccessText",value:{name:"boolean",required:!0}},{key:"callToAction",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"priceInCents",value:{name:"number",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"number",required:!1}},{key:"displayCourse",value:{name:"string",required:!1}}]}}]},name:"item"}],return:{name:"Promise",elements:[{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}],raw:"Promise<boolean | void>"}}},description:"event handler for add to queue button for each item"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(evt: SyntheticEvent, item: CatalogResultItem) => void",signature:{arguments:[{type:{name:"SyntheticEvent"},name:"evt"},{type:{name:"intersection",raw:`ContentItem & {
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Content';
  acceptBadgeUrl?: Maybe<Scalars['String']>;
  altDescriptionBody?: Maybe<Scalars['String']>;
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorsAndInstructors?: Maybe<Array<Scalars['String']>>;
  availabilityStatus?: Maybe<Scalars['String']>;
  badgeName?: Maybe<Scalars['String']>;
  badgeUrl?: Maybe<Scalars['String']>;
  bulkPurchasingEnabled?: Maybe<Scalars['Boolean']>;
  canAddToQueue?: Maybe<Scalars['Boolean']>;
  contentTypeAssetAspectRatio?: Maybe<Scalars['String']>;
  contentTypeLabel?: Maybe<Scalars['String']>;
  courseEndDate?: Maybe<Scalars['Date']>;
  courseGracePeriodEnded: Scalars['Boolean'];
  courseGroup?: Maybe<Scalars['String']>;
  coursePresold: Scalars['Boolean'];
  courseStartDate?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  credlyBadgeExpiresAt?: Maybe<Scalars['Date']>;
  currentUserDueDate?: Maybe<Scalars['Date']>;
  currentUserMayReschedule: Scalars['Boolean'];
  currentUserUnmetCoursePrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currentUserUnmetLearningPathPrerequisites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  customFields?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  displayCourse?: Maybe<Scalars['ID']>;
  displayCourseSlug?: Maybe<Scalars['Slug']>;
  displayDate?: Maybe<Scalars['Date']>;
  embeddedEnabled?: Maybe<Scalars['Boolean']>;
  enrollmentCount?: Maybe<Scalars['Int']>;
  enrollmentEndDate?: Maybe<Scalars['Date']>;
  enrollmentStartDate?: Maybe<Scalars['Date']>;
  expiresAt?: Maybe<Scalars['Date']>;
  freeWithRegistration?: Maybe<Scalars['Boolean']>;
  hasChildren: Scalars['Boolean'];
  hideCourseDescription: Scalars['Boolean'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  issuedAt?: Maybe<Scalars['Date']>;
  kind?: Maybe<ContentKind>;
  language?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  meetingStartDate?: Maybe<Scalars['Date']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  ribbon?: Maybe<Ribbon>;
  seatsLimit?: Maybe<Scalars['Int']>;
  sessionTitle?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  source?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['AbsoluteOrRelativeURL']>;
  waitlistCount?: Maybe<Scalars['Int']>;
  waitlistingEnabled: Scalars['Boolean'];
  waitlistingTriggered: Scalars['Boolean'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Content'",required:!1}},{key:"acceptBadgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"altDescriptionBody",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingRef",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"alternativePricingType",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"asset",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"authorsAndInstructors",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"availabilityStatus",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeName",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"badgeUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"bulkPurchasingEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"canAddToQueue",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeAssetAspectRatio",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"contentTypeLabel",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"courseGracePeriodEnded",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseGroup",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"coursePresold",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"courseStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"createdAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"credlyBadgeExpiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserDueDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserMayReschedule",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"currentUserUnmetCoursePrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"currentUserUnmetLearningPathPrerequisites",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"customFields",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"description",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourse",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayCourseSlug",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"displayDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"embeddedEnabled",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentEndDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"enrollmentStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"expiresAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"freeWithRegistration",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"hasChildren",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"hideCourseDescription",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"id",value:{name:"string",raw:"Scalars['ID']",required:!0}},{key:"imageUrl",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"isActive",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"issuedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"kind",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"language",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"location",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"meetingStartDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaDescription",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"metaTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"priceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"publishDate",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"rating",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"ribbon",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"seatsLimit",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sessionTitle",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"sku",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"slug",value:{name:"string",raw:"Scalars['Slug']",required:!0}},{key:"source",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"state",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"status",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"tags",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"timeZone",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"title",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"updatedAt",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"url",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistCount",value:{name:"string",raw:"Scalars['String']",required:!1}},{key:"waitlistingEnabled",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}},{key:"waitlistingTriggered",value:{name:"boolean",raw:"Scalars['Boolean']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  hasUnmetPrerequisites: boolean;
  isActive: boolean;
  hasAvailability: boolean;
  isCompleted: boolean;
  isAvailable: boolean;
  isStarted: boolean;
  isNotStarted: boolean;
  isNotCompleted: boolean;
  kindIsScormOrXApi: boolean;
  locationIsOnline: boolean;
  locationIsInPerson: boolean;
  usesContentAccessText: boolean;
  callToAction: string;
  href: string;
  priceInCents?: number;
  suggestedRetailPriceInCents?: number;
  displayCourse?: string;
}`,signature:{properties:[{key:"hasUnmetPrerequisites",value:{name:"boolean",required:!0}},{key:"isActive",value:{name:"boolean",required:!0}},{key:"hasAvailability",value:{name:"boolean",required:!0}},{key:"isCompleted",value:{name:"boolean",required:!0}},{key:"isAvailable",value:{name:"boolean",required:!0}},{key:"isStarted",value:{name:"boolean",required:!0}},{key:"isNotStarted",value:{name:"boolean",required:!0}},{key:"isNotCompleted",value:{name:"boolean",required:!0}},{key:"kindIsScormOrXApi",value:{name:"boolean",required:!0}},{key:"locationIsOnline",value:{name:"boolean",required:!0}},{key:"locationIsInPerson",value:{name:"boolean",required:!0}},{key:"usesContentAccessText",value:{name:"boolean",required:!0}},{key:"callToAction",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"priceInCents",value:{name:"number",required:!1}},{key:"suggestedRetailPriceInCents",value:{name:"number",required:!1}},{key:"displayCourse",value:{name:"string",required:!1}}]}}]},name:"item"}],return:{name:"void"}}},description:"optional event handler for each item"},priceFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(priceInCents: number) => string",signature:{arguments:[{type:{name:"number"},name:"priceInCents"}],return:{name:"string"}}},description:"optional function for prioritized price formatting"},companyDefaultLocale:{required:!1,tsType:{name:"string"},description:"company property to format price"},currencyCode:{required:!1,tsType:{name:"string"},description:"currency code to format price"},numberOfContentItems:{required:!1,tsType:{name:"number"},description:"specify number of items to return from catalog"},title:{required:!1,tsType:{name:"string"},description:"title that appears on top of the catalog"},alternateTitleDisplay:{required:!1,tsType:{name:"boolean"},description:"display alternate title"},pagination:{required:!1,tsType:{name:"signature",type:"function",raw:"(args: PaginationFnArgs) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  page: number;
  pageSize: number;
  total: number;
  getPageLink: (page: number) => string;
  linkComponent?: ElementType;
}`,signature:{properties:[{key:"page",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"total",value:{name:"number",required:!0}},{key:"getPageLink",value:{name:"signature",type:"function",raw:"(page: number) => string",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"string"}},required:!0}},{key:"linkComponent",value:{name:"ElementType",required:!1}}]}},name:"args"}],return:{name:"ReactElement"}}},description:"optional view for pagination"}}};const Ur={component:W,title:"Packages/Catalog"},fr={id:"uuid-bundle",name:"test bundle",priceInCents:100,annualPriceInCents:1e3,slug:"test-bundle"},kr=[{label:"Label 1",buckets:[{value:"Bucket 1",count:10},{value:"Bucket 2",count:20}]},{label:"Label 2",buckets:[{value:"Bucket 3",count:20}]},{label:"Label 3",buckets:[{value:"en",query:"language:en",count:30},{value:"jp",query:"language:jp",count:40}]}],qr=["type 1","type 2"],ze={asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",authors:["Test Author"],availabilityStatus:"",canAddToQueue:!0,contentTypeLabel:"Course",courseEndDate:new Date(2020,1,1).toISOString(),courseGracePeriodEnded:!1,coursePresold:!1,courseStartDate:new Date(2020,0,1).toISOString(),currentUserMayReschedule:!1,description:"description",kind:ra.Course,hasChildren:!1,hideCourseDescription:!1,id:"uuid",isActive:!0,location:{id:"uuid-location",name:"test location",address1:"test address1",city:"test city"},priceInCents:6500,rating:36,slug:"test-content",source:"Test source",suggestedRetailPriceInCents:8e3,timeZone:"America/Los_Angeles",title:"Test title",waitlistingEnabled:!1,waitlistingTriggered:!1,ribbon:{color:"#39ad39",contrastColor:"#fff",darkerColor:"#2c872c",label:"Test ribbon",slug:"test-ribbon"}},wr=r=>Array.from({length:r},(a,n)=>({...ze,id:`${ze.id}-${n}`})),hr=({displayType:r,sortColumn:a,sortDirection:n})=>({contentItems:[...wr(6)],meta:{displayBundle:fr,tokenLabel:"token label",total:100,hasMore:!0,isCurated:!1,aggregations:kr,contentTypes:qr,resultsDisplayType:r,selectedSortColumn:a,selectedSortDirection:n,sortUpdatedAtEnabled:!0,sortCreatedAtEnabled:!0,sortTitleEnabled:!0,sortPublishDateEnabled:!0,sortCourseStartDateEnabled:!0,sortRelevanceEnabled:!0,displayTypeListEnabled:!0,displayTypeGridEnabled:!0,displayTypeCalendarEnabled:!0,displayStartDateEnabled:!0,displayAuthorsEnabled:!0,displayDescriptionOnCalendar:!0,contentTypeFilterEnabled:!0,queryCustomFields:"{}"}}),Cr=[{label:"English",code:"en"}],Fe=r=>[{request:{query:Ma,variables:{page:1,sortColumn:void 0,sortDirection:void 0,resultsDisplayType:void 0,token:"test-token",contentTypes:[],query:"test search term",labels:[],values:[],layoutId:void 0,widgetId:void 0}},result:{data:{CatalogContent:hr(r)}}},{request:{query:Aa},result:{data:{Languages:[...Cr]}}},{request:{query:ha,variables:{resourceId:"test-content",resourceType:ra.Course}},result:{data:{AddResourceToQueue:!0}},newData:()=>({data:{AddResourceToQueue:!0}})}],Oe={pathName:"/catalog",searchString:"?token=test-token&query=test%20search%20term",ssr:!0},Mr={watchQuery:{fetchPolicy:"no-cache"},query:{fetchPolicy:"no-cache"}},Qe={addTypename:!1,defaultOptions:Mr},Y={render:()=>e.createElement(()=>{const[r]=ge(),a=({slug:n,kind:t,displayCourse:s})=>{const l=s||n;return l?r({variables:{resourceId:l,resourceType:t}}).then():Promise.resolve()};return e.createElement(re,{...Oe},e.createElement(W,{onAddedToQueue:a}))}),parameters:{apolloClient:{...Qe,mocks:[...Fe({displayType:R.List,sortColumn:x.DisplayDate,sortDirection:F.Asc})]}}},K={render:()=>e.createElement(()=>{const[r]=ge(),a=({slug:n,kind:t,displayCourse:s})=>{const l=s||n;return l?r({variables:{resourceId:l,resourceType:t}}).then():Promise.resolve()};return e.createElement(re,{...Oe},e.createElement(W,{onAddedToQueue:a}))}),parameters:{apolloClient:{...Qe,mocks:[...Fe({displayType:R.Grid,sortColumn:x.DisplayDate,sortDirection:F.Asc})]}}},ee={render:()=>e.createElement(()=>{const[r]=ge(),a=({slug:n,kind:t,displayCourse:s})=>{const l=s||n;return l?r({variables:{resourceId:l,resourceType:t}}).then():Promise.resolve()};return e.createElement(re,{...Oe},e.createElement(W,{onAddedToQueue:a}))}),parameters:{apolloClient:{...Qe,mocks:[...Fe({displayType:R.Calendar,sortColumn:x.DisplayDate,sortDirection:F.Asc})]}}};var $e,Ze,Xe;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => React.createElement(() => {
    const [addResourceToQueue] = useAddResourceToQueueMutation();
    const handleAddedToQueue = ({
      slug,
      kind,
      displayCourse
    }: CatalogResultItem): Promise<void> => {
      const resourceId = displayCourse || slug;
      return resourceId ? addResourceToQueue({
        variables: {
          resourceId,
          resourceType: kind
        }
      }).then() : Promise.resolve();
    };
    return <CatalogProvider {...props}>
          <Catalog onAddedToQueue={handleAddedToQueue} />
        </CatalogProvider>;
  }),
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [...mockApolloResultsFactory({
        displayType: GlobalTypes.ContentItemDisplayType.List,
        sortColumn: GlobalTypes.SortColumn.DisplayDate,
        sortDirection: GlobalTypes.SortDirection.Asc
      })]
    }
  }
}`,...(Xe=(Ze=Y.parameters)==null?void 0:Ze.docs)==null?void 0:Xe.source}}};var Ve,Je,Ye;K.parameters={...K.parameters,docs:{...(Ve=K.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => React.createElement(() => {
    const [addResourceToQueue] = useAddResourceToQueueMutation();
    const handleAddedToQueue = ({
      slug,
      kind,
      displayCourse
    }: CatalogResultItem): Promise<void> => {
      const resourceId = displayCourse || slug;
      return resourceId ? addResourceToQueue({
        variables: {
          resourceId,
          resourceType: kind
        }
      }).then() : Promise.resolve();
    };
    return <CatalogProvider {...props}>
          <Catalog onAddedToQueue={handleAddedToQueue} />
        </CatalogProvider>;
  }),
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [...mockApolloResultsFactory({
        displayType: GlobalTypes.ContentItemDisplayType.Grid,
        sortColumn: GlobalTypes.SortColumn.DisplayDate,
        sortDirection: GlobalTypes.SortDirection.Asc
      })]
    }
  }
}`,...(Ye=(Je=K.parameters)==null?void 0:Je.docs)==null?void 0:Ye.source}}};var Ke,ea,aa;ee.parameters={...ee.parameters,docs:{...(Ke=ee.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => React.createElement(() => {
    const [addResourceToQueue] = useAddResourceToQueueMutation();
    const handleAddedToQueue = ({
      slug,
      kind,
      displayCourse
    }: CatalogResultItem): Promise<void> => {
      const resourceId = displayCourse || slug;
      return resourceId ? addResourceToQueue({
        variables: {
          resourceId,
          resourceType: kind
        }
      }).then() : Promise.resolve();
    };
    return <CatalogProvider {...props}>
          <Catalog onAddedToQueue={handleAddedToQueue} />
        </CatalogProvider>;
  }),
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [...mockApolloResultsFactory({
        displayType: GlobalTypes.ContentItemDisplayType.Calendar,
        sortColumn: GlobalTypes.SortColumn.DisplayDate,
        sortDirection: GlobalTypes.SortDirection.Asc
      })]
    }
  }
}`,...(aa=(ea=ee.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};const Lr=["List","Grid","Calendar"];export{ee as Calendar,K as Grid,Y as List,Lr as __namedExportsOrder,Ur as default};
