import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Navbar from "../components/Navbar";
import LoadingPage from "@/components/LoadingPage";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const options = {
    style: { position: "absolute" },
    // background: {},
    // backgroundMask: {
    //   cover: {
    //     color: {
    //       value: "#fff",
    //     },
    //     opacity: 1,
    //   },
    //   enable: false,
    // },
    detectRetina: true,
    fpsLimit: 30,
    // infection: {
    //   cure: false,
    //   delay: 0,
    //   enable: false,
    //   infections: 10,
    //   stages: [],
    // },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
          // parallax: {
          //   enable: false,
          //   force: 2,
          //   smooth: 10,
          // },
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
      },
    },
    particles: {
      // collisions: {
      //   enable: false,
      //   mode: "bounce",
      // },
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
        // "blink": false,
        color: "random",
        // "consent": false,
        distance: 50,
        enable: true,
        opacity: 1,
        // shadow: {
        //   blur: 5,
        //   color: {
        //     value: "lime",
        //   },
        //   enable: false,
        // },
        // triangles: {
        //   enable: false,
        // },
        width: 1,
      },
      move: {
        // attract: {
        //   enable: false,
        //   rotate: {
        //     x: 3000,
        //     y: 3000,
        //   },
        // },
        direction: "none",
        enable: true,
        // noise: {
        //   delay: {
        //     random: {
        //       enable: false,
        //       minimumValue: 0,
        //     },
        //     value: 0,
        //   },
        //   enable: false,
        // },
        outMode: "destroy",
        speed: 5,
        random: false,
        straight: false,
        // trail: {
        //   enable: false,
        //   length: 10,
        //   fillColor: {
        //     value: "#000000",
        //   },
        // },
        // vibrate: false,
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
          area: 400,
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

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <LoadingPage
        content={
          <div>
            <Particles options={options} init={particlesInit} />
            <Navbar />
            <Component {...pageProps} />
          </div>
        }
      />
    </>
  );
}

export default MyApp;
