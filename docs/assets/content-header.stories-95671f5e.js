import{j as r}from"./jsx-runtime-b91f6123.js";import{d as a,e as l,f as c}from"./content-header-84cd9f86.js";import"./index-64f120e9.js";import"./tslib.es6-14bf6d9f.js";import"./ApolloContext-43df6d1c.js";const k={component:a,title:"Packages/Content Header"},u=()=>({asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",description:"Content description",title:"Content title",rating:36,ratingsCount:4}),i=()=>({asset:"https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg",shortDescription:"Content description",name:"Content"}),p=()=>[{request:{query:l,variables:{slug:"test-course"}},result:{data:{CourseGroupBySlug:u()}}},{request:{query:c,variables:{slug:"test-learning-path"}},result:{data:{LearningPathBySlug:i()}}}],m={watchQuery:{fetchPolicy:"no-cache"},query:{fetchPolicy:"no-cache"}},d={addTypename:!1,defaultOptions:m},e={render:n=>r(a,{...n}),parameters:{apolloClient:{...d,mocks:[...p()]}},argTypes:{contentKind:"course",slug:{options:["test-course","test-learning-path"],control:{type:"select"},table:{type:{summary:"select"},defaultValue:{summary:"test-course"}}},showStars:!0,showImage:!0}};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <ContentHeader {...args} />,
  parameters: {
    apolloClient: {
      ...apolloBaseParams,
      mocks: [...mockApolloResultsFactory()]
    }
  },
  argTypes: {
    contentKind: 'course',
    slug: {
      options: ['test-course', 'test-learning-path'],
      control: {
        type: 'select'
      },
      //use table to set default value for select
      table: {
        type: {
          summary: 'select'
        },
        defaultValue: {
          summary: 'test-course'
        }
      }
    },
    showStars: true,
    showImage: true
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const _=["Base"];export{e as Base,_ as __namedExportsOrder,k as default};
//# sourceMappingURL=content-header.stories-95671f5e.js.map
