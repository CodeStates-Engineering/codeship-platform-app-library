import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as g}from"./index-61bf1805.js";import"./index-cd606f41.js";import"./index-3b874023.js";import{F as l}from"./index-285c8742.js";import{X as y}from"./x-06d309c3.js";import{B as c}from"./index-ff9907f0.js";import"./_commonjsHelpers-de833af9.js";import"./index-f746e559.js";import"./Compatibility-d1e3055b.js";import"./useValidate-151d9b0b.js";import"./cleanClassName-cdc1ff81.js";import"./index-f9399702.js";import"./index-8d47fad6.js";import"./index-5ac2aed5.js";import"./index-2801d3c9.js";import"./index-2f6fdfd7.js";import"./index-6767a2d5.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-ad039625.js";import"./index-e6fc3cfe.js";import"./index-de9c7388.js";import"./useSubscribedState-dbc08c5d.js";import"./_Uint8Array-416ed47b.js";import"./chevron-down-2f1d20ed.js";import"./index-ac366c56.js";import"./index-751f0006.js";import"./index-4c4270e7.js";import"./index-33edcd0f.js";import"./index-3b9a45ba.js";import"./index-719b0226.js";import"./index-22199ab1.js";import"./index-80889af2.js";import"./index-4b0375af.js";import"./index-4725194c.js";import"./index-60af0cbf.js";import"./DUMMY-096d32b1.js";import"./index-0c72020f.js";import"./index-1a80ed02.js";import"./index-6142e748.js";import"./index-93775688.js";import"./index-834e33dc.js";const o={"action-floating-modal-container":"_action-floating-modal-container_ywg5y_461","action-count":"_action-count_ywg5y_467","action-count-circle":"_action-count-circle_ywg5y_475","action-count-text":"_action-count-text_ywg5y_487","fade-in":"_fade-in_ywg5y_1","fade-out":"_fade-out_ywg5y_1","shake-horizontal":"_shake-horizontal_ywg5y_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_ywg5y_1","slide-in-fwd-center":"_slide-in-fwd-center_ywg5y_1","scale-in-center":"_scale-in-center_ywg5y_1","slide-in-right":"_slide-in-right_ywg5y_1","slide-in-left":"_slide-in-left_ywg5y_1","slide-out-right":"_slide-out-right_ywg5y_1","slide-out-left":"_slide-out-left_ywg5y_1","scale-in-top":"_scale-in-top_ywg5y_1","scale-out-top":"_scale-out-top_ywg5y_1","swing-in-top-fwd":"_swing-in-top-fwd_ywg5y_1","fade-in-top":"_fade-in-top_ywg5y_1","fade-out-top":"_fade-out-top_ywg5y_1","fade-in-bottom":"_fade-in-bottom_ywg5y_1","fade-out-bottom":"_fade-out-bottom_ywg5y_1","scale-out-horizontal":"_scale-out-horizontal_ywg5y_1"},a=({count:e=0,opened:r,onClose:n,children:m,className:_})=>t.jsxs(l,{opened:r,className:_,children:[t.jsx(l.Body,{children:t.jsxs("div",{className:o["action-floating-modal-container"],children:[t.jsxs("div",{className:o["action-count"],children:[t.jsx("span",{className:o["action-count-circle"],children:e})," ",t.jsx("span",{className:o["action-count-text"],children:"선택됨"})]}),m]})}),t.jsx(l.Tail,{children:t.jsx("div",{style:{display:"flex",alignSelf:"center"},children:t.jsx(c,{icon:t.jsx(y,{}),theme:"bluish-gray700/0",size:"small3x",onClick:n})})})]});try{a.displayName="FloatingActionModal",a.__docgenInfo={description:"",displayName:"FloatingActionModal",props:{count:{defaultValue:{value:"0"},description:"",name:"count",required:!1,type:{name:"number"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const at={title:"organisms/FloatingActionModal",component:a,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%"},children:t.jsx(e,{})})]},i={render:e=>{const[r,n]=g.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{n(!0)},children:"open floating modal"}),t.jsx(a,{...e,opened:r,onClose:()=>n(!1),children:t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[t.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),t.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"})]})})]})}};var s,d,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [opened, setOpened] = useState(false);
    return <>
        <Button onClick={() => {
        setOpened(true);
      }}>
          open floating modal
        </Button>

        <FloatingActionModal {...args} opened={opened} onClose={() => setOpened(false)}>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '16px',
          padding: '0 24px'
        }}>
            <div style={{
            padding: '3px 0',
            height: '10px',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center'
          }}>
              리스트2
            </div>
            <div style={{
            padding: '3px 0',
            height: '10px',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center'
          }}>
              리스트3
            </div>
          </div>
        </FloatingActionModal>
      </>;
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const rt=["Default"];export{i as Default,rt as __namedExportsOrder,at as default};
//# sourceMappingURL=index.stories-7b8f8d1a.js.map
