import{j as e}from"./jsx-runtime-94f6e698.js";import{T as t}from"./index-bb5ab155.js";import{A as a}from"./alert-octagon-71cb238b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-9cbe1128.js";import"./index-c720573b.js";import"./Compatibility-ff615e1c.js";import"./useValidate-8b7306c6.js";import"./cleanClassName-cdc1ff81.js";import"./index-bc6a96dd.js";import"./index-1b42ff34.js";import"./index-1fc0ca9a.js";import"./index-d42fc47d.js";import"./index-8ce4a492.js";import"./index-55bd2212.js";import"./index-a7447f35.js";import"./index-e29dd81e.js";import"./index-a7ebed86.js";import"./index-950b02d3.js";import"./isObject-5520b7e1.js";import"./index-0aca656c.js";import"./useSubscribedState-bcd4053f.js";import"./_Uint8Array-d55c0654.js";const L={title:"molecules/Textbox",component:t,decorators:[r=>e.jsx("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"10px"},children:e.jsx(r,{})})],args:{placeholder:"Textbox",label:"Textbox",labelStyle:{fontSize:"small",fontWeight:500,direction:"column"},inputStyle:{width:"300px",fontSize:"normal",fontWeight:500,borderRadius:"8",size:"large"},validation:r=>{if(!r)return"Value is required"}}},o={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,label:"Readonly",value:100,unit:"명",readOnly:!0}),e.jsx(t,{...r,label:"Large number",type:"large-number",value:void 0,description:"테스트"}),e.jsx(t,{...r,label:"Phone number",type:"phone-number",value:void 0,description:"테스트"}),e.jsx(t,{...r,label:"Business number",type:"business-number",value:void 0}),e.jsx(t,{...r,type:"number",label:"Number",value:void 0}),e.jsx(t,{...r,unit:e.jsx(a,{})})]})};var n,i,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <>
      <Textbox {...args} label="Readonly" value={100} unit="명" readOnly />
      <Textbox {...args} label="Large number" type="large-number" value={undefined} description="테스트" />
      <Textbox {...args} label="Phone number" type="phone-number" value={undefined} description="테스트" />
      <Textbox {...args} label="Business number" type="business-number" value={undefined} />
      <Textbox {...args} type="number" label="Number" value={undefined} />
      <Textbox {...args} unit={<AlertOctagon />} />
    </>
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,L as default};
//# sourceMappingURL=index.stories-ab467751.js.map
