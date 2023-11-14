"use client";

import { Product } from "@/types/product";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  total: number;
  subTotal: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductFromCart: (product: CartProduct) => void;
  increaseProductQuantity: (product: CartProduct) => void;
  removeProductFromCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  total: 0,
  subTotal: 0,
  addProductToCart: () => {},
  decreaseProductFromCart: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    setProducts(
      JSON.parse(localStorage.getItem("@mks-sistemas/cart-products") || "[]"),
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "@mks-sistemas/cart-products",
      JSON.stringify(products),
    );
  }, [products]);

  const subTotal = useMemo(() => {
    return products.reduce((sum, product) => {
      return sum + Number(product.price) * product.quantity;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    return products.reduce(
      (sum, product) => sum + Number(product.price) * product.quantity,
      0,
    );
  }, [products]);


  function addProductToCart(product: CartProduct) {
    const isProductOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (isProductOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        }),
      );
      return;
    }

    setProducts((prev) => [...prev, product]);
  }

  function decreaseProductFromCart(product: CartProduct) {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  }

  function increaseProductQuantity(product: CartProduct) {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  }

  function removeProductFromCart(product: CartProduct) {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== product.id),
    );
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductFromCart,
        increaseProductQuantity,
        removeProductFromCart,
        total,
        subTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}