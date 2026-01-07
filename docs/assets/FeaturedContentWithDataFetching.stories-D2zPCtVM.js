import{R as e}from"./index-GiUgBvb1.js";import{C as U,A,u as x}from"./course-run-CxLdYtOz.js";import{b as D,c as V,U as W,u as $,d as B,e as w}from"./content-header-CR2oX5EZ.js";import{h as g}from"./hydrate-content-CJGXV85J.js";import{F as Q,C as d}from"./tile-image-overlay-trBCH1Mw.js";import{u as T}from"./useTranslation-GxpaL4ro.js";import"./ApolloContext-C-0_jjk0.js";import"./header--esLRM0g.js";import"./clsx.m-CH7BE6MN.js";import"./use-multi-carousel-behavior-BuTFsYcw.js";import"./use-previous-DedoEI6V.js";import"./context-C7Y_GhY_.js";const oe={component:Q,title:"Packages/Featured Content/Data Fetching"},k={title:"Feature Content Header"},f=()=>{},M={query:"test query",querySignature:"test query signature",querySort:"relevance"},O={ids:["item-id"]},_={limit:2},h=(s=!1)=>({__typename:"Content",id:"item-id",asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",authors:["Author A","Author B"],availabilityStatus:"available",canAddToQueue:!0,contentTypeLabel:"Guide",courseGracePeriodEnded:!1,coursePresold:!1,courseStartDate:"2016-11-07T05:51:02.856Z",description:"Test description",rating:78,slug:"test-course-slug",title:"Test title",kind:s?U.LearningPath:null,currentUserUnmetCoursePrerequisites:[],currentUserUnmetLearningPathPrerequisites:[],priceInCents:null,suggestedRetailPriceInCents:null,source:null,ribbon:null,displayCourse:"display-course-id",currentUserMayReschedule:!1,hasChildren:!1,hideCourseDescription:!1,isActive:!0,waitlistingEnabled:!1,waitlistingTriggered:!1}),m={catalogQuery:{request:{query:D,variables:{...M}},result:{data:{CatalogQuery:{contentItems:[h()]}}}},queryContentsQuery:{request:{query:V,variables:{...O}},result:{data:{QueryContents:[h(!0)]}}},addCourseToQueueMutation:{request:{query:A,variables:{resourceId:"display-course-id"}},result:{data:{AddResourceToQueue:!0}}},addLearningPathToQueueMutation:{request:{query:A,variables:{resourceId:"test-course-slug",resourceType:U.LearningPath}},result:{data:{AddResourceToQueue:!0}}},userRecentContentQuery:{request:{query:W,variables:{..._}},result:{data:{UserRecentContent:[h()]}}}},H={watchQuery:{fetchPolicy:"no-cache"},query:{fetchPolicy:"no-cache"}},R={addTypename:!1,defaultOptions:H},C={render:()=>e.createElement(()=>{const{i18n:s}=T(),[u]=x(),l=r=>{const{displayCourse:n}=r;return n?u({variables:{resourceId:n}}).then():Promise.resolve()},{data:o,loading:i,error:a}=$({variables:{...M}});let t;return i&&(t=e.createElement("p",null,"Loading content")),a&&(t=e.createElement("p",null,"Error loading content")),o!=null&&o.CatalogQuery.contentItems&&(t=o.CatalogQuery.contentItems.map((r,n)=>{const c=g(s,r);return e.createElement(d.Item,{key:`item-${n}`,...c})})),e.createElement(Q,null,e.createElement(d,{headerOptions:k,desktopColumnCount:3,onAddedToQueue:l,onClick:f},t))}),parameters:{apolloClient:{...R,mocks:[m.catalogQuery,m.addCourseToQueueMutation]}}},p={render:()=>e.createElement(()=>{const{i18n:s}=T(),[u]=x(),l=r=>{const{slug:n,kind:c}=r;return n?u({variables:{resourceType:c,resourceId:n}}).then():Promise.resolve()},{data:o,loading:i,error:a}=B({variables:{...O}});let t;return i&&(t=e.createElement("p",null,"Loading content")),a&&(t=e.createElement("p",null,"Error loading content")),o&&(t=o.QueryContents.map((r,n)=>{const c=g(s,r);return e.createElement(d.Item,{key:`item-${n}`,...c})})),e.createElement(Q,null,e.createElement(d,{headerOptions:k,desktopColumnCount:3,onAddedToQueue:l,onClick:f},t))}),parameters:{apolloClient:{...R,mocks:[m.queryContentsQuery,m.addLearningPathToQueueMutation]}}},y={render:()=>e.createElement(()=>{const{i18n:s}=T(),{data:u,loading:l,error:o}=w({variables:{..._}}),i=()=>Promise.resolve();let a;return l&&(a=e.createElement("p",null,"Loading content")),o&&(a=e.createElement("p",null,"Error loading content")),u&&(a=u.UserRecentContent.map((t,r)=>{const n=g(s,t);return e.createElement(d.Item,{key:`item-${r}`,...n})})),e.createElement(Q,null,e.createElement(d,{headerOptions:k,desktopColumnCount:3,onAddedToQueue:i,onClick:f},a))}),parameters:{apolloClient:{...R,mocks:[m.userRecentContentQuery]}}};var I,v,E;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => React.createElement(() => {
    const {
      i18n
    } = useTranslation();
    const [addResourceToQueue] = useAddResourceToQueueMutation();
    const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> => {
      const {
        displayCourse
      } = item as FeaturedContentHydratedContentItem;
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
  }),
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [mockApolloResults.catalogQuery, mockApolloResults.addCourseToQueueMutation]
    }
  }
}`,...(E=(v=C.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var b,P,L;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => React.createElement(() => {
    const {
      i18n
    } = useTranslation();
    const [addResourceToQueue] = useAddResourceToQueueMutation();
    const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> => {
      const {
        slug,
        kind
      } = item as FeaturedContentHydratedContentItem;
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
  }),
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [mockApolloResults.queryContentsQuery, mockApolloResults.addLearningPathToQueueMutation]
    }
  }
}`,...(L=(P=p.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var q,S,F;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => React.createElement(() => {
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
  }),
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [mockApolloResults.userRecentContentQuery]
    }
  }
}`,...(F=(S=y.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const re=["WithCatalogQuery","WithQueryContentsQuery","WithUserRecentContentQuery"];export{C as WithCatalogQuery,p as WithQueryContentsQuery,y as WithUserRecentContentQuery,re as __namedExportsOrder,oe as default};
