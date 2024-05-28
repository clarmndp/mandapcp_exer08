import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

const Cart = ({ Appliancesitems, Gadgetitems, Accessoriesitems }) => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  const allItems = [...Appliancesitems, ...Gadgetitems, ...Accessoriesitems];

  return (
    <ul>
      {allItems.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <li key={item.id}>
              {item.name} - {item.price} (x{cartItems[item.id]})
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default Cart;