import{R as r}from"./index-GiUgBvb1.js";import{C as a,a as c,L as l}from"./content-header-CR2oX5EZ.js";import"./ApolloContext-C-0_jjk0.js";const C={component:a,title:"Packages/Content Header"},u=()=>({asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",description:"Content description",title:"Content title",rating:36,ratingsCount:4}),i=()=>({asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",shortDescription:"Content description",name:"Content"}),p=()=>[{request:{query:c,variables:{slug:"test-course"}},result:{data:{CourseGroupBySlug:u()}}},{request:{query:l,variables:{slug:"test-learning-path"}},result:{data:{LearningPathBySlug:i()}}}],g={watchQuery:{fetchPolicy:"no-cache"},query:{fetchPolicy:"no-cache"}},m={addTypename:!1,defaultOptions:g},e={render:n=>r.createElement(a,{...n}),parameters:{apolloClient:{...m,mocks:[...p()]}},argTypes:{slug:{options:["test-course","test-learning-path"],control:{type:"select"}},showStars:!0,showImage:!0},args:{contentKind:"course",slug:"test-course"}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const f=["Base"];export{e as Base,f as __namedExportsOrder,C as default};
