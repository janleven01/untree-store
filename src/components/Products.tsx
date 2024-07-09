"use client";

import { useOutsideClick } from "@/lib/auto_close";
import { Product } from "@/types";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Products = (item: Product) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [showProductDetail, setShowProductDetail] = useState<boolean>(false);
  const router = useRouter()

  useOutsideClick(ref, false, setShowProductDetail);

  const handleShowProductDetail = () => {
    setShowProductDetail((prevStat) => !prevStat)
    router.push(`/shop/${item.name.replace(/\s+/g, '')}?id=${item.id}`)
  };

  return (
    <>
      <div
        key={item.id}
        className="relative text-center w-3/4 sm:w-full"
        onClick={handleShowProductDetail}
      >
        <Image
          src={item.src}
          alt={item.name}
          width={480}
          height={480}
          className="products_image"
        />
        <h3 className=" font-medium pt-4 text-black/80 ">{item.name}</h3>
        <div className="text-sm text-black/80 ">
          {item.sale ? (
            <div>
              <span className="line-through mr-1">£{item.price}</span>—{" "}
              £{item.discountPrice}
            </div>
          ) : (
            `£${item.price}`
          )}
        </div>
        {item.new && (
          <div className="products_new">
            N E W
          </div>
        )}
        {item.sale && (
          <div
            className={`products_sale ${
              item.new ? "left-7" : "left-0"
            }`}
          >
            S A L E
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
