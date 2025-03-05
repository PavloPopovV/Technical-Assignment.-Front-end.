import { PaginationProps } from "../../types";
import generatePageNumbers from "../../utils/generatePageNumbers";

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    nav = null,
    disable,
    onNextPageClick,
    onPrevPageClick,
    onPageChange,
  } = props;
  const pages = generatePageNumbers(nav);

  return (
    <div className="flex justify-center items-center gap-3 mb-6">
      <button
        type="button"
        onClick={onPrevPageClick}
        disabled={disable.left}
        className={`py-1 w-[30px] rounded text-sm cursor-pointer ${
          disable.left ? "bg-gray-200" : "bg-black text-white"
        }`}
      >
        &lt;
      </button>
      {pages.map((page, index) =>
        page === "…" ? (
          <span key={index} className="">
            {page}
          </span>
        ) : (
          <button
            key={index}
            className={` py-1 w-[30px] rounded text-sm cursor-pointer ${
              nav?.current === page ? "bg-black text-white" : "border border-black"
            }`}
            onClick={() => onPageChange(Number(page))}
          >
            {page}
          </button>
        )
      )}
      <button
        type="button"
        onClick={onNextPageClick}
        disabled={disable.right}
        className={`py-1 w-[30px] rounded text-sm cursor-pointer ${
          disable.right ? "bg-gray-200" : "bg-black text-white"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
