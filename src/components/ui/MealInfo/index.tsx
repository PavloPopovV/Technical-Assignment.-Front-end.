import React from "react";
import { MealInfoProps } from "../../../types";

const MealInfo: React.FC<MealInfoProps> = ({ label, value }) => {
  if (!value) return null;
  
  return (
    <li>
      <span>{label}:</span> {value}
    </li>
  );
};

export default MealInfo;
