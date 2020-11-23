import React from "react";
import "./CartItems.scss";

const CartItems = ({ details }) => {
  const { name, imageUrl, price, quantity } = details;
  return (
    <div className="cart-items-container">
      <img src={imageUrl} alt="name" />
      <div>
        {name}
        <br />
        <span>
          {quantity} x Rs {price}
        </span>
      </div>
    </div>
  );
};

export default CartItems;
