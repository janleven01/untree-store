import Checkout from "@/components/Checkout";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout"
}

const CheckoutPage = () => {

  return (
    <main className="w-full">
      <section className="min-h-[15rem]">
        <Header title="Checkout" />
      </section>

      <section className="max-container padding-y">
        <Checkout/>
      </section>
    </main>
  );
};

export default CheckoutPage;
