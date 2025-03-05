import { useParams } from "react-router-dom";
import useGetMealById from "../../hooks/useGetMealById";
import { useFavourites } from "../../hooks/useFavourites";
import MealInfo from "../../components/ui/MealInfo";
import MealButton from "../../components/ui/MealButton";
import IngredientsList from "../../components/IngredientsList";
import MealSkeleton from "../../components/Skeletons/MealSkeleton";

const Meal = () => {
  const params = useParams();
  const id = params.id as string;

  const { data: meal, isLoading } = useGetMealById(id);
  const { addToFavourites, isFavourite } = useFavourites();

  if (!meal) return <h1>The recipe is not found</h1>;
  if (isLoading) return <MealSkeleton/>;

  return (
    <section className="flex items-center gap-6 mb-4">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-[400px] rounded-[100%]"
      />
      <div>
        <h3 className="font-bold text-[44px]">{meal.strMeal}</h3>
        <ul className="text-sm mb-4">
          <MealInfo label="Category" value={meal.strCategory} />
          <MealInfo label="Area" value={meal.strArea} />
          <MealInfo label="Tags" value={meal.strTags} />
          <MealInfo label="Drink Alternate" value={meal.strDrinkAlternate} />
          <MealInfo
            label="Creative Commons Confirmed"
            value={meal.strCreativeCommonsConfirmed}
          />
          <MealInfo label="Instructions" value={meal.strInstructions} />
        </ul>

        <div className="flex items-center gap-2 mb-4">
          <MealButton text="Watch on YouTube" value={meal.strYoutube} />
          <MealButton text="View Source" value={meal.strSource} />
          <button
            type="button"
            onClick={() =>addToFavourites(meal)}
            className={`text-white rounded-lg px-4 py-2 cursor-pointer ${
              isFavourite(meal.idMeal)
                ? "opacity-50 cursor-not-allowed bg-gray-500"
                : "bg-black"
            }`}
            disabled={isFavourite(meal.idMeal)}
          >
            Add to favourite
          </button>
        </div>

        <span className="font-bold">Ingredients/Measure:</span>
        <IngredientsList meal={meal} />
      </div>
    </section>
  );
};

export default Meal;
