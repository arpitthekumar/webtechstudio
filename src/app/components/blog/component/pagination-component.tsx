import { useState, useEffect } from "react";

type PaginationProps = {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  currentPage: number;

};

export default function Pagination({
  totalPages,
  initialPage = 1,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  useEffect(() => {
    onPageChange?.(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageChange = (page: number) => {
    if (page === totalPages) {
      setCurrentPage(1); // Change to the first page when the last page is reached
    } else if (page === 0) {
      setCurrentPage(totalPages); // Change to the last page when the first page is reached
    } else {
      setCurrentPage(page);
    }
  };
  

  const handlePrev = (): void => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : totalPages);
  };

  const handleNext = (): void => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : 1);
  };

  const renderPagination = () => {
    const totalVisible = 14;
    const semicircleItems = 9;
    const extraItems = 2;

    const allPageNumbers: number[] = [];
    for (let i = 0; i < totalVisible; i++) {
      let pageNum = currentPage - Math.floor(semicircleItems / 2) - extraItems + i;
      while (pageNum <= 0) pageNum += totalPages;
      while (pageNum > totalPages) pageNum -= totalPages;
      allPageNumbers.push(pageNum);
    }

    const leftExtension = allPageNumbers.slice(0, extraItems);
    const semicircle = allPageNumbers.slice(extraItems, extraItems + semicircleItems);
    const rightExtension = allPageNumbers.slice(extraItems + semicircleItems);

    const radius = 100;

    return (
      <div className="relative flex items-end justify-center w-full h-56">
        {/* Left Arrow */}
        <button onClick={handlePrev} className="absolute left-80 -bottom-3 z-10">
          <div className="w-16 h-16 rounded-4xl transition flex items-center hover:scale-125 justify-center">
            <svg
              className="w-8 h-8 stroke-[var(--acua-marine)]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        {/* Left Extension */}
        <div className="absolute bottom-0 flex" style={{ left: `460px` }}>
          {leftExtension.map((page: number) => (
            <PageButton
              key={`left-${page}`}
              page={page}
              currentPage={currentPage}
              onClick={handlePageChange}
              spacing="mr-1"
            />
          ))}
        </div>

        {/* Semicircle */}
        <div className="flex items-end justify-center">
          {semicircle.map((page: number, index: number) => {
            const reversedIndex = semicircleItems - 1 - index;
            const angle = (Math.PI * reversedIndex) / (semicircleItems - 1);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const lift = page === currentPage ? 16 : 0;

            return (
              <PageButton
                key={`semi-${page}`}
                page={page}
                currentPage={currentPage}
                onClick={handlePageChange}
                absolute
                position={{ x, y: y + lift }}
              />
            );
          })}
        </div>

        {/* Center Arrow / Hint */}
        <div className="absolute bottom-20 z-30">
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="absolute -bottom-20 flex justify-center w-full">
              <div className="text-3xl pointer-events-none select-none animate-bounce"> 🖕 </div>
            </div>
          </div>
        </div>

        {/* Right Extension */}
        <div className="absolute bottom-0 flex" style={{ right: `460px` }}>
          {rightExtension.map((page: number) => (
            <PageButton
              key={`right-${page}`}
              page={page}
              currentPage={currentPage}
              onClick={handlePageChange}
              spacing="ml-1"
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={handleNext} className="absolute right-80 -bottom-3 z-10 hover:scale-120">
          <div className="w-16 h-16 transition flex rounded-4xl items-center justify-center">
            <svg
              className="w-8 h-8 stroke-[var(--acua-marine)]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-full h-64">
      {renderPagination()}
      <div className="mt-8 text-gray-700 font-semibold">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}

type PageButtonProps = {
  page: number;
  currentPage: number;
  onClick: (page: number) => void;
  spacing?: string;
  absolute?: boolean;
  position?: { x: number; y: number };
};

function PageButton({
  page,
  currentPage,
  onClick,
  spacing = "",
  absolute = false,
  position = { x: 0, y: 0 },
}: PageButtonProps) {
  const isActive = page === currentPage;

  return (
    <button
      onClick={() => onClick(page)}
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
        ${
          isActive
            ? "bg-acua-marine text-white scale-110 shadow-lg"
            : "bg-gray-800 text-gray-300 hover:bg-acua-marine hover:text-white hover:scale-105"
        }
        ${spacing} ${absolute ? "absolute" : ""}`}
      style={
        absolute
          ? {
              transform: `translate(${position.x}px, ${-position.y}px)`,
              zIndex: isActive ? 20 : 10,
            }
          : {}
      }
    >
      {page}
    </button>
  );
}
