import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { SearchCardProps } from "../../types";

const SearchCard: React.FC<SearchCardProps> = ({ meal }) => {
  return (
    <li>
      <Link to={ROUTES.RECIPE_URL(meal.idMeal)} className="flex items-center gap-4 border border-black p-1 rounded-md ">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-[50px] h-[50px] rounded-[100%]"/>
        <p>{meal.strMeal}</p>
      </Link>
    </li>
  );
};

export default SearchCard;
