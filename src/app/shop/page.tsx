import Header from "@/components/Header";
import Shop from "@/components/Shop";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Shop",
};

const DynamicPopularProducts = dynamic(
  () => import("@/components/PopularProducts"),
  {
    ssr: false,
    loading: () => <div className="loading-styles">Loading...</div>,
  }
);

const ShopPage = () => {
  return (
    <main className="w-full">
      <header className="min-h-[15rem]">
        <Header title="Shop" />
      </header>

      <Suspense fallback={<div className="loading-styles">Loading...</div>}>
        <Shop />
      </Suspense>

      <DynamicPopularProducts />
    </main>
  );
};

export default ShopPage;
