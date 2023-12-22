"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

interface Item {
  id: string;
  subtitle: string;
  title: string;
}

interface Props {
  items: Item[];
}

const CardsContainer: React.FC<Props> = ({ items }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const controls = useAnimation();

  useEffect(() => {
    const animateBorder = async () => {
      while (true) {
        await controls.start({ borderColor: "#ff0000" }); 
        await controls.start({ borderColor: "#00ff00" }); 
        await controls.start({ borderColor: "#0000ff" }); 
      }
    };

    animateBorder();
  }, [controls]);

  return (
    <AnimatePresence>
      <div className="relative flex w-[98%] font-mono gap-x-3 gap-y-3 p-[4%] flex-wrap items-center justify-center">
        {items.map((item, index) => (
          <motion.div
            className={`relative ${
              index === 0 || index === 3 ? "w-[42.5%]" : "w-[54.5%]"
            } h-70 p-6 border-2 bg-[#0E0E0E]`}
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            transition={{ duration: 0.2 , borderColor: {
              duration: 1,
              delay: index * 0.1
            }}}
            animate={controls}
          >
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}

        {selectedId && (
          <motion.div
            key={selectedId}
            layoutId={selectedId}
            className="absolute p-6 box-content w-[90%] h-[15rem] border-2 border-[#ff0000] bg-[#0E0E0E]"
            onClick={() => setSelectedId(null)}
            animate={controls}
          >
            <motion.h2>
              {items.find((item) => item.id === selectedId)?.title}
            </motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>
              Close
            </motion.button>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default CardsContainer;
