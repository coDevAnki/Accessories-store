import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../selectors/cartSelectors";
import Button from "../Button/Button";
import CartItems from "../CartItems/CartItems";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      {cartItems.map((cartItem) => (
        <CartItems key={cartItems.id} details={cartItem} />
      ))}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
