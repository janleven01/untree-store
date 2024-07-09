'use client'

import { useOutsideClick } from "@/lib/auto_close";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const sortBy = [
  { label: "Newest Items" },
  { label: "Best Selling" },
  { label: "Price: Ascending" },
  { label: "Price: Descending" },
];

const ProductSort = ({
  activeSort,
  setActiveSort,
  setCurrentPage,
  extra,
}: {
  activeSort: string;
  setActiveSort: (activeSort: string) => void;
  setCurrentPage: (currentPage: number) => void;
  extra?: string;
}) => {
  const [isSortActive, setIsSortActive] = useState<boolean>(false);
  const menuRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams(useSearchParams())
  const idParams = useSearchParams().get("id");

  useOutsideClick(menuRef, true, setIsSortActive);

  const handleActiveSort = (label: string, index: number) => {
    setActiveSort(label);
    setIsSortActive(false);
    searchParams.set('sort', label.replace(/\s+/g, "").toLowerCase());
    searchParams.set('id', index.toString());
    router.push(`${pathname}?${searchParams.toString()}`, {scroll: false});
  };

  const handleIsActiveSort = () => {
    setIsSortActive((prevStatus) => !prevStatus);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeSort, setCurrentPage]);

  useEffect(() => {
    if (idParams === null) return;
    const index = parseInt(idParams, 10); // Convert idParams to a number
    const sortParams = sortBy[index].label; // Access the 'label' property
    if (sortParams) {
      setActiveSort(sortParams);
    }
  }, [idParams, setActiveSort]);

  return (
    <div className="productSort_container">
      <h1 className="text-4xl">{extra} Products</h1>
      <div className="flex gap-3 bg-secondary sm:p-5 p-3">
        <h4>Sort by: </h4>
        <div className="flex flex-col cursor-pointer" ref={menuRef}>
          <div
            className="flex-between w-44"
            onClick={handleIsActiveSort}
          >
            <h4>{activeSort}</h4>
            <ChevronDown width={15} height={15} />
          </div>
          <div className="relative">
            {isSortActive && (
              <div className="productSort_active">
                {sortBy.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleActiveSort(item.label, index)}
                    className="px-1 hover:bg-blue-600 hover:text-white"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSort;
