import { MostSearchedProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MostSearched = ({
  src,
  alt,
  label,
  href,
  isNew,
  isSale,
}: MostSearchedProps) => {
  return (
    <Link href={href} className="group">
      <Image
        src={src}
        alt={alt}
        width={480}
        height={480}
        className="object-contain rounded-2xl max-h-32 transition-transform duration-400 group-hover:scale-110"
      />
      <div className="pt-3 md:text-xl sm:text-lg text-sm group-hover:text-purple font-medium text-center">
        {label}
      </div>
      {isNew && (
        <div className="products_new -left-2">
          N E W
        </div>
      )}
      {isSale && (
        <div
          className={`products_sale ${
            isNew ? "left-4" : "-left-2"
          }`}
        >
          S A L E
        </div>
      )}
    </Link>
  );
};

export default MostSearched;
