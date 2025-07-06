import{j as e}from"./index-BObUwBx3.js";import{F as u,T as q,I as h}from"./index-Cro9UevE.js";import{T as j}from"./index-DT7OBxPM.js";import"./iframe-B8rc_2T8.js";import"./index-ButlfqZE.js";const x=({element:s,label:o,name:r,rules:i,required:a})=>e.jsx(u.Item,{label:o,name:r,rules:i,required:a,layout:"vertical",children:s}),T=({featuresConfig:s,label:o,name:r,required:i,rules:a})=>e.jsx(u.Item,{name:r,label:o,layout:"vertical",rules:a,required:i,children:e.jsx(u.Item,{noStyle:!0,shouldUpdate:(d,m)=>d[r]!==m[r],children:({getFieldValue:d,setFieldsValue:m})=>e.jsx(q,{content:d(r),onChange:y=>m({[r]:y}),featuresConfig:s})})});x.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},element:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rules:{required:!1,tsType:{name:"Array",elements:[{name:"Rule"}],raw:"Rule[]"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"FormTextEditor",props:{featuresConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  image?: ImageFeatureConfig;
}`,signature:{properties:[{key:"image",value:{name:"intersection",raw:`UploadProps & {
  extractUrlFromResponse?: (response: unknown) => string;
}`,elements:[{name:"UploadProps"},{name:"signature",type:"object",raw:`{
  extractUrlFromResponse?: (response: unknown) => string;
}`,signature:{properties:[{key:"extractUrlFromResponse",value:{name:"signature",type:"function",raw:"(response: unknown) => string",signature:{arguments:[{type:{name:"unknown"},name:"response"}],return:{name:"string"}},required:!1}}]}}],required:!1}}]}},description:""}}};const v={title:"@zentara/FormField"},t={render:()=>e.jsx(x,{element:e.jsx(h,{}),label:"Form Field",name:"formField",rules:[{required:!0,message:"This field is required"}],required:!0})},n={render:()=>e.jsx(j,{children:e.jsx(T,{name:"description",label:"Description",required:!0})})};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <FormField element={<Input />} label="Form Field" name="formField" rules={[{
    required: true,
    message: "This field is required"
  }]} required />
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,f,F;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ThemeConfigProvider>
      <FormTextEditor name="description" label="Description" required />
    </ThemeConfigProvider>
}`,...(F=(f=n.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const k=["Default","FormTextEditorDefault"];export{t as Default,n as FormTextEditorDefault,k as __namedExportsOrder,v as default};
