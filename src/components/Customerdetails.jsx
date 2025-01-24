import React from "react";
import { motion } from "framer-motion";

const Customerdetails = ({
  customerDetails,
  handleInputChange,
  handleProceedToCheckout,
}) => {
  return (
    <motion.div
      key="form"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-md no-scrollbar border  max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Customer Details
      </h2>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={customerDetails.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={customerDetails.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="john.doe@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={customerDetails.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="+1234567890"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            value={customerDetails.address}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="123 Main St, Springfield"
            rows="4"
          ></textarea>
        </div>
      </form>

      <div className="mt-8 text-center">
        <motion.button
          onClick={handleProceedToCheckout}
          className="bg-customblack text-white px-6 py-3 rounded-full text-lg shadow focus:outline-none focus:ring-2 focus:ring-customblack focus:ring-offset-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Proceed to Checkout
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Customerdetails;
