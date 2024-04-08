import React, { createContext, useReducer } from 'react';

const initialState = {
  pizzas: [],
  cart: []
};

const PizzaContext = createContext();

const pizzaReducer = (state, action) => {
  switch (action.type) {
    // Agrega la lógica para manejar las acciones
    default:
      return state;
  }
};

export const PizzaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pizzaReducer, initialState);

  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
