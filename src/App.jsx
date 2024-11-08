import { useMotionValue, useSpring, useAnimation } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackgroundParticles from "./components/BackgroundParticles";

import { useState, useEffect } from "react";

function App() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    x.set(clientX - 20);
    y.set(clientY - 20);
  };

  const handleClick = () => {
    controls.start({ scale: 0.8 }).then(() => {
      controls.start({ scale: 1 });
    });
  };

  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-gray-800 relative"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Background layer */}
      <BackgroundParticles />

      <div className="relative z-10">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <Technologies />
        <Experience />
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      {showArrow && (
        <button
          className="fixed bottom-4 right-4 p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-all"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </main>
  );
}

export default App;
