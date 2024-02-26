"use client";

import { motion, MotionProps } from "framer-motion";
import { useState } from "react";

interface Props extends MotionProps {
  text: string;
}

const variantsGlitch = {
  noGlitch: (i: number) => ({
    x: 0,
    y: 0,
    textShadow: "0px 0px 0px #fff",
    transition: {
      duration: 0.6,
    },
  }),
  glitch: () => ({
    textShadow: [
      "4px 0px 0 #ff0000, -3px -2px 0 #0000ff, -2px 0px 0 #00ff00",
      "-3px -2px 0 #00ff00, -2px 4px 0 #ff0000, 2px 1px 0 #0000ff",
      "4px -3px 0 #0000ff, -3px 3px 0 #00ff00, -2px 3px 0 #ff0000",
      "-2px -2px 0 #ff0000, -3px -4px 0 #0000ff, 0px 0px 0 #00ff00",
      "-1px 0px 0 #00ff00, 0px -1px 0 #ff0000, -2px 0px 0 #0000ff",
      "1px 0px 0 #0000ff, -1px -1px 0 #00ff00, -1px 1px 0 #ff0000",
      "0px 0px 0px #ffffff",
    ],
    x: [-1, 2, -2, 0, 1, -1, 0],
    y: [1, -2, -1, 1, 0, 1, 0],
    transition: {
      repeat: Infinity,
      duration: 0.3,
    },
  }),
};

const NameWithGlitch: React.FC<Props> = ({ text, ...props }) => {
  const [activeEffects, setActiveEffects] = useState<Boolean[]>([]);

  return (
    <motion.div className="relative inline-flex items-end text-7xl cursor-pointer font-local">
      {text.split("").map((letter, index) => {
        return letter !== " " ? (
          <div
            key={index}
            className="relative flex items-center justify-center"
          >
            <motion.span
              custom={index}
              variants={variantsGlitch}
              animate={activeEffects[index] ? "glitch" : "noGlitch"}
              onHoverStart={() => {
                setActiveEffects((prev) => {
                  const prevEffects = [...prev];
                  prevEffects[index] = true;

                  return prevEffects;
                });
              }}
              onHoverEnd={() => {
                setTimeout(() => {
                  setActiveEffects((prev) => {
                    const arr = [...prev];

                    arr[index] = false;

                    return arr;
                  });
                }, 3000);
              }}
              transition={{ease: "easeIn"}}
              {...props}
            >
              {letter}
            </motion.span>
          </div>
        ) : (
          <motion.div key={index} className="flex w-8" />
        );
      })}
    </motion.div>
  );
};

export default NameWithGlitch;
