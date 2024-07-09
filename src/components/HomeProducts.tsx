import Products from "@/components/Products";
import { products } from "@/constants/products";

const HomeProducts = () => {
  return (
    <section className="relative w-full">
      <div className="max-container ">
        <div className="homeProducts_container">
          {products.slice(0, 6).map((item) => (
            <Products key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
