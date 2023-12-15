"use client"

import { motion } from "framer-motion";
import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="3em"
      height="3em"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 846.66 846.66"
      {...props}
    >
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        d="M539.75 794.68c27.15 0 27.15 41.29 0 41.29H42.28c-11.4 0-20.64-9.25-20.64-20.65V193.63c0-5.7 2.31-10.87 6.04-14.6l162.3-162.29c4.03-4.03 9.31-6.05 14.59-6.05h466.89c11.4 0 20.65 9.25 20.65 20.65V392.7c0 27.16-41.29 27.16-41.29 0V51.98h-437.7L62.93 202.18v592.5h476.82zM188.54 612.7c-27.16 0-27.16-41.29 0-41.29h306.67c27.16 0 27.16 41.29 0 41.29H188.54zm0-274.68c-27.16 0-27.16-41.29 0-41.29h306.67c27.16 0 27.16 41.29 0 41.29H188.54zm0 91.56c-27.16 0-27.16-41.29 0-41.29h306.67c27.16 0 27.16 41.29 0 41.29H188.54zm0 91.56c-27.16 0-27.16-41.29 0-41.29h306.67c27.16 0 27.16 41.29 0 41.29H188.54zm0-274.68c-27.16 0-27.16-41.29 0-41.29h306.67c27.16 0 27.16 41.29 0 41.29H188.54zm496.57 238.25c49.84 0 90.24 40.4 90.24 90.24 0 18.1-5.33 34.95-14.5 49.07 37.57 24.93 61.47 66.08 64.13 111.2 1.59 27.06-39.55 29.47-41.13 2.42-2.11-35.69-22.61-67.48-54.13-84.24-13.16 7.5-28.38 11.78-44.61 11.78-17.56 0-33.95-5.01-47.81-13.69-33.44 16.12-55.6 49.04-57.79 86.15-1.59 27.05-42.72 24.64-41.13-2.42 2.79-47.18 28.75-89.88 69.08-114.28-7.99-13.47-12.58-29.19-12.58-45.99 0-49.83 40.4-90.24 90.23-90.24zm0 41.29c-27.03 0-48.94 21.92-48.94 48.95s21.91 48.94 48.94 48.94c27.03 0 48.95-21.91 48.95-48.94 0-27.03-21.91-48.95-48.95-48.95z"
        style={{
          fill: "#273",
          fillRule: "nonzero",
        }}
      />
    </svg>
  );
};
export default SvgComponent;
