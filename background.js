tsParticles.load("particles", {
  particles: {
    number: { value: 60 },
    color: { value: ["#ff6ec7", "#ffb347", "#ffffff"] },
    shape: { type: "circle" },
    opacity: { value: 0.7 },
    size: { value: { min: 2, max: 6 } },
    move: { enable: true, speed: 1, direction: "none", outModes: "bounce" }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" } }
  },
  retina_detect: true
});
