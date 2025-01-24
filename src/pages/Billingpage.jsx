import React from "react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import { useCustomer } from "../hooks/useCustomer";
import Sidebar from "../components/Sidebar";

const BillingPage = () => {
  const [customerDetails, saveCustomerDetails, clearCustomerDetails] =
    useCustomer();
  const downloadPDFReceipt = (customer) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Receipt", 10, 10);
    doc.setFontSize(12);
    doc.text("Customer Details:", 10, 20);
    doc.text(`Name: ${customer.customerinfo.name}`, 10, 30);
    doc.text(`Email: ${customer.customerinfo.email}`, 10, 40);
    doc.text(`Phone: ${customer.customerinfo.phone}`, 10, 50);
    doc.text(`Address: ${customer.customerinfo.address}`, 10, 60);

    doc.text("Order Details:", 10, 80);
    let startY = 90;
    customer.orderinfo.forEach((item, index) => {
      doc.text(
        `${index + 1}. ${item.name} (Quantity: ${item.quantity}, Price: $${
          item.pricetag
        })`,
        10,
        startY
      );
      startY += 10;
    });

    doc.text(`Total Bill: $${customer.bill}`, 10, startY + 10);
    doc.text(
      `Date: ${new Date(customer.TimeandDate).toLocaleString()}`,
      10,
      startY + 20
    );

    doc.save(`receipt-${customer.customerinfo.name}.pdf`);
  };

  return (
    <Sidebar>
      <div className="container mx-auto overflow-scroll p-4 no-scrollbar">
        <h1 className="text-3xl font-bold text-center mb-6">
          Billing Information
        </h1>
        {customerDetails?.length === 0 ? (
          <p className="text-center text-gray-500">
            No billing information available.
          </p>
        ) : (
          <div className="space-y-6">
            {customerDetails
              ?.slice() 
              .sort(
                (a, b) =>
                  new Date(b.TimeandDate).getTime() -
                  new Date(a.TimeandDate).getTime()
              ) 
              .map((customer, index) => (
                <motion.div
                  key={index}
                  className="p-4 border rounded-lg shadow-sm bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold">
                    Customer: {customer.customerinfo.name}
                  </h2>
                  <p>Email: {customer.customerinfo.email}</p>
                  <p>Phone: {customer.customerinfo.phone}</p>
                  <p>Address: {customer.customerinfo.address}</p>
                  <p className="mt-2 font-semibold">Order Details:</p>
                  <ul className="space-y-2 mt-2">
                    {customer.orderinfo.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex justify-between items-center p-2 border rounded bg-gray-100"
                      >
                        <span>{item.name}</span>
                        <span>
                          Quantity: {item.quantity || 1}, Price: $
                          {item.pricetag}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-semibold">
                      Total Bill: ${customer.bill || "0"}
                    </span>
                    <motion.button
                      onClick={() => downloadPDFReceipt(customer)}
                      className="bg-customblack text-white px-4 py-2 rounded hover:cursor-pointer"
                      whileHover={{ scale: 1.0 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download PDF Receipt
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </div>
        )}
      </div>
    </Sidebar>
  );
};

export default BillingPage;
