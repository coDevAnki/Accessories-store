import React from "react";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import { addToCartAction } from "../../redux/actions";
import { selectItem, shopSelector } from "../../selectors/shopSelector";
import "./Itempage.scss";

const ItemPage = ({ item, category, addToCart, shop }) => {
  console.log(shop);
  if (!item) return null;

  const { imageUrl, price, name } = item;
  return (
    <div className="item_page reveal">
      <div className="item_img_container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="item_details">
        <p>{category}</p>
        <h1>{name}</h1>
        <p>30-Day Guarantee | 1-Year Warranty</p>
        <h3>Rs {price}</h3>
        <Button onClick={() => addToCart(item)}>add to cart</Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state, {params: { category, nameId }} ) => {
  if (!category || !nameId) {
    return state;
  }
  let id = +nameId.slice(nameId.lastIndexOf("_") + 1);
  console.log(category, id);
  return {
    category,
    item: selectItem(category, id)(state),
    shop: shopSelector(state),
  };
};
export default connect(mapStateToProps, { addToCart: addToCartAction })(
  ItemPage
);
