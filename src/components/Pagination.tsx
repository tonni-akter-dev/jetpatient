import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
    const maxPageNumbersToShow = 5;
    const pageNumbersToShow: any = [];

    let startPage = 1;
    let endPage = totalPages;
    if (totalPages > maxPageNumbersToShow) {
        startPage = 1;
        endPage = 4;
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbersToShow.push(i);
    }

    if (totalPages > maxPageNumbersToShow) {
        pageNumbersToShow.push(totalPages);
    }

    return (
        <>
            <div className="flex justify-center mt-[80px] mb-[55px]">
                <nav className="relative z-0 inline-flex gap-4" aria-label="Pagination">
                    {currentPage > 1 && (
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            className="relative w-[24px] h-[24px] flex justify-center items-center text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            Prev
                        </button>
                    )}
                    {pageNumbersToShow.map((page: any, index: number) => (
                        <React.Fragment key={page}>
                            {index > 0 && pageNumbersToShow[index - 1] !== page - 1 && (
                                <span className="relative w-[24px] h-[24px] flex justify-center items-center text-sm font-medium text-gray-500">
                                    ...
                                </span>
                            )}
                            <button
                                onClick={() => onPageChange(page)}
                                className={`relative w-[24px] h-[24px] flex justify-center items-center text-sm font-medium ${currentPage === page ? 'bg-[#81FFFF] rounded-[100px]' : 'text-gray-500'
                                    }`}
                            >
                                {page}
                            </button>
                        </React.Fragment>
                    ))}
                    {currentPage < totalPages && (
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            className="relative w-[24px] h-[24px] flex justify-center items-center text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            Next
                        </button>
                    )}
                </nav>
            </div>
        </>
    );
};

export default Pagination;
