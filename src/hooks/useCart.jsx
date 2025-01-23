import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (cartitem) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === cartitem.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === cartitem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...cartitem, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart };
};

export default useCart;
