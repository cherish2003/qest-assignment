import React from "react";

const ServiceList = ({
  type,
  emoji,
  color,
  services = [],
  selectedServices,
  toggleSelect,
}) => (
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
            className="flex justify-between bg-white p-2 rounded shadow hover:shadow-lg transition items-center"
          >
            <div>
              <span>{service.name}</span>
              <span className="block text-sm text-gray-500">
                {service.price}
              </span>
            </div>
            <button
              onClick={() => toggleSelect(service)}
              className={`rounded-full px-4 py-1 text-sm font-medium ${
                selectedServices.some((s) => s.id === service.id)
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {selectedServices.some((s) => s.id === service.id)
                ? "Remove"
                : "Add"}
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">No services available for this category.</p>
    )}
  </div>
);

export default ServiceList;
