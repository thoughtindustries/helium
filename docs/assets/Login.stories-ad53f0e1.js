import{j as l}from"./jsx-runtime-670450c2.js";import{L as m,T as p,a as c}from"./login-b7859b33.js";import{ag as d}from"./ApolloContext-2edf0031.js";import{G as u}from"./course-run-78bbd7bb.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./headlessui.esm-df411afd.js";import"./index-96c5f47c.js";import"./useTranslation-622fecac.js";import"./nonIterableRest-1390a7e0.js";import"./tslib.es6-33423134.js";const R={component:m,title:"Packages/User/Login"},g=e=>({request:{query:p},result:{data:{TermsAndConditions:{globalTerms:e}}}}),o=(e,n,i)=>({request:{query:c,variables:{email:e,password:n}},error:new d({graphQLErrors:[new u(i)]})}),L=[g("<p>Test Global Terms </p>"),o("","","401 Unauthorized"),o("locked@test.com","locked4ever","423 Locked"),o("throttled@test.com","try2hard","User Throttled"),o("password@test.com","stalepassword","Password reset required"),o("email@test.com","verifyemail","Email verification required")],r={render:()=>l(m,{}),parameters:{apolloClient:{mocks:L}}};var s,t,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Login />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const x=["LoginForm"];export{r as LoginForm,x as __namedExportsOrder,R as default};
//# sourceMappingURL=Login.stories-ad53f0e1.js.map
