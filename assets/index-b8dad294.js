import{j as l}from"./jsx-runtime-94f6e698.js";import{r as N}from"./index-8db94870.js";import"./index-f376548f.js";import"./Compatibility-ff615e1c.js";import{d as H}from"./useValidate-2a0eec53.js";import{u as I}from"./useSubscribedState-ac5c7d33.js";import"./ValidationContext-e5b2e92a.js";import{C as L}from"./chevron-down-735b3f0e.js";import{L as M}from"./index-5416f22b.js";import{F as R}from"./index-e397bd09.js";import{I as c}from"./index-e5b60b18.js";import{O as T}from"./index-e856c314.js";const V=({value:f,options:r,onChange:s,float:b,disabled:h,placeholder:g,id:v,ref:q,onClick:i,label:o,validation:x,className:_,inputStyle:e,labelStyle:y,multiple:O,optionStyle:P,description:j})=>{const[n,t]=N.useState(!1),[d,u]=I(f),m=r==null?void 0:r.find(({value:a})=>a===d),{validationMessage:w,validateOnChange:p}=H({key:o,validateHandler:x,value:d,validationTrigger:"onChange"});return l.jsx(M.WithInput,{label:o,inputStyle:e,labelStyle:y,className:_,children:l.jsxs(R,{onBlur:()=>t(!1),focused:n,bodyScroll:!0,children:[l.jsxs(c.Wrap,{validationMessage:w,size:e==null?void 0:e.size,borderRadius:e==null?void 0:e.borderRadius,width:e==null?void 0:e.width,onClick:a=>{t(!n),i==null||i(a)},description:j,children:[l.jsx(c,{id:v,name:o,type:"button",ref:q,value:m==null?void 0:m.label,disabled:h,placeholder:g,fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight}),l.jsx(L,{})]}),l.jsx(T,{opened:n,options:r,multiple:O,value:d,float:b,optionStyle:P,onChange:a=>{u==null||u(a),p==null||p(a),s==null||s(a),t(!1)}})]})})};try{V.displayName="Selectbox",V.__docgenInfo={description:"",displayName:"Selectbox",props:{validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"ValidateHandler<_ValidOptionValue | _ValidOptionValue[]>"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'(Pick<InputWrapProps, "width" | "size" | "borderRadius"> & UseTypographyClassNameParams)'}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | null"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ValidOptionValue | _ValidOptionValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: (_Multiple extends true ? _ValidOptionValue[] : _ValidOptionValue)) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: _ValidOptionValue; }[]"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},float:{defaultValue:null,description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},optionStyle:{defaultValue:null,description:"",name:"optionStyle",required:!1,type:{name:'(UseTypographyClassNameParams & Pick<CSSProperties, "width" | "maxHeight">)'}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & UseTypographyClassNameParams)'}}}}}catch{}export{V as S};
//# sourceMappingURL=index-b8dad294.js.map