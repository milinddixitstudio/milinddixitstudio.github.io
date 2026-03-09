function openTrack(title,desc){

document.getElementById("popup").style.display="flex"

document.getElementById("trackTitle").innerText=title
document.getElementById("trackDesc").innerText=desc

}

function closePopup(){

document.getElementById("popup").style.display="none"

}

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

const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {

const pageHeight = document.body.scrollHeight;
const scrollPosition = window.innerHeight + window.scrollY;

if(scrollPosition >= pageHeight - 100){
footer.classList.add("hide");
}else{
footer.classList.remove("hide");
}

});

#footer{
position:fixed;
bottom:20px;
left:50%;
transform:translateX(-50%);
text-align:center;
font-size:14px;
letter-spacing:2px;
color:#aaa;
z-index:999;
transition:opacity 0.3s ease;
}

#footer.hide{
opacity:0;
pointer-events:none;
}
