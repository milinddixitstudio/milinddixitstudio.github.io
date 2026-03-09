function openTrack(title,desc){

document.getElementById("popup").style.display="flex"

document.getElementById("trackTitle").innerText=title
document.getElementById("trackDesc").innerText=desc

}

function closePopup(){

document.getElementById("popup").style.display="none"

}

document.addEventListener("mousemove",e=>{

const glow=document.querySelector(".cursor-glow")

glow.style.left=e.clientX+"px"
glow.style.top=e.clientY+"px"

})
const canvas=document.getElementById("stars")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<150;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
})
}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height)

stars.forEach(s=>{
ctx.beginPath()
ctx.arc(s.x,s.y,s.r,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()
})

requestAnimationFrame(drawStars)

}

drawStars()

