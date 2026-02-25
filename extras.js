// ===================================
// CLEAN CONTACT ONLY VERSION
// ===================================

window.addEventListener("DOMContentLoaded", () => {

  // ---------------------------------
  // HIDE ORIGINAL CONTACT SECTION
  // ---------------------------------
  const originalContact = document.querySelector("#contact");
  let contactContent = "";

  if (originalContact) {
    contactContent = originalContact.innerHTML;
    originalContact.remove(); // completely removes from page
  }

  // ---------------------------------
  // CREATE CONTACT BUBBLE
  // ---------------------------------
  const bubble = document.createElement("div");
  bubble.id = "contactBubble";
  bubble.innerHTML = "✉";
  document.body.appendChild(bubble);

  // ---------------------------------
  // CREATE FLOATING GLASS PANEL
  // ---------------------------------
  const panel = document.createElement("div");
  panel.id = "contactPanel";
  panel.innerHTML = contactContent;
  document.body.appendChild(panel);

  // ---------------------------------
  // TOGGLE PANEL
  // ---------------------------------
  bubble.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.toggle("show");
  });

  // ---------------------------------
  // CLOSE WHEN CLICKING OUTSIDE
  // ---------------------------------
  document.addEventListener("click", (e) => {
    if (!panel.contains(e.target) && !bubble.contains(e.target)) {
      panel.classList.remove("show");
    }
  });

});
