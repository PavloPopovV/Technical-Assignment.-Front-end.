import React, { useState, memo } from "react";
import SearchCard from "../SearchCard";
import useDebounce from "../../hooks/useDebounce";
import useSearchMeals from "../../hooks/useSearchMeals";
import SearchMealSkeleton from "../Skeletons/SearchMealSkeleton";

const SearchMeal = () => {
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce(query, 300); 

  const { data = [], isLoading } = useSearchMeals(debouncedQuery); 


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClearClick = () => {
    setQuery("");
  };

  return (
    <div className="relative">
      <form className="flex items-center mb-2 gap-1">
        <input
          id="search"
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search meal.."
          className="border border-black w-[100%] px-2 py-2 rounded-md"
        />
        {query.length ? <button type="button" onClick={handleClearClick} className="absolute w-[20px] text-lg right-0 cursor-pointer">&times;</button> : null}
        
      </form>
      <div className={`absolute z-10 bg-white w-[100%]  ${ query.length ? 'max-h-[200px] overflow-y-auto': ""}`}>
        <ul className="flex flex-col gap-2">
          {isLoading ? (
            <SearchMealSkeleton />
          ) : !Array.isArray(data) || data.length === 0 ? (
            query.length > 0 ? <span>Nothing found</span> : null
          ) : (
            data.map((meal) => <SearchCard key={meal.idMeal} meal={meal} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default memo(SearchMeal);
