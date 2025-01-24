import React, { useState, useEffect } from "react";
import FilterBar from "../services/FilterBar";
import ServiceList from "../components/ServiceList";
import Sidebar from "../components/Sidebar";
import { services } from "../data/services";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedServices, setSelectedServices] = useState([]);
  const [movedToCart, setMovedToCart] = useState([]);
  const [cart, addToCart, isInCart] = useCart();

  const toggleSelect = (service) => {
    if (selectedServices.some((s) => s.id === service.id)) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleMoveToCart = (service) => {
    console.log(service);
    if (!isInCart(service.name)) {
      addToCart(service);
    }

    setTimeout(() => {
      setSelectedServices([]);
    }, 800);
  };

  const filteredTypes =
    activeFilter === "All"
      ? services
      : activeFilter === "Selected"
      ? [
          {
            type: "Selected Services",
            emoji: "✅",
            color: "bg-card5",
            services: selectedServices,
          },
        ]
      : services.filter((type) => type.type === activeFilter);

  return (
    <Sidebar>
      <h1 className="text-3xl font-bold text-center mb-6">Services</h1>

      <FilterBar
        serviceTypes={services}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredTypes.map((type) => (
          <ServiceList
            key={type.type}
            type={type.type}
            emoji={type.emoji}
            color={type.color}
            services={type.services}
            selectedServices={selectedServices}
            movedToCart={movedToCart}
            toggleSelect={toggleSelect}
            onMoveToCart={handleMoveToCart}
            isSelectedFilter={activeFilter === "Selected"}
          />
        ))}
      </div>
    </Sidebar>
  );
};

export default Homepage;
