import{g as x}from"./iframe-B8rc_2T8.js";import{r as R}from"./index-ButlfqZE.js";function d(s,u){for(var o=0;o<u.length;o++){const t=u[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in s)){const e=Object.getOwnPropertyDescriptor(t,r);e&&Object.defineProperty(s,r,e.get?e:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var f={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function m(){if(p)return n;p=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(t,r,e){var a=null;if(e!==void 0&&(a=""+e),r.key!==void 0&&(a=""+r.key),"key"in r){e={};for(var i in r)i!=="key"&&(e[i]=r[i])}else e=r;return r=e.ref,{$$typeof:s,type:t,key:a,ref:r!==void 0?r:null,props:e}}return n.Fragment=u,n.jsx=o,n.jsxs=o,n}var l;function v(){return l||(l=1,f.exports=m()),f.exports}var k=v(),c=R();const _=x(c),T=d({__proto__:null,default:_},[c]);export{_ as H,T as R,k as j,c as r};
