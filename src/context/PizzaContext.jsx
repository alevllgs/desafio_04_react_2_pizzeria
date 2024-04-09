import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  pizzas: [],
  cart: []
};

const PizzaContext = createContext();

const pizzaReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return { ...state, pizzas: action.payload };
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.cart.find(item => item.id === action.payload.id);
      if (itemToRemove && itemToRemove.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
          )
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id)
        };
      }
    default:
      return state;
  }
};

export const PizzaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pizzaReducer, initialState);

  const getPizzas = async () => {
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    dispatch({ type: 'SET_PIZZAS', payload: data });
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;

