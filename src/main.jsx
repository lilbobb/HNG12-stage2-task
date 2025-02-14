import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { CartProvider } from "./component/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
