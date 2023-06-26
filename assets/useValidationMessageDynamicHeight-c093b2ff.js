import{c}from"./createValidationStore-9cc55e44.js";import{r as n}from"./index-8db94870.js";const i={"font-size-large4x":"_font-size-large4x_1tfxb_461","font-size-large3x":"_font-size-large3x_1tfxb_465","font-size-large2x":"_font-size-large2x_1tfxb_469","font-size-large":"_font-size-large_1tfxb_461","font-size-medium":"_font-size-medium_1tfxb_477","font-size-normal":"_font-size-normal_1tfxb_481","font-size-small":"_font-size-small_1tfxb_485","font-size-small2x":"_font-size-small2x_1tfxb_489","font-size-small3x":"_font-size-small3x_1tfxb_493","font-weight-700":"_font-weight-700_1tfxb_497","font-weight-500":"_font-weight-500_1tfxb_501","font-weight-400":"_font-weight-400_1tfxb_505","fade-in":"_fade-in_1tfxb_1","fade-out":"_fade-out_1tfxb_1","shake-horizontal":"_shake-horizontal_1tfxb_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1tfxb_1","slide-in-fwd-center":"_slide-in-fwd-center_1tfxb_1","scale-in-center":"_scale-in-center_1tfxb_1","slide-in-right":"_slide-in-right_1tfxb_1","slide-in-left":"_slide-in-left_1tfxb_1","slide-out-right":"_slide-out-right_1tfxb_1","slide-out-left":"_slide-out-left_1tfxb_1","scale-in-top":"_scale-in-top_1tfxb_1","scale-out-top":"_scale-out-top_1tfxb_1","swing-in-top-fwd":"_swing-in-top-fwd_1tfxb_1","fade-in-top":"_fade-in-top_1tfxb_1","fade-out-top":"_fade-out-top_1tfxb_1","fade-in-bottom":"_fade-in-bottom_1tfxb_1","fade-out-bottom":"_fade-out-bottom_1tfxb_1","scale-out-horizontal":"_scale-out-horizontal_1tfxb_1"},u=({fontSize:t,fontWeight:e})=>({typographyClassName:c(`${i[`font-size-${t}`]} ${i[`font-weight-${e}`]}`)});try{u.displayName="useTypographyClassName",u.__docgenInfo={description:"",displayName:"useTypographyClassName",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small2x"'}]}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"500"},{value:"400"}]}}}}}catch{}const o=t=>t.replace(/[^0-9]/g,""),_=t=>n.useMemo(()=>{switch(t){case"number":case"large-number":return e=>e?Number(o(e)):void 0;case"phone-number":return e=>{let a=o(e);return a.length>11&&(a=a.slice(0,11)),e?a:void 0};case"business-number":return e=>{let a=o(e);return a.length>10&&(a=a.slice(0,10)),e?a:void 0};default:return e=>e||void 0}},[t]);try{_.displayName="useConvertChangeHandlerParam",_.__docgenInfo={description:"",displayName:"useConvertChangeHandlerParam",props:{}}}catch{}const f=({type:t,value:e,placeholder:a})=>{const[s,l]=n.useState(!0);return{formatedValue:(()=>{if(!e){if(t==="button")return a;if(e!==0)return""}const r=String(e);if(!s)return r;switch(t){case"number":return r;case"large-number":return Number(r).toLocaleString();case"phone-number":return r.length===10?r.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3"):r.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3");case"business-number":return r.replace(/(\d{3})(\d{2})(\d{5})/,"$1-$2-$3");default:return r}})(),setIsDisplayFormatedValue:l}};try{f.displayName="useFormatedValue",f.__docgenInfo={description:"",displayName:"useFormatedValue",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"button"'},{value:'"text"'},{value:'"large-number"'},{value:'"phone-number"'},{value:'"business-number"'},{value:'"password"'}]}}}}}catch{}const d=t=>{var r;const e=n.useRef(null),a=(r=e.current)==null?void 0:r.offsetHeight,[s,l]=n.useState();return n.useEffect(()=>{l(t?{height:a}:void 0)},[a,t]),{messageRef:e,wrapHeightStyle:s}};try{d.displayName="useValidationMessageDynamicHeight",d.__docgenInfo={description:"",displayName:"useValidationMessageDynamicHeight",props:{}}}catch{}export{u as a,f as b,_ as c,d as u};
//# sourceMappingURL=useValidationMessageDynamicHeight-c093b2ff.js.map
