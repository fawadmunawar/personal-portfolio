import React from "react";
import video from "../assets/video.mp4";
import { ACHIEVEMENT } from "../constants";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Goal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main",
          start: "50% 50%",
          end: "200% 50%",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });
      tl.to(
        ".top",
        {
          top: "-100%",
          duration: 2,
          ease: "power3.inOut",
        },
        "a"
      );
      tl.to(
        ".bottom",
        {
          bottom: "-100%",
          duration: 2,
          ease: "power3.inOut",
        },
        "a"
      );
      tl.from(
        "#innerGoal",
        {
          marginTop: "100rem",
          opacity: 0,
          duration: 2.5,
          ease: "power4.inOut",
        },
        "a"
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={ref} className="overflow-hidden">
        <div id="main" className="w-screen h-screen bg-white relative">
          <div className="top absolute w-full h-1/2 bg-black top-[0%] overflow-hidden flex items-end justify-center">
            <h1 id="heading1" className="text-[15vw] mb-[-11vw]">
              GOAL
            </h1>
          </div>
          <div className="center w-screen bg-white/20 flex flex-col text-black" id="goal">
            <div id="innerGoal">
              <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">
                Goal
              </h2>
              <div className="mx-auto max-w-6xl flex-wrap flex">
                <div className="w-full p-2 sm:w-1/2">
                  <video
                    className="w-full rounded-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
                <div className="w-full p-4 text-start sm:w-1/2">
                  <p
                    className="m-4 p-2"
                  >
                    <span className="text-7xl font-custom text-yellow-400">
                      M
                    </span>
                    {ACHIEVEMENT.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom absolute w-full h-1/2 bg-black bottom-[0%] overflow-hidden flex items-start justify-center">
            <h1 id="heading2" className="text-[15vw] mt-[-11.5vw]">
              GOAL
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goal;
