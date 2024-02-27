import React from "react";

export interface Props {}

const Skills: React.FC<Props> = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-[85%] h-[70%]">
        <div className="bg-[#1f1f1f] rounded-xl"></div>
        <div className="bg-[#1f1f1f] rounded-xl"></div>
        <div className="bg-[#1f1f1f] rounded-xl"></div>
      </div>
    </>
  );
};

export default Skills;
