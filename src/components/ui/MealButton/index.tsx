import React from "react";
import { MealButtonProps } from "../../../types";

const MealButton: React.FC<MealButtonProps> = ({ text, value }) => {
  if (!value) return null;
  
  return (
    <a href={value} target="_blank" rel="noopener noreferrer" className="border border-black rounded-lg px-4 py-2">
      {text}
    </a>
  );
};

export default MealButton;
