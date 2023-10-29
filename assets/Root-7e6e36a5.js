var $e=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var R=(e,t,n)=>($e(e,t,"read from private field"),n?n.call(e):t.get(e)),fe=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},me=(e,t,n,s)=>($e(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n);var ge=(e,t,n)=>($e(e,t,"access private method"),n);import{r as c,c as wt,R as y,j as a,_ as fn}from"./index-f4cc687e.js";import{s as At}from"./index-e1ee7de6.js";import{a as Ce,b as ye,t as He,m as mn,n as hn,p as pn,o as gn}from"./LinkCard-3e255b66.js";import{u as It,a as xn,b as Cn,c as Fe,d as vn,e as it,f as bn,g as En,h as yn,i as Lt,M as wn,j as Ve,k as Rn,l as Sn,m as jn,s as ct,n as X,o as Xe,E as _n,p as Tn}from"./Comments-8754f43e.js";import{p as Pe,A as lt,j as On}from"./utils-1af2b8c9.js";import{b as re,c as Te}from"./helper-03e0976d.js";import{j as Nn,g as Je,I as Mt}from"./Gallery-d88b7587.js";import{S as kn,n as Pt,l as Dt,q as An,r as In,d as Ln,F as Ft,t as Mn}from"./Markdown-4880cfe7.js";import{g as Pn}from"./mutation-bff0e130.js";import{u as ut,j as B,a as Vt,s as Dn,h as Fn}from"./Divider-1628639e.js";import{A as Vn}from"./Collapse-e922ca3b.js";import{a as zn,e as Wn,g as Un,u as Bn,h as $n,f as Hn,i as Rt,m as De,S as St,M as qn}from"./spring-ed96ee3e.js";import{u as Kn,I as Gn}from"./Input-ebff5649.js";function Ze(e){const t=zn(()=>Wn(e)),{isStatic:n}=c.useContext(Un);if(n){const[,s]=c.useState(e);c.useEffect(()=>t.on("change",s),[])}return t}function Yn(e,t){const n=Ze(t()),s=()=>n.set(t());return s(),Bn(()=>{const r=()=>Hn.update(s,!1,!0),o=e.map(i=>i.on("change",r));return()=>{o.forEach(i=>i()),$n(s)}}),n}function Qn(e,...t){const n=e.length;function s(){let r="";for(let o=0;o<n;o++){r+=e[o];const i=t[o];i&&(r+=Rt(i)?i.get():i)}return r}return Yn(t.filter(Rt),s)}var le,U,K,se,xe,Le,_e,et,kt,Xn=(kt=class extends kn{constructor(t,n){super();fe(this,xe);fe(this,_e);fe(this,le,void 0);fe(this,U,void 0);fe(this,K,void 0);fe(this,se,void 0);me(this,U,void 0),me(this,le,t),this.setOptions(n),this.bindMethods(),ge(this,xe,Le).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var s;const n=this.options;this.options=R(this,le).defaultMutationOptions(t),Nn(n,this.options)||R(this,le).getMutationCache().notify({type:"observerOptionsUpdated",mutation:R(this,K),observer:this}),(s=R(this,K))==null||s.setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=R(this,K))==null||t.removeObserver(this)}onMutationUpdate(t){ge(this,xe,Le).call(this),ge(this,_e,et).call(this,t)}getCurrentResult(){return R(this,U)}reset(){me(this,K,void 0),ge(this,xe,Le).call(this),ge(this,_e,et).call(this)}mutate(t,n){var s;return me(this,se,n),(s=R(this,K))==null||s.removeObserver(this),me(this,K,R(this,le).getMutationCache().build(R(this,le),this.options)),R(this,K).addObserver(this),R(this,K).execute(t)}},le=new WeakMap,U=new WeakMap,K=new WeakMap,se=new WeakMap,xe=new WeakSet,Le=function(){var n;const t=((n=R(this,K))==null?void 0:n.state)??Pn();me(this,U,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},_e=new WeakSet,et=function(t){Pt.batch(()=>{var n,s,r,o,i,f,u,C;R(this,se)&&this.hasListeners()&&((t==null?void 0:t.type)==="success"?((s=(n=R(this,se)).onSuccess)==null||s.call(n,t.data,R(this,U).variables,R(this,U).context),(o=(r=R(this,se)).onSettled)==null||o.call(r,t.data,null,R(this,U).variables,R(this,U).context)):(t==null?void 0:t.type)==="error"&&((f=(i=R(this,se)).onError)==null||f.call(i,t.error,R(this,U).variables,R(this,U).context),(C=(u=R(this,se)).onSettled)==null||C.call(u,void 0,t.error,R(this,U).variables,R(this,U).context))),this.listeners.forEach(v=>{v(R(this,U))})})},kt);function Jn(e,t){const n=Dt(t),[s]=c.useState(()=>new Xn(n,e));c.useEffect(()=>{s.setOptions(e)},[s,e]);const r=c.useSyncExternalStore(c.useCallback(i=>s.subscribe(Pt.batchCalls(i)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),o=c.useCallback((i,f)=>{s.mutate(i,f).catch(Zn)},[s]);if(r.error&&An(s.options.throwOnError,[r.error]))throw r.error;return{...r,mutate:o,mutateAsync:r.mutate}}function Zn(){}typeof window<"u"&&!window.global&&(window.global=typeof wt>"u"?window:wt);var zt=Object.defineProperty,es=Object.getOwnPropertyDescriptor,ts=Object.getOwnPropertyNames,ns=Object.prototype.hasOwnProperty,ss=(e,t)=>{for(var n in t)zt(e,n,{get:t[n],enumerable:!0})},jt=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ts(t))!ns.call(e,r)&&r!==n&&zt(e,r,{get:()=>t[r],enumerable:!(s=es(t,r))||s.enumerable});return e},rs=(e,t,n)=>(jt(e,t,"default"),n&&jt(n,t,"default"));const os="Clerk: You must wrap your application in a <ClerkProvider> component.",as=e=>`Clerk: You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`,is=e=>t=>{try{return y.Children.only(e)}catch{throw new Error(as(t))}},cs=(e,t)=>(e||(e=t),typeof e=="string"&&(e=y.createElement("button",null,e)),e),ls=e=>(...t)=>{if(e&&typeof e=="function")return e(...t)},ue=()=>{},$=ue(),Me=Object,h=e=>e===$,Y=e=>typeof e=="function",oe=(e,t)=>({...e,...t}),us=e=>Y(e.then),Ae=new WeakMap;let ds=0;const Se=e=>{const t=typeof e,n=e&&e.constructor,s=n==Date;let r,o;if(Me(e)===e&&!s&&n!=RegExp){if(r=Ae.get(e),r)return r;if(r=++ds+"~",Ae.set(e,r),n==Array){for(r="@",o=0;o<e.length;o++)r+=Se(e[o])+",";Ae.set(e,r)}if(n==Me){r="#";const i=Me.keys(e).sort();for(;!h(o=i.pop());)h(e[o])||(r+=o+":"+Se(e[o])+",");Ae.set(e,r)}}else r=s?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return r},J=new WeakMap,qe={},Ie={},dt="undefined",ze=typeof window!=dt,tt=typeof document!=dt,fs=()=>ze&&typeof window.requestAnimationFrame!=dt,ce=(e,t)=>{const n=J.get(e);return[()=>!h(t)&&e.get(t)||qe,s=>{if(!h(t)){const r=e.get(t);t in Ie||(Ie[t]=r),n[5](t,oe(r,s),r||qe)}},n[6],()=>!h(t)&&t in Ie?Ie[t]:!h(t)&&e.get(t)||qe]};let nt=!0;const ms=()=>nt,[st,rt]=ze&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[ue,ue],hs=()=>{const e=tt&&document.visibilityState;return h(e)||e!=="hidden"},ps=e=>(tt&&document.addEventListener("visibilitychange",e),st("focus",e),()=>{tt&&document.removeEventListener("visibilitychange",e),rt("focus",e)}),gs=e=>{const t=()=>{nt=!0,e()},n=()=>{nt=!1};return st("online",t),st("offline",n),()=>{rt("online",t),rt("offline",n)}},xs={isOnline:ms,isVisible:hs},Cs={initFocus:ps,initReconnect:gs},_t=!y.useId,je=!ze||"Deno"in window,vs=e=>fs()?window.requestAnimationFrame(e):setTimeout(e,1),Re=je?c.useEffect:c.useLayoutEffect,Ke=typeof navigator<"u"&&navigator.connection,Tt=!je&&Ke&&(["slow-2g","2g"].includes(Ke.effectiveType)||Ke.saveData),de=e=>{if(Y(e))try{e=e()}catch{e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?Se(e):"",[e,t]};let bs=0;const ot=()=>++bs,Wt=0,Ut=1,Bt=2,Es=3;var we={__proto__:null,ERROR_REVALIDATE_EVENT:Es,FOCUS_EVENT:Wt,MUTATE_EVENT:Bt,RECONNECT_EVENT:Ut};async function $t(...e){const[t,n,s,r]=e,o=oe({populateCache:!0,throwOnError:!0},typeof r=="boolean"?{revalidate:r}:r||{});let i=o.populateCache;const f=o.rollbackOnError;let u=o.optimisticData;const C=o.revalidate!==!1,v=E=>typeof f=="function"?f(E):f!==!1,b=o.throwOnError;if(Y(n)){const E=n,x=[],w=t.keys();for(const A of w)!/^\$(inf|sub)\$/.test(A)&&E(t.get(A)._k)&&x.push(A);return Promise.all(x.map(l))}return l(n);async function l(E){const[x]=de(E);if(!x)return;const[w,A]=ce(t,x),[d,G,T,O]=J.get(t),I=d[x],z=()=>C&&(delete T[x],delete O[x],I&&I[0])?I[0](Bt).then(()=>w().data):w().data;if(e.length<3)return z();let m=s,p;const _=ot();G[x]=[_,0];const g=!h(u),L=w(),M=L.data,k=L._c,P=h(k)?M:k;if(g&&(u=Y(u)?u(P,M):u,A({data:u,_c:P})),Y(m))try{m=m(P)}catch(H){p=H}if(m&&us(m))if(m=await m.catch(H=>{p=H}),_!==G[x][0]){if(p)throw p;return m}else p&&g&&v(p)&&(i=!0,m=P,A({data:m,_c:$}));i&&(p||(Y(i)&&(m=i(m,P)),A({data:m,error:$,_c:$}))),G[x][1]=ot();const F=await z();if(A({_c:$}),p){if(b)throw p;return}return i?F:m}}const Ot=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},Ht=(e,t)=>{if(!J.has(e)){const n=oe(Cs,t),s={},r=$t.bind($,e);let o=ue;const i={},f=(v,b)=>{const l=i[v]||[];return i[v]=l,l.push(b),()=>l.splice(l.indexOf(b),1)},u=(v,b,l)=>{e.set(v,b);const E=i[v];if(E)for(const x of E)x(b,l)},C=()=>{if(!J.has(e)&&(J.set(e,[s,{},{},{},r,u,f]),!je)){const v=n.initFocus(setTimeout.bind($,Ot.bind($,s,Wt))),b=n.initReconnect(setTimeout.bind($,Ot.bind($,s,Ut)));o=()=>{v&&v(),b&&b(),J.delete(e)}}};return C(),[e,r,C,o]}return[e,J.get(e)[4]]},ys=(e,t,n,s,r)=>{const o=n.errorRetryCount,i=r.retryCount,f=~~((Math.random()+.5)*(1<<(i<8?i:8)))*n.errorRetryInterval;!h(o)&&i>o||setTimeout(s,f,r)},ws=(e,t)=>Se(e)==Se(t),[We,qt]=Ht(new Map),Kt=oe({onLoadingSlow:ue,onSuccess:ue,onError:ue,onErrorRetry:ys,onDiscarded:ue,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Tt?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Tt?5e3:3e3,compare:ws,isPaused:()=>!1,cache:We,mutate:qt,fallback:{}},xs),Gt=(e,t)=>{const n=oe(e,t);if(t){const{use:s,fallback:r}=e,{use:o,fallback:i}=t;s&&o&&(n.use=s.concat(o)),r&&i&&(n.fallback=oe(r,i))}return n},at=c.createContext({}),Rs=e=>{const{value:t}=e,n=c.useContext(at),s=Y(t),r=c.useMemo(()=>s?t(n):t,[s,n,t]),o=c.useMemo(()=>s?r:Gt(n,r),[s,n,r]),i=r&&r.provider,f=c.useRef($);i&&!f.current&&(f.current=Ht(i(o.cache||We),r));const u=f.current;return u&&(o.cache=u[0],o.mutate=u[1]),Re(()=>{if(u)return u[2]&&u[2](),u[3]},[]),c.createElement(at.Provider,oe(e,{value:o}))},Yt=ze&&window.__SWR_DEVTOOLS_USE__,Ss=Yt?window.__SWR_DEVTOOLS_USE__:[],js=()=>{Yt&&(window.__SWR_DEVTOOLS_REACT__=y)},Qt=e=>Y(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],Xt=()=>oe(Kt,c.useContext(at)),_s=(e,t)=>{const[n,s]=de(e),[,,,r]=J.get(We);if(r[n])return r[n];const o=t(s);return r[n]=o,o},Ts=e=>(t,n,s)=>e(t,n&&((...o)=>{const[i]=de(t),[,,,f]=J.get(We),u=f[i];return h(u)?n(...o):(delete f[i],u)}),s),Os=Ss.concat(Ts),Ns=e=>function(...n){const s=Xt(),[r,o,i]=Qt(n),f=Gt(s,i);let u=e;const{use:C}=f,v=(C||[]).concat(Os);for(let b=v.length;b--;)u=v[b](u);return u(r,o||f.fetcher||null,f)},ks=(e,t,n)=>{const s=t[e]||(t[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r>=0&&(s[r]=s[s.length-1],s.pop())}},As=(e,t)=>(...n)=>{const[s,r,o]=Qt(n),i=(o.use||[]).concat(t);return e(s,r,{...o,use:i})};js();const Is=e=>de(e)[0],Nt=y.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)}),Ge={dedupe:!0},Ls=(e,t,n)=>{const{cache:s,compare:r,suspense:o,fallbackData:i,revalidateOnMount:f,revalidateIfStale:u,refreshInterval:C,refreshWhenHidden:v,refreshWhenOffline:b,keepPreviousData:l}=n,[E,x,w,A]=J.get(s),[d,G]=de(e),T=c.useRef(!1),O=c.useRef(!1),I=c.useRef(d),z=c.useRef(t),m=c.useRef(n),p=()=>m.current,_=()=>p().isVisible()&&p().isOnline(),[g,L,M,k]=ce(s,d),P=c.useRef({}).current,F=h(i)?n.fallback[d]:i,H=(S,j)=>{for(const V in P){const N=V;if(N==="data"){if(!r(S[N],j[N])&&(!h(S[N])||!r(ke,j[N])))return!1}else if(j[N]!==S[N])return!1}return!0},be=c.useMemo(()=>{const S=(()=>!d||!t?!1:h(f)?p().isPaused()||o?!1:h(u)?!0:u:f)(),j=W=>{const te=oe(W);return delete te._k,S?{isValidating:!0,isLoading:!0,...te}:te},V=g(),N=k(),Q=j(V),pe=V===N?Q:j(N);let D=Q;return[()=>{const W=j(g());return H(W,D)?(D.data=W.data,D.isLoading=W.isLoading,D.isValidating=W.isValidating,D.error=W.error,D):(D=W,W)},()=>pe]},[s,d]),ae=At.useSyncExternalStore(c.useCallback(S=>M(d,(j,V)=>{H(V,j)||S()}),[s,d]),be[0],be[1]),Oe=!T.current,Z=E[d]&&E[d].length>0,ie=ae.data,ee=h(ie)?F:ie,Ne=ae.error,gt=c.useRef(ee),ke=l?h(ie)?gt.current:ie:ee,xt=(()=>Z&&!h(Ne)?!1:Oe&&!h(f)?f:p().isPaused()?!1:o?h(ee)?!1:u:h(ee)||u)(),Ct=!!(d&&t&&Oe&&xt),ln=h(ae.isValidating)?Ct:ae.isValidating,un=h(ae.isLoading)?Ct:ae.isLoading,Ee=c.useCallback(async S=>{const j=z.current;if(!d||!j||O.current||p().isPaused())return!1;let V,N,Q=!0;const pe=S||{},D=!w[d]||!pe.dedupe,W=()=>_t?!O.current&&d===I.current&&T.current:d===I.current,te={isValidating:!1,isLoading:!1},bt=()=>{L(te)},Et=()=>{const q=w[d];q&&q[1]===N&&delete w[d]},yt={isValidating:!0};h(g().data)&&(yt.isLoading=!0);try{if(D&&(L(yt),n.loadingTimeout&&h(g().data)&&setTimeout(()=>{Q&&W()&&p().onLoadingSlow(d,n)},n.loadingTimeout),w[d]=[j(G),ot()]),[V,N]=w[d],V=await V,D&&setTimeout(Et,n.dedupingInterval),!w[d]||w[d][1]!==N)return D&&W()&&p().onDiscarded(d),!1;te.error=$;const q=x[d];if(!h(q)&&(N<=q[0]||N<=q[1]||q[1]===0))return bt(),D&&W()&&p().onDiscarded(d),!1;const ne=g().data;te.data=r(ne,V)?ne:V,D&&W()&&p().onSuccess(V,d,n)}catch(q){Et();const ne=p(),{shouldRetryOnError:Ue}=ne;ne.isPaused()||(te.error=q,D&&W()&&(ne.onError(q,d,ne),(Ue===!0||Y(Ue)&&Ue(q))&&_()&&ne.onErrorRetry(q,d,ne,dn=>{const Be=E[d];Be&&Be[0]&&Be[0](we.ERROR_REVALIDATE_EVENT,dn)},{retryCount:(pe.retryCount||0)+1,dedupe:!0})))}return Q=!1,bt(),!0},[d,s]),vt=c.useCallback((...S)=>$t(s,I.current,...S),[]);if(Re(()=>{z.current=t,m.current=n,h(ie)||(gt.current=ie)}),Re(()=>{if(!d)return;const S=Ee.bind($,Ge);let j=0;const N=ks(d,E,(Q,pe={})=>{if(Q==we.FOCUS_EVENT){const D=Date.now();p().revalidateOnFocus&&D>j&&_()&&(j=D+p().focusThrottleInterval,S())}else if(Q==we.RECONNECT_EVENT)p().revalidateOnReconnect&&_()&&S();else{if(Q==we.MUTATE_EVENT)return Ee();if(Q==we.ERROR_REVALIDATE_EVENT)return Ee(pe)}});return O.current=!1,I.current=d,T.current=!0,L({_k:G}),xt&&(h(ee)||je?S():vs(S)),()=>{O.current=!0,N()}},[d]),Re(()=>{let S;function j(){const N=Y(C)?C(g().data):C;N&&S!==-1&&(S=setTimeout(V,N))}function V(){!g().error&&(v||p().isVisible())&&(b||p().isOnline())?Ee(Ge).then(j):j()}return j(),()=>{S&&(clearTimeout(S),S=-1)}},[C,v,b,d]),c.useDebugValue(ke),o&&h(ee)&&d){if(!_t&&je)throw new Error("Fallback data is required when using suspense in SSR.");z.current=t,m.current=n,O.current=!1;const S=A[d];if(!h(S)){const j=vt(S);Nt(j)}if(h(Ne)){const j=Ee(Ge);h(ke)||(j.status="fulfilled",j.value=!0),Nt(j)}else throw Ne}return{mutate:vt,get data(){return P.data=!0,ke},get error(){return P.error=!0,Ne},get isValidating(){return P.isValidating=!0,ln},get isLoading(){return P.isLoading=!0,un}}},Jt=Me.defineProperty(Rs,"defaultValue",{value:Kt}),ft=Ns(Ls),Ms=Object.freeze(Object.defineProperty({__proto__:null,SWRConfig:Jt,default:ft,mutate:qt,preload:_s,unstable_serialize:Is,useSWRConfig:Xt},Symbol.toStringTag,{value:"Module"})),Ps="$inf$",Ds=e=>de(e?e(0,null):null)[0],Ye=Promise.resolve(),Fs=e=>(t,n,s)=>{const r=c.useRef(!1),{cache:o,initialSize:i=1,revalidateAll:f=!1,persistSize:u=!1,revalidateFirstPage:C=!0,revalidateOnMount:v=!1,parallel:b=!1}=s;let l;try{l=Ds(t),l&&(l=Ps+l)}catch{}const[E,x,w]=ce(o,l),A=c.useCallback(()=>h(E()._l)?i:E()._l,[o,l,i]);At.useSyncExternalStore(c.useCallback(m=>l?w(l,()=>{m()}):()=>{},[o,l]),A,A);const d=c.useCallback(()=>{const m=E()._l;return h(m)?i:m},[l,i]),G=c.useRef(d());Re(()=>{if(!r.current){r.current=!0;return}l&&x({_l:u?G.current:d()})},[l,o]);const T=v&&!r.current,O=e(l,async m=>{const p=E()._i,_=[],g=d(),[L]=ce(o,m),M=L().data,k=[];let P=null;for(let F=0;F<g;++F){const[H,be]=de(t(F,b?null:P));if(!H)break;const[ae,Oe]=ce(o,H);let Z=ae().data;const ie=f||p||h(Z)||C&&!F&&!h(M)||T||M&&!h(M[F])&&!s.compare(M[F],Z);if(n&&ie){const ee=async()=>{Z=await n(be),Oe({data:Z,_k:be}),_[F]=Z};b?k.push(ee):await ee()}else _[F]=Z;b||(P=Z)}return b&&await Promise.all(k.map(F=>F())),x({_i:$}),_},s),I=c.useCallback(function(m,p){const _=typeof p=="boolean"?{revalidate:p}:p||{},g=_.revalidate!==!1;return l?(g&&(h(m)?x({_i:!0}):x({_i:!1})),arguments.length?O.mutate(m,{..._,revalidate:g}):O.mutate()):Ye},[l,o]),z=c.useCallback(m=>{if(!l)return Ye;const[,p]=ce(o,l);let _;if(Y(m)?_=m(d()):typeof m=="number"&&(_=m),typeof _!="number")return Ye;p({_l:_}),G.current=_;const g=[],[L]=ce(o,l);let M=null;for(let k=0;k<_;++k){const[P]=de(t(k,M)),[F]=ce(o,P),H=P?F().data:$;if(h(H))return I(L().data);g.push(H),M=H}return I(g)},[l,o,I,d]);return{size:d(),setSize:z,mutate:I,get data(){return O.data},get error(){return O.error},get isValidating(){return O.isValidating},get isLoading(){return O.isLoading}}},Vs=As(ft,Fs);function zs(e,t){if(!e)throw typeof t=="string"?new Error(t):new Error(`${t.displayName} not found`)}var ve=(e,t)=>{const{assertCtxFn:n=zs}=t||{},s=y.createContext(void 0);return s.displayName=e,[s,()=>{const i=y.useContext(s);return n(i,`${e} not found`),i.value},()=>{const i=y.useContext(s);return i?i.value:{}}]},Zt={};ss(Zt,{SWRConfig:()=>Jt,useSWR:()=>ft,useSWRInfinite:()=>Vs});rs(Zt,Ms);var[Ws,Us]=ve("ClerkInstanceContext"),[Mr,Bs]=ve("UserContext");ve("ClientContext");ve("SessionContext");ve("OrganizationContext");typeof window<"u"?y.useLayoutEffect:y.useEffect;const[Pr,$s]=[Ws,Us];function Hs(e){if(!e)throw new Error(os)}const qs=Object.freeze({noGuarantees:Object.freeze({guaranteedLoaded:!1}),guaranteedLoaded:Object.freeze({guaranteedLoaded:!0})}),mt=y.createContext(void 0);mt.displayName="StructureContext";const Ks=()=>{const e=y.useContext(mt);return Hs(e),e},Gs=({children:e})=>Ks().guaranteedLoaded?y.createElement(y.Fragment,null,e):y.createElement(mt.Provider,{value:qs.guaranteedLoaded},e),he=(e,t)=>{t=t||e.displayName||e.name||"Component",e.displayName=t;const n=s=>{const r=$s();return r.loaded?y.createElement(Gs,null,y.createElement(e,{...s,clerk:r})):null};return n.displayName=`withClerk(${t})`,n},[Dr,en]=ve("AuthContext"),Ys=({children:e})=>{const{userId:t}=en();return t?y.createElement(y.Fragment,null,e):null},Qs=({children:e})=>{const{userId:t}=en();return t===null?y.createElement(y.Fragment,null,e):null};he(({clerk:e,...t})=>{const{client:n,session:s}=e,{__unstable__environment:r}=e,o=n.activeSessions&&n.activeSessions.length>0;return y.useEffect(()=>{if(s===null&&o&&r){const{afterSignOutOneUrl:i}=r.displayConfig;e.navigate(i)}else e.redirectToSignIn(t)},[]),null},"RedirectToSignIn");he(({clerk:e,...t})=>(y.useEffect(()=>{e.redirectToSignUp(t)},[]),null),"RedirectToSignUp");he(({clerk:e})=>(y.useEffect(()=>{e.redirectToUserProfile()},[]),null),"RedirectToUserProfile");he(({clerk:e})=>(y.useEffect(()=>{e.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");he(({clerk:e})=>(y.useEffect(()=>{e.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");he(({clerk:e,...t})=>(y.useEffect(()=>{e.handleRedirectCallback(t)},[]),null),"AuthenticateWithRedirectCallback");const Xs=he(({clerk:e,children:t,...n})=>{const{afterSignInUrl:s,afterSignUpUrl:r,redirectUrl:o,mode:i,...f}=n;t=cs(t,"Sign in");const u=is(t)("SignInButton"),C=()=>{const l={afterSignInUrl:s,afterSignUpUrl:r,redirectUrl:o};return i==="modal"?e.openSignIn(l):e.redirectToSignIn(l)},b={...f,onClick:async l=>(await ls(u.props.onClick)(l),C())};return y.cloneElement(u,b)},"SignInButton");function tn(){const e=Bs();return e===void 0?{isLoaded:!1,isSignedIn:void 0,user:void 0}:e===null?{isLoaded:!0,isSignedIn:!1,user:null}:{isLoaded:!0,isSignedIn:!0,user:e}}const Js=Ys,Zs=Qs;function er({className:e}){return a.jsx("i",{className:re("icon-[mingcute--send-plane-line]",e)})}const tr=()=>{const e=yn(),t=Lt();return a.jsxs("span",{className:re("font-mono text-[10px]",e?"text-red-500":"text-zinc-500"),children:[t.length,"/",wn]})},nr=()=>{const e=Ce(),t=it(),n=ut(Fe().isWhisper),s=Ve();return e||t?null:a.jsxs("label",{className:"label mx-2 flex items-center",children:[a.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:n,type:"checkbox",onChange:r=>{const o=r.target.checked;s("isWhisper",o)}}),a.jsx("span",{className:"label-text text-sm",children:"悄悄话"})]})},sr=()=>{const e=Ce(),t=ut(Fe().syncToRecently),n=Ve(),s=it();return!e||s?null:a.jsxs("label",{className:"label mx-2 flex items-center",children:[a.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:t,type:"checkbox",onChange:r=>{const o=r.target.checked;n("syncToRecently",o)}}),a.jsx("span",{className:"label-text text-sm",children:"同步到碎碎念"})]})},ht=({className:e})=>{const t=It();return a.jsxs("footer",{className:Te("mt-3 flex h-5 w-full min-w-0 items-center justify-between",e),children:[a.jsxs("span",{className:re("flex-1 select-none text-[10px] text-zinc-500 transition-opacity"),children:[a.jsxs("span",{className:"hidden md:inline",children:["支持 ",a.jsx("b",{children:"Markdown"})," 与"," ",a.jsx(In,{href:"https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",children:"GFM"})]}),a.jsx(xn,{})]}),a.jsx(Vn,{children:t&&a.jsxs(De.aside,{initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:8},className:"flex select-none items-center gap-2.5",children:[a.jsx(tr,{}),a.jsx(nr,{}),a.jsx(sr,{}),a.jsx(rr,{})]},"send-button-wrapper")})]})},rr=()=>{const e=Cn(),{text:t,author:n,mail:s,url:r,source:o,avatar:i,isWhisper:f,syncToRecently:u}=Fe(),{afterSubmit:C}=vn(),v=Ce(),b=Dt(),l=it(),E=bn(),x=En(),w=T=>(x==null||x(T),T),{mutate:A,isPending:d}=Jn({mutationFn:async T=>{const O=B.get(t),I=B.get(n),z=B.get(s),m=B.get(i),p=B.get(o),_=B.get(r),g={text:O,author:I,mail:z,avatar:m,source:p,url:_};if(v&&(delete g.source,delete g.avatar),Object.keys(g).forEach(k=>{g[k]===""&&delete g[k]}),l)return v?ye.comment.proxy.master.reply(T).post({data:{text:O}}).then(w):ye.comment.reply(T,g).then(w);const L=B.get(f),M=B.get(u);return v?ye.comment.proxy.master.comment(T).post({data:{text:O}}).then(async k=>(M&&ye.recently.proxy.post({data:{content:O,ref:T}}).then(()=>{He.success("已同步到碎碎念")}),k)).then(w):(g.isWhispers=L,ye.comment.comment(T,g).then(w))},mutationKey:[e,"comment"],onError(T){He.error(mn(T))},onSuccess(T){C==null||C();const O=v?"发表成功啦~":l?"感谢你的回复！":"感谢你的评论！",I=Rn(E);He.success(O),B.set(t,""),b.setQueryData(I,z=>z&&(l?Pe(z,m=>{const p=(g,L,M)=>{if(g.id===L)return g.children||(g.children=[]),g.children.push({...M,new:!0}),!0;if(g.children){for(const k of g.children)if(p(k,L,M))return!0;return!1}},_={...T,new:!0};for(const g of m.pages)for(const L of g.data)if(p(L,e,_))break}):Pe(z,m=>{m.pages[0].data.unshift({...T,new:!0})})))}}),G=()=>{A(e)};return a.jsxs(De.button,{className:"flex appearance-none items-center space-x-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",disabled:d,onClick:G,children:[a.jsx(er,{className:"h-5 w-5 text-zinc-800 dark:text-zinc-200"}),a.jsx(De.span,{className:"text-sm",layout:"size",children:d?"送信...":"送信"})]})},or=()=>{const e="bg-gray-200/50 dark:bg-zinc-800/50";return a.jsxs("div",{className:"flex animate-pulse gap-4",children:[a.jsx("div",{className:re("h-12 w-12 self-end overflow-hidden rounded-full",e)}),a.jsx("div",{className:re("h-[150px] w-full rounded-lg",e)})]})},nn=c.forwardRef((e,t)=>{const{className:n,children:s,...r}=e,o=Ze(0),i=Ze(0),f=c.useCallback(({clientX:b,clientY:l,currentTarget:E})=>{const x=E.getBoundingClientRect();o.set(b-x.left),i.set(l-x.top)},[o,i]),u=Qn`radial-gradient(320px circle at ${o}px ${i}px, var(--spotlight-color) 0%, transparent 85%)`,C=hn(),v=Kn(e);return a.jsxs("div",{className:"group relative h-full [--spotlight-color:hsl(var(--a)_/_0.05)]",onMouseMove:f,children:[!C&&a.jsx(De.div,{className:"pointer-events-none absolute left-0 right-0 top-0 z-0 h-[150px] rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",style:{background:u},"aria-hidden":"true"}),a.jsx("textarea",{ref:t,className:Te("h-full w-full resize-none bg-transparent","overflow-auto px-3 py-4","text-neutral-900/80 dark:text-slate-100/80",n),...r,...v}),s]})});nn.displayName="TextArea";const ar=Ln(()=>fn(()=>import("./EmojiPicker-23d758d0.js"),["./EmojiPicker-23d758d0.js","./index-f4cc687e.js","./index-51e3f757.css","./Markdown-4880cfe7.js","./helper-03e0976d.js","./spring-ed96ee3e.js","./index-6ba2b095.js","./LinkCard-3e255b66.js","./Divider-1628639e.js","./env-d87a2338.js","./LinkCard-b879cb74.css","./Collapse-e922ca3b.js","./Gallery-d88b7587.js","./Gallery-554db201.css","./RichLink-f514606b.js","./Markdown-c85e0cb3.css"],import.meta.url).then(e=>e.EmojiPicker)),pt=()=>{const e=Je(()=>Sn()),t=Ve(),n=Lt(),s=c.useRef(null),r=c.useCallback(o=>{if(!s.current)return;const i=s.current,f=i.selectionStart,u=i.selectionEnd;i.value=`${i.value.substring(0,f)} ${o} ${i.value.substring(u,i.value.length)}`,t("text",i.value),requestAnimationFrame(()=>{const C=f+o.length+2;i.selectionStart=C,i.selectionEnd=C,i.focus()})},[]);return c.useEffect(()=>{const o=s.current;o&&n!==o.value&&(o.value=n)},[n]),c.useLayoutEffect(()=>{const o=s.current;o&&(o.selectionStart=o.selectionEnd=o.value.length,o.focus())},[]),a.jsx(nn,{ref:s,defaultValue:n,onChange:o=>t("text",o.target.value),placeholder:e,children:a.jsx(jn,{children:a.jsx(Ft,{trigger:"click",TriggerComponent:ir,headless:!0,children:a.jsx(ar,{onEmojiSelect:r})})})})},ir=()=>a.jsxs("button",{className:"ml-0 inline-flex h-5 w-5 translate-y-1 text-base center md:ml-4",onClick:pn,children:[a.jsx("i",{className:"icon-[mingcute--emoji-2-line]"}),a.jsx("span",{className:"sr-only",children:"表情"})]}),cr=()=>{const{user:e}=tn(),t=Ve(),n=e?e.fullName||e.lastName||e.firstName||"Anonymous":"";return c.useEffect(()=>{var s;e&&(t("author",n),t("avatar",e.profileImageUrl),t("mail",((s=e.primaryEmailAddress)==null?void 0:s.emailAddress)||""))},[n,e]),e?a.jsxs("div",{className:"flex space-x-4",children:[a.jsx("div",{className:re("mb-2 flex-shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:a.jsx(Mt,{className:"rounded-full object-cover",src:e.profileImageUrl,alt:`${n}'s avatar`,width:48,height:48})}),a.jsx("div",{className:"relative h-[150px] w-full rounded-lg bg-gray-200/50 pb-5 dark:bg-zinc-800/50",children:a.jsx(pt,{})}),a.jsx(ht,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]}):a.jsx(or,{})};Vt({});const sn=c.createContext(null),rn=c.createContext(null),on=()=>c.useContext(sn),lr=()=>c.useContext(rn),ur=e=>{const{showErrorMessage:t=!0,...n}=e,s=Je(()=>Vt({}));return a.jsx(sn.Provider,{value:Je(()=>({showErrorMessage:t,fields:s,getField:r=>B.get(s)[r],addField:(r,o)=>{B.set(s,i=>({...i,[r]:o}))},removeField:r=>{B.set(s,o=>{const i={...o};return delete i[r],i})}})),children:a.jsx(rn.Provider,{value:c.useMemo(()=>({showErrorMessage:t}),[t]),children:a.jsx(dr,{...n})})})},dr=e=>{const{onSubmit:t,...n}=e,s=on().fields,r=c.useCallback(async o=>{o.preventDefault();const i=B.get(s);for await(const[f,u]of Object.entries(i)){const C=u.$ref;if(!C)continue;const v=C.value,b=u.rules;for(let l=0;l<b.length;l++){const E=b[l];try{if(!await E.validator(v)){console.error(`Form validation failed, at field \`${f}\`, got value \`${v}\``),C.focus(),E.message&&B.set(s,w=>Pe(w,A=>{A[f].rules[l].status="error"}));return}}catch(x){console.error("validate function throw error",x);return}}}t==null||t(o)},[t]);return a.jsx("form",{onSubmit:r,...n,children:e.children})},an=c.memo(({className:e,rules:t,onKeyDown:n,...s})=>{const r=on();if(!r)throw new Error("FormInput must be used inside <FormContext />");const{showErrorMessage:o}=lr(),{addField:i,removeField:f,fields:u}=r,C=c.useRef(null),v=ut(Dn(u,c.useCallback(l=>{var E,x;if(s.name)return(x=(E=l[s.name])==null?void 0:E.rules.find(w=>w.status==="error"))==null?void 0:x.message},[s.name])));c.useEffect(()=>{const l=s.name;if(t&&l)return i(l,{rules:t,$ref:C.current}),()=>{f(l)}},[s.name,t]);const b=c.useCallback(l=>{n&&n(l),B.set(u,E=>Pe(E,x=>{s.name&&x[s.name].rules.forEach(w=>{w.status==="error"&&(w.status="success")})}))},[u,n,s.name]);return a.jsxs(a.Fragment,{children:[a.jsx(Gn,{ref:C,className:Te(!!v&&"ring-2 ring-red-400 dark:ring-orange-700","w-full",e),type:"text",onKeyDown:b,...s}),o&&a.jsx(lt,{duration:.2,children:a.jsx("p",{className:"text-left text-sm text-red-400 dark:text-orange-700",children:v})})]})});an.displayName="FormInput";const fr=()=>Ce()?a.jsx(pr,{}):a.jsx(hr,{}),cn="relative h-[150px] w-full rounded-lg bg-gray-200/50 pb-5 dark:bg-zinc-800/50",mr={author:"昵称",mail:"邮箱",url:"网址"},Qe=e=>{const{fieldKey:t,required:n}=e,[s,r]=Fn(Fe()[t]);return a.jsx(an,{type:"text",value:s,onChange:o=>r(o.target.value),required:n,placeholder:mr[t]+(n?" *":""),className:"border-0 bg-gray-200/50 dark:bg-zinc-800/50"})},hr=()=>a.jsxs(ur,{className:"flex flex-col space-y-4 px-2 pt-2",showErrorMessage:!1,children:[a.jsxs("div",{className:"flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0",children:[a.jsx(Qe,{fieldKey:"author",required:!0}),a.jsx(Qe,{fieldKey:"mail",required:!0}),a.jsx(Qe,{fieldKey:"url"})]}),a.jsx("div",{className:Te(cn,"pb-8"),children:a.jsx(pt,{})}),a.jsx(ht,{className:"absolute bottom-4 left-0 right-4 mb-2 ml-4 w-auto px-4"})]}),pr=()=>{const e=gn(t=>t.user);return a.jsxs("div",{className:"flex space-x-4",children:[a.jsx("div",{className:re("mb-2 flex-shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:a.jsx(Mt,{className:"rounded-full object-cover",src:e.avatar,alt:`${e.name||e.username}'s avatar`,width:48,height:48})}),a.jsx("div",{className:cn,children:a.jsx(pt,{})}),a.jsx(ht,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]})};function gr(e){return a.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:a.jsx("path",{d:"M11 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H15M16.8744 13C16.2164 13.4935 15.6221 14.066 15.1049 14.7043C15.035 14.7906 15 14.8953 15 15M16.8744 17C16.2164 16.5065 15.6221 15.934 15.1049 15.2957C15.035 15.2094 15 15.1047 15 15M15 15H21M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function xr(){const e=Mn();return a.jsxs("div",{className:"flex h-[150px] w-full space-x-4 rounded-lg bg-gray-100/80 center dark:bg-zinc-900/80",children:[a.jsx(St,{variant:"secondary",type:"button",onClick:()=>{ct(X.legacy)},children:"免登录评论"}),a.jsx(Xs,{mode:"modal",redirectUrl:On(e).href,children:a.jsxs(St,{variant:"primary",type:"button",children:[a.jsx(gr,{className:"mr-1 h-5 w-5"}),"登录后才可以留言噢"]})})]})}const Cr=()=>{const e=Xe(),t=`转换到${e===X.legacy?"新":"旧"}版评论`,n=It(),s=!!tn(),r=c.useRef(function(){const f=Xe();return a.jsxs(a.Fragment,{children:[a.jsx("i",{className:re(f===X.legacy?"icon-[mingcute--user-4-line]":"icon-[material-symbols--dynamic-form-outline]")}),a.jsx("span",{className:"sr-only",children:t})]})}).current;return Ce()?null:a.jsx(qn,{className:re("absolute left-0 top-0 z-10 rounded-full text-sm","h-6 w-6 border border-slate-200 dark:border-neutral-800","bg-slate-100 dark:bg-neutral-900","flex cursor-pointer text-base-100/50 center","text-base-content/50","opacity-0 transition-opacity duration-200 group-[:hover]:opacity-100",e===X.legacy&&"bottom-0 top-auto",n||s&&e===X["with-auth"]&&"invisible opacity-0"),onClick:()=>{ct(e===X.legacy?X["with-auth"]:X.legacy)},children:a.jsx(Ft,{TriggerComponent:r,children:t})})},Fr=e=>{const{refId:t,className:n,afterSubmit:s,initialValue:r}=e,o=Xe(),i=Ce();return c.useEffect(()=>{i&&ct(X.legacy)},[i]),a.jsx(_n,{children:a.jsx(Tn,{refId:t,afterSubmit:s,initialValue:r,children:a.jsxs("div",{className:Te("group relative w-full min-w-0",n),"data-hide-print":!0,children:[a.jsx(Cr,{}),a.jsx("div",{className:"relative w-full",children:o===X.legacy?a.jsx(vr,{}):a.jsx(br,{})})]})})})},vr=()=>a.jsx(lt,{children:a.jsx(fr,{})}),br=()=>a.jsxs(lt,{children:[a.jsx(Zs,{children:a.jsx(xr,{})}),a.jsx(Js,{children:a.jsx(cr,{})})]});export{Fr as C};
