import React from "react";
import { Icon } from "@iconify/react";

export default function IconComponent({ iconName, active, displayText }) {
  return (
    <div className={`flex m-3 items-center justify-start hover:cursor-pointer `}>
      <div className={`${active?"text-white":"text-gray-400 hover:text-white "}  p-5 py-2`}>
        <Icon icon={iconName} fontSize={23} />
      </div>
      <div className={`${active?"text-white":"text-gray-400 "} font-bold hover:text-white
      `}>{displayText}</div>
    </div>
  );
}
