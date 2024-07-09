'use client'

import DisplayProducts from "@/components/DisplayProducts";
import ProductSort from "@/components/ProductSort";
import { products } from "@/constants/products";
import { categoryStatus } from "@/constants/products";
import { filterProducts, sortProducts } from "@/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Shop = () => {
  const [activeSort, setActiveSort] = useState<string>("Newest Items");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const sortedProducts = sortProducts(products, activeSort);

  const filteredProducts = filterProducts(sortedProducts, activeCategory);

  const handleActiveCategory = (label: string) => {
    setActiveCategory(label);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (categoryParam === null) return;
    else setActiveCategory(categoryParam);
  }, [categoryParam]);

  return (
    <>
      {/* PRODUCT TITLE AND SORT */}
      <section className="max-container">
          <ProductSort
            activeSort={activeSort}
            setActiveSort={setActiveSort}
            setCurrentPage={setCurrentPage}
          />
      </section>

      {/* Products */}
      <section className="max-container">
        <div className="flex max-sm:flex-col gap-10">
          {/* Categories */}
          <div className="shop_category-container">
            {categoryStatus.map((item) => (
              <Link
                href={{ pathname: "/shop", query: { category: item.label } }}
                key={item.label}
                scroll={false}
                className={`flex-between py-2 px-1 group ${
                  activeCategory === item.label
                    ? "bg-secondary"
                    : "bg-transparent border-b border-gray-300/20"
                }`}
                onClick={() => handleActiveCategory(item.label)}
              >
                <div className="text-black/90 group-hover:text-black">
                  {item.label}
                </div>
                <div
                  className={` group-hover:text-black text-xs ${
                    activeCategory === item.label
                      ? "text-black"
                      : "text-gray-300"
                  }`}
                >
                  {item.count}
                </div>
              </Link>
            ))}
          </div>
          {/* Products */}
          <DisplayProducts
            currentPage={currentPage}
            filteredProducts={filteredProducts}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default Shop;
