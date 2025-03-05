import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchAllMeals } from '../api/mealApi';
import { MealType } from '../types';


const useFilteredMeals = (strCategory: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchAllMeals,
    onSuccess: (newData: MealType[]) => {
      const filteredData = newData.filter(meal => meal.strCategory === strCategory);
      queryClient.setQueryData(["recipes"], filteredData);
    },
  });

  return mutation;
};

export default useFilteredMeals;