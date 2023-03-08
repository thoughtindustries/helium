import{a as p}from"./jsx-runtime-9707e85d.js";import{L as m,T as l,a as c}from"./login-0f2eb2ea.js";import{a8 as d}from"./ApolloContext-744973fc.js";import{G as u}from"./parser-170a9164.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./headlessui.esm-ee9145cd.js";import"./index-6327ad81.js";import"./course-run-ffe2e63c.js";import"./useTranslation-2ddf9c84.js";import"./nonIterableRest-9687e3b1.js";import"./printer-283319ec.js";const x={component:m,title:"Packages/User/Login"},L=e=>({request:{query:l},result:{data:{TermsAndConditions:{globalTerms:e}}}}),o=(e,n,i)=>({request:{query:c,variables:{email:e,password:n}},error:new d({graphQLErrors:[new u(i)]})}),g=[L("<p>Test Global Terms </p>"),o("","","401 Unauthorized"),o("locked@test.com","locked4ever","423 Locked"),o("throttled@test.com","try2hard","User Throttled"),o("password@test.com","stalepassword","Password reset required"),o("email@test.com","verifyemail","Email verification required")],r={render:()=>p(m,{}),parameters:{apolloClient:{mocks:g}}};var t,s,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Login />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const G=["LoginForm"];export{r as LoginForm,G as __namedExportsOrder,x as default};
//# sourceMappingURL=Login.stories-691064cb.js.map
