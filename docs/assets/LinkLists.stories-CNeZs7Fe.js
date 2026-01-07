import{R as e,r as s}from"./index-GiUgBvb1.js";import{H as w}from"./header--esLRM0g.js";import{u as T}from"./useTranslation-GxpaL4ro.js";import"./context-C7Y_GhY_.js";const o=n=>{const{title:r,alternateTitleDisplay:l,children:i}=n;return e.createElement("div",{className:"w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none"},e.createElement("div",{className:"w-full relative pl-4 pr-4 float-left"},r&&e.createElement(w,{title:r,alternateTitleDisplay:l}),e.createElement("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-x-8"},i)))};o.displayName="LinkLists";o.__docgenInfo={description:"",methods:[],displayName:"LinkLists",props:{title:{required:!1,tsType:{name:"string"},description:"title that appears on top of the link lists"},alternateTitleDisplay:{required:!1,tsType:{name:"boolean"},description:"display alternate title"},children:{required:!0,tsType:{name:"ReactNode"},description:"list of categories"}}};const h=s.createContext(void 0);function D(){const n=s.useContext(h);if(!n)throw new Error("No context found for LinkList");return n}const R=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"leading-none text-xs border border-solid border-gray-300 pr-0 inline-block",width:"15",height:"15","aria-label":"expand",viewBox:"0 0 20 20",fill:"currentColor"},e.createElement("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})),t=({children:n,key:r,label:l,displayCutoff:i})=>{const u=s.Children.count(n),m=i!==void 0&&u>i,[a,L]=s.useState(!m),{t:E}=T(),C=s.useCallback(()=>{L(!0)},[]),x=s.useMemo(()=>({expanded:a,displayCutoff:i}),[i,a]);return e.createElement(h.Provider,{value:x},e.createElement("li",{key:r,className:"mb-4"},e.createElement("div",{className:"border-r"},e.createElement("h4",{className:"text-sm font-bold"},l),e.createElement("ul",{className:"m-0 p-0 list-none"},s.Children.map(n,(N,v)=>s.cloneElement(N,{index:v}))),!a&&e.createElement("button",{className:"border-0 text-link cursor-pointer inline-block font-normal text-xs leading-normal p-0 relative m-0 text-left no-underline shadow-none h-auto font-primary hover:text-link-hover focus:outline-blue focus:shadow",onClick:C},e.createElement(R,null),e.createElement("span",{className:"ml-1"},E("more"))))))},S=({key:n,index:r,linkOpenInNewTab:l,children:i,...u})=>{const{expanded:m,displayCutoff:a}=D();if(!m&&a!==void 0&&r!==void 0&&r>=a)return null;const L={...u,className:"text-sm text-link underline"};return l&&(L.target="_blank"),e.createElement("li",{key:n,className:"pl-5 before:content-['\\2022\\20']"},e.createElement("a",{...L},i))};t.displayName="LinkList";t.Link=S;t.__docgenInfo={description:"",methods:[{name:"Link",docblock:null,modifiers:["static"],params:[{name:`{
  key,
  index,
  linkOpenInNewTab,
  children,
  ...restProps
}: LinkListLinkProps`,optional:!1,type:{name:"LinkListLinkProps",alias:"LinkListLinkProps"}}],returns:{type:{name:"union",raw:"JSX.Element | null",elements:[{name:"JSX.Element"},{name:"null"}]}}}],displayName:"LinkList",props:{key:{required:!1,tsType:{name:"string"},description:"key index of category in the link lists"},label:{required:!0,tsType:{name:"string"},description:"label for category"},displayCutoff:{required:!1,tsType:{name:"number"},description:"display links at the cutoff with a toggle to display all"},children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:"list of categories"}}};const I={component:o,title:"Packages/Link Lists"},c={render:()=>e.createElement(o,{title:"Dolor Nullam Mattis Sem"},e.createElement(t,{label:"Category 1"},e.createElement(t.Link,{href:"/subcategory-link1"},"List subcategory 1"),e.createElement(t.Link,{href:"/subcategory-link2"},"List subcategory 2"),e.createElement(t.Link,{href:"/subcategory-link3"},"List subcategory 3")),e.createElement(t,{label:"Category 2"},e.createElement(t.Link,{href:"/subcategory-link1"},"List subcategory 1"),e.createElement(t.Link,{href:"/subcategory-link2"},"List subcategory 2")),e.createElement(t,{label:"Category 3"},e.createElement(t.Link,{href:"/subcategory-link1"},"List subcategory 1"),e.createElement(t.Link,{href:"/subcategory-link2"},"List subcategory 2"),e.createElement(t.Link,{href:"/subcategory-link3"},"List subcategory 3"),e.createElement(t.Link,{href:"/subcategory-link4"},"List subcategory 4")),e.createElement(t,{label:"Category 4"},e.createElement(t.Link,{href:"/subcategory-link1"},"List subcategory 1")))},k={render:()=>e.createElement(o,{title:"Dolor Nullam Mattis Sem",alternateTitleDisplay:!0},e.createElement(t,{label:"Category 1",displayCutoff:2},e.createElement(t.Link,{href:"/subcategory-link1"},"List subcategory 1"),e.createElement(t.Link,{href:"/subcategory-link2"},"List subcategory 2"),e.createElement(t.Link,{href:"/subcategory-link3"},"List subcategory 3")),e.createElement(t,{label:"Category 2",displayCutoff:2},e.createElement(t.Link,{href:"/subcategory-link1"},"List subcategory 1"),e.createElement(t.Link,{href:"/subcategory-link2"},"List subcategory 2")),e.createElement(t,{label:"Category 3",displayCutoff:2},e.createElement(t.Link,{href:"/subcategory-link1"},"List subcategory 1"),e.createElement(t.Link,{href:"/subcategory-link2"},"List subcategory 2"),e.createElement(t.Link,{href:"/subcategory-link3"},"List subcategory 3"),e.createElement(t.Link,{href:"/subcategory-link4"},"List subcategory 4")),e.createElement(t,{label:"Category 4",displayCutoff:2},e.createElement(t.Link,{href:"/subcategory-link1"},"List subcategory 1")))};var y,g,b;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(g=c.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var d,f,p;k.parameters={...k.parameters,docs:{...(d=k.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(f=k.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const B=["Base","WithDisplayCutoff"];export{c as Base,k as WithDisplayCutoff,B as __namedExportsOrder,I as default};
