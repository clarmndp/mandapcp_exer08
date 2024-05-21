import React, { createContext, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= 12; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};