(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1525:(e,t,r)=>{Promise.resolve().then(r.bind(r,469)),Promise.resolve().then(r.bind(r,3854)),Promise.resolve().then(r.bind(r,5881)),Promise.resolve().then(r.bind(r,2696)),Promise.resolve().then(r.bind(r,3268)),Promise.resolve().then(r.bind(r,3746)),Promise.resolve().then(r.bind(r,7892)),Promise.resolve().then(r.bind(r,2437)),Promise.resolve().then(r.bind(r,5791)),Promise.resolve().then(r.bind(r,9029)),Promise.resolve().then(r.bind(r,1422)),Promise.resolve().then(r.bind(r,8958)),Promise.resolve().then(r.bind(r,2909)),Promise.resolve().then(r.bind(r,7166)),Promise.resolve().then(r.bind(r,5332)),Promise.resolve().then(r.bind(r,7261)),Promise.resolve().then(r.bind(r,7486)),Promise.resolve().then(r.bind(r,3121)),Promise.resolve().then(r.bind(r,6054)),Promise.resolve().then(r.bind(r,4039)),Promise.resolve().then(r.bind(r,5706)),Promise.resolve().then(r.bind(r,7934)),Promise.resolve().then(r.t.bind(r,3775,23)),Promise.resolve().then(r.bind(r,9255)),Promise.resolve().then(r.bind(r,4447)),Promise.resolve().then(r.bind(r,6634)),Promise.resolve().then(r.bind(r,3818))},3818:(e,t,r)=>{"use strict";r.d(t,{TimerStoreProvider:()=>m,G:()=>v});var n=r(5155),s=r(5047),i=r(2421);let u=()=>({endTime:null,count:3e5,remain:3e5,isPaused:!1}),l={endTime:null,count:3e5,remain:0,isPaused:!1},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return(0,i.y)()(t=>({...e,updateRemain:r=>t({...e,count:r,remain:r}),start:()=>t(e=>({endTime:new Date(Date.now()+e.remain),isPaused:!1})),pause:()=>t(e=>({remain:e.endTime?e.endTime.getTime()-Date.now():e.remain,isPaused:!0})),reset:()=>t(t=>({...e,count:t.count,remain:t.count}))}))};var a=r(2115),d=r(5521);let c=(0,a.createContext)(null),m=e=>{let{children:t}=e,r=(0,a.useRef)(null),i=(0,a.useCallback)(()=>{var e;if(null===r.current)return;let t=(null!==(e=r.current.getState().endTime)&&void 0!==e?e:new Date).getTime()-Date.now();if(t>0){r.current.setState({remain:t});return}r.current.setState({endTime:null,remain:0}),r.current.getState().pause()},[]),{pause:l,resume:d}=(0,s.A)(i,1e3);return r.current||(r.current=o(u()),r.current.setState(e=>({pause:()=>{l(),e.pause()},start:()=>{d(),e.start()},reset:()=>{l(),e.reset()}}))),(0,n.jsx)(c.Provider,{value:r.current,children:t})},v=e=>{let t=(0,a.useContext)(c);if(!t)throw Error("useTimerStore must be used within TimerStoreProvider");return(0,d.P)(t,e)}},4447:(e,t,r)=>{"use strict";r.d(t,{FullscreenProvider:()=>u,H:()=>l});var n=r(5155),s=r(2115);let i=(0,s.createContext)(null),u=e=>{let{children:t}=e,[r,u]=(0,s.useState)(!1),l=(0,s.useRef)(null),o=(0,s.useCallback)(()=>{!document.fullscreenElement&&l.current?l.current.requestFullscreen():document.exitFullscreen&&document.exitFullscreen()},[]);return(0,s.useEffect)(()=>{let e=new AbortController,t=e.signal;return document.addEventListener("fullscreenchange",()=>{u(!!document.fullscreenElement)},{signal:t}),()=>{e.abort()}},[]),(0,n.jsx)(i.Provider,{value:{targetRef:l,isFullscreen:r,onToggle:o},children:t})},l=()=>{let e=(0,s.useContext)(i);if(!e)throw Error("useFullscreen must be used within FullscreenProvider");return e}},5047:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(2115);let s=function(e,t){let r=(0,n.useRef)(null),[s,i]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{r.current=e},[e]),(0,n.useEffect)(()=>{if(!t||t<=0||!s)return;function e(){r.current&&r.current()}e();let n=setInterval(e,t);return()=>clearInterval(n)},[t,s]),{pause:(0,n.useCallback)(()=>i(!1),[]),resume:(0,n.useCallback)(()=>i(!0),[])}}},6634:(e,t,r)=>{"use strict";r.d(t,{StopwatchStoreProvider:()=>m,I:()=>v});var n=r(5155),s=r(5047),i=r(2421);let u=()=>({startTime:null,stored:0,isPaused:!1}),l={startTime:null,stored:0,isPaused:!1},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return(0,i.y)()(t=>({...e,start:()=>t({startTime:new Date,isPaused:!1}),pause:()=>t(e=>{var t,r;return{stored:Date.now()-(null!==(r=null===(t=e.startTime)||void 0===t?void 0:t.getTime())&&void 0!==r?r:Date.now())+e.stored,isPaused:!0}}),reset:()=>t(e)}))};var a=r(2115),d=r(5521);let c=(0,a.createContext)(null),m=e=>{let{children:t}=e,r=(0,a.useRef)(null),i=(0,a.useCallback)(()=>{var e;if(null===r.current)return;let t=Date.now()-(null!==(e=r.current.getState().startTime)&&void 0!==e?e:new Date).getTime();t<=0||r.current.setState(e=>({stored:e.stored+t,startTime:new Date}))},[]),{pause:l,resume:d}=(0,s.A)(i,10);return r.current||(r.current=o(u()),r.current.setState(e=>({pause:()=>{l(),e.pause()},start:()=>{d(),e.start()},reset:()=>{l(),e.reset()}}))),(0,n.jsx)(c.Provider,{value:r.current,children:t})},v=e=>{let t=(0,a.useContext)(c);if(!t)throw Error("useStopwatchStore must be used within StopwatchStoreProvider");return(0,d.P)(t,e)}},9255:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(5902).A)({cssVariables:!0,typography:{fontFamily:"var(--font-roboto)"}})}},e=>{var t=t=>e(e.s=t);e.O(0,[122,406,722,441,684,358],()=>t(1525)),_N_E=e.O()}]);