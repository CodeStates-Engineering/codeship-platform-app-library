import{j as a}from"./jsx-runtime-4ca860c5.js";import"./index-33462664.js";import"./index-61bf1805.js";import"./Compatibility-d1e3055b.js";import"./useValidate-f9eb9d2a.js";import{u as p}from"./useSubscribedState-0dbf1252.js";import{L as z}from"./index-80d1ff56.js";const w="_disabled_1y575_487",y="_off_1y575_490",g="_on_1y575_493",i={"switch-container":"_switch-container_1y575_461","container-size-none":"_container-size-none_1y575_465","container-size-small":"_container-size-small_1y575_468","container-size-medium":"_container-size-medium_1y575_473","container-size-large":"_container-size-large_1y575_476","switch-content":"_switch-content_1y575_480",disabled:w,off:y,on:g,"size-small":"_size-small_1y575_496","size-medium":"_size-medium_1y575_500","size-large":"_size-large_1y575_504","switch-ball":"_switch-ball_1y575_509","switch-input":"_switch-input_1y575_539","fade-in":"_fade-in_1y575_1","fade-out":"_fade-out_1y575_1","shake-horizontal":"_shake-horizontal_1y575_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1y575_1","slide-in-fwd-center":"_slide-in-fwd-center_1y575_1","scale-in-center":"_scale-in-center_1y575_1","slide-in-right":"_slide-in-right_1y575_1","slide-in-left":"_slide-in-left_1y575_1","slide-out-right":"_slide-out-right_1y575_1","slide-out-left":"_slide-out-left_1y575_1","scale-in-top":"_scale-in-top_1y575_1","scale-out-top":"_scale-out-top_1y575_1","swing-in-top-fwd":"_swing-in-top-fwd_1y575_1","fade-in-top":"_fade-in-top_1y575_1","fade-out-top":"_fade-out-top_1y575_1","fade-in-bottom":"_fade-in-bottom_1y575_1","fade-out-bottom":"_fade-out-bottom_1y575_1","scale-out-horizontal":"_scale-out-horizontal_1y575_1"},m=({value:t=!1,onChange:n,disabled:f,id:u,label:r,className:h,labelStyle:s,inputStyle:e})=>{const[_,o]=p(t),d=i[`size-${(e==null?void 0:e.size)??"medium"}`],l=_?i.on:i.off;return a.jsx(z.WithInput,{inputStyle:{size:e==null?void 0:e.containerSize},label:r,labelStyle:s,className:h,children:a.jsx("div",{style:{width:e==null?void 0:e.width},className:`${i["switch-container"]} ${i[`container-size-${(e==null?void 0:e.containerSize)??(s==null?void 0:s.direction)==="row"?(e==null?void 0:e.containerSize)??"large":"none"}`]}`,children:a.jsxs("div",{className:`${i["switch-content"]} ${d} ${l}`,children:[a.jsx("div",{className:`${i["switch-ball"]} ${d} ${l}`}),a.jsx("input",{id:u,type:"checkbox",className:i["switch-input"],name:r,checked:_,disabled:f,onChange:({target:{checked:c}})=>{o==null||o(c),n==null||n(c)}})]})})})};try{m.displayName="Switch",m.__docgenInfo={description:"",displayName:"Switch",props:{value:{defaultValue:{value:"false"},description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'{ size?: "small" | "medium" | "large"; width?: string; containerSize?: "small" | "medium" | "large" | "none" | undefined; } | undefined'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & UseTypographyClassNameParams)'}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}}}}}catch{}export{m as S};
//# sourceMappingURL=index-7725a481.js.map