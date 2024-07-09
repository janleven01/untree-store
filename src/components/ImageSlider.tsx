"use client";

import { imageSlider } from "@/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<null | NodeJS.Timeout>(null);

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

  const startInterval = () => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % imageSlider.length
      );
    }, 5000);
    intervalRef.current = interval;
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="max-lg:relative">
      <div className="overflow-hidden lg:absolute top-0">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageSlider.map((item, index) => (
            <div key={index} className="min-w-full">
              <Image
                src={item.src}
                alt={item.alt}
                width={2000}
                height={1050}
                priority
                className="hero_image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hero_image-dots">
        {imageSlider.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`text-6xl hover:text-purple ${
              currentIndex === index ? "text-purple/80" : "text-gray-500"
            }`}
            onClick={() => handleDotClick(index)}
          >
            .
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
