import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

//accessories component to display accessories item cards w/ add to cart functionality
function Accessories({ items }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <div className="item-card" key={index}>
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button onClick={() => addToCart(item.id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Accessories;
