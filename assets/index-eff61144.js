import{j as e}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{c as s}from"./index-64131664.js";import"./index-2406ede6.js";import"./index-eb31b8ae.js";import{X as p}from"./x-59731629.js";import{T as f}from"./index-a0e73f40.js";import{F as v}from"./index-5f720287.js";import{B as c}from"./index-18098115.js";const h="_closing_vt1pa_479",t={"modal-container":"_modal-container_vt1pa_461","fade-in":"_fade-in_vt1pa_1",closing:h,"fade-out":"_fade-out_vt1pa_1","modal-body":"_modal-body_vt1pa_484","modal-footer":"_modal-footer_vt1pa_490","with-border":"_with-border_vt1pa_493","tab-menu":"_tab-menu_vt1pa_497","modal-header":"_modal-header_vt1pa_501","shake-horizontal":"_shake-horizontal_vt1pa_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_vt1pa_1","slide-in-fwd-center":"_slide-in-fwd-center_vt1pa_1","scale-in-center":"_scale-in-center_vt1pa_1","slide-in-right":"_slide-in-right_vt1pa_1","slide-in-left":"_slide-in-left_vt1pa_1","slide-out-right":"_slide-out-right_vt1pa_1","slide-out-left":"_slide-out-left_vt1pa_1","scale-in-top":"_scale-in-top_vt1pa_1","scale-out-top":"_scale-out-top_vt1pa_1","swing-in-top-fwd":"_swing-in-top-fwd_vt1pa_1","fade-in-top":"_fade-in-top_vt1pa_1","fade-out-top":"_fade-out-top_vt1pa_1","fade-in-bottom":"_fade-in-bottom_vt1pa_1","fade-out-bottom":"_fade-out-bottom_vt1pa_1","scale-out-horizontal":"_scale-out-horizontal_vt1pa_1"},d=i.createContext(void 0),b=({children:a,className:o,opened:l,onClose:r,priority:m=1,blur:u=!0})=>e.jsx(v,{focused:l,onBlur:r,blur:u,priority:m,children:l?e.jsx("article",{className:s(`${t["modal-container"]} ${o}`),children:e.jsx(d.Provider,{value:r,children:a})}):null}),n=({children:a,className:o,border:l=!1})=>{const r=i.useContext(d);return e.jsxs("header",{className:s(`${t["modal-header"]} ${l&&t["with-border"]} ${o}`),children:[e.jsx("div",{children:a}),e.jsx(c,{icon:e.jsx(p,{}),theme:"bluish-gray700/0",size:"small",onClick:r})]})},y=({className:a,items:o,border:l=!0})=>{const r=i.useContext(d);return e.jsxs("header",{className:s(`${t["modal-header"]} ${t["tab-menu"]} ${l&&t["with-border"]} ${a}`),children:[e.jsx(f,{items:o,className:t["tab-menu"],fontSize:"medium",fontWeight:700,bottomLineWeight:"none"}),e.jsx(c,{icon:e.jsx(p,{}),theme:"bluish-gray700/0",size:"small",onClick:r})]})},x=({children:a,className:o})=>e.jsx("section",{className:s(`${t["modal-body"]} ${o}`),children:a}),g=({children:a,className:o,border:l=!0})=>e.jsx("footer",{className:`${t["modal-footer"]} ${l&&t["with-border"]} ${o}`,children:a}),_=Object.assign(b,{Header:n,TabMenuHeader:y,Body:x,Footer:g});try{n.displayName="ModalHeader",n.__docgenInfo={description:"",displayName:"ModalHeader",props:{border:{defaultValue:{value:"true"},description:"",name:"border",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{_.displayName="Modal",_.__docgenInfo={description:"",displayName:"Modal",props:{opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},blur:{defaultValue:{value:"true"},description:"",name:"blur",required:!1,type:{name:"boolean"}},priority:{defaultValue:{value:"1"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}}}catch{}export{_ as M};
//# sourceMappingURL=index-eff61144.js.map