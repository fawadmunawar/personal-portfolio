import React from "react";
import { motion } from "framer-motion"

const Card = ({ image, title, subtitle, link }) => {
  return (
    <motion.a href={link} className="m-4 block max-w-sm overflow-hidden rounded-lg opacity-20" target="_blank"
        whileInView={{
          opacity: 1
        }}
        transition={{
          delay: 0.5
        }}
        viewport={{
          once: true
        }}
    > 
      <div className="relative">
          <img src={image} className="w-full" alt={title} />
        <div className="flex flex-col justify-between p-4 text-white">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-4 text-sm font-extralightt">{subtitle}</p>
        </div>
      </div>
    </motion.a>
  );
};

export default Card;
