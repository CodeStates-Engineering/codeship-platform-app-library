import{j as l}from"./jsx-runtime-4ca860c5.js";import{r as N,R as x}from"./index-61bf1805.js";import"./index-cd606f41.js";import"./Compatibility-d1e3055b.js";import{a as E,u as B,b as C}from"./useValidate-151d9b0b.js";import{u as H}from"./useSubscribedState-dbc08c5d.js";import{c as U}from"./cleanClassName-cdc1ff81.js";import{P as u}from"./index-8d47fad6.js";import{X as F}from"./x-06d309c3.js";import{L as y}from"./index-2f6fdfd7.js";import{I as D}from"./index-f746e559.js";import{B as q}from"./index-ff9907f0.js";function b(){return b=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(a[i]=r[i])}return a},b.apply(this,arguments)}function X(a,t){if(a==null)return{};var r=A(a,t),i,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(o=0;o<s.length;o++)i=s[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(a,i)&&(r[i]=a[i])}return r}function A(a,t){if(a==null)return{};var r={},i=Object.keys(a),o,s;for(s=0;s<i.length;s++)o=i[s],!(t.indexOf(o)>=0)&&(r[o]=a[o]);return r}var k=N.forwardRef(function(a,t){var r=a.color,i=r===void 0?"currentColor":r,o=a.size,s=o===void 0?24:o,_=X(a,["color","size"]);return x.createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},_),x.createElement("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}))});k.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};k.displayName="Paperclip";const G=k,J="_actived_1lkjp_480",K="_disabled_1lkjp_483",Q="_description_1lkjp_488",n={"upload-button-wrap":"_upload-button-wrap_1lkjp_461","upload-button":"_upload-button_1lkjp_461","file-input":"_file-input_1lkjp_469","download-link":"_download-link_1lkjp_473",actived:J,disabled:K,description:Q,"validation-message":"_validation-message_1lkjp_494","shake-horizontal":"_shake-horizontal_1lkjp_1","fade-in":"_fade-in_1lkjp_1","fade-out":"_fade-out_1lkjp_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1lkjp_1","slide-in-fwd-center":"_slide-in-fwd-center_1lkjp_1","scale-in-center":"_scale-in-center_1lkjp_1","slide-in-right":"_slide-in-right_1lkjp_1","slide-in-left":"_slide-in-left_1lkjp_1","slide-out-right":"_slide-out-right_1lkjp_1","slide-out-left":"_slide-out-left_1lkjp_1","scale-in-top":"_scale-in-top_1lkjp_1","scale-out-top":"_scale-out-top_1lkjp_1","swing-in-top-fwd":"_swing-in-top-fwd_1lkjp_1","fade-in-top":"_fade-in-top_1lkjp_1","fade-out-top":"_fade-out-top_1lkjp_1","fade-in-bottom":"_fade-in-bottom_1lkjp_1","fade-out-bottom":"_fade-out-bottom_1lkjp_1","scale-out-horizontal":"_scale-out-horizontal_1lkjp_1"},Y=a=>{switch(a){case"small":return 16;case"medium":case"large":return 18;default:return}},V=({children:a,value:t,onChange:r,className:i,download:o=!0,disabled:s=!1,accept:_,validation:P,label:v,id:O,labelStyle:R,inputStyle:e,description:g,readOnly:w,requireMessage:W})=>{const h=N.useRef(null),[c,f]=H(t),{typographyClassName:$}=E({fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight}),L=!s&&!w,{validationMessage:p,validateOnChange:j,isRequried:I}=B({key:v,value:c,validateHandler:P,validationTrigger:"onChange",requireMessage:W}),{messageRef:T,wrapHeightStyle:M}=C(!!p||!!g);return l.jsxs(y.WithInput,{className:i,label:v,inputStyle:e,labelStyle:R,required:I,children:[l.jsx("input",{type:"file",id:O,className:n["file-input"],ref:h,accept:_,disabled:!!s,onChange:({target:{files:d}})=>{const m=d==null?void 0:d[0];if(m){const z={name:m.name,url:URL.createObjectURL(m)};r==null||r(m),j==null||j(z),f==null||f(z)}}}),c?l.jsx(l.Fragment,{children:l.jsxs(D.Wrap,{validationMessage:p,borderRadius:e==null?void 0:e.borderRadius,size:e==null?void 0:e.size,width:e==null?void 0:e.width,description:g,readOnly:w,children:[l.jsx(G,{size:Y(e==null?void 0:e.size)}),l.jsx("a",{href:s||c==null?void 0:c.url,className:U(`${n["download-link"]} ${$} ${s?n.disabled:n.actived}
                `),download:o,children:c==null?void 0:c.name}),L&&l.jsx(q,{icon:l.jsx(F,{size:"1em"}),size:"small3x",shape:"pill",theme:"bluish-gray700/0",onClick:()=>{f==null||f(void 0),r==null||r(void 0);const{current:d}=h;d&&(d.value="")}})]})}):l.jsxs("div",{className:n["upload-button-wrap"],style:{width:e==null?void 0:e.width},children:[l.jsx(q,{size:e==null?void 0:e.size,className:n["upload-button"],fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight,disabled:!!s,theme:"bluish-gray400/bluish-gray10/bluish-gray200",onClick:()=>{var d;return(d=h.current)==null?void 0:d.click()},width:e==null?void 0:e.width,children:a}),l.jsx("div",{className:`${n["description-wrap"]} ${p&&n["validation-message-wrap"]}`,style:M,children:l.jsx("p",{ref:T,className:`${n.description} ${p&&n["validation-message"]}`,children:p||g})})]})]})};try{V.displayName="File",V.__docgenInfo={description:"",displayName:"File",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"SavedFile"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((file?: File) => void)"}},download:{defaultValue:{value:"true"},description:"",name:"download",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"ValidateHandler<SavedFile>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'({ size?: "small" | "medium" | "large"; } & Pick<InputWrapProps, "width" | "borderRadius"> & UseTypographyClassNameParams)'}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | null"}},requireMessage:{defaultValue:null,description:"",name:"requireMessage",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & UseTypographyClassNameParams)'}}}}}catch{}export{V as F};
//# sourceMappingURL=index-4725194c.js.map
