var x=(s,t,i)=>{if(!t.has(s))throw TypeError("Cannot "+i)};var e=(s,t,i)=>(x(s,t,"read from private field"),i?i.call(s):t.get(s)),l=(s,t,i)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,i)},h=(s,t,i,n)=>(x(s,t,"write to private field"),n?n.call(s,i):t.set(s,i),i);var c=(s,t,i)=>(x(s,t,"access private method"),i);import{n as q,c as z,a as B}from"./Markdown-4880cfe7.js";import{i as H,c as J}from"./Gallery-d88b7587.js";var p,U,K=(U=class{constructor(){l(this,p,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),H(this.gcTime)&&h(this,p,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(s){this.gcTime=Math.max(this.gcTime||0,s??(J?1/0:5*60*1e3))}clearGcTimeout(){e(this,p)&&(clearTimeout(e(this,p)),h(this,p,void 0))}},p=new WeakMap,U),r,m,a,f,u,d,V,Y=(V=class extends K{constructor(t){super();l(this,u);l(this,r,void 0);l(this,m,void 0);l(this,a,void 0);l(this,f,void 0);this.mutationId=t.mutationId,h(this,m,t.defaultOptions),h(this,a,t.mutationCache),h(this,r,[]),this.state=t.state||L(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...e(this,m),...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){e(this,r).includes(t)||(e(this,r).push(t),this.clearGcTimeout(),e(this,a).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){h(this,r,e(this,r).filter(i=>i!==t)),this.scheduleGc(),e(this,a).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){e(this,r).length||(this.state.status==="pending"?this.scheduleGc():e(this,a).remove(this))}continue(){var t;return((t=e(this,f))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var g,w,v,T,M,R,C,G,P,S,O,F,D,E,k,A,I,b,j,N;const i=()=>(h(this,f,z({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(o,y)=>{c(this,u,d).call(this,{type:"failed",failureCount:o,error:y})},onPause:()=>{c(this,u,d).call(this,{type:"pause"})},onContinue:()=>{c(this,u,d).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode})),e(this,f).promise),n=this.state.status==="pending";try{if(!n){c(this,u,d).call(this,{type:"pending",variables:t}),await((w=(g=e(this,a).config).onMutate)==null?void 0:w.call(g,t,this));const y=await((T=(v=this.options).onMutate)==null?void 0:T.call(v,t));y!==this.state.context&&c(this,u,d).call(this,{type:"pending",context:y,variables:t})}const o=await i();return await((R=(M=e(this,a).config).onSuccess)==null?void 0:R.call(M,o,t,this.state.context,this)),await((G=(C=this.options).onSuccess)==null?void 0:G.call(C,o,t,this.state.context)),await((S=(P=e(this,a).config).onSettled)==null?void 0:S.call(P,o,null,this.state.variables,this.state.context,this)),await((F=(O=this.options).onSettled)==null?void 0:F.call(O,o,null,t,this.state.context)),c(this,u,d).call(this,{type:"success",data:o}),o}catch(o){try{throw await((E=(D=e(this,a).config).onError)==null?void 0:E.call(D,o,t,this.state.context,this)),await((A=(k=this.options).onError)==null?void 0:A.call(k,o,t,this.state.context)),await((b=(I=e(this,a).config).onSettled)==null?void 0:b.call(I,void 0,o,this.state.variables,this.state.context,this)),await((N=(j=this.options).onSettled)==null?void 0:N.call(j,void 0,o,t,this.state.context)),o}finally{c(this,u,d).call(this,{type:"error",error:o})}}}},r=new WeakMap,m=new WeakMap,a=new WeakMap,f=new WeakMap,u=new WeakSet,d=function(t){const i=n=>{switch(t.type){case"failed":return{...n,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!B(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...n,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:t.error,failureCount:n.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=i(this.state),q.batch(()=>{e(this,r).forEach(n=>{n.onMutationUpdate(t)}),e(this,a).notify({mutation:this,type:"updated",action:t})})},V);function L(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}export{Y as M,K as R,L as g};
