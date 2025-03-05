import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchAllMeals } from '../api/mealApi';
import { MealType } from '../types';


const useUpdateMealsCache = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchAllMeals,
    onSuccess: (newData: MealType[]) => {
      queryClient.setQueryData(["recipes"], newData);
    },
  });

  return mutation;
};

export default useUpdateMealsCache;