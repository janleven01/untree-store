import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";
import dynamic from "next/dynamic";
import { products } from "@/constants/products";
import { Suspense } from "react";

export function generateMetadata({searchParams } : {
  searchParams: { id: string}
}) {
  
  const id = parseInt(searchParams.id, 10) // convert
  const product = products.find((item) => item.id === id)

  
  return {
    title: product?.name,
    description: product?.description,
    keywords: product?.keywords,
    openGraph: {
      title: product?.name,
      description: product?.description,
      images: [
        {
          url: product?.src,
          width: 480,
          height: 480
        }
      ]
    }
  };
}

const DynamicPopularProducts = dynamic(
  () => import("@/components/PopularProducts"),
  {
    ssr: false,
    loading: () => <div className="loading-styles">Loading...</div>,
  }
);

const ProductDetailsPage = () => {

  return (
    <main className="w-full">
      <header className="min-h-[30vh] lg:min-h-[35vh]">
        <Header title="Item Details" shop={true} />
      </header>

      <Suspense fallback={<div className="loading-styles">Loading...</div>}>
        <ProductDetails />
      </Suspense>

      <DynamicPopularProducts />
    </main>
  );
};

export default ProductDetailsPage;
