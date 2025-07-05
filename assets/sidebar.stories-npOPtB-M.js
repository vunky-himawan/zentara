import{j as n}from"./index-CoigKZ9V.js";import{c as B,g as se,m as oe,C as le,i as W,o as ie,a as y,u as ce,S as de,b as I,d as pe,M as he,B as ue,L as p,T as ge,e as v,D as C}from"./index-BTUYrQLv.js";import{R as L,r as O}from"./iframe-3unbPCxm.js";import"./index-DSYfY_ij.js";const Y=["wrap","nowrap","wrap-reverse"],J=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],X=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],ye=(e,t)=>{const a=t.wrap===!0?"wrap":t.wrap;return{[`${e}-wrap-${a}`]:a&&Y.includes(a)}},fe=(e,t)=>{const a={};return X.forEach(r=>{a[`${e}-align-${r}`]=t.align===r}),a[`${e}-align-stretch`]=!t.align&&!!t.vertical,a},me=(e,t)=>{const a={};return J.forEach(r=>{a[`${e}-justify-${r}`]=t.justify===r}),a};function xe(e,t){return B(Object.assign(Object.assign(Object.assign({},ye(e,t)),fe(e,t)),me(e,t)))}const be=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},Se=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},je=e=>{const{componentCls:t}=e,a={};return Y.forEach(r=>{a[`${t}-wrap-${r}`]={flexWrap:r}}),a},ve=e=>{const{componentCls:t}=e,a={};return X.forEach(r=>{a[`${t}-align-${r}`]={alignItems:r}}),a},Ce=e=>{const{componentCls:t}=e,a={};return J.forEach(r=>{a[`${t}-justify-${r}`]={justifyContent:r}}),a},we=()=>({}),ke=se("Flex",e=>{const{paddingXS:t,padding:a,paddingLG:r}=e,s=oe(e,{flexGapSM:t,flexGap:a,flexGapLG:r});return[be(s),Se(s),je(s),ve(s),Ce(s)]},we,{resetStyle:!1});var Pe=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const i=L.forwardRef((e,t)=>{const{prefixCls:a,rootClassName:r,className:s,style:w,flex:u,gap:c,children:f,vertical:h=!1,component:k="div"}=e,d=Pe(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:o,direction:P,getPrefixCls:T}=L.useContext(le),l=T("flex",a),[m,ne,te]=ke(l),re=h!=null?h:o==null?void 0:o.vertical,ae=B(s,r,o==null?void 0:o.className,l,ne,te,xe(l,e),{[`${l}-rtl`]:P==="rtl",[`${l}-gap-${c}`]:W(c),[`${l}-vertical`]:re}),R=Object.assign(Object.assign({},o==null?void 0:o.style),w);return u&&(R.flex=u),c&&!W(c)&&(R.gap=c),m(L.createElement(k,Object.assign({ref:t,className:ae,style:R},ie(d,["justify","wrap","align"])),f))});/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],_=y("camera",Te);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m7 8-4 4 4 4",key:"o5hrat"}]],Ie=y("indent-decrease",Re);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m3 8 4 4-4 4",key:"1a3j6y"}]],Oe=y("indent-increase",Le);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],N=y("layout-dashboard",Ne);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],F=y("settings",Fe),Q=O.createContext(void 0),Z=({children:e,initialCollapsed:t})=>{const[a,r]=O.useState(t||!1);return n.jsx(Q.Provider,{value:{collapsed:a,setCollapsed:r},children:e})},We=()=>{const e=O.useContext(Q);if(!e)throw new Error("useSidebarConfig must be used within a SidebarConfigProvider");return e};Z.__docgenInfo={description:"",methods:[],displayName:"SidebarConfigProvider",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialCollapsed:{required:!1,tsType:{name:"boolean"},description:""}}};const ee=({extra:e={},brandLogo:t,menuProps:a,collapsible:r=!1,collapsibleButton:s,style:w,...u})=>{const{header:c,footer:f}=e,{theme:h}=ce("Sidebar"),{background:k}=h,d=r?We():null,o=(d==null?void 0:d.collapsed)||!1,P=(d==null?void 0:d.setCollapsed)||(()=>{}),T=()=>!r||s===!1?null:s||n.jsx(ue,{type:"text","data-testid":"sidebar-collapse-button",icon:n.jsx(p,{Icon:o?Oe:Ie}),onClick:()=>{P(!o)}}),l=m=>({transition:"all 0.3s ease",opacity:m?0:1,maxHeight:m?0:100,overflow:"hidden"});return n.jsx(de,{style:{backgroundColor:k,color:h.text,padding:0,height:"100%",...w},width:u.width||280,collapsed:o,...u,collapsible:!1,children:n.jsxs(i,{vertical:!0,justify:"space-between",style:{height:"100%",padding:0},children:[(t||r)&&n.jsxs(i,{align:"center",justify:"space-between",style:{minHeight:60,width:"100%",padding:"0 12px"},children:[n.jsx(I,{flex:1,style:{...l(o)},children:!o&&t}),n.jsx(I,{flex:o?1:"none",children:T()})]}),c&&n.jsx(i,{align:"center",justify:"center",style:{width:"100%",padding:"0 12px",...l(o)},children:c}),n.jsx(pe,{direction:"vertical",size:20,style:{width:"100%",height:"100%",padding:"12px 10px"},children:n.jsx(I,{style:{flex:1,overflowY:"auto",height:"100%"},children:a&&n.jsx(he,{...a,style:{backgroundColor:"transparent",border:"none"}})})}),f&&n.jsx(i,{align:"center",justify:"center",style:{width:"100%",padding:"0 12px",...l(o)},children:f})]})})};ee.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},extra:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  header?: React.ReactNode;
  footer?: React.ReactNode;
}`,signature:{properties:[{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"footer",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"Partial<ExtraSidebarProps>"},description:"",defaultValue:{value:"{}",computed:!1}},brandLogo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},collapsibleButton:{required:!1,tsType:{name:"union",raw:"React.ReactNode | false",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"literal",value:"false"}]},description:"- `undefined`: Sidebar will render default button.\n- `false`: Sidebar will not render button.\n- ReactNode: Sidebar will render this custom button."},menuProps:{required:!1,tsType:{name:"MenuProps"},description:""}}};const{Title:g}=ge,Me={title:"@zentara/Sidebar",component:ee,argTypes:{menuProps:{control:{type:"object"}},extra:{control:{type:"object"},description:"Extra content for the sidebar, such as header or footer"},width:{control:{type:"number"},description:"Width of the sidebar"},collapsible:{control:{type:"boolean"},description:"Whether the sidebar is collapsible"}}},x={decorators:[e=>{const t=()=>n.jsx(v,{themeConfig:{extra:{components:{Sidebar:{light:{...C.light,background:"#85dcb8"}}}}},children:n.jsx("div",{style:{height:"100vh"},children:n.jsx(e,{})})});return n.jsx(t,{})}],args:{menuProps:{items:[{key:"1",icon:n.jsx(_,{size:16}),label:"Option 1"},{key:"2",icon:n.jsx(_,{size:16}),label:"Option 2"}],defaultSelectedKeys:["1"]}},parameters:{controls:{exclude:["collapsible"]}}},b={decorators:[e=>{const t=()=>n.jsx(v,{themeConfig:{extra:{components:{Sidebar:{light:{...C.light,background:"#85dcb8"}}}}},children:n.jsx("div",{style:{height:"100vh"},children:n.jsx(e,{})})});return n.jsx(t,{})}],args:{extra:{header:n.jsx(i,{align:"center",justify:"center",style:{width:"100%"},children:n.jsx(g,{level:3,children:"Custom Header"})})},menuProps:{items:[{key:"1",icon:n.jsx(p,{Icon:N}),label:"Dashboard"},{key:"2",icon:n.jsx(p,{Icon:F}),label:"Settings"}],defaultSelectedKeys:["1"]}},parameters:{controls:{exclude:["collapsible"]}}},S={decorators:[e=>{const t=()=>n.jsx(v,{themeConfig:{extra:{components:{Sidebar:{light:{...C.light,background:"#85dcb8"}}}}},children:n.jsx("div",{style:{height:"100vh"},children:n.jsx(e,{})})});return n.jsx(t,{})}],args:{extra:{footer:n.jsx(i,{align:"center",justify:"center",style:{width:"100%"},children:n.jsx(g,{level:3,children:"Your Custom Footer"})})},menuProps:{items:[{key:"1",icon:n.jsx(p,{Icon:N}),label:"Dashboard"},{key:"2",icon:n.jsx(p,{Icon:F}),label:"Settings"}],defaultSelectedKeys:["1"]}},parameters:{controls:{exclude:["collapsible"]}}},j={decorators:[e=>{const t=()=>n.jsx(v,{themeConfig:{extra:{components:{Sidebar:{light:{...C.light,background:"#85dcb8"}}}}},children:n.jsx(Z,{children:n.jsx("div",{style:{height:"100vh"},children:n.jsx(e,{})})})});return n.jsx(t,{})}],args:{collapsible:!0,brandLogo:n.jsx(i,{align:"center",justify:"space-between",style:{width:"100%",padding:"0 12px"},children:n.jsx(g,{level:3,children:"Brand Logo"})}),extra:{header:n.jsx(i,{align:"center",justify:"center",style:{width:"100%"},children:n.jsx(g,{level:4,children:"Collapsible Header"})}),footer:n.jsx(i,{align:"center",justify:"center",style:{width:"100%"},children:n.jsx(g,{level:4,children:"Collapsible Footer"})})},menuProps:{items:[{key:"1",icon:n.jsx(p,{Icon:N}),label:"Dashboard"},{key:"2",icon:n.jsx(p,{Icon:F}),label:"Settings"}],defaultSelectedKeys:["1"]}}};var D,$,E;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  decorators: [Story => {
    const Wrapper = () => <ThemeConfigProvider themeConfig={{
      extra: {
        components: {
          Sidebar: {
            light: {
              ...DEFAULT_COLORS.light,
              background: "#85dcb8"
            }
          }
        }
      }
    }}>
          <div style={{
        height: "100vh"
      }}>
            <Story />
          </div>
        </ThemeConfigProvider>;
    return <Wrapper />;
  }],
  args: {
    menuProps: {
      items: [{
        key: "1",
        icon: <Camera size={16} />,
        label: "Option 1"
      }, {
        key: "2",
        icon: <Camera size={16} />,
        label: "Option 2"
      }],
      defaultSelectedKeys: ["1"]
    } satisfies MenuProps
  },
  parameters: {
    controls: {
      exclude: ["collapsible"]
    }
  }
}`,...(E=($=x.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var M,H,q;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [Story => {
    const Wrapper = () => <ThemeConfigProvider themeConfig={{
      extra: {
        components: {
          Sidebar: {
            light: {
              ...DEFAULT_COLORS.light,
              background: "#85dcb8"
            }
          }
        }
      }
    }}>
          <div style={{
        height: "100vh"
      }}>
            <Story />
          </div>
        </ThemeConfigProvider>;
    return <Wrapper />;
  }],
  args: {
    extra: {
      header: <Flex align="center" justify="center" style={{
        width: "100%"
      }}>
          <Title level={3}>Custom Header</Title>
        </Flex>
    },
    menuProps: {
      items: [{
        key: "1",
        icon: <LucideIcon Icon={LayoutDashboard} />,
        label: "Dashboard"
      }, {
        key: "2",
        icon: <LucideIcon Icon={Settings} />,
        label: "Settings"
      }],
      defaultSelectedKeys: ["1"]
    } satisfies MenuProps
  },
  parameters: {
    controls: {
      exclude: ["collapsible"]
    }
  }
}`,...(q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var z,V,G;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  decorators: [Story => {
    const Wrapper = () => <ThemeConfigProvider themeConfig={{
      extra: {
        components: {
          Sidebar: {
            light: {
              ...DEFAULT_COLORS.light,
              background: "#85dcb8"
            }
          }
        }
      }
    }}>
          <div style={{
        height: "100vh"
      }}>
            <Story />
          </div>
        </ThemeConfigProvider>;
    return <Wrapper />;
  }],
  args: {
    extra: {
      footer: <Flex align="center" justify="center" style={{
        width: "100%"
      }}>
          <Title level={3}>Your Custom Footer</Title>
        </Flex>
    },
    menuProps: {
      items: [{
        key: "1",
        icon: <LucideIcon Icon={LayoutDashboard} />,
        label: "Dashboard"
      }, {
        key: "2",
        icon: <LucideIcon Icon={Settings} />,
        label: "Settings"
      }],
      defaultSelectedKeys: ["1"]
    } satisfies MenuProps
  },
  parameters: {
    controls: {
      exclude: ["collapsible"]
    }
  }
}`,...(G=(V=S.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var A,K,U;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: [Story => {
    const Wrapper = () => <ThemeConfigProvider themeConfig={{
      extra: {
        components: {
          Sidebar: {
            light: {
              ...DEFAULT_COLORS.light,
              background: "#85dcb8"
            }
          }
        }
      }
    }}>
          <SidebarConfigProvider>
            <div style={{
          height: "100vh"
        }}>
              <Story />
            </div>
          </SidebarConfigProvider>
        </ThemeConfigProvider>;
    return <Wrapper />;
  }],
  args: {
    collapsible: true,
    brandLogo: <Flex align="center" justify="space-between" style={{
      width: "100%",
      padding: "0 12px"
    }}>
        <Title level={3}>Brand Logo</Title>
      </Flex>,
    extra: {
      header: <Flex align="center" justify="center" style={{
        width: "100%"
      }}>
          <Title level={4}>Collapsible Header</Title>
        </Flex>,
      footer: <Flex align="center" justify="center" style={{
        width: "100%"
      }}>
          <Title level={4}>Collapsible Footer</Title>
        </Flex>
    },
    menuProps: {
      items: [{
        key: "1",
        icon: <LucideIcon Icon={LayoutDashboard} />,
        label: "Dashboard"
      }, {
        key: "2",
        icon: <LucideIcon Icon={Settings} />,
        label: "Settings"
      }],
      defaultSelectedKeys: ["1"]
    } satisfies MenuProps
  }
}`,...(U=(K=j.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const He=["Default","WithHeader","WithFooter","WithCollapsible"];export{x as Default,j as WithCollapsible,S as WithFooter,b as WithHeader,He as __namedExportsOrder,Me as default};
