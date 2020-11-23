import React from "react";
import { connect } from "react-redux";
import { addToCartAction } from "../../redux/actions";
import Button from "../Button/Button";
import "./CollectionItem.scss";

const CollectionItem = ({ item, addToCart, cartItems }) => {
  const { name, imageUrl, price, id } = item;
  const addedInCart = cartItems.some((cartItem) => cartItem.id === id);

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: "#f1f1f1",
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      {addedInCart ? (
        <Button inverted onClick={() => addToCart(item)}>
          IN YOUR CART
          <br /> ADD MORE
        </Button>
      ) : (
        <Button inverted onClick={() => addToCart(item)}>
          ADD TO CART
        </Button>
      )}
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => {
  return { cartItems };
};

export default connect(mapStateToProps, { addToCart: addToCartAction })(
  CollectionItem
);
