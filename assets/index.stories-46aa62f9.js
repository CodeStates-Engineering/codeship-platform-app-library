import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as f}from"./index-61bf1805.js";import"./Compatibility-d1e3055b.js";import"./useValidate-151d9b0b.js";import{u as _}from"./useSubscribedState-dbc08c5d.js";import"./index-3b874023.js";import{P as g}from"./index-80889af2.js";import{S as P}from"./index-de9c7388.js";import"./_commonjsHelpers-de833af9.js";import"./cleanClassName-cdc1ff81.js";import"./index-ad039625.js";import"./_Uint8Array-416ed47b.js";import"./index-ac366c56.js";import"./index-cd606f41.js";import"./index-ff9907f0.js";import"./index-f746e559.js";import"./index-f9399702.js";import"./index-8d47fad6.js";import"./index-5ac2aed5.js";import"./index-2801d3c9.js";import"./index-2f6fdfd7.js";import"./index-6767a2d5.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-e6fc3cfe.js";import"./index-751f0006.js";import"./index-4c4270e7.js";import"./index-33edcd0f.js";import"./index-3b9a45ba.js";import"./index-719b0226.js";import"./x-06d309c3.js";import"./index-22199ab1.js";import"./index-4b0375af.js";import"./chevron-down-2f1d20ed.js";import"./index-4725194c.js";import"./index-60af0cbf.js";import"./DUMMY-096d32b1.js";import"./index-0c72020f.js";import"./index-1a80ed02.js";import"./index-6142e748.js";import"./index-93775688.js";import"./index-834e33dc.js";import"./index-285c8742.js";const l={"back-office-pagination":"_back-office-pagination_18648_461","back-office-per-page":"_back-office-per-page_18648_465","fade-in":"_fade-in_18648_1","fade-out":"_fade-out_18648_1","shake-horizontal":"_shake-horizontal_18648_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_18648_1","slide-in-fwd-center":"_slide-in-fwd-center_18648_1","scale-in-center":"_scale-in-center_18648_1","slide-in-right":"_slide-in-right_18648_1","slide-in-left":"_slide-in-left_18648_1","slide-out-right":"_slide-out-right_18648_1","slide-out-left":"_slide-out-left_18648_1","scale-in-top":"_scale-in-top_18648_1","scale-out-top":"_scale-out-top_18648_1","swing-in-top-fwd":"_swing-in-top-fwd_18648_1","fade-in-top":"_fade-in-top_18648_1","fade-out-top":"_fade-out-top_18648_1","fade-in-bottom":"_fade-in-bottom_18648_1","fade-out-bottom":"_fade-out-bottom_18648_1","scale-out-horizontal":"_scale-out-horizontal_18648_1"},r=({itemsPerPage:t,onChangeItemsPerPage:i,itemPerPageOptions:n=[10,20,30,40,50],...u})=>{const[p,s]=_(t);return e.jsxs("div",{className:l["back-office-pagination"],children:[e.jsx(g,{type:"simple",...u,itemsPerPage:p}),e.jsx(P,{className:l["back-office-per-page"],value:p,options:n.map(a=>({label:`${a}개씩 보기`,value:a})),inputStyle:{size:"small",fontSize:"small"},onChange:a=>{i==null||i(a),s==null||s(a)}})]})};try{r.displayName="BackOfficePagination",r.__docgenInfo={description:"",displayName:"BackOfficePagination",props:{onChangeItemsPerPage:{defaultValue:null,description:"",name:"onChangeItemsPerPage",required:!1,type:{name:"((itemsPerPage?: number) => void)"}},itemPerPageOptions:{defaultValue:{value:"[10, 20, 30, 40, 50]"},description:"",name:"itemPerPageOptions",required:!1,type:{name:"number[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((page: number) => void)"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!1,type:{name:"number"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!1,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const se={title:"organisms/BackOfficePagination",component:r,decorators:[t=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(t,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503}},o={render:t=>{const[i,n]=f.useState(t.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(r,{...t,currentPage:i,onChange:n}),e.jsx(r,{...t,currentPage:void 0,loading:!0})]})}};var m,c,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <BackOfficePagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <BackOfficePagination {...args} currentPage={undefined} loading />
      </>;
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const pe=["Default"];export{o as Default,pe as __namedExportsOrder,se as default};
//# sourceMappingURL=index.stories-46aa62f9.js.map
