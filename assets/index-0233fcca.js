import{j as o}from"./jsx-runtime-94f6e698.js";import{r as V}from"./index-8db94870.js";import"./Compatibility-ff615e1c.js";import{a as $,u as q,b as I,c as N}from"./useValidationMessage-59db0c1f.js";import{c as p}from"./ValidationContext-e5b2e92a.js";const j="_error_14k6z_509",t={"input-wrap":"_input-wrap_14k6z_461","input-interaction":"_input-interaction_14k6z_465","border-radius-4":"_border-radius-4_14k6z_478","border-radius-8":"_border-radius-8_14k6z_481","size-none":"_size-none_14k6z_484","size-small":"_size-small_14k6z_488","size-medium":"_size-medium_14k6z_492","size-large":"_size-large_14k6z_496",error:j,"validation-message-wrap":"_validation-message-wrap_14k6z_530","validation-message":"_validation-message_14k6z_530","shake-horizontal":"_shake-horizontal_14k6z_1","fade-in":"_fade-in_14k6z_1","fade-out":"_fade-out_14k6z_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_14k6z_1","slide-in-fwd-center":"_slide-in-fwd-center_14k6z_1","scale-in-center":"_scale-in-center_14k6z_1","slide-in-right":"_slide-in-right_14k6z_1","slide-in-left":"_slide-in-left_14k6z_1","slide-out-right":"_slide-out-right_14k6z_1","slide-out-left":"_slide-out-left_14k6z_1","scale-in-top":"_scale-in-top_14k6z_1","scale-out-top":"_scale-out-top_14k6z_1","swing-in-top-fwd":"_swing-in-top-fwd_14k6z_1","fade-in-top":"_fade-in-top_14k6z_1","fade-out-top":"_fade-out-top_14k6z_1","fade-in-bottom":"_fade-in-bottom_14k6z_1","fade-out-bottom":"_fade-out-bottom_14k6z_1","scale-out-horizontal":"_scale-out-horizontal_14k6z_1"},c=({children:e,onClick:r,size:a="large",className:_,borderRadius:n="8",width:d,validationMessage:l})=>{const{messageRef:i,wrapHeightStyle:f}=$(!!l);return o.jsxs("div",{style:{width:d},className:p(`${t["input-wrap"]} ${_}`),children:[o.jsx("div",{className:p(`${t["input-interaction"]} ${t[`border-radius-${n}`]} ${l&&t.error} ${a!=="none"&&t[`size-${a}`]}`),onClick:r,children:e}),o.jsx("div",{className:t["validation-message-wrap"],style:f,children:o.jsx("p",{ref:i,className:t["validation-message"],children:l})})]})};try{c.displayName="InputWrap",c.__docgenInfo={description:"",displayName:"InputWrap",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'}]}},borderRadius:{defaultValue:{value:"8"},description:"",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"4"'},{value:'"8"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},validationMessage:{defaultValue:null,description:"",name:"validationMessage",required:!1,type:{name:"string | null"}}}}}catch{}const C="_input_1nbwf_461",H="_button_1nbwf_517",R="_empty_1nbwf_521",u={input:C,"font-size-large4x":"_font-size-large4x_1nbwf_473","font-size-large3x":"_font-size-large3x_1nbwf_476","font-size-large2x":"_font-size-large2x_1nbwf_479","font-size-large":"_font-size-large_1nbwf_473","font-size-medium":"_font-size-medium_1nbwf_485","font-size-normal":"_font-size-normal_1nbwf_488","font-size-small":"_font-size-small_1nbwf_491","font-size-small2x":"_font-size-small2x_1nbwf_494","font-size-small3x":"_font-size-small3x_1nbwf_497","font-weight-700":"_font-weight-700_1nbwf_500","font-weight-500":"_font-weight-500_1nbwf_503","font-weight-400":"_font-weight-400_1nbwf_506","read-only":"_read-only_1nbwf_512",button:H,empty:R,"fade-in":"_fade-in_1nbwf_1","fade-out":"_fade-out_1nbwf_1","shake-horizontal":"_shake-horizontal_1nbwf_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1nbwf_1","slide-in-fwd-center":"_slide-in-fwd-center_1nbwf_1","scale-in-center":"_scale-in-center_1nbwf_1","slide-in-right":"_slide-in-right_1nbwf_1","slide-in-left":"_slide-in-left_1nbwf_1","slide-out-right":"_slide-out-right_1nbwf_1","slide-out-left":"_slide-out-left_1nbwf_1","scale-in-top":"_scale-in-top_1nbwf_1","scale-out-top":"_scale-out-top_1nbwf_1","swing-in-top-fwd":"_swing-in-top-fwd_1nbwf_1","fade-in-top":"_fade-in-top_1nbwf_1","fade-out-top":"_fade-out-top_1nbwf_1","fade-in-bottom":"_fade-in-bottom_1nbwf_1","fade-out-bottom":"_fade-out-bottom_1nbwf_1","scale-out-horizontal":"_scale-out-horizontal_1nbwf_1"},W=V.forwardRef(({type:e="text",placeholder:r="",disabled:a=!1,value:_,onChange:n,onClick:d,id:l,onFocus:i,name:f,className:z,onBlur:m,fontSize:g,fontWeight:v},h)=>{const{typographyClassName:y}=q({fontSize:g,fontWeight:v}),{formatedValue:k,setIsDisplayFormatedValue:b}=I({type:e,value:_,placeholder:r}),x=N(e);return o.jsx("input",{id:l,name:f,ref:h,onFocus:s=>{b(!1),i==null||i(s)},onBlur:s=>{b(!0),m==null||m(s)},type:e,placeholder:r,onClick:d,value:k,className:p(`${u.input} ${a==="read-only"&&u["read-only"]} ${e==="button"&&u.button} ${_||u.empty} ${y} ${z}`),disabled:!!a,onChange:({target:{value:s}})=>n==null?void 0:n(x(s))})}),w=Object.assign(W,{Wrap:c});try{w.displayName="Input",w.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:{value:"'text' as const"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"button"'},{value:'"text"'},{value:'"large-number"'},{value:'"phone-number"'},{value:'"business-number"'},{value:'"password"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'((value: (T extends "number" | "large-number" ? number : string)) => void)'}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small2x"'}]}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"500"},{value:"400"}]}}}}}catch{}export{w as I};
//# sourceMappingURL=index-0233fcca.js.map
