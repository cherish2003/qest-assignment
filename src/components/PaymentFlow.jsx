import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";
import successAnimation from "../assets/doneani.json";

const PaymentFlow = ({ simulate }) => {
  const [step, setStep] = useState("idle");
  const navigate = useNavigate();

  useEffect(() => {
    if (simulate) {
      startPaymentProcess();
    }
  }, [simulate]);

  const startPaymentProcess = () => {
    setStep("processing");

    setTimeout(() => {
      setStep("success");
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="w-80 h-80">
        {step === "idle" && (
          <motion.button
            onClick={startPaymentProcess}
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Payment
          </motion.button>
        )}

        {step === "processing" && (
          <>
            <Lottie animationData={loadingAnimation} loop />
            <p className="text-lg font-semibold text-gray-700 mt-4 text-center">
              Processing Payment...
            </p>
          </>
        )}

        {step === "success" && (
          <>
            <Lottie
              animationData={successAnimation}
              loop={false}
              onAnimationEnd={setTimeout(() => {
                navigate("/bills");
              }, 3500)}
            />
            <p className="text-lg font-semibold text-green-600 mt-1 text-center">
              Payment Successful!
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentFlow;
