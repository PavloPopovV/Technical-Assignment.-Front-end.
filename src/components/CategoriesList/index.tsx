import { useState } from "react";
import useCategories from "../../hooks/useCategory";
import ClearCategory from "../ClearCategory";
import CategoryCard from "../CategoryCard";
import SearchMeal from "../SearchMeal";
import CategorisListSkeleton from "../Skeletons/CategorisListSkeleton";

const CategoriesList = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { data = [], isLoading } = useCategories();

  if (isLoading) return <CategorisListSkeleton/>;

  return (
    <aside className="w-[20%] relative">

        <h2 className="mb-4 font-bold uppercase text-lg">Categories</h2>
      <SearchMeal />
        <ul className="flex flex-col gap-2 mb-4">
          {data.map((category) => (
            <CategoryCard
              key={category.idCategory}
              category={category}
              isActive={activeCategory === category.strCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </ul>
        {activeCategory && (
          <ClearCategory clearActiveCategory={() => setActiveCategory(null)} />
        )}

    </aside>
  );
};

export default CategoriesList;
