import{j as e}from"./jsx-runtime-94f6e698.js";import{r as E}from"./index-8db94870.js";import{u as L}from"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import{u as $}from"./useValidation-c7011735.js";import{c as v}from"./index-64131664.js";import{O as z}from"./index-adb8cc3f.js";import{C as B}from"./chevron-down-735b3f0e.js";import{F}from"./index-f1d4be6e.js";import{L as M}from"./index-bc98936d.js";import{I as x}from"./index-8f534833.js";import{I as P}from"./index-6c3eb542.js";const R="_selectbox_16gfr_1",o={selectbox:R},b=({value:u,options:n,onChange:i,float:V,onlyUpdatedByParent:_,disabled:q,placeholder:j,size:S,id:f,ref:N,onClick:d,label:l,validation:I,validationSpace:O,className:g})=>{const[r,m]=E.useState(!1),[h,p]=L(u,_),t=n==null?void 0:n.find(({value:a})=>a===h),{validationMessage:w,checkValidation:c}=$(u,I,l||f);return e.jsxs(F,{onClick:()=>m(!1),focused:r,className:v(`${o.selectbox} ${g}`),bodyScroll:!0,children:[l?e.jsx(M,{htmlFor:l,children:l}):null,e.jsxs(x,{validationMessage:w,validationSpace:O,children:[e.jsxs(x.Interaction,{size:S,onClick:a=>{m(!r),d==null||d(a)},children:[e.jsx(P,{id:f,name:l,type:"button",ref:N,value:t==null?void 0:t.label,disabled:q,placeholder:j}),e.jsx(B,{className:v(`${o.arrow} ${r&&o["opened-arrow"]}`)})]}),e.jsx(z,{opened:r,options:n,value:t,float:V,className:o["select-box-default-width"],onSelect:a=>{const s=a===t?void 0:a,y=s==null?void 0:s.value;p==null||p(y),c==null||c(y),i==null||i(s),m(!1)}})]})]})};try{b.displayName="Selectbox",b.__docgenInfo={description:"",displayName:"Selectbox",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},validationSpace:{defaultValue:null,description:"",name:"validationSpace",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"_Option[]"}},float:{defaultValue:null,description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'}]}},onlyUpdatedByParent:{defaultValue:null,description:"",name:"onlyUpdatedByParent",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((option?: _Option) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ValidOptionValue"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:'Validation<Exclude<_Option, undefined>["value"]>'}}}}}catch{}export{b as S};
//# sourceMappingURL=index-9e0a9982.js.map
