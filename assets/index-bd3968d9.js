import{j as l}from"./jsx-runtime-94f6e698.js";import{r as T}from"./index-8db94870.js";import"./index-673237c3.js";import"./Compatibility-ff615e1c.js";import{d as H}from"./useValidationMessage-20be1c63.js";import{u as I}from"./useSubscribedState-c6f4ee9b.js";import"./ValidationContext-e5b2e92a.js";import{C as L}from"./chevron-down-735b3f0e.js";import{L as M}from"./index-2489ea6f.js";import{F as R}from"./index-e3f83235.js";import{I as c}from"./index-4a400540.js";import{O as z}from"./index-19ea5d71.js";const V=({value:f,options:r,onChange:o,float:b,disabled:v,placeholder:h,id:g,ref:q,onClick:i,label:n,validation:x,className:_,inputStyle:e,labelStyle:y,multiple:O,optionStyle:P,validationTrigger:j})=>{const[s,t]=T.useState(!1),[d,u]=I(f),m=r==null?void 0:r.find(({value:a})=>a===d),{validationMessage:w,validateOnChange:p,validateOnBlur:N}=H({key:n,validateHandler:x,value:d,validationTrigger:j});return l.jsx(M.WithInput,{label:n,inputStyle:e,labelStyle:y,className:_,children:l.jsxs(R,{onBlur:()=>t(!1),focused:s,bodyScroll:!0,children:[l.jsxs(c.Wrap,{validationMessage:w,size:e==null?void 0:e.size,borderRadius:e==null?void 0:e.borderRadius,width:e==null?void 0:e.width,onClick:a=>{t(!s),i==null||i(a)},children:[l.jsx(c,{id:g,name:n,type:"button",ref:q,value:m==null?void 0:m.label,disabled:v,placeholder:h,fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight,onBlur:N}),l.jsx(L,{})]}),l.jsx(z,{opened:s,options:r,multiple:O,value:d,float:b,optionStyle:P,onChange:a=>{u==null||u(a),p==null||p(a),o==null||o(a),t(!1)}})]})})};try{V.displayName="Selectbox",V.__docgenInfo={description:"",displayName:"Selectbox",props:{validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"ValidateHandler<_ValidOptionValue | _ValidOptionValue[]>"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'(Pick<InputWrapProps, "width" | "size" | "borderRadius"> & UseTypographyClassNameParams)'}},validationTrigger:{defaultValue:null,description:"",name:"validationTrigger",required:!1,type:{name:"enum",value:[{value:'"onBlur"'},{value:'"onChange"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ValidOptionValue | _ValidOptionValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: (_Multiple extends true ? _ValidOptionValue[] : _ValidOptionValue)) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: _ValidOptionValue; }[]"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},float:{defaultValue:null,description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},optionStyle:{defaultValue:null,description:"",name:"optionStyle",required:!1,type:{name:'(UseTypographyClassNameParams & Pick<CSSProperties, "width" | "maxHeight">)'}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & UseTypographyClassNameParams)'}}}}}catch{}export{V as S};
//# sourceMappingURL=index-bd3968d9.js.map
