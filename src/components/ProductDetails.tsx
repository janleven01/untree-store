"use client";

import Button from "@/components/Button";
import { Product } from "@/types";
import Image from "next/image";
import { products } from "@/constants/products";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppContext } from "@/components/Provider";
import { Check } from "lucide-react";

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [quantity, setQuantity] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const { handleAddProduct } = useAppContext();

  const handleAddQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10); // Convert input value to number
    if (product) {
      const newValue = Math.min(Math.max(Number(value), 1), product.stock);
      setQuantity(isNaN(newValue) ? 0 : newValue); // Update quantity state with parsed number or fallback to 0
    }
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    handleAddProduct(product, quantity);
    setQuantity(1);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId]);

  if (!product)
    return (
      <div className="flex-center max-container min-h-[50vh]">Loading...</div>
    );

  return (
    <>
      <section className="max-container min-h-[70vh] lg:min-h-[65vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-2 items-center">
          <Image
            src={product.src}
            alt={product.name}
            width={480}
            height={480}
            className="object-contain place-self-center"
            priority
          />
          <div className="flex flex-col">
            <h3 className="text-2xl md:text-3xl py-2 md:py-5 font-medium">
              {product.name}
            </h3>
            <h4>
              {product.sale ? (
                <div>
                  <span className="line-through mr-1">£{product.price}</span>— £
                  {product.discountPrice}
                </div>
              ) : (
                `£${product.price}`
              )}
            </h4>
            <p className="py-2 md:py-5 text-sm sm:text-base">
              {product.description}
            </p>
            <div className="flex flex-col gap-2 pb-2 sm:pb-5">
              <h4 className="text-lg font-medium">Quantity</h4>
              <div className="flex">
                <button
                  className="input_buttonStyles"
                  onClick={handleMinusQuantity}
                >
                  -
                </button>{" "}
                <input
                  type="number"
                  id="quantity-product-detail"
                  value={quantity === 1 ? 1 : quantity || ""}
                  min={1}
                  max={product.stock}
                  onChange={handleInputChange}
                  onBlur={(e) => {
                    const value = e.target.value;
                    if (value === "") {
                      setQuantity(1);
                    }
                  }}
                  className="input_styles"
                />{" "}
                <button
                  className="input_buttonStyles"
                  onClick={handleAddQuantity}
                >
                  +
                </button>
                <h4 className="text-slate-500 flex items-center pl-5 text-sm">
                  {product.stock} pieces available
                </h4>
              </div>
              <h4></h4>
            </div>
            <Button
              type="button"
              title="Add to Cart"
              otherClassname="productDetail_addCart"
              handleClick={() => handleAddToCart(product, quantity)}
            />
          </div>
        </div>
      </section>

      {/* ADD TO CART POP UP */}
      {showModal && (
        <div className="flex-center fixed inset-0 z-50 bg-black/50">
          <div className="flex-center flex-col space-y-5 p-5 bg-secondary rounded-xl shadow-lg">
            <div className="flex-center border rounded-full h-14 w-14">
              <Check width={50} height={50} className="text-purple p-1" />
            </div>
            <h4 className="font-xl font-medium">
              Item has been added to your cart
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
