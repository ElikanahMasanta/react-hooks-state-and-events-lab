import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleCartClick() {
    setInCart((inCart) => !inCart)
  }

  const cartState = inCart ? "in-cart" : "" ;

  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={inCart ? "remove" : "add"}
        onClick={handleCartClick}
      >
        {inCart ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
