const options = {
  style: { position: "absolute" },
  detectRetina: true,
  fpsLimit: 30,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "trail",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200,
        duration: 0.4,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 200,
        links: {
          opacity: 1,
          color: "#ffffff",
        },
      },
      push: {
        quantity: 10,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 2,
        speed: 0.5,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 0.005,
        pauseOnStop: true,
        quantity: 5,
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 400,
              sync: true,
            },
          },
          collisions: {
            enable: false,
            overlap: {},
          },
          links: {
            enable: false,
            shadow: {},
            triangles: {},
          },
          move: {
            outModes: {
              default: "destroy",
            },
            speed: 2,
            attract: {
              rotate: {},
            },
            distance: {},
            gravity: {},
            trail: {},
          },
          size: {
            value: 5,
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 1,
              sync: true,
              startValue: "min",
              destroy: "max",
            },
          },
          number: {
            density: {},
          },
          roll: {
            darken: {},
            enlighten: {},
          },
          rotate: {
            animation: {},
          },
          shadow: {
            offset: {},
          },
          shape: {},
          stroke: {
            color: {
              value: "",
              animation: {
                count: 0,
                enable: false,
                offset: {
                  max: 0,
                  min: 0,
                },
                speed: 0,
                sync: false,
              },
            },
          },
          tilt: {
            animation: {},
          },
          twinkle: {
            lines: {},
            particles: {},
          },
          wobble: {},
        },
      },
    },
  },
  particles: {
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    reduceDuplicates: true,
    rotate: {
      animation: {
        enable: true,
        speed: { min: 10, max: 15 },
      },
    },
    links: {
      color: "random",
      distance: 50,
      enable: true,
      opacity: 1,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "destroy",
      speed: 5,
      random: false,
      straight: false,
      warp: true,
    },
    lineLinked: {
      blink: false,
      color: "random",
      consent: false,
      distance: 30,
      enable: true,
      opacity: 0.3,
      width: 0.5,
    },
    number: {
      density: {
        enable: true,
        area: 200,
      },
      limit: 30,
      value: 0,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 5, max: 10 },
    },
  },
};

export default options;
