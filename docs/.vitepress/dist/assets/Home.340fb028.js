import{_ as l,d as u,u as k,b as _,e,o,c as a,f as i,w as T,g as r,t as d,h as x,N as y,F as b,r as F,i as I,j as v,k as g}from"./app.071537ff.js";const L={key:0,class:"home-hero"},A={key:0,class:"figure"},B=["src","alt"],C={key:1,class:"tagline"},N=u({setup(h){const{site:s,frontmatter:t}=k(),c=_(()=>{const{heroImage:p,heroText:n,tagline:f,actionLink:$,actionText:H}=t.value;return p||n||f||$&&H});_(()=>t.value.heroText||s.value.title);const m=_(()=>t.value.tagline||s.value.description);return(p,n)=>e(c)?(o(),a("header",L,[e(t).heroImage?(o(),a("figure",A,[i("img",{class:"image",src:e(T)(e(t).heroImage),alt:e(t).heroAlt},null,8,B)])):r("v-if",!0),r(' <h1 v-if="heroText" id="main-title" class="title">{{ heroText }}</h1> '),e(m)?(o(),a("p",C,d(e(m)),1)):r("v-if",!0),e(t).actionLink&&e(t).actionText?(o(),x(y,{key:2,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("v-if",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(y,{key:3,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});var w=l(N,[["__scopeId","data-v-bd8bd1f6"]]);const V={key:0,class:"home-features"},j={class:"wrapper"},D={class:"container"},S={class:"features"},E={key:0,class:"title"},q={key:1,class:"details"},z=u({setup(h){const{frontmatter:s}=k(),t=_(()=>s.value.features&&s.value.features.length>0),c=_(()=>s.value.features?s.value.features:[]);return(m,p)=>e(t)?(o(),a("div",V,[i("div",j,[i("div",D,[i("div",S,[(o(!0),a(b,null,F(e(c),(n,f)=>(o(),a("section",{key:f,class:"feature"},[n.title?(o(),a("h2",E,d(n.title),1)):r("v-if",!0),n.details?(o(),a("p",q,d(n.details),1)):r("v-if",!0)]))),128))])])])])):r("v-if",!0)}});var G=l(z,[["__scopeId","data-v-073cecbf"]]);const J={key:0,class:"footer"},K={class:"container"},M={class:"text"},O=u({setup(h){const{frontmatter:s}=k();return(t,c)=>e(s).footer?(o(),a("footer",J,[i("div",K,[i("p",M,d(e(s).footer),1)])])):r("v-if",!0)}});var P=l(O,[["__scopeId","data-v-b2b89dd2"]]);const Q={class:"home","aria-labelledby":"main-title"},R={class:"home-content"},U=u({setup(h){return(s,t)=>{const c=I("Content");return o(),a("main",Q,[v(w),g(s.$slots,"hero",{},void 0,!0),v(G),i("div",R,[v(c)]),g(s.$slots,"features",{},void 0,!0),v(P),g(s.$slots,"footer",{},void 0,!0)])}}});var X=l(U,[["__scopeId","data-v-487dd3b8"]]);export{X as default};
