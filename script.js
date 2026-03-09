// Track descriptions
const popupData = {
  lostwithin: {
    title:"Lost Within",
    text:"A journey into the quiet corners of the mind where thoughts drift into deep introspection."
  },
  frostedsilence: {
    title:"Frosted Silence",
    text:"A frozen moment of calm where silence carries emotion and time feels suspended."
  },
  spreadout: {
    title:"Spread Out",
    text:"A track about expansion, where sound moves freely without boundaries."
  },
  trilochana: {
    title:"Trilochana",
    text:"Coming Soon — inspired by the symbolism of the third eye and deeper perception."
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

// Attach click listeners to gallery items dynamically
document.querySelectorAll(".gallery-grid .work-item").forEach(item => {
  item.addEventListener("click", () => {
    // Use data-track attribute instead of relying on HTML onclick
    const trackKey = item.getAttribute("data-track");
    if(trackKey) openPopup(trackKey);
  });
});

// Footer hide on scroll
const footer = document.getElementById("footer");
window.addEventListener("scroll", () => {
  const pageHeight = document.body.scrollHeight;
  const scrollPosition = window.innerHeight + window.scrollY;
  footer.classList.toggle("hide", scrollPosition >= pageHeight - 100);
});

// Footer hide on scroll
const footer = document.getElementById("footer");
window.addEventListener("scroll", () => {
  const pageHeight = document.body.scrollHeight;
  const scrollPosition = window.innerHeight + window.scrollY;
  footer.classList.toggle("hide", scrollPosition >= pageHeight - 100);
});

// Contact Form Submission via EmailJS
const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function(e){
  e.preventDefault(); // prevent page reload

  // send email using EmailJS
  emailjs.sendForm('service_a4b3zu3', 'template_ioithmv', this)
    .then(function(){
      alert("Message sent successfully!");
      contactForm.reset();
    }, function(error){
      alert("Oops! Something went wrong:\n" + JSON.stringify(error));
    });
});
