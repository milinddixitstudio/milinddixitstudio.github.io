// ================================
// PRO MODE UPGRADE
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

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

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
// Floating Contact Bubble
// ================================
const bubble = document.createElement("div");
bubble.id = "contactBubble";
bubble.innerHTML = "✉";
bubble.onclick = () => {
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
};
document.body.appendChild(bubble);

// ================================
// REAL Audio Player
// ================================
const audio = new Audio("your-audio-file.mp3"); // PUT YOUR FILE NAME HERE
audio.loop = true;

const musicBar = document.createElement("div");
musicBar.id = "musicBar";
musicBar.innerHTML = `
  <span style="font-weight:500;">Lost Within</span>
  <button id="playBtn">Play</button>
`;
document.body.appendChild(musicBar);

const playBtn = document.getElementById("playBtn");

playBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "Pause";
  } else {
    audio.pause();
    playBtn.innerText = "Play";
  }
};

// ================================
// Floating Music Orb
// ================================
const orb = document.createElement("div");
orb.id = "musicOrb";
orb.innerHTML = "♪";
orb.onclick = () => {
  musicBar.style.display =
    musicBar.style.display === "none" ? "flex" : "none";
};
document.body.appendChild(orb);

// ================================
// Rain ONLY on Top Section
// ================================
function createRain() {
  const heroHeight = window.innerHeight;

  for (let i = 0; i < 35; i++) {
    let drop = document.createElement("div");
    drop.classList.add("rain");
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.top = Math.random() * heroHeight + "px";
    drop.style.animationDuration = 1 + Math.random() * 2 + "s";
    document.body.appendChild(drop);
  }
}
createRain();

// ================================
// Smooth Page Fade
// ================================
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.hostname === window.location.hostname) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location = this.href;
      }, 400);
    }
  });
});

document.body.style.transition = "opacity 0.4s ease";
document.body.style.opacity = 1;

// ================================
// Parallax Effect (Subtle)
// ================================
document.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

  document.querySelectorAll("section").forEach(sec => {
    sec.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
