import React, { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Goal from "./components/Goal";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import useLenisScroll from './constants/useLenisScroll';

const App = () => {
  useLenisScroll();

  const [showIntro, setShowIntro] = useState(true);
  const [startMainAnimation, setStartMainAnimation] = useState(false);
  const introRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".intro-div", {
        opacity: 1,
        delay: 1.5,
        duration: 1,
        stagger: {
          each: 0.25,
          repeat: 1,
          yoyo: true,
        },
        ease: "power4.inOut",
        onComplete: () => {
          setShowIntro(false);
          setStartMainAnimation(true);
        },
      });
    }, introRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (startMainAnimation) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          mainRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 2, ease: "power4.inOut", delay: 0.5 }
        );
      }, mainRef);

      return () => ctx.revert();
    }
  }, [startMainAnimation]);

  return (
    <>
      {showIntro && (
        <div
          ref={introRef}
          className="intro w-screen h-screen fixed bg-black flex justify-center items-center text-white tracking-tighter font-mono gap-2 text-xl sm:gap-4 md:gap-8 lg:gap-16"
        >
          <div className="intro-div opacity-0">1</div>
          <div className="intro-div opacity-0">2</div>
          <div className="intro-div opacity-0">3</div>
          <div className="intro-div opacity-0">4</div>
          <div className="intro-div opacity-0">5</div>
          <div className="intro-div opacity-0">6</div>
          <div className="intro-div opacity-0">7</div>
          <div className="intro-div opacity-0">8</div>
          <div className="intro-div opacity-0">9</div>
          <div className="intro-div opacity-0">22</div>
          <div className="intro-div opacity-0">50</div>
          <div className="intro-div opacity-0">64</div>
          <div className="intro-div opacity-0">96</div>
          <div className="intro-div opacity-0">100</div>
        </div>
      )}
      {!showIntro && (
        <main
          ref={mainRef}
          className="overflow-x-hidden tracking-tighter text-gray-200 antialiased opacity-0"
        >
          <NavBar />
          <HeroSection />
          <About />
          <Projects />
          <Skills />
          <Goal />
          <ContactForm />
          <Footer />
        </main>
      )}
    </>
  );
};

export default App;
