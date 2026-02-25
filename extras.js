// ================================
// ELITE MODE
// ================================

// ===== Scroll Progress =====
const progress = document.createElement("div");
progress.id = "scrollProgress";
document.body.appendChild(progress);

window.addEventListener("scroll", () => {
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progress.style.width = (winScroll / height) * 100 + "%";
});

// ================================
// Smooth Cursor Glow
// ================================
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  posX += (mouseX - posX) * 0.15;
  posY += (mouseY - posY) * 0.15;
  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ================================
// REAL Audio
// ================================
const audio = new Audio("your-audio-file.mp3");
audio.loop = true;

// ================================
// Music Bar with Wave Animation
// ================================
const musicBar = document.createElement("div");
musicBar.id = "musicBar";
musicBar.innerHTML = `
  <span style="font-weight:500;">Lost Within</span>
  <div id="wave"></div>
  <button id="playBtn">Play</button>
`;
document.body.appendChild(musicBar);

const playBtn = document.getElementById("playBtn");

playBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "Pause";
    document.getElementById("wave").classList.add("active");
  } else {
    audio.pause();
    playBtn.innerText = "Play";
    document.getElementById("wave").classList.remove("active");
  }
};

// ================================
// Platform Glass Modal
// ================================
const modal = document.createElement("div");
modal.id = "platformModal";
modal.innerHTML = `
  <div class="modalGlass">
    <h3>Listen On</h3>
    <a href="YOUR_SPOTIFY_LINK" target="_blank">Spotify</a>
    <a href="YOUR_YOUTUBE_LINK" target="_blank">YouTube</a>
    <a href="YOUR_AMAZON_LINK" target="_blank">Amazon Music</a>
  </div>
`;
document.body.appendChild(modal);

// ================================
// Floating Music Orb
// ================================
const orb = document.createElement("div");
orb.id = "musicOrb";
orb.innerHTML = "♪";
orb.onclick = () => {
  modal.classList.toggle("show");
};
document.body.appendChild(orb);

// ================================
// Magnetic Buttons
// ================================
document.addEventListener("mousemove", e => {
  document.querySelectorAll("a, button").forEach(btn => {
    const rect = btn.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width/2);
    const dy = e.clientY - (rect.top + rect.height/2);
    btn.style.transform = `translate(${dx*0.05}px, ${dy*0.05}px)`;
  });
});

// ================================
// Slow Animated Background
// ================================
document.body.style.background = "linear-gradient(270deg,#fdfbfb,#ebedee,#fbc2eb,#a6c1ee)";
document.body.style.backgroundSize = "600% 600%";
document.body.style.animation = "bgMove 20s ease infinite";
