import { useEffect } from "react";
import useFetchMeals from "../../hooks/useFetchMeals";
import usePaginationHandler from "../../hooks/usePaginationHandler";
import { getTotalPageCount } from "../../utils/getTotalPages";
import { MealType } from "../../types";
import MealCard from "../MealCard";
import Pagination from "../Pagination";
import MealListSkeleton from "../Skeletons/MealListSkeleton";


const MealsList = () => {
  const { data, isLoading } = useFetchMeals();
  const {
    paginatedData,
    handleNextPageClick,
    handlePrevPageClick,
    handlePageChange,
    currentPage,
  } = usePaginationHandler(data);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  if (isLoading) return <MealListSkeleton/>;

  return (
    <div className="w-[80%]">
      <h2 className="mb-4 font-bold uppercase text-lg">Meals</h2>
      {paginatedData.length ? (
        <ul className="grid grid-cols-4 gap-4 justify-center [grid-template-columns:repeat(4,minmax(0,250px))] mb-10">
          {paginatedData.map((meal: MealType) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </ul>
      ) : null}

      {data.length ? (
        <Pagination
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
          onPageChange={handlePageChange}
          disable={{
            left: currentPage === 1,
            right: currentPage === getTotalPageCount(data.length),
          }}
          nav={{ current: currentPage, total: getTotalPageCount(data.length) }}
        />
      ) : (
        <span>No meals in this category</span>
      )}
    </div>
  );
};

export default MealsList;
