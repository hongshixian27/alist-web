import{f as t,a7 as n,ah as b,e as m,t as h,aF as f,W as j,aE as x,aH as $,cl as s,ak as k,m as w,br as p,af as y,ag as C,v as I,o as v,bf as M}from"./index.48af8d50.js";import{b as E}from"./Folder.47c01422.js";import{a as L,M as S}from"./Layout.8d17cb54.js";import{c as F,a as O}from"./useUtil.0881b4fa.js";import{I as z}from"./ImageWithError.8c52f7b4.js";import{O as A,g as H}from"./icon.73d78524.js";import"./index.3887091f.js";import"./api.3e1c5b51.js";import"./useTitle.3462ad9e.js";import"./Markdown.085362ed.js";import"./index.932aa3ad.js";import"./FolderTree.a3347476.js";const W=e=>{const{isHide:r}=F();if(r(e.obj)||e.obj.type!==A.IMAGE)return null;const{setPathAs:i}=L(),l=t(b,{get color(){return n()},boxSize:"$12",get as(){return H(e.obj)}}),[c,o]=m(!1),u=h(()=>f()&&(c()||e.obj.selected)),{show:d}=E({id:1}),{rawLink:g}=O();return t(S.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(j,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${n()}`}},onMouseEnter:()=>{o(!0),i(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{o(!1)},onContextMenu:a=>{x(()=>{$(!1),s(e.index,!0,!0)}),d(a,{props:e.obj})},get children(){return t(k,{w:"$full",pos:"relative",get children(){return[t(w,{get when(){return u()},get children(){return t(p,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:a=>{s(e.index,a.target.checked)}})}}),t(z,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(y,{size:"lg"})},fallbackErr:l,get src(){return g(e.obj)},loading:"lazy",onClick:()=>{C.emit("gallery",e.obj.name)}})]}})}})}})},Q=()=>t(M,{w:"$full",gap:"$1",flexWrap:"wrap",get children(){return t(I,{get each(){return v.objs},children:(e,r)=>t(W,{obj:e,get index(){return r()}})})}});export{Q as default};