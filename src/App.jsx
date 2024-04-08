import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Pizza from './views/Pizza';
import Carrito from './views/Carrito';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/carrito" element={<Carrito />} />
        {/* Puedes agregar más rutas aquí si es necesario */}
      </Routes>
    </Router>
  );
}

export default App;


