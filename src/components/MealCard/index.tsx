import React, { memo } from "react";
import { Link } from "react-router-dom";
import { COUNTRY_CODES, FLAG_API_ARL, ROUTES } from "../../constants";
import { MealCardProps } from "../../types";


const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <li key={meal.idMeal} className="p-4 border border-black rounded-lg">
      <Link to={ROUTES.RECIPE_URL(meal.idMeal)}>
        <article>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded"/>
          <h3 className="font-bold">{meal.strMeal}</h3>
          <p className="text-sm">Category: {meal.strCategory}</p>
          <div className=" flex gap-2 items-center text-sm">
            <span>Country:</span>
            <img
              src={`${FLAG_API_ARL}/16x12/${COUNTRY_CODES[meal.strArea]}.png`}
            />
          </div>
        </article>
      </Link>
    </li>
  );
};

export default memo(MealCard);
