import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../hooks/useCart";
import { useCustomer } from "../hooks/useCustomer";
import Sidebar from "../components/Sidebar";
import CartCard from "../components/CartCard";
import Customerdetails from "../components/Customerdetails";
import PaymentFlow from "../components/PaymentFlow";

const CartPage = () => {
  // const navigate = useNavigate();
  const [cart, addToCart, removeFromCart] = useCart();
  const [simulatePayment, setsimulatePayment] = useState(false);
  const [customerdata, saveCustomerDetails, clearCustomerDetails] =
    useCustomer();
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [isCartExited, setIsCartExited] = useState(false);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.pricetag * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleProceedToCheckout = () => {
    const date = new Date();
    if (
      !customerDetails.name ||
      !customerDetails.email ||
      !customerDetails.phone ||
      !customerDetails.address
    ) {
      alert("Please fill out all customer details before proceeding.");
      return;
    }

    // alert(`order confirmed for ${customerDetails.name}`);
    console.log("Customer Details:", customerDetails);
    console.log("Cart Items:", cart);

    saveCustomerDetails({
      customerinfo: customerDetails,
      orderinfo: cart,
      TimeandDate: date,
      bill: totalAmount,
    });
    localStorage.removeItem("cart");
    setsimulatePayment(true);
  };

  return (
    <Sidebar>
      {!simulatePayment ? (
        <div className="container mx-auto p-4 ">
          <h1 className="text-3xl font-bold text-center mb-6">Your Cart 🛒</h1>

          <div className="relative no-scrollbar">
            <AnimatePresence onExitComplete={() => setIsCartExited(true)}>
              {!showForm && (
                <motion.div
                  key="cart"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -200 }}
                  className="space-y-6"
                >
                  {cart.length === 0 ? (
                    <motion.p
                      className="text-center text-lg text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Your cart is empty.
                    </motion.p>
                  ) : (
                    <>
                      <h2 className="text-2xl font-semibold mb-4">
                        Cart Details
                      </h2>
                      <div>
                        <ul className="space-y-4">
                          {cart.map((item, index) => (
                            <CartCard item={item} key={index} />
                          ))}
                        </ul>

                        <motion.div
                          className="mt-6 flex justify-between items-center p-4 bg-gray-100 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <span className="text-xl font-semibold">
                            Total Amount
                          </span>
                          <span className="text-xl">
                            ${totalAmount.toFixed(2)}
                          </span>
                        </motion.div>
                      </div>
                    </>
                  )}

                  {cart.length > 0 && (
                    <div className="mt-6 text-center">
                      <motion.button
                        onClick={() => {
                          setShowForm(true);
                          setIsCartExited(false);
                        }}
                        className="bg-customblack text-white px-6 py-3 rounded-full text-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Add Customer Details
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {showForm && isCartExited && (
              <Customerdetails
                customerDetails={customerDetails}
                handleInputChange={handleInputChange}
                handleProceedToCheckout={handleProceedToCheckout}
              />
            )}
          </div>
        </div>
      ) : (
        <PaymentFlow simulate={simulatePayment} />
      )}
    </Sidebar>
  );
};

export default CartPage;
