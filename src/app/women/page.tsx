import Header from "@/components/Header";
import Women from "@/components/Women";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Women"
}

const DynamicPopularProducts = dynamic(
  () => import("@/components/PopularProducts"),
  {
    ssr: false,
    loading: () => (
      <div className="loading-styles">
        Loading...
      </div>
    ),
  }
);

const WomenPage = () => {

  return (
    <main className="w-full">
      <header className="min-h-[15rem]">
        <Header title="Women" />
      </header>

      <Women/>

      <DynamicPopularProducts />
    </main>
  );
};

export default WomenPage;
