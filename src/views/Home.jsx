import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Simulación de datos de pizzas
  const pizzas = [
    { id: 1, name: 'Pizza Margherita', price: 10 },
    { id: 2, name: 'Pizza Pepperoni', price: 12 },
    { id: 3, name: 'Pizza Hawaiana', price: 11 }
  ];

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
