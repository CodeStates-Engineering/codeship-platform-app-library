import{j as i}from"./jsx-runtime-94f6e698.js";import{r as _}from"./index-8db94870.js";import{C as D}from"./Compatibility-ff615e1c.js";import{u as B}from"./useValidate-2a0eec53.js";import{c as C}from"./ValidationContext-e5b2e92a.js";const S="_button_1dzeh_461",T="_padding_1dzeh_479",A="_icon_1dzeh_531",E="_delaying_1dzeh_573",k="_white_purple600_1dzeh_577",M="_purple600_0_1dzeh_631",e={button:S,"delayed-button":"_delayed-button_1dzeh_462",padding:T,"children-type-text":"_children-type-text_1dzeh_479","children-type-icon":"_children-type-icon_1dzeh_483","children-type-both":"_children-type-both_1dzeh_487","size-small3x":"_size-small3x_1dzeh_491","size-small":"_size-small_1dzeh_491","size-medium":"_size-medium_1dzeh_507","size-large":"_size-large_1dzeh_515","shape-default":"_shape-default_1dzeh_523","shape-round":"_shape-round_1dzeh_527","icon-direction-left":"_icon-direction-left_1dzeh_531","icon-direction-right":"_icon-direction-right_1dzeh_535","text-align-left":"_text-align-left_1dzeh_539","text-align-center":"_text-align-center_1dzeh_543","text-align-right":"_text-align-right_1dzeh_547","button-content":"_button-content_1dzeh_552",icon:A,"delay-bar":"_delay-bar_1dzeh_565",delaying:E,white_purple600:k,"white_bluish-gray800":"_white_bluish-gray800_1dzeh_604",purple600_0:M,"bluish-gray700_0":"_bluish-gray700_0_1dzeh_663","bluish-gray300_0":"_bluish-gray300_0_1dzeh_695","bluish-gray500_0":"_bluish-gray500_0_1dzeh_727","bluish-gray400_0_bluish-gray200":"_bluish-gray400_0_bluish-gray200_1dzeh_759","bluish-gray700_0_bluish-gray200":"_bluish-gray700_0_bluish-gray200_1dzeh_786","bluish-gray400_bluish-gray10_bluish-gray200":"_bluish-gray400_bluish-gray10_bluish-gray200_1dzeh_813","fade-in":"_fade-in_1dzeh_1","fade-out":"_fade-out_1dzeh_1","shake-horizontal":"_shake-horizontal_1dzeh_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1dzeh_1","slide-in-fwd-center":"_slide-in-fwd-center_1dzeh_1","scale-in-center":"_scale-in-center_1dzeh_1","slide-in-right":"_slide-in-right_1dzeh_1","slide-in-left":"_slide-in-left_1dzeh_1","slide-out-right":"_slide-out-right_1dzeh_1","slide-out-left":"_slide-out-left_1dzeh_1","scale-in-top":"_scale-in-top_1dzeh_1","scale-out-top":"_scale-out-top_1dzeh_1","swing-in-top-fwd":"_swing-in-top-fwd_1dzeh_1","fade-in-top":"_fade-in-top_1dzeh_1","fade-out-top":"_fade-out-top_1dzeh_1","fade-in-bottom":"_fade-in-bottom_1dzeh_1","fade-out-bottom":"_fade-out-bottom_1dzeh_1","scale-out-horizontal":"_scale-out-horizontal_1dzeh_1"},c=({delay:t,type:p="button",children:l,size:g="large",theme:m="white/purple600",onClick:f,disabled:u=!1,shape:y="default",iconDirection:z="left",icon:a,padding:b=!0,fontSize:v="normal",fontWeight:x=700,focusOutline:$=!0,className:w,width:s,textAlign:q="center"})=>{const[d,n]=_.useState("after"),o=_.useMemo(()=>a&&l?"both":a?"icon":"text",[a,l]);D.useLayoutEffect(()=>{!u&&t&&(n("before"),setTimeout(()=>n("delaying")),setTimeout(()=>n("after"),t))},[t,u]);const h=d==="delaying",r=d==="before"||h,V=u||r,{typographyClassName:N}=B({fontSize:v,fontWeight:x}),j=_.useMemo(()=>({width:s}),[s]);return i.jsxs("button",{type:p,className:C(`${r?e["delayed-button"]:e.button} ${N} ${$&&e["focus-outline"]} ${e[`shape-${y}`]} ${e[`size-${g}`]} ${e[`icon-direction-${z}`]} ${e[`children-type-${o}`]} ${e[m.replaceAll("/","_")]} ${b&&e.padding} ${w}
        ${o!=="icon"&&e[`text-align-${q}`]}
        `),onClick:f,disabled:V,style:j,children:[t&&r?i.jsx("div",{className:`${e["delay-bar"]} ${h&&e.delaying}`,style:{transition:`transform ${t/1e3}s linear`}}):null,l&&i.jsx("div",{className:e["button-content"],children:l}),a?i.jsx("div",{className:`${e["button-content"]} ${e.icon}`,children:a}):null]})};try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:{value:"white/purple600"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"white/purple600"'},{value:'"white/bluish-gray800"'},{value:'"purple600/0"'},{value:'"bluish-gray700/0"'},{value:'"bluish-gray300/0"'},{value:'"bluish-gray500/0"'},{value:'"bluish-gray400/0/bluish-gray200"'},{value:'"bluish-gray700/0/bluish-gray200"'},{value:'"bluish-gray400/bluish-gray10/bluish-gray200"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconDirection:{defaultValue:{value:"left"},description:"",name:"iconDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},shape:{defaultValue:{value:"default"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"default"'}]}},padding:{defaultValue:{value:"true"},description:"",name:"padding",required:!1,type:{name:"boolean"}},focusOutline:{defaultValue:{value:"true"},description:"",name:"focusOutline",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:{value:"center"},description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},fontSize:{defaultValue:{value:"normal"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small2x"'}]}},fontWeight:{defaultValue:{value:"700"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"500"},{value:"400"}]}}}}}catch{}export{c as B};
//# sourceMappingURL=index-0bac5a3e.js.map