// ===================================
// MOVE CONTACT INTO FLOATING PANEL
// ===================================

window.addEventListener("load", function () {

  // ---------------------------------
  // Find original contact section
  // ---------------------------------
  const originalContact = document.querySelector("#contact");

  if (!originalContact) return;

  // ---------------------------------
  // Create Contact Bubble
  // ---------------------------------
  const bubble = document.createElement("div");
  bubble.id = "contactBubble";
  bubble.innerHTML = "✉";
  document.body.appendChild(bubble);

  // ---------------------------------
  // Create Floating Panel
  // ---------------------------------
  const panel = document.createElement("div");
  panel.id = "contactPanel";
  document.body.appendChild(panel);

  // ---------------------------------
  // MOVE contact section into panel
  // (This removes it from homepage)
  // ---------------------------------
  panel.appendChild(originalContact);

  // Optional: remove spacing issues
  originalContact.style.margin = "0";
  originalContact.style.padding = "0";

  // ---------------------------------
  // Toggle panel
  // ---------------------------------
  bubble.addEventListener("click", function (e) {
    e.stopPropagation();
    panel.classList.toggle("show");
  });

  // ---------------------------------
  // Close when clicking outside
  // ---------------------------------
  document.addEventListener("click", function (e) {
    if (!panel.contains(e.target) && !bubble.contains(e.target)) {
      panel.classList.remove("show");
    }
  });

});
