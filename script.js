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
