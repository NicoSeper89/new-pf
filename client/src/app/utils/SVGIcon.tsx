"use client";

import { MotionProps, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface MotionComponentProps extends MotionProps {
  path: string;
  fill?: string;
}

const SVGIcon: React.FC<MotionComponentProps> = ({
  path,
  fill = "#fff",
  ...motionProps
}) => {
  const [active, setActive] = useState<Boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    if (active) {
      controls.start({
        fill: ["#FF0000", "#0000FF", "#00FF00"],
        opacity: 0.7,
        transition: { duration: 1, repeat: Infinity, repeatType: "mirror",
      opacity: {repeat: 0} },
      });
    } else {
      controls.start({
        fill,
        opacity: 0.9
      });
    }
  }, [active, controls]);

  return (
    <motion.div
      whileHover={{ scale: 1.4, y: -10 }}
      whileTap={{ scale: 1.1, y: -2 }}
      onHoverStart={() => {
        setActive(true);

      }}
      onHoverEnd={() => {
        setActive(false);
      }}
      {...motionProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={51}
        height={52}
        fill="none"
      >
        <motion.path
          d={path}
          fill={fill}
          animate={controls}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </motion.div>
  );
};

export default SVGIcon;
