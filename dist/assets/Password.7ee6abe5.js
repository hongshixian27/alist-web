import{d as i,u,f as e,bf as c,I as g,_ as p,J as d,bQ as m,a0 as o,bg as h,bc as a,B as s,W as f}from"./index.a4f110cd.js";import{a as $}from"./Layout.c1c45c3b.js";import{L as b}from"./index.a28244a2.js";import"./index.08156a2f.js";import"./Markdown.4f8bca41.js";import"./api.ebc64790.js";import"./useUtil.d98d4b2b.js";import"./index.b07326d9.js";import"./FolderTree.703bdc7f.js";const B=()=>{const t=i(),{refresh:n}=$(),{back:l}=u();return e(f,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(c,{get children(){return t("home.input_password")}}),e(g,{type:"password",get value(){return p()},get background(){return d("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(h,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:b,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{B as default};
