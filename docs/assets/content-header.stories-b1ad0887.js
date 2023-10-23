import{j as r}from"./jsx-runtime-b91f6123.js";import{d as n,e as c,f as l}from"./content-header-5dd6a3a7.js";import"./index-64f120e9.js";import"./tslib.es6-14bf6d9f.js";import"./ApolloContext-43df6d1c.js";const k={component:n,title:"Packages/Content Header"},u=()=>({asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",description:"Content description",title:"Content title",rating:36,ratingsCount:4}),i=()=>({asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",shortDescription:"Content description",name:"Content"}),p=()=>[{request:{query:c,variables:{slug:"test-course"}},result:{data:{CourseGroupBySlug:u()}}},{request:{query:l,variables:{slug:"test-learning-path"}},result:{data:{LearningPathBySlug:i()}}}],g={watchQuery:{fetchPolicy:"no-cache"},query:{fetchPolicy:"no-cache"}},m={addTypename:!1,defaultOptions:g},e={render:a=>r(n,{...a}),parameters:{apolloClient:{...m,mocks:[...p()]}},argTypes:{slug:{options:["test-course","test-learning-path"],control:{type:"select"}},showStars:!0,showImage:!0},args:{contentKind:"course",slug:"test-course"}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <ContentHeader {...args} />,
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [...mockApolloResultsFactory()]
    }
  },
  argTypes: {
    slug: {
      options: ['test-course', 'test-learning-path'],
      control: {
        type: 'select'
      }
    },
    showStars: true,
    showImage: true
  },
  args: {
    contentKind: 'course',
    slug: 'test-course'
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const _=["Base"];export{e as Base,_ as __namedExportsOrder,k as default};
//# sourceMappingURL=content-header.stories-b1ad0887.js.map
