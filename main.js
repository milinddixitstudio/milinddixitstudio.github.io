tsParticles.load("particles",{
background:{color:"#0f0f1a"},
particles:{
number:{value:80},
color:{value:"#4cc9f0"},
move:{enable:true,speed:1}
}
})

/* SCREEN SYSTEM */

function showScreen(id){

document.querySelectorAll(".screen").forEach(screen=>{
screen.classList.add("hidden")
})

document.getElementById(id).classList.remove("hidden")

}

/* ENTER STUDIO */

function enterStudio(){

showScreen("menu")

history.pushState({page:"menu"},"","")

}

/* OPEN SCREENS */

function openScreen(id){

showScreen(id)

history.pushState({page:id},"","")

}

/* BACK BUTTON */

function backMenu(){

showScreen("menu")

history.pushState({page:"menu"},"","")

}

/* BROWSER BACK SUPPORT */

window.onpopstate=function(event){

if(event.state && event.state.page){

showScreen(event.state.page)

}else{

showScreen("landing")

}

}

/* TRACK GRID */

const grid=document.getElementById("trackGrid")

tracks.forEach(track=>{

const card=document.createElement("div")

card.className="track"

card.innerHTML=` <img src="${track.image}">

<h3>${track.title}</h3>
`

card.onclick=()=>openPopup(track)

grid.appendChild(card)

})

/* POPUP */

function openPopup(track){

document.getElementById("popup").style.display="flex"

document.getElementById("popup-img").src=track.image

document.getElementById("popup-title").innerText=track.title

document.getElementById("popup-text").innerText=track.text

}

function closePopup(){

document.getElementById("popup").style.display="none"

}
