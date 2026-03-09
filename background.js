const bg=document.getElementById("background")

let hue=200

function animateBG(){

hue+=0.1

bg.style.background=
`radial-gradient(circle at center, hsl(${hue},30%,15%), #000)`

requestAnimationFrame(animateBG)

}

animateBG()
