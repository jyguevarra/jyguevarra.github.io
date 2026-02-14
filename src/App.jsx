import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact";
import PaymentDelivery from "./pages/PaymentDelivery";
import ShoppingCart from "./pages/ShoppingCart";
import ProductCatalog from "./pages/ProductCatalog";
import TransactionConfirmation from "./pages/TransactionConfirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/PaymentDelivery" element={<PaymentDelivery />} />
      <Route path="/ShoppingCart" element={<ShoppingCart />} />
      <Route path="/ProductCatalog" element={<ProductCatalog />} />
      <Route path="/TransactionConfirmation" element={<TransactionConfirmation />} />
    </Routes>
  )
}

export default App
