import React, { useState } from "react";

const ServiceList = ({
  type,
  emoji,
  color,
  services = [],
  selectedServices,
  toggleSelect,
  onMoveToCart,
}) => {
  const [movedToCart, setMovedToCart] = useState([]);

  const handleMoveToCart = (serviceId) => {
    setMovedToCart((prev) => [...prev, serviceId]);
    const service = services.find((s) => s.id === serviceId);
    onMoveToCart(service);
  };

  return (
    <div className={`p-4 rounded-lg ${color}`}>
      <div className="flex items-center mb-4">
        <span className="text-2xl">{emoji}</span>
        <h2 className="ml-2 text-lg font-bold">{type}</h2>
      </div>
      {services.length > 0 ? (
        <ul className="space-y-2">
          {services.map((service) => (
            <li
              key={service.id}
              className={`flex justify-between bg-white p-2 rounded shadow items-center ${
                movedToCart.includes(service.id) ? "opacity-50" : ""
              }`}
              style={{
                transition: "opacity 0.3s ease",
              }}
            >
              <div>
                <span>{service.name}</span>
                <span className="block text-sm text-gray-500">
                  {service.price}
                </span>
              </div>
              <button
                onClick={() =>
                  type === "Selected Services"
                    ? handleMoveToCart(service.id)
                    : toggleSelect(service)
                }
                className={`rounded-full px-4 py-1 text-sm font-medium ${
                  movedToCart.includes(service.id)
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : selectedServices.some((s) => s.id === service.id)
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
                disabled={movedToCart.includes(service.id)} 
              >
                {movedToCart?.includes(service.id)
                  ? "Moved"
                  : selectedServices.some((s) => s.id === service.id)
                  ? "Remove"
                  : "Add"}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">
          No services available for this category.
        </p>
      )}

      {type === "Selected Services" && services.length > 0 && (
        <button
          onClick={() =>
            services.forEach((service) => handleMoveToCart(service.id))
          }
          className="mt-4 w-full bg-customblack text-white py-2 rounded"
          style={{
            transition: "background-color 0.3s ease, transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Move to Cart
        </button>
      )}
    </div>
  );
};

export default ServiceList;
