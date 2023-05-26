import{j as g}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import"./index-e3b5ba34.js";import{c as j}from"./index-64131664.js";import{i as W,a as T,r as A}from"./isObject-3c28966c.js";var D=/\s/;function B(e){for(var t=e.length;t--&&D.test(e.charAt(t)););return t}var F=/^\s+/;function X(e){return e&&e.slice(0,B(e)+1).replace(F,"")}var N=0/0,H=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,U=/^0o[0-7]+$/i,q=parseInt;function w(e){if(typeof e=="number")return e;if(W(e))return N;if(T(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=T(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=X(e);var n=P.test(e);return n||U.test(e)?q(e.slice(2),n?2:8):H.test(e)?N:+e}var V=function(){return A.Date.now()};const E=V;var Y="Expected a function",G=Math.max,J=Math.min;function K(e,t,n){var o,r,d,u,a,l,_=0,s=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(Y);t=w(t)||0,T(n)&&(s=!!n.leading,m="maxWait"in n,d=m?G(w(n.maxWait)||0,t):d,v="trailing"in n?!!n.trailing:v);function z(i){var f=o,p=r;return o=r=void 0,_=i,u=e.apply(p,f),u}function k(i){return _=i,a=setTimeout(h,t),s?z(i):u}function L(i){var f=i-l,p=i-_,I=t-f;return m?J(I,d-p):I}function C(i){var f=i-l,p=i-_;return l===void 0||f>=t||f<0||m&&p>=d}function h(){var i=E();if(C(i))return b(i);a=setTimeout(h,L(i))}function b(i){return a=void 0,v&&o?z(i):(o=r=void 0,u)}function R(){a!==void 0&&clearTimeout(a),_=0,o=l=r=a=void 0}function O(){return a===void 0?u:b(E())}function y(){var i=E(),f=C(i);if(o=arguments,r=this,l=i,f){if(a===void 0)return k(l);if(m)return clearTimeout(a),a=setTimeout(h,t),z(l)}return a===void 0&&(a=setTimeout(h,t)),u}return y.cancel=R,y.flush=O,y}var Q="Expected a function";function Z(e,t,n){var o=!0,r=!0;if(typeof e!="function")throw new TypeError(Q);return T(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),K(e,t,{leading:o,maxWait:t,trailing:r})}function $(e,t){const n=c.useRef(!1);c.useEffect(n.current?e:()=>{n.current=!0},t)}const ee="_tooltip_z498x_461",te="_triangle_z498x_477",ne="_closing_z498x_499",x={"tooltip-message-wrap":"_tooltip-message-wrap_z498x_461",tooltip:ee,triangle:te,"tooltip-message-container":"_tooltip-message-container_z498x_489","fade-in":"_fade-in_z498x_1",closing:ne,"fade-out":"_fade-out_z498x_1","shake-horizontal":"_shake-horizontal_z498x_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_z498x_1","slide-in-fwd-center":"_slide-in-fwd-center_z498x_1","scale-in-center":"_scale-in-center_z498x_1","slide-in-right":"_slide-in-right_z498x_1","slide-in-left":"_slide-in-left_z498x_1","slide-out-right":"_slide-out-right_z498x_1","slide-out-left":"_slide-out-left_z498x_1","scale-in-top":"_scale-in-top_z498x_1","scale-out-top":"_scale-out-top_z498x_1","swing-in-top-fwd":"_swing-in-top-fwd_z498x_1","fade-in-top":"_fade-in-top_z498x_1","fade-out-top":"_fade-out-top_z498x_1","fade-in-bottom":"_fade-in-bottom_z498x_1","fade-out-bottom":"_fade-out-bottom_z498x_1","scale-out-horizontal":"_scale-out-horizontal_z498x_1"},M=c.createContext({displayed:!1,coordinates:{left:0,top:0}}),ie=({children:e,mouseEnterDelay:t=200})=>{const[n,o]=c.useState(!1),[r,d]=c.useState(!1),[u,a]=c.useState();$(()=>{if(r==="closing"){const s=setTimeout(()=>d(!1),100);return()=>clearTimeout(s)}},[r]),$(()=>{if(n){const s=setTimeout(()=>d(!0),t);return()=>clearTimeout(s)}d(s=>s===!0?"closing":s)},[n]);const l=c.useMemo(()=>Z(s=>{a({left:s.clientX,top:s.clientY+10})},100),[]),_=c.useMemo(()=>({displayed:r,coordinates:u,handleMouseMove:l,handleMouseEnterLeave:{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1)}}),[u,r,l]);return g.jsx(M.Provider,{value:_,children:e})},oe=({children:e,className:t})=>{const{handleMouseMove:n,handleMouseEnterLeave:o}=c.useContext(M);return g.jsx("div",{...o,className:j(`${x.tooltip} ${t}`),onMouseMove:n,children:e})},re=({children:e,className:t})=>{const{displayed:n,coordinates:o,handleMouseEnterLeave:r}=c.useContext(M);return n?g.jsxs("div",{...r,className:`${x["tooltip-message-container"]} ${n==="closing"&&x.closing}`,style:o,children:[g.jsx("div",{className:x.triangle}),g.jsx("div",{className:j(`${x["tooltip-message-wrap"]} ${t}`),children:e})]}):null},S=Object.assign(ie,{Area:oe,Content:re});try{S.displayName="Tooltip",S.__docgenInfo={description:"",displayName:"Tooltip",props:{mouseEnterDelay:{defaultValue:{value:"200"},description:"",name:"mouseEnterDelay",required:!1,type:{name:"number"}}}}}catch{}export{S as T};
//# sourceMappingURL=index-2bfb62af.js.map