var a=(...[e,t=2])=>{if(e===0)return"0 Bytes";const r=Math.floor(Math.log(e)/Math.log(o));return`${Number.parseFloat((e/o**r).toFixed(t<0?0:t))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}`};const o=1024;export{o as Kilobyte,a as default};
