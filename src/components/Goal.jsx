import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ACHIEVEMENT } from "../constants";
import video from '../assets/video.mp4'

const Goal = () => {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
    offset: ["0% 30%", "end 90%"],
  });

  const top = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const bottom = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const marginT = useTransform(scrollYProgress, [0, 1], ["800px", "0px"])
  const headingTop = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])
  const headingBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])

  return (
    <div
      ref={targetref}
      id="goal"
      className="w-screen h-screen bg-black relative overflow-hidden text-white"
    >
      <motion.div
      transition={{type: "inertia"}}
        style={{ top: top }}
        id="top-container"
        className="w-full h-1/2 bg-black absolute top-[0%] flex items-end justify-center overflow-hidden"
      >
        <motion.h1
          style={{bottom: headingTop}}
          id="heading1"
          className="text-[16vw] absolute bottom-[0%] left-1/2 transform -translate-x-1/2 translate-y-1/2"
        >
          GOAL
        </motion.h1>
      </motion.div>
      <div className="w-screen h-screen bg-white/10 flex flex-col justify-center items-center">
        <motion.div id="innerGoal"
          style={{marginTop: marginT}}
        >
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
              <p className="m-4 p-2">
                <span className="text-7xl font-custom text-yellow-400">M</span>
                {ACHIEVEMENT.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        style={{ bottom: bottom }}
        transition={{type: "inertia"}}
        id="bottom-container"
        className="w-full h-1/2 bg-black absolute bottom-0 flex items-start justify-center overflow-hidden"
      >
        <motion.h1
          style={{top: headingTop}}
          id="heading2"
          className="text-[16vw] absolute top-[0%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          GOAL
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Goal;
