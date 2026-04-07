"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <button
        className={`px-3 py-1 border rounded disabled:opacity-50 ${currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"} `}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded cursor-pointer ${currentPage === page ? "bg-learning text-white" : ""
            }`}
        >
          {page}
        </button>
      ))}

      <button
        className={`px-3 py-1 border rounded disabled:opacity-50 ${currentPage === totalPages ? "cursor-not-allowed" : " cursor-pointer"}`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
