import{j as m}from"./jsx-runtime-670450c2.js";import{R as l,V as p,b as u,T as c}from"./login-b7859b33.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./headlessui.esm-df411afd.js";import"./index-96c5f47c.js";import"./course-run-78bbd7bb.js";import"./tslib.es6-33423134.js";import"./ApolloContext-2edf0031.js";import"./useTranslation-622fecac.js";import"./nonIterableRest-1390a7e0.js";const V={component:l,title:"Packages/User/Registration"},o=(e,t,d,n)=>({request:{query:p,variables:{code:e}},result:{data:{ValidateRedemptionCode:{valid:t,alreadyRedeemed:d,codeExpired:n}}}}),R=(e,t)=>({request:{query:u,variables:{validatedRedemptionCodes:e}},result:{data:{RedeemRegistrationAndRedemptionCodes:{redeemed:t}}}}),f=e=>({request:{query:c},result:{data:{TermsAndConditions:{globalTerms:e}}}}),C=[o("validCode1",!0,!1,!1),o("validCode2",!0,!1,!1),o("validCode3",!0,!1,!1),o("invalidCode",!1,!1,!1),o("",!1,!1,!1),o("expiredCode",!1,!1,!0),o("alreadyRedeemedCode",!1,!0,!1),R(["validCode1","validCode2","validCode3"],!0),f("<p>Test Global Terms </p>")],s={render:e=>m(l,{...e}),parameters:{apolloClient:{mocks:C}}};var a,r,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => <Registration {...args} />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const j=["RegistrationForm"];export{s as RegistrationForm,j as __namedExportsOrder,V as default};
//# sourceMappingURL=Registration.stories-39acb84a.js.map
