import{j as n}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{r as h}from"./index-8ce4a492.js";import"./index-a1ddcb1d.js";import{c as f}from"./index-64131664.js";import{C as m}from"./index-e3b5ba34.js";const b=(o=!1,a=300)=>{const s=u.useState(o),[_,i]=s;m.useLayoutEffect(()=>i(o?!0:t=>t?"closing":!1),[o]);const r=_==="closing";return m.useLayoutEffect(()=>{if(r){const t=setTimeout(()=>{i(!1)},a);return()=>clearTimeout(t)}},[r]),s},g="_blur_56h2o_475",v="_closing_56h2o_479",x="_global_56h2o_501",e={"fixed-body":"_fixed-body_56h2o_461","background-layer":"_background-layer_56h2o_466","fade-in":"_fade-in_56h2o_1",blur:g,closing:v,"fade-out":"_fade-out_56h2o_1","priority-1":"_priority-1_56h2o_483","priority-2":"_priority-2_56h2o_486","priority-3":"_priority-3_56h2o_489","focus-layer":"_focus-layer_56h2o_494",global:x,"shake-horizontal":"_shake-horizontal_56h2o_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_56h2o_1","slide-in-fwd-center":"_slide-in-fwd-center_56h2o_1","scale-in-center":"_scale-in-center_56h2o_1","slide-in-right":"_slide-in-right_56h2o_1","slide-in-left":"_slide-in-left_56h2o_1","slide-out-right":"_slide-out-right_56h2o_1","slide-out-left":"_slide-out-left_56h2o_1","scale-in-top":"_scale-in-top_56h2o_1","scale-out-top":"_scale-out-top_56h2o_1","swing-in-top-fwd":"_swing-in-top-fwd_56h2o_1","fade-in-top":"_fade-in-top_56h2o_1","fade-out-top":"_fade-out-top_56h2o_1","fade-in-bottom":"_fade-in-bottom_56h2o_1","fade-out-bottom":"_fade-out-bottom_56h2o_1","scale-out-horizontal":"_scale-out-horizontal_56h2o_1"},p=({children:o,onBlur:a,focused:s,blur:_,className:i,bodyScroll:r=!1,priority:t})=>{const[c]=b(s),y=c==="closing";u.useEffect(()=>{if(!r){const{classList:l}=document.body;return s&&l.add(e["fixed-body"]),()=>l.remove(e["fixed-body"])}},[s,r]);const d=u.useRef();return u.useEffect(()=>{if(a){const l=()=>{d.current===!1&&a()};return document.addEventListener("click",l),()=>document.removeEventListener("click",l)}},[a,c]),typeof window>"u"?null:t?h.createPortal(c?n.jsxs(n.Fragment,{children:[n.jsx("div",{onClick:a,className:f(`${e["background-layer"]} ${e[`priority-${t}`]} ${y&&e.closing} ${_&&e.blur}`)}),n.jsx("div",{className:f(`${e["focus-layer"]} ${e.global} ${e[`priority-${t}`]} ${i}`),children:o})]}):null,document.body):n.jsx("div",{onMouseEnter:()=>{d.current=!0},onMouseLeave:()=>{d.current=!1},className:f(`${e["focus-layer"]} ${i}`),children:o})};try{p.displayName="FocusLayer",p.__docgenInfo={description:"",displayName:"FocusLayer",props:{onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},blur:{defaultValue:null,description:"",name:"blur",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},bodyScroll:{defaultValue:{value:"false"},description:"",name:"bodyScroll",required:!1,type:{name:"boolean"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}}}catch{}export{p as F,b as u};
//# sourceMappingURL=index-451d21b4.js.map
