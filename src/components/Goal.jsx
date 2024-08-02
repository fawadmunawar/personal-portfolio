import React from "react";
import video from "../assets/video.mp4";
import { ACHIEVEMENT } from "../constants";
import {motion} from "framer-motion"

const Goal = () => {
  return (
    <div id="goal">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Goal</h2>
      <div className="mx-auto max-w-6xl flex-wrap flex">
        <div className="w-full p-2 sm:w-1/2">
          <video className="w-full rounded-lg" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="w-full p-4 text-center sm:w-1/2">
            <motion.p 
              initial={{
                x: 100
              }}
              whileInView={{
                x: 0
              }}
              transition={{
                type: "spring",
                delay: 0.1,
                stiffness: 200
              }}
              viewport={{
                once: true,
                amount: 0.5
              }}

            className="m-4 p-2 italic"><span className="text-7xl font-custom text-yellow-400">M</span>{ACHIEVEMENT.description}</motion.p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
