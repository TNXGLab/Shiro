import{r as b,j as Ve,R as gn}from"./index-f4cc687e.js";import{b as Ze}from"./helper-03e0976d.js";import{s as yn}from"./index-6ba2b095.js";const ut=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ue=b.createContext({}),ft=b.createContext(null),dt=typeof document<"u",bn=dt?b.useLayoutEffect:b.useEffect,mt=b.createContext({strict:!1});function xn(e,t,n,r){const{visualElement:s}=b.useContext(ue),a=b.useContext(mt),o=b.useContext(ft),c=b.useContext(ut).reducedMotion,l=b.useRef();r=r||a.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:s,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:c}));const i=l.current;b.useInsertionEffect(()=>{i&&i.update(n,o)});const u=b.useRef(!!window.HandoffAppearAnimations);return bn(()=>{i&&(i.render(),u.current&&i.animationState&&i.animationState.animateChanges())}),b.useEffect(()=>{i&&(i.updateFeatures(),!u.current&&i.animationState&&i.animationState.animateChanges(),window.HandoffAppearAnimations=void 0,u.current=!1)}),i}function An(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function wn(e,t,n){return b.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):An(n)&&(n.current=r))},[t])}function Te(e){return typeof e=="string"||Array.isArray(e)}function ht(e){return typeof e=="object"&&typeof e.start=="function"}const Cn=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Vn=["initial",...Cn];function Fe(e){return ht(e.animate)||Vn.some(t=>Te(e[t]))}function Tn(e){return!!(Fe(e)||e.variants)}function Mn(e,t){if(Fe(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Te(n)?n:void 0,animate:Te(r)?r:void 0}}return e.inherit!==!1?t:{}}function Sn(e){const{initial:t,animate:n}=Mn(e,b.useContext(ue));return b.useMemo(()=>({initial:t,animate:n}),[_e(t),_e(n)])}function _e(e){return Array.isArray(e)?e.join(" "):e}const Xe={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Me={};for(const e in Xe)Me[e]={isEnabled:t=>Xe[e].some(n=>!!t[n])};function vn(e){for(const t in e)Me[t]={...Me[t],...e[t]}}const Pn=b.createContext({}),kn=b.createContext({}),Dn=Symbol.for("motionComponentSymbol");function On({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:s}){e&&vn(e);function a(c,l){let i;const u={...b.useContext(ut),...c,layoutId:Fn(c)},{isStatic:f}=u,d=Sn(c),m=r(c,f);if(!f&&dt){d.visualElement=xn(s,m,u,t);const h=b.useContext(kn),x=b.useContext(mt).strict;d.visualElement&&(i=d.visualElement.loadFeatures(u,x,e,h))}return b.createElement(ue.Provider,{value:d},i&&d.visualElement?b.createElement(i,{visualElement:d.visualElement,...u}):null,n(s,c,wn(m,d.visualElement,l),m,f,d.visualElement))}const o=b.forwardRef(a);return o[Dn]=s,o}function Fn({layoutId:e}){const t=b.useContext(Pn).id;return t&&e!==void 0?t+"-"+e:e}function Rn(e){function t(r,s={}){return On(e(r,s))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,s)=>(n.has(s)||n.set(s,t(s)),n.get(s))})}const In=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function pt(e){return typeof e!="string"||e.includes("-")?!1:!!(In.indexOf(e)>-1||/[A-Z]/.test(e))}const gt={};function ea(e){Object.assign(gt,e)}const fe=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],de=new Set(fe);function yt(e,{layout:t,layoutId:n}){return de.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!gt[e]||e==="opacity")}const B=e=>!!(e&&e.getVelocity),Bn={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ln=fe.length;function Wn(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,s){let a="";for(let o=0;o<Ln;o++){const c=fe[o];if(e[c]!==void 0){const l=Bn[c]||c;a+=`${l}(${e[c]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),s?a=s(e,r?"":a):n&&r&&(a="none"),a}const bt=e=>t=>typeof t=="string"&&t.startsWith(e),zn=bt("--"),ta=bt("var(--"),jn=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,En=(e,t)=>t&&typeof e=="number"?t.transform(e):e,H=(e,t,n)=>Math.min(Math.max(n,e),t),G={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},X={...G,transform:e=>H(0,1,e)},re={...G,default:1},Y=e=>Math.round(e*1e5)/1e5,me=/(-)?([\d]*\.?[\d])+/g,xt=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Nn=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function J(e){return typeof e=="string"}const ee=e=>({test:t=>J(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),F=ee("deg"),$=ee("%"),p=ee("px"),$n=ee("vh"),Hn=ee("vw"),Ye={...$,parse:e=>$.parse(e)/100,transform:e=>$.transform(e*100)},Qe={...G,transform:Math.round},At={borderWidth:p,borderTopWidth:p,borderRightWidth:p,borderBottomWidth:p,borderLeftWidth:p,borderRadius:p,radius:p,borderTopLeftRadius:p,borderTopRightRadius:p,borderBottomRightRadius:p,borderBottomLeftRadius:p,width:p,maxWidth:p,height:p,maxHeight:p,size:p,top:p,right:p,bottom:p,left:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,rotate:F,rotateX:F,rotateY:F,rotateZ:F,scale:re,scaleX:re,scaleY:re,scaleZ:re,skew:F,skewX:F,skewY:F,distance:p,translateX:p,translateY:p,translateZ:p,x:p,y:p,z:p,perspective:p,transformPerspective:p,opacity:X,originX:Ye,originY:Ye,originZ:p,zIndex:Qe,fillOpacity:X,strokeOpacity:X,numOctaves:Qe};function wt(e,t,n,r){const{style:s,vars:a,transform:o,transformOrigin:c}=e;let l=!1,i=!1,u=!0;for(const f in t){const d=t[f];if(zn(f)){a[f]=d;continue}const m=At[f],h=En(d,m);if(de.has(f)){if(l=!0,o[f]=h,!u)continue;d!==(m.default||0)&&(u=!1)}else f.startsWith("origin")?(i=!0,c[f]=h):s[f]=h}if(t.transform||(l||r?s.transform=Wn(e.transform,n,u,r):s.transform&&(s.transform="none")),i){const{originX:f="50%",originY:d="50%",originZ:m=0}=c;s.transformOrigin=`${f} ${d} ${m}`}}const Re=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ct(e,t,n){for(const r in t)!B(t[r])&&!yt(r,n)&&(e[r]=t[r])}function Gn({transformTemplate:e},t,n){return b.useMemo(()=>{const r=Re();return wt(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Kn(e,t,n){const r=e.style||{},s={};return Ct(s,r,e),Object.assign(s,Gn(e,t,n)),e.transformValues?e.transformValues(s):s}function Un(e,t,n){const r={},s=Kn(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=s,r}const qn=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function oe(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||qn.has(e)}let Vt=e=>!oe(e);function Zn(e){e&&(Vt=t=>t.startsWith("on")?!oe(t):e(t))}try{Zn(require("@emotion/is-prop-valid").default)}catch{}function _n(e,t,n){const r={};for(const s in e)s==="values"&&typeof e.values=="object"||(Vt(s)||n===!0&&oe(s)||!t&&!oe(s)||e.draggable&&s.startsWith("onDrag"))&&(r[s]=e[s]);return r}function Je(e,t,n){return typeof e=="string"?e:p.transform(t+n*e)}function Xn(e,t,n){const r=Je(t,e.x,e.width),s=Je(n,e.y,e.height);return`${r} ${s}`}const Yn={offset:"stroke-dashoffset",array:"stroke-dasharray"},Qn={offset:"strokeDashoffset",array:"strokeDasharray"};function Jn(e,t,n=1,r=0,s=!0){e.pathLength=1;const a=s?Yn:Qn;e[a.offset]=p.transform(-r);const o=p.transform(t),c=p.transform(n);e[a.array]=`${o} ${c}`}function Tt(e,{attrX:t,attrY:n,attrScale:r,originX:s,originY:a,pathLength:o,pathSpacing:c=1,pathOffset:l=0,...i},u,f,d){if(wt(e,i,u,d),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:h,dimensions:x}=e;m.transform&&(x&&(h.transform=m.transform),delete m.transform),x&&(s!==void 0||a!==void 0||h.transform)&&(h.transformOrigin=Xn(x,s!==void 0?s:.5,a!==void 0?a:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),o!==void 0&&Jn(m,o,c,l,!1)}const Mt=()=>({...Re(),attrs:{}}),St=e=>typeof e=="string"&&e.toLowerCase()==="svg";function er(e,t,n,r){const s=b.useMemo(()=>{const a=Mt();return Tt(a,t,{enableHardwareAcceleration:!1},St(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};Ct(a,e.style,e),s.style={...a,...s.style}}return s}function tr(e=!1){return(n,r,s,{latestValues:a},o)=>{const l=(pt(n)?er:Un)(r,a,o,n),u={..._n(r,typeof n=="string",e),...l,ref:s},{children:f}=r,d=b.useMemo(()=>B(f)?f.get():f,[f]);return b.createElement(n,{...u,children:d})}}const vt=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function nr(e,{style:t,vars:n},r,s){Object.assign(e.style,t,s&&s.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const rr=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function sr(e,t,n,r){nr(e,t,void 0,r);for(const s in t.attrs)e.setAttribute(rr.has(s)?s:vt(s),t.attrs[s])}function Pt(e,t){const{style:n}=e,r={};for(const s in n)(B(n[s])||t.style&&B(t.style[s])||yt(s,e))&&(r[s]=n[s]);return r}function ar(e,t){const n=Pt(e,t);for(const r in e)if(B(e[r])||B(t[r])){const s=fe.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=e[r]}return n}function kt(e,t,n,r={},s={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,s)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,s)),t}function or(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const ir=e=>Array.isArray(e),cr=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),lr=e=>ir(e)?e[e.length-1]||0:e;function ur(e){const t=B(e)?e.get():e;return cr(t)?t.toValue():t}function fr({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,s,a){const o={latestValues:dr(r,s,a,e),renderState:t()};return n&&(o.mount=c=>n(r,c,o)),o}const Dt=e=>(t,n)=>{const r=b.useContext(ue),s=b.useContext(ft),a=()=>fr(e,t,r,s);return n?a():or(a)};function dr(e,t,n,r){const s={},a=r(e,{});for(const d in a)s[d]=ur(a[d]);let{initial:o,animate:c}=e;const l=Fe(e),i=Tn(e);t&&i&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),c===void 0&&(c=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?c:o;return f&&typeof f!="boolean"&&!ht(f)&&(Array.isArray(f)?f:[f]).forEach(m=>{const h=kt(e,m);if(!h)return;const{transitionEnd:x,transition:C,...v}=h;for(const g in v){let y=v[g];if(Array.isArray(y)){const T=u?y.length-1:0;y=y[T]}y!==null&&(s[g]=y)}for(const g in x)s[g]=x[g]}),s}const D=e=>e;class et{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function mr(e){let t=new et,n=new et,r=0,s=!1,a=!1;const o=new WeakSet,c={schedule:(l,i=!1,u=!1)=>{const f=u&&s,d=f?t:n;return i&&o.add(l),d.add(l)&&f&&s&&(r=t.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(s){a=!0;return}if(s=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let i=0;i<r;i++){const u=t.order[i];u(l),o.has(u)&&(c.schedule(u),e())}s=!1,a&&(a=!1,c.process(l))}};return c}const se=["prepare","read","update","preRender","render","postRender"],hr=40;function pr(e,t){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},a=se.reduce((f,d)=>(f[d]=mr(()=>n=!0),f),{}),o=f=>a[f].process(s),c=()=>{const f=performance.now();n=!1,s.delta=r?1e3/60:Math.max(Math.min(f-s.timestamp,hr),1),s.timestamp=f,s.isProcessing=!0,se.forEach(o),s.isProcessing=!1,n&&t&&(r=!1,e(c))},l=()=>{n=!0,r=!0,s.isProcessing||e(c)};return{schedule:se.reduce((f,d)=>{const m=a[d];return f[d]=(h,x=!1,C=!1)=>(n||l(),m.schedule(h,x,C)),f},{}),cancel:f=>se.forEach(d=>a[d].cancel(f)),state:s,steps:a}}const{schedule:R,cancel:Ot,state:Q,steps:na}=pr(typeof requestAnimationFrame<"u"?requestAnimationFrame:D,!0),gr={useVisualState:Dt({scrapeMotionValuesFromProps:ar,createRenderState:Mt,onMount:(e,t,{renderState:n,latestValues:r})=>{R.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),R.render(()=>{Tt(n,r,{enableHardwareAcceleration:!1},St(t.tagName),e.transformTemplate),sr(t,n)})}})},yr={useVisualState:Dt({scrapeMotionValuesFromProps:Pt,createRenderState:Re})};function br(e,{forwardMotionProps:t=!1},n,r){return{...pt(e)?gr:yr,preloadedFeatures:n,useRender:tr(t),createVisualElement:r,Component:e}}const xr=(e,t)=>n=>t(e(n)),Ft=(...e)=>e.reduce(xr);function Ar(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function wr(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ie(e,t,n){const r=e.getProps();return kt(r,t,n!==void 0?n:r.custom,Ar(e),wr(e))}const Cr="framerAppearId",Vr="data-"+vt(Cr);let Tr=D,Rt=D;const z=e=>e*1e3,I=e=>e/1e3,Mr={current:!1},It=e=>Array.isArray(e)&&typeof e[0]=="number";function Bt(e){return!!(!e||typeof e=="string"&&Lt[e]||It(e)||Array.isArray(e)&&e.every(Bt))}const _=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Lt={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_([0,.65,.55,1]),circOut:_([.55,0,1,.45]),backIn:_([.31,.01,.66,-.59]),backOut:_([.33,1.53,.69,.99])};function Wt(e){if(e)return It(e)?_(e):Array.isArray(e)?e.map(Wt):Lt[e]}function Sr(e,t,n,{delay:r=0,duration:s,repeat:a=0,repeatType:o="loop",ease:c,times:l}={}){const i={[t]:n};l&&(i.offset=l);const u=Wt(c);return Array.isArray(u)&&(i.easing=u),e.animate(i,{delay:r,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}function vr(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const zt=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Pr=1e-7,kr=12;function Dr(e,t,n,r,s){let a,o,c=0;do o=t+(n-t)/2,a=zt(o,r,s)-e,a>0?n=o:t=o;while(Math.abs(a)>Pr&&++c<kr);return o}function te(e,t,n,r){if(e===t&&n===r)return D;const s=a=>Dr(a,0,1,e,n);return a=>a===0||a===1?a:zt(s(a),t,r)}const Or=te(.42,0,1,1),Fr=te(0,0,.58,1),jt=te(.42,0,.58,1),Rr=e=>Array.isArray(e)&&typeof e[0]!="number",Et=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Nt=e=>t=>1-e(1-t),$t=e=>1-Math.sin(Math.acos(e)),Ht=Nt($t),Ir=Et(Ht),Gt=te(.33,1.53,.69,.99),Be=Nt(Gt),Br=Et(Be),Lr=e=>(e*=2)<1?.5*Be(e):.5*(2-Math.pow(2,-10*(e-1))),Wr={linear:D,easeIn:Or,easeInOut:jt,easeOut:Fr,circIn:$t,circInOut:Ir,circOut:Ht,backIn:Be,backInOut:Br,backOut:Gt,anticipate:Lr},tt=e=>{if(Array.isArray(e)){Rt(e.length===4);const[t,n,r,s]=e;return te(t,n,r,s)}else if(typeof e=="string")return Wr[e];return e},Le=(e,t)=>n=>!!(J(n)&&Nn.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Kt=(e,t,n)=>r=>{if(!J(r))return r;const[s,a,o,c]=r.match(me);return{[e]:parseFloat(s),[t]:parseFloat(a),[n]:parseFloat(o),alpha:c!==void 0?parseFloat(c):1}},zr=e=>H(0,255,e),be={...G,transform:e=>Math.round(zr(e))},W={test:Le("rgb","red"),parse:Kt("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+be.transform(e)+", "+be.transform(t)+", "+be.transform(n)+", "+Y(X.transform(r))+")"};function jr(e){let t="",n="",r="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const Se={test:Le("#"),parse:jr,transform:W.transform},N={test:Le("hsl","hue"),parse:Kt("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+$.transform(Y(t))+", "+$.transform(Y(n))+", "+Y(X.transform(r))+")"},P={test:e=>W.test(e)||Se.test(e)||N.test(e),parse:e=>W.test(e)?W.parse(e):N.test(e)?N.parse(e):Se.parse(e),transform:e=>J(e)?e:e.hasOwnProperty("red")?W.transform(e):N.transform(e)},he=(e,t,n)=>-n*e+n*t+e;function xe(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Er({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,a=0,o=0;if(!t)s=a=o=n;else{const c=n<.5?n*(1+t):n+t-n*t,l=2*n-c;s=xe(l,c,e+1/3),a=xe(l,c,e),o=xe(l,c,e-1/3)}return{red:Math.round(s*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}const Ae=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},Nr=[Se,W,N],$r=e=>Nr.find(t=>t.test(e));function nt(e){const t=$r(e);let n=t.parse(e);return t===N&&(n=Er(n)),n}const Ut=(e,t)=>{const n=nt(e),r=nt(t),s={...n};return a=>(s.red=Ae(n.red,r.red,a),s.green=Ae(n.green,r.green,a),s.blue=Ae(n.blue,r.blue,a),s.alpha=he(n.alpha,r.alpha,a),W.transform(s))};function Hr(e){var t,n;return isNaN(e)&&J(e)&&(((t=e.match(me))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(xt))===null||n===void 0?void 0:n.length)||0)>0}const qt={regex:jn,countKey:"Vars",token:"${v}",parse:D},Zt={regex:xt,countKey:"Colors",token:"${c}",parse:P.parse},_t={regex:me,countKey:"Numbers",token:"${n}",parse:G.parse};function we(e,{regex:t,countKey:n,token:r,parse:s}){const a=e.tokenised.match(t);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...a.map(s)))}function ie(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&we(n,qt),we(n,Zt),we(n,_t),n}function Xt(e){return ie(e).values}function Yt(e){const{values:t,numColors:n,numVars:r,tokenised:s}=ie(e),a=t.length;return o=>{let c=s;for(let l=0;l<a;l++)l<r?c=c.replace(qt.token,o[l]):l<r+n?c=c.replace(Zt.token,P.transform(o[l])):c=c.replace(_t.token,Y(o[l]));return c}}const Gr=e=>typeof e=="number"?0:e;function Kr(e){const t=Xt(e);return Yt(e)(t.map(Gr))}const K={test:Hr,parse:Xt,createTransformer:Yt,getAnimatableNone:Kr},Qt=(e,t)=>n=>`${n>0?t:e}`;function Jt(e,t){return typeof e=="number"?n=>he(e,t,n):P.test(e)?Ut(e,t):e.startsWith("var(")?Qt(e,t):tn(e,t)}const en=(e,t)=>{const n=[...e],r=n.length,s=e.map((a,o)=>Jt(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=s[o](a);return n}},Ur=(e,t)=>{const n={...e,...t},r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=Jt(e[s],t[s]));return s=>{for(const a in r)n[a]=r[a](s);return n}},tn=(e,t)=>{const n=K.createTransformer(t),r=ie(e),s=ie(t);return r.numVars===s.numVars&&r.numColors===s.numColors&&r.numNumbers>=s.numNumbers?Ft(en(r.values,s.values),n):Qt(e,t)},nn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},rt=(e,t)=>n=>he(e,t,n);function qr(e){return typeof e=="number"?rt:typeof e=="string"?P.test(e)?Ut:tn:Array.isArray(e)?en:typeof e=="object"?Ur:rt}function Zr(e,t,n){const r=[],s=n||qr(e[0]),a=e.length-1;for(let o=0;o<a;o++){let c=s(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||D:t;c=Ft(l,c)}r.push(c)}return r}function rn(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const a=e.length;if(Rt(a===t.length),a===1)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=Zr(t,r,s),c=o.length,l=i=>{let u=0;if(c>1)for(;u<e.length-2&&!(i<e[u+1]);u++);const f=nn(e[u],e[u+1],i);return o[u](f)};return n?i=>l(H(e[0],e[a-1],i)):l}function _r(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const s=nn(0,t,r);e.push(he(n,1,s))}}function Xr(e){const t=[0];return _r(t,e.length-1),t}function Yr(e,t){return e.map(n=>n*t)}function Qr(e,t){return e.map(()=>t||jt).splice(0,e.length-1)}function ce({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const s=Rr(r)?r.map(tt):tt(r),a={done:!1,value:t[0]},o=Yr(n&&n.length===t.length?n:Xr(t),e),c=rn(o,t,{ease:Array.isArray(s)?s:Qr(t,s)});return{calculatedDuration:e,next:l=>(a.value=c(l),a.done=l>=e,a)}}function sn(e,t){return t?e*(1e3/t):0}const Jr=5;function an(e,t,n){const r=Math.max(t-Jr,0);return sn(n-e(r),t-r)}const Ce=.001,es=.01,st=10,ts=.05,ns=1;function rs({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let s,a;Tr(e<=z(st));let o=1-t;o=H(ts,ns,o),e=H(es,st,I(e)),o<1?(s=i=>{const u=i*o,f=u*e,d=u-n,m=ve(i,o),h=Math.exp(-f);return Ce-d/m*h},a=i=>{const f=i*o*e,d=f*n+n,m=Math.pow(o,2)*Math.pow(i,2)*e,h=Math.exp(-f),x=ve(Math.pow(i,2),o);return(-s(i)+Ce>0?-1:1)*((d-m)*h)/x}):(s=i=>{const u=Math.exp(-i*e),f=(i-n)*e+1;return-Ce+u*f},a=i=>{const u=Math.exp(-i*e),f=(n-i)*(e*e);return u*f});const c=5/e,l=as(s,a,c);if(e=z(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const i=Math.pow(l,2)*r;return{stiffness:i,damping:o*2*Math.sqrt(r*i),duration:e}}}const ss=12;function as(e,t,n){let r=n;for(let s=1;s<ss;s++)r=r-e(r)/t(r);return r}function ve(e,t){return e*Math.sqrt(1-t*t)}const os=["duration","bounce"],is=["stiffness","damping","mass"];function at(e,t){return t.some(n=>e[n]!==void 0)}function cs(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!at(e,is)&&at(e,os)){const n=rs(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function on({keyframes:e,restDelta:t,restSpeed:n,...r}){const s=e[0],a=e[e.length-1],o={done:!1,value:s},{stiffness:c,damping:l,mass:i,velocity:u,duration:f,isResolvedFromDuration:d}=cs(r),m=u?-I(u):0,h=l/(2*Math.sqrt(c*i)),x=a-s,C=I(Math.sqrt(c/i)),v=Math.abs(x)<5;n||(n=v?.01:2),t||(t=v?.005:.5);let g;if(h<1){const y=ve(C,h);g=T=>{const w=Math.exp(-h*C*T);return a-w*((m+h*C*x)/y*Math.sin(y*T)+x*Math.cos(y*T))}}else if(h===1)g=y=>a-Math.exp(-C*y)*(x+(m+C*x)*y);else{const y=C*Math.sqrt(h*h-1);g=T=>{const w=Math.exp(-h*C*T),O=Math.min(y*T,300);return a-w*((m+h*C*x)*Math.sinh(O)+y*x*Math.cosh(O))/y}}return{calculatedDuration:d&&f||null,next:y=>{const T=g(y);if(d)o.done=y>=f;else{let w=m;y!==0&&(h<1?w=an(g,y,T):w=0);const O=Math.abs(w)<=n,M=Math.abs(a-T)<=t;o.done=O&&M}return o.value=o.done?a:T,o}}}function ot({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:a=500,modifyTarget:o,min:c,max:l,restDelta:i=.5,restSpeed:u}){const f=e[0],d={done:!1,value:f},m=A=>c!==void 0&&A<c||l!==void 0&&A>l,h=A=>c===void 0?l:l===void 0||Math.abs(c-A)<Math.abs(l-A)?c:l;let x=n*t;const C=f+x,v=o===void 0?C:o(C);v!==C&&(x=v-f);const g=A=>-x*Math.exp(-A/r),y=A=>v+g(A),T=A=>{const S=g(A),j=y(A);d.done=Math.abs(S)<=i,d.value=d.done?v:j};let w,O;const M=A=>{m(d.value)&&(w=A,O=on({keyframes:[d.value,h(d.value)],velocity:an(y,A,d.value),damping:s,stiffness:a,restDelta:i,restSpeed:u}))};return M(0),{calculatedDuration:null,next:A=>{let S=!1;return!O&&w===void 0&&(S=!0,T(A),M(A)),w!==void 0&&A>w?O.next(A-w):(!S&&T(A),d)}}}const ls=e=>{const t=({timestamp:n})=>e(n);return{start:()=>R.update(t,!0),stop:()=>Ot(t),now:()=>Q.isProcessing?Q.timestamp:performance.now()}},it=2e4;function ct(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<it;)t+=n,r=e.next(t);return t>=it?1/0:t}const us={decay:ot,inertia:ot,tween:ce,keyframes:ce,spring:on};function le({autoplay:e=!0,delay:t=0,driver:n=ls,keyframes:r,type:s="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:c="loop",onPlay:l,onStop:i,onComplete:u,onUpdate:f,...d}){let m=1,h=!1,x,C;const v=()=>{C=new Promise(V=>{x=V})};v();let g;const y=us[s]||ce;let T;y!==ce&&typeof r[0]!="number"&&(T=rn([0,100],r,{clamp:!1}),r=[0,100]);const w=y({...d,keyframes:r});let O;c==="mirror"&&(O=y({...d,keyframes:[...r].reverse(),velocity:-(d.velocity||0)}));let M="idle",A=null,S=null,j=null;w.calculatedDuration===null&&a&&(w.calculatedDuration=ct(w));const{calculatedDuration:pe}=w;let U=1/0,E=1/0;pe!==null&&(U=pe+o,E=U*(a+1)-o);let k=0;const ge=V=>{if(S===null)return;m>0&&(S=Math.min(S,V)),m<0&&(S=Math.min(V-E/m,S)),A!==null?k=A:k=Math.round(V-S)*m;const q=k-t*(m>=0?1:-1),$e=m>=0?q<0:q>E;k=Math.max(q,0),M==="finished"&&A===null&&(k=E);let He=k,Ge=w;if(a){const ye=k/U;let ne=Math.floor(ye),L=ye%1;!L&&ye>=1&&(L=1),L===1&&ne--,ne=Math.min(ne,a+1);const Ue=!!(ne%2);Ue&&(c==="reverse"?(L=1-L,o&&(L-=o/U)):c==="mirror"&&(Ge=O));let qe=H(0,1,L);k>E&&(qe=c==="reverse"&&Ue?1:0),He=qe*U}const Z=$e?{done:!1,value:r[0]}:Ge.next(He);T&&(Z.value=T(Z.value));let{done:Ke}=Z;!$e&&pe!==null&&(Ke=m>=0?k>=E:k<=0);const pn=A===null&&(M==="finished"||M==="running"&&Ke);return f&&f(Z.value),pn&&hn(),Z},ze=()=>{g&&g.stop(),g=void 0},je=()=>{M="idle",ze(),x(),v(),S=j=null},hn=()=>{M="finished",u&&u(),ze(),x()},Ee=()=>{if(h)return;g||(g=n(ge));const V=g.now();l&&l(),A!==null?S=V-A:(!S||M==="finished")&&(S=V),M==="finished"&&v(),j=S,A=null,M="running",g.start()};e&&Ee();const Ne={then(V,q){return C.then(V,q)},get time(){return I(k)},set time(V){V=z(V),k=V,A!==null||!g||m===0?A=V:S=g.now()-V/m},get duration(){const V=w.calculatedDuration===null?ct(w):w.calculatedDuration;return I(V)},get speed(){return m},set speed(V){V===m||!g||(m=V,Ne.time=I(k))},get state(){return M},play:Ee,pause:()=>{M="paused",A=k},stop:()=>{h=!0,M!=="idle"&&(M="idle",i&&i(),je())},cancel:()=>{j!==null&&ge(j),je()},complete:()=>{M="finished"},sample:V=>(S=0,ge(V))};return Ne}function fs(e){let t;return()=>(t===void 0&&(t=e()),t)}const ds=fs(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ms=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ae=10,hs=2e4,ps=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Bt(t.ease);function gs(e,t,{onUpdate:n,onComplete:r,...s}){if(!(ds()&&ms.has(t)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let o=!1,c,l;const i=()=>{l=new Promise(g=>{c=g})};i();let{keyframes:u,duration:f=300,ease:d,times:m}=s;if(ps(t,s)){const g=le({...s,repeat:0,delay:0});let y={done:!1,value:u[0]};const T=[];let w=0;for(;!y.done&&w<hs;)y=g.sample(w),T.push(y.value),w+=ae;m=void 0,u=T,f=w-ae,d="linear"}const h=Sr(e.owner.current,t,u,{...s,duration:f,ease:d,times:m});s.syncStart&&(h.startTime=Q.isProcessing?Q.timestamp:document.timeline?document.timeline.currentTime:performance.now());const x=()=>h.cancel(),C=()=>{R.update(x),c(),i()};return h.onfinish=()=>{e.set(vr(u,s)),r&&r(),C()},{then(g,y){return l.then(g,y)},attachTimeline(g){return h.timeline=g,h.onfinish=null,D},get time(){return I(h.currentTime||0)},set time(g){h.currentTime=z(g)},get speed(){return h.playbackRate},set speed(g){h.playbackRate=g},get duration(){return I(f)},play:()=>{o||(h.play(),Ot(x))},pause:()=>h.pause(),stop:()=>{if(o=!0,h.playState==="idle")return;const{currentTime:g}=h;if(g){const y=le({...s,autoplay:!1});e.setWithVelocity(y.sample(g-ae).value,y.sample(g).value,ae)}C()},complete:()=>h.finish(),cancel:C}}function ys({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const s=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:D,pause:D,stop:D,then:a=>(a(),Promise.resolve()),cancel:D,complete:D});return t?le({keyframes:[0,1],duration:0,delay:t,onComplete:s}):s()}const bs={type:"spring",stiffness:500,damping:25,restSpeed:10},xs=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),As={type:"keyframes",duration:.8},ws={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Cs=(e,{keyframes:t})=>t.length>2?As:de.has(e)?e.startsWith("scale")?xs(t[1]):bs:ws,Pe=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(K.test(t)||t==="0")&&!t.startsWith("url(")),Vs=new Set(["brightness","contrast","saturate","opacity"]);function Ts(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(me)||[];if(!r)return e;const s=n.replace(r,"");let a=Vs.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+s+")"}const Ms=/([a-z-]*)\(.*?\)/g,ke={...K,getAnimatableNone:e=>{const t=e.match(Ms);return t?t.map(Ts).join(" "):e}},Ss={...At,color:P,backgroundColor:P,outlineColor:P,fill:P,stroke:P,borderColor:P,borderTopColor:P,borderRightColor:P,borderBottomColor:P,borderLeftColor:P,filter:ke,WebkitFilter:ke},vs=e=>Ss[e];function cn(e,t){let n=vs(e);return n!==ke&&(n=K),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ln=e=>/^0[^.\s]+$/.test(e);function Ps(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||ln(e)}function ks(e,t,n,r){const s=Pe(t,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const o=r.from!==void 0?r.from:e.get();let c;const l=[];for(let i=0;i<a.length;i++)a[i]===null&&(a[i]=i===0?o:a[i-1]),Ps(a[i])&&l.push(i),typeof a[i]=="string"&&a[i]!=="none"&&a[i]!=="0"&&(c=a[i]);if(s&&l.length&&c)for(let i=0;i<l.length;i++){const u=l[i];a[u]=cn(t,c)}return a}function Ds({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:s,repeat:a,repeatType:o,repeatDelay:c,from:l,elapsed:i,...u}){return!!Object.keys(u).length}function Os(e,t){return e[t]||e.default||e}const Fs=(e,t,n,r={})=>s=>{const a=Os(r,e)||{},o=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-z(o);const l=ks(t,e,n,a),i=l[0],u=l[l.length-1],f=Pe(e,i),d=Pe(e,u);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-c,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()}};if(Ds(a)||(m={...m,...Cs(e,m)}),m.duration&&(m.duration=z(m.duration)),m.repeatDelay&&(m.repeatDelay=z(m.repeatDelay)),!f||!d||Mr.current||a.type===!1)return ys(m);if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const h=gs(t,e,m);if(h)return h}return le(m)};function Rs(e){return!!(B(e)&&e.add)}const Is=e=>/^\-?\d*\.?\d+$/.test(e);function Bs(e,t){e.indexOf(t)===-1&&e.push(t)}function Ls(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ws{constructor(){this.subscriptions=[]}add(t){return Bs(this.subscriptions,t),()=>Ls(this.subscriptions,t)}notify(t,n,r){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,r);else for(let a=0;a<s;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const zs=e=>!isNaN(parseFloat(e));class js{constructor(t,n={}){this.version="10.16.4",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,s=!0)=>{this.prev=this.current,this.current=r;const{delta:a,timestamp:o}=Q;this.lastUpdated!==o&&(this.timeDelta=a,this.lastUpdated=o,R.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>R.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=zs(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Ws);const r=this.events[t].add(n);return t==="change"?()=>{r(),R.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?sn(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function un(e,t){return new js(e,t)}const fn=e=>t=>t.test(e),Es={test:e=>e==="auto",parse:e=>e},dn=[G,p,$,F,Hn,$n,Es],ra=e=>dn.find(fn(e)),Ns=[...dn,P,K],$s=e=>Ns.find(fn(e));function Hs(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,un(n))}function We(e,t){const n=Ie(e,t);let{transitionEnd:r={},transition:s={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const o in a){const c=lr(a[o]);Hs(e,o,c)}}function De(e,t){[...t].reverse().forEach(r=>{const s=e.getVariant(r);s&&We(e,s),e.variantChildren&&e.variantChildren.forEach(a=>{De(a,t)})})}function sa(e,t){if(Array.isArray(t))return De(e,t);if(typeof t=="string")return De(e,[t]);We(e,t)}function aa(e,t,n){var r,s;const a=Object.keys(t).filter(c=>!e.hasValue(c)),o=a.length;if(o)for(let c=0;c<o;c++){const l=a[c],i=t[l];let u=null;Array.isArray(i)&&(u=i[0]),u===null&&(u=(s=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&s!==void 0?s:t[l]),u!=null&&(typeof u=="string"&&(Is(u)||ln(u))?u=parseFloat(u):!$s(u)&&K.test(i)&&(u=cn(l,i)),e.addValue(l,un(u,{owner:e})),n[l]===void 0&&(n[l]=u),u!==null&&e.setBaseTarget(l,u))}}function Gs(e,t){return t?(t[e]||t.default||t).from:void 0}function oa(e,t,n){const r={};for(const s in e){const a=Gs(s,t);if(a!==void 0)r[s]=a;else{const o=n.getValue(s);o&&(r[s]=o.get())}}return r}function Ks({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function mn(e,t,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...c}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(a=r);const i=[],u=s&&e.animationState&&e.animationState.getState()[s];for(const f in c){const d=e.getValue(f),m=c[f];if(!d||m===void 0||u&&Ks(u,f))continue;const h={delay:n,elapsed:0,...a};if(window.HandoffAppearAnimations&&!d.hasAnimated){const C=e.getProps()[Vr];C&&(h.elapsed=window.HandoffAppearAnimations(C,f,d,R),h.syncStart=!0)}d.start(Fs(f,d,m,e.shouldReduceMotion&&de.has(f)?{type:!1}:h));const x=d.animation;Rs(l)&&(l.add(f),x.then(()=>l.remove(f))),i.push(x)}return o&&Promise.all(i).then(()=>{o&&We(e,o)}),i}function Oe(e,t,n={}){const r=Ie(e,t,n.custom);let{transition:s=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const a=r?()=>Promise.all(mn(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:i=0,staggerChildren:u,staggerDirection:f}=s;return Us(e,t,i+l,u,f,n)}:()=>Promise.resolve(),{when:c}=s;if(c){const[l,i]=c==="beforeChildren"?[a,o]:[o,a];return l().then(()=>i())}else return Promise.all([a(),o(n.delay)])}function Us(e,t,n=0,r=0,s=1,a){const o=[],c=(e.variantChildren.size-1)*r,l=s===1?(i=0)=>i*r:(i=0)=>c-i*r;return Array.from(e.variantChildren).sort(qs).forEach((i,u)=>{i.notify("AnimationStart",t),o.push(Oe(i,t,{...a,delay:n+l(u)}).then(()=>i.notify("AnimationComplete",t)))}),Promise.all(o)}function qs(e,t){return e.sortNodePosition(t)}function ia(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const s=t.map(a=>Oe(e,a,n));r=Promise.all(s)}else if(typeof t=="string")r=Oe(e,t,n);else{const s=typeof t=="function"?Ie(e,t,n.custom):t;r=Promise.all(mn(e,s,n))}return r.then(()=>e.notify("AnimationComplete",t))}const Zs=Rn(br),_s=b.memo(b.forwardRef(({children:e,...t},n)=>Ve.jsx(Zs.button,{initial:!0,whileFocus:{scale:1.02},whileHover:{scale:1.02},whileTap:{scale:.95},...t,ref:n,children:e}))),Xs=e=>gn.createElement("a",e,e.children),lt=yn({base:"inline-flex items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none",variants:{variant:{primary:Ze("bg-accent text-zinc-100","active:contrast-125 hover:contrast-[1.10]","font-semibold","disabled:bg-gray-400 disabled:opacity-30 disabled:dark:bg-gray-800 disabled:dark:text-slate-50 disabled:cursor-not-allowed","dark:text-neutral-800"),secondary:Ze("group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20","disabled:bg-gray-400 disabled:opacity-30 disabled:dark:bg-gray-800 disabled:dark:text-slate-50 disabled:cursor-not-allowed")}}}),ca=({variant:e="primary",className:t,href:n,...r})=>n?Ve.jsx(Xs,{href:n,className:lt({variant:e,className:t}),...r}):Ve.jsx(_s,{className:lt({variant:e,className:t}),...r}),la={type:"spring",damping:24},ua={type:"spring",stiffness:300,damping:20},fa={duration:.35,type:"spring",stiffness:120,damping:20};export{Fe as $,An as A,Fs as B,$ as C,p as D,K as E,ea as F,kn as G,Ht as H,Bs as I,Ls as J,Ws as K,Pn as L,_s as M,Os as N,na as O,ft as P,ur as Q,gt as R,ca as S,ta as T,Is as U,fe as V,ra as W,Rt as X,dt as Y,G as Z,Rs as _,or as a,Tn as a0,de as a1,kt as a2,Me as a3,Vn as a4,oa as a5,aa as a6,vs as a7,zn as a8,wt as a9,Pt as aa,nr as ab,rr as ac,vt as ad,ar as ae,Tt as af,sr as ag,St as ah,pt as ai,vn as aj,mt as ak,le as al,sa as am,ua as b,Xs as c,la as d,un as e,R as f,ut as g,Ot as h,B as i,ht as j,ir as k,Te as l,Zs as m,D as n,ia as o,Ft as p,z as q,Ie as r,fa as s,I as t,bn as u,Cn as v,Q as w,he as x,nn as y,H as z};
