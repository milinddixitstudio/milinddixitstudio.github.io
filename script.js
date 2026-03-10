function openSidebar(){

document.getElementById("sidebar").style.left="0";

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

function openTrack(track){

let text="";

if(track=="lost"){
text="<h2>Lost Within</h2><p>A cinematic ambient composition exploring emotional solitude and introspective sound textures.</p>";
}

if(track=="frost"){
text="<h2>Frosted Silence</h2><p>A cold atmospheric soundscape inspired by winter stillness and distant echoes.</p>";
}

if(track=="spread"){
text="<h2>Spread Out</h2><p>A spacious instrumental composition built around evolving textures and melodic expansion.</p>";
}

if(track=="trilochana"){
text="<h2>Trilochana</h2><p>A mystical composition inspired by ancient symbolism and spiritual sonic depth.</p><p><b>Release:</b> Coming Soon<br><b>Date:</b> TBA</p>";
}

document.getElementById("popup-text").innerHTML=text;

document.getElementById("popup").style.display="flex";

}
