"use client";

import { SearchResultProps } from "@/types";
import Link from "next/link";
import MostSearched from "./MostSearched";
import { mostSearched } from "@/constants";

const SearchResult = ({
  title1,
  title2,
  handleSearch,
  searchedResults,
  isDefault,
}: SearchResultProps) => {
  return (
    <div className="search_result-header">
      {/* TOP PRODUCTS / COLLECTION */}
      <div className="search_result-collection">
        <h3 className="sm:text-lg text-sm font-medium">{title1}</h3>
        <div className="sm:pt-2">
          {searchedResults.map((product) => (
            <Link
              href={`/shop/${product.name.replace(/\s+/g, "")}?id=${
                product.id
              }`}
              key={product.id}
              onClick={handleSearch}
              className="search_result-collectionName"
            >
              {product.name}
            </Link>
          ))}
        </div>
      </div>
      {/* MOST SEARCHED COLLECTION / PRODUCTS RESULT */}
      <div className="w-full lg:w-2/3 py-2">
        <h3 className="sm:text-lg text-sm font-medium">{title2}</h3>
        <div onClick={handleSearch} className="search_result-image-container">
          {isDefault ? (
            <>
              {mostSearched.map((item) => (
                <div key={item.alt} className="relative">
                  <MostSearched
                    src={item.src}
                    alt={item.alt}
                    label={item.label}
                    href={item.href}
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              {searchedResults.map((item) => (
                <div key={item.id} className="relative">
                  <MostSearched
                    src={item.src}
                    alt={item.name}
                    label={item.name}
                    href={`/shop/${item.name.replace(/\s+/g, "")}?id=${
                      item.id
                    }`}
                    isNew={item.new}
                    isSale={item.sale}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
