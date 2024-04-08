import React from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams();

  // Simulación de obtener los detalles de una pizza
  const pizza = { id: id, name: 'Pizza Margherita', price: 10, description: 'Tomato sauce, mozzarella, and fresh basil' };

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default Pizza;

