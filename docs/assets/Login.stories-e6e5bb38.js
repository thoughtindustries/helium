import{j as l}from"./jsx-runtime-b91f6123.js";import{L as m,T as p,a as c}from"./login-4b6a5e2b.js";import{W as d}from"./ApolloContext-43df6d1c.js";import{G as u}from"./content-header-5dd6a3a7.js";import"./index-64f120e9.js";import"./headlessui.esm-e8de6dbf.js";import"./index-3bfc112c.js";import"./course-run-ce009bd6.js";import"./tslib.es6-14bf6d9f.js";import"./useTranslation-99ac2b2e.js";import"./nonIterableRest-b538ebd6.js";const R={component:m,title:"Packages/User/Login"},L=e=>({request:{query:p},result:{data:{TermsAndConditions:{globalTerms:e}}}}),o=(e,n,i)=>({request:{query:c,variables:{email:e,password:n}},error:new d({graphQLErrors:[new u(i)]})}),g=[L("<p>Test Global Terms </p>"),o("","","401 Unauthorized"),o("locked@test.com","locked4ever","423 Locked"),o("throttled@test.com","try2hard","User Throttled"),o("password@test.com","stalepassword","Password reset required"),o("email@test.com","verifyemail","Email verification required")],r={render:()=>l(m,{}),parameters:{apolloClient:{mocks:g}}};var s,t,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Login />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const x=["LoginForm"];export{r as LoginForm,x as __namedExportsOrder,R as default};
//# sourceMappingURL=Login.stories-e6e5bb38.js.map
