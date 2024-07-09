"use client";

import Button from "@/components/Button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "./Provider";

const Cart = () => {
  const tableHeaders = [
    { label: "Image", minWidth: "min-w-[150px]" },
    { label: "Product", minWidth: "min-w-[150px]" },
    { label: "Price", minWidth: "min-w-[100px]" },
    { label: "Quantity", minWidth: "min-w-[200px]" },
    { label: "Total", minWidth: "min-w-[100px]" },
  ];
  const {
    cartItems,
    totalPrice,
    handleQuantityChange,
    handleDeleteProduct,
    handleReduceQuantity,
    handleAddQuantity,
  } = useAppContext();

  return (
    <>
      <div className="min-h-[50vh] overflow-x-auto">
        <table className="w-full min-w-[600px] relative">
          <thead>
            <tr className="text-center text-lg text-black/80 border">
              {tableHeaders.map((header, index) => (
                <th key={index} className={`py-5 border ${header.minWidth}`}>
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {cartItems.length === 0 && (
              <tr>
                <td className="empty_cartStyles">
                  Your cart is empty. Shop{" "}
                  <Link href="/shop" className="text-purple">
                    here
                  </Link>{" "}
                  now!
                </td>
              </tr>
            )}
            {cartItems.map((item) => (
              <tr key={item.id} className="">
                <td className="pt-3 max-w-[100px] border">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={480}
                    height={480}
                    className="object-cover"
                  />
                </td>
                <td className="cart_table font-medium text-xl">
                  <h3>{item.name}</h3>
                </td>
                <td className="cart_table text-[15px]">
                  {item.sale ? (
                    <div>
                      <span className="line-through mr-1">£{item.price}</span>—
                      £{item.discountPrice}
                    </div>
                  ) : (
                    `£${item.price}`
                  )}
                </td>
                <td className="text-2xl text-center border px-2">
                  <div className="flex-center">
                    <button
                      className="input_buttonStyles"
                      onClick={() => handleReduceQuantity(item)}
                    >
                      -
                    </button>{" "}
                    <input
                      id={`${item.id}`}
                      type="number"
                      className="input_styles"
                      value={item.quantity === 1 ? 1 : item.quantity || ""}
                      onChange={(e) =>
                        handleQuantityChange(item, Number(e.target.value))
                      }
                      onBlur={(e) => {
                        const value = e.target.value;
                        if (value === "") {
                          handleQuantityChange(item, 1);
                        }
                      }}
                      min={1}
                      max="10"
                    />{" "}
                    <button
                      className="input_buttonStyles"
                      onClick={() => handleAddQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-2 text-center text-[15px] max-w-[30px] border">
                  £
                  {item.quantity
                    ? (
                        (item.sale
                          ? Number(item.discountPrice)
                          : Number(item.price)) * item.quantity
                      ).toFixed(2)
                    : 0}
                </td>
                <td className="border text-center px-2">
                  <button
                    type="button"
                    onClick={() => handleDeleteProduct(item)}
                    className="border bg-black p-1"
                  >
                    <X
                      width={20}
                      height={20}
                      strokeWidth="4"
                      className="text-white p-1 hover:scale-150 transition-transform duration-200"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons and Coupon */}
      <div className="flex justify-between max-md:flex-col mt-10">
        <div className="w-full md:w-2/3">
          <Link
            href="/shop"
            className="button-styles bg-white text-black hover:text-white hover:bg-black"
          >
            Continue Shopping
          </Link>
          <div className="">
            <h1 className="font-medium text-3xl pt-14">Coupon</h1>
            <p className="pt-4">Enter your coupon code if you have one</p>
            <div className="flex gap-5 mt-5">
              <input
                type="text"
                id="coupon"
                placeholder="Coupon Code"
                aria-label="Coupon"
                className="w-1/2 border-black px-2 py-2 border outline-none focus:border-purple"
              />
              <Button
                type="button"
                title="Apply Coupon"
                otherClassname="bg-black text-white hover:brightness-125"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 max-md:w-full max-md:pt-20">
          <h1 className=" font-medium text-3xl border-b pb-2 md:text-end">
            Cart Totals
          </h1>
          <div className="w-2/3 py-12 md:ml-auto">
            <div className="flex justify-between">
              <h4 className="cart_total-title">Subtotal</h4>
              <h4 className="cart_total">£{totalPrice}</h4>
            </div>
            <div className="flex justify-between pt-5">
              <h4 className="cart_total-title">Total</h4>
              <h4 className="cart_total">£{totalPrice}</h4>
            </div>
          </div>
          {cartItems.length === 0 ? (
            <Button
              type="button"
              title="Proceed to Checkout"
              otherClassname="border-black bg-white text-black cursor-not-allowed md:w-full xs:w-2/3 w-full"
            />
          ) : (
            <div className="flex md:justify-end ">
              <Link
                href="/checkout"
                className="button-styles text-center bg-white hover:text-white hover:bg-black md:w-full xs:w-2/3 w-full"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
