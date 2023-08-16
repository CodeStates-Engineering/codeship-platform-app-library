import{j as e}from"./jsx-runtime-4ca860c5.js";import{T as t}from"./index-ac366c56.js";import{A as l}from"./alert-octagon-9b6ca96b.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-cd606f41.js";import"./index-ff9907f0.js";import"./Compatibility-d1e3055b.js";import"./useValidate-151d9b0b.js";import"./cleanClassName-cdc1ff81.js";import"./index-f746e559.js";import"./index-f9399702.js";import"./index-8d47fad6.js";import"./index-5ac2aed5.js";import"./index-2801d3c9.js";import"./index-2f6fdfd7.js";import"./index-6767a2d5.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-ad039625.js";import"./index-e6fc3cfe.js";import"./useSubscribedState-dbc08c5d.js";import"./_Uint8Array-416ed47b.js";const E={title:"molecules/Textbox",component:t,decorators:[r=>e.jsx("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"10px"},children:e.jsx(r,{})})],args:{placeholder:"Textbox",label:"Textbox",validationTrigger:"onChange",labelStyle:{fontSize:"small",fontWeight:500,direction:"column"},inputStyle:{width:"300px",fontSize:"normal",fontWeight:500,borderRadius:"8",size:"large"},validation:r=>{if(!r)return"Value is required"}}},o={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,label:"Readonly",value:100,unit:"명",readOnly:!0}),e.jsx(t,{...r,label:"Large number",type:"large-number",value:void 0,description:"테스트"}),e.jsx(t,{...r,label:"Phone number",type:"phone-number",value:void 0,description:"테스트"}),e.jsx(t,{...r,label:"Business number",type:"business-number",value:void 0}),e.jsx(t,{...r,type:"number",label:"Number",value:void 0}),e.jsx(t,{...r,unit:e.jsx(l,{})})]})};var n,i,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <>
      <Textbox {...args} label="Readonly" value={100} unit="명" readOnly />
      <Textbox {...args} label="Large number" type="large-number" value={undefined} description="테스트" />
      <Textbox {...args} label="Phone number" type="phone-number" value={undefined} description="테스트" />
      <Textbox {...args} label="Business number" type="business-number" value={undefined} />
      <Textbox {...args} type="number" label="Number" value={undefined} />
      <Textbox {...args} unit={<AlertOctagon />} />
    </>
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const L=["Default"];export{o as Default,L as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-5d47efae.js.map
