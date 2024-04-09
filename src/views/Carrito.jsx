import React from 'react';

const Carrito= () => {

  const cartItems = [
    { id: 1, name: 'Pizza Margherita', price: 10, quantity: 2 },
    { id: 2, name: 'Pizza Pepperoni', price: 12, quantity: 1 }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Carrito;
