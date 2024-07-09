"use client";

import DisplayProducts from "@/components/DisplayProducts";
import ProductSort from "@/components/ProductSort";
import { products } from "@/constants/products";
import { filterProducts, sortProducts } from "@/utils";
import React, { Suspense, useState } from "react";

const Men = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeSort, setActiveSort] = useState<string>("Newest Items");

  const sortedProducts = sortProducts(products, activeSort);

  const filteredProducts = filterProducts(sortedProducts, "Men");

  return (
    <>
      {/* PRODUCT TITLE AND SORT */}
      <section className="max-container pb-5">
        <Suspense fallback={<div className="loading-styles">Loading...</div>}>
          <ProductSort
            activeSort={activeSort}
            setActiveSort={setActiveSort}
            setCurrentPage={setCurrentPage}
            extra="Men's"
          />
        </Suspense>
      </section>

      {/* Products */}
      <section className="max-container">
        <DisplayProducts
          currentPage={currentPage}
          filteredProducts={filteredProducts}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
};

export default Men;
