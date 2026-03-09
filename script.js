// Popup Track Descriptions
const popupData={
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

function openPopup(track){
  const popup=document.getElementById("popup")
  const title=document.getElementById("popup-title")
  const text=document.getElementById("popup-text")
  title.innerText=popupData[track].title
  text.innerText=popupData[track].text
  popup.style.display="flex"
}
function closePopup(){
  document.getElementById("popup").style.display="none"
}

// Footer Hide on Scroll
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
