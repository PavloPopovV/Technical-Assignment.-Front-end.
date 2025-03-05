const CategorisListSkeleton = () => {
  return (
<div role="status" className="w-[236px] animate-pulse">
    <div className="h-6.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-18 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div className="h-18 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div className="h-18 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <span className="sr-only">Loading...</span>
</div>
  )
}

export default CategorisListSkeleton
