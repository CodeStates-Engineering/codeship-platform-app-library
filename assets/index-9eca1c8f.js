import{j as o}from"./jsx-runtime-94f6e698.js";import"./index-987fedf7.js";import"./index-8db94870.js";import"./Compatibility-ff615e1c.js";import{d as j}from"./useValidationMessage-20be1c63.js";import{u as k}from"./useSubscribedState-c6f4ee9b.js";import"./ValidationContext-e5b2e92a.js";import{L as y}from"./index-2489ea6f.js";import{I as m}from"./index-1770fe77.js";const I="_unit_1do9p_461",N={unit:I,"fade-in":"_fade-in_1do9p_1","fade-out":"_fade-out_1do9p_1","shake-horizontal":"_shake-horizontal_1do9p_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1do9p_1","slide-in-fwd-center":"_slide-in-fwd-center_1do9p_1","scale-in-center":"_scale-in-center_1do9p_1","slide-in-right":"_slide-in-right_1do9p_1","slide-in-left":"_slide-in-left_1do9p_1","slide-out-right":"_slide-out-right_1do9p_1","slide-out-left":"_slide-out-left_1do9p_1","scale-in-top":"_scale-in-top_1do9p_1","scale-out-top":"_scale-out-top_1do9p_1","swing-in-top-fwd":"_swing-in-top-fwd_1do9p_1","fade-in-top":"_fade-in-top_1do9p_1","fade-out-top":"_fade-out-top_1do9p_1","fade-in-bottom":"_fade-in-bottom_1do9p_1","fade-out-bottom":"_fade-out-bottom_1do9p_1","scale-out-horizontal":"_scale-out-horizontal_1do9p_1"},f=({value:u,unit:t,onChange:r,type:_="text",placeholder:c,disabled:b,onFocus:g,id:h,onClick:v,ref:x,label:i,validation:w,className:V,onBlur:n,labelStyle:q,inputStyle:e,validationTrigger:T,description:z})=>{const[p,d]=k(u),{validationMessage:R,validateOnChange:l,validateOnBlur:s}=j({validateHandler:w,key:i,value:p,validationTrigger:T});return o.jsx(y.WithInput,{className:V,inputStyle:e,labelStyle:q,label:i,children:o.jsxs(m.Wrap,{validationMessage:R,size:e==null?void 0:e.size,borderRadius:e==null?void 0:e.borderRadius,width:e==null?void 0:e.width,description:z,children:[o.jsx(m,{fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight,onClick:v,onBlur:a=>{s==null||s(),n==null||n(a)},ref:x,name:i,disabled:b,placeholder:c,onFocus:g,value:p,id:h,onChange:a=>{d==null||d(a),l==null||l(a),r==null||r(a)},type:_}),typeof t=="string"?o.jsx("div",{className:N.unit,children:t}):t]})})};try{f.displayName="Textbox",f.__docgenInfo={description:"",displayName:"Textbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"ReactNode"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:'ValidateHandler<(T extends "number" | "large-number" ? number : string)>'}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & UseTypographyClassNameParams)'}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'(Pick<InputWrapProps, "width" | "size" | "borderRadius"> & UseTypographyClassNameParams)'}},validationTrigger:{defaultValue:null,description:"",name:"validationTrigger",required:!1,type:{name:"enum",value:[{value:'"onBlur"'},{value:'"onChange"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | null"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},type:{defaultValue:{value:"'text' as T"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"large-number"'},{value:'"phone-number"'},{value:'"business-number"'},{value:'"password"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'((value: (T extends "number" | "large-number" ? number : string)) => void)'}}}}}catch{}export{f as T};
//# sourceMappingURL=index-9eca1c8f.js.map
