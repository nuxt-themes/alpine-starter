import k from"./ArticlesListItem.d4dd1aeb.js";import w from"./ProseA.1836f0a6.js";import v from"./ProseCodeInline.5000981e.js";import{u as A}from"./asyncData.5c57864c.js";import{a as I,w as S,b as g,u as n,o as a,e as r,f as o,h as i,F as C,r as b,i as e,j as u,p as B,k as L,q as N,l as V,c as q,m as F}from"./entry.d3bfefe5.js";import"./date.824a539b.js";const P=t=>(B("data-v-685376b2"),t=t(),L(),t),T={key:0,class:"articles-list"},j={class:"featured"},D={class:"layout"},E={key:1,class:"tour"},Y=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),z=I({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const d=t,{data:m}=([s,l]=S(async()=>A("articles",async()=>await N(V(d.path)).sort({date:-1}).find())),s=await s,l(),s),c=g(()=>m.value||[]);return(G,H)=>{var p;const _=k,h=w,f=v;return(p=n(c))!=null&&p.length?(a(),r("div",T,[o("div",j,[i(_,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",D,[(a(!0),r(C,null,b(n(c).slice(1),(y,x)=>(a(),q(_,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",E,[Y,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),U=F(z,[["__scopeId","data-v-685376b2"]]);export{U as default};
