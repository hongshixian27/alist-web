import{d as v,u as $,a as l,b6 as o,bw as w,bR as C,e as R,f as t,bS as I,ap as L,bd as r,n as p,a0 as T,B as u,W as _}from"./index.a4f110cd.js";import{o as x}from"./index.08156a2f.js";import{I as B}from"./SettingItem.d173f4bd.js";import{R as D}from"./ResponsiveGrid.3cfcb94b.js";import"./index.56be1839.js";import"./index.a28244a2.js";import"./item_type.be442da4.js";const q=d=>{const s=v(),{pathname:m}=$();x(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>o.get(`/admin/setting/list?group=${d.group}`)),[i,c]=w([]),a=async()=>{const e=await f();r(e,c)};a();const[S,b]=l(()=>o.post("/admin/setting/save",C(i))),[k,g]=R(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(D,{get children(){return t(I,{each:i,children:(e,F)=>t(B,L(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await o.post(`/admin/setting/delete?key=${e().key}`);g(!1),r(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||k()},get children(){return s("global.refresh")}}),t(u,{get loading(){return S()},onClick:async()=>{const e=await b();r(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{q as default};
