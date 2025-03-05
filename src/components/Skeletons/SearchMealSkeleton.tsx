const SearchMealSkeleton = () => {
    return (
      <div role="status" className="w-full animate-pulse">
         <div className="h-16 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
         <div className="h-16 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };
  
  export default SearchMealSkeleton;