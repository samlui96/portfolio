import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Navbar from "../components/Navbar";
import LoadingPage from "@/components/LoadingPage";
import options from "../particleOptions";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
