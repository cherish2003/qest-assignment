import { useState, useEffect, useCallback } from "react";

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((cartItem) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === cartItem.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...cartItem, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }, []);

  const isInCart = useCallback(
    (id) => cart.some((item) => item.id === id),
    [cart]
  );

  return [cart, addToCart, removeFromCart, updateQuantity, isInCart];
};
