import{j as s}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8ce4a492.js";import{r as y}from"./index-8db94870.js";import{C as _}from"./index-e3b5ba34.js";import{c as f}from"./index-64131664.js";const q=(t=!1,l=300)=>{const i=y.useState(t),[n,a]=i;_.useLayoutEffect(()=>a(t?!0:o=>o?"closing":!1),[t]);const r=n==="closing";return _.useLayoutEffect(()=>{if(r){const o=setTimeout(()=>{a(!1)},l);return()=>clearTimeout(o)}},[r]),i},b="_blur_1qrgi_474",h="_closing_1qrgi_478",e={"fixed-body":"_fixed-body_1qrgi_461","background-layer":"_background-layer_1qrgi_465","fade-in":"_fade-in_1qrgi_1",blur:b,closing:h,"fade-out":"_fade-out_1qrgi_1","priority-1":"_priority-1_1qrgi_482","priority-2":"_priority-2_1qrgi_485","priority-3":"_priority-3_1qrgi_488","focus-layer":"_focus-layer_1qrgi_493","shake-horizontal":"_shake-horizontal_1qrgi_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1qrgi_1","slide-in-fwd-center":"_slide-in-fwd-center_1qrgi_1","scale-in-center":"_scale-in-center_1qrgi_1","slide-in-right":"_slide-in-right_1qrgi_1","slide-in-left":"_slide-in-left_1qrgi_1","slide-out-right":"_slide-out-right_1qrgi_1","slide-out-left":"_slide-out-left_1qrgi_1","scale-in-top":"_scale-in-top_1qrgi_1","scale-out-top":"_scale-out-top_1qrgi_1","swing-in-top-fwd":"_swing-in-top-fwd_1qrgi_1","fade-in-top":"_fade-in-top_1qrgi_1","fade-out-top":"_fade-out-top_1qrgi_1","fade-in-bottom":"_fade-in-bottom_1qrgi_1","fade-out-bottom":"_fade-out-bottom_1qrgi_1","scale-out-horizontal":"_scale-out-horizontal_1qrgi_1"},g=({children:t,onBlur:l,focused:i,blur:n,className:a,bodyScroll:r=!1,priority:o=3})=>{const[u]=q(i),p=u==="closing";_.useLayoutEffect(()=>{if(!r){const{classList:d}=document.body;return i&&d.add(e["fixed-body"]),()=>d.remove(e["fixed-body"])}},[i,r]);const c=e[`priority-${o}`];return s.jsxs(s.Fragment,{children:[u?m.createPortal(s.jsx("div",{onClick:l,className:f(`${e["background-layer"]} ${p&&e.closing} ${n&&e.blur} ${c}`)}),document.body):null,s.jsx("div",{className:f(`${e["focus-layer"]} ${c} ${a}`),children:t})]})};try{g.displayName="FocusLayer",g.__docgenInfo={description:"",displayName:"FocusLayer",props:{onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},blur:{defaultValue:null,description:"",name:"blur",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},bodyScroll:{defaultValue:{value:"false"},description:"",name:"bodyScroll",required:!1,type:{name:"boolean"}},priority:{defaultValue:{value:"3"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}}}catch{}export{g as F,q as u};
//# sourceMappingURL=index-5e1f5eec.js.map
