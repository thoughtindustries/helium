import{b as ur,a as pe}from"./jsx-runtime-9707e85d.js";import{_ as B,Z as Ct,c as x,a4 as cr,a5 as lr,e as Ue,a6 as ae,k as dr,l as ne,o as pr,a7 as ve,a as $e,F as yr,a8 as bt}from"./ApolloContext-744973fc.js";import{r as T,a as hr}from"./index-e0ddb630.js";import{p as fr}from"./parser-170a9164.js";import{c as ce}from"./_commonjsHelpers-87174ba5.js";var ie=new Map,he=new Map,Ut=!0,ue=!1;function $t(e){return e.replace(/[\s,]+/g," ").trim()}function mr(e){return $t(e.source.body.substring(e.start,e.end))}function _r(e){var t=new Set,r=[];return e.definitions.forEach(function(n){if(n.kind==="FragmentDefinition"){var d=n.name.value,u=mr(n.loc),o=he.get(d);o&&!o.has(u)?Ut&&console.warn("Warning: fragment with name "+d+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||he.set(d,o=new Set),o.add(u),t.has(u)||(t.add(u),r.push(n))}else r.push(n)}),B(B({},e),{definitions:r})}function gr(e){var t=new Set(e.definitions);t.forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(d){var u=n[d];u&&typeof u=="object"&&t.add(u)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}function vr(e){var t=$t(e);if(!ie.has(t)){var r=fr(e,{experimentalFragmentVariables:ue,allowLegacyFragmentVariables:ue});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");ie.set(t,gr(_r(r)))}return ie.get(t)}function C(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];typeof e=="string"&&(e=[e]);var n=e[0];return t.forEach(function(d,u){d&&d.kind==="Document"?n+=d.loc.source.body:n+=d,n+=e[u+1]}),vr(n)}function Cr(){ie.clear(),he.clear()}function br(){Ut=!1}function Ur(){ue=!0}function $r(){ue=!1}var re={gql:C,resetCaches:Cr,disableFragmentWarnings:br,enableExperimentalFragmentVariables:Ur,disableExperimentalFragmentVariables:$r};(function(e){e.gql=re.gql,e.resetCaches=re.resetCaches,e.disableFragmentWarnings=re.disableFragmentWarnings,e.enableExperimentalFragmentVariables=re.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=re.disableExperimentalFragmentVariables})(C||(C={}));C.default=C;function Ce(e){var t=T.useContext(Ct()),r=e||t.client;return __DEV__?x(!!r,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):x(!!r,31),r}var Qe=!1,Qr="useSyncExternalStore",kr=hr[Qr],Dr=kr||function(e,t,r){var n=t();__DEV__&&!Qe&&n!==t()&&(Qe=!0,__DEV__&&x.error("The result of getSnapshot should be cached to avoid an infinite loop"));var d=T.useState({inst:{value:n,getSnapshot:t}}),u=d[0].inst,o=d[1];return cr?T.useLayoutEffect(function(){Object.assign(u,{value:n,getSnapshot:t}),ye(u)&&o({inst:u})},[e,n,t]):Object.assign(u,{value:n,getSnapshot:t}),T.useEffect(function(){return ye(u)&&o({inst:u}),e(function(){ye(u)&&o({inst:u})})},[e]),n};function ye(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch{return!0}}var j;(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(j||(j={}));var ke=new Map;function De(e){var t;switch(e){case j.Query:t="Query";break;case j.Mutation:t="Mutation";break;case j.Subscription:t="Subscription";break}return t}function Mr(e){var t=ke.get(e);if(t)return t;var r,n,d;__DEV__?x(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):x(!!e&&!!e.kind,32);for(var u=[],o=[],f=[],a=[],p=0,b=e.definitions;p<b.length;p++){var _=b[p];if(_.kind==="FragmentDefinition"){u.push(_);continue}if(_.kind==="OperationDefinition")switch(_.operation){case"query":o.push(_);break;case"mutation":f.push(_);break;case"subscription":a.push(_);break}}__DEV__?x(!u.length||o.length||f.length||a.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):x(!u.length||o.length||f.length||a.length,33),__DEV__?x(o.length+f.length+a.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(o.length," queries, ").concat(a.length," ")+"subscriptions and ".concat(f.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):x(o.length+f.length+a.length<=1,34),n=o.length?j.Query:j.Mutation,!o.length&&!f.length&&(n=j.Subscription);var m=o.length?o:f.length?f:a;__DEV__?x(m.length===1,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(m.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):x(m.length===1,35);var $=m[0];r=$.variableDefinitions||[],$.name&&$.name.kind==="Name"?d=$.name.value:d="data";var Q={name:d,type:n,variables:r};return ke.set(e,Q),Q}function Qt(e,t){var r=Mr(e),n=De(t),d=De(r.type);__DEV__?x(r.type===t,"Running a ".concat(n," requires a graphql ")+"".concat(n,", but a ").concat(d," was used instead.")):x(r.type===t,36)}var wr=Object.prototype.hasOwnProperty;function N(e,t){return t===void 0&&(t=Object.create(null)),kt(Ce(t.client),e).useQuery(t)}function kt(e,t){var r=T.useRef();(!r.current||e!==r.current.client||t!==r.current.query)&&(r.current=new Ir(e,t,r.current));var n=r.current,d=T.useState(0);d[0];var u=d[1];return n.forceUpdate=function(){u(function(o){return o+1})},n}var Ir=function(){function e(t,r,n){this.client=t,this.query=r,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(lr?WeakSet:Set),this.ssrDisabledResult=Ue({loading:!0,data:void 0,error:void 0,networkStatus:ae.loading}),this.skipStandbyResult=Ue({loading:!1,data:void 0,error:void 0,networkStatus:ae.ready}),this.toQueryResultCache=new(dr?WeakMap:Map),Qt(r,j.Query);var d=n&&n.result,u=d&&d.data;u&&(this.previousData=u)}return e.prototype.forceUpdate=function(){__DEV__&&x.warn("Calling default no-op implementation of InternalState#forceUpdate")},e.prototype.asyncUpdate=function(){var t=this;return new Promise(function(r){t.asyncResolveFns.add(r),t.optionsToIgnoreOnce.add(t.watchQueryOptions),t.forceUpdate()})},e.prototype.useQuery=function(t){var r=this;this.renderPromises=T.useContext(Ct()).renderPromises,this.useOptions(t);var n=this.useObservableQuery(),d=Dr(T.useCallback(function(){if(r.renderPromises)return function(){};var o=function(){var p=r.result,b=n.getCurrentResult();p&&p.loading===b.loading&&p.networkStatus===b.networkStatus&&ne(p.data,b.data)||r.setResult(b)},f=function(p){var b=n.last;a.unsubscribe();try{n.resetLastResults(),a=n.subscribe(o,f)}finally{n.last=b}if(!wr.call(p,"graphQLErrors"))throw p;var _=r.result;(!_||_&&_.loading||!ne(p,_.error))&&r.setResult({data:_&&_.data,error:p,loading:!1,networkStatus:ae.error})},a=n.subscribe(o,f);return function(){return a.unsubscribe()}},[n,this.renderPromises,this.client.disableNetworkFetches]),function(){return r.getCurrentResult()},function(){return r.getCurrentResult()});this.unsafeHandlePartialRefetch(d);var u=this.toQueryResult(d);return!u.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach(function(o){return o(u)}),this.asyncResolveFns.clear()),u},e.prototype.useOptions=function(t){var r,n=this.createWatchQueryOptions(this.queryHookOptions=t),d=this.watchQueryOptions;(this.optionsToIgnoreOnce.has(d)||!ne(n,d))&&(this.watchQueryOptions=n,d&&this.observable&&(this.optionsToIgnoreOnce.delete(d),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=((r=this.result)===null||r===void 0?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&this.queryHookOptions.ssr===!1&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||this.watchQueryOptions.fetchPolicy==="standby"?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},e.prototype.getObsQueryOptions=function(){var t=[],r=this.client.defaultOptions.watchQuery;return r&&t.push(r),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push(pr(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(ve)},e.prototype.createWatchQueryOptions=function(t){var r;t===void 0&&(t={});var n=t.skip;t.ssr,t.onCompleted,t.onError,t.defaultOptions;var d=$e(t,["skip","ssr","onCompleted","onError","defaultOptions"]),u=Object.assign(d,{query:this.query});if(this.renderPromises&&(u.fetchPolicy==="network-only"||u.fetchPolicy==="cache-and-network")&&(u.fetchPolicy="cache-first"),u.variables||(u.variables={}),n){var o=u.fetchPolicy,f=o===void 0?this.getDefaultFetchPolicy():o,a=u.initialFetchPolicy,p=a===void 0?f:a;Object.assign(u,{initialFetchPolicy:p,fetchPolicy:"standby"})}else u.fetchPolicy||(u.fetchPolicy=((r=this.observable)===null||r===void 0?void 0:r.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return u},e.prototype.getDefaultFetchPolicy=function(){var t,r;return((t=this.queryHookOptions.defaultOptions)===null||t===void 0?void 0:t.fetchPolicy)||((r=this.client.defaultOptions.watchQuery)===null||r===void 0?void 0:r.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(t){},e.prototype.onError=function(t){},e.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=T.useMemo(function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},[t]);var r=!(this.queryHookOptions.ssr===!1||this.queryHookOptions.skip);return this.renderPromises&&r&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},e.prototype.setResult=function(t){var r=this.result;r&&r.data&&(this.previousData=r.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},e.prototype.handleErrorOrCompleted=function(t){var r=this;t.loading||Promise.resolve().then(function(){t.error?r.onError(t.error):t.data&&r.onCompleted(t.data)}).catch(function(n){__DEV__&&x.warn(n)})},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(t){var r=this.toQueryResultCache.get(t);if(r)return r;var n=t.data;t.partial;var d=$e(t,["data","partial"]);return this.toQueryResultCache.set(t,r=B(B(B({data:n},d),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!r.error&&yr(t.errors)&&(r.error=new bt({graphQLErrors:t.errors})),r},e.prototype.unsafeHandlePartialRefetch=function(t){t.partial&&this.queryHookOptions.partialRefetch&&!t.loading&&(!t.data||Object.keys(t.data).length===0)&&this.observable.options.fetchPolicy!=="cache-only"&&(Object.assign(t,{loading:!0,networkStatus:ae.refetch}),this.observable.refetch())},e}(),Or=["refetch","reobserve","fetchMore","updateQuery","startPolling","subscribeToMore"];function P(e,t){var r=kt(Ce(t&&t.client),e),n=T.useRef(),d=n.current?ve(t,n.current):t,u=r.useQuery(B(B({},d),{skip:!n.current})),o=u.observable.options.initialFetchPolicy||r.getDefaultFetchPolicy(),f=Object.assign(u,{called:!!n.current}),a=T.useMemo(function(){for(var b={},_=function(i){var v=f[i];b[i]=function(){return n.current||(n.current=Object.create(null),r.forceUpdate()),v.apply(this,arguments)}},m=0,$=Or;m<$.length;m++){var Q=$[m];_(Q)}return b},[]);Object.assign(f,a);var p=T.useCallback(function(b){n.current=b?B(B({},b),{fetchPolicy:b.fetchPolicy||o}):{fetchPolicy:o};var _=r.asyncUpdate().then(function(m){return Object.assign(m,a)});return _.catch(function(){}),_},[]);return[p,f]}function Y(e,t){var r=Ce(t==null?void 0:t.client);Qt(e,j.Mutation);var n=T.useState({called:!1,loading:!1,client:r}),d=n[0],u=n[1],o=T.useRef({result:d,mutationId:0,isMounted:!0,client:r,mutation:e,options:t});Object.assign(o.current,{client:r,options:t,mutation:e});var f=T.useCallback(function(p){p===void 0&&(p={});var b=o.current,_=b.client,m=b.options,$=b.mutation,Q=B(B({},m),{mutation:$});!o.current.result.loading&&!Q.ignoreResults&&o.current.isMounted&&u(o.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:_});var i=++o.current.mutationId,v=ve(Q,p);return _.mutate(v).then(function(w){var D,M,F,O=w.data,S=w.errors,q=S&&S.length>0?new bt({graphQLErrors:S}):void 0;if(i===o.current.mutationId&&!v.ignoreResults){var z={called:!0,loading:!1,data:O,error:q,client:_};o.current.isMounted&&!ne(o.current.result,z)&&u(o.current.result=z)}return(M=(D=o.current.options)===null||D===void 0?void 0:D.onCompleted)===null||M===void 0||M.call(D,w.data,v),(F=p.onCompleted)===null||F===void 0||F.call(p,w.data,v),w}).catch(function(w){var D,M,F,O;if(i===o.current.mutationId&&o.current.isMounted){var S={loading:!1,error:w,data:void 0,called:!0,client:_};ne(o.current.result,S)||u(o.current.result=S)}if(!((D=o.current.options)===null||D===void 0)&&D.onError||v.onError)return(F=(M=o.current.options)===null||M===void 0?void 0:M.onError)===null||F===void 0||F.call(M,w,v),(O=p.onError)===null||O===void 0||O.call(p,w,v),{data:void 0,errors:w};throw w})},[]),a=T.useCallback(function(){o.current.isMounted&&u({called:!1,loading:!1,client:r})},[]);return T.useEffect(function(){return o.current.isMounted=!0,function(){o.current.isMounted=!1}},[]),[f,B({reset:a},d)]}const Rr=()=>ur("div",{className:"flex items-center justify-center space-x-10",children:[pe("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full",style:{animationDelay:"-0.32s"}}),pe("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full",style:{animationDelay:"-0.16s"}}),pe("div",{className:"animate-ping w-5 h-5 bg-gray-700 rounded-full"})]});Rr.displayName="LoadingDots";var Sr=(e=>(e.Membership="membership",e))(Sr||{}),Ar=(e=>(e.Calendar="calendar",e.Grid="grid",e.List="list",e))(Ar||{}),oe=(e=>(e.Article="article",e.Bundle="bundle",e.Course="course",e.CourseGroup="courseGroup",e.DiscountGroup="discountGroup",e.InPersonEvent="inPersonEvent",e.InPersonEventCourse="inPersonEventCourse",e.LearningPath="learningPath",e.MicroCourse="microCourse",e.PickableGroup="pickableGroup",e.Product="product",e.Sellable="sellable",e.ShareableContentObject="shareableContentObject",e.Video="video",e.Webinar="webinar",e.WebinarCourse="webinarCourse",e.XApiObject="xApiObject",e))(oe||{}),Fr=(e=>(e.CourseStartDate="courseStartDate",e.CreatedAt="createdAt",e.DisplayDate="displayDate",e.Label="label",e.LastActiveAt="lastActiveAt",e.Name="name",e.ParentName="parentName",e.PublishDate="publishDate",e.Relevance="relevance",e.Title="title",e.UpdatedAt="updatedAt",e))(Fr||{}),Lr=(e=>(e.Asc="asc",e.Desc="desc",e))(Lr||{});const le=C`
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
`,Nr=C`
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
`,Pr=C`
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
`,Dt={},Mt=C`
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
  ${le}
  ${Nr}
  ${Pr}
`;function Me(e){const t={...Dt,...e};return N(Mt,t)}function we(e){const t={...Dt,...e};return P(Mt,t)}try{Me.displayName="useCatalogContentQuery",Me.__docgenInfo={description:"__useCatalogContentQuery__\n\nTo run a query within a React component, call `useCatalogContentQuery` and pass it any options that fit your needs.\nWhen your component renders, `useCatalogContentQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useCatalogContentQuery",props:{}}}catch{}try{we.displayName="useCatalogContentLazyQuery",we.__docgenInfo={description:"",displayName:"useCatalogContentLazyQuery",props:{}}}catch{}const wt={},It=C`
  query Catalog($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...ContentFragment
      }
    }
  }
  ${le}
`;function Ie(e){const t={...wt,...e};return N(It,t)}function Oe(e){const t={...wt,...e};return P(It,t)}try{Ie.displayName="useCatalogQuery",Ie.__docgenInfo={description:"__useCatalogQuery__\n\nTo run a query within a React component, call `useCatalogQuery` and pass it any options that fit your needs.\nWhen your component renders, `useCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useCatalogQuery",props:{}}}catch{}try{Oe.displayName="useCatalogLazyQuery",Oe.__docgenInfo={description:"",displayName:"useCatalogLazyQuery",props:{}}}catch{}const Ot={},Rt=C`
  query LanguagesQuery {
    Languages {
      id
      label
      code
      isCustom
      selectorLabel
    }
  }
`;function Re(e){const t={...Ot,...e};return N(Rt,t)}function Se(e){const t={...Ot,...e};return P(Rt,t)}try{Re.displayName="useLanguagesQueryQuery",Re.__docgenInfo={description:"__useLanguagesQueryQuery__\n\nTo run a query within a React component, call `useLanguagesQueryQuery` and pass it any options that fit your needs.\nWhen your component renders, `useLanguagesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useLanguagesQueryQuery",props:{}}}catch{}try{Se.displayName="useLanguagesQueryLazyQuery",Se.__docgenInfo={description:"",displayName:"useLanguagesQueryLazyQuery",props:{}}}catch{}const St={},At=C`
  query Contents($ids: [ID!]!) {
    QueryContents(ids: $ids) {
      ...ContentFragment
    }
  }
  ${le}
`;function Ae(e){const t={...St,...e};return N(At,t)}function Fe(e){const t={...St,...e};return P(At,t)}try{Ae.displayName="useContentsQuery",Ae.__docgenInfo={description:"__useContentsQuery__\n\nTo run a query within a React component, call `useContentsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useContentsQuery",props:{}}}catch{}try{Fe.displayName="useContentsLazyQuery",Fe.__docgenInfo={description:"",displayName:"useContentsLazyQuery",props:{}}}catch{}const Ft={},Lt=C`
  query RssItems($feedUrl: String!) {
    RssItems(feedUrl: $feedUrl) {
      title
      link
    }
  }
`;function Le(e){const t={...Ft,...e};return N(Lt,t)}function Ne(e){const t={...Ft,...e};return P(Lt,t)}try{Le.displayName="useRssItemsQuery",Le.__docgenInfo={description:"__useRssItemsQuery__\n\nTo run a query within a React component, call `useRssItemsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useRssItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useRssItemsQuery",props:{}}}catch{}try{Ne.displayName="useRssItemsLazyQuery",Ne.__docgenInfo={description:"",displayName:"useRssItemsLazyQuery",props:{}}}catch{}const Nt={},Pt=C`
  query UserRecentContent($limit: Int) {
    UserRecentContent(limit: $limit) {
      ...ContentFragment
    }
  }
  ${le}
`;function Pe(e){const t={...Nt,...e};return N(Pt,t)}function Te(e){const t={...Nt,...e};return P(Pt,t)}try{Pe.displayName="useUserRecentContentQuery",Pe.__docgenInfo={description:"__useUserRecentContentQuery__\n\nTo run a query within a React component, call `useUserRecentContentQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserRecentContentQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserRecentContentQuery",props:{}}}catch{}try{Te.displayName="useUserRecentContentLazyQuery",Te.__docgenInfo={description:"",displayName:"useUserRecentContentLazyQuery",props:{}}}catch{}const Tt={},qt=C`
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
`;function qe(e){const t={...Tt,...e};return N(qt,t)}function Ee(e){const t={...Tt,...e};return P(qt,t)}try{qe.displayName="useUserContentItemsQuery",qe.__docgenInfo={description:"__useUserContentItemsQuery__\n\nTo run a query within a React component, call `useUserContentItemsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserContentItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserContentItemsQuery",props:{}}}catch{}try{Ee.displayName="useUserContentItemsLazyQuery",Ee.__docgenInfo={description:"",displayName:"useUserContentItemsLazyQuery",props:{}}}catch{}const Et={},zt=C`
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
`;function ze(e){const t={...Et,...e};return N(zt,t)}function xe(e){const t={...Et,...e};return P(zt,t)}try{ze.displayName="useUserArchivesQuery",ze.__docgenInfo={description:"__useUserArchivesQuery__\n\nTo run a query within a React component, call `useUserArchivesQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserArchivesQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserArchivesQuery",props:{}}}catch{}try{xe.displayName="useUserArchivesLazyQuery",xe.__docgenInfo={description:"",displayName:"useUserArchivesLazyQuery",props:{}}}catch{}const xt={},Wt=C`
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
`;function We(e){const t={...xt,...e};return N(Wt,t)}function Be(e){const t={...xt,...e};return P(Wt,t)}try{We.displayName="useUserWaitlistQuery",We.__docgenInfo={description:"__useUserWaitlistQuery__\n\nTo run a query within a React component, call `useUserWaitlistQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserWaitlistQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserWaitlistQuery",props:{}}}catch{}try{Be.displayName="useUserWaitlistLazyQuery",Be.__docgenInfo={description:"",displayName:"useUserWaitlistLazyQuery",props:{}}}catch{}const Bt={},Yt=C`
  query UserBookmarks {
    UserBookmarks {
      id
      name
      defaultFolder
      bookmarkCount
    }
  }
`;function Ye(e){const t={...Bt,...e};return N(Yt,t)}function je(e){const t={...Bt,...e};return P(Yt,t)}try{Ye.displayName="useUserBookmarksQuery",Ye.__docgenInfo={description:"__useUserBookmarksQuery__\n\nTo run a query within a React component, call `useUserBookmarksQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserBookmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserBookmarksQuery",props:{}}}catch{}try{je.displayName="useUserBookmarksLazyQuery",je.__docgenInfo={description:"",displayName:"useUserBookmarksLazyQuery",props:{}}}catch{}const jt={},Ht=C`
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
`;function He(e){const t={...jt,...e};return N(Ht,t)}function Ge(e){const t={...jt,...e};return P(Ht,t)}try{He.displayName="useUserCertificatesQuery",He.__docgenInfo={description:"__useUserCertificatesQuery__\n\nTo run a query within a React component, call `useUserCertificatesQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCertificatesQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCertificatesQuery",props:{}}}catch{}try{Ge.displayName="useUserCertificatesLazyQuery",Ge.__docgenInfo={description:"",displayName:"useUserCertificatesLazyQuery",props:{}}}catch{}const Gt={},Vt=C`
  query ContentGroups($query: String, $includeExpiredCertificates: Boolean) {
    UserContentGroups(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      kind
      count
    }
  }
`;function Ve(e){const t={...Gt,...e};return N(Vt,t)}function Ze(e){const t={...Gt,...e};return P(Vt,t)}try{Ve.displayName="useContentGroupsQuery",Ve.__docgenInfo={description:"__useContentGroupsQuery__\n\nTo run a query within a React component, call `useContentGroupsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useContentGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useContentGroupsQuery",props:{}}}catch{}try{Ze.displayName="useContentGroupsLazyQuery",Ze.__docgenInfo={description:"",displayName:"useContentGroupsLazyQuery",props:{}}}catch{}const Zt={},Jt=C`
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
`;function Je(e){const t={...Zt,...e};return N(Jt,t)}function Xe(e){const t={...Zt,...e};return P(Jt,t)}try{Je.displayName="useUserBookmarksByFolderQuery",Je.__docgenInfo={description:"__useUserBookmarksByFolderQuery__\n\nTo run a query within a React component, call `useUserBookmarksByFolderQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserBookmarksByFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserBookmarksByFolderQuery",props:{}}}catch{}try{Xe.displayName="useUserBookmarksByFolderLazyQuery",Xe.__docgenInfo={description:"",displayName:"useUserBookmarksByFolderLazyQuery",props:{}}}catch{}const Xt={},Kt=C`
  query UserCourseCompletionProgress($id: ID!) {
    UserCourseCompletionProgress(id: $id) {
      type
      required
      completed
      percent
    }
  }
`;function Ke(e){const t={...Xt,...e};return N(Kt,t)}function et(e){const t={...Xt,...e};return P(Kt,t)}try{Ke.displayName="useUserCourseCompletionProgressQuery",Ke.__docgenInfo={description:"__useUserCourseCompletionProgressQuery__\n\nTo run a query within a React component, call `useUserCourseCompletionProgressQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseCompletionProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseCompletionProgressQuery",props:{}}}catch{}try{et.displayName="useUserCourseCompletionProgressLazyQuery",et.__docgenInfo={description:"",displayName:"useUserCourseCompletionProgressLazyQuery",props:{}}}catch{}const er={},tr=C`
  query UserCourseProgress($id: ID!) {
    UserCourseProgress(id: $id) {
      totalViews
      totalTime
      percentComplete
    }
  }
`;function tt(e){const t={...er,...e};return N(tr,t)}function rt(e){const t={...er,...e};return P(tr,t)}try{tt.displayName="useUserCourseProgressQuery",tt.__docgenInfo={description:"__useUserCourseProgressQuery__\n\nTo run a query within a React component, call `useUserCourseProgressQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseProgressQuery",props:{}}}catch{}try{rt.displayName="useUserCourseProgressLazyQuery",rt.__docgenInfo={description:"",displayName:"useUserCourseProgressLazyQuery",props:{}}}catch{}const rr={},nr=C`
  query UserCourseAwardCounts($courseId: ID!) {
    UserCourseAwardCounts(courseId: $courseId) {
      id
      label
      icon
      count
    }
  }
`;function nt(e){const t={...rr,...e};return N(nr,t)}function ot(e){const t={...rr,...e};return P(nr,t)}try{nt.displayName="useUserCourseAwardCountsQuery",nt.__docgenInfo={description:"__useUserCourseAwardCountsQuery__\n\nTo run a query within a React component, call `useUserCourseAwardCountsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseAwardCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseAwardCountsQuery",props:{}}}catch{}try{ot.displayName="useUserCourseAwardCountsLazyQuery",ot.__docgenInfo={description:"",displayName:"useUserCourseAwardCountsLazyQuery",props:{}}}catch{}const or={},sr=C`
  query UserCourseCollaborations($courseId: ID!) {
    UserCourseCollaborations(courseId: $courseId)
  }
`;function st(e){const t={...or,...e};return N(sr,t)}function at(e){const t={...or,...e};return P(sr,t)}try{st.displayName="useUserCourseCollaborationsQuery",st.__docgenInfo={description:"__useUserCourseCollaborationsQuery__\n\nTo run a query within a React component, call `useUserCourseCollaborationsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCourseCollaborationsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCourseCollaborationsQuery",props:{}}}catch{}try{at.displayName="useUserCourseCollaborationsLazyQuery",at.__docgenInfo={description:"",displayName:"useUserCourseCollaborationsLazyQuery",props:{}}}catch{}const ar={},ir=C`
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
`;function it(e){const t={...ar,...e};return N(ir,t)}function ut(e){const t={...ar,...e};return P(ir,t)}try{it.displayName="useUserCertificateFieldsQuery",it.__docgenInfo={description:"__useUserCertificateFieldsQuery__\n\nTo run a query within a React component, call `useUserCertificateFieldsQuery` and pass it any options that fit your needs.\nWhen your component renders, `useUserCertificateFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties\nyou can use to render your UI.",displayName:"useUserCertificateFieldsQuery",props:{}}}catch{}try{ut.displayName="useUserCertificateFieldsLazyQuery",ut.__docgenInfo={description:"",displayName:"useUserCertificateFieldsLazyQuery",props:{}}}catch{}const Tr={},qr=C`
  mutation AddResourceToQueue($resourceType: ContentKind, $resourceId: ID!) {
    AddResourceToQueue(resourceType: $resourceType, resourceId: $resourceId)
  }
`;function ct(e){const t={...Tr,...e};return Y(qr,t)}try{ct.displayName="useAddResourceToQueueMutation",ct.__docgenInfo={description:`__useAddResourceToQueueMutation__

To run a mutation, you first call \`useAddResourceToQueueMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useAddResourceToQueueMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useAddResourceToQueueMutation",props:{}}}catch{}const Er={},zr=C`
  mutation ArchiveUserCourse($id: ID!) {
    ArchiveUserCourse(id: $id)
  }
`;function lt(e){const t={...Er,...e};return Y(zr,t)}try{lt.displayName="useArchiveUserCourseMutation",lt.__docgenInfo={description:`__useArchiveUserCourseMutation__

To run a mutation, you first call \`useArchiveUserCourseMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useArchiveUserCourseMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useArchiveUserCourseMutation",props:{}}}catch{}const xr={},Wr=C`
  mutation ArchiveUserLearningPath($id: ID!) {
    ArchiveUserLearningPath(id: $id)
  }
`;function dt(e){const t={...xr,...e};return Y(Wr,t)}try{dt.displayName="useArchiveUserLearningPathMutation",dt.__docgenInfo={description:`__useArchiveUserLearningPathMutation__

To run a mutation, you first call \`useArchiveUserLearningPathMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useArchiveUserLearningPathMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useArchiveUserLearningPathMutation",props:{}}}catch{}const Br={},Yr=C`
  mutation ReinstateUserLearningPath($id: ID!) {
    ReinstateUserLearningPath(id: $id)
  }
`;function pt(e){const t={...Br,...e};return Y(Yr,t)}try{pt.displayName="useReinstateUserLearningPathMutation",pt.__docgenInfo={description:`__useReinstateUserLearningPathMutation__

To run a mutation, you first call \`useReinstateUserLearningPathMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useReinstateUserLearningPathMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useReinstateUserLearningPathMutation",props:{}}}catch{}const jr={},Hr=C`
  mutation ReinstateUserCourse($id: ID!) {
    ReinstateUserCourse(id: $id)
  }
`;function yt(e){const t={...jr,...e};return Y(Hr,t)}try{yt.displayName="useReinstateUserCourseMutation",yt.__docgenInfo={description:`__useReinstateUserCourseMutation__

To run a mutation, you first call \`useReinstateUserCourseMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useReinstateUserCourseMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useReinstateUserCourseMutation",props:{}}}catch{}const Gr={},Vr=C`
  mutation UnenrollFromWaitlist($id: ID!) {
    UnenrollFromWaitlist(id: $id)
  }
`;function ht(e){const t={...Gr,...e};return Y(Vr,t)}try{ht.displayName="useUnenrollFromWaitlistMutation",ht.__docgenInfo={description:`__useUnenrollFromWaitlistMutation__

To run a mutation, you first call \`useUnenrollFromWaitlistMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUnenrollFromWaitlistMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUnenrollFromWaitlistMutation",props:{}}}catch{}const Zr={},Jr=C`
  mutation UpdateBookmarkFolder($id: ID!, $name: String!) {
    UpdateBookmarkFolder(id: $id, name: $name) {
      id
      name
    }
  }
`;function ft(e){const t={...Zr,...e};return Y(Jr,t)}try{ft.displayName="useUpdateBookmarkFolderMutation",ft.__docgenInfo={description:`__useUpdateBookmarkFolderMutation__

To run a mutation, you first call \`useUpdateBookmarkFolderMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUpdateBookmarkFolderMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUpdateBookmarkFolderMutation",props:{}}}catch{}const Xr={},Kr=C`
  mutation DestroyBookmarkFolder($id: ID!) {
    DestroyBookmarkFolder(id: $id)
  }
`;function mt(e){const t={...Xr,...e};return Y(Kr,t)}try{mt.displayName="useDestroyBookmarkFolderMutation",mt.__docgenInfo={description:`__useDestroyBookmarkFolderMutation__

To run a mutation, you first call \`useDestroyBookmarkFolderMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useDestroyBookmarkFolderMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useDestroyBookmarkFolderMutation",props:{}}}catch{}const en={},tn=C`
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
`;function _t(e){const t={...en,...e};return Y(tn,t)}try{_t.displayName="useCreateCertificateFromUploadMutation",_t.__docgenInfo={description:`__useCreateCertificateFromUploadMutation__

To run a mutation, you first call \`useCreateCertificateFromUploadMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useCreateCertificateFromUploadMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useCreateCertificateFromUploadMutation",props:{}}}catch{}const rn={},nn=C`
  mutation UpdateBookmark($id: ID!, $note: String, $bookmarkFolder: ID!) {
    UpdateBookmark(id: $id, note: $note, bookmarkFolder: $bookmarkFolder) {
      id
    }
  }
`;function gt(e){const t={...rn,...e};return Y(nn,t)}try{gt.displayName="useUpdateBookmarkMutation",gt.__docgenInfo={description:`__useUpdateBookmarkMutation__

To run a mutation, you first call \`useUpdateBookmarkMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useUpdateBookmarkMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useUpdateBookmarkMutation",props:{}}}catch{}const on={},sn=C`
  mutation DestroyBookmark($id: ID!) {
    DestroyBookmark(id: $id)
  }
`;function vt(e){const t={...on,...e};return Y(sn,t)}try{vt.displayName="useDestroyBookmarkMutation",vt.__docgenInfo={description:`__useDestroyBookmarkMutation__

To run a mutation, you first call \`useDestroyBookmarkMutation\` within a React component and pass it any options that fit your needs.
When your component renders, \`useDestroyBookmarkMutation\` returns a tuple that includes:
- A mutate function that you can call at any time to execute the mutation
- An object with fields that represent the current status of the mutation's execution`,displayName:"useDestroyBookmarkMutation",props:{}}}catch{}var fe={},an={get exports(){return fe},set exports(e){fe=e}};(function(e,t){(function(r,n){e.exports=n()})(ce,function(){var r=1e3,n=6e4,d=36e5,u="millisecond",o="second",f="minute",a="hour",p="day",b="week",_="month",m="quarter",$="year",Q="date",i="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,D={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},M=function(y,l,s){var h=String(y);return!h||h.length>=l?y:""+Array(l+1-h.length).join(s)+y},F={s:M,z:function(y){var l=-y.utcOffset(),s=Math.abs(l),h=Math.floor(s/60),c=s%60;return(l<=0?"+":"-")+M(h,2,"0")+":"+M(c,2,"0")},m:function y(l,s){if(l.date()<s.date())return-y(s,l);var h=12*(s.year()-l.year())+(s.month()-l.month()),c=l.clone().add(h,_),U=s-c<0,g=l.clone().add(h+(U?-1:1),_);return+(-(h+(s-c)/(U?c-g:g-c))||0)},a:function(y){return y<0?Math.ceil(y)||0:Math.floor(y)},p:function(y){return{M:_,y:$,w:b,d:p,D:Q,h:a,m:f,s:o,ms:u,Q:m}[y]||String(y||"").toLowerCase().replace(/s$/,"")},u:function(y){return y===void 0}},O="en",S={};S[O]=D;var q=function(y){return y instanceof G},z=function(y,l,s){var h;if(!y)return O;if(typeof y=="string")S[y]&&(h=y),l&&(S[y]=l,h=y);else{var c=y.name;S[c]=y,h=c}return!s&&h&&(O=h),h||!s&&O},I=function(y,l){if(q(y))return y.clone();var s=typeof l=="object"?l:{};return s.date=y,s.args=arguments,new G(s)},k=F;k.l=z,k.i=q,k.w=function(y,l){return I(y,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var G=function(){function y(s){this.$L=z(s.locale,null,!0),this.parse(s)}var l=y.prototype;return l.parse=function(s){this.$d=function(h){var c=h.date,U=h.utc;if(c===null)return new Date(NaN);if(k.u(c))return new Date;if(c instanceof Date)return new Date(c);if(typeof c=="string"&&!/Z$/i.test(c)){var g=c.match(v);if(g){var R=g[2]-1||0,L=(g[7]||"0").substring(0,3);return U?new Date(Date.UTC(g[1],R,g[3]||1,g[4]||0,g[5]||0,g[6]||0,L)):new Date(g[1],R,g[3]||1,g[4]||0,g[5]||0,g[6]||0,L)}}return new Date(c)}(s),this.$x=s.x||{},this.init()},l.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},l.$utils=function(){return k},l.isValid=function(){return this.$d.toString()!==i},l.isSame=function(s,h){var c=I(s);return this.startOf(h)<=c&&c<=this.endOf(h)},l.isAfter=function(s,h){return I(s)<this.startOf(h)},l.isBefore=function(s,h){return this.endOf(h)<I(s)},l.$g=function(s,h,c){return k.u(s)?this[h]:this.set(c,s)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(s,h){var c=this,U=!!k.u(h)||h,g=k.p(s),R=function(X,W){var Z=k.w(c.$u?Date.UTC(c.$y,W,X):new Date(c.$y,W,X),c);return U?Z:Z.endOf(p)},L=function(X,W){return k.w(c.toDate()[X].apply(c.toDate("s"),(U?[0,0,0,0]:[23,59,59,999]).slice(W)),c)},A=this.$W,E=this.$M,V=this.$D,H="set"+(this.$u?"UTC":"");switch(g){case $:return U?R(1,0):R(31,11);case _:return U?R(1,E):R(0,E+1);case b:var ee=this.$locale().weekStart||0,te=(A<ee?A+7:A)-ee;return R(U?V-te:V+(6-te),E);case p:case Q:return L(H+"Hours",0);case a:return L(H+"Minutes",1);case f:return L(H+"Seconds",2);case o:return L(H+"Milliseconds",3);default:return this.clone()}},l.endOf=function(s){return this.startOf(s,!1)},l.$set=function(s,h){var c,U=k.p(s),g="set"+(this.$u?"UTC":""),R=(c={},c[p]=g+"Date",c[Q]=g+"Date",c[_]=g+"Month",c[$]=g+"FullYear",c[a]=g+"Hours",c[f]=g+"Minutes",c[o]=g+"Seconds",c[u]=g+"Milliseconds",c)[U],L=U===p?this.$D+(h-this.$W):h;if(U===_||U===$){var A=this.clone().set(Q,1);A.$d[R](L),A.init(),this.$d=A.set(Q,Math.min(this.$D,A.daysInMonth())).$d}else R&&this.$d[R](L);return this.init(),this},l.set=function(s,h){return this.clone().$set(s,h)},l.get=function(s){return this[k.p(s)]()},l.add=function(s,h){var c,U=this;s=Number(s);var g=k.p(h),R=function(E){var V=I(U);return k.w(V.date(V.date()+Math.round(E*s)),U)};if(g===_)return this.set(_,this.$M+s);if(g===$)return this.set($,this.$y+s);if(g===p)return R(1);if(g===b)return R(7);var L=(c={},c[f]=n,c[a]=d,c[o]=r,c)[g]||1,A=this.$d.getTime()+s*L;return k.w(A,this)},l.subtract=function(s,h){return this.add(-1*s,h)},l.format=function(s){var h=this,c=this.$locale();if(!this.isValid())return c.invalidDate||i;var U=s||"YYYY-MM-DDTHH:mm:ssZ",g=k.z(this),R=this.$H,L=this.$m,A=this.$M,E=c.weekdays,V=c.months,H=function(W,Z,de,se){return W&&(W[Z]||W(h,U))||de[Z].substr(0,se)},ee=function(W){return k.s(R%12||12,W,"0")},te=c.meridiem||function(W,Z,de){var se=W<12?"AM":"PM";return de?se.toLowerCase():se},X={YY:String(this.$y).slice(-2),YYYY:this.$y,M:A+1,MM:k.s(A+1,2,"0"),MMM:H(c.monthsShort,A,V,3),MMMM:H(V,A),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:H(c.weekdaysMin,this.$W,E,2),ddd:H(c.weekdaysShort,this.$W,E,3),dddd:E[this.$W],H:String(R),HH:k.s(R,2,"0"),h:ee(1),hh:ee(2),a:te(R,L,!0),A:te(R,L,!1),m:String(L),mm:k.s(L,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:g};return U.replace(w,function(W,Z){return Z||X[W]||g.replace(":","")})},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(s,h,c){var U,g=k.p(h),R=I(s),L=(R.utcOffset()-this.utcOffset())*n,A=this-R,E=k.m(this,R);return E=(U={},U[$]=E/12,U[_]=E,U[m]=E/3,U[b]=(A-L)/6048e5,U[p]=(A-L)/864e5,U[a]=A/d,U[f]=A/n,U[o]=A/r,U)[g]||A,c?E:k.a(E)},l.daysInMonth=function(){return this.endOf(_).$D},l.$locale=function(){return S[this.$L]},l.locale=function(s,h){if(!s)return this.$L;var c=this.clone(),U=z(s,h,!0);return U&&(c.$L=U),c},l.clone=function(){return k.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},y}(),be=G.prototype;return I.prototype=be,[["$ms",u],["$s",o],["$m",f],["$H",a],["$W",p],["$M",_],["$y",$],["$D",Q]].forEach(function(y){be[y[1]]=function(l){return this.$g(l,y[0],y[1])}}),I.extend=function(y,l){return y.$i||(y(l,G,I),y.$i=!0),I},I.locale=z,I.isDayjs=q,I.unix=function(y){return I(1e3*y)},I.en=S[O],I.Ls=S,I.p={},I})})(an);const K=fe;var me={},un={get exports(){return me},set exports(e){me=e}};(function(e,t){(function(r,n){e.exports=n()})(ce,function(){return function(r,n,d){var u=n.prototype,o=u.format;d.en.ordinal=function(f){var a=["th","st","nd","rd"],p=f%100;return"["+f+(a[(p-20)%10]||a[p]||a[0])+"]"},u.format=function(f){var a=this,p=this.$locale();if(!this.isValid())return o.bind(this)(f);var b=this.$utils(),_=(f||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(m){switch(m){case"Q":return Math.ceil((a.$M+1)/3);case"Do":return p.ordinal(a.$D);case"gggg":return a.weekYear();case"GGGG":return a.isoWeekYear();case"wo":return p.ordinal(a.week(),"W");case"w":case"ww":return b.s(a.week(),m==="w"?1:2,"0");case"W":case"WW":return b.s(a.isoWeek(),m==="W"?1:2,"0");case"k":case"kk":return b.s(String(a.$H===0?24:a.$H),m==="k"?1:2,"0");case"X":return Math.floor(a.$d.getTime()/1e3);case"x":return a.$d.getTime();case"z":return"["+a.offsetName()+"]";case"zzz":return"["+a.offsetName("long")+"]";default:return m}});return o.bind(this)(_)}}})})(un);const cn=me;var _e={},ln={get exports(){return _e},set exports(e){_e=e}};(function(e,t){(function(r,n){e.exports=n()})(ce,function(){var r="minute",n=/[+-]\d\d(?::?\d\d)?/g,d=/([+-]|\d\d)/g;return function(u,o,f){var a=o.prototype;f.utc=function(i){var v={date:i,utc:!0,args:arguments};return new o(v)},a.utc=function(i){var v=f(this.toDate(),{locale:this.$L,utc:!0});return i?v.add(this.utcOffset(),r):v},a.local=function(){return f(this.toDate(),{locale:this.$L,utc:!1})};var p=a.parse;a.parse=function(i){i.utc&&(this.$u=!0),this.$utils().u(i.$offset)||(this.$offset=i.$offset),p.call(this,i)};var b=a.init;a.init=function(){if(this.$u){var i=this.$d;this.$y=i.getUTCFullYear(),this.$M=i.getUTCMonth(),this.$D=i.getUTCDate(),this.$W=i.getUTCDay(),this.$H=i.getUTCHours(),this.$m=i.getUTCMinutes(),this.$s=i.getUTCSeconds(),this.$ms=i.getUTCMilliseconds()}else b.call(this)};var _=a.utcOffset;a.utcOffset=function(i,v){var w=this.$utils().u;if(w(i))return this.$u?0:w(this.$offset)?_.call(this):this.$offset;if(typeof i=="string"&&(i=function(O){O===void 0&&(O="");var S=O.match(n);if(!S)return null;var q=(""+S[0]).match(d)||["-",0,0],z=q[0],I=60*+q[1]+ +q[2];return I===0?0:z==="+"?I:-I}(i),i===null))return this;var D=Math.abs(i)<=16?60*i:i,M=this;if(v)return M.$offset=D,M.$u=i===0,M;if(i!==0){var F=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(M=this.local().add(D+F,r)).$offset=D,M.$x.$localOffset=F}else M=this.utc();return M};var m=a.format;a.format=function(i){var v=i||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,v)},a.valueOf=function(){var i=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||new Date().getTimezoneOffset());return this.$d.valueOf()-6e4*i},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var $=a.toDate;a.toDate=function(i){return i==="s"&&this.$offset?f(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():$.call(this)};var Q=a.diff;a.diff=function(i,v,w){if(i&&this.$u===i.$u)return Q.call(this,i,v,w);var D=this.local(),M=f(i).local();return Q.call(D,M,v,w)}}})})(ln);const dn=_e;var ge={},pn={get exports(){return ge},set exports(e){ge=e}};(function(e,t){(function(r,n){e.exports=n()})(ce,function(){var r={year:0,month:1,day:2,hour:3,minute:4,second:5},n={};return function(d,u,o){var f,a=function(m,$,Q){Q===void 0&&(Q={});var i=new Date(m),v=function(w,D){D===void 0&&(D={});var M=D.timeZoneName||"short",F=w+"|"+M,O=n[F];return O||(O=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:w,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:M}),n[F]=O),O}($,Q);return v.formatToParts(i)},p=function(m,$){for(var Q=a(m,$),i=[],v=0;v<Q.length;v+=1){var w=Q[v],D=w.type,M=w.value,F=r[D];F>=0&&(i[F]=parseInt(M,10))}var O=i[3],S=O===24?0:O,q=i[0]+"-"+i[1]+"-"+i[2]+" "+S+":"+i[4]+":"+i[5]+":000",z=+m;return(o.utc(q).valueOf()-(z-=z%1e3))/6e4},b=u.prototype;b.tz=function(m,$){m===void 0&&(m=f);var Q=this.utcOffset(),i=this.toDate(),v=i.toLocaleString("en-US",{timeZone:m}),w=Math.round((i-new Date(v))/1e3/60),D=o(v).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-w,!0);if($){var M=D.utcOffset();D=D.add(Q-M,"minute")}return D.$x.$timezone=m,D},b.offsetName=function(m){var $=this.$x.$timezone||o.tz.guess(),Q=a(this.valueOf(),$,{timeZoneName:m}).find(function(i){return i.type.toLowerCase()==="timezonename"});return Q&&Q.value};var _=b.startOf;b.startOf=function(m,$){if(!this.$x||!this.$x.$timezone)return _.call(this,m,$);var Q=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return _.call(Q,m,$).tz(this.$x.$timezone,!0)},o.tz=function(m,$,Q){var i=Q&&$,v=Q||$||f,w=p(+o(),v);if(typeof m!="string")return o(m).tz(v);var D=function(S,q,z){var I=S-60*q*1e3,k=p(I,z);if(q===k)return[I,q];var G=p(I-=60*(k-q)*1e3,z);return k===G?[I,k]:[S-60*Math.min(k,G)*1e3,Math.max(k,G)]}(o.utc(m,i).valueOf(),w,v),M=D[0],F=D[1],O=o(M).utcOffset(F);return O.$x.$timezone=v,O},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(m){f=m}}})})(pn);const yn=ge,hn="America/New_York";K.extend(cn);K.extend(dn);K.extend(yn);const J=(e,t,r)=>{const n=t??hn;return K(e).tz(n).format(r)},fn=[oe.Webinar,oe.WebinarCourse],mn=[oe.InPersonEvent,oe.InPersonEventCourse];function Un(e,t,r,n){return e&&(mn.includes(e)||fn.includes(e))?r?K(t).isSame(K(r),"day")?`${J(t,n,"ddd, MMM Do YYYY hh:mm a")} – ${J(r,n,"hh:mm a z")}`:`${J(t,n,"ddd, MMM Do YYYY hh:mm a")} – ${J(r,n,"ddd, MMM Do YYYY hh:mm a z")}`:`${J(t,n,"ddd, MMM Do YYYY hh:mm a z")}`:r?`${J(t,n,"MMM Do YYYY")} – ${J(r,n,"MMM Do YYYY")}`:J(t,n,"MMM Do YYYY")}export{qr as A,Ar as C,Rr as L,Lt as R,Fr as S,Pt as U,P as a,Lr as b,Me as c,Re as d,K as e,J as f,C as g,oe as h,Mt as i,Rt as j,ct as k,Sr as l,Un as m,Le as n,It as o,At as p,Ie as q,Ae as r,Pe as s,Y as t,N as u};
//# sourceMappingURL=course-run-ffe2e63c.js.map
