// Animated ambient gradient background
const bg=document.getElementById("background")
let hue=200
function animateBG(){
  hue+=0.1
  bg.style.background=`radial-gradient(circle at center, hsl(${hue},30%,15%), #000)`
  requestAnimationFrame(animateBG)
}
animateBG()

// VANTA waves animation
VANTA.WAVES({
  el:"#background",
  mouseControls:true,
  touchControls:true,
  gyroControls:false,
  color:0x111111,
  shininess:50,
  waveHeight:20,
  waveSpeed:1
});
