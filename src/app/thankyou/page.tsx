import Link from "next/link";
import { Check, ShoppingCart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You"
}

const ThankYou = () => {
  return (
    <>
      <div className="thankyou_container">
        <div className="relative">
          <ShoppingCart className="w-28 h-32 text-purple" />
          <Check
            strokeWidth={4}
            className="thankyou_checkStyles"
          />
          <div className="thankyou_circleStyles" />
        </div>
        <div className="text-center tracking-wide">
          <h1 className="text-7xl">Thank You!</h1>
          <p className="text-xl pt-4">Your order was successfully completed.</p>
        </div>
        <Link href="/shop" className="thankyou_button-shop">
          Back to Shop
        </Link>
      </div>
    </>
  );
};

export default ThankYou;
