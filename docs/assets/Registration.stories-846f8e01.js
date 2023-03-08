import{a as m}from"./jsx-runtime-9707e85d.js";import{R as l,V as p,b as u,T as c}from"./login-0f2eb2ea.js";import"./index-e0ddb630.js";import"./_commonjsHelpers-87174ba5.js";import"./headlessui.esm-ee9145cd.js";import"./index-6327ad81.js";import"./course-run-ffe2e63c.js";import"./ApolloContext-744973fc.js";import"./printer-283319ec.js";import"./parser-170a9164.js";import"./useTranslation-2ddf9c84.js";import"./nonIterableRest-9687e3b1.js";const _={component:l,title:"Packages/User/Registration"},o=(e,t,d,n)=>({request:{query:p,variables:{code:e}},result:{data:{ValidateRedemptionCode:{valid:t,alreadyRedeemed:d,codeExpired:n}}}}),R=(e,t)=>({request:{query:u,variables:{validatedRedemptionCodes:e}},result:{data:{RedeemRegistrationAndRedemptionCodes:{redeemed:t}}}}),f=e=>({request:{query:c},result:{data:{TermsAndConditions:{globalTerms:e}}}}),C=[o("validCode1",!0,!1,!1),o("validCode2",!0,!1,!1),o("validCode3",!0,!1,!1),o("invalidCode",!1,!1,!1),o("",!1,!1,!1),o("expiredCode",!1,!1,!0),o("alreadyRedeemedCode",!1,!0,!1),R(["validCode1","validCode2","validCode3"],!0),f("<p>Test Global Terms </p>")],s={render:e=>m(l,{...e}),parameters:{apolloClient:{mocks:C}}};var a,r,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => <Registration {...args} />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const j=["RegistrationForm"];export{s as RegistrationForm,j as __namedExportsOrder,_ as default};
//# sourceMappingURL=Registration.stories-846f8e01.js.map
