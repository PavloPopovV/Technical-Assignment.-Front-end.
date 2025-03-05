const MealSkeleton = () => {
  return (
    <div role="status" className="w-full animate-pulse">
      <div className="h-[450.5px] w-[450.5px] bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>

      <div className="h-18 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2"></div>
      <div className="h-18 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2"></div>
      <div className="h-18 bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default MealSkeleton;
