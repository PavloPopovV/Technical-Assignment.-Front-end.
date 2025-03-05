import { IngredientsListProps, MealType } from "../../types";


const IngredientsList: React.FC<IngredientsListProps> = ({ meal }) => (
  <div>
    <h1 className="font-bold">{meal.strMeal}</h1>
    <ul>
      {[...Array(20).keys()].map((i) => {
        const ingredient =
          meal[`strIngredient${i + 1}` as keyof MealType];
        const measure =
          meal[`strMeasure${i + 1}` as keyof MealType];

        return ingredient && measure ? (
          <li key={i} className="text-sm">
            <span>{ingredient}</span> <span>{measure}</span>
          </li>
        ) : null;
      })}
    </ul>
  </div>
);

export default IngredientsList;
