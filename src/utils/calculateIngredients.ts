import { MealType } from "../types";

export const calculateIngredientsCount = (meal: MealType): number => {
  return [...Array(20).keys()].reduce((acc, i) => {
    const ingredient = meal[`strIngredient${i + 1}` as keyof MealType];
    return ingredient ? acc + 1 : acc;
  }, 0);
};
