'use client'

import BillingDetails from "@/components/BillingDetails";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Payment from "@/components/Payment";
import { useAppContext } from "@/components/Provider";
import { payments } from "@/constants";
import Link from "next/link";
import { useState } from "react";

const Checkout = () => {

  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);
  const [isShipOpen, setIsShipOpen] = useState<boolean>(false);
  const { cartItems, totalPrice, handlePlaceOrder } = useAppContext();
  
  return (
    <>
      <div className="border p-5">
        Returning customer?{" "}
        <span className="text-purple">
          <a href="">Click here</a>
        </span>{" "}
        to login
      </div>
      <div className="billingDetails-container">
        {/* BILLING DETAILS */}
        <div>
          <h1 className="font-medium text-2xl">Billing Details</h1>
          <div className="border bg-white p-10 max-lg:p-4 mt-5 ">
            <BillingDetails />

            {/* CHECKBOX */}
            <div className="flex flex-col gap-1 pt-10 text-sm">
              {/* CREATE ACCOUNT */}
              <div
                className={`flex flex-col 
              `}
              >
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="createAccount"
                    id="create-account"
                    checked={isAccountOpen}
                    onChange={(e) => setIsAccountOpen(e.target.checked)}
                  />
                  <label htmlFor="create-account">Create an account?</label>
                </div>
                <div
                  className={`checkout_transition ${
                    isAccountOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="pt-4">
                    <div>
                      <p className="">
                        Create an account by entering the information below. If
                        you are a returning customer please login at the top of
                        the page.
                      </p>
                    </div>
                    <div className="py-4">
                      {/* ACCOUNT PASSWORD */}
                      <Form
                        label="Account Password"
                        type="text"
                        name="accountPassword"
                        id="account-password"
                        minLength={6}
                        maxLength={50}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="differentAddress"
                    id="different-address"
                    checked={isShipOpen}
                    onChange={(e) => setIsShipOpen(e.target.checked)}
                  />
                  <label htmlFor="different-address">
                    Ship To A Different Address?
                  </label>
                </div>
                <div
                  className={`checkout_transition pt-3 ${
                    isShipOpen ? "max-h-[160vh]" : "max-h-0"
                  }`}
                >
                  <BillingDetails />
                </div>
              </div>
              <div className="flex flex-col pt-2 gap-1">
                <label htmlFor="order-notes">Order Notes</label>
                <textarea
                  id="order-notes"
                  rows={5}
                  aria-label="Order Notes"
                  placeholder="Write your notes here..."
                  className="px-3 py-3 border border-black outline-none focus:border-purple"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>

        {/* COUPON CODE AND ORDER */}
        <div className="flex flex-col gap-14">
          <div>
            <h1 className=" font-medium text-2xl">Coupon Code</h1>
            {/* COUPON CODE */}
            <div className="bg-white border mt-5 p-14 max-lg:p-6">
              <p className="text-base">
                Enter your coupon code if you have one
              </p>
              <div className="flex items-center pt-5">
                <input
                  type="text"
                  id="coupon"
                  placeholder="Coupon Code"
                  aria-label="Coupon"
                  className="coupon_input"
                  autoComplete="off"
                />
                <Button
                  type="button"
                  title="Apply"
                  otherClassname="bg-black text-white hover:brightness-125"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className=" font-medium text-2xl">Your Order</h1>
            {/* YOUR ORDER */}
            <div className="bg-white border mt-5 p-14 max-lg:p-6">
              <table className="w-full text-left ">
                <thead>
                  <tr className="w-full border-b-2 border-black text-sm">
                    <th className="pb-3">Product</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-3">
                        {item.name} x {item.quantity}
                      </td>
                      <td className="py-3">
                        £
                        {item.quantity &&
                          (Number(item.price) * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b">
                    <td className="checkout_total">Cart Subtotal</td>
                    <td className="checkout_total">£{totalPrice}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="checkout_total">Order Total</td>
                    <td className="checkout_total">£{totalPrice}</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex flex-col gap-4 pt-10">
                {payments.map((payment) => (
                  <Payment
                    key={payment.label}
                    label={payment.label}
                    content={payment.content}
                  />
                ))}
                <Link
                  href="/thankyou"
                  onClick={handlePlaceOrder}
                  className="checkout_placeOrder"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
