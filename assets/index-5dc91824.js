import{j as d}from"./jsx-runtime-94f6e698.js";import{r as v,R as b}from"./index-8db94870.js";import"./index-987fedf7.js";import"./Compatibility-ff615e1c.js";import{d as Z}from"./useValidationMessage-20be1c63.js";import{u as F}from"./useSubscribedState-c6f4ee9b.js";import"./ValidationContext-e5b2e92a.js";import{P as m}from"./index-1fc0ca9a.js";import{O as U}from"./index-19ea5d71.js";import{L as D}from"./index-2489ea6f.js";import{F as G}from"./index-e3f83235.js";import{I as j}from"./index-1770fe77.js";function y(){return y=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},y.apply(this,arguments)}function J(e,o){if(e==null)return{};var r=K(e,o),a,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],!(o.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function K(e,o){if(e==null)return{};var r={},a=Object.keys(e),n,l;for(l=0;l<a.length;l++)n=a[l],!(o.indexOf(n)>=0)&&(r[n]=e[n]);return r}var x=v.forwardRef(function(e,o){var r=e.color,a=r===void 0?"currentColor":r,n=e.size,l=n===void 0?24:n,p=J(e,["color","size"]);return b.createElement("svg",y({ref:o,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),b.createElement("circle",{cx:"11",cy:"11",r:"8"}),b.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});x.propTypes={color:m.string,size:m.oneOfType([m.string,m.number])};x.displayName="Search";const Q=x,S={email:/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/,password:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,slug:/^[a-z0-9]+(?:-[a-z0-9]+)*$/,phone:/^[+]?[(]?[0-9]{2,3}[)]?[-\s]?[0-9]{3,4}[-\s]?[0-9]{4}$/,number:/[^0-9]/g,symbols:/[^a-z0-9가-힣]/gi},q=({float:e,value:o,options:r,onChange:a,selfFilter:n=!0,disabled:l,placeholder:p,onFocus:P,id:_,onClick:O,ref:k,label:f,validation:T,className:C,inputStyle:t,labelStyle:I,optionStyle:L,hasSearchIcon:R=!0,validationTrigger:$,description:N})=>{const[z,c]=v.useState(!1),[u,h]=F(o),W=v.useMemo(()=>{const s=r==null?void 0:r.map(i=>({label:i,value:i}));if(!n||!s||!u)return s;const V=i=>i.toLowerCase().replace(S.symbols,""),B=u.split(" ").map(i=>V(i));return s.filter(({value:i})=>{const H=V(i);return B.every(M=>H.includes(M))})},[n,u,r]),{validationMessage:E,validateOnChange:g,validateOnBlur:A}=Z({key:f,validateHandler:T,value:o,validationTrigger:$}),w=s=>{h==null||h(s),a==null||a(s),g==null||g(s)};return d.jsx(D.WithInput,{className:C,inputStyle:t,labelStyle:I,label:f,children:d.jsxs(G,{onBlur:()=>c(!1),focused:z,bodyScroll:!0,children:[d.jsxs(j.Wrap,{validationMessage:E,onClick:O,size:t==null?void 0:t.size,width:t==null?void 0:t.width,borderRadius:t==null?void 0:t.borderRadius,description:N,children:[d.jsx(j,{name:f,ref:k,onChange:s=>{c(!0),w(s)},fontSize:t==null?void 0:t.fontSize,fontWeight:t==null?void 0:t.fontWeight,onClick:()=>c(!0),onFocus:P,id:_,value:u,disabled:l,placeholder:p,onBlur:A}),R?d.jsx(Q,{}):null]}),d.jsx(U,{optionStyle:L,opened:z,options:W,value:u,onChange:s=>{c(!1),w(s)},float:e})]})})};try{q.displayName="Searchbox",q.__docgenInfo={description:"",displayName:"Searchbox",props:{selfFilter:{defaultValue:{value:"true"},description:"",name:"selfFilter",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"string[]"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"ValidateHandler<string>"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'(Pick<InputWrapProps, "width" | "size" | "borderRadius"> & UseTypographyClassNameParams)'}},hasSearchIcon:{defaultValue:{value:"true"},description:"",name:"hasSearchIcon",required:!1,type:{name:"boolean"}},validationTrigger:{defaultValue:null,description:"",name:"validationTrigger",required:!1,type:{name:"enum",value:[{value:'"onBlur"'},{value:'"onChange"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | null"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},float:{defaultValue:null,description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},optionStyle:{defaultValue:null,description:"",name:"optionStyle",required:!1,type:{name:'(UseTypographyClassNameParams & Pick<CSSProperties, "width" | "maxHeight">)'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & UseTypographyClassNameParams)'}}}}}catch{}export{q as S};
//# sourceMappingURL=index-5dc91824.js.map
