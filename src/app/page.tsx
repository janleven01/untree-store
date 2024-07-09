import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import HomeProducts from "@/components/HomeProducts";
import dynamic from "next/dynamic";

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

export default function Home() {
  return (
    <main>
      <Hero />
      <Promo
        src="promo-1.jpg"
        offer="Limited offers 20% off"
        title="Summer Promo"
        description="Get ready for summer with our exclusive 20% off on selected items! Enjoy the best deals on top-quality products. Don't miss out on these limited-time offers!"
      />
      <HomeProducts />
      <Promo
        src="promo-2.jpg"
        offer="Limited offers 40% off"
        title="Mid-Year Madness!"
        description="Get set for unbeatable savings with our exclusive 20% off on selected items! Explore top-quality products at prices that won't last long. Don't miss out—shop now!"
      />
      <DynamicPopularProducts />
    </main>
  );
}
