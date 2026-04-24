const trackDetails = {
  t1: {
    tag: "Released Track",
    title: "Lost Within",
    text: "A cinematic ambient composition shaped around emotional solitude, layered textures, and slow-burning sonic detail."
  },
  t2: {
    tag: "Released Track",
    title: "Frosted Silence",
    text: "A cold atmospheric world inspired by winter stillness, minimal movement, and the feeling of distant echoes."
  },
  t3: {
    tag: "Released Track",
    title: "Spread Out",
    text: "A spacious instrumental built on evolving textures and melodic expansion, designed to feel open, drifting, and immersive."
  },
  t4: {
    tag: "Upcoming Track",
    title: "Trilochana",
    text: "An upcoming production exploring deeper tonal narratives, cinematic tension, and spiritual visual symbolism. Release timing is still to be announced."
  },
  t5: {
    tag: "Released Track",
    title: "Soft Void",
    text: "A newly released atmospheric composition focused on softness, empty space, and a calm emotional pull that drifts with subtle cinematic motion."
  }
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll("[data-section-link]");
const scrollTargets = document.querySelectorAll(".scroll-target");
const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panel-title");
const panelText = document.getElementById("panel-text");
const panelTag = document.getElementById("panel-tag");
const panelClose = document.getElementById("panel-close");
const pointerHalo = document.querySelector(".pointer-halo");

if (revealElements.length) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px"
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

const scrollToSection = (hash, pushHash = true) => {
  const target = document.querySelector(hash);
  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start"
  });

  if (pushHash) {
    history.replaceState(null, "", hash);
  }
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) {
      return;
    }

    event.preventDefault();
    scrollToSection(href);
  });
});

if (scrollTargets.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  }, {
    threshold: 0.42,
    rootMargin: "-18% 0px -35% 0px"
  });

  scrollTargets.forEach((section) => sectionObserver.observe(section));
}

if (window.location.hash && document.querySelector(window.location.hash)) {
  window.addEventListener("load", () => {
    setTimeout(() => scrollToSection(window.location.hash, false), 120);
  });
}

if (panel && panelTitle && panelText && panelTag) {
  const closePanel = () => {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".track[data-track]").forEach((track) => {
    track.addEventListener("click", () => {
      const detail = trackDetails[track.dataset.track];
      if (!detail) {
        return;
      }

      panelTag.textContent = detail.tag;
      panelTitle.textContent = detail.title;
      panelText.textContent = detail.text;
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  panelClose?.addEventListener("click", closePanel);

  panel.addEventListener("click", (event) => {
    if (event.target === panel) {
      closePanel();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePanel();
    }
  });
}

const setScrollProgress = () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
};

setScrollProgress();
window.addEventListener("scroll", setScrollProgress, { passive: true });

if (!prefersReducedMotion) {
  const parallaxNodes = document.querySelectorAll(".visual-frame, .scene-banner");
  const interactiveCards = document.querySelectorAll(".track, .social-card, .about-card, .contact-card, .overview-card, .dash-card, .scene-banner");
  const magneticButtons = document.querySelectorAll(".magnetic-button");

  const pointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    currentX: window.innerWidth / 2,
    currentY: window.innerHeight / 2,
    active: false
  };

  const animatePointer = () => {
    pointer.currentX += (pointer.x - pointer.currentX) * 0.14;
    pointer.currentY += (pointer.y - pointer.currentY) * 0.14;

    if (pointerHalo) {
      pointerHalo.style.opacity = pointer.active ? "1" : "0";
      pointerHalo.style.transform = `translate3d(${pointer.currentX - 140}px, ${pointer.currentY - 140}px, 0)`;
    }

    window.requestAnimationFrame(animatePointer);
  };

  window.requestAnimationFrame(animatePointer);

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });

  window.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  interactiveCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 11;
      const rotateX = (py - 0.5) * -11;
      const shiftX = (px - 0.5) * 10;
      const shiftY = (py - 0.5) * 10;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${shiftX}px, ${shiftY - 6}px, 0)`;
      card.style.boxShadow = `${-rotateY * 1.4}px ${22 + py * 20}px 65px rgba(0, 0, 0, 0.42)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });
  });

  magneticButtons.forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      button.style.transform = `translate(${x * 0.12}px, ${y * 0.16}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });

  const updateParallax = () => {
    const scrollY = window.scrollY;

    parallaxNodes.forEach((node, index) => {
      const speed = 0.02 + (index * 0.01);
      const translateY = scrollY * speed;
      node.style.transform = `translate3d(0, ${translateY}px, 0)`;
    });
  };

  updateParallax();
  window.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateParallax);
  }, { passive: true });
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus && typeof emailjs !== "undefined") {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.textContent = "Sending your message...";

    try {
      await emailjs.sendForm("service_a4b3zu3", "template_ioithmv", contactForm);
      contactForm.reset();
      formStatus.textContent = "Message sent successfully.";
    } catch (error) {
      formStatus.textContent = "Message could not be sent right now. Please try again.";
    }
  });
}
