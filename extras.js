// ===================================
// MOVE COLLAB SECTION INTO BUBBLE PANEL
// ===================================

window.addEventListener("load", function () {

  const originalContact = document.querySelector("#collabForm");
  if (!originalContact) return;

  // -----------------------------
  // Create Bubble (hidden first)
  // -----------------------------
  const bubble = document.createElement("div");
  bubble.id = "contactBubble";
  bubble.innerHTML = "✉";
  bubble.style.opacity = "0";
  bubble.style.pointerEvents = "none";
  document.body.appendChild(bubble);

  // -----------------------------
  // Create Floating Panel
  // -----------------------------
  const panel = document.createElement("div");
  panel.id = "contactPanel";
  document.body.appendChild(panel);

  // MOVE the collab section into panel
  panel.appendChild(originalContact);

  // Remove extra spacing
  originalContact.style.margin = "0";
  originalContact.style.padding = "0";

  // -----------------------------
  // Show bubble after intro
  // -----------------------------
  setTimeout(() => {
    bubble.style.opacity = "1";
    bubble.style.pointerEvents = "auto";
  }, 1800); // adjust if needed

  // -----------------------------
  // Toggle panel
  // -----------------------------
  bubble.addEventListener("click", function (e) {
    e.stopPropagation();
    panel.classList.toggle("show");
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (!panel.contains(e.target) && !bubble.contains(e.target)) {
      panel.classList.remove("show");
    }
  });

});
function setDynamicBackground() {
  const hour = new Date().getHours();
  let gradient;

  // 🌅 Sunrise (5am – 8am)
  if (hour >= 5 && hour < 8) {
    gradient = "linear-gradient(135deg, #1e3c72, #f7971e, #ffd200)";
  }

  // ☀ Morning (8am – 12pm)
  else if (hour >= 8 && hour < 12) {
    gradient = "linear-gradient(135deg, #56ccf2, #2f80ed)";
  }

  // 🌤 Afternoon (12pm – 5pm)
  else if (hour >= 12 && hour < 17) {
    gradient = "linear-gradient(135deg, #2980b9, #6dd5fa)";
  }

  // 🌇 Evening (5pm – 8pm)
  else if (hour >= 17 && hour < 20) {
    gradient = "linear-gradient(135deg, #614385, #516395)";
  }

  // 🌙 Night (8pm – 5am)
  else {
    gradient = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
  }

  document.body.style.background = gradient;
document.body.style.backgroundAttachment = "fixed";
}

setDynamicBackground();
