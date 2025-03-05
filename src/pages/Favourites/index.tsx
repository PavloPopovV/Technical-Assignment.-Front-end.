import { useFavourites } from "../../hooks/useFavourites";
import { MealType } from "../../types";
import { calculateIngredientsCount } from "../../utils/calculateIngredients";
import MealCard from "../../components/MealCard";
import IngredientsList from "../../components/IngredientsList";

const Favourites = () => {
  const { getFavourites } = useFavourites();
  const favourites = getFavourites();

  return (
    <section className="mb-4">
      {favourites.length === 0 ? (
        <span>Your favourite list is empty</span>
      ) : (
        <div>
          <ul className="grid grid-cols-4 gap-4 justify-center [grid-template-columns:repeat(4,minmax(0,250px))] mb-10">
            {favourites.map((meal: MealType) => (
              <MealCard meal={meal} key={meal.idMeal} />
            ))}
          </ul>

          <ul className="mb-4">
            {favourites.map((meal: MealType) => (
              <li key={meal.idMeal}>
                <h3 className="font-bold text-[24px]">{meal.strMeal}</h3>
                <div>
                  <p>{meal.strInstructions}</p>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <h3 className="font-bold text-[24px] mb-2">
              Ingredients for each meal:
            </h3>

            <div className="flex flex-wrap gap-8 mb-4">
              {favourites.map((meal: MealType) => (
                <IngredientsList key={meal.idMeal} meal={meal} />
              ))}
            </div>

            <div className="flex item-center gap-2 font-bold text-[24px]">
              <p>Count of all ingredients:</p>
              <span>
                {favourites.reduce((count: number, meal: MealType) => {
                  return count + calculateIngredientsCount(meal);
                }, 0)}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Favourites;
