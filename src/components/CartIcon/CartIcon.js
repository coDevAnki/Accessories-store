import React from "react";
import { ReactComponent as CartLogo } from "../../assets/shoppingbag.svg";
import "./CartIcon.scss";

const CartIcon = () => {
  return (
    <div className="cart-logo">
      <CartLogo />
      <span className="cart-amount">1</span>
    </div>
  );
};

export default CartIcon;
