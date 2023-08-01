import{j as o}from"./jsx-runtime-94f6e698.js";import"./index-230dbeff.js";import"./index-8db94870.js";import"./Compatibility-ff615e1c.js";import{u as k}from"./useValidate-fe71e470.js";import{u as I}from"./useSubscribedState-8bf166ac.js";import"./ValidationContext-e5b2e92a.js";import{L as N}from"./index-284d58f2.js";import{I as p}from"./index-23a2e887.js";const P="_unit_1do9p_461",C={unit:P,"fade-in":"_fade-in_1do9p_1","fade-out":"_fade-out_1do9p_1","shake-horizontal":"_shake-horizontal_1do9p_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1do9p_1","slide-in-fwd-center":"_slide-in-fwd-center_1do9p_1","scale-in-center":"_scale-in-center_1do9p_1","slide-in-right":"_slide-in-right_1do9p_1","slide-in-left":"_slide-in-left_1do9p_1","slide-out-right":"_slide-out-right_1do9p_1","slide-out-left":"_slide-out-left_1do9p_1","scale-in-top":"_scale-in-top_1do9p_1","scale-out-top":"_scale-out-top_1do9p_1","swing-in-top-fwd":"_swing-in-top-fwd_1do9p_1","fade-in-top":"_fade-in-top_1do9p_1","fade-out-top":"_fade-out-top_1do9p_1","fade-in-bottom":"_fade-in-bottom_1do9p_1","fade-out-bottom":"_fade-out-bottom_1do9p_1","scale-out-horizontal":"_scale-out-horizontal_1do9p_1"},_=({value:u,unit:r,onChange:t,type:c="text",placeholder:b,disabled:g,onFocus:h,id:v,onClick:x,ref:w,label:i,validation:V,className:q,onBlur:n,labelStyle:T,inputStyle:e,validationTrigger:z,description:R,readOnly:f})=>{const[m,d]=I(u),{validationMessage:j,validateOnChange:s,validateOnBlur:l}=k({validateHandler:V,key:i,value:m,validationTrigger:z});return o.jsx(N.WithInput,{className:q,inputStyle:e,labelStyle:T,label:i,children:o.jsxs(p.Wrap,{validationMessage:j,size:e==null?void 0:e.size,borderRadius:e==null?void 0:e.borderRadius,width:e==null?void 0:e.width,description:R,fontColor:e==null?void 0:e.fontColor,readOnly:f,children:[o.jsx(p,{fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight,onClick:x,onBlur:a=>{l==null||l(),n==null||n(a)},ref:w,name:i,disabled:g,placeholder:b,onFocus:h,value:m,id:v,onChange:a=>{d==null||d(a),s==null||s(a),t==null||t(a)},type:c,readOnly:f}),typeof r=="string"?o.jsx("div",{className:C.unit,children:r}):r]})})};try{_.displayName="Textbox",_.__docgenInfo={description:"",displayName:"Textbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"ReactNode"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:'ValidateHandler<(T extends "number" | "large-number" ? number : string)>'}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & UseTypographyClassNameParams)'}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'(Pick<InputWrapProps, "width" | "size" | "borderRadius"> & UseTypographyClassNameParams & { fontColor?: string; })'}},validationTrigger:{defaultValue:null,description:"",name:"validationTrigger",required:!1,type:{name:"enum",value:[{value:'"onChange"'},{value:'"onBlur"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | null"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"'text' as T"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"large-number"'},{value:'"phone-number"'},{value:'"business-number"'},{value:'"password"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'((value: (T extends "number" | "large-number" ? number : string)) => void)'}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}}}}}catch{}export{_ as T};
//# sourceMappingURL=index-0657fe9f.js.map