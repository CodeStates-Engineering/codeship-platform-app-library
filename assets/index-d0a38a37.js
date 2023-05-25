import{j as p}from"./jsx-runtime-94f6e698.js";import{r as m,R as E}from"./index-8db94870.js";import"./index-e3b5ba34.js";import{c as h}from"./index-64131664.js";import{u as H}from"./useTypography-0e7bc425.js";import{P as w}from"./index-1fc0ca9a.js";function O(){return O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},O.apply(this,arguments)}function L(t,e){if(t==null)return{};var i=W(t,e),n,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(s=0;s<a.length;s++)n=a[s],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function W(t,e){if(t==null)return{};var i={},n=Object.keys(t),s,a;for(a=0;a<n.length;a++)s=n[a],!(e.indexOf(s)>=0)&&(i[s]=t[s]);return i}var k=m.forwardRef(function(t,e){var i=t.color,n=i===void 0?"currentColor":i,s=t.size,a=s===void 0?24:s,v=L(t,["color","size"]);return E.createElement("svg",O({ref:e,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},v),E.createElement("polyline",{points:"20 6 9 17 4 12"}))});k.propTypes={color:w.string,size:w.oneOfType([w.string,w.number])};k.displayName="Check";const M=k,A="_options_b6pjc_461",F="_closing_b6pjc_472",I="_opening_b6pjc_472",B="_top_b6pjc_475",D="_bottom_b6pjc_487",U="_selected_b6pjc_575",G="_hovered_b6pjc_580",J="_show_b6pjc_589",l={options:A,closing:F,opening:I,top:B,"fade-in-bottom":"_fade-in-bottom_b6pjc_1","fade-out-bottom":"_fade-out-bottom_b6pjc_1",bottom:D,"fade-in-top":"_fade-in-top_b6pjc_1","fade-out-top":"_fade-out-top_b6pjc_1","option-container":"_option-container_b6pjc_500","option-wrap":"_option-wrap_b6pjc_515","option-item":"_option-item_b6pjc_520","font-size-large4x":"_font-size-large4x_b6pjc_539","font-size-large3x":"_font-size-large3x_b6pjc_542","font-size-large2x":"_font-size-large2x_b6pjc_545","font-size-large":"_font-size-large_b6pjc_539","font-size-medium":"_font-size-medium_b6pjc_551","font-size-normal":"_font-size-normal_b6pjc_554","font-size-small":"_font-size-small_b6pjc_557","font-size-small2x":"_font-size-small2x_b6pjc_560","font-size-small3x":"_font-size-small3x_b6pjc_563","font-weight-700":"_font-weight-700_b6pjc_566","font-weight-500":"_font-weight-500_b6pjc_569","font-weight-400":"_font-weight-400_b6pjc_572",selected:U,hovered:G,"icon-wrap":"_icon-wrap_b6pjc_585",show:J,"fade-in":"_fade-in_b6pjc_1","fade-out":"_fade-out_b6pjc_1","shake-horizontal":"_shake-horizontal_b6pjc_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_b6pjc_1","slide-in-fwd-center":"_slide-in-fwd-center_b6pjc_1","scale-in-center":"_scale-in-center_b6pjc_1","slide-in-right":"_slide-in-right_b6pjc_1","slide-in-left":"_slide-in-left_b6pjc_1","slide-out-right":"_slide-out-right_b6pjc_1","slide-out-left":"_slide-out-left_b6pjc_1","scale-in-top":"_scale-in-top_b6pjc_1","scale-out-top":"_scale-out-top_b6pjc_1","swing-in-top-fwd":"_swing-in-top-fwd_b6pjc_1","scale-out-horizontal":"_scale-out-horizontal_b6pjc_1"},$=({opened:t=!1,options:e,multiple:i=!1,value:n,onChange:s,onKeyDown:a,float:v="bottom",className:N,optionStyle:r})=>{const[b,y]=m.useState(t);m.useEffect(()=>{y(u=>u!==t?t?"opening":"closing":u)},[t]);const x=typeof b=="string",[C,g]=m.useState(-1),[V,q]=m.useMemo(()=>[{width:r==null?void 0:r.width},{maxHeight:r==null?void 0:r.maxHeight}],[r==null?void 0:r.maxHeight,r==null?void 0:r.width]);m.useEffect(()=>{if(x){const u=b==="opening";g((e==null?void 0:e.findIndex(({value:o})=>o===n))??-1);const c=setTimeout(()=>y(u),250);return()=>clearTimeout(c)}},[x,b,e,n]);const j=m.useRef([]);m.useEffect(()=>{if(b===!0&&e){const u=c=>{switch(a==null||a(c),c.key){case"ArrowUp":return c.preventDefault(),g(o=>{var _;if(o>0){const f=o-1;return(_=j.current[f])==null||_.focus(),f}return o});case"ArrowDown":return c.preventDefault(),g(o=>{var _;if(o<e.length-1){const f=o+1;return(_=j.current[f])==null||_.focus(),f}return o});case"Enter":return c.preventDefault(),g(o=>{var _;return o>=0&&((_=j.current[o])==null||_.click()),o})}};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)}},[b,e,a]);const{fontSizeClassName:P,fontWeightClassName:T}=H(r==null?void 0:r.fontSize,r==null?void 0:r.fontWeight);return b&&(e!=null&&e.length)?p.jsx("section",{style:V,className:h(`${l.options} ${l[v]} ${x&&l[b]} ${N}`),children:p.jsx("ul",{className:h(l["option-container"]),style:q,children:e==null?void 0:e.map(({label:u,value:c},o)=>{const _=o===C,f=(()=>n===void 0?!1:i&&n instanceof Array?n.includes(c):n===c)();return p.jsx("li",{className:l["option-wrap"],children:p.jsxs("button",{type:"button",ref:d=>{j.current[o]=d},className:h(`${l["option-item"]} ${l[P]} ${l[T]} ${_&&l.hovered} ${f&&l.selected}`),onClick:()=>{if(i){const d=n??[],z=s;z==null||z(f?d.filter(R=>R!==c):[...d,c])}else{const d=s;d==null||d(f?void 0:c)}},onMouseEnter:()=>{g(o)},children:[p.jsx("div",{children:u}),i?p.jsx("div",{className:h(`${l["icon-wrap"]} ${f&&l.show}`),children:p.jsx(M,{size:"1em"})}):null]})},o)})})}):p.jsx(p.Fragment,{})};try{$.displayName="Options",$.__docgenInfo={description:"",displayName:"Options",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: OptionValue; }[]"}},multiple:{defaultValue:{value:"false as Multiple"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ValidOptionValue | OptionValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: (Multiple extends true ? OptionValue[] : OptionValue)) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent) => void)"}},float:{defaultValue:{value:"bottom"},description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},optionStyle:{defaultValue:null,description:"",name:"optionStyle",required:!1,type:{name:'(Typography & Pick<CSSProperties, "width" | "maxHeight">)'}}}}}catch{}export{M as C,$ as O};
//# sourceMappingURL=index-d0a38a37.js.map
