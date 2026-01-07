import{R as l}from"./index-GiUgBvb1.js";import{L as n,T as c,a as p}from"./login-JLa7cPl_.js";import{A as d}from"./ApolloContext-C-0_jjk0.js";import{G as u}from"./content-header-CR2oX5EZ.js";import"./headlessui.esm-Bim7Ixde.js";import"./index-CROobee-.js";import"./course-run-CxLdYtOz.js";import"./useTranslation-GxpaL4ro.js";import"./context-C7Y_GhY_.js";const C={component:n,title:"Packages/User/Login"},L=e=>({request:{query:c},result:{data:{TermsAndConditions:{globalTerms:e}}}}),o=(e,m,i)=>({request:{query:p,variables:{email:e,password:m}},error:new d({graphQLErrors:[new u(i)]})}),g=[L("<p>Test Global Terms </p>"),o("","","401 Unauthorized"),o("locked@test.com","locked4ever","423 Locked"),o("throttled@test.com","try2hard","User Throttled"),o("password@test.com","stalepassword","Password reset required"),o("email@test.com","verifyemail","Email verification required")],r={render:()=>l.createElement(n,null),parameters:{apolloClient:{mocks:g}}};var t,s,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Login />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const v=["LoginForm"];export{r as LoginForm,v as __namedExportsOrder,C as default};
