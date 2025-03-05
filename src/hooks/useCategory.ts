import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api/mealApi";

const useCategories = () => {
  return useQuery({
    queryFn: getAllCategories,
    queryKey: ['allCategories'],
  });
};

export default useCategories;