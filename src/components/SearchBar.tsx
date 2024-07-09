"use client";

import { products } from "@/constants/products";
import { useOutsideClick } from "@/lib/auto_close";
import { sortProducts } from "@/utils";
import { Search, X } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import SearchResult from "./SearchResult";
import { useRouter } from "next/navigation";
import { SearchBarProps } from "@/types";

const SearchBar = ({ isSearch, handleSearch, setIsSearch }: SearchBarProps) => {
  const popularProducts = sortProducts(products, "Best Selling").slice(0, 4);
  const [searchedText, setSearchedText] = useState<string>("");
  const [userTyping, setUserTyping] = useState<boolean>(false);
  const searchRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();

  useOutsideClick(searchRef, false, setIsSearch);

  const lowerCaseSearchText = searchedText.toLowerCase();
  const searchedItems = products.filter((product) =>
    product.keywords.some((keyword) => keyword.includes(lowerCaseSearchText))
  );

  const searchedResults = searchedItems.slice(0, 4);

  // Debounce function with a delay of 300ms
  const handleInputChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.trim();
    setSearchedText(text);
    setUserTyping(text.length > 0);
  }, 300);

  const handlePressSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchData = new FormData(e.currentTarget);
    const query = (searchData.get("search") as string).trim();
    router.push(`/search?query=${query}`);
    setIsSearch(false);
  };

  // useEffect to reset userTyping when setIsSearch is false
  useEffect(() => {
    if (isSearch === false) {
      setUserTyping(false);
    }
  }, [isSearch]);

  return (
    <div
      className={`search_background ${
        isSearch ? "backdrop-blur-xl" : "invisible"
      } `}
    >
      <div
        ref={searchRef}
        className={`search_header ${
          isSearch ? "search_header-true" : "search_header-false"
        }`}
      >
        {isSearch && (
          <div className="flex flex-col pt-5">
            {/* Searchbar */}
            <div className="flex-between py-3 px-2 border border-black">
              <form
                onSubmit={handlePressSearch}
                className="flex items-center gap-4 w-full"
              >
                <Search width={20} height={20} />
                <input
                  type="search"
                  id="search"
                  name="search"
                  placeholder="Search for..."
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="off"
                  className="outline-none w-full bg-transparent"
                />
              </form>
              <X width={20} height={20} className="" onClick={handleSearch} />
            </div>

            {userTyping ? (
              <SearchResult
                searchedResults={searchedResults}
                title1="Collections"
                handleSearch={handleSearch}
              />
            ) : (
              <SearchResult
                searchedResults={popularProducts}
                title1="Top Products"
                title2="Most Searched Collection"
                handleSearch={handleSearch}
                isDefault={true}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
