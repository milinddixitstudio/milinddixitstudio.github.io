// Track descriptions
const popupData = {
  lostwithin: {
    title:"Lost Within",
    text:"Lost Within is a journey into the quiet corners of the mind.
"The track explores the feeling of drifting through thoughts, memories, and emotions where clarity slowly fades into introspection.

"Built with atmospheric textures and immersive melodies, the music reflects the moment when someone becomes completely absorbed in their inner world. It captures both the calm and the mystery of being lost in your own thoughts."""
  },
  frostedsilence: {
    title:"Frosted Silence",
    text:"Frosted Silence paints the sound of stillness.

"The track captures the feeling of standing in a frozen moment where everything around you feels quiet, distant, and suspended in time. Soft ambient layers and delicate melodic elements create a sonic landscape that feels cold, calm, and reflective.

"It is a piece about silence—not emptiness, but the kind of silence that holds emotion."""
  },
  spreadout: {
    title:"Spread Out",
    text:"Spread Out explores the idea of expansion — thoughts, energy, and sound moving freely without boundaries.

"The track gradually unfolds into a wide atmospheric space where rhythm and melody stretch outward. It represents the moment when creativity stops feeling contained and begins to flow endlessly.

"It is both uplifting and immersive, inviting the listener to let go and simply drift within the sound."""
  },
  trilochana: {
    title:"Trilochana",
    text:"Trilochana is an upcoming track inspired by the symbolism of the third eye — awareness, perception, and deeper vision beyond the ordinary.

"The music is built around a mystical atmosphere where powerful sonic elements meet meditative depth. It aims to create a feeling of awakening and spiritual energy through sound.

"This track is currently coming soon and will soon join the collection as a new chapter in the sonic journey.
" Status: Coming Soon
"Release: TBA """
  }
}

function openPopup(track){
  const popup = document.getElementById("popup");
  const title = document.getElementById("popup-title");
  const text = document.getElementById("popup-text");
  title.innerText = popupData[track].title;
  text.innerText = popupData[track].text;
  popup.style.display = "flex";
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

// Footer hide on scroll
const footer = document.getElementById("footer");
window.addEventListener("scroll", () => {
  const pageHeight = document.body.scrollHeight;
  const scrollPosition = window.innerHeight + window.scrollY;
  footer.classList.toggle("hide", scrollPosition >= pageHeight - 100);
});

