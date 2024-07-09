'use client'

import DisplayProducts from "@/components/DisplayProducts";
import { products } from "@/constants/products";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchResults = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const searchedItems = products.filter((product) =>
    product.keywords.some((keyword) => keyword.includes(searchQuery || ""))
  );

  const handlePressSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchData = new FormData(e.currentTarget);
    const query = (searchData.get("search") as string).trim().toLowerCase();
    router.push(`/search?query=${query}`);
  };

  return (
    <>
      <section className="max-container py-10">
        <div className="border border-black md:w-1/2 sm:w-2/3 w-full m-auto">
          <form
            onSubmit={handlePressSearch}
            className="flex-center gap-4 w-full px-4 py-2"
          >
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search for..."
              autoComplete="off"
              className="outline-none w-full bg-transparent"
            />
            <Search width={20} height={20} />
          </form>
        </div>
        {!searchQuery || searchedItems.length === 0 ? (
          <h4 className="sm:text-xl text-sm py-10 text-center">
            NO RESULTS COULD BE FOUND. <br /> PLEASE TRY AGAIN WITH A DIFFERENT
            QUERY.
          </h4>
        ) : (
          <h4 className="text-2xl py-5 text-center">
            {searchedItems.length} results for &quot;{searchQuery}&quot;
          </h4>
        )}
      </section>

      <section className="max-container pb-10">
        {searchQuery !== "" && (
          <DisplayProducts
            currentPage={currentPage}
            filteredProducts={searchedItems}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
    </>
  );
};

export default SearchResults;
