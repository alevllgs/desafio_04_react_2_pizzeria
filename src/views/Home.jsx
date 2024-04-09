import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div>
      <h1>Catálogo de Pizzas</h1>
      <ul>
        {pizzas.map(pizza => (
          <li key={pizza.id}>
            <Link to={`/pizza/${pizza.id}`}>{pizza.name}</Link> - ${pizza.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

