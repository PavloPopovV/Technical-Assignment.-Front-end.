import React, { memo } from "react";
import { usePagination } from "../../context/PaginationContext";
import useFilteredMeals from "../../hooks/useFilteredMeals";
import { CategoryCardProps} from "../../types";


const CategoryCard: React.FC<CategoryCardProps> = ({
  category: { strCategory, strCategoryThumb },
  isActive,
  setActiveCategory,
}) => {
  const { setCurrentPage } = usePagination(); 
  const { mutate } = useFilteredMeals(strCategory);
  
  const selectCategory = () => {
    mutate();
    setActiveCategory(strCategory)
    setCurrentPage(1)
  };

  return (
    <li>
      <button onClick={selectCategory} className="flex items-center gap-2 cursor-pointer w-[100%] border border-black rounded-lg p-2">
        <img src={strCategoryThumb} alt={strCategory} className="w-[40px] h-[30px] rounded"/>
        <h3 className={`${isActive ? 'opacity-100 font-bold' : 'opacity-80'}`}>{strCategory}</h3>
      </button>
    </li>
  );
};

export default memo(CategoryCard);
