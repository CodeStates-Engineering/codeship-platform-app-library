import{j as a}from"./jsx-runtime-94f6e698.js";import{r as R}from"./index-8db94870.js";import{u as S}from"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import{u as F}from"./useValidation-c7011735.js";import{c as y}from"./index-64131664.js";import"./index-d3d8bcd6.js";import{I as g}from"./index-61379bb2.js";import{B as z}from"./index-b17e5302.js";import{X as L}from"./x-59731629.js";import{L as $}from"./index-fc2f7366.js";const B="_actived_g6y2z_440",E="_disabled_g6y2z_443",i={"file-container":"_file-container_g6y2z_413","upload-button":"_upload-button_g6y2z_419","file-input":"_file-input_g6y2z_423","download-link-interaction":"_download-link-interaction_g6y2z_427","download-link":"_download-link_g6y2z_427",actived:B,disabled:E,"fade-in":"_fade-in_g6y2z_1","fade-out":"_fade-out_g6y2z_1","shake-horizontal":"_shake-horizontal_g6y2z_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_g6y2z_1","slide-in-fwd-center":"_slide-in-fwd-center_g6y2z_1","scale-in-center":"_scale-in-center_g6y2z_1","slide-in-right":"_slide-in-right_g6y2z_1","slide-out-right":"_slide-out-right_g6y2z_1","scale-in-top":"_scale-in-top_g6y2z_1","scale-out-top":"_scale-out-top_g6y2z_1","swing-in-top-fwd":"_swing-in-top-fwd_g6y2z_1","fade-in-top":"_fade-in-top_g6y2z_1","fade-out-top":"_fade-out-top_g6y2z_1","fade-in-bottom":"_fade-in-bottom_g6y2z_1","fade-out-bottom":"_fade-out-bottom_g6y2z_1","scale-out-horizontal":"_scale-out-horizontal_g6y2z_1"},v=({children:m,size:h,value:l,onChange:n,fontWeight:b,fontSize:x,className:w,download:V=!0,disabled:r=!1,accept:q,validation:j,validationSpace:k,label:s,id:N})=>{const u=R.useRef(null),[t,o]=S(l,!1,[l==null?void 0:l.name,l==null?void 0:l.url]),_=r!==!0,{validationMessage:I,checkValidation:c}=F(l,j,s||N),p=a.jsx("input",{type:"file",className:i["file-input"],ref:u,accept:q,disabled:!!r,onChange:({target:{files:e}})=>{const d=e==null?void 0:e[0];if(d){const f={name:d.name,url:URL.createObjectURL(d)};n==null||n(d),c==null||c(f),o==null||o(f)}}});return a.jsxs("div",{className:y(`${i["download-link-container"]} ${w}`),children:[s?a.jsx($,{htmlFor:s,children:s}):null,t?a.jsx(g,{validationMessage:I,validationSpace:k,children:a.jsxs(g.Interaction,{className:i["download-link-interaction"],children:[a.jsx("a",{href:_?t==null?void 0:t.url:void 0,className:y(`${i["download-link"]} ${_?i.actived:i.disabled}`),download:V,children:t==null?void 0:t.name}),r?p:a.jsx(z,{icon:a.jsx(L,{}),size:"small",shape:"round",theme:"bluish-gray700/0",onClick:()=>{o==null||o(void 0),n==null||n(void 0);const{current:e}=u;e&&(e.value="")}})]})}):a.jsxs(z,{size:h,className:i["upload-button"],fontSize:x,fontWeight:b,disabled:!!r,theme:"bluish-gray400/bluish-gray10/bluish-gray200",onClick:()=>{var e;(e=u.current)==null||e.click()},children:[m,r?null:p]})]})};try{v.displayName="File",v.__docgenInfo={description:"",displayName:"File",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"SavedFile"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((file?: File) => void)"}},download:{defaultValue:{value:"true"},description:"",name:"download",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation<SavedFile>"}},validationSpace:{defaultValue:null,description:"",name:"validationSpace",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small2x"'}]}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"500"},{value:"400"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{v as F};
//# sourceMappingURL=index-54b4ce7a.js.map
