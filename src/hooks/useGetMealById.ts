import { useQuery } from "@tanstack/react-query";
import { MealType } from "../types";
import { fetchMealById } from "../api/mealApi";


const useGetMealById = (id: string) => {
  return useQuery<MealType>({
    queryKey: ["recipe", id],
    queryFn: () => fetchMealById(id),
    staleTime: 0,
  });
};

export default useGetMealById;
