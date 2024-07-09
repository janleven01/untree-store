"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "./Provider";

const NavIcons = ({handleSearch}: {handleSearch: () => void}) => {
  const { cartItems } = useAppContext();

  return (
    <>
      <div className="flex">
        <Search
          width={20}
          height={20}
          className="hover:text-purple"
          onClick={handleSearch}
        />
      </div>
      <User
        width={20}
        height={20}
        className="hover:text-purple"
      />
      <Link href="/cart" className="relative">
        <ShoppingCart
          width={20}
          height={20}
          className="hover:text-purple"
        />
        <div className="navicon_cart">
          {cartItems.length}
        </div>
      </Link>
    </>
  );
};

export default NavIcons;
