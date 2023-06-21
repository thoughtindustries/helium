import{j as l}from"./jsx-runtime-b91f6123.js";import{L as m,T as c,a as p}from"./login-c024ba6e.js";import{W as d}from"./ApolloContext-92c8f557.js";import{G as u}from"./course-run-b6de0228.js";import"./index-64f120e9.js";import"./headlessui.esm-e8de6dbf.js";import"./index-3bfc112c.js";import"./useTranslation-ee3e1c6a.js";import"./nonIterableRest-d1264b94.js";import"./tslib.es6-14bf6d9f.js";const y={component:m,title:"Packages/User/Login"},L=e=>({request:{query:c},result:{data:{TermsAndConditions:{globalTerms:e}}}}),o=(e,n,i)=>({request:{query:p,variables:{email:e,password:n}},error:new d({graphQLErrors:[new u(i)]})}),g=[L("<p>Test Global Terms </p>"),o("","","401 Unauthorized"),o("locked@test.com","locked4ever","423 Locked"),o("throttled@test.com","try2hard","User Throttled"),o("password@test.com","stalepassword","Password reset required"),o("email@test.com","verifyemail","Email verification required")],r={render:()=>l(m,{}),parameters:{apolloClient:{mocks:g}}};var s,t,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Login />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const R=["LoginForm"];export{r as LoginForm,R as __namedExportsOrder,y as default};
//# sourceMappingURL=Login.stories-04cfa9a9.js.map
