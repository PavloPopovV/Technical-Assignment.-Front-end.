import { usePagination } from "../../context/PaginationContext";
import useUpdateMealsCache from "../../hooks/useUpdateMealsCache";
import { ClearCategoryProps } from "../../types";


const ClearCategory: React.FC<ClearCategoryProps> = ({
  clearActiveCategory,
}) => {
  const { setCurrentPage } = usePagination();
  const { mutate } = useUpdateMealsCache();

  const handleButton = () => {
    setCurrentPage(1);
    clearActiveCategory();
    mutate();
  };

  return (
    <button
      type="button"
      className="bg-red-600 mb-2 py-1 px-4 rounded cursor-pointer absolute top-0 right-0 text-white"
      onClick={handleButton}
    >
      Clear
    </button>
  );
};

export default ClearCategory;
