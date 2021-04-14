import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCartAction } from "../../redux/actions";
import Button from "../Button/Button";
import ItemInfoFooter from "../ItemInfoFooter/ItemInfoFooter";
import "./CollectionItem.scss";

const CollectionItem = ({
  addToCart,
  forPage,
  item,
  category,
  addedInCart,
}) => {
  const { name, imageUrl, price, id } = item;
  return (
    <div className={`collection-item ${forPage}-wrapper`}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: "#f1f1f1",
        }}
      />
      <Link to={`/shop/${category}/${name}_${id}`} className="link"></Link>
      <ItemInfoFooter forPage={forPage} name={name} price={price} />
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
