import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

const Cart = ({ Appliancesitems, Gadgetitems, Accessoriesitems }) => {
  const { cartItems } = useContext(ShopContext);

  const allItems = [...Appliancesitems, ...Gadgetitems, ...Accessoriesitems];

  return (
    <ul>
      {allItems.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <li key={item.id}>
              {item.name} - {item.price} (x{cartItems[item.id]})
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default Cart;