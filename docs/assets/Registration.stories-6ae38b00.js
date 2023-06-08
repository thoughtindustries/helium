import{j as m}from"./jsx-runtime-b91f6123.js";import{R as l,V as p,b as u,T as c}from"./login-fe8eaf75.js";import"./index-64f120e9.js";import"./headlessui.esm-e8de6dbf.js";import"./index-3bfc112c.js";import"./course-run-5f7a295c.js";import"./tslib.es6-14bf6d9f.js";import"./ApolloContext-92c8f557.js";import"./useTranslation-ee3e1c6a.js";import"./nonIterableRest-d1264b94.js";const F={component:l,title:"Packages/User/Registration"},o=(e,t,d,n)=>({request:{query:p,variables:{code:e}},result:{data:{ValidateRedemptionCode:{valid:t,alreadyRedeemed:d,codeExpired:n}}}}),R=(e,t)=>({request:{query:u,variables:{validatedRedemptionCodes:e}},result:{data:{RedeemRegistrationAndRedemptionCodes:{redeemed:t}}}}),f=e=>({request:{query:c},result:{data:{TermsAndConditions:{globalTerms:e}}}}),C=[o("validCode1",!0,!1,!1),o("validCode2",!0,!1,!1),o("validCode3",!0,!1,!1),o("invalidCode",!1,!1,!1),o("",!1,!1,!1),o("expiredCode",!1,!1,!0),o("alreadyRedeemedCode",!1,!0,!1),R(["validCode1","validCode2","validCode3"],!0),f("<p>Test Global Terms </p>")],s={render:e=>m(l,{...e}),parameters:{apolloClient:{mocks:C}}};var a,r,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => <Registration {...args} />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const V=["RegistrationForm"];export{s as RegistrationForm,V as __namedExportsOrder,F as default};
//# sourceMappingURL=Registration.stories-6ae38b00.js.map
