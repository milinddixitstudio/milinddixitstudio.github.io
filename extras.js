// ===== Scroll Progress =====
const progress = document.createElement("div");
progress.id = "scrollProgress";
document.body.appendChild(progress);

window.onscroll = () => {
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  progress.style.width = scrolled + "%";
};

// ===== Cursor Glow =====
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ===== Floating Contact Bubble =====
const bubble = document.createElement("div");
bubble.id = "contactBubble";
bubble.innerHTML = "✉";
bubble.onclick = () => {
  window.location.href = "#contact";
};
document.body.appendChild(bubble);

// ===== Floating Music Bar =====
const musicBar = document.createElement("div");
musicBar.id = "musicBar";
musicBar.innerHTML = `
  <span>Lost Within</span>
  <button onclick="alert('Connect real audio here')">Play</button>
`;
document.body.appendChild(musicBar);

// ===== Music Orb =====
const orb = document.createElement("div");
orb.id = "musicOrb";
orb.innerHTML = "♪";
orb.onclick = () => {
  musicBar.style.display = musicBar.style.display === "none" ? "flex" : "none";
};
document.body.appendChild(orb);

// ===== Light Rain Effect =====
for (let i = 0; i < 40; i++) {
  let drop = document.createElement("div");
  drop.classList.add("rain");
  drop.style.left = Math.random() * window.innerWidth + "px";
  drop.style.animationDuration = 1 + Math.random() * 2 + "s";
  document.body.appendChild(drop);
}

// ===== Smooth Fade Transition =====
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.href && this.target !== "_blank") {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location = this.href;
      }, 300);
    }
  });
});

document.body.style.transition = "opacity 0.3s ease";
document.body.style.opacity = 1;
