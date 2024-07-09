import Header from "@/components/Header";
import Cart from "@/components/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart"
}

const CartPage = () => {
  return (
    <main>
      <section className="min-h-[15rem]">
        <Header title="Cart" />
      </section>

      {/* TABLE */}
      <section className="max-container padding-y">
        <Cart/>
      </section>
    </main>
  );
};

export default CartPage;
