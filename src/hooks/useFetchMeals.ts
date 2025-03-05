import { useQuery } from "@tanstack/react-query";
import { fetchAllMeals } from "../api/mealApi";
import { MealType } from "../types";

const useFetchMeals = () => {
  const { data = [], isLoading } = useQuery<MealType[]>({
    queryKey: ["recipes"],
    queryFn: fetchAllMeals,
    staleTime: Infinity,
  });

  return { data, isLoading };
};

export default useFetchMeals;