import{j as r}from"./jsx-runtime-94f6e698.js";import{L as T}from"./DUMMY-096d32b1.js";import{T as o}from"./index-f2bd5f78.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-950b02d3.js";import"./Compatibility-ff615e1c.js";import"./useValidate-8b7306c6.js";import"./cleanClassName-cdc1ff81.js";import"./isObject-5520b7e1.js";import"./index-d384cd4d.js";import"./index-9cbe1128.js";import"./index-c720573b.js";import"./index-bc6a96dd.js";import"./index-1b42ff34.js";import"./index-1fc0ca9a.js";import"./index-d42fc47d.js";import"./index-8ce4a492.js";import"./index-55bd2212.js";import"./index-a7447f35.js";import"./index-e29dd81e.js";import"./index-a7ebed86.js";import"./index-0aca656c.js";const u=20,m=10,t={CAPYABLE:4,LONG_TEXT:2,LONG_TEXT_COPYABLE:5},R={title:"molecules/Table",component:o,argTypes:{fixedColumnCount:{control:"number",description:"고정된 타이틀의 개수"}},args:{fixedColumnCount:2,storageKey:"table-test",children:r.jsxs(r.Fragment,{children:[r.jsx(o.Header,{children:new Array(m).fill(0).map((a,e)=>r.jsx(o.Title,{maxWidth:[t.LONG_TEXT,t.LONG_TEXT_COPYABLE].includes(e)?"150px":void 0,children:(()=>{switch(e){case t.CAPYABLE:return"Copyable";case t.LONG_TEXT:return"Long text";case t.LONG_TEXT_COPYABLE:return`Long text
copyable`;default:return`Title ${e}`}})()},`key-${e}`))}),r.jsx(o.Body,{children:new Array(u).fill(0).map((a,e)=>r.jsx(o.Row,{children:new Array(m).fill(0).map((L,i)=>r.jsx(o.Cell,{hoverStyle:{maxHeight:200,maxWidth:300},onCopy:(()=>{switch(i){case t.CAPYABLE:case t.LONG_TEXT_COPYABLE:return n=>window.alert(`${n} Copied!`)}})(),children:(()=>{switch(i){case t.LONG_TEXT:case t.LONG_TEXT_COPYABLE:return T;default:return`Cell ${i}-${e}`}})()},`Cell ${i}-${e}`))},`row${e}`))})]})},decorators:[a=>r.jsx("article",{style:{width:"100%",height:500},children:r.jsx(a,{})})]},s={};var p,l,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const W=["Default"];export{s as Default,W as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-09fb122f.js.map
