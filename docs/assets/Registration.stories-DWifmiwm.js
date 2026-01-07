import{R as m}from"./index-GiUgBvb1.js";import{R as i,V as p,b as c,T as u}from"./login-JLa7cPl_.js";import"./headlessui.esm-Bim7Ixde.js";import"./index-CROobee-.js";import"./content-header-CR2oX5EZ.js";import"./ApolloContext-C-0_jjk0.js";import"./course-run-CxLdYtOz.js";import"./useTranslation-GxpaL4ro.js";import"./context-C7Y_GhY_.js";const D={component:i,title:"Packages/User/Registration"},o=(e,s,d,n)=>({request:{query:p,variables:{code:e}},result:{data:{ValidateRedemptionCode:{valid:s,alreadyRedeemed:d,codeExpired:n}}}}),R=(e,s)=>({request:{query:c,variables:{validatedRedemptionCodes:e}},result:{data:{RedeemRegistrationAndRedemptionCodes:{redeemed:s}}}}),f=e=>({request:{query:u},result:{data:{TermsAndConditions:{globalTerms:e}}}}),C=[o("validCode1",!0,!1,!1),o("validCode2",!0,!1,!1),o("validCode3",!0,!1,!1),o("invalidCode",!1,!1,!1),o("",!1,!1,!1),o("expiredCode",!1,!1,!0),o("alreadyRedeemedCode",!1,!0,!1),R(["validCode1","validCode2","validCode3"],!0),f("<p>Test Global Terms </p>")],t={render:e=>m.createElement(i,{...e}),parameters:{apolloClient:{mocks:C}}};var a,r,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => <Registration {...args} />,
  parameters: {
    apolloClient: {
      mocks: mockApolloResults
    }
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const F=["RegistrationForm"];export{t as RegistrationForm,F as __namedExportsOrder,D as default};
