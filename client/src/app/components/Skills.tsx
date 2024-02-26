import React from "react";

export interface Props {}

const Skills: React.FC<Props> = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4 w-[85%] h-[70%]">
        <div className="border-2 border-[#ccc] rounded-xl"></div>
        <div className="border-2 border-[#ccc] rounded-xl"></div>
        <div className="border-2 border-[#ccc] rounded-xl"></div>
      </div>
    </div>
  );
};

export default Skills;
