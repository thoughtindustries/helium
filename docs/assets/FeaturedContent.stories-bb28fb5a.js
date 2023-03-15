import{j as e,a as o}from"./jsx-runtime-670450c2.js";import{F as a,C as n,a as d,b as i,c as T,d as h,S as V,e as W,f as z}from"./tile-image-overlay-b2a8bda7.js";import{R as B}from"./course-run-78bbd7bb.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./useTranslation-622fecac.js";import"./nonIterableRest-1390a7e0.js";import"./header-15162975.js";import"./clsx.m-1229b3e0.js";import"./use-multi-carousel-behavior-a6a54971.js";import"./use-previous-fba43390.js";import"./tslib.es6-33423134.js";import"./ApolloContext-2edf0031.js";const oe={component:a,title:"Packages/Featured Content/Base"},r={title:"Feature Content Header"},t={manual:{title:"Manual item",description:"description",href:"/manual-item",isActive:!0},dynamic:{title:"Dynamic item",courseStartDate:new Date(2020,0,1),contentTypeLabel:"Course",source:"Test source",authors:["Test Author"],description:"description",href:"/",isCompleted:!0,asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",canAddToQueue:!0,isActive:!0,callToAction:"View Details",ribbon:{color:"#39ad39",contrastColor:"#fff",darkerColor:"#2c872c",label:"Test ribbon",slug:"test-ribbon"},rating:36,hasAvailability:!1,priceInCents:6500,suggestedRetailPriceInCents:8e3},dynamicTwo:{title:"Dynamic item 2",courseStartDate:new Date(2020,0,1),contentTypeLabel:"Course",source:"Test source",authors:["Test Author"],description:"description",href:"/",isCompleted:!0,asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fit,w_800/v1/course-uploads/5fea45fb-d8cb-4f0a-b048-932cc361b20a/pfg9202pfzkd-test-image-5_800x600.jpg",canAddToQueue:!0,isActive:!0,callToAction:"View Details",rating:87,hasAvailability:!1,priceInCents:6500,suggestedRetailPriceInCents:8e3}},q="https://foo/bar",E={sidebarRss:{request:{query:B,variables:{feedUrl:q}},result:{data:{RssItems:[{title:"Link 1",link:"/rss-link1"},{title:"Link 2",link:"/rss-link2"},{title:"Link 3",link:"/rss-link3"}]}}}},s=()=>Promise.resolve(),u={render:()=>e(a,{children:o(n,{headerOptions:r,desktopColumnCount:2,onAddedToQueue:s,children:[e(n.Item,{...t.dynamic}),e(n.Item,{...t.manual}),e(n.Item,{...t.manual}),e(n.Item,{...t.manual})]})})},m={render:()=>e(a,{children:o(d,{headerOptions:r,desktopColumnCount:2,onAddedToQueue:s,children:[e(d.Item,{...t.dynamic}),e(d.Item,{...t.manual}),e(d.Item,{...t.manual}),e(d.Item,{...t.manual})]})})},l={render:()=>e(a,{children:o(i,{headerOptions:r,desktopColumnCount:2,onAddedToQueue:s,children:[e(i.Item,{...t.dynamic}),e(i.Item,{...t.manual}),e(i.Item,{...t.manual}),e(i.Item,{...t.manual})]})})},c={render:()=>e(a,{children:o(T,{headerOptions:r,children:[e(T.Item,{...t.dynamic}),e(T.Item,{...t.dynamicTwo})]})})},C={render:()=>e(a,{children:o(h,{headerOptions:r,desktopColumnCount:2,onAddedToQueue:s,children:[e(h.Item,{...t.dynamic}),e(h.Item,{...t.dynamicTwo})]})})},p={render:()=>e(a,{sidebar:e(V,{title:"RSS",feedUrl:q}),sidebarPosition:W.Left,children:o(n,{headerOptions:r,desktopColumnCount:2,onAddedToQueue:s,children:[e(n.Item,{...t.manual}),e(n.Item,{...t.manual}),e(n.Item,{...t.manual})]})}),parameters:{apolloClient:{mocks:[E.sidebarRss]}}},I={render:()=>e(a,{sidebar:e(z,{title:"Default",children:"Static sidebar content"}),sidebarPosition:W.Right,children:o(n,{headerOptions:r,desktopColumnCount:2,onAddedToQueue:s,children:[e(n.Item,{...t.manual}),e(n.Item,{...t.manual}),e(n.Item,{...t.manual})]})})};var y,k,S;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <FeaturedContent>
      <ContentTileStandardLayout headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentTileStandardLayout.Item {...mockItems.dynamic} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
      </ContentTileStandardLayout>
    </FeaturedContent>
}`,...(S=(k=u.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var b,f,L;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <FeaturedContent>
      <ContentTileDescriptiveLayout headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentTileDescriptiveLayout.Item {...mockItems.dynamic} />
        <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
        <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
        <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
      </ContentTileDescriptiveLayout>
    </FeaturedContent>
}`,...(L=(f=m.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var g,A,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <FeaturedContent>
      <ContentMultiCarousel headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentMultiCarousel.Item {...mockItems.dynamic} />
        <ContentMultiCarousel.Item {...mockItems.manual} />
        <ContentMultiCarousel.Item {...mockItems.manual} />
        <ContentMultiCarousel.Item {...mockItems.manual} />
      </ContentMultiCarousel>
    </FeaturedContent>
}`,...(v=(A=l.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var D,O,Q;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <FeaturedContent>
      <ContentCarousel headerOptions={headerOptions}>
        <ContentCarousel.Item {...mockItems.dynamic} />
        <ContentCarousel.Item {...mockItems.dynamicTwo} />
      </ContentCarousel>
    </FeaturedContent>
}`,...(Q=(O=c.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};var F,R,w;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <FeaturedContent>
      <ContentTileImageOverlay headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentTileImageOverlay.Item {...mockItems.dynamic} />
        <ContentTileImageOverlay.Item {...mockItems.dynamicTwo} />
      </ContentTileImageOverlay>
    </FeaturedContent>
}`,...(w=(R=C.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var P,x,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <FeaturedContent sidebar={<SidebarRss title="RSS" feedUrl={mockFeedUrl} />} sidebarPosition={SidebarPosition.Left}>
      <ContentTileStandardLayout headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
      </ContentTileStandardLayout>
    </FeaturedContent>,
  parameters: {
    apolloClient: {
      mocks: [mockApolloResults.sidebarRss]
    }
  }
}`,...(M=(x=p.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var _,j,U;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <FeaturedContent sidebar={<SidebarDefault title="Default">Static sidebar content</SidebarDefault>} sidebarPosition={SidebarPosition.Right}>
      <ContentTileStandardLayout headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
      </ContentTileStandardLayout>
    </FeaturedContent>
}`,...(U=(j=I.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};const re=["TileStandardLayout","TileDescriptiveLayout","MultiCarousel","Carousel","TileImageOverlay","WithLeftSidebar","WithRightSidebar"];export{c as Carousel,l as MultiCarousel,m as TileDescriptiveLayout,C as TileImageOverlay,u as TileStandardLayout,p as WithLeftSidebar,I as WithRightSidebar,re as __namedExportsOrder,oe as default};
//# sourceMappingURL=FeaturedContent.stories-bb28fb5a.js.map
