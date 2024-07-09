"use client";

import { AppContextType, Product } from "@/types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (totalPrice, item) =>
        totalPrice + Number(item.quantity) * Number(item.price),
      0
    )
    .toFixed(2)
}, [cartItems])

  const handleAddProduct = (product: Product, quantity: number) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...ProductExist,
                quantity: Math.min(
                  Math.max(Number(ProductExist.quantity) + quantity, 0),
                  item.stock
                ),
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const handleReduceQuantity = (product: Product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      const quantity = productExist.quantity || 0;
      if (quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else if (quantity > 1) {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...productExist, quantity: quantity - 1 }
              : item
          )
        );
      }
    }
  };

  const handleDeleteProduct = (product: Product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const handleAddQuantity = (product: Product) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem === product
          ? {
              ...cartItem,
              quantity: Math.min(
                Math.max(Number(cartItem.quantity) + 1, 0),
                product.stock
              ),
            }
          : cartItem
      )
    );
  };

  const handleQuantityChange = (product: Product, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem === product
          ? {
              ...cartItem,
              quantity: Math.min(Math.max(Number(quantity), 0), product.stock),
            }
          : cartItem
      )
    );
  };

  // Updated handlePlaceOrder function
  const handlePlaceOrder = () => {
    setCartItems([]);
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          cartItems,
          totalPrice,
          handleQuantityChange,
          handleAddProduct,
          handleDeleteProduct,
          handleReduceQuantity,
          handleAddQuantity,
          handlePlaceOrder,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a Provider");
  }
  return context;
};
