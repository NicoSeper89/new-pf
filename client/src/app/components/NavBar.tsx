"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const navbarItems = [
    { text: "Home", link: "#Home", color: "#33CC99" },
    { text: "Skills", link: "#Skills", color: "#EFFA20" },
    { text: "Project", link: "#Project", color: "#D41E79" },
    { text: "About me", link: "#AboutMe", color: "#9347DE" },
    { text: "Contact", link: "#Contact", color: "#3B82F6" },
  ];

  const [selectedLink, setSelectedLink] = useState(0);

  const itemVariants = {};

  return (
    <AnimatePresence>
      <nav className="fixed p-4 flex justify-center items-center gap-12 w-full">
        {navbarItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            className="relative flex flex-col justify-start items-center text-lg cursor-pointer"
            variants={itemVariants}
            onClick={(event) => {
              event.preventDefault();
              setSelectedLink(index);

              const targetElement = document.querySelector(item.link);

              targetElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <motion.span className="text-white">
              {item.text}
            </motion.span>
            {index === selectedLink ? (
              <motion.div
                style={{
                  borderBottomColor: navbarItems[selectedLink].color,
                }}
                className={`absolute w-[100%] top-0 h-[100%] border-b-2`}
                layoutId="underline"
              />
            ) : null}
          </motion.a>
        ))}
      </nav>
    </AnimatePresence>
  );
};

export default NavBar;
