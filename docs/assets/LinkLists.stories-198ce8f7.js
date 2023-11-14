import{j as e,a as n}from"./jsx-runtime-b91f6123.js";import{H as D}from"./header-a7feb4e4.js";import{r}from"./index-64f120e9.js";import{u as E}from"./useTranslation-99ac2b2e.js";import"./nonIterableRest-b538ebd6.js";const o=t=>{const{title:a,alternateTitleDisplay:L,children:s}=t;return e("div",{className:"w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none",children:n("div",{className:"w-full relative pl-4 pr-4 float-left",children:[a&&e(D,{title:a,alternateTitleDisplay:L}),e("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-x-8",children:s})]})})};o.displayName="LinkLists";try{o.displayName="LinkLists",o.__docgenInfo={description:"",displayName:"LinkLists",props:{title:{defaultValue:null,description:"title that appears on top of the link lists",name:"title",required:!1,type:{name:"string"}},alternateTitleDisplay:{defaultValue:null,description:"display alternate title",name:"alternateTitleDisplay",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"list of categories",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const C=r.createContext(void 0);function S(){const t=r.useContext(C);if(!t)throw new Error("No context found for LinkList");return t}const V=()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"leading-none text-xs border border-solid border-gray-300 pr-0 inline-block",width:"15",height:"15","aria-label":"expand",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),i=({children:t,key:a,label:L,displayCutoff:s})=>{const d=r.Children.count(t),y=s!==void 0&&d>s,[l,c]=r.useState(!y),{t:x}=E(),N=r.useCallback(()=>{c(!0)},[]),v=r.useMemo(()=>({expanded:l,displayCutoff:s}),[s,l]);return e(C.Provider,{value:v,children:e("li",{className:"mb-4",children:n("div",{className:"border-r",children:[e("h4",{className:"text-sm font-bold",children:L}),e("ul",{className:"m-0 p-0 list-none",children:r.Children.map(t,(_,w)=>r.cloneElement(_,{index:w}))}),!l&&n("button",{className:"border-0 text-link cursor-pointer inline-block font-normal text-xs leading-normal p-0 relative m-0 text-left no-underline shadow-none h-auto font-primary hover:text-link-hover focus:outline-blue focus:shadow",onClick:N,children:[e(V,{}),e("span",{className:"ml-1",children:x("more")})]})]})},a)})},q=({key:t,index:a,linkOpenInNewTab:L,children:s,...d})=>{const{expanded:y,displayCutoff:l}=S();if(!y&&l!==void 0&&a!==void 0&&a>=l)return null;const c={...d,className:"text-sm text-link underline"};return L&&(c.target="_blank"),e("li",{className:"pl-5 before:content-['\\2022\\20']",children:e("a",{...c,children:s})},t)};i.displayName="LinkList";i.Link=q;try{i.displayName="LinkList",i.__docgenInfo={description:"",displayName:"LinkList",props:{key:{defaultValue:null,description:"key index of category in the link lists",name:"key",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"label for category",name:"label",required:!0,type:{name:"string"}},displayCutoff:{defaultValue:null,description:"display links at the cutoff with a toggle to display all",name:"displayCutoff",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"list of categories",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[]"}}}}}catch{}const B={component:o,title:"Packages/Link Lists"},k={render:()=>n(o,{title:"Dolor Nullam Mattis Sem",children:[n(i,{label:"Category 1",children:[e(i.Link,{href:"/subcategory-link1",children:"List subcategory 1"}),e(i.Link,{href:"/subcategory-link2",children:"List subcategory 2"}),e(i.Link,{href:"/subcategory-link3",children:"List subcategory 3"})]}),n(i,{label:"Category 2",children:[e(i.Link,{href:"/subcategory-link1",children:"List subcategory 1"}),e(i.Link,{href:"/subcategory-link2",children:"List subcategory 2"})]}),n(i,{label:"Category 3",children:[e(i.Link,{href:"/subcategory-link1",children:"List subcategory 1"}),e(i.Link,{href:"/subcategory-link2",children:"List subcategory 2"}),e(i.Link,{href:"/subcategory-link3",children:"List subcategory 3"}),e(i.Link,{href:"/subcategory-link4",children:"List subcategory 4"})]}),e(i,{label:"Category 4",children:e(i.Link,{href:"/subcategory-link1",children:"List subcategory 1"})})]})},u={render:()=>n(o,{title:"Dolor Nullam Mattis Sem",alternateTitleDisplay:!0,children:[n(i,{label:"Category 1",displayCutoff:2,children:[e(i.Link,{href:"/subcategory-link1",children:"List subcategory 1"}),e(i.Link,{href:"/subcategory-link2",children:"List subcategory 2"}),e(i.Link,{href:"/subcategory-link3",children:"List subcategory 3"})]}),n(i,{label:"Category 2",displayCutoff:2,children:[e(i.Link,{href:"/subcategory-link1",children:"List subcategory 1"}),e(i.Link,{href:"/subcategory-link2",children:"List subcategory 2"})]}),n(i,{label:"Category 3",displayCutoff:2,children:[e(i.Link,{href:"/subcategory-link1",children:"List subcategory 1"}),e(i.Link,{href:"/subcategory-link2",children:"List subcategory 2"}),e(i.Link,{href:"/subcategory-link3",children:"List subcategory 3"}),e(i.Link,{href:"/subcategory-link4",children:"List subcategory 4"})]}),e(i,{label:"Category 4",displayCutoff:2,children:e(i.Link,{href:"/subcategory-link1",children:"List subcategory 1"})})]})};var g,b,h;k.parameters={...k.parameters,docs:{...(g=k.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <LinkLists title="Dolor Nullam Mattis Sem">
      <LinkList label="Category 1">
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
        <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
        <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>
      </LinkList>

      <LinkList label="Category 2">
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
        <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
      </LinkList>

      <LinkList label="Category 3">
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
        <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
        <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>
        <LinkList.Link href="/subcategory-link4">List subcategory 4</LinkList.Link>
      </LinkList>

      <LinkList label="Category 4">
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
      </LinkList>
    </LinkLists>
}`,...(h=(b=k.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,p,m;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <LinkLists title="Dolor Nullam Mattis Sem" alternateTitleDisplay>
      <LinkList label="Category 1" displayCutoff={2}>
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
        <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
        <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>
      </LinkList>

      <LinkList label="Category 2" displayCutoff={2}>
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
        <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
      </LinkList>

      <LinkList label="Category 3" displayCutoff={2}>
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
        <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>
        <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>
        <LinkList.Link href="/subcategory-link4">List subcategory 4</LinkList.Link>
      </LinkList>

      <LinkList label="Category 4" displayCutoff={2}>
        <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>
      </LinkList>
    </LinkLists>
}`,...(m=(p=u.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const H=["Base","WithDisplayCutoff"];export{k as Base,u as WithDisplayCutoff,H as __namedExportsOrder,B as default};
//# sourceMappingURL=LinkLists.stories-198ce8f7.js.map
