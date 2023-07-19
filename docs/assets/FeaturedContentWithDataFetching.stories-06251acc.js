import{j as e}from"./jsx-runtime-b91f6123.js";import{R as g}from"./index-64f120e9.js";import{A as I,b as x,u as M}from"./course-run-675f4323.js";import{h as V,i as W,U as $,j,k as B,l as w}from"./content-header-84cd9f86.js";import{h as T}from"./hydrate-content-b9a1ae06.js";import{F as h,C as d}from"./tile-image-overlay-c2807f9a.js";import{u as k}from"./useTranslation-ee3e1c6a.js";import"./tslib.es6-14bf6d9f.js";import"./ApolloContext-43df6d1c.js";import"./header-a7feb4e4.js";import"./clsx.m-1229b3e0.js";import"./use-multi-carousel-behavior-8a933ea8.js";import"./use-previous-41bdd730.js";import"./nonIterableRest-d1264b94.js";const se={component:h,title:"Packages/Featured Content/Data Fetching"},f={title:"Feature Content Header"},R=()=>{},O={query:"test query",querySignature:"test query signature",querySort:"relevance"},_={ids:["item-id"]},D={limit:2},Q=(s=!1)=>({__typename:"Content",id:"item-id",asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",authors:["Author A","Author B"],availabilityStatus:"available",canAddToQueue:!0,contentTypeLabel:"Guide",courseGracePeriodEnded:!1,coursePresold:!1,courseStartDate:"2016-11-07T05:51:02.856Z",description:"Test description",rating:78,slug:"test-course-slug",title:"Test title",kind:s?x.LearningPath:null,currentUserUnmetCoursePrerequisites:[],currentUserUnmetLearningPathPrerequisites:[],priceInCents:null,suggestedRetailPriceInCents:null,source:null,ribbon:null,displayCourse:"display-course-id",currentUserMayReschedule:!1,hasChildren:!1,hideCourseDescription:!1,isActive:!0,waitlistingEnabled:!1,waitlistingTriggered:!1}),m={catalogQuery:{request:{query:V,variables:{...O}},result:{data:{CatalogQuery:{contentItems:[Q()]}}}},queryContentsQuery:{request:{query:W,variables:{..._}},result:{data:{QueryContents:[Q(!0)]}}},addCourseToQueueMutation:{request:{query:I,variables:{resourceId:"display-course-id"}},result:{data:{AddResourceToQueue:!0}}},addLearningPathToQueueMutation:{request:{query:I,variables:{resourceId:"test-course-slug",resourceType:x.LearningPath}},result:{data:{AddResourceToQueue:!0}}},userRecentContentQuery:{request:{query:$,variables:{...D}},result:{data:{UserRecentContent:[Q()]}}}},H={watchQuery:{fetchPolicy:"no-cache"},query:{fetchPolicy:"no-cache"}},A={addTypename:!1,defaultOptions:H},C={render:()=>g.createElement(()=>{const{i18n:s}=k(),[u]=M(),i=r=>{const{displayCourse:t}=r;return t?u({variables:{resourceId:t}}).then():Promise.resolve()},{data:o,loading:l,error:a}=j({variables:{...O}});let n;return l&&(n=e("p",{children:"Loading content"})),a&&(n=e("p",{children:"Error loading content"})),o!=null&&o.CatalogQuery.contentItems&&(n=o.CatalogQuery.contentItems.map((r,t)=>{const c=T(s,r);return e(d.Item,{...c},`item-${t}`)})),e(h,{children:e(d,{headerOptions:f,desktopColumnCount:3,onAddedToQueue:i,onClick:R,children:n})})}),parameters:{apolloClient:{...A,mocks:[m.catalogQuery,m.addCourseToQueueMutation]}}},p={render:()=>g.createElement(()=>{const{i18n:s}=k(),[u]=M(),i=r=>{const{slug:t,kind:c}=r;return t?u({variables:{resourceType:c,resourceId:t}}).then():Promise.resolve()},{data:o,loading:l,error:a}=B({variables:{..._}});let n;return l&&(n=e("p",{children:"Loading content"})),a&&(n=e("p",{children:"Error loading content"})),o&&(n=o.QueryContents.map((r,t)=>{const c=T(s,r);return e(d.Item,{...c},`item-${t}`)})),e(h,{children:e(d,{headerOptions:f,desktopColumnCount:3,onAddedToQueue:i,onClick:R,children:n})})}),parameters:{apolloClient:{...A,mocks:[m.queryContentsQuery,m.addLearningPathToQueueMutation]}}},y={render:()=>g.createElement(()=>{const{i18n:s}=k(),{data:u,loading:i,error:o}=w({variables:{...D}}),l=()=>Promise.resolve();let a;return i&&(a=e("p",{children:"Loading content"})),o&&(a=e("p",{children:"Error loading content"})),u&&(a=u.UserRecentContent.map((n,r)=>{const t=T(s,n);return e(d.Item,{...t},`item-${r}`)})),e(h,{children:e(d,{headerOptions:f,desktopColumnCount:3,onAddedToQueue:l,onClick:R,children:a})})}),parameters:{apolloClient:{...A,mocks:[m.userRecentContentQuery]}}};var v,b,P;C.parameters={...C.parameters,docs:{...(v=C.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => React.createElement(() => {
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
  }),
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [mockApolloResults.catalogQuery, mockApolloResults.addCourseToQueueMutation]
    }
  }
}`,...(P=(b=C.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var L,q,S;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => React.createElement(() => {
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
  }),
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [mockApolloResults.queryContentsQuery, mockApolloResults.addLearningPathToQueueMutation]
    }
  }
}`,...(S=(q=p.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var F,U,E;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(E=(U=y.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};const ue=["WithCatalogQuery","WithQueryContentsQuery","WithUserRecentContentQuery"];export{C as WithCatalogQuery,p as WithQueryContentsQuery,y as WithUserRecentContentQuery,ue as __namedExportsOrder,se as default};
//# sourceMappingURL=FeaturedContentWithDataFetching.stories-06251acc.js.map
