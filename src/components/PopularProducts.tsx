"use client";

import { products } from "@/constants/products";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const PopularProducts = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [transformValue, setTransformValue] = useState("");
  const intervalRef = useRef<null | NodeJS.Timeout>(null);
  const [showProductDetail, setShowProductDetail] = useState<boolean>(false)
  const router = useRouter()

  const popularProducts = [...products]
  .sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0))
  .slice(0, 6);

  const handleShowProductDetail = (name: string, id: number) => {
    setShowProductDetail((prevStat) => !prevStat);
    router.push(`/shop/${name.replace(/\s+/g, '')}?id=${id}`)
  };

  const getLengthBasedOnWidth = useCallback(() => {
    if (window.innerWidth >= 1024) {
      return popularProducts.length - 2;
    } else if (window.innerWidth >= 425) {
      return popularProducts.length - 1;
    } else {
      return popularProducts.length;
    }
  }, [popularProducts.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    startInterval();
  };

  const handlePrev = () => {
    setCurrentIndex( (currentIndex) =>
        (currentIndex - 1 + getLengthBasedOnWidth()) % getLengthBasedOnWidth()
    );
    resetInterval();
  };

  const handleNext = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex + 1) % getLengthBasedOnWidth()
    );
    resetInterval();
  };

  const startInterval = useCallback(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % getLengthBasedOnWidth()
      );
    }, 4000);
    intervalRef.current = interval;
  }, [getLengthBasedOnWidth]);

  useEffect(() => {
    const updateTransform = () => {
      if (window.innerWidth >= 1024) {
        setTransformValue(`translateX(-${currentIndex * 33.333}%)`);
      } else if (window.innerWidth >= 425) {
        setTransformValue(`translateX(-${currentIndex * 50}%)`);
      } else {
        setTransformValue(`translateX(-${currentIndex * 100}%)`);
      }
    };

    updateTransform();
    window.addEventListener("resize", updateTransform);

    return () => window.removeEventListener("resize", updateTransform);
  }, [currentIndex]);

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  return (
    <section className="w-full">
      <div className="relative max-container padding-b">
        <div className="overflow-hidden">
          <div>
            <div className="relative flex-between">
              <h2 className="text-lg tracking-wide">
                Popular Items
              </h2>
              <div className="flex gap-1">
                <ArrowLeftCircle
                  onClick={handlePrev}
                  width={32}
                  height={32}
                  strokeWidth={1.5}
                  className="text-gray-300 hover:text-black"
                />
                <ArrowRightCircle
                  onClick={handleNext}
                  width={32}
                  height={32}
                  strokeWidth={1.5}
                  className="text-gray-300 hover:text-black"
                />
              </div>
            </div>
            <div
              className="flex pt-10 transition-transform duration-700"
              style={{ transform: transformValue }}
            >
              {popularProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleShowProductDetail(item.name, item.id)}
                  className="popularProducts_container"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={480}
                    height={480}
                    className="popularProducts_image"
                  />
                  <h3 className="font-medium pt-4 text-black/80 ">
                    {item.name}
                  </h3>
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
                    <div className="popularProducts_new">
                      N E W
                    </div>
                  )}
                  {item.sale && (
                    <div
                      className={`popularProducts_sale ${
                        item.new ? "left-7" : "left-0"
                      }`}
                    >
                      S A L E
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="popularProducts_dots">
              {Array.from({ length: getLengthBasedOnWidth() }).map(
                (_, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`text-6xl hover:text-purple ${
                      currentIndex === index
                        ? "text-purple/80"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleDotClick(index)}
                  >
                    .
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
