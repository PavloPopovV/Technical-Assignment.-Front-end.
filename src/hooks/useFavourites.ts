import { MealType } from "../types";

export const useFavourites = () => {
  const getFavourites = (): MealType[] => {
    const favouritesString = localStorage.getItem("favouriteMeals");
    return favouritesString ? JSON.parse(favouritesString) : [];
  };

  const isFavourite = (idMeal: string): boolean => {
    return getFavourites().some((meal) => meal.idMeal === idMeal);
  };

  const addToFavourites = (meal: MealType) => {
    const favourites = getFavourites();
    if (!isFavourite(meal.idMeal)) {
      favourites.push(meal);
      localStorage.setItem("favouriteMeals", JSON.stringify(favourites));
    }
  };

  return { getFavourites, isFavourite, addToFavourites};
};
