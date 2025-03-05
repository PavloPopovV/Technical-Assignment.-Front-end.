const MealListSkeleton = () => {
    return (
      <div role="status" className="w-full animate-pulse">
        <div className="h-6.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="grid grid-cols-4 gap-4">
          <div className="h-65 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
          <div className="h-65 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
          <div className="h-65 bg-gray-200 rounded-lg dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };
  
  export default MealListSkeleton;
  