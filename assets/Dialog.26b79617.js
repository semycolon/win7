var n=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,a=(n,e)=>{for(var t in e||(e={}))o.call(e,t)&&r(n,t,e[t]);if(i)for(var t of i(e))s.call(e,t)&&r(n,t,e[t]);return n};import{I as d}from"./trashcan_full.812acff9.js";import{i as c,p as l,r as p}from"./index.5cc0c64f.js";import{o as u,c as f,b as g,t as b,F as m,s as w,n as y}from"./vendor.c20d8341.js";var x="/win7/assets/ding.7020a1c6.wav";const h={error:"/win7/assets/error.8ced7e5c.png",info:"/win7/assets/info.e7aeb876.png",warning:"/win7/assets/warning.b92a9091.png",question:"/win7/assets/question.6e167781.png",delete:d},v={error:"/win7/assets/error.27dc9782.wav",info:x,warning:x,question:x,delete:x},$=(k=a(a({},c("$fs","$wm","$snd")),l({wmId:l.any(),type:{},content:{},buttons:{},title:{},defaultInput:{},autoClose:{},onClick:{}})),e(k,t({computed:{icon(){return h[this.type]},sound(){return v[this.type]}},mounted(){this.$snd.playSound(this.sound)},methods:{emitClick(n){"function"==typeof this.onClick&&this.onClick(n),this.autoClose&&this.$wm.closeWindow(this.wmId)}},style:({className:n})=>[n("dialog",{display:"flex",flexDirection:"column",background:p(244,1),"& > .body":{flexGrow:1,display:"flex",flexDirection:"row","& > .icon":{"&, & > img":{width:"64px"},padding:"10px",marginRight:"3px"},"& > .content":{flexGrow:1,padding:"20px"}},"& > .buttons":{display:"flex",justifyContent:"flex-end",borderTop:`solid ${p(0,.1)} 1px`,"& > button":{padding:"8px 15px",minWidth:"60px",margin:"10px 0",marginRight:"10px",border:`solid ${p(0,.2)} 1px`,borderRadius:"3px",background:`linear-gradient(180deg,\n              ${p(250,1)} 0%,\n              ${p(220,1)} 100%\n            )`,"&:hover, &:focus":{background:`linear-gradient(180deg,\n                ${p(255,1)} 0%,\n                ${p(230,1)} 100%\n              )`},"&:active":{background:`linear-gradient(180deg,\n                ${p(230,1)} 0%,\n                ${p(250,1)} 100%\n              )`}}}})]})));var k;const j={class:"body"},C={class:"icon"},O=["src"],I={class:"content"},P={class:"buttons"},q=["onClick"];$.render=function(n,e,t,i,o,s){return u(),f("div",{class:y(n.$style.dialog)},[g("div",j,[g("div",C,[g("img",{src:s.icon},null,8,O)]),g("div",I,b(n.content),1)]),g("div",P,[(u(!0),f(m,null,w(n.buttons,(n=>(u(),f("button",{key:n,onClick:e=>s.emitClick(n)},b(n),9,q)))),128))])],2)};export{$ as default};
