import { useState, useEffect } from "react";

export const useCustomer = () => {
  const [customerDetails, setCustomerDetails] = useState(() => {
    const storedData = localStorage.getItem("customerDetails");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("customerDetails", JSON.stringify(customerDetails));
  }, [customerDetails]);

  const saveCustomerDetails = (details) => {
    console.log("in hook details:", details);
    setCustomerDetails((prev) =>
      Array.isArray(prev) ? [...prev, details] : [details]
    );
  };

  const clearCustomerDetails = () => {
    setCustomerDetails([]);
    localStorage.removeItem("customerDetails");
  };

  return [customerDetails, saveCustomerDetails, clearCustomerDetails];
};
