import{a as e}from"./jsx-runtime-9707e85d.js";import{o as M,p as W,A as v,h as x,U as V,k as O,q as $,r as w,s as j}from"./course-run-ffe2e63c.js";import{h as Q}from"./hydrate-content-ef1d5684.js";import{C as d,F as g}from"./tile-image-overlay-e81024ab.js";import{u as T}from"./useTranslation-2ddf9c84.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./ApolloContext-744973fc.js";import"./printer-283319ec.js";import"./parser-170a9164.js";import"./header-b265f038.js";import"./clsx.m-1229b3e0.js";import"./use-multi-carousel-behavior-597a659b.js";import"./use-previous-63210bb6.js";import"./nonIterableRest-9687e3b1.js";const se={title:"Packages/Featured Content/Data Fetching"},f={title:"Feature Content Header"},k=()=>{},E={query:"test query",querySignature:"test query signature",querySort:"relevance"},_={ids:["item-id"]},D={limit:2},h=(s=!1)=>({__typename:"Content",id:"item-id",asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",authors:["Author A","Author B"],availabilityStatus:"available",canAddToQueue:!0,contentTypeLabel:"Guide",courseGracePeriodEnded:!1,coursePresold:!1,courseStartDate:"2016-11-07T05:51:02.856Z",description:"Test description",rating:78,slug:"test-course-slug",title:"Test title",kind:s?x.LearningPath:null,currentUserUnmetCoursePrerequisites:[],currentUserUnmetLearningPathPrerequisites:[],priceInCents:null,suggestedRetailPriceInCents:null,source:null,ribbon:null,displayCourse:"display-course-id",currentUserMayReschedule:!1,hasChildren:!1,hideCourseDescription:!1,isActive:!0,waitlistingEnabled:!1,waitlistingTriggered:!1}),y={catalogQuery:{request:{query:M,variables:{...E}},result:{data:{CatalogQuery:{contentItems:[h()]}}}},queryContentsQuery:{request:{query:W,variables:{..._}},result:{data:{QueryContents:[h(!0)]}}},addCourseToQueueMutation:{request:{query:v,variables:{resourceId:"display-course-id"}},result:{data:{AddResourceToQueue:!0}}},addLearningPathToQueueMutation:{request:{query:v,variables:{resourceId:"test-course-slug",resourceType:x.LearningPath}},result:{data:{AddResourceToQueue:!0}}},userRecentContentQuery:{request:{query:V,variables:{...D}},result:{data:{UserRecentContent:[h()]}}}},H={watchQuery:{fetchPolicy:"no-cache"},query:{fetchPolicy:"no-cache"}},I={addTypename:!1,defaultOptions:H},m=()=>{const{i18n:s}=T(),[u]=O(),i=r=>{const{displayCourse:n}=r;return n?u({variables:{resourceId:n}}).then():Promise.resolve()},{data:o,loading:c,error:a}=$({variables:{...E}});let t;return c&&(t=e("p",{children:"Loading content"})),a&&(t=e("p",{children:"Error loading content"})),o!=null&&o.CatalogQuery.contentItems&&(t=o.CatalogQuery.contentItems.map((r,n)=>{const l=Q(s,r);return e(d.Item,{...l},`item-${n}`)})),e(g,{children:e(d,{headerOptions:f,desktopColumnCount:3,onAddedToQueue:i,onClick:k,children:t})})};m.parameters={apolloClient:{...I,mocks:[y.catalogQuery,y.addCourseToQueueMutation]}};const C=()=>{const{i18n:s}=T(),[u]=O(),i=r=>{const{slug:n,kind:l}=r;return n?u({variables:{resourceType:l,resourceId:n}}).then():Promise.resolve()},{data:o,loading:c,error:a}=w({variables:{..._}});let t;return c&&(t=e("p",{children:"Loading content"})),a&&(t=e("p",{children:"Error loading content"})),o&&(t=o.QueryContents.map((r,n)=>{const l=Q(s,r);return e(d.Item,{...l},`item-${n}`)})),e(g,{children:e(d,{headerOptions:f,desktopColumnCount:3,onAddedToQueue:i,onClick:k,children:t})})};C.parameters={apolloClient:{...I,mocks:[y.queryContentsQuery,y.addLearningPathToQueueMutation]}};const p=()=>{const{i18n:s}=T(),{data:u,loading:i,error:o}=j({variables:{...D}}),c=()=>Promise.resolve();let a;return i&&(a=e("p",{children:"Loading content"})),o&&(a=e("p",{children:"Error loading content"})),u&&(a=u.UserRecentContent.map((t,r)=>{const n=Q(s,t);return e(d.Item,{...n},`item-${r}`)})),e(g,{children:e(d,{headerOptions:f,desktopColumnCount:3,onAddedToQueue:c,onClick:k,children:a})})};p.parameters={apolloClient:{...I,mocks:[y.userRecentContentQuery]}};var A,b,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const {
    i18n
  } = useTranslation();
  const [addResourceToQueue] = useAddResourceToQueueMutation();
  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> => {
    const {
      displayCourse
    } = (item as FeaturedContentHydratedContentItem);
    return displayCourse ? addResourceToQueue({
      variables: {
        resourceId: displayCourse
      }
    }).then() : Promise.resolve();
  };
  const {
    data,
    loading,
    error
  } = useCatalogQuery({
    variables: {
      ...mockCatalogQueryVariables
    }
  });
  let content;
  if (loading) {
    content = <p>Loading content</p>;
  }
  if (error) {
    content = <p>Error loading content</p>;
  }
  if (data?.CatalogQuery.contentItems) {
    content = data.CatalogQuery.contentItems.map((item, index) => {
      const hydratedItem = hydrateContent(i18n, item);
      return <ContentTileStandardLayout.Item key={\`item-\${index}\`} {...hydratedItem} />;
    });
  }
  return <FeaturedContent>
      <ContentTileStandardLayout headerOptions={headerOptions} desktopColumnCount={3} onAddedToQueue={handleAddedToQueue} onClick={handleClick}>
        {content}
      </ContentTileStandardLayout>
    </FeaturedContent>;
}`,...(R=(b=m.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var P,L,q;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const {
    i18n
  } = useTranslation();
  const [addResourceToQueue] = useAddResourceToQueueMutation();
  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> => {
    const {
      slug,
      kind
    } = (item as FeaturedContentHydratedContentItem);
    return slug ? addResourceToQueue({
      variables: {
        resourceType: kind,
        resourceId: slug
      }
    }).then() : Promise.resolve();
  };
  const {
    data,
    loading,
    error
  } = useContentsQuery({
    variables: {
      ...mockQueryContentsQueryVariables
    }
  });
  let content;
  if (loading) {
    content = <p>Loading content</p>;
  }
  if (error) {
    content = <p>Error loading content</p>;
  }
  if (data) {
    content = data.QueryContents.map((item, index) => {
      const hydratedItem = hydrateContent(i18n, item);
      return <ContentTileStandardLayout.Item key={\`item-\${index}\`} {...hydratedItem} />;
    });
  }
  return <FeaturedContent>
      <ContentTileStandardLayout headerOptions={headerOptions} desktopColumnCount={3} onAddedToQueue={handleAddedToQueue} onClick={handleClick}>
        {content}
      </ContentTileStandardLayout>
    </FeaturedContent>;
}`,...(q=(L=C.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var F,S,U;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const {
    i18n
  } = useTranslation();
  const {
    data,
    loading,
    error
  } = useUserRecentContentQuery({
    variables: {
      ...mockUserRecentContentQueryVariables
    }
  });
  const handleAddedToQueue = (): Promise<void> => {
    return Promise.resolve();
  };
  let content;
  if (loading) {
    content = <p>Loading content</p>;
  }
  if (error) {
    content = <p>Error loading content</p>;
  }
  if (data) {
    content = data.UserRecentContent.map((item, index) => {
      const hydratedItem = hydrateContent(i18n, item);
      return <ContentTileStandardLayout.Item key={\`item-\${index}\`} {...hydratedItem} />;
    });
  }
  return <FeaturedContent>
      <ContentTileStandardLayout headerOptions={headerOptions} desktopColumnCount={3} onAddedToQueue={handleAddedToQueue} onClick={handleClick}>
        {content}
      </ContentTileStandardLayout>
    </FeaturedContent>;
}`,...(U=(S=p.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};const ue=["WithCatalogQuery","WithQueryContentsQuery","WithUserRecentContentQuery"];export{m as WithCatalogQuery,C as WithQueryContentsQuery,p as WithUserRecentContentQuery,ue as __namedExportsOrder,se as default};
//# sourceMappingURL=FeaturedContentWithDataFetching.stories-468e4cec.js.map
