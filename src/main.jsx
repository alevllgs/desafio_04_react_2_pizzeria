import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { PizzaProvider } from './context/PizzaContext'; // Asegúrate de importar PizzaProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaProvider> {/* Envuelve tu App con PizzaProvider */}
        <App />
      </PizzaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
