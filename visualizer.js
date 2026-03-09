const bars=document.querySelectorAll(".visualizer div");
setInterval(()=>{
  bars.forEach(bar=>{
    bar.style.height=Math.random()*50+"px"
  })
},120);
