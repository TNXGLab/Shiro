import{a as T,b as k}from"./Gallery-d88b7587.js";function O(a){return{onFetch:(e,t)=>{const s=async()=>{var p,y,h,q,F;const o=e.options,u=(h=(y=(p=e.fetchOptions)==null?void 0:p.meta)==null?void 0:y.fetchMore)==null?void 0:h.direction,P=((q=e.state.data)==null?void 0:q.pages)||[],d=((F=e.state.data)==null?void 0:F.pageParams)||[],K={pages:[],pageParams:[]};let c=!1;const j=r=>{Object.defineProperty(r,"signal",{enumerable:!0,get:()=>(e.signal.aborted?c=!0:e.signal.addEventListener("abort",()=>{c=!0}),e.signal)})},E=e.options.queryFn||(()=>Promise.reject(new Error(`Missing queryFn: '${e.options.queryHash}'`))),f=async(r,n,i)=>{if(c)return Promise.reject();if(n==null&&r.pages.length)return Promise.resolve(r);const l={queryKey:e.queryKey,pageParam:n,direction:i?"backward":"forward",meta:e.options.meta};j(l);const N=await E(l),{maxPages:w}=e.options,b=i?T:k;return{pages:b(r.pages,N,w),pageParams:b(r.pageParams,n,w)}};let g;if(u&&P.length){const r=u==="backward",n=r?v:m,i={pages:P,pageParams:d},l=n(o,i);g=await f(i,l,r)}else{g=await f(K,d[0]??o.initialPageParam);const r=a??P.length;for(let n=1;n<r;n++){const i=m(o,g);g=await f(g,i)}}return g};e.options.persister?e.fetchFn=()=>{var o,u;return(u=(o=e.options).persister)==null?void 0:u.call(o,s,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},t)}:e.fetchFn=s}}}function m(a,{pages:e,pageParams:t}){const s=e.length-1;return a.getNextPageParam(e[s],e,t[s],t)}function v(a,{pages:e,pageParams:t}){var s;return(s=a.getPreviousPageParam)==null?void 0:s.call(a,e[0],e,t[0],t)}function S(a,e){return e?m(a,e)!=null:!1}function B(a,e){return!e||!a.getPreviousPageParam?!1:v(a,e)!=null}export{B as a,S as h,O as i};
