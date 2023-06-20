import{j as _}from"./jsx-runtime-94f6e698.js";import{r as a,R as H}from"./index-8db94870.js";import{_ as W}from"./index-d384cd4d.js";import{c as T}from"./index-64131664.js";import"./index-a929f743.js";import{d as A}from"./index-fc4f8fe1.js";import{P as z}from"./index-1fc0ca9a.js";import{b as B,c as F}from"./isObject-9c705d90.js";import{B as V}from"./index-18098115.js";var q="[object Number]";function G(e){return typeof e=="number"||B(e)&&F(e)==q}function P(){return P=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},P.apply(this,arguments)}function J(e,n){if(e==null)return{};var i=K(e,n),t,r;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function K(e,n){if(e==null)return{};var i={},t=Object.keys(e),r,l;for(l=0;l<t.length;l++)r=t[l],!(n.indexOf(r)>=0)&&(i[r]=e[r]);return i}var I=a.forwardRef(function(e,n){var i=e.color,t=i===void 0?"currentColor":i,r=e.size,l=r===void 0?24:r,f=J(e,["color","size"]);return H.createElement("svg",P({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},f),H.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),H.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}))});I.propTypes={color:z.string,size:z.oneOfType([z.string,z.number])};I.displayName="Copy";const Q=I,U="_table_rhc2x_461",X="_header_rhc2x_480",Y="_title_rhc2x_486",Z="_hovered_rhc2x_494",ee="_row_rhc2x_505",te="_cell_rhc2x_508",re="_overflow_rhc2x_546",oe="_hidden_rhc2x_556",ne="_dragging_rhc2x_582",se="_restoring_rhc2x_587",ie="_fixed_rhc2x_592",le="_shadow_rhc2x_596",o={table:U,"fade-in":"_fade-in_rhc2x_1",header:X,title:Y,hovered:Z,"title-content":"_title-content_rhc2x_498",row:ee,cell:te,"drop-left":"_drop-left_rhc2x_526","drop-right":"_drop-right_rhc2x_527","cell-content-container":"_cell-content-container_rhc2x_539",overflow:re,"not-overflow":"_not-overflow_rhc2x_549","hovered-cell-content-wrap":"_hovered-cell-content-wrap_rhc2x_552",hidden:oe,"has-style":"_has-style_rhc2x_578",dragging:ne,restoring:se,fixed:ie,shadow:le,"hovered-cell-content":"_hovered-cell-content_rhc2x_552","copy-button-wrap":"_copy-button-wrap_rhc2x_607","fade-out":"_fade-out_rhc2x_1","shake-horizontal":"_shake-horizontal_rhc2x_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_rhc2x_1","slide-in-fwd-center":"_slide-in-fwd-center_rhc2x_1","scale-in-center":"_scale-in-center_rhc2x_1","slide-in-right":"_slide-in-right_rhc2x_1","slide-in-left":"_slide-in-left_rhc2x_1","slide-out-right":"_slide-out-right_rhc2x_1","slide-out-left":"_slide-out-left_rhc2x_1","scale-in-top":"_scale-in-top_rhc2x_1","scale-out-top":"_scale-out-top_rhc2x_1","swing-in-top-fwd":"_swing-in-top-fwd_rhc2x_1","fade-in-top":"_fade-in-top_rhc2x_1","fade-out-top":"_fade-out-top_rhc2x_1","fade-in-bottom":"_fade-in-bottom_rhc2x_1","fade-out-bottom":"_fade-out-bottom_rhc2x_1","scale-out-horizontal":"_scale-out-horizontal_rhc2x_1"},j=a.createContext({tableState:{titles:[]},setTableState:()=>{},fixedTitleCount:0,isLeftScrolled:!1,isLoading:!1}),ae=({className:e,children:n,fixedTitleCount:i=0})=>{const[t,r]=a.useState({titles:[]}),[l,f]=a.useState(!1);a.useEffect(()=>{const h=A(()=>{r(u=>(u.titles.forEach(c=>{c.width=void 0}),{...u}))},300);return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]);const x=a.useMemo(()=>{const h=!t.titles.find(({width:u})=>!!u);return{tableState:t,setTableState:r,fixedTitleCount:i,isLeftScrolled:l,isLoading:h}},[i,t,l]);return _.jsx("article",{className:T(`${o.table} ${e}`),onScroll:h=>f(h.currentTarget.scrollLeft>0),children:_.jsx("table",{children:_.jsx(j.Provider,{value:x,children:n})})})},ce=({children:e,className:n})=>{const i=a.Children.count(e),{setTableState:t,tableState:{titles:r}}=a.useContext(j);a.useEffect(()=>{t(f=>({...f,titles:Array.from({length:i},(x,h)=>({order:{origin:h,current:h}}))}))},[i,t]);const l=a.Children.toArray(e);return _.jsx("thead",{className:T(`${o.header} ${n}`),children:_.jsx("tr",{children:r.map(({order:{origin:f}})=>l[f])})})},de=({children:e,width:n,className:i})=>{var E,C;const{tableState:t,setTableState:r,fixedTitleCount:l,isLeftScrolled:f,isLoading:x}=a.useContext(j),{titles:h}=t,u=a.useRef(null);a.useEffect(()=>{const{current:s}=u;if(s){const{offsetWidth:p,cellIndex:m}=s;(n||!x)&&r(d=>(d.titles[m].width=p,{...d}))}},[u,r,n,x]);const c=((E=u.current)==null?void 0:E.cellIndex)??-1,{draggingOrder:v,hoveredOrder:$,dropOrder:g}=t,S=s=>{v===void 0&&r(p=>({...p,hoveredOrder:s}))},L=()=>{if(G(v)&&c>=0){let s=[...h];const[p]=s.splice(v,1);s=s.sort((y,R)=>y.order.current-R.order.current);const{order:m}=h[c];s=[...s.slice(0,m.current),p,...s.slice(m.current)],s.forEach((y,R)=>{y.order.current=R});const d={...t,titles:s,dropOrder:void 0,draggingOrder:void 0,hoveredOrder:void 0};r(d),setTimeout(()=>r({...d,hoveredOrder:c}))}};let O=0;for(let s=0;s<c;s+=1)O+=((C=h[s])==null?void 0:C.width)??0;const b=g===c,w=v===c,N=c<l,D=c===l-1,k=$===c;return _.jsx("th",{style:{left:O},className:T(`${o.title} ${N&&o.fixed} ${D&&f&&o.shadow} ${k&&o.hovered} ${b&&(w||((v??0)>g?o["drop-left"]:o["drop-right"]))} ${w&&(b?o.restoring:o.dragging)} 

        } ${w&&(b?o.restoring:o.dragging)} ${i}`),ref:u,draggable:!0,onMouseEnter:()=>S(c),onMouseLeave:()=>S(),onDragOver:s=>s.preventDefault(),onDragStart:()=>r(s=>({...s,draggingOrder:c})),onDragEnter:()=>r(s=>({...s,dropOrder:c})),onDrop:L,children:_.jsx("div",{style:{width:n},className:o["title-content"],children:e})})},_e=({children:e,className:n})=>_.jsx("tbody",{className:n,children:e}),he=({children:e,className:n})=>{const{tableState:{titles:i}}=a.useContext(j),t=a.Children.toArray(e);return _.jsx("tr",{className:T(`${o.row} ${n}`),children:i.map(({order:{origin:r}})=>t[r])})},fe=({children:e,onCopy:n,className:i,hoverStyle:t})=>{var p,m;const{tableState:{titles:r,hoveredOrder:l,draggingOrder:f,dropOrder:x},fixedTitleCount:h,isLeftScrolled:u,setTableState:c,isLoading:v}=a.useContext(j),$=a.useRef(null),g=((p=$.current)==null?void 0:p.cellIndex)??-1,{width:S}=r[g??0]??{};let L=0;for(let d=0;d<g;d+=1)L+=((m=r[d])==null?void 0:m.width)??0;const[O,b]=a.useState(!1),w=x===g,N=f===g,D=g<h,k=g===h-1,E=l===g;a.useEffect(()=>c(d=>({...d})),[e,c]);const[C,s]=a.useState(!0);return _.jsx("td",{ref:$,style:{left:L},className:T(`${o.cell} ${D&&o.fixed} ${k&&u&&o.shadow} ${E&&o.hovered} ${w&&(N||((f??0)>x?o["drop-left"]:o["drop-right"]))} ${N&&(w?o.restoring:o.dragging)} ${i}`),children:v?null:_.jsxs("div",{style:{width:S},className:`${o["cell-content-container"]} ${C?o.overflow:o["not-overflow"]}`,onMouseEnter:({currentTarget:d})=>{const y=d.scrollWidth>d.clientWidth;(y||n)&&b(!0),y||s(!1)},onMouseLeave:()=>b(!1),children:[O?_.jsx("div",{className:o.hidden,children:e}):e,O?_.jsxs("div",{className:T(`${o["hovered-cell-content-wrap"]} ${t&&o["has-style"]}`),style:t,children:[_.jsx("div",{className:o["hovered-cell-content"],children:e}),n?_.jsx("div",{className:o["copy-button-wrap"],children:_.jsx(V,{size:"small3x",shape:"round",theme:"bluish-gray700/0",icon:_.jsx(Q,{size:14}),onClick:()=>{const d=W(e);navigator.clipboard.writeText(d),n==null||n(d)}})}):null]}):null]})})},M=Object.assign(ae,{Header:ce,Title:de,Body:_e,Row:he,Cell:fe});try{M.displayName="Table",M.__docgenInfo={description:"",displayName:"Table",props:{fixedTitleCount:{defaultValue:{value:"0"},description:"",name:"fixedTitleCount",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{M as T,G as i};
//# sourceMappingURL=index-a8639b1b.js.map
