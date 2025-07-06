import{j as e}from"./index-BObUwBx3.js";import{c as Z,g as ce,m as de,C as pe,i as _,o as he,a as f,u as ue,S as ge,b as O,d as ye,M as fe,B as xe,L as i,e as me,T as x,D as m}from"./index-DT7OBxPM.js";import{R as N,r as W}from"./iframe-B8rc_2T8.js";import"./index-ButlfqZE.js";const ee=["wrap","nowrap","wrap-reverse"],ne=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],te=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],be=(n,t)=>{const a=t.wrap===!0?"wrap":t.wrap;return{[`${n}-wrap-${a}`]:a&&ee.includes(a)}},je=(n,t)=>{const a={};return te.forEach(r=>{a[`${n}-align-${r}`]=t.align===r}),a[`${n}-align-stretch`]=!t.align&&!!t.vertical,a},Se=(n,t)=>{const a={};return ne.forEach(r=>{a[`${n}-justify-${r}`]=t.justify===r}),a};function ve(n,t){return Z(Object.assign(Object.assign(Object.assign({},be(n,t)),je(n,t)),Se(n,t)))}const Ce=n=>{const{componentCls:t}=n;return{[t]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},we=n=>{const{componentCls:t}=n;return{[t]:{"&-gap-small":{gap:n.flexGapSM},"&-gap-middle":{gap:n.flexGap},"&-gap-large":{gap:n.flexGapLG}}}},ke=n=>{const{componentCls:t}=n,a={};return ee.forEach(r=>{a[`${t}-wrap-${r}`]={flexWrap:r}}),a},Pe=n=>{const{componentCls:t}=n,a={};return te.forEach(r=>{a[`${t}-align-${r}`]={alignItems:r}}),a},Te=n=>{const{componentCls:t}=n,a={};return ne.forEach(r=>{a[`${t}-justify-${r}`]={justifyContent:r}}),a},Ie=()=>({}),Le=ce("Flex",n=>{const{paddingXS:t,padding:a,paddingLG:r}=n,o=de(n,{flexGapSM:t,flexGap:a,flexGapLG:r});return[Ce(o),we(o),ke(o),Pe(o),Te(o)]},Ie,{resetStyle:!1});var Re=function(n,t){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(a[r[o]]=n[r[o]]);return a};const l=N.forwardRef((n,t)=>{const{prefixCls:a,rootClassName:r,className:o,style:T,flex:y,gap:d,children:b,vertical:u=!1,component:I="div"}=n,p=Re(n,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:s,direction:L,getPrefixCls:R}=N.useContext(pe),c=R("flex",a),[j,oe,se]=Le(c),le=u!=null?u:s==null?void 0:s.vertical,ie=Z(o,r,s==null?void 0:s.className,c,oe,se,ve(c,n),{[`${c}-rtl`]:L==="rtl",[`${c}-gap-${d}`]:_(d),[`${c}-vertical`]:le}),F=Object.assign(Object.assign({},s==null?void 0:s.style),T);return y&&(F.flex=y),d&&!_(d)&&(F.gap=d),j(N.createElement(I,Object.assign({ref:t,className:ie,style:F},he(p,["justify","wrap","align"])),b))});/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],$=f("camera",Fe);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m7 8-4 4 4 4",key:"o5hrat"}]],Ne=f("indent-decrease",Oe);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m3 8 4 4-4 4",key:"1a3j6y"}]],De=f("indent-increase",We);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],P=f("layout-dashboard",_e);/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],g=f("settings",$e),re=W.createContext(void 0),D=({children:n,initialCollapsed:t})=>{const[a,r]=W.useState(t||!1);return e.jsx(re.Provider,{value:{collapsed:a,setCollapsed:r},children:n})},Me=()=>{const n=W.useContext(re);if(!n)throw new Error("useSidebarConfig must be used within a SidebarConfigProvider");return n};D.__docgenInfo={description:"",methods:[],displayName:"SidebarConfigProvider",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialCollapsed:{required:!1,tsType:{name:"boolean"},description:""}}};const ae=({extra:n={},brandLogo:t,menuProps:a,collapsible:r=!1,collapsibleButton:o,style:T,...y})=>{const{header:d,footer:b}=n,{theme:u}=ue("Sidebar"),{background:I}=u,p=r?Me():null,s=(p==null?void 0:p.collapsed)||!1,L=(p==null?void 0:p.setCollapsed)||(()=>{}),R=()=>!r||o===!1?null:o||e.jsx(xe,{type:"text","data-testid":"sidebar-collapse-button",icon:e.jsx(i,{Icon:s?De:Ne}),onClick:()=>{L(!s)}}),c=j=>({transition:"all 0.3s ease",opacity:j?0:1,maxHeight:j?0:100,overflow:"hidden"});return e.jsx(ge,{style:{backgroundColor:I,color:u.text,padding:0,height:"100%",...T},width:y.width||280,collapsed:s,...y,collapsible:!1,children:e.jsxs(l,{vertical:!0,justify:"space-between",style:{height:"100%",padding:0},children:[(t||r)&&e.jsxs(l,{align:"center",justify:"space-between",style:{minHeight:60,width:"100%",padding:"0 12px"},children:[e.jsx(O,{flex:1,style:{...c(s)},children:!s&&t}),e.jsx(O,{flex:s?1:"none",children:R()})]}),d&&e.jsx(l,{align:"center",justify:"center",style:{width:"100%",padding:"0 12px",...c(s)},children:d}),e.jsx(ye,{direction:"vertical",size:20,style:{width:"100%",height:"100%",padding:"12px 10px"},children:e.jsx(O,{style:{flex:1,overflowY:"auto",height:"100%"},children:a&&e.jsx(fe,{mode:"inline",...a,style:{backgroundColor:"transparent",border:"none"}})})}),b&&e.jsx(l,{align:"center",justify:"center",style:{width:"100%",padding:"0 12px",...c(s)},children:b})]})})};ae.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},extra:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  header?: React.ReactNode;
  footer?: React.ReactNode;
}`,signature:{properties:[{key:"header",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"footer",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"Partial<ExtraSidebarProps>"},description:"",defaultValue:{value:"{}",computed:!1}},brandLogo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},collapsibleButton:{required:!1,tsType:{name:"union",raw:"React.ReactNode | false",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"literal",value:"false"}]},description:"- `undefined`: Sidebar will render default button.\n- `false`: Sidebar will not render button.\n- ReactNode: Sidebar will render this custom button."},menuProps:{required:!1,tsType:{name:"MenuProps"},description:""}}};const{Title:h}=me,ze={title:"@zentara/Sidebar",component:ae,argTypes:{menuProps:{control:{type:"object"}},extra:{control:{type:"object"},description:"Extra content for the sidebar, such as header or footer"},width:{control:{type:"number"},description:"Width of the sidebar"},collapsible:{control:{type:"boolean"},description:"Whether the sidebar is collapsible"}}},S={decorators:[n=>{const t=()=>e.jsx(x,{themeConfig:{extra:{components:{Sidebar:{light:{...m.light,background:"#85dcb8"}}}}},children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{})})});return e.jsx(t,{})}],args:{menuProps:{items:[{key:"1",icon:e.jsx($,{size:16}),label:"Option 1"},{key:"2",icon:e.jsx($,{size:16}),label:"Option 2"}],defaultSelectedKeys:["1"]}},parameters:{controls:{exclude:["collapsible"]}}},v={decorators:[n=>{const t=()=>e.jsx(x,{themeConfig:{extra:{components:{Sidebar:{light:{...m.light,background:"#85dcb8"}}}}},children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{})})});return e.jsx(t,{})}],args:{extra:{header:e.jsx(l,{align:"center",justify:"center",style:{width:"100%"},children:e.jsx(h,{level:3,children:"Custom Header"})})},menuProps:{items:[{key:"1",icon:e.jsx(i,{Icon:P}),label:"Dashboard"},{key:"2",icon:e.jsx(i,{Icon:g}),label:"Settings"}],defaultSelectedKeys:["1"]}},parameters:{controls:{exclude:["collapsible"]}}},C={decorators:[n=>{const t=()=>e.jsx(x,{themeConfig:{extra:{components:{Sidebar:{light:{...m.light,background:"#85dcb8"}}}}},children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{})})});return e.jsx(t,{})}],args:{extra:{footer:e.jsx(l,{align:"center",justify:"center",style:{width:"100%"},children:e.jsx(h,{level:3,children:"Your Custom Footer"})})},menuProps:{items:[{key:"1",icon:e.jsx(i,{Icon:P}),label:"Dashboard"},{key:"2",icon:e.jsx(i,{Icon:g}),label:"Settings"}],defaultSelectedKeys:["1"]}},parameters:{controls:{exclude:["collapsible"]}}},w={decorators:[n=>{const t=()=>e.jsx(x,{themeConfig:{extra:{components:{Sidebar:{light:{...m.light,background:"#85dcb8"}}}}},children:e.jsx(D,{children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{})})})});return e.jsx(t,{})}],args:{collapsible:!0,brandLogo:e.jsx(l,{align:"center",justify:"space-between",style:{width:"100%",padding:"0 12px"},children:e.jsx(h,{level:3,children:"Brand Logo"})}),extra:{header:e.jsx(l,{align:"center",justify:"center",style:{width:"100%"},children:e.jsx(h,{level:4,children:"Collapsible Header"})}),footer:e.jsx(l,{align:"center",justify:"center",style:{width:"100%"},children:e.jsx(h,{level:4,children:"Collapsible Footer"})})},menuProps:{items:[{key:"1",icon:e.jsx(i,{Icon:P}),label:"Dashboard"},{key:"2",icon:e.jsx(i,{Icon:g}),label:"Settings"}],defaultSelectedKeys:["1"]}}},k={decorators:[n=>{const t=()=>e.jsx(x,{themeConfig:{extra:{components:{Sidebar:{light:{...m.light,background:"#85dcb8"}}}}},children:e.jsx(D,{children:e.jsx("div",{style:{height:"100vh"},children:e.jsx(n,{})})})});return e.jsx(t,{})}],args:{collapsible:!0,brandLogo:e.jsx(l,{align:"center",justify:"space-between",style:{width:"100%",padding:"0 12px"},children:e.jsx(h,{level:3,children:"Brand Logo"})}),extra:{header:e.jsx(l,{align:"center",justify:"center",style:{width:"100%"},children:e.jsx(h,{level:4,children:"Collapsible Header"})}),footer:e.jsx(l,{align:"center",justify:"center",style:{width:"100%"},children:e.jsx(h,{level:4,children:"Collapsible Footer"})})},menuProps:{items:[{key:"1",icon:e.jsx(i,{Icon:P}),label:"Dashboard"},{key:"2",icon:e.jsx(i,{Icon:g}),label:"Settings",children:[{key:"2-1",icon:e.jsx(i,{Icon:g}),label:"Sub Option 1"},{key:"2-2",icon:e.jsx(i,{Icon:g}),label:"Sub Option 2"}]}],defaultSelectedKeys:["1"]}}};var M,E,H;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(E=S.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var q,G,z;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(G=v.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var V,A,K;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(K=(A=C.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var B,U,Y;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(Y=(U=w.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,X,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        label: "Settings",
        children: [{
          key: "2-1",
          icon: <LucideIcon Icon={Settings} />,
          label: "Sub Option 1"
        }, {
          key: "2-2",
          icon: <LucideIcon Icon={Settings} />,
          label: "Sub Option 2"
        }]
      }],
      defaultSelectedKeys: ["1"]
    } satisfies MenuProps
  }
}`,...(Q=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};const Ve=["Default","WithHeader","WithFooter","WithCollapsible","WithGroupedMenu"];export{S as Default,w as WithCollapsible,C as WithFooter,k as WithGroupedMenu,v as WithHeader,Ve as __namedExportsOrder,ze as default};
