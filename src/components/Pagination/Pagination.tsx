// 'use client'
// import React, { useState } from 'react';

// const Pagination = () => {
//   const [activePage, setActivePage] = useState(3);

//   const handlePageClick = (pageNumber: number) => {
//     setActivePage(pageNumber);
//   };
//   return (
//     <div className="container mx-auto px-4 mb-5">
//       <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
//         <button
//           className={`flex w-10 h-10 mr-1 justify-center items-center rounded-full bg-white text-[#0acaff]`}
//           title="Previous Page"
//           onClick={() => handlePageClick(activePage - 1)}
//         >
//           <span className="sr-only">Previo us Page</span>
//           <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
//             <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
//           </svg>
//         </button>

//         {[1, 2, 3, 4, 5].map((page) => (
//           <button
//             key={page}
//             className={`hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full ${activePage === page ? 'bg-[#0acaff] text-white pointer-events-none' : 'bg-white text-[#1e1f26] text-sm font-prompt'
//               }`}
//             title={`Page ${page}`}
//             onClick={() => handlePageClick(page)}
//           >
//             {page}
//           </button>
//         ))}

//         <button
//           className={`flex w-10 h-10 ml-1 justify-center items-center rounded-full bg-white text-[#0acaff]`}
//           title="Next Page"
//           onClick={() => handlePageClick(activePage + 1)}
//         >
//           <span className="sr-only">Next Page</span>
//           <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
//             <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
//           </svg>
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Pagination;
import React from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="container mx-auto px-4 mb-5">
      <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
        <button
          className={`flex w-10 h-10 mr-1 justify-center items-center rounded-full bg-white text-[#0acaff]`}
          title="Previous Page"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="sr-only">Previous Page</span>
          <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
            <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
          </svg>
        </button>

        {[...Array(totalPages)]?.map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full ${currentPage === page ? 'bg-[#0acaff] text-white pointer-events-none' : 'bg-white text-[#1e1f26] text-sm font-prompt'}`}
              title={`Page ${page}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          className={`flex w-10 h-10 ml-1 justify-center items-center rounded-full bg-white text-[#0acaff]`}
          title="Next Page"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span className="sr-only">Next Page</span>
          <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
            <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
