import"./index-85fe2785.js";import"./index-6c3eb542.js";import"./index-8f534833.js";import{j as c}from"./jsx-runtime-94f6e698.js";import{r as f,R as C}from"./index-8db94870.js";import{C as S}from"./index-e3b5ba34.js";import{c as x}from"./index-64131664.js";import{P as g}from"./index-1fc0ca9a.js";import"./index-f1d4be6e.js";import"./index-bc98936d.js";import"./index-31028963.js";import"./index-f799b55c.js";import"./index-636e19d2.js";import"./index-6f0f2d7c.js";import"./index-300c5525.js";import"./index-2a531a4b.js";function w(){return w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},w.apply(this,arguments)}function z(e,n){if(e==null)return{};var o=H(e,n),a,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function H(e,n){if(e==null)return{};var o={},a=Object.keys(e),i,s;for(s=0;s<a.length;s++)i=a[s],!(n.indexOf(i)>=0)&&(o[i]=e[i]);return o}var O=f.forwardRef(function(e,n){var o=e.color,a=o===void 0?"currentColor":o,i=e.size,s=i===void 0?24:i,h=z(e,["color","size"]);return C.createElement("svg",w({ref:n,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},h),C.createElement("polyline",{points:"20 6 9 17 4 12"}))});O.propTypes={color:g.string,size:g.oneOfType([g.string,g.number])};O.displayName="Check";const $=O,D="_options_6kkxa_389",R="_closing_6kkxa_398",P="_opening_6kkxa_398",W="_top_6kkxa_401",A="_bottom_6kkxa_413",B="_selected_6kkxa_462",F="_hovered_6kkxa_466",m={options:D,closing:R,opening:P,top:W,"fade-in-bottom":"_fade-in-bottom_6kkxa_1","fade-out-bottom":"_fade-out-bottom_6kkxa_1",bottom:A,"fade-in-top":"_fade-in-top_6kkxa_1","fade-out-top":"_fade-out-top_6kkxa_1","option-container":"_option-container_6kkxa_426","mouse-hover-enabled":"_mouse-hover-enabled_6kkxa_441","option-item":"_option-item_6kkxa_441",selected:B,hovered:F,"check-icon-wrap":"_check-icon-wrap_6kkxa_470","fade-in":"_fade-in_6kkxa_1","fade-out":"_fade-out_6kkxa_1","shake-horizontal":"_shake-horizontal_6kkxa_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_6kkxa_1","slide-in-fwd-center":"_slide-in-fwd-center_6kkxa_1","scale-in-center":"_scale-in-center_6kkxa_1","slide-in-right":"_slide-in-right_6kkxa_1","slide-out-right":"_slide-out-right_6kkxa_1","scale-in-top":"_scale-in-top_6kkxa_1","scale-out-top":"_scale-out-top_6kkxa_1","swing-in-top-fwd":"_swing-in-top-fwd_6kkxa_1"},M=({opened:e=!1,options:n,multiple:o,value:a,onSelect:i,onKeyDown:s,float:h="bottom",className:j})=>{const k=f.useMemo(()=>n==null?void 0:n.map(()=>f.createRef()),[n]),d=f.useMemo(()=>k&&(n==null?void 0:n.map((t,r)=>{let u=!1;return a&&(u=a instanceof Array?a.some(l=>t.value===l.value&&t.label===l.label):a.value===t.value&&a.label===t.label),{option:t,ref:k[r],isAlreadySelected:u}})),[n,k,a]),[L,b]=f.useState(-1),[_,E]=f.useState(e);S.useLayoutEffect(()=>{E(t=>t!==e?e?"opening":"closing":t)},[e]);const V=typeof _=="string";S.useLayoutEffect(()=>{var t,r;if(V){const u=_==="opening";if(u){b(-1);const p=(t=d==null?void 0:d.find(({isAlreadySelected:N})=>N))==null?void 0:t.ref;p&&((r=p.current)==null||r.scrollIntoView({block:"start"}))}const l=setTimeout(()=>E(u),250);return()=>clearTimeout(l)}},[_,V,d]);const v=d==null?void 0:d[L],y=f.useMemo(()=>i&&(o?(t,r,u)=>{const l=t,p=i;return p(l?u?l.filter(({label:N,value:I})=>N!==r.label||I!==r.value):[...l,r]:[r])}:(t,r,u)=>{const l=t,p=i;return p(l&&u?void 0:r)}),[o,i]),[q,T]=f.useState(!1);return f.useEffect(()=>{if(_===!0&&d){const t=r=>{const{key:u}=r;switch(u){case"Enter":return r.preventDefault(),v&&(y==null?void 0:y(a,v.option,v.isAlreadySelected));case"ArrowUp":case"ArrowDown":return T(!0),r.preventDefault(),b(l=>{var p;return u==="ArrowDown"?l=l<d.length-1?l+1:l:l=l>0?l-1:0,(p=d[l].ref.current)==null||p.scrollIntoView({block:"start"}),l});default:return s==null?void 0:s(r)}};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)}},[y,s,_,d,v,a]),_&&(d!=null&&d.length)?c.jsx("section",{className:x(`${m.options} ${m[h]} ${V&&m[_]} ${j}`),children:c.jsx("ul",{className:x(`${m["option-container"]} ${!q&&m["mouse-hover-enabled"]}`),children:d.map(({option:t,ref:r,isAlreadySelected:u},l)=>c.jsx("li",{children:c.jsxs("button",{type:"button",ref:r,className:x(`${m["option-item"]} ${q&&L===l&&m.hovered} ${u&&m.selected}`),onClick:()=>y==null?void 0:y(a,t,u),onMouseEnter:()=>_===!0&&!q&&b(l),onMouseMove:()=>T(!1),children:[c.jsx("div",{children:t.label}),o?c.jsx("div",{className:m["check-icon-wrap"],children:u?c.jsx($,{}):null}):null]})},l))})}):c.jsx(c.Fragment,{})};try{M.displayName="Options",M.__docgenInfo={description:"",displayName:"Options",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"_Option[]"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Option<ValidOptionValue> | _Option[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((option?: OptionsValue<_Option, _Multiple>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent) => void)"}},float:{defaultValue:{value:"bottom"},description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{fontSize:{defaultValue:{value:"normal"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small2x"'},{value:'"small3x"'}]}},fontWeight:{defaultValue:{value:"700"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"500"},{value:"400"}]}},delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:{value:"white/purple600"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"white/purple600"'},{value:'"white/bluish-gray800"'},{value:'"purple600/0"'},{value:'"bluish-gray700/0"'},{value:'"bluish-gray300/0"'},{value:'"bluish-gray500/0"'},{value:'"bluish-gray400/0/bluish-gray200"'},{value:'"bluish-gray700/0/bluish-gray200"'},{value:'"bluish-gray400/bluish-gray10/bluish-gray200"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconDirection:{defaultValue:{value:"left"},description:"",name:"iconDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},shape:{defaultValue:{value:"default"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"default"'}]}},padding:{defaultValue:{value:"true"},description:"",name:"padding",required:!1,type:{name:"boolean"}},focusOutline:{defaultValue:{value:"true"},description:"",name:"focusOutline",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},enterClick:{defaultValue:{value:"false"},description:"",name:"enterClick",required:!1,type:{name:"boolean"}}}}}catch{}try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"button"'},{value:'"text"'},{value:'"large-number"'},{value:'"phone-number"'},{value:'"business-number"'},{value:'"password"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'((value: (T extends "number" | "large-number" ? number : string)) => void)'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{InputContainer.displayName="InputContainer",InputContainer.__docgenInfo={description:"",displayName:"InputContainer",props:{validationMessage:{defaultValue:null,description:"",name:"validationMessage",required:!1,type:{name:"string | null"}},validationSpace:{defaultValue:null,description:"",name:"validationSpace",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{Options.displayName="Options",Options.__docgenInfo={description:"",displayName:"Options",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"_Option[]"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Option<ValidOptionValue> | _Option[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((option?: OptionsValue<_Option, _Multiple>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent) => void)"}},float:{defaultValue:{value:"bottom"},description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{FocusLayer.displayName="FocusLayer",FocusLayer.__docgenInfo={description:"",displayName:"FocusLayer",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},blur:{defaultValue:null,description:"",name:"blur",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},bodyScroll:{defaultValue:{value:"false"},description:"",name:"bodyScroll",required:!1,type:{name:"boolean"}},priority:{defaultValue:{value:"3"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}}}catch{}try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{}}}catch{}try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"any"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"any"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"any"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"puple-550"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"puple-550"'},{value:'"puple-600"'},{value:'"bluish-gray-600"'},{value:'"bluish-gray-700"'},{value:'"bluish-gray-800"'}]}},hoverType:{defaultValue:{value:"underline"},description:"",name:"hoverType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"underline"'},{value:'"color-change"'}]}},type:{defaultValue:{value:"link"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"button"'},{value:'"span"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small2x"'},{value:'"small3x"'}]}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"500"},{value:"400"}]}}}}}catch{}try{Hr.displayName="Hr",Hr.__docgenInfo={description:"",displayName:"Hr",props:{color:{defaultValue:{value:"bluish-gray-100"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"purple-550"'},{value:'"bluish-gray-100"'}]}},weight:{defaultValue:{value:"thin"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"thin"'},{value:'"thick"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:{value:"success"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"fail"'}]}},isSpaceHolding:{defaultValue:{value:"false"},description:"",name:"isSpaceHolding",required:!1,type:{name:"boolean"}},floatDirection:{defaultValue:{value:"from-top"},description:"",name:"floatDirection",required:!1,type:{name:"enum",value:[{value:'"from-top"'},{value:'"from-bottom"'}]}},holdTime:{defaultValue:{value:"3000"},description:"",name:"holdTime",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{mouseEnterDelay:{defaultValue:{value:"200"},description:"",name:"mouseEnterDelay",required:!1,type:{name:"number"}}}}}catch{}try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{$ as C,M as O};
//# sourceMappingURL=index-adb8cc3f.js.map
