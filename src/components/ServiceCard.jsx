import React from "react";

const ServiceCard = ({ id, name, price, description }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md hover:shadow-lg transition">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold text-blue-600">${price}</span>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
