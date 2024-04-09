import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import PizzaProvider  from "./context/PizzaContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <PizzaProvider>
      <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

      </PizzaProvider>
    </BrowserRouter>
  );
};

export default App;
