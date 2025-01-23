import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";
import Sidebar from "../components/Sidebar";
import { services } from "../data/services";

const Homepage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart((prevCart) => [...prevCart, service]);
  };

  return (
    <Sidebar>
      <h1 className="text-3xl font-bold text-center mb-6">Select Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            name={service.name}
            price={service.price}
            description={service.description}
            onAddToCart={() => addToCart(service)}
          />
        ))}
      </div>

      <div className="mt-10 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart.length > 0 ? (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b pb-2">
                <span>{item.name}</span>
                <span className="text-blue-600">${item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </Sidebar>
  );
};

export default Homepage;
