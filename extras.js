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
