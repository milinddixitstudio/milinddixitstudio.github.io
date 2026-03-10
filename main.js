tsParticles.load("particles",{
background:{color:"#0f0f1a"},
particles:{number:{value:80},color:{value:"#4cc9f0"},move:{enable:true,speed:1}}
})

function enterStudio(){

document.getElementById("landing").classList.add("hidden")

document.getElementById("menu").classList.remove("hidden")

}

function openScreen(id){

document.getElementById("menu").classList.add("hidden")

document.getElementById(id).classList.remove("hidden")

}

function backMenu(){

document.querySelectorAll(".screen").forEach(s=>s.classList.add("hidden"))

document.getElementById("menu").classList.remove("hidden")

}

const grid=document.getElementById("trackGrid")

tracks.forEach(track=>{

const card=document.createElement("div")

card.className="track"

card.innerHTML=`<img src="${track.image}"><h3>${track.title}</h3>`

card.onclick=()=>openPopup(track)

grid.appendChild(card)

})

function openPopup(track){

document.getElementById("popup").style.display="flex"

document.getElementById("popup-img").src=track.image

document.getElementById("popup-title").innerText=track.title

document.getElementById("popup-text").innerText=track.text

}

function closePopup(){

document.getElementById("popup").style.display="none"

}
