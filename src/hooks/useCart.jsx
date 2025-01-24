import { useState, useEffect } from "react";

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (item) => {
    setCart((prev) => {
      // const updatedCart = [...prev, item];
      const updatedCart = [...prev, { ...item, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  return [cart, addToCart, updateQuantity, removeFromCart, isInCart];
};
