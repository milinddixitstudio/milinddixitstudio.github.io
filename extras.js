// ===================================
// CLEAN FINAL FORM
// ===================================

const isMobile = window.innerWidth < 768;

// ---------------------------
// REMOVE CURSOR PARALLAX
// ---------------------------
// (Completely removed background movement)

// ---------------------------
// HIDE CONTACT SECTION FROM PAGE
// ---------------------------
window.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector("#contact");
  if (contactSection) {
    contactSection.style.display = "none";
  }
});

// ---------------------------
// SCROLL PROGRESS (Keep)
// ---------------------------
const progress = document.createElement("div");
progress.id = "scrollProgress";
document.body.appendChild(progress);

window.addEventListener("scroll", () => {
  let scrolled =
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;
  progress.style.width = scrolled + "%";
});

// ---------------------------
// PLATFORM MODAL (Music Orb)
// ---------------------------
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

modal.addEventListener("click", e => {
  if (e.target.id === "platformModal") {
    modal.classList.remove("show");
  }
});

// ---------------------------
// MUSIC ORB (Keep)
// ---------------------------
const orb = document.createElement("div");
orb.id = "musicOrb";
orb.innerHTML = "♪";
orb.onclick = () => modal.classList.toggle("show");
document.body.appendChild(orb);

// ---------------------------
// CONTACT BUBBLE PANEL
// ---------------------------
const bubble = document.createElement("div");
bubble.id = "contactBubble";
bubble.innerHTML = "✉";
document.body.appendChild(bubble);

const contactPanel = document.createElement("div");
contactPanel.id = "contactPanel";
contactPanel.innerHTML = `
  <div class="contactGlass">
    <h3>Contact / Collaborate</h3>
    ${document.querySelector("#contact")?.innerHTML || ""}
  </div>
`;
document.body.appendChild(contactPanel);

bubble.onclick = () => {
  contactPanel.classList.toggle("show");
};

// Close when clicking outside
contactPanel.addEventListener("click", e => {
  if (e.target.id === "contactPanel") {
    contactPanel.classList.remove("show");
  }
});
