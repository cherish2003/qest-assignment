import React from "react";
import { motion } from "framer-motion";

const CartCard = ({ item }) => {
  return (
    <motion.li
      key={item.id}
      className="flex flex-wrap justify-between items-center p-4 border rounded-lg bg-white shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <span className="text-lg font-semibold">{item.name}</span>
        <span className="ml-4 text-sm text-gray-500">${item.price}</span>
      </div>
      <div className="flex items-center space-x-2 mt-2 md:mt-0">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="bg-gray-300 text-black px-2 py-1 rounded"
          disabled={item.quantity === 1}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-300 text-black px-2 py-1 rounded"
        >
          +
        </button>
        <motion.button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Remove
        </motion.button>
      </div>
    </motion.li>
  );
};

export default CartCard;
