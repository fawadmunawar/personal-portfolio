import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const comp = useRef(null);

  useEffect(() => {
    const splitText = new SplitType("#about-heading", { types: "chars,words" });

    const ctx = gsap.context(() => {
      gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: "#about-heading",
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
          markers: false, // Enable markers for debugging
        },
        opacity: 0.1,
        stagger: 2,
        ease: "circ.out",
        duration: 2,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container mx-auto mt-4" id="about" ref={comp}>
      <h3 id="about-heading" className="p-4 text-6xl uppercase lg:text-[8rem]">
        I create <span className="text-yellow-400">dynamic,</span> responsive
        websites that blend creativity with efficiency
      </h3>
      <p className="mr-24 pl-4 text-lg leading-loose">
        Hello! I'm{" "}
        <motion.span
          whileInView={{
            color: "#FBBF24",
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          id="name-scramble"
          className="opacity-20"
        >
          Fawad Munawar
        </motion.span>
        , a front-end developer with a flair for graphic design. I thrive on
        crafting web experiences that are not only visually stunning but also
        highly functional and user-friendly. My passion for detail ensures that
        every project is polished and professional. Beyond coding, I'm an avid
        explorer of new cultures and cuisines. My curiosity drives me to stay on
        the cutting edge of technology and design trends, bringing innovative
        and practical solutions to every challenge. Whether I'm developing a
        sleek website or diving into the latest tech, I am dedicated to
        delivering excellence in every project.
      </p>
    </div>
  );
};

export default About;
