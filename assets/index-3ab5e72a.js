import{j as i}from"./jsx-runtime-94f6e698.js";import{r as L}from"./index-8db94870.js";import{u as F}from"./useSubscribedState-9b53482c.js";import"./index-e3b5ba34.js";import{u as P}from"./useValidation-c7011735.js";import{c as $}from"./index-64131664.js";import{u as T}from"./useTypography-0e7bc425.js";import"./index-65913334.js";import{B as g}from"./index-1f9ff373.js";import{X as B}from"./x-59731629.js";import{I as z}from"./index-fff92b81.js";import{L as w}from"./index-e5314f3d.js";const C="_actived_1t9k2_484",E="_disabled_1t9k2_487",t={"upload-button":"_upload-button_1t9k2_461","file-input":"_file-input_1t9k2_465","download-link-interaction":"_download-link-interaction_1t9k2_469","download-link":"_download-link_1t9k2_469",actived:C,disabled:E,"font-size-large4x":"_font-size-large4x_1t9k2_491","font-size-large3x":"_font-size-large3x_1t9k2_494","font-size-large2x":"_font-size-large2x_1t9k2_497","font-size-large":"_font-size-large_1t9k2_491","font-size-medium":"_font-size-medium_1t9k2_503","font-size-normal":"_font-size-normal_1t9k2_506","font-size-small":"_font-size-small_1t9k2_509","font-size-small2x":"_font-size-small2x_1t9k2_512","font-size-small3x":"_font-size-small3x_1t9k2_515","font-weight-700":"_font-weight-700_1t9k2_518","font-weight-500":"_font-weight-500_1t9k2_521","font-weight-400":"_font-weight-400_1t9k2_524","fade-in":"_fade-in_1t9k2_1","fade-out":"_fade-out_1t9k2_1","shake-horizontal":"_shake-horizontal_1t9k2_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1t9k2_1","slide-in-fwd-center":"_slide-in-fwd-center_1t9k2_1","scale-in-center":"_scale-in-center_1t9k2_1","slide-in-right":"_slide-in-right_1t9k2_1","slide-in-left":"_slide-in-left_1t9k2_1","slide-out-right":"_slide-out-right_1t9k2_1","slide-out-left":"_slide-out-left_1t9k2_1","scale-in-top":"_scale-in-top_1t9k2_1","scale-out-top":"_scale-out-top_1t9k2_1","swing-in-top-fwd":"_swing-in-top-fwd_1t9k2_1","fade-in-top":"_fade-in-top_1t9k2_1","fade-out-top":"_fade-out-top_1t9k2_1","fade-in-bottom":"_fade-in-bottom_1t9k2_1","fade-out-bottom":"_fade-out-bottom_1t9k2_1","scale-out-horizontal":"_scale-out-horizontal_1t9k2_1"},x=({children:m,value:u,onChange:n,className:v,download:b=!0,disabled:d=!1,accept:j,validation:V,validationSpace:q,label:_,id:N,labelStyle:o,inputStyle:e})=>{const f=L.useRef(null),[s,r]=F(u),{fontSizeClassName:R,fontWeightClassName:W}=T(e==null?void 0:e.fontSize,e==null?void 0:e.fontWeight),k=d!==!0,{validationMessage:I,checkValidation:c}=P(u,V,_||N),h=i.jsx("input",{type:"file",className:t["file-input"],ref:f,accept:j,disabled:!!d,onChange:({target:{files:a}})=>{const l=a==null?void 0:a[0];if(l){const p={name:l.name,url:URL.createObjectURL(l)};n==null||n(l),c==null||c(p),r==null||r(p)}}});return i.jsx(z.Container,{validationMessage:I,validationSpace:q,className:v,children:i.jsxs(w.Container,{direction:o==null?void 0:o.direction,children:[_?i.jsx(w,{htmlFor:_,fontSize:o==null?void 0:o.fontSize,fontWeight:o==null?void 0:o.fontWeight,children:_}):null,s?i.jsxs(z.Wrap,{borderRadius:e==null?void 0:e.borderRadius,className:t["download-link-interaction"],size:e==null?void 0:e.size,width:e==null?void 0:e.width,children:[i.jsx("a",{href:k?s==null?void 0:s.url:void 0,className:$(`${t["download-link"]} ${t[R]} ${t[W]} ${k?t.actived:t.disabled}`),download:b,children:s==null?void 0:s.name}),d?h:i.jsx(g,{icon:i.jsx(B,{size:"1em"}),size:"small",shape:"round",theme:"bluish-gray700/0",onClick:()=>{r==null||r(void 0),n==null||n(void 0);const{current:a}=f;a&&(a.value="")}})]}):i.jsxs(g,{size:e==null?void 0:e.size,className:t["upload-button"],fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight,disabled:!!d,theme:"bluish-gray400/bluish-gray10/bluish-gray200",onClick:()=>{var a;return(a=f.current)==null?void 0:a.click()},width:e==null?void 0:e.width,children:[m,d?null:h]})]})})};try{x.displayName="File",x.__docgenInfo={description:"",displayName:"File",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"SavedFile"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((file?: File) => void)"}},download:{defaultValue:{value:"true"},description:"",name:"download",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation<SavedFile>"}},validationSpace:{defaultValue:null,description:"",name:"validationSpace",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'({ size?: "small" | "medium" | "large"; } & Pick<InputWrapProps, "width" | "borderRadius"> & Typography)'}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & Typography)'}}}}}catch{}export{x as F};
//# sourceMappingURL=index-3ab5e72a.js.map
