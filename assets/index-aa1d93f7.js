import{j as e}from"./jsx-runtime-94f6e698.js";import{_ as m}from"./index-d384cd4d.js";import{c}from"./ValidationContext-e5b2e92a.js";import"./index-2780b716.js";import{B as u}from"./index-883e431a.js";const f="_header_lxwmi_472",p="_title_lxwmi_480",x="_date_lxwmi_485",w="_table_lxwmi_491",h="_body_lxwmi_515",t={"info-card":"_info-card_lxwmi_461",header:f,title:p,date:x,table:w,"table-title":"_table-title_lxwmi_497","table-data":"_table-data_lxwmi_498",body:h,"copy-button":"_copy-button_lxwmi_521","fade-in":"_fade-in_lxwmi_1","fade-out":"_fade-out_lxwmi_1","shake-horizontal":"_shake-horizontal_lxwmi_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_lxwmi_1","slide-in-fwd-center":"_slide-in-fwd-center_lxwmi_1","scale-in-center":"_scale-in-center_lxwmi_1","slide-in-right":"_slide-in-right_lxwmi_1","slide-in-left":"_slide-in-left_lxwmi_1","slide-out-right":"_slide-out-right_lxwmi_1","slide-out-left":"_slide-out-left_lxwmi_1","scale-in-top":"_scale-in-top_lxwmi_1","scale-out-top":"_scale-out-top_lxwmi_1","swing-in-top-fwd":"_swing-in-top-fwd_lxwmi_1","fade-in-top":"_fade-in-top_lxwmi_1","fade-out-top":"_fade-out-top_lxwmi_1","fade-in-bottom":"_fade-in-bottom_lxwmi_1","fade-out-bottom":"_fade-out-bottom_lxwmi_1","scale-out-horizontal":"_scale-out-horizontal_lxwmi_1"},_=({icon:i,title:n,date:s,table:a,children:o,className:r,onBodyCopy:d})=>e.jsxs("article",{className:c(`${t["info-card"]} ${r}`),children:[e.jsxs("header",{className:t.header,children:[i,n?e.jsx("b",{className:t.title,children:n}):null,s?e.jsx("small",{className:t.date,children:s}):null]}),a?e.jsx("dl",{className:t.table,children:Object.keys(a).map(l=>e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:t["table-title"],children:l}),e.jsx("dd",{className:t["table-data"],children:a[l]})]}))}):null,e.jsxs("section",{className:t.body,children:[o,d?e.jsx(u,{className:t["copy-button"],size:"small",fontSize:"small",onClick:()=>{const l=m(o);navigator.clipboard.writeText(l),d(l)},children:"복사하기"}):null]})]});try{_.displayName="InfoCard",_.__docgenInfo={description:"",displayName:"InfoCard",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}},table:{defaultValue:null,description:"",name:"table",required:!1,type:{name:"{ [name: string]: string; }"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onBodyCopy:{defaultValue:null,description:"",name:"onBodyCopy",required:!1,type:{name:"((value?: string) => void)"}}}}}catch{}export{_ as I};
//# sourceMappingURL=index-aa1d93f7.js.map
