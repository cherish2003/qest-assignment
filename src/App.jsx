import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/Cartpage";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import BillingPage from "./pages/Billingpage";
import PaymentFlow from "./components/PaymentFlow";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/bills" element={<BillingPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
    </Routes>
  );
}

export default App;
