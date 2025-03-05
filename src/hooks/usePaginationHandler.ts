import { useCallback } from "react";
import { usePagination } from "../context/PaginationContext";
import { getTotalPageCount } from "../utils/getTotalPages";
import { ITEMS_PER_PAGE } from "../constants";

const usePaginationHandler = (data: any[]) => {
  const { currentPage, setCurrentPage } = usePagination();

  const handleNextPageClick = useCallback(() => {
    setCurrentPage((prev: number) => {
      const total = getTotalPageCount(data.length);
      return prev < total ? prev + 1 : prev;
    });
  }, [data]);

  const handlePrevPageClick = useCallback(() => {
    setCurrentPage((prev: number) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, endIndex);

  return { paginatedData, handleNextPageClick, handlePrevPageClick, handlePageChange, currentPage };
};

export default usePaginationHandler;
