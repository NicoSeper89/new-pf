"use client";

import { motion, MotionProps } from "framer-motion";
import { useState } from "react";

interface Props extends MotionProps {
  text: string;
}

const variantsGlitch = {
  static: {
    textShadow: "0 0 0 #ffffff",
    x: 0,
    y: 0,
  },
  animate: {
    textShadow: [
      "0.05em 0 0 #ff0000, -0.03em -0.04em 0 #0000ff, 0.025em 0.04em 0 #00ff00",
      "0.05em 0 0 #ff0000, -0.03em -0.04em 0 #0000ff, 0.025em 0.04em 0 #00ff00",
      "-0.05em -0.025em 0 #ff0000, 0.025em 0.035em 0 #0000ff, -0.05em -0.05em 0 #00ff00",
      "-0.05em -0.025em 0 #ff0000, 0.025em 0.035em 0 #0000ff, -0.05em -0.05em 0 #00ff00",
      "0.05em 0.035em 0 #ff0000, 0.03em 0 0 #0000ff, 0 -0.04em 0 #00ff00",
      "0.05em 0.035em 0 #ff0000, 0.03em 0 0 #0000ff, 0 -0.04em 0 #00ff00",
      "0.05em 0 0 #ff0000, -0.03em -0.04em 0 #0000ff, 0.025em 0.04em 0 #00ff00",
      "0.05em 0 0 #ff0000, -0.03em -0.04em 0 #0000ff, 0.025em 0.04em 0 #00ff00",
      "0.05em 0.035em 0 #ff0000, 0.03em 0 0 #0000ff, 0 -0.04em 0 #00ff00",
      "0.05em 0.035em 0 #ff0000, 0.03em 0 0 #0000ff, 0 -0.04em 0 #00ff00",
      "-0.05em 0 0 #ff0000, -0.025em -0.04em 0 #0000ff, -0.04em -0.025em 0 #00ff00",
      "0 0 #ffffff",
      "0 0 #ffffff",
    ],
    x: ["-0.1rem", "0.1rem", "-0.2rem", "0rem", "-0.1rem", "0rem"],
    y: ["-0.1rem", "0.1rem", "-0.2rem", "0rem", "-0.1rem", "0rem"],
    transition: {
      repeat: Infinity,
      times: [0, 0.15, 0.16, 0.49, 0.5, 0.98, 0.99, 1],
      duration: 0.1,
    },
  },
};

const variantsGlitchLine = {
  hidden: {
    x: 0,
    y: 0,
    opacity: 0,
    width: "100%",
  },
  hover: {
    opacity: [1, 0, 0, 1, 0, 1, 0, 1, 0],
    x: ["-0rem", "0.7rem", "-0.2rem", "-0.7rem", "0.8rem", "0rem"],
    y: ["-0rem", "-0.3rem", "-0.1em", "0.6rem", "-0.2rem", "0rem"],
    width: ["10px", "20px", "50px", "10px", "40px", "10px"],
    backgroundColor: ["#fff", "#000", "#fff", "#000", "#fff", "#000"],
    transition: {
      repeat: 2,
      duration: 0.2,
    },
  },
};

const NameWithGlitch: React.FC<Props> = ({ text, ...props }) => {
  const [activeEffects, setActiveEffects] = useState<Boolean[]>([]);

  return (
    <motion.div className="relative inline-flex items-end text-7xl cursor-pointer font-mono">
      {text.split("").map((letter, index) => {
        return letter !== " " ? (
          <div key={index} className="relative flex items-center justify-center ">
            <motion.span
              variants={variantsGlitch}
              initial="static"
              animate={activeEffects[index] ? "animate" : "static"}
              onClick={() => {
                setActiveEffects((prev) => {
                  
                 const prevEffects = [...prev]

                 prevEffects[index] = !prevEffects[index];

                return prevEffects;
                });
              }}
              className="leading-none"
              {...props}
            >
              {letter}
            </motion.span>
            <motion.div
              variants={variantsGlitchLine}
              initial="hidden"
              animate={activeEffects[index] ? "hover" : "hidden"}
              className="absolute block h-[2px] w-2 bg-white"
            />
          </div>
        ) : (
          <motion.div key={index} className="flex w-8" />
        );
      })}
    </motion.div>
  );
};

export default NameWithGlitch;
