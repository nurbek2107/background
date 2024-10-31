tsParticles.load("tsparticles", {
  background: {
    color: "#000"
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        opacity: 0.8,
        size: 10
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 150,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: ["#ffffff", "#f39c12", "#e74c3c", "#3498db"] // Various colors for particles
    },
    links: {
      color: "#ffffff",
      distance: 120,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      enable: true,
      speed: 2, // Fixed speed for consistent movement
      direction: "none",
      random: false,
      outMode: "bounce",
      straight: false
    },
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    opacity: {
      value: 0.6
    },
    shape: {
      type: ["circle", "triangle", "polygon"],
      polygon: {
        sides: 5
      }
    },
    size: {
      value: 5, // Fixed size for consistent appearance
      random: false
    }
  },
  detectRetina: true
});