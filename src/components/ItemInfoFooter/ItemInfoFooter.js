import React from "react";
import "./ItemInfoFooter.scss";

const ItemInfoFooter = ({ name, price, forPage }) => {
  return (
    <div className={`collection-footer ${forPage}`}>
      <div className="name">{name}</div>
      <span className="price">Rs {price}</span>
    </div>
  );
};

export default ItemInfoFooter;
