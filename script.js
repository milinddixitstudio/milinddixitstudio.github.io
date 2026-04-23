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

if (revealElements.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealElements.forEach((element) => observer.observe(element));
}

const navLinks = document.querySelectorAll("[data-section-link]");
const scrollTargets = document.querySelectorAll(".scroll-target");

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
    threshold: 0.4,
    rootMargin: "-20% 0px -35% 0px"
  });

  scrollTargets.forEach((section) => sectionObserver.observe(section));
}

if (window.location.hash && document.querySelector(window.location.hash)) {
  window.addEventListener("load", () => {
    setTimeout(() => scrollToSection(window.location.hash, false), 120);
  });
}

const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panel-title");
const panelText = document.getElementById("panel-text");
const panelTag = document.getElementById("panel-tag");
const panelClose = document.getElementById("panel-close");

if (panel && panelTitle && panelText && panelTag) {
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

  const closePanel = () => {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

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

document.querySelectorAll(".track, .social-card, .mini-card, .about-card, .contact-card").forEach((card) => {
  if (prefersReducedMotion) {
    return;
  }

  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

document.querySelectorAll(".magnetic-button").forEach((button) => {
  if (prefersReducedMotion) {
    return;
  }

  button.addEventListener("pointermove", (event) => {
    const rect = button.getBoundingClientRect();
    const moveX = (event.clientX - (rect.left + rect.width / 2)) * 0.08;
    const moveY = (event.clientY - (rect.top + rect.height / 2)) * 0.12;
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  button.addEventListener("pointerleave", () => {
    button.style.transform = "";
  });
});

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
