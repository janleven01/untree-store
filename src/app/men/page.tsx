import Header from "@/components/Header";
import dynamic from "next/dynamic";
import Men from "@/components/Men";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Men",
};

const DynamicPopularProducts = dynamic(
  () => import("@/components/PopularProducts"),
  {
    ssr: false,
    loading: () => <div className="loading-styles">Loading...</div>,
  }
);

const MenPage = () => {
  return (
    <main className="w-full">
      <header className="min-h-[15rem]">
        <Header title="Men" />
      </header>
  
        <Men />

      <DynamicPopularProducts />
    </main>
  );
};

export default MenPage;
