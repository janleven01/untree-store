import { ArrowLeft, ArrowRight } from "lucide-react";
import Products from "./Products";
import { DisplayProductsProps } from "@/types";

const DisplayProducts = ({
  currentPage,
  setCurrentPage,
  filteredProducts,
}: DisplayProductsProps) => {
  const productsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else setCurrentPage(totalPages);
  };

  const handlePageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="displayProducts_container">
        {currentProducts.map((item) => (
          <Products key={item.id} {...item} />
        ))}
      </div>
      {/* Pagination Controls */}
      {currentProducts.length > 0 && (
        <div className="flex-center gap-1 mt-5">
          <ArrowLeft
            onClick={handlePrevPage}
            width={20}
            height={20}
            className="displayProducts_arrow-styles"
          />
          {pageNumbers.map((pageNumber) => (
            <div
              key={pageNumber}
              className={`displayProducts_pageNumbers ${
                currentPage === pageNumber ? "bg-secondary" : "bg-transparent"
              }`}
              onClick={() => handlePageNumber(pageNumber)}
            >
              {pageNumber}
            </div>
          ))}
          <ArrowRight
            onClick={handleNextPage}
            width={20}
            height={20}
            className="displayProducts_arrow-styles"
          />
        </div>
      )}
    </div>
  );
};

export default DisplayProducts;
