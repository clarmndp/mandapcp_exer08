import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

//add to cart and remove from cart logic
export const ShopContextProvider = ({ children }) => {
  //state to manage items in shopping cart
  const [cartItems, setCartItems] = useState({});

  //passes itemId to display specific item
  //adds an item cart
  const addToCart = (itemId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: (prevItems[itemId] || 0) + 1,
    }));
  };

  //removes an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1;
      } else {
        delete updatedItems[itemId];
      }
      return updatedItems;
    });
  };

  //object states
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  //render the items included in the cart
  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};