import{f as o,Z as s,o as n,bI as d}from"./index.a4f110cd.js";import{d as i}from"./useUtil.d98d4b2b.js";import{M as m}from"./Markdown.4f8bca41.js";import"./api.ebc64790.js";const g=()=>{const[r]=i(),a=e=>n.obj.name.endsWith(".md")?e:"```"+d(n.obj.name)+`
`+e+"\n```";return o(s,{get loading(){return r.loading},get children(){return o(m,{class:"word-wrap",get children(){var e,t;return a((t=(e=r())==null?void 0:e.content)!=null?t:"")}})}})};export{g as default};
