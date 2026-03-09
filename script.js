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

function openPopup(track){

const popup=document.getElementById("popup")
const title=document.getElementById("popup-title")
const text=document.getElementById("popup-text")

const data={

lostwithin:{
title:"Lost Within",
text:"A journey into the quiet corners of the mind where thoughts drift into deep introspection."
},

frostedsilence:{
title:"Frosted Silence",
text:"A frozen moment of calm where silence carries emotion and time feels suspended."
},

spreadout:{
title:"Spread Out",
text:"A track about expansion, where sound moves freely without boundaries."
},

trilochana:{
title:"Trilochana",
text:"Coming Soon — inspired by the symbolism of the third eye and deeper perception."
}

}

title.innerText=data[track].title
text.innerText=data[track].text

popup.style.display="flex"

}

function closePopup(){
document.getElementById("popup").style.display="none"
}
