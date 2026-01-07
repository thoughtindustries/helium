import{R as e}from"./index-GiUgBvb1.js";import{F as a,C as n,a as s,b as m,c as I,d as T,S as U,e as j,f as q}from"./tile-image-overlay-trBCH1Mw.js";import"./course-run-CxLdYtOz.js";import{R as V}from"./content-header-CR2oX5EZ.js";import"./useTranslation-GxpaL4ro.js";import"./context-C7Y_GhY_.js";import"./header--esLRM0g.js";import"./clsx.m-CH7BE6MN.js";import"./use-multi-carousel-behavior-BuTFsYcw.js";import"./use-previous-DedoEI6V.js";import"./ApolloContext-C-0_jjk0.js";const te={component:a,title:"Packages/Featured Content/Base"},o={title:"Feature Content Header"},t={manual:{title:"Manual item",description:"description",href:"/manual-item",isActive:!0},dynamic:{title:"Dynamic item",courseStartDate:new Date(2020,0,1),contentTypeLabel:"Course",source:"Test source",authors:["Test Author"],description:"description",href:"/",isCompleted:!0,asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",canAddToQueue:!0,isActive:!0,callToAction:"View Details",ribbon:{color:"#39ad39",contrastColor:"#fff",darkerColor:"#2c872c",label:"Test ribbon",slug:"test-ribbon"},rating:36,hasAvailability:!1,priceInCents:6500,suggestedRetailPriceInCents:8e3},dynamicTwo:{title:"Dynamic item 2",courseStartDate:new Date(2020,0,1),contentTypeLabel:"Course",source:"Test source",authors:["Test Author"],description:"description",href:"/",isCompleted:!0,asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fit,w_800/v1/course-uploads/5fea45fb-d8cb-4f0a-b048-932cc361b20a/pfg9202pfzkd-test-image-5_800x600.jpg",canAddToQueue:!0,isActive:!0,callToAction:"View Details",rating:87,hasAvailability:!1,priceInCents:6500,suggestedRetailPriceInCents:8e3}},W="https://foo/bar",z={sidebarRss:{request:{query:V,variables:{feedUrl:W}},result:{data:{RssItems:[{title:"Link 1",link:"/rss-link1"},{title:"Link 2",link:"/rss-link2"},{title:"Link 3",link:"/rss-link3"}]}}}},r=()=>Promise.resolve(),d={render:()=>e.createElement(a,null,e.createElement(n,{headerOptions:o,desktopColumnCount:2,onAddedToQueue:r},e.createElement(n.Item,{...t.dynamic}),e.createElement(n.Item,{...t.manual}),e.createElement(n.Item,{...t.manual}),e.createElement(n.Item,{...t.manual})))},i={render:()=>e.createElement(a,null,e.createElement(s,{headerOptions:o,desktopColumnCount:2,onAddedToQueue:r},e.createElement(s.Item,{...t.dynamic}),e.createElement(s.Item,{...t.manual}),e.createElement(s.Item,{...t.manual}),e.createElement(s.Item,{...t.manual})))},l={render:()=>e.createElement(a,null,e.createElement(m,{headerOptions:o,desktopColumnCount:2,onAddedToQueue:r},e.createElement(m.Item,{...t.dynamic}),e.createElement(m.Item,{...t.manual}),e.createElement(m.Item,{...t.manual}),e.createElement(m.Item,{...t.manual})))},u={render:()=>e.createElement(a,null,e.createElement(I,{headerOptions:o},e.createElement(I.Item,{...t.dynamic}),e.createElement(I.Item,{...t.dynamicTwo})))},c={render:()=>e.createElement(a,null,e.createElement(T,{headerOptions:o,desktopColumnCount:2,onAddedToQueue:r},e.createElement(T.Item,{...t.dynamic}),e.createElement(T.Item,{...t.dynamicTwo})))},C={render:()=>e.createElement(a,{sidebar:e.createElement(j,{title:"RSS",feedUrl:W}),sidebarPosition:U.Left},e.createElement(n,{headerOptions:o,desktopColumnCount:2,onAddedToQueue:r},e.createElement(n.Item,{...t.manual}),e.createElement(n.Item,{...t.manual}),e.createElement(n.Item,{...t.manual}))),parameters:{apolloClient:{mocks:[z.sidebarRss]}}},p={render:()=>e.createElement(a,{sidebar:e.createElement(q,{title:"Default"},"Static sidebar content"),sidebarPosition:U.Right},e.createElement(n,{headerOptions:o,desktopColumnCount:2,onAddedToQueue:r},e.createElement(n.Item,{...t.manual}),e.createElement(n.Item,{...t.manual}),e.createElement(n.Item,{...t.manual})))};var y,k,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <FeaturedContent>
      <ContentTileStandardLayout headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentTileStandardLayout.Item {...mockItems.dynamic} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
      </ContentTileStandardLayout>
    </FeaturedContent>
}`,...(h=(k=d.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var S,b,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <FeaturedContent>
      <ContentTileDescriptiveLayout headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentTileDescriptiveLayout.Item {...mockItems.dynamic} />
        <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
        <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
        <ContentTileDescriptiveLayout.Item {...mockItems.manual} />
      </ContentTileDescriptiveLayout>
    </FeaturedContent>
}`,...(E=(b=i.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var f,L,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <FeaturedContent>
      <ContentMultiCarousel headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentMultiCarousel.Item {...mockItems.dynamic} />
        <ContentMultiCarousel.Item {...mockItems.manual} />
        <ContentMultiCarousel.Item {...mockItems.manual} />
        <ContentMultiCarousel.Item {...mockItems.manual} />
      </ContentMultiCarousel>
    </FeaturedContent>
}`,...(g=(L=l.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var A,v,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <FeaturedContent>
      <ContentCarousel headerOptions={headerOptions}>
        <ContentCarousel.Item {...mockItems.dynamic} />
        <ContentCarousel.Item {...mockItems.dynamicTwo} />
      </ContentCarousel>
    </FeaturedContent>
}`,...(D=(v=u.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var O,Q,F;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <FeaturedContent>
      <ContentTileImageOverlay headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentTileImageOverlay.Item {...mockItems.dynamic} />
        <ContentTileImageOverlay.Item {...mockItems.dynamicTwo} />
      </ContentTileImageOverlay>
    </FeaturedContent>
}`,...(F=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:F.source}}};var R,w,P;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(w=C.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var M,_,x;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <FeaturedContent sidebar={<SidebarDefault title="Default">Static sidebar content</SidebarDefault>} sidebarPosition={SidebarPosition.Right}>
      <ContentTileStandardLayout headerOptions={headerOptions} desktopColumnCount={2} onAddedToQueue={handleAddedToQueue}>
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
        <ContentTileStandardLayout.Item {...mockItems.manual} />
      </ContentTileStandardLayout>
    </FeaturedContent>
}`,...(x=(_=p.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const ne=["TileStandardLayout","TileDescriptiveLayout","MultiCarousel","Carousel","TileImageOverlay","WithLeftSidebar","WithRightSidebar"];export{u as Carousel,l as MultiCarousel,i as TileDescriptiveLayout,c as TileImageOverlay,d as TileStandardLayout,C as WithLeftSidebar,p as WithRightSidebar,ne as __namedExportsOrder,te as default};
