import React from 'react';
// import { ArrowRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  setCurrentPage 
}) => {
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers: React.ReactNode[] = [];
    
    for (let i = 1; i <= 10; i++) {
      if (i <= totalPages) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-3 py-1 ${
              currentPage === i ? "font-bold" : "text-gray-700"
            }`}
          >
            {i}
          </button>
        );
      }
    }
    
    if (totalPages > 3) {
      pageNumbers.push(
        <span key="ellipsis" className="px-2">
          ...
        </span>
      );
    }
    
    for (let i = Math.max(8, totalPages - 2); i <= totalPages; i++) {
      if (i > 3) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-3 py-1 ${
              currentPage === i ? "font-bold" : "text-gray-700"
            }`}
          >
            {i}
          </button>
        );
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex space-x-1">
        {renderPageNumbers()}
      </div>

      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`flex items-center px-4 py-2 border rounded text-gray-700 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
        }`}
      >
        Próxima 
        {/* <ArrowRight className="ml-1 w-4 h-4" /> */}
      </button>
    </div>
  );
};

export default Pagination;