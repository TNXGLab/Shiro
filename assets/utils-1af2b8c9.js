import{r as u,j as c,_ as k,c as ye,g as Ye}from"./index-f4cc687e.js";import{i as ze,$ as Ce,g as ke,D as Le,h as Te,j as Fe,d as b,b as S,l as Ne}from"./LinkCard-3e255b66.js";import{a as y,d as se,u as ae,s as $e,f as Ee,g as K,j as Oe}from"./Divider-1628639e.js";import{c as Re}from"./Gallery-d88b7587.js";import{A as he}from"./Collapse-e922ca3b.js";import{m as L,d as He,b as Ie}from"./spring-ed96ee3e.js";import{d as T,b as Be}from"./Markdown-4880cfe7.js";import{c as ee}from"./helper-03e0976d.js";import{d as qe}from"./customParseFormat-a06a5822.js";var pe=Symbol.for("immer-nothing"),ce=Symbol.for("immer-draftable"),f=Symbol.for("immer-state");function _(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var D=Object.getPrototypeOf;function v(e){return!!e&&!!e[f]}function g(e){var t;return e?ge(e)||Array.isArray(e)||!!e[ce]||!!((t=e.constructor)!=null&&t[ce])||N(e)||$(e):!1}var Ge=Object.prototype.constructor.toString();function ge(e){if(!e||typeof e!="object")return!1;const t=D(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Ge}function j(e,t){F(e)===0?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function F(e){const t=e[f];return t?t.type_:Array.isArray(e)?1:N(e)?2:$(e)?3:0}function W(e,t){return F(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function xe(e,t,r){const n=F(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Ue(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function N(e){return e instanceof Map}function $(e){return e instanceof Set}function p(e){return e.copy_||e.base_}function V(e,t){if(N(e))return new Map(e);if($(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&ge(e))return D(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[f];let n=Reflect.ownKeys(r);for(let o=0;o<n.length;o++){const s=n[o],i=r[s];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[s]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[s]})}return Object.create(D(e),r)}function te(e,t=!1){return E(e)||v(e)||!g(e)||(F(e)>1&&(e.set=e.add=e.clear=e.delete=Ke),Object.freeze(e),t&&j(e,(r,n)=>te(n,!0))),e}function Ke(){_(2)}function E(e){return Object.isFrozen(e)}var We={};function x(e){const t=We[e];return t||_(0,e),t}var A;function Me(){return A}function Ve(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function le(e,t){t&&(x("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Q(e){X(e),e.drafts_.forEach(Qe),e.drafts_=null}function X(e){e===A&&(A=e.parent_)}function ue(e){return A=Ve(A,e)}function Qe(e){const t=e[f];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function de(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[f].modified_&&(Q(t),_(4)),g(e)&&(e=z(t,e),t.parent_||C(t,e)),t.patches_&&x("Patches").generateReplacementPatches_(r[f].base_,e,t.patches_,t.inversePatches_)):e=z(t,r,[]),Q(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==pe?e:void 0}function z(e,t,r){if(E(t))return t;const n=t[f];if(!n)return j(t,(o,s)=>fe(e,n,t,o,s,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return C(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let s=o,i=!1;n.type_===3&&(s=new Set(o),o.clear(),i=!0),j(s,(a,l)=>fe(e,n,o,a,l,r,i)),C(e,o,!1),r&&e.patches_&&x("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function fe(e,t,r,n,o,s,i){if(v(o)){const a=s&&t&&t.type_!==3&&!W(t.assigned_,n)?s.concat(n):void 0,l=z(e,o,a);if(xe(r,n,l),v(l))e.canAutoFreeze_=!1;else return}else i&&r.add(o);if(g(o)&&!E(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;z(e,o),(!t||!t.scope_.parent_)&&C(e,o)}}function C(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&te(t,r)}function Xe(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Me(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,s=re;r&&(o=[n],s=Y);const{revoke:i,proxy:a}=Proxy.revocable(o,s);return n.draft_=a,n.revoke_=i,a}var re={get(e,t){if(t===f)return e;const r=p(e);if(!W(r,t))return Ze(e,r,t);const n=r[t];return e.finalized_||!g(n)?n:n===q(e.base_,t)?(G(e),e.copy_[t]=J(n,e)):n},has(e,t){return t in p(e)},ownKeys(e){return Reflect.ownKeys(p(e))},set(e,t,r){const n=Pe(p(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=q(p(e),t),s=o==null?void 0:o[f];if(s&&s.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Ue(r,o)&&(r!==void 0||W(e.base_,t)))return!0;G(e),Z(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return q(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,G(e),Z(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=p(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){_(11)},getPrototypeOf(e){return D(e.base_)},setPrototypeOf(){_(12)}},Y={};j(re,(e,t)=>{Y[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Y.deleteProperty=function(e,t){return Y.set.call(this,e,t,void 0)};Y.set=function(e,t,r){return re.set.call(this,e[0],t,r,e[0])};function q(e,t){const r=e[f];return(r?p(r):e)[t]}function Ze(e,t,r){var o;const n=Pe(t,r);return n?"value"in n?n.value:(o=n.get)==null?void 0:o.call(e.draft_):void 0}function Pe(e,t){if(!(t in e))return;let r=D(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=D(r)}}function Z(e){e.modified_||(e.modified_=!0,e.parent_&&Z(e.parent_))}function G(e){e.copy_||(e.copy_=V(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Je=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const s=r;r=t;const i=this;return function(l=s,...d){return i.produce(l,M=>r.call(this,M,...d))}}typeof r!="function"&&_(6),n!==void 0&&typeof n!="function"&&_(7);let o;if(g(t)){const s=ue(this),i=J(t,void 0);let a=!0;try{o=r(i),a=!1}finally{a?Q(s):X(s)}return le(s,n),de(o,s)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===pe&&(o=void 0),this.autoFreeze_&&te(o,!0),n){const s=[],i=[];x("Patches").generateReplacementPatches_(t,o,s,i),n(s,i)}return o}else _(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...a)=>this.produceWithPatches(i,l=>t(l,...a));let n,o;return[this.produce(t,r,(i,a)=>{n=i,o=a}),n,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){g(e)||_(8),v(e)&&(e=et(e));const t=ue(this),r=J(e,void 0);return r[f].isManual_=!0,X(t),r}finishDraft(e,t){const r=e&&e[f];(!r||!r.isManual_)&&_(9);const{scope_:n}=r;return le(n,t),de(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=x("Patches").applyPatches_;return v(e)?n(e,t):this.produce(e,o=>n(o,t))}};function J(e,t){const r=N(e)?x("MapSet").proxyMap_(e,t):$(e)?x("MapSet").proxySet_(e,t):Xe(e,t);return(t?t.scope_:Me()).drafts_.push(r),r}function et(e){return v(e)||_(10,e),De(e)}function De(e){if(!g(e)||E(e))return e;const t=e[f];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=V(e,t.scope_.immer_.useStrictShallowCopy_)}else r=V(e,!0);return j(r,(n,o)=>{xe(r,n,De(o))}),t&&(t.finalized_=!1),r}var m=new Je,tt=m.produce;m.produceWithPatches.bind(m);m.setAutoFreeze.bind(m);m.setUseStrictShallowCopy.bind(m);m.applyPatches.bind(m);m.createDraft.bind(m);m.finishDraft.bind(m);let rt=Object.freeze([]),nt=e=>{let t=u.useRef(!1);!t.current&&(t.current=!0,e==null||e())},ve=()=>{var e;let t=u.createContext(null),r=y(null),n=u.memo(o=>{var s;let{data:i,children:a}=o,l=(s=u.useContext(t))!==null&&s!==void 0?s:r,d=se(l);return nt(()=>{d(i)}),u.useEffect(()=>{d(i)},[i]),u.useEffect(()=>(d(i),()=>{d(null)}),[]),a});return n.displayName="ModelDataProvider",{ModelDataAtomProvider:o=>{let{children:s,overrideAtom:i}=o;return c.jsx(t.Provider,{value:i??r,children:s})},ModelDataProvider:n,useModelDataSelector:(o,s)=>{var i;let a=(i=u.useContext(t))!==null&&i!==void 0?i:r,l=u.useCallback(d=>d?o(d):null,s||rt);return ae($e(a,l))},useSetModelData:()=>se((e=u.useContext(t))!==null&&e!==void 0?e:r),useGetModelData:()=>{var o;let s=(o=u.useContext(t))!==null&&o!==void 0?o:r,i=Ee();return()=>i.get(s)},useModelData:()=>{var o;return ae((o=u.useContext(t))!==null&&o!==void 0?o:r)},setGlobalModelData:o=>{let s=K();s.set(r,tt(s.get(r),o))},getGlobalModelData:()=>K().get(r),ModelDataAtomContext:t}},me=K();me.get,me.set;function Ct(e){return c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:c.jsx("path",{fill:"currentColor",d:"M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"})})}const be=y(""),we=y("");y("");y(!0);y(e=>{const t=e(be),r=e(we);return t!==""&&r!==""});y(e=>{const t=e(be),r=e(we);return t!==""&&r!==""});const ot=u.createContext(!1),kt=e=>{const[t,r]=u.useState(!1),n=u.useRef(null);return u.useEffect(()=>{if(!n.current)return;const o=n.current;return o.oncopy=s=>{ze()||(s.preventDefault(),r(!0))},()=>{o.oncopy=null}},[]),u.useEffect(()=>{if(t){const o=setTimeout(()=>{r(!1)},2e3);return()=>{clearTimeout(o)}}},[t]),c.jsxs(ot.Provider,{value:!0,children:[c.jsx("div",{ref:n,children:e.children}),c.jsx(Ce,{open:!0,children:c.jsx(he,{children:t&&c.jsxs(ke,{children:[c.jsx(Le,{}),c.jsx(Te,{asChild:!0,children:c.jsxs(L.div,{className:"fixed inset-0 z-[11] flex flex-col gap-4 center",exit:{opacity:0},onClick:()=>{r(!1)},children:[c.jsx("div",{className:"pointer-events-none mt-0 text-3xl font-medium text-red-400 dark:text-orange-500",children:"注意："}),c.jsx("div",{className:"pointer-events-none my-3 text-lg text-neutral-900 text-opacity-80 dark:text-zinc-100",children:c.jsx("p",{children:"本文章为站长原创，保留版权所有，禁止复制。"})})]})})]})})})]})};T(()=>k(()=>import("./CommentRoot-90c09030.js"),["./CommentRoot-90c09030.js","./index-f4cc687e.js","./index-51e3f757.css","./Root-7e6e36a5.js","./index-e1ee7de6.js","./LinkCard-3e255b66.js","./Divider-1628639e.js","./helper-03e0976d.js","./spring-ed96ee3e.js","./index-6ba2b095.js","./env-d87a2338.js","./LinkCard-b879cb74.css","./Comments-8754f43e.js","./Markdown-4880cfe7.js","./Collapse-e922ca3b.js","./Gallery-d88b7587.js","./Gallery-554db201.css","./RichLink-f514606b.js","./Markdown-c85e0cb3.css","./infiniteQueryBehavior-fb1bfbe9.js","./FlexText-04ad5d0a.js","./PinIconToggle-68033916.js","./Comments-793b04cf.css","./mutation-bff0e130.js","./Input-ebff5649.js","./customParseFormat-a06a5822.js"],import.meta.url).then(e=>e.CommentAreaRoot));T(()=>k(()=>import("./Comments-8754f43e.js").then(e=>e.q),["./Comments-8754f43e.js","./index-f4cc687e.js","./index-51e3f757.css","./Markdown-4880cfe7.js","./helper-03e0976d.js","./spring-ed96ee3e.js","./index-6ba2b095.js","./LinkCard-3e255b66.js","./Divider-1628639e.js","./env-d87a2338.js","./LinkCard-b879cb74.css","./Collapse-e922ca3b.js","./Gallery-d88b7587.js","./Gallery-554db201.css","./RichLink-f514606b.js","./Markdown-c85e0cb3.css","./infiniteQueryBehavior-fb1bfbe9.js","./FlexText-04ad5d0a.js","./PinIconToggle-68033916.js","./Comments-793b04cf.css"],import.meta.url).then(e=>e.Comments));const Lt=T(()=>k(()=>import("./index-95e4474a.js"),["./index-95e4474a.js","./Root-7e6e36a5.js","./index-f4cc687e.js","./index-51e3f757.css","./index-e1ee7de6.js","./LinkCard-3e255b66.js","./Divider-1628639e.js","./helper-03e0976d.js","./spring-ed96ee3e.js","./index-6ba2b095.js","./env-d87a2338.js","./LinkCard-b879cb74.css","./Comments-8754f43e.js","./Markdown-4880cfe7.js","./Collapse-e922ca3b.js","./Gallery-d88b7587.js","./Gallery-554db201.css","./RichLink-f514606b.js","./Markdown-c85e0cb3.css","./infiniteQueryBehavior-fb1bfbe9.js","./FlexText-04ad5d0a.js","./PinIconToggle-68033916.js","./Comments-793b04cf.css","./mutation-bff0e130.js","./Input-ebff5649.js","./customParseFormat-a06a5822.js"],import.meta.url).then(e=>e.CommentBoxRoot));var it={exports:{}};(function(e,t){(function(r,n){e.exports=n(Fe)})(ye,function(r){function n(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=n(r),s={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(i,a){return a==="W"?i+"周":i+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(i,a){var l=100*i+a;return l<600?"凌晨":l<900?"早上":l<1100?"上午":l<1300?"中午":l<1800?"下午":"晚上"}};return o.default.locale(s,null,!0),s})})(it);var Se={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ye,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(n,o,s){var i=o.prototype,a=i.format;s.en.formats=r,i.format=function(l){l===void 0&&(l="YYYY-MM-DDTHH:mm:ssZ");var d=this.$locale().formats,M=function(H,w){return H.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(oe,I,P){var B=P&&P.toUpperCase();return I||w[P]||r[P]||w[B].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(ie,je,Ae){return je||Ae.slice(1)})})}(l,d===void 0?{}:d);return a.call(this,M)}}})})(Se);var st=Se.exports;const at=Ye(st);b.extend(qe);b.extend(at);b.locale("zh-cn");const ct=(e,t)=>b(e).format(t),U=(e,t=new Date)=>{if(!e)return"";e=new Date(e);const r=60*1e3,n=r*60,o=n*24,s=o*30,i=o*365,a=+t-+e;if(a<r){const l=Math.ceil(a/1e3);return l<=0?"刚刚":`${l} 秒前`}else return a<n?`${Math.round(a/r)} 分钟前`:a<o?`${Math.round(a/n)} 小时前`:a<s?`${Math.round(a/o)} 天前`:a<i?`${Math.round(a/s)} 个月前`:`${Math.round(a/i)} 年前`},O=e=>e,lt={root:()=>O({queryKey:["aggregation"],queryFn:async()=>S.aggregate.getAggregateData("shiro").then(e=>e.$serialized),gcTime:1e3*60*10,meta:{forceHydration:!0},staleTime:Re?1e3*60*10:void 0})};var R=(e=>(e.Home="",e.Posts="/posts",e.Post="/posts/",e.Notes="/notes",e.Note="/notes/",e.NoteTopics="/notes/topics",e.NoteTopic="/notes/topics/",e.Timelime="/timeline",e.Login="/login",e.Page="/",e.Categories="/categories",e.Category="/categories/",e.Projects="/projects",e.Project="/projects/",e.Says="/says",e.Friends="/friends",e.Thinking="/thinking",e.PageDeletd="/common/deleted",e))(R||{});function ne(e,t){let r=e;switch(e){case"/notes/":{r+=t.id,t.password&&(r+=`?password=${t.password}`);break}case"/posts/":{const n=t;r+=`${n.category}/${n.slug}`;break}case"/posts":{const n=t;r+=`?${new URLSearchParams(n).toString()}`;break}case"/timeline":{const n=t;r+=`?${new URLSearchParams(n).toString()}`;break}case"/notes/topics/":case"/categories/":case"/":{r+=t.slug;break}case"":{r="/";break}case"/projects/":{r+=t.id;break}}return r}const ut="latest",dt={byNid:(e,t)=>O({queryKey:["note",e],meta:{hydrationRoutePath:ne(R.Note,{id:e}),shouldHydration:r=>{const n=r==null?void 0:r.data;return!(n!=null&&n.secret?b(n==null?void 0:n.secret).isAfter(new Date):!1)}},queryFn:async({queryKey:r})=>{const[,n]=r;return n===ut?(await S.note.getLatest()).$serialized:{...await S.note.getNoteById(+r[1],t)}}})},ft={bySlug:e=>O({queryKey:["page",e],meta:{hydrationRoutePath:ne(R.Page,{slug:e})},queryFn:async({queryKey:t})=>{const[,r]=t;return(await S.page.getBySlug(r)).$serialized}})},mt={bySlug:(e,t)=>O({queryKey:["post",e,t],meta:{hydrationRoutePath:ne(R.Post,{category:e,slug:t})},queryFn:async({queryKey:r})=>{const[,n,o]=r;return(await S.post.getPost(n,o)).$serialized}})},Tt={aggregation:lt,note:dt,post:mt,page:ft},{ModelDataProvider:Ft,ModelDataAtomProvider:Nt,getGlobalModelData:$t,setGlobalModelData:Et,useModelDataSelector:Ot,useSetModelData:Rt}=ve(),Ht=({children:e,className:t,as:r="main"})=>c.jsx(r,{className:ee("relative bg-slate-50 dark:bg-zinc-900 md:col-start-1 lg:col-auto","-m-4 p-[2rem_1rem] md:m-0 lg:p-[30px_45px]","rounded-[0_6px_6px_0] border-zinc-200/70 shadow-sm dark:border-neutral-800 dark:shadow-[#333] lg:border","note-layout-main","min-w-0",t),children:e});function _t(e,t){const[r,n]=u.useState(e);return u.useEffect(()=>{const o=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(o)}},[e,t]),r}const It=e=>{const{children:t}=e,r=_t(t,300);return c.jsx(he,{mode:"popLayout",initial:!1,children:c.jsx(L.span,{initial:{opacity:0,y:-16},animate:{opacity:1,y:0},exit:{opacity:0,y:-16,position:"absolute"},transition:He,children:r},r)})};function yt(e=""){var t;return new URL(e,(t=Ne())==null?void 0:t.url.webUrl)}function ht(e){return h(e.title)&&h(e.slug)&&!h(e.order)}function pt(e){return h(e.title)&&h(e.slug)&&h(e.order)}function gt(e){return h(e.title)&&h(e.nid)}function xt(e){return ht(e)?e.category?`/posts/${e.category.slug}/${encodeURIComponent(e.slug)}`:(console.error("PostModel.category is missing!!!!!"),"#"):pt(e)?`/${e.slug}`:gt(e)?`/notes/${e.nid}`:"/"}function h(e){return e!=null}yt.build=xt;y({x:0,y:0});y(!1);T(()=>k(()=>import("./index-8a522fa7.js"),["./index-8a522fa7.js","./index-f4cc687e.js","./index-51e3f757.css"],import.meta.url).then(e=>e.QRCodeSVG));const Mt=y(!1),Pt=()=>Oe.get(Mt),Bt=e=>{const{from:t,to:r,initial:n,preset:o}=e,s=a=>{const{timeout:l={},duration:d=.5,animation:M={},as:H="div",delay:w=0,lcpOptimization:oe=!1,...I}=a,{enter:P=w,exit:B=w}=l,ie=L[H];return c.jsx(ie,{initial:u.useMemo(()=>oe?Pt()?n||t:!0:n||t,[]),animate:{...r,transition:{duration:d,...o||Ie,...M.enter,delay:P/1e3}},exit:{...t,transition:{duration:d,...M.exit,delay:B/1e3}},transition:{duration:d},...I,children:a.children})},i=u.memo(s);return i.displayName="MemoedTransitionView",i},qt=e=>{const[t,r]=u.useState(U(e.date)),{displayAbsoluteTimeAfterDay:n=29}=e;return u.useEffect(()=>{r(U(e.date));let o=setInterval(()=>{r(U(e.date))},1e3);return Math.abs(b(e.date).diff(new Date,"d"))>n&&(o=clearInterval(o),r(ct(e.date,"YY 年 M 月 D 日"))),()=>{o=clearInterval(o)}},[e.date,n]),c.jsx(c.Fragment,{children:t})},{ModelDataProvider:Gt,ModelDataAtomProvider:Ut,getGlobalModelData:Kt,setGlobalModelData:Wt,useModelDataSelector:Vt}=ve(),_e=({children:e,className:t,duration:r=.6})=>{const n=u.useRef(null),[o,s]=u.useState("auto");return u.useEffect(()=>{if(n.current){const i=new ResizeObserver(a=>{const l=a[0].contentRect.height;s(l)});return i.observe(n.current),()=>{i.disconnect()}}},[]),c.jsx(L.div,{className:ee("overflow-hidden",t),style:{height:o},initial:!1,animate:{height:o},transition:{duration:r},children:c.jsx("div",{ref:n,children:e})})},Qt=e=>{const{cid:t}=e,{data:r,isLoading:n,error:o}=Be({queryKey:["getSummary",t],queryFn:async({queryKey:i})=>{const[,a]=i,l=await fetch(`/api/xlog/summary?cid=${a}`,{next:{revalidate:60*10}}).then(d=>d.json());if(!l)throw new Error("请求错误");if(!l.data)throw new Error("内容暂时无法获取");return l},enabled:!!t,staleTime:1e3*60*60*24*7,retryDelay:5e3});let s=c.jsxs("div",{"data-hide-print":!0,className:ee("space-y-2 rounded-xl border border-slate-200 p-4 dark:border-neutral-800",e.className),children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx("i",{className:"icon-[mingcute--sparkles-line] mr-2 text-lg"}),"AI 生成的摘要"]}),c.jsxs(_e,{duration:.3,children:[c.jsx("div",{className:"text-base-content/85 !m-0 text-sm leading-loose",children:n?c.jsxs("div",{className:"space-y-2",children:[c.jsx("span",{className:"block h-5 w-full animate-pulse rounded-xl bg-zinc-200 dark:bg-neutral-800"}),c.jsx("span",{className:"block h-5 w-full animate-pulse rounded-xl bg-zinc-200 dark:bg-neutral-800"}),c.jsx("span",{className:"block h-5 w-full animate-pulse rounded-xl bg-zinc-200 dark:bg-neutral-800"})]}):r==null?void 0:r.data}),n&&c.jsxs("p",{className:"border-slate-200 text-right text-sm dark:border-slate-800 ",children:["(此服务由"," ",c.jsx("a",{href:"https://xlog.app",target:"_blank",rel:"noreferrer",children:"xLog"})," ","驱动)"]})]})]});return(!t||o)&&(s=null),c.jsx(_e,{duration:.2,className:"mt-4",children:s})},Xt=e=>{var t,r;return(r=(t=e==null?void 0:e.meta)==null?void 0:t.xLog)==null?void 0:r.cid};export{_e as A,kt as B,Lt as C,Ct as M,It as N,Ht as P,R,Qt as X,qt as a,Ut as b,Bt as c,Gt as d,Ot as e,ct as f,Xt as g,Nt as h,Ft as i,yt as j,tt as p,Tt as q,ne as r,Vt as u};
